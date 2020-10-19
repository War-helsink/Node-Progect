import { Component, h, State } from '@stencil/core';
import state from "../../../../store";

@Component({
    tag: 'app-articles-sort',
    styleUrl: 'app-articles-sort.css',
})
export class AppArticlesSort {
    @State() desc: boolean = true;


    sortItem(event) {
        //@ts-ignore
        state.newFunctionArticles.obj.sort.argument = event.target.value;
        //@ts-ignore
        state.newFunctionArticles.obj.sort.fromWhere = this.desc;
        state.newFunctionArticles.startFunction();

    }

    descForm() {
        this.desc = !this.desc;
        //@ts-ignore
        state.newFunctionArticles.obj.sort.fromWhere = this.desc;
        state.newFunctionArticles.startFunction();
    }


    render() {
        return (
            <div class="items-block flex  height">
                <select class="select-sort border-radius-left" onChange={(event) => { this.sortItem(event) }}>
                    <option value="name" >Name</option>
                    <option value="price">Price</option>
                    <option value="date">Date</option>
                </select>
                <button onClick={() => this.descForm()} class="form-button green border-radius-right">
                    {this.desc ? <ion-icon name="arrow-up-outline"></ion-icon> : <ion-icon name="arrow-down-outline"></ion-icon>}
                </button>

                
            </div>
        );
    }
}
