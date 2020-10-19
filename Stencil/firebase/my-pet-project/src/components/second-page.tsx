import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'second-page',
})
export class secondPage {
  @Prop() uid: any;


  render() {
    console.log("render", this.uid);
    return [
      <div>
        <ion-router-link href="/todo-list">second-page</ion-router-link>
        <todo-list />
      </div>
    ];
  }
}
