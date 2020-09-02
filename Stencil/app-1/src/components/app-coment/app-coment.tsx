import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-coment',
})



export class AppComent {







    render() {

        return [
            <ion-col size="12">
                <form class="formComent">
                    <ion-label>Name:</ion-label><br/>

                    <ion-label>Text:</ion-label>
                    <div>
                        <textarea class="coments" name="text" placeholder="Текст комментария"></textarea>
                    </div>

                    <div>
                        <input name="submit" type="submit" value="Send message" />
                    </div>
                </form>
            </ion-col>


        ];
    }
}
