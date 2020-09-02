import { Component, h, Prop, State } from '@stencil/core';

@Component({
    tag: 'app-coments',
})



export class AppComents {
    @Prop() idComent: number;
    @State() comment;


    async sendMessages(url) {
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            return json;
        } else {

        }
    }

    connectedCallback() {
        if (!this.comment)
            if (this.idComent)
                this.sendMessages(`/coments/${this.idComent}/`).then((json) => {
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
                                        <ion-icon name="heart-outline"></ion-icon>{this.comment[i].articles_like}
                                        <ion-icon name="heart-dislike"></ion-icon>{this.comment[i].articles_unlike}

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
                    <ion-col size="12">
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

            <ion-col size="12">
                <ion-grid fixed>
                    <ion-row>
                        {this.generateComens()}
                    </ion-row>
                </ion-grid>

            </ion-col>

        ];
    }
}
