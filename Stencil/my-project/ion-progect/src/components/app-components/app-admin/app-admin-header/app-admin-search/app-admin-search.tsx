import { Component, h } from '@stencil/core';
import state from "../../../../store";

@Component({
    tag: 'app-admin-search',
    styleUrl: 'app-admin-search.css',
})
export class AppAdminSearch {
    private name;


    searchItem() {
        if (this.name) {
            //@ts-ignore
            state.newFunctionAdmin.obj.search = this.name;
            state.newFunctionAdmin.startFunction();

        }
        else {
            this.unSearchItem();
        }
    }

    unSearchItem() {
        //@ts-ignore
        state.newFunctionAdmin.obj.search  = "";
        state.newFunctionAdmin.startFunction();
        //@ts-ignore
        document.querySelector("#search").value = "";
    }




    render() {
        return (
            <div class="flex height" >
                <input id="search" class="search-form-input border-radius-left" onInput={(event) => {
                    //@ts-ignore
                    this.name = event.target.value;
                }} type="text" placeholder="I'm looking for..." />
                <button onClick={() => this.unSearchItem()} type="button" class="form-button red"><ion-icon color="dark" name="close-circle"></ion-icon></button>
                <button onClick={() => this.searchItem()} type="button" class="form-button green border-radius-right">Search</button>
            </div>

        );
    }
}
