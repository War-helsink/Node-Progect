import{r as t,i as s,h as i,e}from "./p-edd43e6c.js";import{A as r}from "./p-b040fea2.js";import{m as h}from "./p-14054f15.js";import "./p-6bd16f5b.js";const o= t=>"STENCIL-ROUTE"===t.tagName,n=class{constructor(i){t(this,i),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=s(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let s=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(o).map((i, e)=>{const r=h(t.pathname,{path:i.url,exact:i.exact,strict:!0});return r&&-1===s&&(s=e),{el:i,match:r}}),-1===s)return;if(this.activeIndex===s)return void(this.subscribers[s].el.match=this.subscribers[s].match);this.activeIndex=s;const i=this.subscribers[this.activeIndex];this.scrollTopOffset&&(i.el.scrollTopOffset=this.scrollTopOffset),i.el.group=this.group,i.el.match=i.match,i.el.componentUpdated= t=>{this.queue.write(()=>{this.subscribers.forEach((t, s)=>{if(t.el.componentUpdated=void 0,s===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return i("slot",null)}get el(){return e(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};r.injectProps(n,["location","routeViewsUpdated"]);export{n as stencil_route_switch}