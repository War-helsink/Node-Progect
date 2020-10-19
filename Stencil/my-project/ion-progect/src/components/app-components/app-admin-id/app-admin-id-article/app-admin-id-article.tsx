import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'app-admin-id-article',
})
export class AppAdminIdArticle {
    @Prop() article;


    render() {

        console.log(this.article.date);
        return (


            <ion-card color="dark">
                <ion-card-header>
                    <ion-card-subtitle>
                        <ion-text >
                            <h1>{this.article.name}</h1>
                            {this.article.date}
                        </ion-text>
                        <ion-item lines="none" color="dark" ></ion-item>
                    </ion-card-subtitle>
                    <ion-item lines="none" color="dark">
                        <ion-card-title>

                            <ion-img src={this.article.img.url}></ion-img>
                        </ion-card-title>
                    </ion-item>
                </ion-card-header>

                <ion-card-content>
                    <ion-item lines="none" color="dark" >
                        <ion-label>Price: <ion-icon name="cash-outline"></ion-icon>{this.article.price}</ion-label>
                    </ion-item>
                    <ion-item lines="none" color="dark" >
                        <ion-label>Color: {this.article.specifications.color}</ion-label>
                    </ion-item>

                    <ion-item lines="none" color="dark" >
                        <ion-label>Size: {this.article.specifications.size}</ion-label>
                    </ion-item>
                    <ion-item lines="none" color="dark" >
                        <ion-label>Weight: {this.article.specifications.weight}</ion-label>
                    </ion-item>
                </ion-card-content>
            </ion-card>

        );
    }
}
