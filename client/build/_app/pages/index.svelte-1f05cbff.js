import{S as a,i as t,s as e,j as s,m as n,o as c,v as i,r as o,w as r,k as l,e as f,t as h,H as p,d as u,n as d,c as m,a as w,g as y,b as g,f as $,D as b,I as v,J as j,h as k,u as x,K as z,L as E,B as P}from"../chunks/vendor-ac1d1b55.js";import{P as B}from"../chunks/Product-b65d5d20.js";function H(a,t,e){const s=a.slice();return s[14]=t[e],s}function G(a){let t,e;return t=new B({props:{product:a[14]}}),{c(){s(t.$$.fragment)},l(a){n(t.$$.fragment,a)},m(a,s){c(t,a,s),e=!0},p(a,e){const s={};1&e&&(s.product=a[14]),t.$set(s)},i(a){e||(i(t.$$.fragment,a),e=!0)},o(a){o(t.$$.fragment,a),e=!1},d(a){r(t,a)}}}function M(a){let t,e,s,n,c,r,B,M,N,O,U,D,I,R,T,C,X,q,A,F,J=a[0],K=[];for(let i=0;i<J.length;i+=1)K[i]=G(H(a,J,i));const L=a=>o(K[a],1,1,(()=>{K[a]=null}));return{c(){t=l(),e=f("h1"),s=h("Ne vereyim abime?"),n=l(),c=f("p"),r=h('"Ryzen 5 5600X 11GHz 8MB CPU işlemci" için kısaca "ryzen 5600" şeklinde arama yapabilirsiniz.'),B=l(),M=f("form"),N=f("input"),O=l(),U=f("button"),D=h("Go!"),I=l(),R=f("p"),T=h(a[2]),C=l(),X=f("div");for(let a=0;a<K.length;a+=1)K[a].c();this.h()},l(i){p('[data-svelte="svelte-1mnaq72"]',document.head).forEach(u),t=d(i),e=m(i,"H1",{class:!0});var o=w(e);s=y(o,"Ne vereyim abime?"),o.forEach(u),n=d(i),c=m(i,"P",{class:!0});var l=w(c);r=y(l,'"Ryzen 5 5600X 11GHz 8MB CPU işlemci" için kısaca "ryzen 5600" şeklinde arama yapabilirsiniz.'),l.forEach(u),B=d(i),M=m(i,"FORM",{class:!0});var f=w(M);N=m(f,"INPUT",{class:!0,type:!0,placeholder:!0}),O=d(f),U=m(f,"BUTTON",{class:!0});var h=w(U);D=y(h,"Go!"),h.forEach(u),f.forEach(u),I=d(i),R=m(i,"P",{class:!0});var g=w(R);T=y(g,a[2]),g.forEach(u),C=d(i),X=m(i,"DIV",{class:!0});var $=w(X);for(let a=0;a<K.length;a+=1)K[a].l($);$.forEach(u),this.h()},h(){document.title="AllOEMinOne",g(e,"class","text-4xl text-center my-8"),g(c,"class","text-center m-3 italic"),g(N,"class","rounded-md text-lg p-4 border-2 border-gray-200"),g(N,"type","text"),g(N,"placeholder","Ürün ara"),g(U,"class","items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 \n  px-4 rounded"),g(M,"class","flex flex-row justify-center"),g(R,"class","text-center mt-5"),g(X,"class","p-6 grid gap-4 grid-cols-1")},m(i,o){$(i,t,o),$(i,e,o),b(e,s),$(i,n,o),$(i,c,o),b(c,r),$(i,B,o),$(i,M,o),b(M,N),v(N,a[1]),b(M,O),b(M,U),b(U,D),$(i,I,o),$(i,R,o),b(R,T),$(i,C,o),$(i,X,o);for(let a=0;a<K.length;a+=1)K[a].m(X,null);q=!0,A||(F=[j(N,"input",a[4]),j(U,"click",a[3])],A=!0)},p(a,[t]){if(2&t&&N.value!==a[1]&&v(N,a[1]),(!q||4&t)&&k(T,a[2]),1&t){let e;for(J=a[0],e=0;e<J.length;e+=1){const s=H(a,J,e);K[e]?(K[e].p(s,t),i(K[e],1)):(K[e]=G(s),K[e].c(),i(K[e],1),K[e].m(X,null))}for(P(),e=J.length;e<K.length;e+=1)L(e);x()}},i(a){if(!q){for(let a=0;a<J.length;a+=1)i(K[a]);q=!0}},o(a){K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)o(K[t]);q=!1},d(a){a&&u(t),a&&u(e),a&&u(n),a&&u(c),a&&u(B),a&&u(M),a&&u(I),a&&u(R),a&&u(C),a&&u(X),z(K,a),A=!1,E(F)}}}function N(a,t,e){let s=[],n="",c="";return a.$$.update=()=>{1&a.$$.dirty&&s.sort(((a,t)=>a.price-t.price))},[s,n,c,async a=>{a.preventDefault(),n&&(e(0,s=[]),e(2,c="Hemen ustaya sorup geliyorum abi biraz bekleticem..."),await(async a=>{const t=`/api/sinerji/${a}`,n=await fetch(t),c=await n.json();e(0,s=s.concat(c))})(n),await(async a=>{const t=`/api/inventus/${a}`,n=await fetch(t),c=await n.json();e(0,s=s.concat(c))})(n),await(async a=>{const t=`/api/mediamarkt/${a}`,n=await fetch(t),c=await n.json();e(0,s=s.concat(c))})(n),await(async a=>{const t=`/api/teknobiyotik/${a}`,n=await fetch(t),c=await n.json();e(0,s=s.concat(c))})(n),await(async a=>{const t=`/api/teknosa/${a}`,n=await fetch(t),c=await n.json();e(0,s=s.concat(c))})(n),await(async a=>{const t=`/api/hepsiburada/${a}`,n=await fetch(t),c=await n.json();e(0,s=s.concat(c))})(n),await(async a=>{const t=`/api/vatanbilgisayar/${a}`,n=await fetch(t),c=await n.json();e(0,s=s.concat(c))})(n),await(async a=>{const t=`/api/itopya/${a}`,n=await fetch(t),c=await n.json();e(0,s=s.concat(c))})(n),await(async a=>{const t=`/api/amazon/${a}`,n=await fetch(t),c=await n.json();e(0,s=s.concat(c))})(n),e(2,c=`${s.length} adet ${n} var abi buyur:`))},function(){n=this.value,e(1,n)}]}export default class extends a{constructor(a){super(),t(this,a,N,M,e,{})}}
