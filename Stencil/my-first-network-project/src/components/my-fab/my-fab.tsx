import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-fab',
 
})
    
export class MyFab{

    render() {
        return [
                <ion-fab vertical="bottom" horizontal="end">
                        <ion-fab-button color="dark">
                            <ion-icon name="chevron-up-circle-outline"></ion-icon>
                        </ion-fab-button>

                        <ion-fab-list side="top">
                            <ion-fab-button href="https://www.facebook.com/profile.php?id=100053341571471"><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
                            <ion-fab-button href="https://www.instagram.com/__nychyporchuk__/"><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
                        </ion-fab-list>
                </ion-fab>
         
        ];
    }
}
