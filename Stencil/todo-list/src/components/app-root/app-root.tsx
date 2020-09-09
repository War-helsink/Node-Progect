import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div class="flex-div">
        <div>
          <todo-list />
        </div>
      </div>
    );
  }
}
