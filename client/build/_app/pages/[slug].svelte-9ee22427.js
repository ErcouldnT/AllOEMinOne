import{S as t,i as s,s as e,e as a,t as r,k as l,c as n,a as c,g as o,d as i,n as u,b as h,f,D as d,h as m,J as p,K as g,L as x,E as $,j as v,m as E,o as b,v as w,r as y,w as k,l as j,O as A,u as O,Q as S,B as D}from"../chunks/vendor-509cf542.js";function P(t){let s,e,v,E,b,w,y,k,j,A=`(${t[0].source}) ${t[0].title}`,O=t[0].price+"";return{c(){s=a("a"),e=a("h2"),v=r(A),E=l(),b=a("h3"),w=r("₺"),y=r(O),this.h()},l(t){s=n(t,"A",{target:!0,class:!0,href:!0});var a=c(s);e=n(a,"H2",{});var r=c(e);v=o(r,A),r.forEach(i),E=u(a),b=n(a,"H3",{});var l=c(b);w=o(l,"₺"),y=o(l,O),l.forEach(i),a.forEach(i),this.h()},h(){h(s,"target","_blank"),h(s,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),h(s,"href",k=t[0].url)},m(t,a){f(t,s,a),d(s,e),d(e,v),d(s,E),d(s,b),d(b,w),d(b,y)},p(t,[e]){1&e&&A!==(A=`(${t[0].source}) ${t[0].title}`)&&m(v,A),1&e&&O!==(O=t[0].price+"")&&m(y,O),1&e&&k!==(k=t[0].url)&&h(s,"href",k)},i(t){j||p((()=>{j=g(s,x,{}),j.start()}))},o:$,d(t){t&&i(s)}}}function H(t,s,e){let{product:a}=s;return t.$$set=t=>{"product"in t&&e(0,a=t.product)},[a]}class I extends t{constructor(t){super(),s(this,t,H,P,e,{product:0})}}function N(t,s,e){const a=t.slice();return a[4]=s[e],a}function V(t){let s,e;return s=new I({props:{product:t[4]}}),{c(){v(s.$$.fragment)},l(t){E(s.$$.fragment,t)},m(t,a){b(s,t,a),e=!0},p:$,i(t){e||(w(s.$$.fragment,t),e=!0)},o(t){y(s.$$.fragment,t),e=!1},d(t){k(s,t)}}}function B(t){let s,e,l,u,v,E,b;return{c(){s=a("div"),e=a("p"),l=r("Toplam: "),u=a("span"),v=r("₺"),E=r(t[2]),this.h()},l(a){s=n(a,"DIV",{class:!0});var r=c(s);e=n(r,"P",{class:!0});var h=c(e);l=o(h,"Toplam: "),u=n(h,"SPAN",{class:!0});var f=c(u);v=o(f,"₺"),E=o(f,t[2]),f.forEach(i),h.forEach(i),r.forEach(i),this.h()},h(){h(u,"class","font-bold"),h(e,"class","text-center max-w-md text-xl"),h(s,"class","flex justify-center items-center p-6")},m(t,a){f(t,s,a),d(s,e),d(e,l),d(e,u),d(u,v),d(u,E)},p(t,s){4&s&&m(E,t[2])},i(t){b||p((()=>{b=g(s,x,{}),b.start()}))},o:$,d(t){t&&i(s)}}}function M(t){let s,e,l,u,p;return{c(){s=a("div"),e=a("p"),l=a("span"),u=r(t[1]),p=r(" isimli kayıt bulunamadı."),this.h()},l(a){s=n(a,"DIV",{class:!0});var r=c(s);e=n(r,"P",{class:!0});var h=c(e);l=n(h,"SPAN",{class:!0});var f=c(l);u=o(f,t[1]),f.forEach(i),p=o(h," isimli kayıt bulunamadı."),h.forEach(i),r.forEach(i),this.h()},h(){h(l,"class","font-bold text-xl"),h(e,"class","text-center max-w-md"),h(s,"class","flex justify-center items-center")},m(t,a){f(t,s,a),d(s,e),d(e,l),d(l,u),d(e,p)},p(t,s){2&s&&m(u,t[1])},i:$,o:$,d(t){t&&i(s)}}}function T(t){let s,e,p,g,x,$,v,E,b,k=t[0].name+"";document.title=s="AllOEMinOne "+t[0].owner+" Sistem";let P=t[3],H=[];for(let a=0;a<P.length;a+=1)H[a]=V(N(t,P,a));const I=t=>y(H[t],1,1,(()=>{H[t]=null}));let T=(0===t[3].length?M:B)(t);return{c(){e=l(),p=a("h1"),g=r(k),x=l(),$=a("div");for(let t=0;t<H.length;t+=1)H[t].c();v=l(),T.c(),E=j(),this.h()},l(t){A('[data-svelte="svelte-9p7kpw"]',document.head).forEach(i),e=u(t),p=n(t,"H1",{class:!0});var s=c(p);g=o(s,k),s.forEach(i),x=u(t),$=n(t,"DIV",{class:!0});var a=c($);for(let e=0;e<H.length;e+=1)H[e].l(a);a.forEach(i),v=u(t),T.l(t),E=j(),this.h()},h(){h(p,"class","text-4xl text-center my-8"),h($,"class","grid gap-4 grid-cols-1")},m(t,s){f(t,e,s),f(t,p,s),d(p,g),f(t,x,s),f(t,$,s);for(let e=0;e<H.length;e+=1)H[e].m($,null);f(t,v,s),T.m(t,s),f(t,E,s),b=!0},p(t,[e]){if((!b||1&e)&&s!==(s="AllOEMinOne "+t[0].owner+" Sistem")&&(document.title=s),(!b||1&e)&&k!==(k=t[0].name+"")&&m(g,k),8&e){let s;for(P=t[3],s=0;s<P.length;s+=1){const a=N(t,P,s);H[s]?(H[s].p(a,e),w(H[s],1)):(H[s]=V(a),H[s].c(),w(H[s],1),H[s].m($,null))}for(D(),s=P.length;s<H.length;s+=1)I(s);O()}T.p(t,e)},i(t){if(!b){for(let t=0;t<P.length;t+=1)w(H[t]);w(T),b=!0}},o(t){H=H.filter(Boolean);for(let s=0;s<H.length;s+=1)y(H[s]);b=!1},d(t){t&&i(e),t&&i(p),t&&i(x),t&&i($),S(H,t),t&&i(v),T.d(t),t&&i(E)}}}const z=async({page:t,fetch:s})=>{const e=t.params.slug,a=`/api/build/${e}`,r=await s(a);if(r.ok){return{props:{build:await r.json(),slug:e}}}const{message:l}=await r.json();return{error:new Error(l)}};function J(t,s,e){let{build:a}=s,{slug:r}=s,l=a.build,n=0;return t.$$set=t=>{"build"in t&&e(0,a=t.build),"slug"in t&&e(1,r=t.slug)},t.$$.update=()=>{if(4&t.$$.dirty){e(2,n=0);for(let t=0;t<l.length;t++){const s=l[t];e(2,n+=Number(s.price))}}},[a,r,n,l]}export default class extends t{constructor(t){super(),s(this,t,J,T,e,{build:0,slug:1})}}export{z as load};
