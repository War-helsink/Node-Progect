import { Component, h, Prop, State } from '@stencil/core';
import { TodoItem } from "../../../models";
import state from "../../../store";


@Component({
    tag: 'todo-items',
})

export class TodoItems {
    @Prop() item: TodoItem;
    @State() descriptionPrint: boolean = false;
    @State() htmlElement;
    titleName:any;
    newDescription:any;

    printDescription() {
        if (this.item.description !== "")
            return (
                <ion-button onClick={() => {
                    this.descriptionPrint = !this.descriptionPrint;
                }}
                    slot="start">{this.descriptionPrint ?
                        <ion-icon name="caret-down-outline"></ion-icon> :
                        <ion-icon name="caret-forward-outline"></ion-icon>

                    }</ion-button>
            )
    }
    printDescriptionObgect() {
        if (this.descriptionPrint)
            return (
                <ion-item lines="none">
                    <ion-label>{this.item.description}</ion-label>
                </ion-item>
            )

    }

    isDoneChange() {
        const { id } = this.item;
        const idx = state.TodoItem.findIndex(item => item.id === id);
        state.TodoItem[idx].isDone = !state.TodoItem[idx].isDone;
        state.TodoItem[idx] = { ...state.TodoItem[idx] }
        state.TodoItem = [...state.TodoItem]
    }
    deleteElementTodoList() {
        const { id } = this.item;
        const idx = state.TodoItem.findIndex(item => item.id === id);
        state.TodoItem.splice(idx, 1);
        state.TodoItem = [...state.TodoItem];


    }
    upgredeElementTodoList() {
        if (this.descriptionPrint)
            this.descriptionPrint = false;
        
        
        this.htmlElement = [
            <ion-input onInput={el=> this.titleName = el.target} type="text" placeholder="New list name"></ion-input>,
            <ion-input onInput={el=> this.newDescription = el.target} type="text" placeholder="New description"></ion-input>,
            <ion-button onClick={() => {
                if (this.titleName.value) {
                    const { id } = this.item;
                    const idx = state.TodoItem.findIndex(item => item.id === id);
                    state.TodoItem[idx].title = this.titleName.value
                    if(this.newDescription.value)
                        state.TodoItem[idx].description = this.newDescription.value
                    state.TodoItem[idx] = { ...state.TodoItem[idx] }
                    state.TodoItem = [...state.TodoItem]
                    this.htmlElement = ""
                }}}>Save</ion-button>,
            <ion-button onClick={()=>this.htmlElement = ""}>Don't save</ion-button>
                

        ]
    }


    todoButtom() {
        if (state.TodoRead.read)
            return [

                <ion-button onClick={() => { this.upgredeElementTodoList() }} slot="start">
                    <ion-icon name="create-outline"></ion-icon>
                </ion-button>,


                <ion-button onClick={() => { this.deleteElementTodoList() }} slot="start">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </ion-button>
            ]
    }





    render() {
        return [
            <ion-item lines="none">
                {this.printDescription()}

                <ion-label style={this.item.isDone ? { textDecoration: "line-through" } : { textDecoration: "none" }} slot="start">
                    <input onClick={() => { this.isDoneChange() }}
                        checked={this.item.isDone}
                        slot="start" type="checkbox" />
                    {this.item.title}
                    {this.todoButtom()}
                </ion-label>

                
            </ion-item>,
            state.TodoRead.read ? this.htmlElement:"",
            this.printDescriptionObgect()
        ];
    }
}

