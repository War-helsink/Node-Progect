import { Component, h, State, Prop } from '@stencil/core';
import { loadingController } from '@ionic/core';
import state from "../../../store";


@Component({
    tag: 'app-form-id',
})
export class AppFormId {
    @Prop() item;
    @State() mode = false;
    private file;
    private name;
    private price;
    private color;
    private size;
    private weight;
    private img;


    fileTest(input) {
        this.file = input.files[0];
        this.img = {
            "url": "",
            "picture": `images/${this.item.id}`,
        };
    }

    itemPublish() {
        if (this.item.name && isNaN(this.item.name))
            if (this.item.price && !isNaN(this.item.price))
                if (this.item.specifications.color && isNaN(this.item.specifications.color) &&
                    this.item.specifications.size && !isNaN(this.item.specifications.size) &&
                    this.item.specifications.weight && !isNaN(this.item.specifications.weight))
                    if (this.item.img.url && this.item.img.picture)
                        if (this.item.date) {
                            state.articleDb.updeteItem(this.item.id, this.item)
                            alert("Successful publication");
                            console.log("Publish new object:");
                        }

    }





    saveItem() {
        if (this.item) {
            let newObj = this.item
            if (this.name)
                newObj["name"] = this.name

            if (this.price && !isNaN(Number(this.price)))
                newObj["price"] = Number(this.price)

            if (this.color)
                newObj["specifications"]["color"] = this.color;

            if (this.size && !isNaN(Number(this.size)))
                newObj["specifications"]["size"] = Number(this.size);

            if (this.weight && !isNaN(Number(this.weight)))
                newObj["specifications"]["weight"] = Number(this.weight);

            newObj["id"] = this.item["id"];

            if (this.img) {
                //Update
                let img = this.item.img;
                let storageRef = state.storage.ref();
                if (img.url && img.picture) {
                    storageRef.child(img.picture).delete();
                }
                let mountainImagesRef = storageRef.child(this.img.picture);
                this.presentLoading()
                mountainImagesRef.put(this.file).then(() => {
                    mountainImagesRef.getDownloadURL().then((url) => {
                        this.img["url"] = url;
                        state.adminDb.updeteItem(this.item["id"], newObj);

                    })
                })
                newObj["img"] = this.img;
            }





            state.adminDb.updeteItem(this.item["id"], newObj);
            alert("Good!")
        }
    }

    deleteItem() {
        const routeEl = document.querySelector('ion-router');

        let img = this.item.img;
        if (img.picture) {
            let storageRef = state.storage.ref();
            storageRef.child(img.picture).delete();
        }

        state.adminDb.deleteItem(this.item["id"]);
        state.articleDb.deleteItem(this.item["id"]);
        routeEl.push("/admin")
    }


    async presentLoading() {
        const loading = await loadingController.create({
            message: 'Please wait...',
            duration: 5000,
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!', role, data);
    }




    render() {
        return (
            <ion-item lines="none" class="radius" color="dark">
                <div>
                    <ion-item lines="none" color="dark">
                        <ion-label>Change item</ion-label>
                    </ion-item>

                    <ion-item lines="none" color="dark">
                        <ion-button onClick={() => this.saveItem()}>Save</ion-button>
                        <ion-button onClick={() => this.itemPublish()}>Publish</ion-button>
                        <ion-button onClick={() => this.deleteItem()}>Delete</ion-button>
                    </ion-item>

                    <ion-item lines="none" color="dark">
                        <ion-label>Name:</ion-label><br />
                        <ion-input onInput={(event) => {
                            //@ts-ignore
                            this.name = event.target.value;
                        }} type="text" placeholder="Name"></ion-input>
                    </ion-item>
                    <ion-item lines="none" color="dark">
                        <ion-label>{this.item.name}</ion-label>
                    </ion-item>





                    <ion-item lines="none" color="dark">
                        <ion-label>Price:</ion-label>
                        <ion-input onInput={(event) => {
                            //@ts-ignore
                            this.price = event.target.value;
                        }} type="text" placeholder="Price"></ion-input>
                    </ion-item>
                    <ion-item lines="none" color="dark">
                        <ion-label>{this.item.price}</ion-label>
                    </ion-item>



                    <ion-item lines="none" color="dark">
                        <ion-label>Color:</ion-label>
                        <ion-input onInput={(event) => {
                            //@ts-ignore
                            this.color = event.target.value;
                        }} type="text" placeholder="Color"></ion-input>
                    </ion-item>
                    <ion-item lines="none" color="dark">
                        <ion-label>{this.item.specifications.color}</ion-label>
                    </ion-item>



                    <ion-item lines="none" color="dark">
                        <ion-label>Size:</ion-label>
                        <ion-input onInput={(event) => {
                            //@ts-ignore
                            this.size = event.target.value;
                        }} type="text" placeholder="Size"></ion-input>
                    </ion-item>
                    <ion-item lines="none" color="dark">
                        <ion-label>{this.item.specifications.size}</ion-label>
                    </ion-item>



                    <ion-item lines="none" color="dark">
                        <ion-label>Weight:</ion-label>
                        <ion-input onInput={(event) => {
                            //@ts-ignore
                            this.weight = event.target.value;
                        }} type="text" placeholder="Weight"></ion-input>
                    </ion-item>
                    <ion-item lines="none" color="dark">
                        <ion-label>{this.item.specifications.weight}</ion-label>
                    </ion-item>


                    <ion-item lines="none" color="dark">
                        <ion-label>Img:</ion-label>
                        <input type="file" onChange={(event) => {
                            //@ts-ignore
                            this.fileTest(event.target);
                        }}></input>
                    </ion-item>
                    <ion-item lines="none" color="dark">
                        <ion-img src={this.item.img.url}></ion-img>
                    </ion-item>



                   

                </div>
            </ion-item>
        )

    }
}
