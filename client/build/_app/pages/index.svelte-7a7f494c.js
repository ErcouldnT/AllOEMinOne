import{C as e,S as a,i as t,s as c,e as s,t as n,k as r,c as o,a as i,g as l,d as h,n as p,b as u,f as k,D as d,H as f,I as b,h as m,J as y,K as g,L as v,E as C,M as w,N as E,j as x,m as $,o as I,v as S,r as N,w as L,O as T,P as j,u as A,Q as B,R as O,B as P}from"../chunks/vendor-509cf542.js";import{b as U}from"../chunks/build-26b407d0.js";const J=e("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("result")?localStorage.getItem("result"):"[]"):[]);"undefined"!=typeof localStorage&&J.subscribe((e=>localStorage.setItem("result",JSON.stringify(e))));const z=e("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("filter"))?JSON.parse(localStorage.getItem("filter")):{amCheck:!0,itCheck:!0,sinCheck:!0,tbCheck:!0,inCheck:!0,mmCheck:!0,tekCheck:!0,qpCheck:!0,vbCheck:!1,hbCheck:!1}:{});"undefined"!=typeof localStorage&&z.subscribe((e=>localStorage.setItem("filter",JSON.stringify(e))));const q=e("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("search"))?JSON.parse(localStorage.getItem("search")):"":{});function H(e){let a,t,c,w,E,x,$,I,S,N,L,T,j,A,B=`(${e[0].source}) ${e[0].title}`,O=e[0].price+"",P=e[1]?"Eklendi":"Ekle";return{c(){a=s("a"),t=s("h2"),c=n(B),w=r(),E=s("h3"),x=n("₺"),$=n(O),I=r(),S=s("button"),N=n(P),this.h()},l(e){a=o(e,"A",{target:!0,class:!0,href:!0});var s=i(a);t=o(s,"H2",{});var n=i(t);c=l(n,B),n.forEach(h),w=p(s),E=o(s,"H3",{});var r=i(E);x=l(r,"₺"),$=l(r,O),r.forEach(h),I=p(s),S=o(s,"BUTTON",{class:!0});var u=i(S);N=l(u,P),u.forEach(h),s.forEach(h),this.h()},h(){u(S,"class","font-bold z-10"),u(a,"target","_blank"),u(a,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),u(a,"href",L=e[0].url)},m(s,n){k(s,a,n),d(a,t),d(t,c),d(a,w),d(a,E),d(E,x),d(E,$),d(a,I),d(a,S),d(S,N),j||(A=f(S,"click",(function(){b(e[1]?null:e[2])&&(e[1]?null:e[2]).apply(this,arguments)}),{once:!0}),j=!0)},p(t,[s]){e=t,1&s&&B!==(B=`(${e[0].source}) ${e[0].title}`)&&m(c,B),1&s&&O!==(O=e[0].price+"")&&m($,O),2&s&&P!==(P=e[1]?"Eklendi":"Ekle")&&m(N,P),1&s&&L!==(L=e[0].url)&&u(a,"href",L)},i(e){T||y((()=>{T=g(a,v,{}),T.start()}))},o:C,d(e){e&&h(a),j=!1,A()}}}function D(e,a,t){let c;w(e,U,(e=>t(3,c=e)));let{product:s}=a,n=c,r=!!c.find((e=>e.title===s.title));return e.$$set=e=>{"product"in e&&t(0,s=e.product)},E(U,c=n,c),[s,r,e=>{e.preventDefault(),n.push(s),t(1,r=!0)}]}"undefined"!=typeof localStorage&&q.subscribe((e=>localStorage.setItem("search",JSON.stringify(e))));class M extends a{constructor(e){super(),t(this,e,D,H,c,{product:0})}}function V(e,a,t){const c=e.slice();return c[30]=a[t],c}function Q(e){let a,t,c;return{c(){a=s("p"),t=n(e[1]),this.h()},l(c){a=o(c,"P",{class:!0});var s=i(a);t=l(s,e[1]),s.forEach(h),this.h()},h(){u(a,"class","text-center m-5 font-bold text-lg")},m(e,c){k(e,a,c),d(a,t)},p(e,a){2&a[0]&&m(t,e[1])},i(e){c||y((()=>{c=g(a,v,{}),c.start()}))},o:C,d(e){e&&h(a)}}}function K(e){let a,t;return a=new M({props:{product:e[30]}}),{c(){x(a.$$.fragment)},l(e){$(a.$$.fragment,e)},m(e,c){I(a,e,c),t=!0},p(e,t){const c={};4&t[0]&&(c.product=e[30]),a.$set(c)},i(e){t||(S(a.$$.fragment,e),t=!0)},o(e){N(a.$$.fragment,e),t=!1},d(e){L(a,e)}}}function G(e){let a,t,c,b,y,g,v,C,w,E,x,$,I,L,U,J,z,q,H,D,M,G,R,X,F,_,W,Y,Z,ee,ae,te,ce,se,ne,re,oe,ie,le,he,pe,ue,ke,de,fe,be,me,ye,ge,ve,Ce,we,Ee,xe,$e,Ie,Se,Ne,Le,Te,je,Ae,Be=e[0]?"X":"Go!",Oe=e[1]&&Q(e),Pe=e[2],Ue=[];for(let s=0;s<Pe.length;s+=1)Ue[s]=K(V(e,Pe,s));const Je=e=>N(Ue[e],1,1,(()=>{Ue[e]=null}));return{c(){a=r(),t=s("h1"),c=n("Ne vereyim abime?"),b=r(),y=s("p"),g=n('Kısaca "ryzen 5600" şeklinde arama yapabilirsin.'),v=r(),C=s("form"),w=s("input"),E=r(),x=s("button"),$=n(Be),U=r(),J=s("div"),z=s("div"),q=s("label"),H=s("input"),D=n("\n      Amazon"),M=r(),G=s("label"),R=s("input"),X=n("\n      Hepsiburada"),F=r(),_=s("label"),W=s("input"),Y=n("\n      İtopya"),Z=r(),ee=s("label"),ae=s("input"),te=n("\n      Inventus"),ce=r(),se=s("label"),ne=s("input"),re=n("\n      Mediamarkt"),oe=r(),ie=s("label"),le=s("input"),he=n("\n      Qp"),pe=r(),ue=s("label"),ke=s("input"),de=n("\n      Sinerji"),fe=r(),be=s("label"),me=s("input"),ye=n("\n      Teknobiyotik"),ge=r(),ve=s("label"),Ce=s("input"),we=n("\n      Teknosa"),Ee=r(),xe=s("label"),$e=s("input"),Ie=n("\n      Vatanbilgisayar"),Se=r(),Oe&&Oe.c(),Ne=r(),Le=s("div");for(let e=0;e<Ue.length;e+=1)Ue[e].c();this.h()},l(e){T('[data-svelte="svelte-1mnaq72"]',document.head).forEach(h),a=p(e),t=o(e,"H1",{class:!0});var s=i(t);c=l(s,"Ne vereyim abime?"),s.forEach(h),b=p(e),y=o(e,"P",{class:!0});var n=i(y);g=l(n,'Kısaca "ryzen 5600" şeklinde arama yapabilirsin.'),n.forEach(h),v=p(e),C=o(e,"FORM",{class:!0});var r=i(C);w=o(r,"INPUT",{class:!0,type:!0,placeholder:!0}),E=p(r),x=o(r,"BUTTON",{class:!0});var u=i(x);$=l(u,Be),u.forEach(h),r.forEach(h),U=p(e),J=o(e,"DIV",{class:!0});var k=i(J);z=o(k,"DIV",{class:!0});var d=i(z);q=o(d,"LABEL",{class:!0});var f=i(q);H=o(f,"INPUT",{type:!0}),D=l(f,"\n      Amazon"),f.forEach(h),M=p(d),G=o(d,"LABEL",{class:!0});var m=i(G);R=o(m,"INPUT",{type:!0}),X=l(m,"\n      Hepsiburada"),m.forEach(h),F=p(d),_=o(d,"LABEL",{class:!0});var I=i(_);W=o(I,"INPUT",{type:!0}),Y=l(I,"\n      İtopya"),I.forEach(h),Z=p(d),ee=o(d,"LABEL",{class:!0});var S=i(ee);ae=o(S,"INPUT",{type:!0}),te=l(S,"\n      Inventus"),S.forEach(h),ce=p(d),se=o(d,"LABEL",{class:!0});var N=i(se);ne=o(N,"INPUT",{type:!0}),re=l(N,"\n      Mediamarkt"),N.forEach(h),oe=p(d),ie=o(d,"LABEL",{class:!0});var L=i(ie);le=o(L,"INPUT",{type:!0}),he=l(L,"\n      Qp"),L.forEach(h),pe=p(d),ue=o(d,"LABEL",{class:!0});var j=i(ue);ke=o(j,"INPUT",{type:!0}),de=l(j,"\n      Sinerji"),j.forEach(h),fe=p(d),be=o(d,"LABEL",{class:!0});var A=i(be);me=o(A,"INPUT",{type:!0}),ye=l(A,"\n      Teknobiyotik"),A.forEach(h),ge=p(d),ve=o(d,"LABEL",{class:!0});var B=i(ve);Ce=o(B,"INPUT",{type:!0}),we=l(B,"\n      Teknosa"),B.forEach(h),Ee=p(d),xe=o(d,"LABEL",{class:!0});var O=i(xe);$e=o(O,"INPUT",{type:!0}),Ie=l(O,"\n      Vatanbilgisayar"),O.forEach(h),d.forEach(h),k.forEach(h),Se=p(e),Oe&&Oe.l(e),Ne=p(e),Le=o(e,"DIV",{class:!0});var P=i(Le);for(let a=0;a<Ue.length;a+=1)Ue[a].l(P);P.forEach(h),this.h()},h(){document.title="AllOEMinOne",u(t,"class","text-4xl text-center my-8"),u(y,"class","text-center m-3 italic"),u(w,"class","w-auto rounded-md text-lg p-4 border-2 border-gray-200"),u(w,"type","text"),u(w,"placeholder","Ürün ara"),x.disabled=I=!e[3],u(x,"class",L="items-center text-white font-bold py-2 px-4 rounded transition-all\n    "+(e[0]?"bg-red-500 hover:bg-red-700":"bg-blue-500 hover:bg-blue-700")),u(C,"class","flex flex-row justify-center p-4"),u(H,"type","checkbox"),u(q,"class","cursor-pointer"),u(R,"type","checkbox"),R.disabled=!0,u(G,"class","cursor-pointer"),u(W,"type","checkbox"),u(_,"class","cursor-pointer"),u(ae,"type","checkbox"),u(ee,"class","cursor-pointer"),u(ne,"type","checkbox"),u(se,"class","cursor-pointer"),u(le,"type","checkbox"),u(ie,"class","cursor-pointer"),u(ke,"type","checkbox"),u(ue,"class","cursor-pointer"),u(me,"type","checkbox"),u(be,"class","cursor-pointer"),u(Ce,"type","checkbox"),u(ve,"class","cursor-pointer"),u($e,"type","checkbox"),$e.disabled=!0,u(xe,"class","cursor-pointer"),u(z,"class","grid grid-cols-2 md:grid-cols-4 gap-5"),u(J,"class","flex justify-center items-center p-3"),u(Le,"class","p-6 grid gap-4 grid-cols-1")},m(s,n){k(s,a,n),k(s,t,n),d(t,c),k(s,b,n),k(s,y,n),d(y,g),k(s,v,n),k(s,C,n),d(C,w),j(w,e[3]),d(C,E),d(C,x),d(x,$),k(s,U,n),k(s,J,n),d(J,z),d(z,q),d(q,H),H.checked=e[4].amCheck,d(q,D),d(z,M),d(z,G),d(G,R),R.checked=e[4].hbCheck,d(G,X),d(z,F),d(z,_),d(_,W),W.checked=e[4].itCheck,d(_,Y),d(z,Z),d(z,ee),d(ee,ae),ae.checked=e[4].inCheck,d(ee,te),d(z,ce),d(z,se),d(se,ne),ne.checked=e[4].mmCheck,d(se,re),d(z,oe),d(z,ie),d(ie,le),le.checked=e[4].qpCheck,d(ie,he),d(z,pe),d(z,ue),d(ue,ke),ke.checked=e[4].sinCheck,d(ue,de),d(z,fe),d(z,be),d(be,me),me.checked=e[4].tbCheck,d(be,ye),d(z,ge),d(z,ve),d(ve,Ce),Ce.checked=e[4].tekCheck,d(ve,we),d(z,Ee),d(z,xe),d(xe,$e),$e.checked=e[4].vbCheck,d(xe,Ie),k(s,Se,n),Oe&&Oe.m(s,n),k(s,Ne,n),k(s,Le,n);for(let e=0;e<Ue.length;e+=1)Ue[e].m(Le,null);Te=!0,je||(Ae=[f(w,"input",e[7]),f(x,"click",e[5]),f(H,"change",e[8]),f(R,"change",e[9]),f(W,"change",e[10]),f(ae,"change",e[11]),f(ne,"change",e[12]),f(le,"change",e[13]),f(ke,"change",e[14]),f(me,"change",e[15]),f(Ce,"change",e[16]),f($e,"change",e[17])],je=!0)},p(e,a){if(8&a[0]&&w.value!==e[3]&&j(w,e[3]),(!Te||1&a[0])&&Be!==(Be=e[0]?"X":"Go!")&&m($,Be),(!Te||8&a[0]&&I!==(I=!e[3]))&&(x.disabled=I),(!Te||1&a[0]&&L!==(L="items-center text-white font-bold py-2 px-4 rounded transition-all\n    "+(e[0]?"bg-red-500 hover:bg-red-700":"bg-blue-500 hover:bg-blue-700")))&&u(x,"class",L),16&a[0]&&(H.checked=e[4].amCheck),16&a[0]&&(R.checked=e[4].hbCheck),16&a[0]&&(W.checked=e[4].itCheck),16&a[0]&&(ae.checked=e[4].inCheck),16&a[0]&&(ne.checked=e[4].mmCheck),16&a[0]&&(le.checked=e[4].qpCheck),16&a[0]&&(ke.checked=e[4].sinCheck),16&a[0]&&(me.checked=e[4].tbCheck),16&a[0]&&(Ce.checked=e[4].tekCheck),16&a[0]&&($e.checked=e[4].vbCheck),e[1]?Oe?(Oe.p(e,a),2&a[0]&&S(Oe,1)):(Oe=Q(e),Oe.c(),S(Oe,1),Oe.m(Ne.parentNode,Ne)):Oe&&(Oe.d(1),Oe=null),4&a[0]){let t;for(Pe=e[2],t=0;t<Pe.length;t+=1){const c=V(e,Pe,t);Ue[t]?(Ue[t].p(c,a),S(Ue[t],1)):(Ue[t]=K(c),Ue[t].c(),S(Ue[t],1),Ue[t].m(Le,null))}for(P(),t=Pe.length;t<Ue.length;t+=1)Je(t);A()}},i(e){if(!Te){S(Oe);for(let e=0;e<Pe.length;e+=1)S(Ue[e]);Te=!0}},o(e){Ue=Ue.filter(Boolean);for(let a=0;a<Ue.length;a+=1)N(Ue[a]);Te=!1},d(e){e&&h(a),e&&h(t),e&&h(b),e&&h(y),e&&h(v),e&&h(C),e&&h(U),e&&h(J),e&&h(Se),Oe&&Oe.d(e),e&&h(Ne),e&&h(Le),B(Ue,e),je=!1,O(Ae)}}}function R(e,a,t){let c,s,n;w(e,J,(e=>t(2,c=e))),w(e,q,(e=>t(3,s=e))),w(e,z,(e=>t(4,n=e)));let r=c,o="",i=!1,l="";return e.$$.update=()=>{64&e.$$.dirty[0]&&E(J,c=r.sort(((e,a)=>e.price-a.price)),c)},[i,l,c,s,n,async e=>{e.preventDefault(),i?alert("Lütfen önceki aramanın tamamlanmasını bekleyin."):(t(0,i=!0),o=s,o&&(t(6,r=[]),await(async e=>{const a=`/api/search/${e}`;await fetch(a)})(o),n.sinCheck&&(t(1,l="Sinerji'yi arıyorum..."),await(async e=>{const a=`/api/sinerji/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.inCheck&&(t(1,l="Inventus'u arıyorum..."),await(async e=>{const a=`/api/inventus/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.mmCheck&&(t(1,l="Mediamarkt'ı arıyorum..."),await(async e=>{const a=`/api/mediamarkt/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.qpCheck&&(t(1,l="Qp'yi arıyorum..."),await(async e=>{const a=`/api/qp/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.tbCheck&&(t(1,l="Teknobiyotik'i arıyorum..."),await(async e=>{const a=`/api/teknobiyotik/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.tekCheck&&(t(1,l="Teknosa'yı arıyorum..."),await(async e=>{const a=`/api/teknosa/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.hbCheck&&(t(1,l="Hepsiburada'yı arıyorum..."),await(async e=>{const a=`/api/hepsiburada/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.vbCheck&&(t(1,l="Vatanbilgisayar'ı arıyorum..."),await(async e=>{const a=`/api/vatanbilgisayar/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.amCheck&&(t(1,l="Amazon'u arıyorum..."),await(async e=>{const a=`/api/amazon/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),n.itCheck&&(t(1,l="İtopya'yı arıyorum..."),await(async e=>{const a=`/api/itopya/${e}`,c=await fetch(a),s=await c.json();t(6,r=r.concat(s))})(o)),t(1,l=r.length>0?`${r.length} adet ${o.trim()} var abi buyur:`:"Abime onu vermiyim."),t(0,i=!1)))},r,function(){s=this.value,q.set(s)},function(){n.amCheck=this.checked,z.set(n)},function(){n.hbCheck=this.checked,z.set(n)},function(){n.itCheck=this.checked,z.set(n)},function(){n.inCheck=this.checked,z.set(n)},function(){n.mmCheck=this.checked,z.set(n)},function(){n.qpCheck=this.checked,z.set(n)},function(){n.sinCheck=this.checked,z.set(n)},function(){n.tbCheck=this.checked,z.set(n)},function(){n.tekCheck=this.checked,z.set(n)},function(){n.vbCheck=this.checked,z.set(n)}]}export default class extends a{constructor(e){super(),t(this,e,R,G,c,{},[-1,-1])}}