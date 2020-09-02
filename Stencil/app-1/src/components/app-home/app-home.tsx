import { Component, h ,Prop} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})



export class AppHome {
  @Prop() id_tema:number;
  @Prop() id_articles: number;
  


  render() {
  
    return [
      <ion-content>
        <ion-grid fixed>
          <ion-row>
            <ion-col size="12" size-lg="10">
              <app-articles id_tema={this.id_tema} id_articles={this.id_articles} />
            </ion-col>

            <ion-col size="12" size-lg="2">
              <app-sitebar />
            </ion-col>

          </ion-row>
        </ion-grid>
      </ion-content>


    ];
  }
}
