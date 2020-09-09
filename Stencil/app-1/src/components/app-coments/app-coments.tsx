import { Component, h,State, Prop, Watch} from '@stencil/core';

@Component({
    tag: 'app-coments',
})



export class AppComents {
    @Prop() obnowFuctions;
    @Prop() idComent: number;
    @Prop() sendMessages;
    @State() comment;
    private obnow = true;
    

    @Watch('obnowFuctions')
    watchHandler() {
        this.obnow = true;
    }

    async jsonArticles(url) {
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            return json;
        } else {
        }
    }



    onClickLike(id_coment, like_or_dislike) {
        let url;

        if (like_or_dislike)
            url = `/comment/like/${id_coment}/`
        else
            url = `/comment/dislike/${id_coment}/`

        this.jsonArticles(url).then(
            (json) => {
                alert(json['text']);
                if (json['ok']) {
                    this.obnow = true;
                    this.obnowFuctions();
                }

            }
        );

    }

    componentWillRender() {
        if(this.obnow)
            if (this.idComent)
                this.sendMessages(`/coments/${this.idComent}/`).then((json) => {
                    this.obnow = false;
                    this.comment = json;
                });
    }

    generateComens() {
        let coments = [];
        if (this.comment) {
            if (this.comment.length >= 1) {
                for (let i = 0; i < this.comment.length; i++) {

                    coments.push(
                        <ion-col size="12">
                            <ion-card color="dark">
                                <ion-card-header>
                                    <ion-card-subtitle>
                                        <span onClick={() =>  this.onClickLike(this.comment[i].id, true)}><ion-icon name="heart-outline"></ion-icon>{this.comment[i].articles_like}</span>
                                        <span onClick={() =>  this.onClickLike(this.comment[i].id,false)}><ion-icon name="heart-dislike"></ion-icon>{this.comment[i].articles_unlike}</span>
                                    </ion-card-subtitle>
                                    <ion-card-title>{this.comment[i].User_acaunt}</ion-card-title>
                                </ion-card-header>

                                <ion-card-content>
                                    {this.comment[i].comment_text}
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    );
                }
            } else {
                coments.push(
                    <ion-col size="12" >
                        <ion-card color="dark">
                            <ion-card-header>
                                <ion-card-title>No comments yet</ion-card-title>
                            </ion-card-header>
                            <ion-card-content>
                                No comments yet
                            </ion-card-content>
                        </ion-card>
                    </ion-col>

                );

            }
        }
        return coments;
    }


    render() {
        return [

           
                <ion-grid fixed>
                    <ion-row>
                        {this.generateComens()}
                    </ion-row>
                </ion-grid>

            

        ];
    }
}
