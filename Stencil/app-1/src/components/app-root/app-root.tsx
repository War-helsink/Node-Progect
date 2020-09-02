import { Component, h , State} from '@stencil/core';

@Component({
  tag: 'app-root',

})



export class AppRoot {
  @State() jsonRespons = {
    'jsons': {}
  };


  render() {
    
    return (
      <ion-app>

        <app-header/>


        <ion-content id="main" class="">



          <ion-router useHash >
            <ion-route-redirect from="/" to="/articles/"></ion-route-redirect>
            <ion-route url="/articles/" component="app-home" ></ion-route>
            <ion-route url="/articles/:id_articles" component="app-home" ></ion-route>
            <ion-route url="/topic/:id_tema" component="app-home" ></ion-route>
            <ion-route url="/game/" component="app-game" ></ion-route>
            <ion-route componentProps={this.jsonRespons} url="/user/" component="app-user" ></ion-route>
            <ion-route componentProps={this.jsonRespons} url="/registration/" component="app-registration" ></ion-route>
          </ion-router>
          <ion-nav />


        </ion-content>



        <my-fab/>


        <app-menu name_menu="Game"></app-menu>,

      </ion-app>
    );
  }
}
