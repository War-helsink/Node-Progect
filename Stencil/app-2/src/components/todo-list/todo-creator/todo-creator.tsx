import { Component, h } from '@stencil/core';
import state from "../../store";


@Component({
    tag: 'todo-creator',
})
    
export class TodoCreator{
    value: any;
    description: any;

    createNewList() {
        if (this.value.value) {
            state.TodoItem = [...state.TodoItem,{
                id: new Date(),
                title: this.value.value,
                description: this.description.value,
                isDone: false,
            }];
            this.value.value = "";
            this.description.value = "";
        } 
    }
    deleteTodoList() {
        state.TodoItem = [];

    }



    render() {
        return [

            <ion-input ref={el => this.value = el} type="text" placeholder="Text list"></ion-input>,
            <ion-textarea  ref={el => this.description = el}   placeholder="Description"></ion-textarea>,
            <ion-button onClick={() => { this.createNewList() }} >Create list</ion-button>,
            <ion-button onClick={()=>{this.deleteTodoList() }} >Delete all</ion-button>

        ];
    }
}

