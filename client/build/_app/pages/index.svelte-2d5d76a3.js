import{C as e,S as t,i as a,s as c,e as s,t as n,k as r,c as o,a as i,g as l,d as h,n as u,b as p,f as d,D as k,H as f,I as m,h as b,J as y,K as g,L as v,E as C,M as w,N as E,j as x,m as $,o as I,v as S,r as N,w as T,O as j,P as L,u as A,Q as B,R as O,B as P,T as U}from"../chunks/vendor-2c35c5a7.js";import{b as H}from"../chunks/build-87c626bc.js";const J=e("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("result")?localStorage.getItem("result"):"[]"):[]);"undefined"!=typeof localStorage&&J.subscribe((e=>localStorage.setItem("result",JSON.stringify(e))));const z=e("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("filter"))?JSON.parse(localStorage.getItem("filter")):{amCheck:!0,itCheck:!0,sinCheck:!0,tbCheck:!0,inCheck:!0,mmCheck:!0,tekCheck:!0,qpCheck:!0,vbCheck:!1,hbCheck:!1}:{});"undefined"!=typeof localStorage&&z.subscribe((e=>localStorage.setItem("filter",JSON.stringify(e))));const q=e("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("search"))?JSON.parse(localStorage.getItem("search")):"":{});function D(e){let t,a,c,w,E,x,$,I,S,N,T,j,L,A,B=`(${e[0].source}) ${e[0].title}`,O=e[0].price+"",P=e[1]?"Eklendi":"Ekle";return{c(){t=s("a"),a=s("h2"),c=n(B),w=r(),E=s("h3"),x=n("₺"),$=n(O),I=r(),S=s("button"),N=n(P),this.h()},l(e){t=o(e,"A",{target:!0,class:!0,href:!0});var s=i(t);a=o(s,"H2",{});var n=i(a);c=l(n,B),n.forEach(h),w=u(s),E=o(s,"H3",{});var r=i(E);x=l(r,"₺"),$=l(r,O),r.forEach(h),I=u(s),S=o(s,"BUTTON",{class:!0});var p=i(S);N=l(p,P),p.forEach(h),s.forEach(h),this.h()},h(){p(S,"class","font-bold z-10"),p(t,"target","_blank"),p(t,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),p(t,"href",T=e[0].url)},m(s,n){d(s,t,n),k(t,a),k(a,c),k(t,w),k(t,E),k(E,x),k(E,$),k(t,I),k(t,S),k(S,N),L||(A=f(S,"click",(function(){m(e[1]?null:e[2])&&(e[1]?null:e[2]).apply(this,arguments)}),{once:!0}),L=!0)},p(a,[s]){e=a,1&s&&B!==(B=`(${e[0].source}) ${e[0].title}`)&&b(c,B),1&s&&O!==(O=e[0].price+"")&&b($,O),2&s&&P!==(P=e[1]?"Eklendi":"Ekle")&&b(N,P),1&s&&T!==(T=e[0].url)&&p(t,"href",T)},i(e){j||y((()=>{j=g(t,v,{}),j.start()}))},o:C,d(e){e&&h(t),L=!1,A()}}}function M(e,t,a){let c;w(e,H,(e=>a(3,c=e)));let{product:s}=t,n=c,r=!!c.find((e=>e.title===s.title));return e.$$set=e=>{"product"in e&&a(0,s=e.product)},E(H,c=n,c),[s,r,e=>{e.preventDefault(),a(0,s.amount=1,s),n.push(s),a(1,r=!0)}]}"undefined"!=typeof localStorage&&q.subscribe((e=>localStorage.setItem("search",JSON.stringify(e))));class V extends t{constructor(e){super(),a(this,e,M,D,c,{product:0})}}function Q(e,t,a){const c=e.slice();return c[31]=t[a],c}function K(e){let t;return{c(){t=n("Go!")},l(e){t=l(e,"Go!")},m(e,a){d(e,t,a)},d(e){e&&h(t)}}}function G(e){let t,a;return{c(){t=U("svg"),a=U("path"),this.h()},l(e){t=o(e,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var c=i(t);a=o(c,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),i(a).forEach(h),c.forEach(h),this.h()},h(){p(a,"stroke-linecap","round"),p(a,"stroke-linejoin","round"),p(a,"stroke-width","2"),p(a,"d","M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"),p(t,"xmlns","http://www.w3.org/2000/svg"),p(t,"class","animate-spin h-6 w-6"),p(t,"fill","none"),p(t,"viewBox","0 0 24 24"),p(t,"stroke","currentColor")},m(e,c){d(e,t,c),k(t,a)},d(e){e&&h(t)}}}function R(e){let t,a,c;return{c(){t=s("p"),a=n(e[1]),this.h()},l(c){t=o(c,"P",{class:!0});var s=i(t);a=l(s,e[1]),s.forEach(h),this.h()},h(){p(t,"class","text-center m-5 font-bold text-lg")},m(e,c){d(e,t,c),k(t,a)},p(e,t){2&t[0]&&b(a,e[1])},i(e){c||y((()=>{c=g(t,v,{}),c.start()}))},o:C,d(e){e&&h(t)}}}function F(e){let t,a;return t=new V({props:{product:e[31]}}),{c(){x(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,c){I(t,e,c),a=!0},p(e,a){const c={};4&a[0]&&(c.product=e[31]),t.$set(c)},i(e){a||(S(t.$$.fragment,e),a=!0)},o(e){N(t.$$.fragment,e),a=!1},d(e){T(t,e)}}}function _(e){let t,a,c,b,y,g,v,C,w,E,x,$,I,T,U,H,J,z,q,D,M,V,_,W,X,Y,Z,ee,te,ae,ce,se,ne,re,oe,ie,le,he,ue,pe,de,ke,fe,me,be,ye,ge,ve,Ce,we,Ee,xe,$e,Ie,Se,Ne,Te,je,Le,Ae,Be;function Oe(e,t){return e[0]?G:K}let Pe=Oe(e),Ue=Pe(e),He=e[1]&&R(e),Je=e[2],ze=[];for(let s=0;s<Je.length;s+=1)ze[s]=F(Q(e,Je,s));const qe=e=>N(ze[e],1,1,(()=>{ze[e]=null}));return{c(){t=r(),a=s("h1"),c=n("Ne vereyim abime?"),b=r(),y=s("p"),g=n('Kısaca "ryzen 5600" şeklinde arama yapabilirsin.'),v=r(),C=s("form"),w=s("input"),E=r(),x=s("button"),Ue.c(),T=r(),U=s("div"),H=s("div"),J=s("label"),z=s("input"),q=n("\n      Amazon"),D=r(),M=s("label"),V=s("input"),_=n("\n      Hepsiburada"),W=r(),X=s("label"),Y=s("input"),Z=n("\n      İtopya"),ee=r(),te=s("label"),ae=s("input"),ce=n("\n      Inventus"),se=r(),ne=s("label"),re=s("input"),oe=n("\n      Mediamarkt"),ie=r(),le=s("label"),he=s("input"),ue=n("\n      Qp"),pe=r(),de=s("label"),ke=s("input"),fe=n("\n      Sinerji"),me=r(),be=s("label"),ye=s("input"),ge=n("\n      Teknobiyotik"),ve=r(),Ce=s("label"),we=s("input"),Ee=n("\n      Teknosa"),xe=r(),$e=s("label"),Ie=s("input"),Se=n("\n      Vatanbilgisayar"),Ne=r(),He&&He.c(),Te=r(),je=s("div");for(let e=0;e<ze.length;e+=1)ze[e].c();this.h()},l(e){j('[data-svelte="svelte-1mnaq72"]',document.head).forEach(h),t=u(e),a=o(e,"H1",{class:!0});var s=i(a);c=l(s,"Ne vereyim abime?"),s.forEach(h),b=u(e),y=o(e,"P",{class:!0});var n=i(y);g=l(n,'Kısaca "ryzen 5600" şeklinde arama yapabilirsin.'),n.forEach(h),v=u(e),C=o(e,"FORM",{class:!0});var r=i(C);w=o(r,"INPUT",{class:!0,type:!0,placeholder:!0}),E=u(r),x=o(r,"BUTTON",{class:!0});var p=i(x);Ue.l(p),p.forEach(h),r.forEach(h),T=u(e),U=o(e,"DIV",{class:!0});var d=i(U);H=o(d,"DIV",{class:!0});var k=i(H);J=o(k,"LABEL",{class:!0});var f=i(J);z=o(f,"INPUT",{type:!0}),q=l(f,"\n      Amazon"),f.forEach(h),D=u(k),M=o(k,"LABEL",{class:!0});var m=i(M);V=o(m,"INPUT",{type:!0}),_=l(m,"\n      Hepsiburada"),m.forEach(h),W=u(k),X=o(k,"LABEL",{class:!0});var $=i(X);Y=o($,"INPUT",{type:!0}),Z=l($,"\n      İtopya"),$.forEach(h),ee=u(k),te=o(k,"LABEL",{class:!0});var I=i(te);ae=o(I,"INPUT",{type:!0}),ce=l(I,"\n      Inventus"),I.forEach(h),se=u(k),ne=o(k,"LABEL",{class:!0});var S=i(ne);re=o(S,"INPUT",{type:!0}),oe=l(S,"\n      Mediamarkt"),S.forEach(h),ie=u(k),le=o(k,"LABEL",{class:!0});var N=i(le);he=o(N,"INPUT",{type:!0}),ue=l(N,"\n      Qp"),N.forEach(h),pe=u(k),de=o(k,"LABEL",{class:!0});var L=i(de);ke=o(L,"INPUT",{type:!0}),fe=l(L,"\n      Sinerji"),L.forEach(h),me=u(k),be=o(k,"LABEL",{class:!0});var A=i(be);ye=o(A,"INPUT",{type:!0}),ge=l(A,"\n      Teknobiyotik"),A.forEach(h),ve=u(k),Ce=o(k,"LABEL",{class:!0});var B=i(Ce);we=o(B,"INPUT",{type:!0}),Ee=l(B,"\n      Teknosa"),B.forEach(h),xe=u(k),$e=o(k,"LABEL",{class:!0});var O=i($e);Ie=o(O,"INPUT",{type:!0}),Se=l(O,"\n      Vatanbilgisayar"),O.forEach(h),k.forEach(h),d.forEach(h),Ne=u(e),He&&He.l(e),Te=u(e),je=o(e,"DIV",{class:!0});var P=i(je);for(let t=0;t<ze.length;t+=1)ze[t].l(P);P.forEach(h),this.h()},h(){document.title="AllOEMinOne",p(a,"class","text-4xl text-center my-8"),p(y,"class","text-center m-3 italic"),p(w,"class","w-auto rounded-md text-lg p-4 border-2 border-gray-200"),p(w,"type","text"),p(w,"placeholder","Ürün ara"),x.disabled=$=!e[3],p(x,"class",I="items-center text-white font-bold py-2 px-4 rounded transition-all\n    "+(e[0]?"bg-red-500 hover:bg-red-700":"bg-blue-500 hover:bg-blue-700")),p(C,"class","flex flex-row justify-center p-4"),p(z,"type","checkbox"),p(J,"class","cursor-pointer"),p(V,"type","checkbox"),V.disabled=!0,p(M,"class","cursor-pointer"),p(Y,"type","checkbox"),p(X,"class","cursor-pointer"),p(ae,"type","checkbox"),p(te,"class","cursor-pointer"),p(re,"type","checkbox"),p(ne,"class","cursor-pointer"),p(he,"type","checkbox"),p(le,"class","cursor-pointer"),p(ke,"type","checkbox"),p(de,"class","cursor-pointer"),p(ye,"type","checkbox"),p(be,"class","cursor-pointer"),p(we,"type","checkbox"),p(Ce,"class","cursor-pointer"),p(Ie,"type","checkbox"),Ie.disabled=!0,p($e,"class","cursor-pointer"),p(H,"class","grid grid-cols-2 md:grid-cols-4 gap-5"),p(U,"class","flex justify-center items-center p-3"),p(je,"class","p-6 grid gap-4 grid-cols-1")},m(s,n){d(s,t,n),d(s,a,n),k(a,c),d(s,b,n),d(s,y,n),k(y,g),d(s,v,n),d(s,C,n),k(C,w),L(w,e[3]),k(C,E),k(C,x),Ue.m(x,null),d(s,T,n),d(s,U,n),k(U,H),k(H,J),k(J,z),z.checked=e[4].amCheck,k(J,q),k(H,D),k(H,M),k(M,V),V.checked=e[4].hbCheck,k(M,_),k(H,W),k(H,X),k(X,Y),Y.checked=e[4].itCheck,k(X,Z),k(H,ee),k(H,te),k(te,ae),ae.checked=e[4].inCheck,k(te,ce),k(H,se),k(H,ne),k(ne,re),re.checked=e[4].mmCheck,k(ne,oe),k(H,ie),k(H,le),k(le,he),he.checked=e[4].qpCheck,k(le,ue),k(H,pe),k(H,de),k(de,ke),ke.checked=e[4].sinCheck,k(de,fe),k(H,me),k(H,be),k(be,ye),ye.checked=e[4].tbCheck,k(be,ge),k(H,ve),k(H,Ce),k(Ce,we),we.checked=e[4].tekCheck,k(Ce,Ee),k(H,xe),k(H,$e),k($e,Ie),Ie.checked=e[4].vbCheck,k($e,Se),d(s,Ne,n),He&&He.m(s,n),d(s,Te,n),d(s,je,n);for(let e=0;e<ze.length;e+=1)ze[e].m(je,null);Le=!0,Ae||(Be=[f(w,"input",e[8]),f(x,"click",(function(){m(e[0]?e[5]:e[6])&&(e[0]?e[5]:e[6]).apply(this,arguments)})),f(z,"change",e[9]),f(V,"change",e[10]),f(Y,"change",e[11]),f(ae,"change",e[12]),f(re,"change",e[13]),f(he,"change",e[14]),f(ke,"change",e[15]),f(ye,"change",e[16]),f(we,"change",e[17]),f(Ie,"change",e[18])],Ae=!0)},p(t,a){if(e=t,8&a[0]&&w.value!==e[3]&&L(w,e[3]),Pe!==(Pe=Oe(e))&&(Ue.d(1),Ue=Pe(e),Ue&&(Ue.c(),Ue.m(x,null))),(!Le||8&a[0]&&$!==($=!e[3]))&&(x.disabled=$),(!Le||1&a[0]&&I!==(I="items-center text-white font-bold py-2 px-4 rounded transition-all\n    "+(e[0]?"bg-red-500 hover:bg-red-700":"bg-blue-500 hover:bg-blue-700")))&&p(x,"class",I),16&a[0]&&(z.checked=e[4].amCheck),16&a[0]&&(V.checked=e[4].hbCheck),16&a[0]&&(Y.checked=e[4].itCheck),16&a[0]&&(ae.checked=e[4].inCheck),16&a[0]&&(re.checked=e[4].mmCheck),16&a[0]&&(he.checked=e[4].qpCheck),16&a[0]&&(ke.checked=e[4].sinCheck),16&a[0]&&(ye.checked=e[4].tbCheck),16&a[0]&&(we.checked=e[4].tekCheck),16&a[0]&&(Ie.checked=e[4].vbCheck),e[1]?He?(He.p(e,a),2&a[0]&&S(He,1)):(He=R(e),He.c(),S(He,1),He.m(Te.parentNode,Te)):He&&(He.d(1),He=null),4&a[0]){let t;for(Je=e[2],t=0;t<Je.length;t+=1){const c=Q(e,Je,t);ze[t]?(ze[t].p(c,a),S(ze[t],1)):(ze[t]=F(c),ze[t].c(),S(ze[t],1),ze[t].m(je,null))}for(P(),t=Je.length;t<ze.length;t+=1)qe(t);A()}},i(e){if(!Le){S(He);for(let e=0;e<Je.length;e+=1)S(ze[e]);Le=!0}},o(e){ze=ze.filter(Boolean);for(let t=0;t<ze.length;t+=1)N(ze[t]);Le=!1},d(e){e&&h(t),e&&h(a),e&&h(b),e&&h(y),e&&h(v),e&&h(C),Ue.d(),e&&h(T),e&&h(U),e&&h(Ne),He&&He.d(e),e&&h(Te),e&&h(je),B(ze,e),Ae=!1,O(Be)}}}function W(e,t,a){let c,s,n;w(e,J,(e=>a(2,c=e))),w(e,q,(e=>a(3,s=e))),w(e,z,(e=>a(4,n=e)));let r=c,o="",i=!1,l="";return e.$$.update=()=>{128&e.$$.dirty[0]&&E(J,c=r.sort(((e,t)=>e.price-t.price)),c)},[i,l,c,s,n,e=>{e.preventDefault(),a(0,i=!1)},async e=>{e.preventDefault(),a(0,i=!0),o=s,o&&(a(7,r=[]),await(async e=>{const t=`/api/search/${e}`;await fetch(t)})(o),n.sinCheck&&i&&(a(1,l="Sinerji'yi arıyorum..."),await(async e=>{const t=`/api/sinerji/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),n.inCheck&&i&&(a(1,l="Inventus'u arıyorum..."),await(async e=>{const t=`/api/inventus/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),n.mmCheck&&i&&(a(1,l="Mediamarkt'ı arıyorum..."),await(async e=>{const t=`/api/mediamarkt/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),n.qpCheck&&i&&(a(1,l="Qp'yi arıyorum..."),await(async e=>{const t=`/api/qp/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),n.tbCheck&&i&&(a(1,l="Teknobiyotik'i arıyorum..."),await(async e=>{const t=`/api/teknobiyotik/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),n.tekCheck&&i&&(a(1,l="Teknosa'yı arıyorum..."),await(async e=>{const t=`/api/teknosa/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),n.hbCheck&&i&&(a(1,l="Hepsiburada'yı arıyorum..."),await(async e=>{const t=`/api/hepsiburada/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),n.vbCheck&&i&&(a(1,l="Vatanbilgisayar'ı arıyorum..."),await(async e=>{const t=`/api/vatanbilgisayar/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),n.amCheck&&i&&(a(1,l="Amazon'u arıyorum..."),await(async e=>{const t=`/api/amazon/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),n.itCheck&&i&&(a(1,l="İtopya'yı arıyorum..."),await(async e=>{const t=`/api/itopya/${e}`,c=await fetch(t),s=await c.json();i&&a(7,r=r.concat(s))})(o)),a(1,l=r.length>0?`${r.length} adet ${o.trim()} var abi buyur:`:"Abime onu vermiyim."),a(0,i=!1))},r,function(){s=this.value,q.set(s)},function(){n.amCheck=this.checked,z.set(n)},function(){n.hbCheck=this.checked,z.set(n)},function(){n.itCheck=this.checked,z.set(n)},function(){n.inCheck=this.checked,z.set(n)},function(){n.mmCheck=this.checked,z.set(n)},function(){n.qpCheck=this.checked,z.set(n)},function(){n.sinCheck=this.checked,z.set(n)},function(){n.tbCheck=this.checked,z.set(n)},function(){n.tekCheck=this.checked,z.set(n)},function(){n.vbCheck=this.checked,z.set(n)}]}export default class extends t{constructor(e){super(),a(this,e,W,_,c,{},[-1,-1])}}
