import {Component, h, Prop, EventEmitter, Event} from "@stencil/core";
// import {TodoItem} from "../../models";

@Component({
  tag: "todo-item"
})
export class TodoList {

  @Prop() description: any;

  @Event() changeIsDone: EventEmitter;

  render() {
    console.log('item render', this.description);
    return [
      <input type="checkbox" checked={this.description.isDone} onChange={() => this.changeIsDone.emit({id: this.description.id, value: !this.description.isDone})} />,
      <span style={this.description.isDone ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{this.description.title}</span>
    ]
  }
}
