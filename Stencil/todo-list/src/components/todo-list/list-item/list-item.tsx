import {Component, h, Prop} from "@stencil/core";
import {TodoItem,TodoRead } from "../models";

@Component({
  tag: "list-item"
})
export class ListItem {
  @Prop() todoRead :TodoRead ;
  @Prop() todoList: TodoItem[] = [];
  @Prop() changeItem: (e, v, t) => void;
  @Prop() deleteItem: (e) => void;

 

  render() {
    return(
      <div style={{display:" flex", flexDirection: "column"}}>
        {this.todoList.map((item: TodoItem) => {
          console.log('map', item);
          return (
              <todo-item  deleteItem={ this.deleteItem} todoRead={this.todoRead}  changeItem={this.changeItem} key={item.id.toString()} description={item} />
          )
        })}
      </div>
    )
  }
}
