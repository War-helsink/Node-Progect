import { Component, h , Prop} from '@stencil/core';

@Component({
    tag: 'app-registration'
})


export class AppRegistration {
    @Prop() jsons;
    private name;
    private login;
    private email;
    private passwdFirst;
    private passwdSecond;
    private radios;
    private form;
    private number;


    componentDidRender() {
        this.form = document.querySelector('form.formRegist');
        this.name = this.form.querySelector('.name');
        this.login = this.form.querySelector('.logins');
        this.email = this.form.querySelector('.email');
        this.passwdFirst = this.form.querySelector('.passwd-first');
        this.passwdSecond = this.form.querySelector('.passwd-second');
        this.radios = document.querySelector('ion-radio.regisration');
        this.number = this.form.querySelector('.number');
    }
    clearInput() {
        this.name.value = '';
        this.login.value = '';
        this.email.value = '';
        this.number.value = '';
        this.passwdFirst.value = '';
        this.passwdSecond.value = '';
        this.radios.attributes[1].value = 'false';
        this.radios.classList.remove('radio-checked');
    }
    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }



    async sendMessages(url, postData,csrftoken) {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: postData
        });
        if (response.ok) {
            let json = await response.json();


            return json;
        } else {

        }

    }




    onRegistration() {
        //Registration logic 
        if (this.name.value !== '') {
            if (this.login.value !== '') {
                if (this.email.value !== '') {
                    if (this.passwdFirst.value !== '' && this.passwdSecond.value !== '' && this.passwdFirst.value === this.passwdSecond.value) {
                        if (this.number.value !== '') {
                            if (this.radios.attributes[2].value === 'true') {
                                let data = new FormData(this.form);
                                let obj = {};
                                data.forEach(function (value, key) {
                                    obj[key] = value;
                                });
                                let json = JSON.stringify(obj);
                                let csrftoken = this.getCookie('csrftoken');
                            
                                this.sendMessages('/registret/', json, csrftoken).then(function (json) {
                                    alert(json['text']);
                                });
                            
                            
                            
                            
                            
                            } else {
                                alert('You bot!');
                            }
                        } else {
                            alert('You haven\'t seen the phone number!');
                        }
                    }
                    else {
                        alert('Repeat password correctly');
                    }

                }
                else {
                    alert('Enter your email');
                }
            } else {
                alert('Enter your login');
            }
        } else {
            alert('Enter your name');
        }



    }


    render() {
        document.title = "Registration";

        return [
            <ion-grid fixed>
                <ion-row>
                    <ion-col size="12" size-lg="6" class="grids">
                        <div class="user">
                            <form class="formRegist">
                                <ion-label>Your user name:</ion-label>
                                <div>
                                    <input class="name" type="text" name="name" placeholder="User name" />
                                </div>
                                <ion-label>Your login:</ion-label>
                                <div>
                                    <input class="logins" type="text" name="login" placeholder="User login" />
                                </div>
                                <ion-label>Your email:</ion-label>
                                <div>
                                    <input class="email" type="text" name="email" placeholder="User email" />
                                </div>
                                <ion-label>Enter your phone number:</ion-label>
                                <div>
                                    <input class="number" type="text" name="number" placeholder="Enter your phone number" />
                                </div>
                                <ion-label>Your password:</ion-label>
                                <div>
                                    <input class="passwd-first" type="password" name="passwd-first" placeholder="Your password" />
                                </div>
                                <ion-label>Your password to repeat:</ion-label>
                                <div>
                                    <input class="passwd-second" type="password" name="passwd-second" placeholder="Your password to repeat" />
                                </div>
                                <ion-label>You don't robot?</ion-label><br />
                                <ion-list class="display">
                                    <ion-radio-group allow-empty-selection name="auto" value="beef">
                                        <ion-radio class="regisration"></ion-radio><br />
                                    </ion-radio-group>
                                </ion-list>
                                <ion-button onClick={() => { this.onRegistration(); }}>Registration</ion-button>
                                <ion-button href="/user/">Login</ion-button>
                            </form>
                        </div>
                    </ion-col>

                </ion-row>
            </ion-grid>
        ];
    }
}
