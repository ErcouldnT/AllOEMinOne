import{S as t,i as e,s,e as a,t as r,k as l,c,a as n,g as o,d as i,n as f,b as h,f as u,D as d,H as m,h as p,I as g,J as v,K as b,E as $,P as x,L as E,Q as y,j as k,m as T,o as D,v as O,r as w,w as M,l as S,M as j,u as I,O as L,B}from"../chunks/vendor-b54fc800.js";import{b as H}from"../chunks/build-de49f317.js";function N(t){let e,s,E,y,k,T,D,O,w,M,S,j,I,L,B,H,N,V,z=`(${t[0].source}) ${t[0].title}`,P=t[0].price+"";return{c(){e=a("a"),s=a("h2"),E=r(z),y=l(),k=a("h3"),T=r(P),D=r(" TL"),O=l(),w=a("div"),M=a("button"),S=r("Miktar"),j=l(),I=a("button"),L=r("Sil"),this.h()},l(t){e=c(t,"A",{target:!0,class:!0,href:!0});var a=n(e);s=c(a,"H2",{});var r=n(s);E=o(r,z),r.forEach(i),y=f(a),k=c(a,"H3",{});var l=n(k);T=o(l,P),D=o(l," TL"),l.forEach(i),O=f(a),w=c(a,"DIV",{class:!0});var h=n(w);M=c(h,"BUTTON",{class:!0});var u=n(M);S=o(u,"Miktar"),u.forEach(i),j=f(h),I=c(h,"BUTTON",{class:!0});var d=n(I);L=o(d,"Sil"),d.forEach(i),h.forEach(i),a.forEach(i),this.h()},h(){h(M,"class","font-bold z-10"),h(I,"class","font-bold z-10"),h(w,"class","flex gap-6"),h(e,"target","_blank"),h(e,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),h(e,"href",B=t[0].url)},m(a,r){u(a,e,r),d(e,s),d(s,E),d(e,y),d(e,k),d(k,T),d(k,D),d(e,O),d(e,w),d(w,M),d(M,S),d(w,j),d(w,I),d(I,L),N||(V=[m(M,"click",t[2]),m(I,"click",t[1],{once:!0})],N=!0)},p(t,[s]){1&s&&z!==(z=`(${t[0].source}) ${t[0].title}`)&&p(E,z),1&s&&P!==(P=t[0].price+"")&&p(T,P),1&s&&B!==(B=t[0].url)&&h(e,"href",B)},i(t){H||g((()=>{H=v(e,b,{}),H.start()}))},o:$,d(t){t&&i(e),N=!1,x(V)}}}function V(t,e,s){let a;E(t,H,(t=>s(3,a=t)));let{product:r}=e;return t.$$set=t=>{"product"in t&&s(0,r=t.product)},[r,t=>{t.preventDefault();const e=a.filter((t=>t!==r));y(H,a=e,a)},t=>{t.preventDefault()}]}class z extends t{constructor(t){super(),e(this,t,V,N,s,{product:0})}}function P(t,e,s){const a=t.slice();return a[2]=e[s],a}function A(t){let e,s;return e=new z({props:{product:t[2]}}),{c(){k(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,a){D(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.product=t[2]),e.$set(a)},i(t){s||(O(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function U(t){let e,s,l,f,m,x;return{c(){e=a("div"),s=a("p"),l=r("Toplam fiyat: "),f=r(t[1]),m=r(" TL"),this.h()},l(a){e=c(a,"DIV",{class:!0});var r=n(e);s=c(r,"P",{class:!0});var h=n(s);l=o(h,"Toplam fiyat: "),f=o(h,t[1]),m=o(h," TL"),h.forEach(i),r.forEach(i),this.h()},h(){h(s,"class","text-center max-w-md font-bold text-lg"),h(e,"class","flex justify-center items-center p-6")},m(t,a){u(t,e,a),d(e,s),d(s,l),d(s,f),d(s,m)},p(t,e){2&e&&p(f,t[1])},i(t){x||g((()=>{x=v(e,b,{}),x.start()}))},o:$,d(t){t&&i(e)}}}function J(t){let e,s,l;return{c(){e=a("div"),s=a("p"),l=r("Ürün bul'dan OEM ekleyerek başlayabilirsin."),this.h()},l(t){e=c(t,"DIV",{class:!0});var a=n(e);s=c(a,"P",{class:!0});var r=n(s);l=o(r,"Ürün bul'dan OEM ekleyerek başlayabilirsin."),r.forEach(i),a.forEach(i),this.h()},h(){h(s,"class","text-center max-w-md"),h(e,"class","flex justify-center items-center")},m(t,a){u(t,e,a),d(e,s),d(s,l)},p:$,i:$,o:$,d(t){t&&i(e)}}}function K(t){let e,s,m,p,g,v,b,$,x=t[0],E=[];for(let a=0;a<x.length;a+=1)E[a]=A(P(t,x,a));const y=t=>w(E[t],1,1,(()=>{E[t]=null}));function k(t,e){return 0===t[0].length?J:U}let T=k(t),D=T(t);return{c(){e=l(),s=a("h1"),m=r("Sistemin:"),p=l(),g=a("div");for(let t=0;t<E.length;t+=1)E[t].c();v=l(),D.c(),b=S(),this.h()},l(t){j('[data-svelte="svelte-18rvby9"]',document.head).forEach(i),e=f(t),s=c(t,"H1",{class:!0});var a=n(s);m=o(a,"Sistemin:"),a.forEach(i),p=f(t),g=c(t,"DIV",{class:!0});var r=n(g);for(let e=0;e<E.length;e+=1)E[e].l(r);r.forEach(i),v=f(t),D.l(t),b=S(),this.h()},h(){document.title="AllOEMinOne Sistem",h(s,"class","text-4xl text-center my-8"),h(g,"class","grid gap-4 grid-cols-1")},m(t,a){u(t,e,a),u(t,s,a),d(s,m),u(t,p,a),u(t,g,a);for(let e=0;e<E.length;e+=1)E[e].m(g,null);u(t,v,a),D.m(t,a),u(t,b,a),$=!0},p(t,[e]){if(1&e){let s;for(x=t[0],s=0;s<x.length;s+=1){const a=P(t,x,s);E[s]?(E[s].p(a,e),O(E[s],1)):(E[s]=A(a),E[s].c(),O(E[s],1),E[s].m(g,null))}for(B(),s=x.length;s<E.length;s+=1)y(s);I()}T===(T=k(t))&&D?D.p(t,e):(D.d(1),D=T(t),D&&(D.c(),O(D,1),D.m(b.parentNode,b)))},i(t){if(!$){for(let t=0;t<x.length;t+=1)O(E[t]);O(D),$=!0}},o(t){E=E.filter(Boolean);for(let e=0;e<E.length;e+=1)w(E[e]);$=!1},d(t){t&&i(e),t&&i(s),t&&i(p),t&&i(g),L(E,t),t&&i(v),D.d(t),t&&i(b)}}}function Q(t,e,s){let a;E(t,H,(t=>s(0,a=t)));let r=0;return t.$$.update=()=>{if(3&t.$$.dirty)for(let t=0;t<a.length;t++){const e=a[t];s(1,r+=Number(e.price))}},[a,r]}export default class extends t{constructor(t){super(),e(this,t,Q,K,s,{})}}
