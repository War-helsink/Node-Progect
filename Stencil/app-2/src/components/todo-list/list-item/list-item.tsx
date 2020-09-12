import { Component, h} from '@stencil/core';
import state from "../../store";


@Component({
    tag: 'list-item',
})
    
export class ListItem{
   


    render() {
        return (
            <ion-toolbar>    
                
                {state.TodoItem.map((item) => {
                    return (
                        <todo-items item={item} />
                    )
                })}


            </ion-toolbar>
        );
    }
}

