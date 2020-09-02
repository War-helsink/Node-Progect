import { Component, h, State, Prop} from '@stencil/core';

@Component({
    tag: 'app-articles',
})



export class AppArticles {
    @State() obnow = 0;
    @State() articles;
    @Prop() id_tema: number;
    @Prop() id_articles: number;
    private boolTest;
    private boolobnow = true;




    async jsonArticles(url) {
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            return json;
        } else {
        }
    }

    onlikeClick(id_articles, like_or_dislike) {
        let url;

        if (like_or_dislike)
            url = `/like/${id_articles}/`
        else
            url = `/dislike/${id_articles}/`

        this.jsonArticles(url).then(
            (json) => {
                alert(json['text']);
                if (json['ok']) {
                    this.boolobnow = true;
                    this.obnow = this.obnow+1;
                }
                    
            }
        );

    }

    componentWillRender(){
        let url;
        if (this.boolobnow) {
            if (this.id_tema) {
                url = `/articles/${this.id_tema}/`;
                this.boolTest = true;
            }

            else if (this.id_articles) {
                url = `/article/${this.id_articles}/`
                this.boolTest = false;
            }

            else {
                url = '/articles/';
                this.boolTest = true;
            }

            this.jsonArticles(url).then((json) => {
                this.articles = json
            });
            this.boolobnow = false;
        }
        
    }

    generationArticles() {
        if (this.boolTest) {
            let section = [];
            if (this.articles) {
                for (let i = 0; i < this.articles.length; i++) {
                    section.push(
                        <ion-col size="12" size-lg="6">
                            <ion-card color="dark">
                                <ion-card-header>
                                    <ion-card-subtitle>
                                        <ion-item lines="none" color="dark" href={`/topic/${this.articles[i].Tema_Id_Articles}`}>{this.articles[i].Temp_Articles}</ion-item>
                                        <ion-icon name="people-circle-outline"></ion-icon>{this.articles[i].articles_int}
                                        <span onClick={() => { this.onlikeClick(this.articles[i].id, true); }}><ion-icon name="heart-outline"></ion-icon>{this.articles[i].articles_like}</span>
                                        <span onClick={() => { this.onlikeClick(this.articles[i].id, false); }}><ion-icon name="heart-dislike"></ion-icon>{this.articles[i].articles_unlike}</span>
                                        {/* <ion-icon name="alarm-outline"></ion-icon>{this.articles[i].pub_date} */}
                                    </ion-card-subtitle>
                                    <ion-item lines="none" color="dark" href={`/articles/${this.articles[i].id}`}>
                                        <ion-card-title>
                                            {this.articles[i].articeles_title}

                                        </ion-card-title>
                                    </ion-item>
                                </ion-card-header>

                                <ion-card-content>{this.articles[i].articles_text}</ion-card-content>
                            </ion-card>
                        </ion-col>
                    );

                }


            }
            return section;
        } else {
            if (this.articles) {

                return [
                    <ion-col size="12">
                        <ion-card color="dark">
                            <ion-card-header>
                                <ion-card-subtitle>
                                    <ion-item lines="none" color="dark" href={`/topic/${this.articles.Tema_Id_Articles}`}>{this.articles.Temp_Articles}</ion-item>
                                    <ion-icon name="people-circle-outline"></ion-icon>{this.articles.articles_int}
                                    <span onClick={() => { this.onlikeClick(this.articles.id, true); }}><ion-icon name="heart-outline"></ion-icon>{this.articles.articles_like}</span>
                                    <span onClick={() => { this.onlikeClick(this.articles.id, false); }}><ion-icon name="heart-dislike"></ion-icon>{this.articles.articles_unlike}</span>
                                    {/* <ion-icon name="alarm-outline"></ion-icon>{this.articles[i].pub_date} */}
                                </ion-card-subtitle>
                                <ion-item lines="none" color="dark" href={`/articles/${this.articles.id}`}>
                                    <ion-card-title>
                                        {this.articles.articeles_title}

                                    </ion-card-title>
                                </ion-item>
                            </ion-card-header>

                            <ion-card-content>{this.articles.articles_text}</ion-card-content>
                        </ion-card>
                    </ion-col>,

                    <app-coments idComent={this.articles.id} />,

                    <app-coment />,




                ]




            }


        }


    }

    render() {

        return [

            <ion-grid fixed>
                <ion-row>
                    {this.generationArticles()}
                </ion-row>
            </ion-grid>



        ];
    }
}
