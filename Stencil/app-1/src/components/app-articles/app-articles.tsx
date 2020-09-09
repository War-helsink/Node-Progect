import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
    tag: 'app-articles',
})



export class AppArticles {
    @State() articles;
    @Prop() obnowFuctions;
    @Prop() id_tema: number;
    @Prop() id_articles: number;
    private boolTest: boolean = true;
    private obnow: boolean = true;
   

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
                    this.obnow = true;
                    this.obnowFuctions();
                }

            }
        );

    }

    componentWillRender() {
        if (this.obnow) {
            let url;

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
                this.obnow = false;
                this.articles = json;
            });
        }


    }

    generationArticles() {
        if (this.boolTest) {
            let section = [];
            if (this.articles) {
                for (let i = 0; i < this.articles.length; i++) {
                    section.push(
                        <ion-col size="12" size-lg="6">
                            <app-article onlikeClick={(i, t) => { this.onlikeClick(i, t); }} json={this.articles[i]} />
                        </ion-col>
                    );

                }
            }
            return section;
        } else {
            if (this.articles) {
                return [
                    <ion-col size="12" >
                        <app-article onlikeClick={(i, t) => { this.onlikeClick(i, t); }} json={this.articles} />
                    </ion-col>,
                    
                    <ion-col size="12">
                        <app-coments  obnowFuctions={this.obnowFuctions} sendMessages={this.jsonArticles} idComent={this.articles.id} />
                    </ion-col>,
                    
                    <ion-col size="12">
                        <app-coment  obnowFuctions={this.obnowFuctions} id_articles={this.articles.id} />
                    </ion-col>,
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
