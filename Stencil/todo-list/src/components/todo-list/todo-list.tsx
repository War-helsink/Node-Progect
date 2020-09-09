import { Component, h, State, Listen } from "@stencil/core";
import { TodoItem, TodoRead } from "./models";


@Component({
  tag: "todo-list"
})
export class TodoList {
  @State() todoList: TodoItem[] = [
    {
      id: new Date(),
      title: 'test',
      description: 'Test',
      isDone: true
    }
  ];
  @State() todoRead: TodoRead = {
    name: "item",
    isRead: true 
  }



  @Listen("changeIsDone")
  isDoneChange(e) {
    const { id, value } = e.detail;

    const idx = this.todoList.findIndex(item => item.id === id);
    this.todoList[idx].isDone = value;
    this.todoList[idx] = { ...this.todoList[idx] };
    this.todoList = [...this.todoList];

    console.log('isDoneChange', this.todoList)
  }

  addItem(title: string) {
    this.todoList = [...this.todoList, { id: new Date(), title, description: "", isDone: false }];
  }

  changeItem(item, value , text) {
    const { id } = item;
    const idx = this.todoList.findIndex(item => item.id === id)
    this.todoList[idx].title = value,
    this.todoList[idx].description = text,
    this.todoList[idx] = { ...this.todoList[idx] };
    this.todoList = [...this.todoList]
  }

  deleteItem(item) {
    const { id } = item;
    const idx = this.todoList.findIndex(item => item.id === id)
    this.todoList.splice(idx, 1);
    this.todoList = [...this.todoList];
  }

  deleteAllItems() {
    this.todoList = []
  }

  render() {
    return [
      <div>
        <h2>Todo list
          <button onClick={(event) => {
            let text;
            if (this.todoRead.isRead)
              text = "change";
            else
              text = "only read";
            this.todoRead.isRead = !this.todoRead.isRead;
            this.todoRead = { ...this.todoRead };
            let button: any = event.target;
            button.textContent = text;
          }}>only read</button>
        </h2>
      </div>,

      <list-item deleteItem={(e)=>this.deleteItem(e)}  changeItem={(e,v,t) => this.changeItem(e,v,t)} todoRead={this.todoRead} todoList={this.todoList} />,

      <todo-creator addTodoItem={(title: string) => this.addItem(title)} deleteAllTodoItem={() => this.deleteAllItems()} />
    ]
  }
}
