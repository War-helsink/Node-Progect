import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-articles',
})



export class AppArticles {

   
    generationArticles() {
        let section = [];
        for (let i = 0; i < 9; i++)
            //Добавить общения с бекендом
            section.push(
                <ion-col size="12" size-lg="6">
                    <ion-card color="dark">
                        <ion-card-header>
                            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                            <ion-card-title>Card Title</ion-card-title>
                        </ion-card-header>

                        <ion-card-content>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            );
        return section;
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
