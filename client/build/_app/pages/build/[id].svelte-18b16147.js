import{S as t,i as e,s,j as a,m as l,o as n,E as r,v as i,r as c,w as o,k as f,e as h,t as u,l as d,O as m,d as p,n as g,c as b,a as $,g as x,b as v,f as E,D as y,u as O,Q as j,B as k,h as w,J as M,K as D,L as T}from"../../chunks/vendor-509cf542.js";import{O as I}from"../../chunks/OEM-8b8fe244.js";import"../../chunks/build-26b407d0.js";function L(t,e,s){const a=t.slice();return a[3]=e[s],a}function S(t){let e,s;return e=new I({props:{product:t[3]}}),{c(){a(e.$$.fragment)},l(t){l(e.$$.fragment,t)},m(t,a){n(e,t,a),s=!0},p:r,i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){o(e,t)}}}function V(t){let e,s,a,l,n,i;return{c(){e=h("div"),s=h("p"),a=u("Toplam fiyat: "),l=u(t[1]),n=u(" TL"),this.h()},l(r){e=b(r,"DIV",{class:!0});var i=$(e);s=b(i,"P",{class:!0});var c=$(s);a=x(c,"Toplam fiyat: "),l=x(c,t[1]),n=x(c," TL"),c.forEach(p),i.forEach(p),this.h()},h(){v(s,"class","text-center max-w-md font-bold text-xl"),v(e,"class","flex justify-center items-center p-6")},m(t,r){E(t,e,r),y(e,s),y(s,a),y(s,l),y(s,n)},p(t,e){2&e&&w(l,t[1])},i(t){i||M((()=>{i=D(e,T,{}),i.start()}))},o:r,d(t){t&&p(e)}}}function A(t){let e,s,a;return{c(){e=h("div"),s=h("p"),a=u("Ürün bul'dan OEM ekleyerek başlayabilirsin."),this.h()},l(t){e=b(t,"DIV",{class:!0});var l=$(e);s=b(l,"P",{class:!0});var n=$(s);a=x(n,"Ürün bul'dan OEM ekleyerek başlayabilirsin."),n.forEach(p),l.forEach(p),this.h()},h(){v(s,"class","text-center max-w-md"),v(e,"class","flex justify-center items-center")},m(t,l){E(t,e,l),y(e,s),y(s,a)},p:r,i:r,o:r,d(t){t&&p(e)}}}function B(t){let e,s,a,l,n,r,o,w,M;document.title=e="AllOEMinOne: "+t[0].name;let D=t[2],T=[];for(let i=0;i<D.length;i+=1)T[i]=S(L(t,D,i));const I=t=>c(T[t],1,1,(()=>{T[t]=null}));let B=(0===t[2].length?A:V)(t);return{c(){s=f(),a=h("h1"),l=u("Sistem:"),n=f(),r=h("div");for(let t=0;t<T.length;t+=1)T[t].c();o=f(),B.c(),w=d(),this.h()},l(t){m('[data-svelte="svelte-1jeyl77"]',document.head).forEach(p),s=g(t),a=b(t,"H1",{class:!0});var e=$(a);l=x(e,"Sistem:"),e.forEach(p),n=g(t),r=b(t,"DIV",{class:!0});var i=$(r);for(let s=0;s<T.length;s+=1)T[s].l(i);i.forEach(p),o=g(t),B.l(t),w=d(),this.h()},h(){v(a,"class","text-4xl text-center my-8"),v(r,"class","grid gap-4 grid-cols-1")},m(t,e){E(t,s,e),E(t,a,e),y(a,l),E(t,n,e),E(t,r,e);for(let s=0;s<T.length;s+=1)T[s].m(r,null);E(t,o,e),B.m(t,e),E(t,w,e),M=!0},p(t,[s]){if((!M||1&s)&&e!==(e="AllOEMinOne: "+t[0].name)&&(document.title=e),4&s){let e;for(D=t[2],e=0;e<D.length;e+=1){const a=L(t,D,e);T[e]?(T[e].p(a,s),i(T[e],1)):(T[e]=S(a),T[e].c(),i(T[e],1),T[e].m(r,null))}for(k(),e=D.length;e<T.length;e+=1)I(e);O()}B.p(t,s)},i(t){if(!M){for(let t=0;t<D.length;t+=1)i(T[t]);i(B),M=!0}},o(t){T=T.filter(Boolean);for(let e=0;e<T.length;e+=1)c(T[e]);M=!1},d(t){t&&p(s),t&&p(a),t&&p(n),t&&p(r),j(T,t),t&&p(o),B.d(t),t&&p(w)}}}async function P({page:t}){const e=`http://localhost:9999/api/build/${t.params.id}`,s=await fetch(e);return{props:{build:await s.json()}}}function H(t,e,s){let{build:a}=e;console.log(a);let l=a.build,n=0;return t.$$set=t=>{"build"in t&&s(0,a=t.build)},t.$$.update=()=>{if(2&t.$$.dirty){s(1,n=0);for(let t=0;t<l.length;t++){const e=l[t];s(1,n+=Number(e.price))}}},[a,n,l]}export default class extends t{constructor(t){super(),e(this,t,H,B,s,{build:0})}}export{P as load};
