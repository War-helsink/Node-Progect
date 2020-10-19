import { Component, h, State, Prop } from '@stencil/core';
import state from "../../../../../store";

@Component({
    tag: 'app-articles-price',
    styleUrl: 'app-articles-price.css',
})
export class AppArticlesPrice {
    @Prop() initialMax;
    @Prop() initialMin;
    //@ts-ignore
    @State() min = 0;
    //@ts-ignore
    @State() max = 10000;

    connectedCallback() {
        if (this.initialMin)
            this.min = this.initialMin;
        if (this.initialMax)
            this.max = this.initialMax;
    }

    onClickOk() {
        if (!isNaN(this.min))
            if (this.min < this.max)
                //@ts-ignore
                state.newFunctionArticles.obj.price.min = this.min
            else
                //@ts-ignore
                this.min = state.newFunctionArticles.obj.price.min



        if (!isNaN(this.max))
            if (this.max > this.min)
                //@ts-ignore
                state.newFunctionArticles.obj.price.max = this.max
            else
                //@ts-ignore
                this.max = state.newFunctionArticles.obj.price.max
        state.newFunctionArticles.startFunction();
    }



    render() {
        return [
            <div>
                <span class="text-header">Price</span>
            </div>,
            <div class="flex">
                <input onInput={(event) => {
                    //@ts-ignore
                    this.min = Number(event.target.value);
                }} class="input-price" type="text" value={this.min} />
                <span class="span-margin flex flex-center">—</span>
                <input onInput={(event) => {
                    //@ts-ignore
                    this.max = Number(event.target.value);
                }} class="input-price" type="text" value={this.max} />
                <button onClick={() => this.onClickOk()} class="price-button">Ok</button>
            </div>,
            <ion-range min={this.initialMin} max={this.initialMax} color="dark" dualKnobs={true} pin={true}
                value={{
                    "lower": this.min,
                    "upper": this.max,
                }}
                onIonChange={ev => {
                    //@ts-ignore
                    this.max = ev.target.value.upper;
                    //@ts-ignore
                    this.min = ev.target.value.lower;
                }}>
            </ion-range>

        ];
    }
}
