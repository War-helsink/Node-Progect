import { Component, Prop,h} from '@stencil/core';


@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.scss'
})

    
export class AppMenu{
  @Prop() name_menu:string;

  

  render() {
        
        return [
            <ion-menu side="start" menuId="first" contentId="main">
            <ion-header>
              <ion-toolbar color="dark">
                        <ion-title>{this.name_menu}</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <ion-item button href="/"><ion-icon name="newspaper-outline"></ion-icon>News</ion-item>
                <ion-item button href="game/"><ion-icon name="rocket-outline"></ion-icon>Game</ion-item>
                <ion-item button href="user/"><ion-icon name="person-circle-outline"></ion-icon>User</ion-item>
                {/* <ion-item button><ion-icon name="logo-react"></ion-icon>React</ion-item>
                <ion-item button><ion-icon name="logo-android"></ion-icon>Android</ion-item>
                <ion-item button><ion-icon name="construct-outline"></ion-icon>Settins</ion-item>
                <ion-item button><ion-icon name="logo-youtube"></ion-icon>Youtube</ion-item> */}
              </ion-list>
            </ion-content>
          </ion-menu>,
        
       
        
      
        ];
    }
}