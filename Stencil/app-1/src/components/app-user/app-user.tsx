import { Component, h, State } from '@stencil/core';

@Component({
    tag: 'app-user',
    styleUrl: 'app-user.scss'
})


export class AppUser {
    @State() user = document.querySelector('ion-input.user').querySelector('input');
    @State() passwd = document.querySelector('ion-input.passwd').querySelector('input');
    @State() radios = document.querySelector('ion-radio');

    loginSite() {
        
        
        if (this.user.value) {
            // Действия с именем 

            if (this.passwd.value) {
                // Действия с паролем
                
                if (this.radios.attributes[1].value === 'true') {
                   //Все готово сверить с сервером
                    alert('Good'); 
                
                } else {
                    alert('You bot!');
                }


            } else {
                alert("Enter your password");
            }
        } else {
            alert("Enter your name");
        }
    }




    render() {
        document.title = "User";

        return [
            <ion-grid fixed>
                <ion-row>
                    <ion-col size="12" size-lg="6" class="grids">
                        <div class="user">
                            <ion-label>Your user name:</ion-label>
                            <ion-input class="user" type="text" placeholder="User name"></ion-input>
                            <ion-label>Your password:</ion-label>
                            <ion-input class="passwd" type="password" placeholder="Your password"></ion-input>
                            <ion-label>You don't robot?</ion-label><br />
                            <ion-list>
                                <ion-radio-group allow-empty-selection name="auto" value="beef">
                                    <ion-radio></ion-radio><br />
                                    
                                </ion-radio-group>
                            </ion-list>
                            
                            <ion-button onClick={() => { this.loginSite() }}>Login</ion-button>
                        </div>
                    </ion-col>

                </ion-row>
            </ion-grid>
        ];
    }
}
