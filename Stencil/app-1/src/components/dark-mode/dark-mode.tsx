import { Component, State, h} from '@stencil/core';

@Component({
  tag: 'dark-mode',
  styleUrl: 'dark-mode.scss'
})

    
export class DarkMode{
    @State() state = false;
    
    darkMode(ev) {
        document.body.classList.toggle('dark', ev.detail.checked);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        prefersDark.addListener((e) => ev.detail.checked = e.matches);
    }
    


    render() {
        return [
            <ion-item class="ion-no-margin" color="dark" lines="none">
                <ion-icon slot="start" name="moon"></ion-icon>
                <ion-toggle
                    class="ion-no-margin"
                    color="medium"
                    onIonChange={ev => this.darkMode(ev)}
                    slot="end"></ion-toggle>
            </ion-item>
        ];
    }
}