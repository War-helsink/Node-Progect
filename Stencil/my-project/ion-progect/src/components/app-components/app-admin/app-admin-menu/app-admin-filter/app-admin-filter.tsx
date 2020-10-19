import { Component, h, State, Prop } from '@stencil/core';
import state from '../../../../store';

@Component({
    tag: 'app-admin-filter',
})
export class AppAdminFilter {
    @Prop() items;
    @State() colors;
    @State() sizes;
    @State() weights;

    private color = [];
    private size = [];
    private weight = [];


    colorFilter(obj) {
        if (obj.checked) {
            this.color.push(obj.value);
        } else {
            let newMass = [];
            for (let i = 0; i < this.color.length; i++) {
                if (obj.value != this.color[i]) {
                    newMass.push(this.color[i])
                }

            }
            this.color = newMass;
        }
        if (this.color.length > 0) {
            //@ts-ignore
            state.newFunctionAdmin.obj.filter.color = this.color;
            state.newFunctionAdmin.startFunction();
        }
        else {
            //@ts-ignore
            state.newFunctionAdmin.obj.filter.color = [...this.colors, ""];
            state.newFunctionAdmin.startFunction();
        }

    }

    sizeFilter(obj) {
        if (obj.checked) {
            this.size.push(obj.value);
        } else {
            let newMass = [];
            for (let i = 0; i < this.size.length; i++) {
                if (obj.value != this.size[i]) {
                    newMass.push(this.size[i])
                }

            }
            this.size = newMass;
        }
        if (this.size.length > 0) {
            //@ts-ignore
            state.newFunctionAdmin.obj.filter.size = this.size;
            state.newFunctionAdmin.startFunction();
        }
        else {
            //@ts-ignore
            state.newFunctionAdmin.obj.filter.size = [...this.sizes, ""];
            state.newFunctionAdmin.startFunction();
        }

    }
    weightFilter(obj) {
        if (obj.checked) {
            this.weight.push(obj.value);
        } else {
            let newMass = [];
            for (let i = 0; i < this.weight.length; i++) {
                if (obj.value != this.weight[i]) {
                    newMass.push(this.weight[i])
                }

            }
            this.weight = newMass;
        }
        if (this.weight.length > 0) {
            //@ts-ignore
            state.newFunctionAdmin.obj.filter.weight = this.weight;
            state.newFunctionAdmin.startFunction();
        }
        else {
            //@ts-ignore
            state.newFunctionAdmin.obj.filter.weight = [...this.weights, ""];
            state.newFunctionAdmin.startFunction();
        }
    }

    componentWillRender() {
        let color = [];
        let size = [];
        let weight = [];
        this.items.forEach((item) => {
            if (item.specifications.color)
                if (!color.find((element) => element == item.specifications.color))
                    color.push(item.specifications.color);

            if (item.specifications.size)
                if (!size.find((element) => element == item.specifications.size))
                    size.push(item.specifications.size);

            if (item.specifications.weight)
                if (!weight.find((element) => element == item.specifications.weight))
                    weight.push(item.specifications.weight);
        });
        this.colors = color;
        this.sizes = size;
        this.weights = weight;
        //@ts-ignore
        state.newFunctionAdmin.obj.filter.color = [...color, ""];
        //@ts-ignore
        state.newFunctionAdmin.obj.filter.size = [...size, ""];
        //@ts-ignore
        state.newFunctionAdmin.obj.filter.weight = [...weight, ""];
        state.newFunctionAdmin.startFunction();
    }

    unfilterItems() {
        this.color = [];
        this.size = [];
        this.weight = [];
        let checked = document.querySelectorAll("ion-checkbox");
        for (let i = 0; i < checked.length; i++) {
            checked[i].checked = false;
        }

        //@ts-ignore
        state.newFunctionAdmin.obj.filter.color = [...this.colors, ""];
        //@ts-ignore
        state.newFunctionAdmin.obj.filter.size = [...this.sizes, ""];
        //@ts-ignore
        state.newFunctionAdmin.obj.filter.weight = [...this.weights, ""];
        state.newFunctionAdmin.startFunction();
    }




    render() {
        return (
            <div>
                <ion-text>
                    <h1>Filter</h1>
                </ion-text>

                <ion-button onClick={() => this.unfilterItems()}>Cancellation</ion-button>

                <ion-radio-group id="color" >
                    <ion-list-header >
                        <ion-label>
                            <ion-text>
                                <h1>Color</h1>
                            </ion-text>
                        </ion-label>
                    </ion-list-header>

                    {this.colors.map((item) => {
                        return (
                            <ion-item onClick={(event) => {
                                //@ts-ignore
                                let obj = {
                                    //@ts-ignore
                                    "value": event.target.value,
                                    //@ts-ignore
                                    "checked": event.target.checked,
                                }
                                this.colorFilter(obj);
                            }} lines="none"  >
                                <ion-label>{item}</ion-label>
                                <ion-checkbox value={item} color="dark" slot="end"></ion-checkbox>
                            </ion-item >
                        )
                    })}


                </ion-radio-group>

                <ion-radio-group id="size" >
                    <ion-list-header >
                        <ion-label>
                            <ion-text>
                                <h1>Size</h1>
                            </ion-text>
                        </ion-label>
                    </ion-list-header>

                    {this.sizes.map((item) => {
                        return (
                            <ion-item onClick={(event) => {
                                //@ts-ignore
                                let obj = {
                                    //@ts-ignore
                                    "value": Number(event.target.value),
                                    //@ts-ignore
                                    "checked": event.target.checked,
                                }
                                this.sizeFilter(obj);
                            }} lines="none"  >
                                <ion-label>{item}</ion-label>
                                <ion-checkbox value={item} color="dark" slot="end"></ion-checkbox>
                            </ion-item >
                        )
                    })}


                </ion-radio-group>

                <ion-radio-group id="weight">
                    <ion-list-header >
                        <ion-label>
                            <ion-text>
                                <h1>Weight</h1>
                            </ion-text>
                        </ion-label>


                    </ion-list-header>


                    {this.weights.map((item) => {
                        return (
                            <ion-item onClick={(event) => {
                                //@ts-ignore
                                let obj = {
                                    //@ts-ignore
                                    "value": Number(event.target.value),
                                    //@ts-ignore
                                    "checked": event.target.checked,
                                }
                                this.weightFilter(obj);
                            }} lines="none" >
                                <ion-label>{item}</ion-label>
                                <ion-checkbox value={item} color="dark" slot="end"></ion-checkbox>
                            </ion-item >
                        )
                    })}

                </ion-radio-group>
            </div>
        );
    }
}
