import { Component, h } from '@stencil/core';



@Component({
  tag: 'app-articles',
})
export class AppAdricles {


  render() {
    return [
      <app-articles-header />,
      <ion-content>
        <div class="pixsel">
          
        
          <app-articles-menu />
        
        
        </div>
      </ion-content>
    ];
  }
}
