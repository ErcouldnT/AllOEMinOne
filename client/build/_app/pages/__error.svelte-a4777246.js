import{S as t,i as e,d as s,s as o,v as n,e as r,t as c,c as i,f as a,l,g as p,h as u,j as h,k as $,G as f,m as d,H as m}from"../chunks/vendor-278f6921.js";function _(t){let e,o;const n={c:function(){e=r("h1"),o=c(t[0]),this.h()},l:function(s){e=i(s,"H1",{class:!0});var n=a(e);o=l(n,t[0]),n.forEach(p),this.h()},h:function(){u(e,"class","text-center text-4xl"),h(e,"D:/__HERE__/Masaüstü/AllOEMinOne/client/src/routes/__error.svelte",14,0,210)},m:function(t,s){$(t,e,s),f(e,o)},p:function(t,[e]){1&e&&d(o,t[0])},i:m,o:m,d:function(t){t&&p(e)}};return s("SvelteRegisterBlock",{block:n,id:_.name,type:"component",source:"",ctx:t}),n}function w({error:t,status:e}){return{props:{title:`${e}: ${t.message}`}}}function x(t,e,s){let{$$slots:o={},$$scope:r}=e;n("_error",o,[]);let{title:c}=e;const i=["title"];return Object.keys(e).forEach((t=>{~i.indexOf(t)||"$$"===t.slice(0,2)||console.warn(`<_error> was created with unknown prop '${t}'`)})),t.$$set=t=>{"title"in t&&s(0,c=t.title)},t.$capture_state=()=>({load:w,title:c}),t.$inject_state=t=>{"title"in t&&s(0,c=t.title)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c]}export default class extends t{constructor(t){super(t),e(this,t,x,_,o,{title:0}),s("SvelteRegisterComponent",{component:this,tagName:"_error",options:t,id:_.name});const{ctx:n}=this.$$,r=t.props||{};void 0!==n[0]||"title"in r||console.warn("<_error> was created without expected prop 'title'")}get title(){throw new Error("<_error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(t){throw new Error("<_error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{w as load};
