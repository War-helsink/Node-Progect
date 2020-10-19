import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'app-admin-item',
    styleUrl: 'app-admin-item.css',
})


export class AppAdminItem {
    @Prop() article;



    render() {
        return (
            
            <div class="border max">
                <div class="img">
                    <ion-img src={this.article.img.url}></ion-img>
                </div>
                <div>
                    <span class="content-name">{this.article.name}</span><br/>
                    <span class="date">{this.article.date}</span>
                </div>
                <div>
                    <span class="content-price">{this.article.price}$</span>
                </div>
                <div>
                    <span>Specifications:</span><br/>
                    <span class="block specifications link"><span class="color">Color:</span>{this.article.specifications.color}</span>
                    <span class="block specifications link"><span class="size">Size:</span>{this.article.specifications.size}</span>
                    <span class="block specifications link"><span class="weight">Weight:</span>{this.article.specifications.weight}</span>
                </div>
                <div>

                </div>


            </div>
        );
    }
}
