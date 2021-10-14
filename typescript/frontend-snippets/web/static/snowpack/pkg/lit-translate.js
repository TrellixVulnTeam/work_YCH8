import{N as C,A as g,d as h}from"./common/lit-html-03eb0cde.js";const m=1e3*60,s="langChanged";function p(t,n,e){return Object.entries(o(n||{})).reduce((r,[d,f])=>r.replace(new RegExp(`{{[ \xA0]*${d}[ \xA0]*}}`,"gm"),String(o(f))),t)}function w(t,n){const e=t.split(".");let r=n.strings;for(;r!=null&&e.length>0;)r=r[e.shift()];return r!=null?r.toString():null}function o(t){return typeof t=="function"?t():t}const E=()=>({loader:()=>Promise.resolve({}),empty:t=>`[${t}]`,lookup:w,interpolate:p,translationCache:{}});let a=E();function L(t){return a=Object.assign(Object.assign({},a),t)}function v(t){window.dispatchEvent(new CustomEvent(s,{detail:t}))}function P(t,n,e=a){v({previousStrings:e.strings,previousLang:e.lang,lang:e.lang=t,strings:e.strings=n})}function N(t,n){const e=r=>t(r.detail);return window.addEventListener(s,e,n),()=>window.removeEventListener(s,e)}async function A(t,n=a){const e=await n.loader(t,n);n.translationCache={},P(t,e,n)}function l(t,n,e=a){let r=e.translationCache[t]||(e.translationCache[t]=e.lookup(t,e)||e.empty(t,e));return n=n!=null?o(n):null,n!=null?e.interpolate(r,n,e):r}function c(t){return t instanceof C?t.startNode.isConnected:t instanceof g?t.committer.element.isConnected:t.element.isConnected}function T(t){for(const[n]of t)c(n)||t.delete(n)}function b(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t)}function S(t,n){setInterval(()=>b(()=>T(t)),n)}const i=new Map;function I(){N(t=>{for(const[n,e]of i)c(n)&&u(n,e,t)})}I(),S(i,m);function u(t,n,e){const r=n(e);t.value!==r&&(t.setValue(r),t.commit())}const _=h(t=>n=>{i.set(n,t),u(n,t)}),x=(t,n,e)=>_(()=>l(t,n,e));export{l as get,L as registerTranslateConfig,x as translate,A as use};
