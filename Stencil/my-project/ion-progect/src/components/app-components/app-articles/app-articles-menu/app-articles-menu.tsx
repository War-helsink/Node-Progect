import { Component, h} from '@stencil/core';
import state from "../../../store";


@Component({
    tag: 'app-articles-menu',
    styleUrl: 'app-articles-menu.css',
})
export class AppArticlesMenu{
    render() {
        return (
            <div class="flex margin">
                <div class="display flex-filter">
                    <app-articles-filter items={state.allArticlesItems} />
                </div>

                <div class="flex-print">
                    <app-articles-items class="flex flex-wrap border-telbel margin-item"  db={state.articlesItems} />
                </div>


            </div>
        );
    }
}
