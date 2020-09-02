import { Component, h, Prop} from '@stencil/core';

@Component({
    tag: 'app-user',
    styleUrl: 'app-user.scss'
})


export class AppUser {
    @Prop() jsons;
    private radios;
    private login;
    private passwd;
    private form;


    componentDidRender() {
        this.login = document.querySelector('.login');
        this.passwd = document.querySelector('.passwd');
        this.radios = document.querySelector('ion-radio.user');
        this.form = document.querySelector('form.formLogin');
        
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




    clearInput() {
        this.login.value = '';
        this.passwd.value = '';
        this.radios.attributes[1].value = 'false';
        this.radios.classList.remove('radio-checked');
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


    loginSite() {
        if (this.login.value != '') {
            // Действия с именем 

            if (this.passwd.value != '') {
                // Действия с паролем

                if (this.radios.attributes[2].value === 'true') {
                    //Все готово сверить с сервером
                    let data = new FormData(this.form);
                    let obj = {};
                    data.forEach(function (value,key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    // let csrftoken =  document.querySelector('[name=csrfmiddlewaretoken]');
                    let csrftoken = this.getCookie('csrftoken');
                    
                    this.sendMessages('/avtorizet/', json, csrftoken)
                        .then((json) => {
                            alert(json['text']);
                        })


                    this.clearInput();

                } else {
                    alert('You bot!');
                }
            } else {
                alert('Enter password');
            }
        } else {
            alert('Enter your name or login');
        }
    }


    render() {
        document.title = "User";

        return [
            <ion-grid fixed>
                <ion-row>
                    <ion-col size="12" size-lg="6" class="grids">
                        <div class="user">
                            <form class="formLogin">
                                <ion-label>Your user name:</ion-label>
                                <div>
                                    <input class="login" type="text" name="login" placeholder="User name" />
                                </div>
                                <ion-label>Your password:</ion-label>
                                <div>
                                    <input class="passwd" type="password" name="passwd" placeholder="Your password" />
                                </div>
                                <ion-label>You don't robot?</ion-label>
                                <ion-list class="display">
                                    <ion-radio-group allow-empty-selection name="auto" value="beef">
                                        <ion-radio class="user"></ion-radio>
                                    </ion-radio-group>
                                </ion-list>

                                <ion-button onClick={() => { this.loginSite(); }}>Login</ion-button>
                                <ion-button href="/registration" >Registration</ion-button>
                            </form>
                        </div>
                    </ion-col>



                </ion-row>
            </ion-grid>
        ];
    }
}
