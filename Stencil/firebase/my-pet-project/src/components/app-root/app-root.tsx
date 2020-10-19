import {Component, h} from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {

  render() {
    return [
      <ion-app>
        <todo-list />
      </ion-app>
    ];
  }
}
