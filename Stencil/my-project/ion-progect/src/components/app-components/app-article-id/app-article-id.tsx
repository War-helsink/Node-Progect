import { Component, h, State, Prop } from '@stencil/core';
import state from "../../store";


@Component({
    tag: 'app-article-id',
})
export class AppArticleId {
    @Prop() idItem: string;
    @State() intS = 0;
    @State() item;
    private obnow = true;
  

    componentWillRender() {
        if (this.obnow)
            //@ts-ignore
            state.articleDb.db.collection(state.db_name.article).doc(this.idItem).get().then((doc) => {
                let obj = doc.data();
                obj["id"] = doc.id;
                this.obnow = false;
                this.item = obj;
            })
    }






    render() {

        if (!this.item) {
            return (

                <ion-grid fixed>
                    <ion-row>
                        <ion-col size="12">
                            <ion-text >
                                <h1>Error 404</h1>
                                <h1>Not Found</h1>
                                <p>The requested URL /PageList.html was not found on this server.</p>
                                <ion-button href="articles">Articles</ion-button>
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
                            <ion-col size="12">
                                        <app-admin-id-article article={this.item} />
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-content>
            ];
    }
}
