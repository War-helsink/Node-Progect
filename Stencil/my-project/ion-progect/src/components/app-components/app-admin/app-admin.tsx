import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-admin',
})
export class AppAdmin {
  render() {
    return [
      <app-admin-header />,

      <ion-content>
        <div class="pixsel">
          <app-admin-menu class="pixsel" />
        </div>
      </ion-content>
    ];
  }
}
