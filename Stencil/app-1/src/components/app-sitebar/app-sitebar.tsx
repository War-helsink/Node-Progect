import { Component, h,State } from '@stencil/core';

@Component({
    tag: 'app-sitebar',
    styleUrl: 'app-sitebar.scss'
})


export class AppSitebar {
    @State() sitebar;

    
    async jsonArticles() {
        let response = await fetch('/sitebar/');
        if (response.ok) {
            let json = await response.json();

            
            return json;
        } else {
            
        }

    }
    connectedCallback() {
        if (!this.sitebar) 
            this.jsonArticles().then((json) => {
                this.sitebar = json;
            });
    }






    generationSitebar() {
        let sitebar = [];
        if(this.sitebar)
            for (let i = 0; i < this.sitebar.length; i++)
                sitebar.push(
                    <ion-item  button href={`/topic/${this.sitebar[i].id}`} class="" lines="none" color="dark">
                        <ion-label>{this.sitebar[i].name_title}</ion-label>
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