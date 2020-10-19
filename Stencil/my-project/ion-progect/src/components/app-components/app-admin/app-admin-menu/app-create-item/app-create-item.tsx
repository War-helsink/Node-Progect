import { Component, h } from '@stencil/core';
import state from "../../../../store";


@Component({
    tag: 'app-create-item',
})
export class AppCreateItem {
    createItem() {

        let obj = {
            "name": "",
            "price": "",
            "specifications": {
                "color": "",
                "size": "",
                "weight": "",
            },
            "img": {
                "url": '',
                "picture": '',
            },
            "date": new Date().toLocaleDateString(),
        }
        state.adminDb.createItem(obj);
    }



    render() {
        return (
            <ion-button  onClick={() => this.createItem()}>Create Item</ion-button>
        );
    }
}
