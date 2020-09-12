import { Component, h } from '@stencil/core';
import state from '../store';


@Component({
    tag: 'todo-list',
})
export class TodoList {
    connectedCallback() {
        state.TodoItem = [...state.TodoItem, {
            id: new Date(),
            title: 'test',
            description: 'Test',
            isDone: true,
        }]
    }

    onlyRead(element: any) {
        state.TodoRead.read = !state.TodoRead.read;
     
        state.TodoRead = {...state.TodoRead}
        element.innerText = state.TodoRead.title;
    }



    render() {
        return [
            <ion-header>
                <ion-item lines="none">
                    <ion-label slot="start">
                        <ion-text color="primary">
                            <h1>Todo List</h1>
                        </ion-text>
                    </ion-label>
                    <ion-button slot="start" onClick={(event) => this.onlyRead(event.target)}>Only read</ion-button>
                </ion-item>
            </ion-header>,

            <ion-toolbar>

                <list-item />

                <todo-creator />
            </ion-toolbar>

        ];
    }
}

