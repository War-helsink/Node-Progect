import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'app-article',
})



export class AppArticle {
    @Prop() json;
    @Prop() onlikeClick;


    render() {
        return (

            <ion-card color="dark">
                <ion-card-header>
                    <ion-card-subtitle>
                        <ion-item lines="none" color="dark" href={`/topic/${this.json.Tema_Id_Articles}`}>{this.json.Temp_Articles}</ion-item>
                        <ion-icon name="people-circle-outline"></ion-icon>{this.json.articles_int}
                        <span onClick={() => { this.onlikeClick(this.json.id, true); }}><ion-icon name="heart-outline"></ion-icon>{this.json.articles_like}</span>
                        <span onClick={() => { this.onlikeClick(this.json.id, false); }}><ion-icon name="heart-dislike"></ion-icon>{this.json.articles_unlike}</span>
                    </ion-card-subtitle>
                    <ion-item lines="none" color="dark" href={`/articles/${this.json.id}`}>
                        <ion-card-title>
                            {this.json.articeles_title}

                        </ion-card-title>
                    </ion-item>
                </ion-card-header>

                <ion-card-content>{this.json.articles_text}</ion-card-content>
            </ion-card>

        );
    }
}
