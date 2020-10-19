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
          <ion-grid fixed>
            <ion-row>
              
              <ion-col size="12">
                <todo-list />
              </ion-col>
              
            </ion-row>
          </ion-grid>

        </ion-content>
      </ion-app>
    );
  }
}
