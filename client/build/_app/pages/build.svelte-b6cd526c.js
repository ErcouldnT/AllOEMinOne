import{S as t,i as a,s as e,e as l,t as s,k as r,c,a as o,g as n,d as i,n as u,b as f,f as h,D as m,H as d,h as p,J as b,K as v,L as g,E,R as x,M as y,N as k,j as $,m as S,o as N,v as P,r as w,w as T,l as A,O,u as j,Q as D,B,P as I}from"../chunks/vendor-2c35c5a7.js";import{b as L}from"../chunks/build-87c626bc.js";function M(t){let a,e,y,k,$,S,N,P,w,T,A,O,j,D,B,I,L,M,U,z=`(${t[0].source}) ${t[0].title}`,V=t[0].price+"",H=t[0].amount+"";return{c(){a=l("a"),e=l("h2"),y=s(z),k=r(),$=l("h3"),S=s("₺"),N=s(V),P=r(),w=l("div"),T=l("button"),A=s("Miktar: "),O=s(H),j=r(),D=l("button"),B=s("Sil"),this.h()},l(t){a=c(t,"A",{target:!0,class:!0,href:!0});var l=o(a);e=c(l,"H2",{});var s=o(e);y=n(s,z),s.forEach(i),k=u(l),$=c(l,"H3",{});var r=o($);S=n(r,"₺"),N=n(r,V),r.forEach(i),P=u(l),w=c(l,"DIV",{class:!0});var f=o(w);T=c(f,"BUTTON",{class:!0});var h=o(T);A=n(h,"Miktar: "),O=n(h,H),h.forEach(i),j=u(f),D=c(f,"BUTTON",{class:!0});var m=o(D);B=n(m,"Sil"),m.forEach(i),f.forEach(i),l.forEach(i),this.h()},h(){f(T,"class","font-bold z-10"),f(D,"class","font-bold z-10"),f(w,"class","flex gap-10"),f(a,"target","_blank"),f(a,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),f(a,"href",I=t[0].url)},m(l,s){h(l,a,s),m(a,e),m(e,y),m(a,k),m(a,$),m($,S),m($,N),m(a,P),m(a,w),m(w,T),m(T,A),m(T,O),m(w,j),m(w,D),m(D,B),M||(U=[d(T,"click",t[2]),d(D,"click",t[1])],M=!0)},p(t,[e]){1&e&&z!==(z=`(${t[0].source}) ${t[0].title}`)&&p(y,z),1&e&&V!==(V=t[0].price+"")&&p(N,V),1&e&&H!==(H=t[0].amount+"")&&p(O,H),1&e&&I!==(I=t[0].url)&&f(a,"href",I)},i(t){L||b((()=>{L=v(a,g,{}),L.start()}))},o:E,d(t){t&&i(a),M=!1,x(U)}}}function U(t,a,e){let l;y(t,L,(t=>e(3,l=t)));let{product:s}=a;s.amount||(s.amount=1);return t.$$set=t=>{"product"in t&&e(0,s=t.product)},[s,t=>{t.preventDefault();const a=l.filter((t=>t!==s));k(L,l=a,l)},t=>{t.preventDefault(),e(0,s.amount+=1,s);for(let a=0;a<l.length;a++)l[a]===s.title&&k(L,l[a].amount=l[a].amount+1,l)}]}class z extends t{constructor(t){super(),a(this,t,U,M,e,{product:0})}}function V(t,a,e){const l=t.slice();return l[12]=a[e],l}function H(t){let a,e;return a=new z({props:{product:t[12]}}),{c(){$(a.$$.fragment)},l(t){S(a.$$.fragment,t)},m(t,l){N(a,t,l),e=!0},p(t,e){const l={};2&e&&(l.product=t[12]),a.$set(l)},i(t){e||(P(a.$$.fragment,t),e=!0)},o(t){w(a.$$.fragment,t),e=!1},d(t){T(a,t)}}}function C(t){let a,e,d,b,v,g,E,x,y,k=`https://bul.erkuttekoglu.com/${t[6]}`;return{c(){a=l("a"),e=s("Sistem "),d=s(t[6]),b=s(" linkiyle paylaşılabilir."),g=r(),E=l("a"),x=s(k),this.h()},l(l){a=c(l,"A",{href:!0,class:!0});var s=o(a);e=n(s,"Sistem "),d=n(s,t[6]),b=n(s," linkiyle paylaşılabilir."),s.forEach(i),g=u(l),E=c(l,"A",{href:!0,class:!0});var r=o(E);x=n(r,k),r.forEach(i),this.h()},h(){f(a,"href",v=`/${t[6]}`),f(a,"class","flex flex-col justify-center items-center mt-5"),f(E,"href",y=`/${t[6]}`),f(E,"class","flex flex-col justify-center items-center")},m(t,l){h(t,a,l),m(a,e),m(a,d),m(a,b),h(t,g,l),h(t,E,l),m(E,x)},p(t,e){64&e&&p(d,t[6]),64&e&&v!==(v=`/${t[6]}`)&&f(a,"href",v),64&e&&k!==(k=`https://bul.erkuttekoglu.com/${t[6]}`)&&p(x,k),64&e&&y!==(y=`/${t[6]}`)&&f(E,"href",y)},d(t){t&&i(a),t&&i(g),t&&i(E)}}}function J(t){let a,e,y,k,$,S,N,P,w,T,A,O,j,D,B,L,M,U,z,V,H,C,J,R,F,K,Q,_,q,G,W,X;return{c(){a=l("div"),e=l("p"),y=s("Toplam: "),k=l("span"),$=s("₺"),S=s(t[0]),N=r(),P=l("form"),w=l("label"),T=l("span"),A=s("Sistem adı"),O=r(),j=l("input"),D=r(),B=l("label"),L=l("span"),M=s("İsminiz"),U=r(),z=l("input"),V=r(),H=l("label"),C=l("span"),J=s("bul.erkuttekoglu.com/?"),R=r(),F=l("input"),K=r(),Q=l("div"),_=l("button"),q=s(t[5]),this.h()},l(l){a=c(l,"DIV",{class:!0});var s=o(a);e=c(s,"P",{class:!0});var r=o(e);y=n(r,"Toplam: "),k=c(r,"SPAN",{class:!0});var f=o(k);$=n(f,"₺"),S=n(f,t[0]),f.forEach(i),r.forEach(i),N=u(s),P=c(s,"FORM",{class:!0});var h=o(P);w=c(h,"LABEL",{class:!0});var m=o(w);T=c(m,"SPAN",{class:!0});var d=o(T);A=n(d,"Sistem adı"),d.forEach(i),O=u(m),j=c(m,"INPUT",{class:!0,placeholder:!0}),m.forEach(i),D=u(h),B=c(h,"LABEL",{class:!0});var p=o(B);L=c(p,"SPAN",{class:!0});var b=o(L);M=n(b,"İsminiz"),b.forEach(i),U=u(p),z=c(p,"INPUT",{class:!0,placeholder:!0}),p.forEach(i),V=u(h),H=c(h,"LABEL",{class:!0});var v=o(H);C=c(v,"SPAN",{class:!0});var g=o(C);J=n(g,"bul.erkuttekoglu.com/?"),g.forEach(i),R=u(v),F=c(v,"INPUT",{class:!0,placeholder:!0}),v.forEach(i),K=u(h),Q=c(h,"DIV",{class:!0});var E=o(Q);_=c(E,"BUTTON",{class:!0});var x=o(_);q=n(x,t[5]),x.forEach(i),E.forEach(i),h.forEach(i),s.forEach(i),this.h()},h(){f(k,"class","font-bold"),f(e,"class","text-center max-w-md text-xl"),f(T,"class","text-gray-700"),f(j,"class","form-input mt-1 block w-full border-2"),f(j,"placeholder"," Sistem-1"),f(w,"class","block"),f(L,"class","text-gray-700"),f(z,"class","form-input mt-1 block w-full border-2"),f(z,"placeholder"," Ercode"),f(B,"class","block"),f(C,"class","text-gray-700"),f(F,"class","form-input mt-1 block w-full border-2"),f(F,"placeholder"," sistem1"),f(H,"class","block"),f(_,"class","mt-3 items-center bg-blue-500 hover:bg-blue-700 \n        text-white font-bold py-2 px-4 rounded text-lg"),f(Q,"class","flex justify-end"),f(P,"class","gap-2 mt-5"),f(a,"class","flex flex-col justify-center items-center p-6 gap-3")},m(l,s){h(l,a,s),m(a,e),m(e,y),m(e,k),m(k,$),m(k,S),m(a,N),m(a,P),m(P,w),m(w,T),m(T,A),m(w,O),m(w,j),I(j,t[2]),m(P,D),m(P,B),m(B,L),m(L,M),m(B,U),m(B,z),I(z,t[3]),m(P,V),m(P,H),m(H,C),m(C,J),m(H,R),m(H,F),I(F,t[4]),m(P,K),m(P,Q),m(Q,_),m(_,q),W||(X=[d(j,"input",t[8]),d(z,"input",t[9]),d(F,"input",t[10]),d(_,"click",t[7])],W=!0)},p(t,a){1&a&&p(S,t[0]),4&a&&j.value!==t[2]&&I(j,t[2]),8&a&&z.value!==t[3]&&I(z,t[3]),16&a&&F.value!==t[4]&&I(F,t[4]),32&a&&p(q,t[5])},i(t){G||b((()=>{G=v(a,g,{}),G.start()}))},o:E,d(t){t&&i(a),W=!1,x(X)}}}function R(t){let a,e,r;return{c(){a=l("div"),e=l("p"),r=s("Ürün bul'dan OEM ekleyerek başlayabilirsin."),this.h()},l(t){a=c(t,"DIV",{class:!0});var l=o(a);e=c(l,"P",{class:!0});var s=o(e);r=n(s,"Ürün bul'dan OEM ekleyerek başlayabilirsin."),s.forEach(i),l.forEach(i),this.h()},h(){f(e,"class","text-center max-w-md"),f(a,"class","flex justify-center items-center")},m(t,l){h(t,a,l),m(a,e),m(e,r)},p:E,i:E,o:E,d(t){t&&i(a)}}}function F(t){let a,e,d,p,b,v,g,E,x,y=t[1],k=[];for(let l=0;l<y.length;l+=1)k[l]=H(V(t,y,l));const $=t=>w(k[t],1,1,(()=>{k[t]=null}));let S="Paylaşıldı"===t[5]&&C(t);function N(t,a){return 0===t[1].length?R:J}let T=N(t),I=T(t);return{c(){a=r(),e=l("h1"),d=s("Sistemin:"),p=r(),b=l("div");for(let t=0;t<k.length;t+=1)k[t].c();v=r(),S&&S.c(),g=r(),I.c(),E=A(),this.h()},l(t){O('[data-svelte="svelte-18rvby9"]',document.head).forEach(i),a=u(t),e=c(t,"H1",{class:!0});var l=o(e);d=n(l,"Sistemin:"),l.forEach(i),p=u(t),b=c(t,"DIV",{class:!0});var s=o(b);for(let a=0;a<k.length;a+=1)k[a].l(s);s.forEach(i),v=u(t),S&&S.l(t),g=u(t),I.l(t),E=A(),this.h()},h(){document.title="AllOEMinOne Sistem",f(e,"class","text-4xl text-center my-8"),f(b,"class","grid gap-4 grid-cols-1")},m(t,l){h(t,a,l),h(t,e,l),m(e,d),h(t,p,l),h(t,b,l);for(let a=0;a<k.length;a+=1)k[a].m(b,null);h(t,v,l),S&&S.m(t,l),h(t,g,l),I.m(t,l),h(t,E,l),x=!0},p(t,[a]){if(2&a){let e;for(y=t[1],e=0;e<y.length;e+=1){const l=V(t,y,e);k[e]?(k[e].p(l,a),P(k[e],1)):(k[e]=H(l),k[e].c(),P(k[e],1),k[e].m(b,null))}for(B(),e=y.length;e<k.length;e+=1)$(e);j()}"Paylaşıldı"===t[5]?S?S.p(t,a):(S=C(t),S.c(),S.m(g.parentNode,g)):S&&(S.d(1),S=null),T===(T=N(t))&&I?I.p(t,a):(I.d(1),I=T(t),I&&(I.c(),P(I,1),I.m(E.parentNode,E)))},i(t){if(!x){for(let t=0;t<y.length;t+=1)P(k[t]);P(I),x=!0}},o(t){k=k.filter(Boolean);for(let a=0;a<k.length;a+=1)w(k[a]);x=!1},d(t){t&&i(a),t&&i(e),t&&i(p),t&&i(b),D(k,t),t&&i(v),S&&S.d(t),t&&i(g),I.d(t),t&&i(E)}}}function K(t,a,e){let l;y(t,L,(t=>e(1,l=t)));let s=l,r=0,c="",o="",n="",i="Paylaş",u="";return t.$$.update=()=>{if(3&t.$$.dirty){e(0,r=0);for(let t=0;t<l.length;t++){const a=l[t];e(0,r+=a.amount*Number(a.price))}}},k(L,l=s,l),[r,l,c,o,n,i,u,async t=>{t.preventDefault();const a={name:c,slug:n.toLowerCase(),owner:o,build:s},l=await fetch("/api/build",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});(await l.json()).message?(e(5,i="Url değiştir."),e(4,n="")):(e(5,i="Paylaşıldı"),e(6,u=n),e(2,c=""),e(3,o=""),e(4,n=""))},function(){c=this.value,e(2,c)},function(){o=this.value,e(3,o)},function(){n=this.value,e(4,n)}]}export default class extends t{constructor(t){super(),a(this,t,K,F,e,{})}}
