import{S as t,i as e,s,e as a,t as r,k as l,c as n,a as c,g as o,d as i,n as u,b as h,f,D as d,h as m,J as p,K as g,L as $,E as x,j as v,m as b,o as E,v as w,r as y,w as k,l as j,O as T,u as L,Q as O,B as D}from"../../chunks/vendor-509cf542.js";function A(t){let e,s,v,b,E,w,y,k,j,T=`(${t[0].source}) ${t[0].title}`,L=t[0].price+"";return{c(){e=a("a"),s=a("h2"),v=r(T),b=l(),E=a("h3"),w=r(L),y=r(" TL"),this.h()},l(t){e=n(t,"A",{target:!0,class:!0,href:!0});var a=c(e);s=n(a,"H2",{});var r=c(s);v=o(r,T),r.forEach(i),b=u(a),E=n(a,"H3",{});var l=c(E);w=o(l,L),y=o(l," TL"),l.forEach(i),a.forEach(i),this.h()},h(){h(e,"target","_blank"),h(e,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),h(e,"href",k=t[0].url)},m(t,a){f(t,e,a),d(e,s),d(s,v),d(e,b),d(e,E),d(E,w),d(E,y)},p(t,[s]){1&s&&T!==(T=`(${t[0].source}) ${t[0].title}`)&&m(v,T),1&s&&L!==(L=t[0].price+"")&&m(w,L),1&s&&k!==(k=t[0].url)&&h(e,"href",k)},i(t){j||p((()=>{j=g(e,$,{}),j.start()}))},o:x,d(t){t&&i(e)}}}function H(t,e,s){let{product:a}=e;return t.$$set=t=>{"product"in t&&s(0,a=t.product)},[a]}class I extends t{constructor(t){super(),e(this,t,H,A,s,{product:0})}}function S(t,e,s){const a=t.slice();return a[4]=e[s],a}function V(t){let e,s;return e=new I({props:{product:t[4]}}),{c(){v(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){E(e,t,a),s=!0},p:x,i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function B(t){let e,s,l,u,v,b;return{c(){e=a("div"),s=a("p"),l=r("Toplam fiyat: "),u=r(t[2]),v=r(" TL"),this.h()},l(a){e=n(a,"DIV",{class:!0});var r=c(e);s=n(r,"P",{class:!0});var h=c(s);l=o(h,"Toplam fiyat: "),u=o(h,t[2]),v=o(h," TL"),h.forEach(i),r.forEach(i),this.h()},h(){h(s,"class","text-center max-w-md font-bold text-xl"),h(e,"class","flex justify-center items-center p-6")},m(t,a){f(t,e,a),d(e,s),d(s,l),d(s,u),d(s,v)},p(t,e){4&e&&m(u,t[2])},i(t){b||p((()=>{b=g(e,$,{}),b.start()}))},o:x,d(t){t&&i(e)}}}function M(t){let e,s,l,u,p;return{c(){e=a("div"),s=a("p"),l=r('"'),u=r(t[1]),p=r('" isimli kayıt bulunamadı.'),this.h()},l(a){e=n(a,"DIV",{class:!0});var r=c(e);s=n(r,"P",{class:!0});var h=c(s);l=o(h,'"'),u=o(h,t[1]),p=o(h,'" isimli kayıt bulunamadı.'),h.forEach(i),r.forEach(i),this.h()},h(){h(s,"class","text-center max-w-md font-bold"),h(e,"class","flex justify-center items-center")},m(t,a){f(t,e,a),d(e,s),d(s,l),d(s,u),d(s,p)},p(t,e){2&e&&m(u,t[1])},i:x,o:x,d(t){t&&i(e)}}}function P(t){let e,s,p,g,$,x,v,b,E,k=t[0].name+"";document.title=e="AllOEMinOne "+t[0].owner+" Sistem";let A=t[3],H=[];for(let a=0;a<A.length;a+=1)H[a]=V(S(t,A,a));const I=t=>y(H[t],1,1,(()=>{H[t]=null}));let P=(0===t[3].length?M:B)(t);return{c(){s=l(),p=a("h1"),g=r(k),$=l(),x=a("div");for(let t=0;t<H.length;t+=1)H[t].c();v=l(),P.c(),b=j(),this.h()},l(t){T('[data-svelte="svelte-9p7kpw"]',document.head).forEach(i),s=u(t),p=n(t,"H1",{class:!0});var e=c(p);g=o(e,k),e.forEach(i),$=u(t),x=n(t,"DIV",{class:!0});var a=c(x);for(let s=0;s<H.length;s+=1)H[s].l(a);a.forEach(i),v=u(t),P.l(t),b=j(),this.h()},h(){h(p,"class","text-4xl text-center my-8"),h(x,"class","grid gap-4 grid-cols-1")},m(t,e){f(t,s,e),f(t,p,e),d(p,g),f(t,$,e),f(t,x,e);for(let s=0;s<H.length;s+=1)H[s].m(x,null);f(t,v,e),P.m(t,e),f(t,b,e),E=!0},p(t,[s]){if((!E||1&s)&&e!==(e="AllOEMinOne "+t[0].owner+" Sistem")&&(document.title=e),(!E||1&s)&&k!==(k=t[0].name+"")&&m(g,k),8&s){let e;for(A=t[3],e=0;e<A.length;e+=1){const a=S(t,A,e);H[e]?(H[e].p(a,s),w(H[e],1)):(H[e]=V(a),H[e].c(),w(H[e],1),H[e].m(x,null))}for(D(),e=A.length;e<H.length;e+=1)I(e);L()}P.p(t,s)},i(t){if(!E){for(let t=0;t<A.length;t+=1)w(H[t]);w(P),E=!0}},o(t){H=H.filter(Boolean);for(let e=0;e<H.length;e+=1)y(H[e]);E=!1},d(t){t&&i(s),t&&i(p),t&&i($),t&&i(x),O(H,t),t&&i(v),P.d(t),t&&i(b)}}}const z=async({page:t,fetch:e})=>{const s=t.params.slug,a=`/api/build/${s}`,r=await e(a);if(r.ok){return{props:{build:await r.json(),slug:s}}}const{message:l}=await r.json();return{error:new Error(l)}};function J(t,e,s){let{build:a}=e,{slug:r}=e,l=a.build,n=0;return t.$$set=t=>{"build"in t&&s(0,a=t.build),"slug"in t&&s(1,r=t.slug)},t.$$.update=()=>{if(4&t.$$.dirty){s(2,n=0);for(let t=0;t<l.length;t++){const e=l[t];s(2,n+=Number(e.price))}}},[a,r,n,l]}export default class extends t{constructor(t){super(),e(this,t,J,P,s,{build:0,slug:1})}}export{z as load};