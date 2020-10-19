import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'first-page',
})
export class AppRoot {
  @Prop() uid: any;


  render() {
    console.log("render", this.uid);
    return [
      <div>
        <ion-router-link href="/todo-list"><button>first-page</button></ion-router-link>
        <todo-list />
      </div>
    ];
  }
}
