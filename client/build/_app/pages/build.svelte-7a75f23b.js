import{S as t,i as e,s,e as a,t as r,k as l,c,a as n,g as o,d as i,n as f,b as h,f as u,D as d,H as m,h as p,I as g,J as v,K as b,E as x,Q as $,L as E,M as y,j as k,m as T,o as D,v as w,r as M,w as O,l as S,N as j,u as I,P as L,B as N}from"../chunks/vendor-14cd4f6b.js";import{b as B}from"../chunks/build-e94ba18a.js";function H(t){let e,s,E,y,k,T,D,w,M,O,S,j,I,L,N,B,H,V,z=`(${t[0].source}) ${t[0].title}`,P=t[0].price+"";return{c(){e=a("a"),s=a("h2"),E=r(z),y=l(),k=a("h3"),T=r(P),D=r(" TL"),w=l(),M=a("div"),O=a("button"),S=r("Miktar"),j=l(),I=a("button"),L=r("Sil"),this.h()},l(t){e=c(t,"A",{target:!0,class:!0,href:!0});var a=n(e);s=c(a,"H2",{});var r=n(s);E=o(r,z),r.forEach(i),y=f(a),k=c(a,"H3",{});var l=n(k);T=o(l,P),D=o(l," TL"),l.forEach(i),w=f(a),M=c(a,"DIV",{class:!0});var h=n(M);O=c(h,"BUTTON",{class:!0});var u=n(O);S=o(u,"Miktar"),u.forEach(i),j=f(h),I=c(h,"BUTTON",{class:!0});var d=n(I);L=o(d,"Sil"),d.forEach(i),h.forEach(i),a.forEach(i),this.h()},h(){h(O,"class","font-bold z-10"),h(I,"class","font-bold z-10"),h(M,"class","flex gap-10"),h(e,"target","_blank"),h(e,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),h(e,"href",N=t[0].url)},m(a,r){u(a,e,r),d(e,s),d(s,E),d(e,y),d(e,k),d(k,T),d(k,D),d(e,w),d(e,M),d(M,O),d(O,S),d(M,j),d(M,I),d(I,L),H||(V=[m(O,"click",t[2]),m(I,"click",t[1])],H=!0)},p(t,[s]){1&s&&z!==(z=`(${t[0].source}) ${t[0].title}`)&&p(E,z),1&s&&P!==(P=t[0].price+"")&&p(T,P),1&s&&N!==(N=t[0].url)&&h(e,"href",N)},i(t){B||g((()=>{B=v(e,b,{}),B.start()}))},o:x,d(t){t&&i(e),H=!1,$(V)}}}function V(t,e,s){let a;E(t,B,(t=>s(3,a=t)));let{product:r}=e;return t.$$set=t=>{"product"in t&&s(0,r=t.product)},[r,t=>{t.preventDefault();const e=a.filter((t=>t!==r));y(B,a=e,a)},t=>{t.preventDefault()}]}class z extends t{constructor(t){super(),e(this,t,V,H,s,{product:0})}}function P(t,e,s){const a=t.slice();return a[3]=e[s],a}function A(t){let e,s;return e=new z({props:{product:t[3]}}),{c(){k(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,a){D(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.product=t[3]),e.$set(a)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){O(e,t)}}}function U(t){let e,s,l,f,m,$;return{c(){e=a("div"),s=a("p"),l=r("Toplam fiyat: "),f=r(t[1]),m=r(" TL"),this.h()},l(a){e=c(a,"DIV",{class:!0});var r=n(e);s=c(r,"P",{class:!0});var h=n(s);l=o(h,"Toplam fiyat: "),f=o(h,t[1]),m=o(h," TL"),h.forEach(i),r.forEach(i),this.h()},h(){h(s,"class","text-center max-w-md font-bold text-xl"),h(e,"class","flex justify-center items-center p-6")},m(t,a){u(t,e,a),d(e,s),d(s,l),d(s,f),d(s,m)},p(t,e){2&e&&p(f,t[1])},i(t){$||g((()=>{$=v(e,b,{}),$.start()}))},o:x,d(t){t&&i(e)}}}function J(t){let e,s,l;return{c(){e=a("div"),s=a("p"),l=r("Ürün bul'dan OEM ekleyerek başlayabilirsin."),this.h()},l(t){e=c(t,"DIV",{class:!0});var a=n(e);s=c(a,"P",{class:!0});var r=n(s);l=o(r,"Ürün bul'dan OEM ekleyerek başlayabilirsin."),r.forEach(i),a.forEach(i),this.h()},h(){h(s,"class","text-center max-w-md"),h(e,"class","flex justify-center items-center")},m(t,a){u(t,e,a),d(e,s),d(s,l)},p:x,i:x,o:x,d(t){t&&i(e)}}}function K(t){let e,s,m,p,g,v,b,x,$=t[0],E=[];for(let a=0;a<$.length;a+=1)E[a]=A(P(t,$,a));const y=t=>M(E[t],1,1,(()=>{E[t]=null}));function k(t,e){return 0===t[0].length?J:U}let T=k(t),D=T(t);return{c(){e=l(),s=a("h1"),m=r("Sistemin:"),p=l(),g=a("div");for(let t=0;t<E.length;t+=1)E[t].c();v=l(),D.c(),b=S(),this.h()},l(t){j('[data-svelte="svelte-18rvby9"]',document.head).forEach(i),e=f(t),s=c(t,"H1",{class:!0});var a=n(s);m=o(a,"Sistemin:"),a.forEach(i),p=f(t),g=c(t,"DIV",{class:!0});var r=n(g);for(let e=0;e<E.length;e+=1)E[e].l(r);r.forEach(i),v=f(t),D.l(t),b=S(),this.h()},h(){document.title="AllOEMinOne Sistem",h(s,"class","text-4xl text-center my-8"),h(g,"class","grid gap-4 grid-cols-1")},m(t,a){u(t,e,a),u(t,s,a),d(s,m),u(t,p,a),u(t,g,a);for(let e=0;e<E.length;e+=1)E[e].m(g,null);u(t,v,a),D.m(t,a),u(t,b,a),x=!0},p(t,[e]){if(1&e){let s;for($=t[0],s=0;s<$.length;s+=1){const a=P(t,$,s);E[s]?(E[s].p(a,e),w(E[s],1)):(E[s]=A(a),E[s].c(),w(E[s],1),E[s].m(g,null))}for(N(),s=$.length;s<E.length;s+=1)y(s);I()}T===(T=k(t))&&D?D.p(t,e):(D.d(1),D=T(t),D&&(D.c(),w(D,1),D.m(b.parentNode,b)))},i(t){if(!x){for(let t=0;t<$.length;t+=1)w(E[t]);w(D),x=!0}},o(t){E=E.filter(Boolean);for(let e=0;e<E.length;e+=1)M(E[e]);x=!1},d(t){t&&i(e),t&&i(s),t&&i(p),t&&i(g),L(E,t),t&&i(v),D.d(t),t&&i(b)}}}function Q(t,e,s){let a;E(t,B,(t=>s(0,a=t)));let r=a,l=0;return t.$$.update=()=>{if(3&t.$$.dirty){s(1,l=0);for(let t=0;t<a.length;t++){const e=a[t];s(1,l+=Number(e.price))}}},y(B,a=r,a),[a,l]}export default class extends t{constructor(t){super(),e(this,t,Q,K,s,{})}}
