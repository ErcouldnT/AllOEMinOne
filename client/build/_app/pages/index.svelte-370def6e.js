import{S as a,i as t,s as e,j as s,m as c,o as n,v as o,r,w as i,k as l,e as f,t as p,H as h,d as u,n as d,c as m,a as w,g as y,b as g,f as $,D as v,I as b,J as k,u as x,K as j,L as z,B as P}from"../chunks/vendor-ac1d1b55.js";import{P as E}from"../chunks/Product-b65d5d20.js";function B(a,t,e){const s=a.slice();return s[13]=t[e],s}function U(a){let t,e;return t=new E({props:{product:a[13]}}),{c(){s(t.$$.fragment)},l(a){c(t.$$.fragment,a)},m(a,s){n(t,a,s),e=!0},p(a,e){const s={};1&e&&(s.product=a[13]),t.$set(s)},i(a){e||(o(t.$$.fragment,a),e=!0)},o(a){r(t.$$.fragment,a),e=!1},d(a){i(t,a)}}}function C(a){let t,e,s,c,n,i,E,C,G,H,D,I,K,M,R,T,N,O,W,X,F=a[0],J=[];for(let o=0;o<F.length;o+=1)J[o]=U(B(a,F,o));const L=a=>r(J[a],1,1,(()=>{J[a]=null}));return{c(){t=l(),e=f("h1"),s=p("Welcome to PC-part-picker!"),c=l(),n=f("p"),i=p("Kısa, öz arayın."),E=l(),C=f("p"),G=p('"Ryzen 5 5600X 11GHz 8MB CPU işlemci" için kısaca "ryzen 5600" şeklinde.'),H=l(),D=f("form"),I=f("input"),K=l(),M=f("button"),R=p("Go!"),T=l(),N=f("div");for(let a=0;a<J.length;a+=1)J[a].c();this.h()},l(a){h('[data-svelte="svelte-mry4ys"]',document.head).forEach(u),t=d(a),e=m(a,"H1",{class:!0});var o=w(e);s=y(o,"Welcome to PC-part-picker!"),o.forEach(u),c=d(a),n=m(a,"P",{class:!0});var r=w(n);i=y(r,"Kısa, öz arayın."),r.forEach(u),E=d(a),C=m(a,"P",{class:!0});var l=w(C);G=y(l,'"Ryzen 5 5600X 11GHz 8MB CPU işlemci" için kısaca "ryzen 5600" şeklinde.'),l.forEach(u),H=d(a),D=m(a,"FORM",{class:!0});var f=w(D);I=m(f,"INPUT",{class:!0,type:!0,placeholder:!0}),K=d(f),M=m(f,"BUTTON",{class:!0});var p=w(M);R=y(p,"Go!"),p.forEach(u),f.forEach(u),T=d(a),N=m(a,"DIV",{class:!0});var g=w(N);for(let t=0;t<J.length;t+=1)J[t].l(g);g.forEach(u),this.h()},h(){document.title="Ucuzcu baba",g(e,"class","text-4xl text-center my-8"),g(n,"class","text-center m-3"),g(C,"class","text-center m-3 italic"),g(I,"class","rounded-md text-lg p-4 border-2 border-gray-200"),g(I,"type","text"),g(I,"placeholder","Ürün ara"),g(M,"class","items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 \n  px-4 rounded"),g(D,"class","flex flex-row justify-center"),g(N,"class","p-6 grid gap-4 grid-cols-1")},m(o,r){$(o,t,r),$(o,e,r),v(e,s),$(o,c,r),$(o,n,r),v(n,i),$(o,E,r),$(o,C,r),v(C,G),$(o,H,r),$(o,D,r),v(D,I),b(I,a[1]),v(D,K),v(D,M),v(M,R),$(o,T,r),$(o,N,r);for(let a=0;a<J.length;a+=1)J[a].m(N,null);O=!0,W||(X=[k(I,"input",a[3]),k(M,"click",a[2])],W=!0)},p(a,[t]){if(2&t&&I.value!==a[1]&&b(I,a[1]),1&t){let e;for(F=a[0],e=0;e<F.length;e+=1){const s=B(a,F,e);J[e]?(J[e].p(s,t),o(J[e],1)):(J[e]=U(s),J[e].c(),o(J[e],1),J[e].m(N,null))}for(P(),e=F.length;e<J.length;e+=1)L(e);x()}},i(a){if(!O){for(let a=0;a<F.length;a+=1)o(J[a]);O=!0}},o(a){J=J.filter(Boolean);for(let t=0;t<J.length;t+=1)r(J[t]);O=!1},d(a){a&&u(t),a&&u(e),a&&u(c),a&&u(n),a&&u(E),a&&u(C),a&&u(H),a&&u(D),a&&u(T),a&&u(N),j(J,a),W=!1,z(X)}}}function G(a,t,e){let s=[],c="";return a.$$.update=()=>{1&a.$$.dirty&&s.sort(((a,t)=>a.price-t.price))},[s,c,async a=>{a.preventDefault(),c&&(e(0,s=[]),await(async a=>{const t=`/api/sinerji/${a}`,c=await fetch(t),n=await c.json();e(0,s=s.concat(n))})(c),await(async a=>{const t=`/api/inventus/${a}`,c=await fetch(t),n=await c.json();e(0,s=s.concat(n))})(c),await(async a=>{const t=`/api/mediamarkt/${a}`,c=await fetch(t),n=await c.json();e(0,s=s.concat(n))})(c),await(async a=>{const t=`/api/teknobiyotik/${a}`,c=await fetch(t),n=await c.json();e(0,s=s.concat(n))})(c),await(async a=>{const t=`/api/teknosa/${a}`,c=await fetch(t),n=await c.json();e(0,s=s.concat(n))})(c),await(async a=>{const t=`/api/vatanbilgisayar/${a}`,c=await fetch(t),n=await c.json();e(0,s=s.concat(n))})(c),await(async a=>{const t=`/api/hepsiburada/${a}`,c=await fetch(t),n=await c.json();e(0,s=s.concat(n))})(c))},function(){c=this.value,e(1,c)}]}export default class extends a{constructor(a){super(),t(this,a,G,C,e,{})}}
