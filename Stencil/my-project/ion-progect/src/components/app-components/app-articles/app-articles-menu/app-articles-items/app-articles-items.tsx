import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'app-articles-items',
})
export class AppArticlesItems {
  @Prop() db;
  @State() step = 1;
  private coefficient = 12;

  addItems() {
    let idex = this.coefficient * this.step;
    if (idex < this.db.length)

      return (
        <ion-col size="12" class="flex flex-center">
          <ion-button onClick={() => {
            this.step = this.step + 1;
          }}>Show more {this.coefficient}</ion-button>
        </ion-col>
      )
  }


  redirect(id) {
    const routerEl = document.querySelector('ion-router');
    routerEl.push(`/article/${id}`);
  }

  
  printItems() {
    let items = []
    let idex = this.coefficient * this.step;
    if (idex > this.db.length) {
      idex = this.db.length;
    }
    for (let i = 0; i < idex; i++) {
      items.push(
        <app-articles-item onClick={() => this.redirect(this.db[i].id)} class="flex-item border-center hover" article={this.db[i]} />
      )
    }
    return items;
  }



  render() {
    return [
      this.printItems(),
      this.addItems()

      
    ];
  }
}
