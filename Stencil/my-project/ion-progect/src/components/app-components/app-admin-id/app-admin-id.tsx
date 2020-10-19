import { Component, h, State, Prop } from '@stencil/core';
import state from "../../store";


@Component({
    tag: 'app-admin-id',
})
export class AppAdminId {
    @Prop() idItem: string;
    @State() intS = 0;
    @State() item = [];
    @State() mode = false;
    private obnow = true;

    componentWillRender() {
        if (this.obnow)
            //@ts-ignore
            state.adminDb.db.collection(state.db_name.admin).doc(this.idItem).get().then((doc) => {
                let obj = doc.data();
                obj["id"] = doc.id;
                this.obnow = false;
                this.item = [obj];
            })
    }

    printElement() {
        if (this.mode)
            return (
                <ion-col size="12">
                    <app-form-id item={this.item[0]}/>
                </ion-col>)
        else
            return (
                <ion-col size="12">
                    {this.item.map((item) => {
                        return (
                            <app-admin-id-article article={item} />
                        )
                    })}
                </ion-col>
            )


    }

    render() {

        if (!this.item[0]) {
            return (

                <ion-grid fixed>
                    <ion-row>
                        <ion-col size="12">
                            <ion-text >
                                <h1>Error 404</h1>
                                <h1>Not Found</h1>
                                <p>The requested URL /PageList.html was not found on this server.</p>
                                <ion-button href="admin">Admin</ion-button>
                            </ion-text>

                        </ion-col>
                    </ion-row>
                </ion-grid>
            )


        } else

            return [
                <app-header-item/>,
                <ion-content>
                    <ion-grid fixed>
                        <ion-row>
                            <ion-col class="flex flex-center" size="12">
                                <ion-button onClick={()=>{this.mode = !this.mode}}>{this.mode?"Сhange":"Read"}</ion-button>
                            </ion-col>

                            {this.printElement()}

                        </ion-row>
                    </ion-grid>
                </ion-content>
            ];
    }
}
