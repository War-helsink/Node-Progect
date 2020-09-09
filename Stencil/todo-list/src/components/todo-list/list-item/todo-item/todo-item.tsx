import { Component, h, Prop, EventEmitter, Event, State } from "@stencil/core";
import { TodoRead } from "../../models";

@Component({
  tag: "todo-item",
  styleUrl: 'todo-item.css',
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
  descriptionBoolean: boolean = false;

  @Event() changeIsDone: EventEmitter;

  changeItemValue(item, event) {
    if (this.description.description !== '' && this.description.description !== undefined) {
      let element: any = event.path[1];
      let obj = { "target": element.querySelector(".descriptions") }
      this.descriptionOpen(obj, true);
    }
    this.newValue = (
      <div class="new-value">
        <textarea onInput={(el) => { this.text = el.target }} placeholder="Description..." ></textarea>
        <input onInput={(el) => { this.value = el.target }} type="text" ></input>
        <button onClick={() => {
          if (this.value.value != undefined) {
            this.changeItem(item, this.value.value, this.text.value);
            this.newValue = undefined;
          }
        }}>✓</button>
        <button onClick={() => { this.newValue = undefined }}>☠</button>
      </div>
    );
  }

  descriptionOpen(event, value) {
    let button: any = event.target;
    if ( value) {
      button.textContent = "▶";
      this.element = undefined;
    }
    else {
      button.textContent = "▼";
      this.element = [
        <div class="description">
          {this.description.description}
        </div>
      ];
    }
    this.descriptionBoolean = !this.descriptionBoolean;
  }
  


  descriptionPrint() {
    if (this.description.description !== '' && this.description.description !== undefined) {
      return (
        <button class="descriptions" onClick={(event) => { this.descriptionOpen(event, this.descriptionBoolean);}}>▶</button>
      )

    }

  }



  todoButton(item) {
    if (this.todoRead.isRead) {
      return [
        <button onClick={(event) => this.changeItemValue(item, event)}>✎</button>,
        <button onClick={() => this.deleteItem(item)}>✘</button>,
        this.newValue,
      ]
    }
  }


  render() {
    return [
      this.descriptionPrint(),
      <input type="checkbox" checked={this.description.isDone} onChange={() => this.changeIsDone.emit({ id: this.description.id, value: !this.description.isDone })} />,
      <span style={this.description.isDone ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{this.description.title}</span>,
      this.todoButton(this.description),
      this.element,

    ]
  }
}
