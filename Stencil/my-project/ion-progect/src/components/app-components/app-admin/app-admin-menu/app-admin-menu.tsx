import { Component, h} from '@stencil/core';
import state from "../../../store";


@Component({
    tag: 'app-admin-menu',
    styleUrl: 'app-admin-menu.css',
})
export class AppAdminFilter {
    render() {
        return (
            <div class="flex margin">
                <div class="display flex-filter">
                    <app-admin-filter items={state.allAdminItems} />
                </div>

                <div class="flex-print">
                    <app-create-item class="flex flex-center" />
                    <app-admin-items class="flex flex-wrap border-telbel margin-item"  db={state.adminItems} />
                </div>


            </div>
        );
    }
}
