import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-articles-header',
  styleUrl: 'app-articles-header.css',
})
export class AppArticlesHeader {
  
  
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
            <app-articles-search class="margin-auto" />
            <app-articles-sort class="margin-auto" />
          </div>

        </ion-toolbar>
      </ion-header>
    );
  }
}
