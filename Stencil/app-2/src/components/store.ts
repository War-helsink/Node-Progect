import { createStore } from "@stencil/store";
import { TodoItem } from "./models";
let ad:TodoItem[] = [];

const { state, onChange } = createStore({
    'TodoItem': ad,
    'TodoRead': {
        "title": "Only read",
        "read":false,
    },
});

onChange('TodoRead', (value ) => {
    if (value.read)
        value.title = "Change"
    else
        value.title = "Only read"
    
});

export default state;