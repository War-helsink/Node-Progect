import { Component, h } from '@stencil/core';




@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {

  render() {
    return (
      <ion-app>

       

        <ion-content>
          
          <ion-router useHash={false}>
            <ion-route-redirect from="/" to="/admin"></ion-route-redirect>
            <ion-route url="/admin" component="app-admin" />
            <ion-route url="/admin/:idItem" component="app-admin-id"></ion-route>
            <ion-route url="/articles" component="app-articles" />
            <ion-route url="/article/:idItem" component="app-article-id" />
          </ion-router>
          <ion-nav />

        </ion-content>


      </ion-app>
    );
  }
}
