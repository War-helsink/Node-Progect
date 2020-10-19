import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
  items: [
    {
      id: new Date(),
      title: 'test',
      description: '',
      isDone: true
    },
  ],
  itemsLength: 1
});

onChange("items", (value) => {
  console.log('on change', value);
  // state.itemsLength = value.length
  state.itemsLength = state.items.length;
});

export default state;
