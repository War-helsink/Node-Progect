import{C as e,p as o,w as s,a as t,d as n,N as a}from "./p-edd43e6c.js";const r="undefined"!=typeof Deno,p=!(r||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),c=(r&&Deno,p?process:r&&Deno,p?process:r&&Deno,()=>e&&e.supports&&e.supports("color","var(--c)")?t():__sc_import_app("./p-24fc4ba9.js").then(()=>(o.o=s.__cssshim)?(!1).i():0)),i=()=>{o.o=s.__cssshim;const e=Array.from(n.querySelectorAll("script")).find(e=>RegExp(`/${a}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===a),r=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(r.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,s.location.href)).href,l(r.resourcesUrl,e),s.customElements?t(r):__sc_import_app("./p-46109683.js").then(()=>r))},l=(e, o)=>{const t="__sc_import_"+a.replace(/\s|-/g,"_");try{s[t]=Function("w","return import(w);//"+Math.random())}catch(r){const a=new Map;s[t]= r=>{const p=new URL(r,e).href;let c=a.get(p);if(!c){const e=n.createElement("script");e.type="module",e.crossOrigin=o.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${p}'; window.${t}.m = m;`],{type:"application/javascript"})),c=new Promise(o=>{e.onload=()=>{o(s[t].m),e.remove()}}),a.set(p,c),n.head.appendChild(e)}return c}}};export{c as a,i as p}