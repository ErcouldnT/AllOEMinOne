import{S as t,i as a,s as e,e as s,t as l,k as r,c,a as o,g as n,d as i,n as u,b as f,f as h,D as d,H as p,h as m,J as b,K as v,L as g,E,R as x,M as k,N as y,j as $,m as T,o as N,v as S,r as P,w,l as O,O as A,u as B,Q as D,B as I,P as L}from"../../chunks/vendor-509cf542.js";import{b as M}from"../../chunks/build-26b407d0.js";function j(t){let a,e,k,y,$,T,N,S,P,w,O,A,B,D,I,L,M,j,z=`(${t[0].source}) ${t[0].title}`,U=t[0].price+"";return{c(){a=s("a"),e=s("h2"),k=l(z),y=r(),$=s("h3"),T=l("₺"),N=l(U),S=r(),P=s("div"),w=s("button"),O=l("Miktar"),A=r(),B=s("button"),D=l("Sil"),this.h()},l(t){a=c(t,"A",{target:!0,class:!0,href:!0});var s=o(a);e=c(s,"H2",{});var l=o(e);k=n(l,z),l.forEach(i),y=u(s),$=c(s,"H3",{});var r=o($);T=n(r,"₺"),N=n(r,U),r.forEach(i),S=u(s),P=c(s,"DIV",{class:!0});var f=o(P);w=c(f,"BUTTON",{class:!0});var h=o(w);O=n(h,"Miktar"),h.forEach(i),A=u(f),B=c(f,"BUTTON",{class:!0});var d=o(B);D=n(d,"Sil"),d.forEach(i),f.forEach(i),s.forEach(i),this.h()},h(){f(w,"class","font-bold z-10"),f(B,"class","font-bold z-10"),f(P,"class","flex gap-10"),f(a,"target","_blank"),f(a,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),f(a,"href",I=t[0].url)},m(s,l){h(s,a,l),d(a,e),d(e,k),d(a,y),d(a,$),d($,T),d($,N),d(a,S),d(a,P),d(P,w),d(w,O),d(P,A),d(P,B),d(B,D),M||(j=[p(w,"click",t[2]),p(B,"click",t[1])],M=!0)},p(t,[e]){1&e&&z!==(z=`(${t[0].source}) ${t[0].title}`)&&m(k,z),1&e&&U!==(U=t[0].price+"")&&m(N,U),1&e&&I!==(I=t[0].url)&&f(a,"href",I)},i(t){L||b((()=>{L=v(a,g,{}),L.start()}))},o:E,d(t){t&&i(a),M=!1,x(j)}}}function z(t,a,e){let s;k(t,M,(t=>e(3,s=t)));let{product:l}=a;return t.$$set=t=>{"product"in t&&e(0,l=t.product)},[l,t=>{t.preventDefault();const a=s.filter((t=>t!==l));y(M,s=a,s)},t=>{t.preventDefault()}]}class U extends t{constructor(t){super(),a(this,t,z,j,e,{product:0})}}function H(t,a,e){const s=t.slice();return s[10]=a[e],s}function V(t){let a,e;return a=new U({props:{product:t[10]}}),{c(){$(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,s){N(a,t,s),e=!0},p(t,e){const s={};1&e&&(s.product=t[10]),a.$set(s)},i(t){e||(S(a.$$.fragment,t),e=!0)},o(t){P(a.$$.fragment,t),e=!1},d(t){w(a,t)}}}function J(t){let a,e,k,y,$,T,N,S,P,w,O,A,B,D,I,M,j,z,U,H,V,J,R,C,F,K,Q,_,q,G,W;return{c(){a=s("div"),e=s("p"),k=l("Toplam: "),y=s("span"),$=l("₺"),T=l(t[1]),N=r(),S=s("form"),P=s("label"),w=s("span"),O=l("Sistem adı"),A=r(),B=s("input"),D=r(),I=s("label"),M=s("span"),j=l("İsminiz"),z=r(),U=s("input"),H=r(),V=s("label"),J=s("span"),R=l("bul.erkuttekoglu.com/build/???"),C=r(),F=s("input"),K=r(),Q=s("button"),_=l("Paylaş"),this.h()},l(s){a=c(s,"DIV",{class:!0});var l=o(a);e=c(l,"P",{class:!0});var r=o(e);k=n(r,"Toplam: "),y=c(r,"SPAN",{class:!0});var f=o(y);$=n(f,"₺"),T=n(f,t[1]),f.forEach(i),r.forEach(i),N=u(l),S=c(l,"FORM",{});var h=o(S);P=c(h,"LABEL",{class:!0});var d=o(P);w=c(d,"SPAN",{class:!0});var p=o(w);O=n(p,"Sistem adı"),p.forEach(i),A=u(d),B=c(d,"INPUT",{class:!0,placeholder:!0}),d.forEach(i),D=u(h),I=c(h,"LABEL",{class:!0});var m=o(I);M=c(m,"SPAN",{class:!0});var b=o(M);j=n(b,"İsminiz"),b.forEach(i),z=u(m),U=c(m,"INPUT",{class:!0,placeholder:!0}),m.forEach(i),H=u(h),V=c(h,"LABEL",{class:!0});var v=o(V);J=c(v,"SPAN",{class:!0});var g=o(J);R=n(g,"bul.erkuttekoglu.com/build/???"),g.forEach(i),C=u(v),F=c(v,"INPUT",{class:!0,placeholder:!0}),v.forEach(i),K=u(h),Q=c(h,"BUTTON",{class:!0});var E=o(Q);_=n(E,"Paylaş"),E.forEach(i),h.forEach(i),l.forEach(i),this.h()},h(){f(y,"class","font-bold"),f(e,"class","text-center max-w-md text-xl"),f(w,"class","text-gray-700"),f(B,"class","form-input mt-1 block w-full border-2"),f(B,"placeholder","Technopat Temmuz 2021"),f(P,"class","block"),f(M,"class","text-gray-700"),f(U,"class","form-input mt-1 block w-full border-2"),f(U,"placeholder","Ercode"),f(I,"class","block"),f(J,"class","text-gray-700"),f(F,"class","form-input mt-1 block w-full border-2"),f(F,"placeholder","sistem1"),f(V,"class","block"),f(Q,"class","items-center bg-blue-500 hover:bg-blue-700 \r\n      text-white font-bold py-2 px-4 rounded text-xl"),f(a,"class","flex flex-col justify-center items-center p-6 gap-3")},m(s,l){h(s,a,l),d(a,e),d(e,k),d(e,y),d(y,$),d(y,T),d(a,N),d(a,S),d(S,P),d(P,w),d(w,O),d(P,A),d(P,B),L(B,t[2]),d(S,D),d(S,I),d(I,M),d(M,j),d(I,z),d(I,U),L(U,t[3]),d(S,H),d(S,V),d(V,J),d(J,R),d(V,C),d(V,F),L(F,t[4]),d(S,K),d(S,Q),d(Q,_),G||(W=[p(B,"input",t[6]),p(U,"input",t[7]),p(F,"input",t[8]),p(Q,"click",t[5])],G=!0)},p(t,a){2&a&&m(T,t[1]),4&a&&B.value!==t[2]&&L(B,t[2]),8&a&&U.value!==t[3]&&L(U,t[3]),16&a&&F.value!==t[4]&&L(F,t[4])},i(t){q||b((()=>{q=v(a,g,{}),q.start()}))},o:E,d(t){t&&i(a),G=!1,x(W)}}}function R(t){let a,e,r;return{c(){a=s("div"),e=s("p"),r=l("Ürün bul'dan OEM ekleyerek başlayabilirsin."),this.h()},l(t){a=c(t,"DIV",{class:!0});var s=o(a);e=c(s,"P",{class:!0});var l=o(e);r=n(l,"Ürün bul'dan OEM ekleyerek başlayabilirsin."),l.forEach(i),s.forEach(i),this.h()},h(){f(e,"class","text-center max-w-md"),f(a,"class","flex justify-center items-center")},m(t,s){h(t,a,s),d(a,e),d(e,r)},p:E,i:E,o:E,d(t){t&&i(a)}}}function C(t){let a,e,p,m,b,v,g,E,x=t[0],k=[];for(let s=0;s<x.length;s+=1)k[s]=V(H(t,x,s));const y=t=>P(k[t],1,1,(()=>{k[t]=null}));function $(t,a){return 0===t[0].length?R:J}let T=$(t),N=T(t);return{c(){a=r(),e=s("h1"),p=l("Sistemin:"),m=r(),b=s("div");for(let t=0;t<k.length;t+=1)k[t].c();v=r(),N.c(),g=O(),this.h()},l(t){A('[data-svelte="svelte-18rvby9"]',document.head).forEach(i),a=u(t),e=c(t,"H1",{class:!0});var s=o(e);p=n(s,"Sistemin:"),s.forEach(i),m=u(t),b=c(t,"DIV",{class:!0});var l=o(b);for(let a=0;a<k.length;a+=1)k[a].l(l);l.forEach(i),v=u(t),N.l(t),g=O(),this.h()},h(){document.title="AllOEMinOne Sistem",f(e,"class","text-4xl text-center my-8"),f(b,"class","grid gap-4 grid-cols-1")},m(t,s){h(t,a,s),h(t,e,s),d(e,p),h(t,m,s),h(t,b,s);for(let a=0;a<k.length;a+=1)k[a].m(b,null);h(t,v,s),N.m(t,s),h(t,g,s),E=!0},p(t,[a]){if(1&a){let e;for(x=t[0],e=0;e<x.length;e+=1){const s=H(t,x,e);k[e]?(k[e].p(s,a),S(k[e],1)):(k[e]=V(s),k[e].c(),S(k[e],1),k[e].m(b,null))}for(I(),e=x.length;e<k.length;e+=1)y(e);B()}T===(T=$(t))&&N?N.p(t,a):(N.d(1),N=T(t),N&&(N.c(),S(N,1),N.m(g.parentNode,g)))},i(t){if(!E){for(let t=0;t<x.length;t+=1)S(k[t]);S(N),E=!0}},o(t){k=k.filter(Boolean);for(let a=0;a<k.length;a+=1)P(k[a]);E=!1},d(t){t&&i(a),t&&i(e),t&&i(m),t&&i(b),D(k,t),t&&i(v),N.d(t),t&&i(g)}}}function F(t,a,e){let s;k(t,M,(t=>e(0,s=t)));let l=s,r=0,c="",o="",n="";return t.$$.update=()=>{if(3&t.$$.dirty){e(1,r=0);for(let t=0;t<s.length;t++){const a=s[t];e(1,r+=Number(a.price))}}},y(M,s=l,s),[s,r,c,o,n,async t=>{t.preventDefault();const a={name:c,slug:n,owner:o,build:l};console.log(a),await fetch("/api/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})},function(){c=this.value,e(2,c)},function(){o=this.value,e(3,o)},function(){n=this.value,e(4,n)}]}export default class extends t{constructor(t){super(),a(this,t,F,C,e,{})}}