import { Component, h ,Prop} from '@stencil/core';

@Component({
    tag: 'app-coment',
})



export class AppComent {
    @Prop() obnowFuctions;
    @Prop() user;
    @Prop() id_articles;
    private form;


    componentDidRender() {
        this.form = document.querySelector('form.formComent');
    }


    async sendCommentMessagas(url, postData,csrftoken) {
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

    sendMessages() {
        let url = `/comment_app/${this.id_articles}/`
        let data = new FormData(this.form);
        let obj = {};
        data.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        let csrftoken = this.getCookie('csrftoken');
        this.sendCommentMessagas(url, json, csrftoken).then((json) => {
            if(json['ok'])
                this.obnowFuctions();
        });
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




    render() {
        


        return [
            <ion-col size="12" >
                <form class="formComent">
                    <ion-label>Name:</ion-label><br/>

                    <ion-label>Text:</ion-label>
                    <div>
                        <textarea class="coments" name="text" placeholder="Текст комментария"></textarea>
                    </div>

                    <ion-button onClick={() => { this.sendMessages(); }} >Send messages</ion-button>
                </form>
            </ion-col>


        ];
    }
}
