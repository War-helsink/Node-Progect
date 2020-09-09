import {Component, h, Prop} from "@stencil/core";

@Component({
  tag:"todo-creator"
})
export class TodoCreator {
  @Prop() addTodoItem : (title: string) => void;
  @Prop() deleteAllTodoItem : () => void;

  inputRef: any;

  render(){
    return [
      <input ref={el => this.inputRef = el} type="text" name="todo title"/>,
        <button onClick={() => {
          if(this.inputRef.value){
            this.addTodoItem(this.inputRef.value);
            this.inputRef.value = "";
          }
        }}>add</button>,
      <button onClick={() => this.deleteAllTodoItem()}>delete all</button>
      ]
  }
}

