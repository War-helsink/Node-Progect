/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TodoItem, TodoRead } from "./components/todo-list/models";
export namespace Components {
    interface AppRoot {
    }
    interface ListItem {
        "changeItem": (e, v, t) => void;
        "deleteItem": (e) => void;
        "todoList": TodoItem[];
        "todoRead": TodoRead;
    }
    interface TodoCreator {
        "addTodoItem": (title: string) => void;
        "deleteAllTodoItem": () => void;
    }
    interface TodoItem {
        "changeItem": (e, v, t) => void;
        "deleteItem": (e) => void;
        "description": any;
        "todoRead": TodoRead;
    }
    interface TodoList {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLListItemElement extends Components.ListItem, HTMLStencilElement {
    }
    var HTMLListItemElement: {
        prototype: HTMLListItemElement;
        new (): HTMLListItemElement;
    };
    interface HTMLTodoCreatorElement extends Components.TodoCreator, HTMLStencilElement {
    }
    var HTMLTodoCreatorElement: {
        prototype: HTMLTodoCreatorElement;
        new (): HTMLTodoCreatorElement;
    };
    interface HTMLTodoItemElement extends Components.TodoItem, HTMLStencilElement {
    }
    var HTMLTodoItemElement: {
        prototype: HTMLTodoItemElement;
        new (): HTMLTodoItemElement;
    };
    interface HTMLTodoListElement extends Components.TodoList, HTMLStencilElement {
    }
    var HTMLTodoListElement: {
        prototype: HTMLTodoListElement;
        new (): HTMLTodoListElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "list-item": HTMLListItemElement;
        "todo-creator": HTMLTodoCreatorElement;
        "todo-item": HTMLTodoItemElement;
        "todo-list": HTMLTodoListElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface ListItem {
        "changeItem"?: (e, v, t) => void;
        "deleteItem"?: (e) => void;
        "todoList"?: TodoItem[];
        "todoRead"?: TodoRead;
    }
    interface TodoCreator {
        "addTodoItem"?: (title: string) => void;
        "deleteAllTodoItem"?: () => void;
    }
    interface TodoItem {
        "changeItem"?: (e, v, t) => void;
        "deleteItem"?: (e) => void;
        "description"?: any;
        "onChangeIsDone"?: (event: CustomEvent<any>) => void;
        "todoRead"?: TodoRead;
    }
    interface TodoList {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "list-item": ListItem;
        "todo-creator": TodoCreator;
        "todo-item": TodoItem;
        "todo-list": TodoList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "list-item": LocalJSX.ListItem & JSXBase.HTMLAttributes<HTMLListItemElement>;
            "todo-creator": LocalJSX.TodoCreator & JSXBase.HTMLAttributes<HTMLTodoCreatorElement>;
            "todo-item": LocalJSX.TodoItem & JSXBase.HTMLAttributes<HTMLTodoItemElement>;
            "todo-list": LocalJSX.TodoList & JSXBase.HTMLAttributes<HTMLTodoListElement>;
        }
    }
}
