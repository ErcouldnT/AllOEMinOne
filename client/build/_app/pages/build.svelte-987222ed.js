import{S as t,i as a,s as e,e as s,t as l,k as r,c,a as o,g as n,d as i,n as u,b as f,f as h,D as d,H as m,h as p,J as b,K as v,L as g,E,R as x,M as y,N as k,j as $,m as S,o as N,v as P,r as w,w as T,l as A,O,u as j,Q as D,B,P as I}from"../chunks/vendor-2c35c5a7.js";import{b as L}from"../chunks/build-87c626bc.js";function M(t){let a,e,y,k,$,S,N,P,w,T,A,O,j,D,B,I,L,M,U,z=`(${t[0].source}) ${t[0].title}`,V=t[0].price+"",H=t[0].amount+"";return{c(){a=s("a"),e=s("h2"),y=l(z),k=r(),$=s("h3"),S=l("₺"),N=l(V),P=r(),w=s("div"),T=s("button"),A=l("Miktar: "),O=l(H),j=r(),D=s("button"),B=l("Sil"),this.h()},l(t){a=c(t,"A",{target:!0,class:!0,href:!0});var s=o(a);e=c(s,"H2",{});var l=o(e);y=n(l,z),l.forEach(i),k=u(s),$=c(s,"H3",{});var r=o($);S=n(r,"₺"),N=n(r,V),r.forEach(i),P=u(s),w=c(s,"DIV",{class:!0});var f=o(w);T=c(f,"BUTTON",{class:!0});var h=o(T);A=n(h,"Miktar: "),O=n(h,H),h.forEach(i),j=u(f),D=c(f,"BUTTON",{class:!0});var d=o(D);B=n(d,"Sil"),d.forEach(i),f.forEach(i),s.forEach(i),this.h()},h(){f(T,"class","font-bold z-10"),f(D,"class","font-bold z-10"),f(w,"class","flex gap-10"),f(a,"target","_blank"),f(a,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),f(a,"href",I=t[0].url)},m(s,l){h(s,a,l),d(a,e),d(e,y),d(a,k),d(a,$),d($,S),d($,N),d(a,P),d(a,w),d(w,T),d(T,A),d(T,O),d(w,j),d(w,D),d(D,B),M||(U=[m(T,"click",t[2]),m(D,"click",t[1])],M=!0)},p(t,[e]){1&e&&z!==(z=`(${t[0].source}) ${t[0].title}`)&&p(y,z),1&e&&V!==(V=t[0].price+"")&&p(N,V),1&e&&H!==(H=t[0].amount+"")&&p(O,H),1&e&&I!==(I=t[0].url)&&f(a,"href",I)},i(t){L||b((()=>{L=v(a,g,{}),L.start()}))},o:E,d(t){t&&i(a),M=!1,x(U)}}}function U(t,a,e){let s;y(t,L,(t=>e(3,s=t)));let{product:l}=a;l.amount||(l.amount=1);return t.$$set=t=>{"product"in t&&e(0,l=t.product)},[l,t=>{t.preventDefault();const a=s.filter((t=>t!==l));k(L,s=a,s)},t=>{t.preventDefault(),e(0,l.amount+=1,l)}]}class z extends t{constructor(t){super(),a(this,t,U,M,e,{product:0})}}function V(t,a,e){const s=t.slice();return s[12]=a[e],s}function H(t){let a,e;return a=new z({props:{product:t[12]}}),{c(){$(a.$$.fragment)},l(t){S(a.$$.fragment,t)},m(t,s){N(a,t,s),e=!0},p(t,e){const s={};1&e&&(s.product=t[12]),a.$set(s)},i(t){e||(P(a.$$.fragment,t),e=!0)},o(t){w(a.$$.fragment,t),e=!1},d(t){T(a,t)}}}function C(t){let a,e,m,b,v,g,E,x,y,k=`https://bul.erkuttekoglu.com/${t[6]}`;return{c(){a=s("a"),e=l("Sistem "),m=l(t[6]),b=l(" linkiyle paylaşılabilir."),g=r(),E=s("a"),x=l(k),this.h()},l(s){a=c(s,"A",{href:!0,class:!0});var l=o(a);e=n(l,"Sistem "),m=n(l,t[6]),b=n(l," linkiyle paylaşılabilir."),l.forEach(i),g=u(s),E=c(s,"A",{href:!0,class:!0});var r=o(E);x=n(r,k),r.forEach(i),this.h()},h(){f(a,"href",v=`/${t[6]}`),f(a,"class","flex flex-col justify-center items-center mt-5"),f(E,"href",y=`/${t[6]}`),f(E,"class","flex flex-col justify-center items-center")},m(t,s){h(t,a,s),d(a,e),d(a,m),d(a,b),h(t,g,s),h(t,E,s),d(E,x)},p(t,e){64&e&&p(m,t[6]),64&e&&v!==(v=`/${t[6]}`)&&f(a,"href",v),64&e&&k!==(k=`https://bul.erkuttekoglu.com/${t[6]}`)&&p(x,k),64&e&&y!==(y=`/${t[6]}`)&&f(E,"href",y)},d(t){t&&i(a),t&&i(g),t&&i(E)}}}function J(t){let a,e,y,k,$,S,N,P,w,T,A,O,j,D,B,L,M,U,z,V,H,C,J,R,F,K,Q,_,q,G,W,X;return{c(){a=s("div"),e=s("p"),y=l("Toplam: "),k=s("span"),$=l("₺"),S=l(t[1]),N=r(),P=s("form"),w=s("label"),T=s("span"),A=l("Sistem adı"),O=r(),j=s("input"),D=r(),B=s("label"),L=s("span"),M=l("İsminiz"),U=r(),z=s("input"),V=r(),H=s("label"),C=s("span"),J=l("bul.erkuttekoglu.com/?"),R=r(),F=s("input"),K=r(),Q=s("div"),_=s("button"),q=l(t[5]),this.h()},l(s){a=c(s,"DIV",{class:!0});var l=o(a);e=c(l,"P",{class:!0});var r=o(e);y=n(r,"Toplam: "),k=c(r,"SPAN",{class:!0});var f=o(k);$=n(f,"₺"),S=n(f,t[1]),f.forEach(i),r.forEach(i),N=u(l),P=c(l,"FORM",{class:!0});var h=o(P);w=c(h,"LABEL",{class:!0});var d=o(w);T=c(d,"SPAN",{class:!0});var m=o(T);A=n(m,"Sistem adı"),m.forEach(i),O=u(d),j=c(d,"INPUT",{class:!0,placeholder:!0}),d.forEach(i),D=u(h),B=c(h,"LABEL",{class:!0});var p=o(B);L=c(p,"SPAN",{class:!0});var b=o(L);M=n(b,"İsminiz"),b.forEach(i),U=u(p),z=c(p,"INPUT",{class:!0,placeholder:!0}),p.forEach(i),V=u(h),H=c(h,"LABEL",{class:!0});var v=o(H);C=c(v,"SPAN",{class:!0});var g=o(C);J=n(g,"bul.erkuttekoglu.com/?"),g.forEach(i),R=u(v),F=c(v,"INPUT",{class:!0,placeholder:!0}),v.forEach(i),K=u(h),Q=c(h,"DIV",{class:!0});var E=o(Q);_=c(E,"BUTTON",{class:!0});var x=o(_);q=n(x,t[5]),x.forEach(i),E.forEach(i),h.forEach(i),l.forEach(i),this.h()},h(){f(k,"class","font-bold"),f(e,"class","text-center max-w-md text-xl"),f(T,"class","text-gray-700"),f(j,"class","form-input mt-1 block w-full border-2"),f(j,"placeholder"," Sistem-1"),f(w,"class","block"),f(L,"class","text-gray-700"),f(z,"class","form-input mt-1 block w-full border-2"),f(z,"placeholder"," Ercode"),f(B,"class","block"),f(C,"class","text-gray-700"),f(F,"class","form-input mt-1 block w-full border-2"),f(F,"placeholder"," sistem1"),f(H,"class","block"),f(_,"class","mt-3 items-center bg-blue-500 hover:bg-blue-700 \n        text-white font-bold py-2 px-4 rounded text-lg"),f(Q,"class","flex justify-end"),f(P,"class","gap-2 mt-5"),f(a,"class","flex flex-col justify-center items-center p-6 gap-3")},m(s,l){h(s,a,l),d(a,e),d(e,y),d(e,k),d(k,$),d(k,S),d(a,N),d(a,P),d(P,w),d(w,T),d(T,A),d(w,O),d(w,j),I(j,t[2]),d(P,D),d(P,B),d(B,L),d(L,M),d(B,U),d(B,z),I(z,t[3]),d(P,V),d(P,H),d(H,C),d(C,J),d(H,R),d(H,F),I(F,t[4]),d(P,K),d(P,Q),d(Q,_),d(_,q),W||(X=[m(j,"input",t[8]),m(z,"input",t[9]),m(F,"input",t[10]),m(_,"click",t[7])],W=!0)},p(t,a){2&a&&p(S,t[1]),4&a&&j.value!==t[2]&&I(j,t[2]),8&a&&z.value!==t[3]&&I(z,t[3]),16&a&&F.value!==t[4]&&I(F,t[4]),32&a&&p(q,t[5])},i(t){G||b((()=>{G=v(a,g,{}),G.start()}))},o:E,d(t){t&&i(a),W=!1,x(X)}}}function R(t){let a,e,r;return{c(){a=s("div"),e=s("p"),r=l("Ürün bul'dan OEM ekleyerek başlayabilirsin."),this.h()},l(t){a=c(t,"DIV",{class:!0});var s=o(a);e=c(s,"P",{class:!0});var l=o(e);r=n(l,"Ürün bul'dan OEM ekleyerek başlayabilirsin."),l.forEach(i),s.forEach(i),this.h()},h(){f(e,"class","text-center max-w-md"),f(a,"class","flex justify-center items-center")},m(t,s){h(t,a,s),d(a,e),d(e,r)},p:E,i:E,o:E,d(t){t&&i(a)}}}function F(t){let a,e,m,p,b,v,g,E,x,y=t[0],k=[];for(let s=0;s<y.length;s+=1)k[s]=H(V(t,y,s));const $=t=>w(k[t],1,1,(()=>{k[t]=null}));let S="Paylaşıldı"===t[5]&&C(t);function N(t,a){return 0===t[0].length?R:J}let T=N(t),I=T(t);return{c(){a=r(),e=s("h1"),m=l("Sistemin:"),p=r(),b=s("div");for(let t=0;t<k.length;t+=1)k[t].c();v=r(),S&&S.c(),g=r(),I.c(),E=A(),this.h()},l(t){O('[data-svelte="svelte-18rvby9"]',document.head).forEach(i),a=u(t),e=c(t,"H1",{class:!0});var s=o(e);m=n(s,"Sistemin:"),s.forEach(i),p=u(t),b=c(t,"DIV",{class:!0});var l=o(b);for(let a=0;a<k.length;a+=1)k[a].l(l);l.forEach(i),v=u(t),S&&S.l(t),g=u(t),I.l(t),E=A(),this.h()},h(){document.title="AllOEMinOne Sistem",f(e,"class","text-4xl text-center my-8"),f(b,"class","grid gap-4 grid-cols-1")},m(t,s){h(t,a,s),h(t,e,s),d(e,m),h(t,p,s),h(t,b,s);for(let a=0;a<k.length;a+=1)k[a].m(b,null);h(t,v,s),S&&S.m(t,s),h(t,g,s),I.m(t,s),h(t,E,s),x=!0},p(t,[a]){if(1&a){let e;for(y=t[0],e=0;e<y.length;e+=1){const s=V(t,y,e);k[e]?(k[e].p(s,a),P(k[e],1)):(k[e]=H(s),k[e].c(),P(k[e],1),k[e].m(b,null))}for(B(),e=y.length;e<k.length;e+=1)$(e);j()}"Paylaşıldı"===t[5]?S?S.p(t,a):(S=C(t),S.c(),S.m(g.parentNode,g)):S&&(S.d(1),S=null),T===(T=N(t))&&I?I.p(t,a):(I.d(1),I=T(t),I&&(I.c(),P(I,1),I.m(E.parentNode,E)))},i(t){if(!x){for(let t=0;t<y.length;t+=1)P(k[t]);P(I),x=!0}},o(t){k=k.filter(Boolean);for(let a=0;a<k.length;a+=1)w(k[a]);x=!1},d(t){t&&i(a),t&&i(e),t&&i(p),t&&i(b),D(k,t),t&&i(v),S&&S.d(t),t&&i(g),I.d(t),t&&i(E)}}}function K(t,a,e){let s;y(t,L,(t=>e(0,s=t)));let l=s,r=0,c="",o="",n="",i="Paylaş",u="";return t.$$.update=()=>{if(3&t.$$.dirty){e(1,r=0);for(let t=0;t<s.length;t++){const a=s[t];e(1,r+=Number(a.price))}}},k(L,s=l,s),[s,r,c,o,n,i,u,async t=>{t.preventDefault();const a={name:c,slug:n.toLowerCase(),owner:o,build:l},s=await fetch("/api/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});(await s.json()).message?(e(5,i="Url değiştir."),e(4,n="")):(e(5,i="Paylaşıldı"),e(6,u=n),e(2,c=""),e(3,o=""),e(4,n=""))},function(){c=this.value,e(2,c)},function(){o=this.value,e(3,o)},function(){n=this.value,e(4,n)}]}export default class extends t{constructor(t){super(),a(this,t,K,F,e,{})}}
