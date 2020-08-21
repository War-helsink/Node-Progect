import { Component, h } from '@stencil/core';
import { menuController } from '@ionic/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})


export class AppHeader{

    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    }    




    render() {
      return [
        <ion-header>
              <ion-toolbar  color="dark">
                <ion-item class="ion-no-margin" lines="none"  id="dir" color="dark">
                <ion-item lines="none" color="dark" class=" ion-no-margin ion-no-border" slot="start">
                  <ion-item lines="none" onClick={() => this.openFirst()} slot="start" class="ion-no-margin ion-no-border" button color="dark">
                    <ion-label><ion-icon slot="start" onClick={() => this.openFirst()} name="list-outline"></ion-icon></ion-label>
                  </ion-item>

                  
                  <ion-item lines="none" slot="start" class=" ion-no-margin ion-no-border" href="/" color="dark">
                    <ion-label>Home</ion-label>
                  </ion-item>
                  {/* <ion-item lines="none" slot="start" class="ion-no-margin ion-no-border" href = "/" color="dark">
                    <ion-label></ion-label>
                  </ion-item> */}
                

                </ion-item>          
                    <dark-mode  slot="end" ></dark-mode>
                </ion-item>
             </ion-toolbar>
            
        </ion-header>
      ];
    }
  }
  