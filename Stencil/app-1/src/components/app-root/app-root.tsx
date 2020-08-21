import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',

})



export class AppRoot {

  render() {
    return (
      <ion-app>

        <app-header></app-header>


        <ion-content id="main" class="">



          <ion-router useHash={false}>
            <ion-route component="app-home" ></ion-route>
            <ion-route url="/game/" component="app-game" ></ion-route>
            <ion-route url="/user/" component="app-user" ></ion-route>
          </ion-router>
          <ion-nav />


        </ion-content>



        <my-fab></my-fab>


        <app-menu name_menu="Game"></app-menu>,

      </ion-app>
    );
  }
}
