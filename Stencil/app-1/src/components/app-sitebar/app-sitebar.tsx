import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-sitebar',
    styleUrl: 'app-sitebar.scss'
})


export class AppSitebar {
    onClickSitebar(event) {
        alert(event.type);
        

    }


    generationSitebar() {
        let sitebar = [];
        for (let i = 0; i < 10; i++)
            sitebar.push(
                <ion-item button onClick={(ev) => this.onClickSitebar(ev)} class="" lines="none" color="dark">
                    <ion-label>Sitebar</ion-label>
                </ion-item>
            );

        return sitebar;
    }


    render() {
        return [
            <ion-toolbar class="ion-margin-vertical sitebar">
                {this.generationSitebar()}
            </ion-toolbar>
        ];
    }
}