import{C as e,S as a,i as t,s as c,e as s,t as n,k as r,c as o,a as i,g as l,d as h,n as p,b as u,f as d,D as k,H as f,I as m,h as b,J as y,K as g,L as v,E as C,M as w,N as E,j as x,m as $,o as I,v as S,r as N,w as L,O as T,P as j,Q as A,u as B,R as O,T as P,B as U}from"../chunks/vendor-e2d8fcd2.js";import{b as J}from"../chunks/build-c5cead3a.js";const z=e("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("result")?localStorage.getItem("result"):"[]"):[]);"undefined"!=typeof localStorage&&z.subscribe((e=>localStorage.setItem("result",JSON.stringify(e))));const q=e("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("filter"))?JSON.parse(localStorage.getItem("filter")):{amCheck:!0,itCheck:!0,sinCheck:!0,tbCheck:!0,inCheck:!0,mmCheck:!0,tekCheck:!0,qpCheck:!0,vbCheck:!1,hbCheck:!1}:{});"undefined"!=typeof localStorage&&q.subscribe((e=>localStorage.setItem("filter",JSON.stringify(e))));const H=e("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("search"))?JSON.parse(localStorage.getItem("search")):"":{});function D(e){let a,t,c,w,E,x,$,I,S,N,L,T,j,A,B=`(${e[0].source}) ${e[0].title}`,O=e[0].price+"",P=e[1]?"Eklendi":"Ekle";return{c(){a=s("a"),t=s("h2"),c=n(B),w=r(),E=s("h3"),x=n("₺"),$=n(O),I=r(),S=s("button"),N=n(P),this.h()},l(e){a=o(e,"A",{target:!0,class:!0,href:!0});var s=i(a);t=o(s,"H2",{});var n=i(t);c=l(n,B),n.forEach(h),w=p(s),E=o(s,"H3",{});var r=i(E);x=l(r,"₺"),$=l(r,O),r.forEach(h),I=p(s),S=o(s,"BUTTON",{class:!0});var u=i(S);N=l(u,P),u.forEach(h),s.forEach(h),this.h()},h(){u(S,"class","font-bold z-10"),u(a,"target","_blank"),u(a,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),u(a,"href",L=e[0].url)},m(s,n){d(s,a,n),k(a,t),k(t,c),k(a,w),k(a,E),k(E,x),k(E,$),k(a,I),k(a,S),k(S,N),j||(A=f(S,"click",(function(){m(e[1]?null:e[2])&&(e[1]?null:e[2]).apply(this,arguments)}),{once:!0}),j=!0)},p(t,[s]){e=t,1&s&&B!==(B=`(${e[0].source}) ${e[0].title}`)&&b(c,B),1&s&&O!==(O=e[0].price+"")&&b($,O),2&s&&P!==(P=e[1]?"Eklendi":"Ekle")&&b(N,P),1&s&&L!==(L=e[0].url)&&u(a,"href",L)},i(e){T||y((()=>{T=g(a,v,{}),T.start()}))},o:C,d(e){e&&h(a),j=!1,A()}}}function M(e,a,t){let c;w(e,J,(e=>t(3,c=e)));let{product:s}=a,n=c,r=!!c.find((e=>e.title===s.title));return e.$$set=e=>{"product"in e&&t(0,s=e.product)},E(J,c=n,c),[s,r,e=>{e.preventDefault(),n.push(s),t(1,r=!0)}]}"undefined"!=typeof localStorage&&H.subscribe((e=>localStorage.setItem("search",JSON.stringify(e))));class V extends a{constructor(e){super(),t(this,e,M,D,c,{product:0})}}function Q(e,a,t){const c=e.slice();return c[30]=a[t],c}function K(e){let a,t,c;return{c(){a=s("p"),t=n(e[1]),this.h()},l(c){a=o(c,"P",{class:!0});var s=i(a);t=l(s,e[1]),s.forEach(h),this.h()},h(){u(a,"class","text-center m-5 font-bold text-lg")},m(e,c){d(e,a,c),k(a,t)},p(e,a){2&a[0]&&b(t,e[1])},i(e){c||y((()=>{c=g(a,v,{}),c.start()}))},o:C,d(e){e&&h(a)}}}function G(e){let a,t;return a=new V({props:{product:e[30]}}),{c(){x(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,c){I(a,e,c),t=!0},p(e,t){const c={};4&t[0]&&(c.product=e[30]),a.$set(c)},i(e){t||(S(a.$$.fragment,e),t=!0)},o(e){N(a.$$.fragment,e),t=!1},d(e){L(a,e)}}}function R(e){let a,t,c,m,b,y,g,v,C,w,E,x,$,I,L,J,z,q,H,D,M,V,R,F,_,W,X,Y,Z,ee,ae,te,ce,se,ne,re,oe,ie,le,he,pe,ue,de,ke,fe,me,be,ye,ge,ve,Ce,we,Ee,xe,$e,Ie,Se,Ne,Le,Te,je,Ae,Be,Oe=e[1]&&K(e),Pe=e[2],Ue=[];for(let s=0;s<Pe.length;s+=1)Ue[s]=G(Q(e,Pe,s));const Je=e=>N(Ue[e],1,1,(()=>{Ue[e]=null}));return{c(){a=r(),t=s("h1"),c=n("Ne vereyim abime?"),m=r(),b=s("p"),y=n('Kısaca "ryzen 5600" şeklinde arama yapabilirsin.'),g=r(),v=s("form"),C=s("input"),w=r(),E=s("button"),x=T("svg"),$=n("\n    Go!"),J=r(),z=s("div"),q=s("div"),H=s("label"),D=s("input"),M=n("\n      Amazon"),V=r(),R=s("label"),F=s("input"),_=n("\n      Hepsiburada"),W=r(),X=s("label"),Y=s("input"),Z=n("\n      İtopya"),ee=r(),ae=s("label"),te=s("input"),ce=n("\n      Inventus"),se=r(),ne=s("label"),re=s("input"),oe=n("\n      Mediamarkt"),ie=r(),le=s("label"),he=s("input"),pe=n("\n      Qp"),ue=r(),de=s("label"),ke=s("input"),fe=n("\n      Sinerji"),me=r(),be=s("label"),ye=s("input"),ge=n("\n      Teknobiyotik"),ve=r(),Ce=s("label"),we=s("input"),Ee=n("\n      Teknosa"),xe=r(),$e=s("label"),Ie=s("input"),Se=n("\n      Vatanbilgisayar"),Ne=r(),Oe&&Oe.c(),Le=r(),Te=s("div");for(let e=0;e<Ue.length;e+=1)Ue[e].c();this.h()},l(e){j('[data-svelte="svelte-1mnaq72"]',document.head).forEach(h),a=p(e),t=o(e,"H1",{class:!0});var s=i(t);c=l(s,"Ne vereyim abime?"),s.forEach(h),m=p(e),b=o(e,"P",{class:!0});var n=i(b);y=l(n,'Kısaca "ryzen 5600" şeklinde arama yapabilirsin.'),n.forEach(h),g=p(e),v=o(e,"FORM",{class:!0});var r=i(v);C=o(r,"INPUT",{class:!0,type:!0,placeholder:!0}),w=p(r),E=o(r,"BUTTON",{class:!0});var u=i(E);x=o(u,"svg",{class:!0,viewBox:!0},1),i(x).forEach(h),$=l(u,"\n    Go!"),u.forEach(h),r.forEach(h),J=p(e),z=o(e,"DIV",{class:!0});var d=i(z);q=o(d,"DIV",{class:!0});var k=i(q);H=o(k,"LABEL",{class:!0});var f=i(H);D=o(f,"INPUT",{type:!0}),M=l(f,"\n      Amazon"),f.forEach(h),V=p(k),R=o(k,"LABEL",{class:!0});var I=i(R);F=o(I,"INPUT",{type:!0}),_=l(I,"\n      Hepsiburada"),I.forEach(h),W=p(k),X=o(k,"LABEL",{class:!0});var S=i(X);Y=o(S,"INPUT",{type:!0}),Z=l(S,"\n      İtopya"),S.forEach(h),ee=p(k),ae=o(k,"LABEL",{class:!0});var N=i(ae);te=o(N,"INPUT",{type:!0}),ce=l(N,"\n      Inventus"),N.forEach(h),se=p(k),ne=o(k,"LABEL",{class:!0});var L=i(ne);re=o(L,"INPUT",{type:!0}),oe=l(L,"\n      Mediamarkt"),L.forEach(h),ie=p(k),le=o(k,"LABEL",{class:!0});var T=i(le);he=o(T,"INPUT",{type:!0}),pe=l(T,"\n      Qp"),T.forEach(h),ue=p(k),de=o(k,"LABEL",{class:!0});var A=i(de);ke=o(A,"INPUT",{type:!0}),fe=l(A,"\n      Sinerji"),A.forEach(h),me=p(k),be=o(k,"LABEL",{class:!0});var B=i(be);ye=o(B,"INPUT",{type:!0}),ge=l(B,"\n      Teknobiyotik"),B.forEach(h),ve=p(k),Ce=o(k,"LABEL",{class:!0});var O=i(Ce);we=o(O,"INPUT",{type:!0}),Ee=l(O,"\n      Teknosa"),O.forEach(h),xe=p(k),$e=o(k,"LABEL",{class:!0});var P=i($e);Ie=o(P,"INPUT",{type:!0}),Se=l(P,"\n      Vatanbilgisayar"),P.forEach(h),k.forEach(h),d.forEach(h),Ne=p(e),Oe&&Oe.l(e),Le=p(e),Te=o(e,"DIV",{class:!0});var U=i(Te);for(let a=0;a<Ue.length;a+=1)Ue[a].l(U);U.forEach(h),this.h()},h(){document.title="AllOEMinOne",u(t,"class","text-4xl text-center my-8"),u(b,"class","text-center m-3 italic"),u(C,"class","w-auto rounded-md text-lg p-4 border-2 border-gray-200"),u(C,"type","text"),u(C,"placeholder","Ürün ara"),u(x,"class","animate-spin h-5 w-5 mr-3 ..."),u(x,"viewBox","0 0 24 24"),E.disabled=I=!e[3],u(E,"class",L="items-center text-white font-bold py-2 px-4 rounded transition-all\n    "+(e[0]?"bg-red-500 hover:bg-red-700":"bg-blue-500 hover:bg-blue-700")),u(v,"class","flex flex-row justify-center p-4"),u(D,"type","checkbox"),u(H,"class","cursor-pointer"),u(F,"type","checkbox"),F.disabled=!0,u(R,"class","cursor-pointer"),u(Y,"type","checkbox"),u(X,"class","cursor-pointer"),u(te,"type","checkbox"),u(ae,"class","cursor-pointer"),u(re,"type","checkbox"),u(ne,"class","cursor-pointer"),u(he,"type","checkbox"),u(le,"class","cursor-pointer"),u(ke,"type","checkbox"),u(de,"class","cursor-pointer"),u(ye,"type","checkbox"),u(be,"class","cursor-pointer"),u(we,"type","checkbox"),u(Ce,"class","cursor-pointer"),u(Ie,"type","checkbox"),Ie.disabled=!0,u($e,"class","cursor-pointer"),u(q,"class","grid grid-cols-2 md:grid-cols-4 gap-5"),u(z,"class","flex justify-center items-center p-3"),u(Te,"class","p-6 grid gap-4 grid-cols-1")},m(s,n){d(s,a,n),d(s,t,n),k(t,c),d(s,m,n),d(s,b,n),k(b,y),d(s,g,n),d(s,v,n),k(v,C),A(C,e[3]),k(v,w),k(v,E),k(E,x),k(E,$),d(s,J,n),d(s,z,n),k(z,q),k(q,H),k(H,D),D.checked=e[4].amCheck,k(H,M),k(q,V),k(q,R),k(R,F),F.checked=e[4].hbCheck,k(R,_),k(q,W),k(q,X),k(X,Y),Y.checked=e[4].itCheck,k(X,Z),k(q,ee),k(q,ae),k(ae,te),te.checked=e[4].inCheck,k(ae,ce),k(q,se),k(q,ne),k(ne,re),re.checked=e[4].mmCheck,k(ne,oe),k(q,ie),k(q,le),k(le,he),he.checked=e[4].qpCheck,k(le,pe),k(q,ue),k(q,de),k(de,ke),ke.checked=e[4].sinCheck,k(de,fe),k(q,me),k(q,be),k(be,ye),ye.checked=e[4].tbCheck,k(be,ge),k(q,ve),k(q,Ce),k(Ce,we),we.checked=e[4].tekCheck,k(Ce,Ee),k(q,xe),k(q,$e),k($e,Ie),Ie.checked=e[4].vbCheck,k($e,Se),d(s,Ne,n),Oe&&Oe.m(s,n),d(s,Le,n),d(s,Te,n);for(let e=0;e<Ue.length;e+=1)Ue[e].m(Te,null);je=!0,Ae||(Be=[f(C,"input",e[7]),f(E,"click",e[5]),f(D,"change",e[8]),f(F,"change",e[9]),f(Y,"change",e[10]),f(te,"change",e[11]),f(re,"change",e[12]),f(he,"change",e[13]),f(ke,"change",e[14]),f(ye,"change",e[15]),f(we,"change",e[16]),f(Ie,"change",e[17])],Ae=!0)},p(e,a){if(8&a[0]&&C.value!==e[3]&&A(C,e[3]),(!je||8&a[0]&&I!==(I=!e[3]))&&(E.disabled=I),(!je||1&a[0]&&L!==(L="items-center text-white font-bold py-2 px-4 rounded transition-all\n    "+(e[0]?"bg-red-500 hover:bg-red-700":"bg-blue-500 hover:bg-blue-700")))&&u(E,"class",L),16&a[0]&&(D.checked=e[4].amCheck),16&a[0]&&(F.checked=e[4].hbCheck),16&a[0]&&(Y.checked=e[4].itCheck),16&a[0]&&(te.checked=e[4].inCheck),16&a[0]&&(re.checked=e[4].mmCheck),16&a[0]&&(he.checked=e[4].qpCheck),16&a[0]&&(ke.checked=e[4].sinCheck),16&a[0]&&(ye.checked=e[4].tbCheck),16&a[0]&&(we.checked=e[4].tekCheck),16&a[0]&&(Ie.checked=e[4].vbCheck),e[1]?Oe?(Oe.p(e,a),2&a[0]&&S(Oe,1)):(Oe=K(e),Oe.c(),S(Oe,1),Oe.m(Le.parentNode,Le)):Oe&&(Oe.d(1),Oe=null),4&a[0]){let t;for(Pe=e[2],t=0;t<Pe.length;t+=1){const c=Q(e,Pe,t);Ue[t]?(Ue[t].p(c,a),S(Ue[t],1)):(Ue[t]=G(c),Ue[t].c(),S(Ue[t],1),Ue[t].m(Te,null))}for(U(),t=Pe.length;t<Ue.length;t+=1)Je(t);B()}},i(e){if(!je){S(Oe);for(let e=0;e<Pe.length;e+=1)S(Ue[e]);je=!0}},o(e){Ue=Ue.filter(Boolean);for(let a=0;a<Ue.length;a+=1)N(Ue[a]);je=!1},d(e){e&&h(a),e&&h(t),e&&h(m),e&&h(b),e&&h(g),e&&h(v),e&&h(J),e&&h(z),e&&h(Ne),Oe&&Oe.d(e),e&&h(Le),e&&h(Te),O(Ue,e),Ae=!1,P(Be)}}}function F(e,a,t){let c,s,n;w(e,z,(e=>t(2,c=e))),w(e,H,(e=>t(3,s=e))),w(e,q,(e=>t(4,n=e)));let r=c,o="",i=!1,l="";return e.$$.update=()=>{64&e.$$.dirty[0]&&E(z,c=r.sort(((e,a)=>e.price-a.price)),c)},[i,l,c,s,n,async e=>{e.preventDefault(),i?alert("Lütfen önceki aramanın tamamlanmasını bekleyin."):(t(0,i=!0),o=s,o&&(t(6,r=[]),await(async e=>{const a=`/api/search/${e}`;await fetch(a)})(o),n.sinCheck&&(t(1,l="Sinerji'yi arıyorum..."),await(async e=>{const a=`/api/sinerji/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.inCheck&&(t(1,l="Inventus'u arıyorum..."),await(async e=>{const a=`/api/inventus/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.mmCheck&&(t(1,l="Mediamarkt'ı arıyorum..."),await(async e=>{const a=`/api/mediamarkt/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.qpCheck&&(t(1,l="Qp'yi arıyorum..."),await(async e=>{const a=`/api/qp/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.tbCheck&&(t(1,l="Teknobiyotik'i arıyorum..."),await(async e=>{const a=`/api/teknobiyotik/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.tekCheck&&(t(1,l="Teknosa'yı arıyorum..."),await(async e=>{const a=`/api/teknosa/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.hbCheck&&(t(1,l="Hepsiburada'yı arıyorum..."),await(async e=>{const a=`/api/hepsiburada/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.vbCheck&&(t(1,l="Vatanbilgisayar'ı arıyorum..."),await(async e=>{const a=`/api/vatanbilgisayar/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.amCheck&&(t(1,l="Amazon'u arıyorum..."),await(async e=>{const a=`/api/amazon/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.itCheck&&(t(1,l="İtopya'yı arıyorum..."),await(async e=>{const a=`/api/itopya/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),t(1,l=r.length>0?`${r.length} adet ${o.trim()} var abi buyur:`:"Abime onu vermiyim."),t(0,i=!1)))},r,function(){s=this.value,H.set(s)},function(){n.amCheck=this.checked,q.set(n)},function(){n.hbCheck=this.checked,q.set(n)},function(){n.itCheck=this.checked,q.set(n)},function(){n.inCheck=this.checked,q.set(n)},function(){n.mmCheck=this.checked,q.set(n)},function(){n.qpCheck=this.checked,q.set(n)},function(){n.sinCheck=this.checked,q.set(n)},function(){n.tbCheck=this.checked,q.set(n)},function(){n.tekCheck=this.checked,q.set(n)},function(){n.vbCheck=this.checked,q.set(n)}]}export default class extends a{constructor(e){super(),t(this,e,F,R,c,{},[-1,-1])}}
