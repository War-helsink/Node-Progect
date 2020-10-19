import { Component, h, State } from '@stencil/core';
import state from "../../../../store";

@Component({
    tag: 'app-admin-sort',
    styleUrl: 'app-admin-sort.css',
})
export class AppAdminSort {
    @State() desc: boolean = true;


    sortItem(event) {
        //@ts-ignore
        state.newFunctionAdmin.obj.sort.argument = event.target.value;
         //@ts-ignore
        state.newFunctionAdmin.obj.sort.fromWhere = this.desc;
        state.newFunctionAdmin.startFunction();

    }

    descForm() {
        this.desc = !this.desc;
         //@ts-ignore
        state.newFunctionAdmin.obj.sort.fromWhere = this.desc;
        state.newFunctionAdmin.startFunction();
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
