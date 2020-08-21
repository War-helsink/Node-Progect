import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})



export class AppHome {
  titleName(text) {
    document.title = text;
  }


  render() {
    this.titleName("Home");
    return [
      <ion-content>
        <ion-grid fixed>
          <ion-row>
            <ion-col size="12" size-lg="10">

              <app-articles></app-articles>

            </ion-col>

            <ion-col size="12" size-lg="2">

              <app-sitebar></app-sitebar>

              <app-sitebar></app-sitebar>
            </ion-col>

          </ion-row>
        </ion-grid>
      </ion-content>


    ];
  }
}
