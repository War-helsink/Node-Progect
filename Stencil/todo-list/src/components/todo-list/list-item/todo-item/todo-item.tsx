import { Component, h, Prop, EventEmitter, Event, State } from "@stencil/core";
import { TodoRead } from "../../models";

@Component({
  tag: "todo-item"
})
export class TodoList {
  @Prop() todoRead: TodoRead;
  @Prop() description: any;
  @Prop() changeItem: (e, v, t) => void;
  @Prop() deleteItem: (e) => void;
  @State() element;
  @State() newValue;
  value: any;
  text: any;

  @Event() changeIsDone: EventEmitter;

  changeItemValue(item) {

    this.newValue = (
      <div>
         <textarea onInput={(el) => { this.text = el.target }} placeholder="Description..." ></textarea>
        <input onInput={(el) => { this.value = el.target }} type="text" ></input>
        <button onClick={() => {
          if (this.value.value != undefined) {
            this.changeItem(item, this.value.value,  this.text.value );
            this.newValue = undefined;
          }
        }}>✓</button>
        <button onClick={() => { this.newValue = undefined }}>☠</button>
      </div>
    );
  }

  descriptionPrint() {
    if (this.description.description !== '' && this.description.description !== undefined) {
      console.log("Print ", this.description.description);
      return (
        <button onClick={(event) => {
          let button: any = event.target;
          if (button.textContent === "▼") {
            button.textContent = "▶";
            this.element = undefined;
          }
          else {
            button.textContent = "▼";
            this.element = [
              <div>
                <textarea  placeholder="Description..." > {this.description.description}</textarea>
              </div>
            ];
          }
        }}>▶</button>
      )

    }

  }



  todoButton(item) {
    if (this.todoRead.isRead) {
      return [
        <button onClick={() => this.changeItemValue(item)}>✎</button>,
        <button onClick={() => this.deleteItem(item)}>✘</button>,
        this.newValue,
      ]
    }
  }


  render() {
    console.log('item render', this.description);
    console.log('item element', this.element);
    return [
      this.descriptionPrint(),
      <input type="checkbox" checked={this.description.isDone} onChange={() => this.changeIsDone.emit({ id: this.description.id, value: !this.description.isDone })} />,
      <span style={this.description.isDone ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{this.description.title}</span>,
      this.todoButton(this.description),
      this.element,

    ]
  }
}
