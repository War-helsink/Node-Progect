import {Component, h, Prop, State} from "@stencil/core";
import state from "../store";

@Component({
  tag:"todo-creator"
})
export class TodoCreator {
  @Prop() addTodoItem : (title: string) => void;
  @Prop() deleteAllTodoItem : () => void;

  @State() value: string = "";

  render(){
    return [
      <ion-input type="text" name="todo title" onIonChange={e => this.value = e.detail.value}/>,
      <ion-button onClick={() => this.addTodoItem(this.value)}>add</ion-button>,
      <ion-button onClick={() => this.deleteAllTodoItem()}>delete all</ion-button>,
      <span>total: {state.itemsLength}</span>
      ]
  }
}

