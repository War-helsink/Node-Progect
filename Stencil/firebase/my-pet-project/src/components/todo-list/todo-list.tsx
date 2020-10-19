import {Component, h, Listen} from "@stencil/core";
import state from "./store";

@Component({
  tag: "todo-list"
})
export class TodoList {
  //@ts-ignore
  db = firebase.firestore();

  @Listen("changeIsDone")
  isDoneChange(e) {
    const {id, value} = e.detail;

    const idx = state.items.findIndex(item => item.id === id);
    state.items[idx].isDone = value;
    state.items[idx] = {...state.items[idx]};
    state.items = [...state.items];
  }

  addItem(title: string) {
    const newTodo = {id: new Date(), title, description: "", isDone: false};

    this.db.collection("todos").add(newTodo);
    console.log('addItem', title);
    state.items = [...state.items, newTodo];
  }

  deleteAllItems() {
    state.items = []
  }

  componentDidLoad() {
    // for(let i = 0; i < 10; i++){
    //   const newTodo = {id:i, title: `title for todo: ${i}`, description: "", isDone: i > 5 };
    //
    //   this.db.collection("todos").add(newTodo);
    //
    //   console.log('item created ', i)
    // }

    // this.db.collection("todos")
    //   .where("isDone", "==", true)
    //   .get()
    //   .then(({docs}) => docs.forEach(doc => state.items.push(doc.data())))
    //   .then(() => state.items = [...state.items])

    // this.db.collection("todos").doc('test item').delete().then(() => console.log('deleted '))


    // this.db.collection("element").doc("BJ").set(
    //   {
    //     "name": "test",
    //     "price": 100,
    //     "specifications": {
    //         "color": "rad",
    //         "size": 100,
    //         "weight": 100,
    //     },
    //     "img": "otel.jpg",
    //     "date": new Date(),
    // }

    // );




    // "updatesPage": function(){
    //     let objs = [];
    //     this.db.collection("element").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             let obj = doc.data();
    //             obj["id"] = doc.id;
    //             objs.push(obj);
    //     });
    //     this.object = objs;
    //     });
    // },




  }

  render() {
    return [
      <h1>Todo list</h1>,
      <list-item todoList={state.items}/>,
      <todo-creator addTodoItem={(title: string) => this.addItem(title)}
                    deleteAllTodoItem={() => this.deleteAllItems()}/>
    ]
  }
}
