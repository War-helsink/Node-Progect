import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-admin-header',
  styleUrl: 'app-admin-header.css',
})
export class AppAdminHeader {
  
  
  redirect(url) {
    const routerEl = document.querySelector('ion-router');
    routerEl.push(url);
  }
  
  render() {
    return (
      <ion-header>
        <ion-toolbar color="dark">


          <div class="pixsel  flex flex-wrap flex-adept">
            <div class="header-item flex flex-center margin-left" onClick={()=>this.redirect("/admin")}>
              Admin
            </div>
            <div class="header-item flex flex-center" onClick={()=>this.redirect("/articles")}>
              Articles
            </div>
            <app-admin-search class="margin-auto" />
            <app-admin-sort class="margin-auto" />
          </div>

        </ion-toolbar>
      </ion-header>
    );
  }
}
