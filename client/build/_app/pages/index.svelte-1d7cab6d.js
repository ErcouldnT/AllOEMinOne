import{C as a,S as e,i as t,s as c,e as s,t as n,k as r,c as o,a as i,g as l,d as h,n as u,b as p,f as d,D as f,H as y,h as k,I as m,J as b,K as g,E as v,L as w,j as E,m as $,o as x,v as L,r as T,w as I,M as j,N,u as A,O as B,P,B as U,Q as S}from"../chunks/vendor-b54fc800.js";import{b as z}from"../chunks/build-b4fb2be4.js";const H=a("undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("result")?localStorage.getItem("result"):"[]"):[]);function O(a){let e,t,c,w,E,$,x,L,T,I,j,N,A,B,P=`(${a[0].source}) ${a[0].title}`,U=a[0].price+"",S=a[1]?"Eklendi":"Ekle";return{c(){e=s("a"),t=s("h2"),c=n(P),w=r(),E=s("h3"),$=n(U),x=n(" TL"),L=r(),T=s("button"),I=n(S),this.h()},l(a){e=o(a,"A",{target:!0,class:!0,href:!0});var s=i(e);t=o(s,"H2",{});var n=i(t);c=l(n,P),n.forEach(h),w=u(s),E=o(s,"H3",{});var r=i(E);$=l(r,U),x=l(r," TL"),r.forEach(h),L=u(s),T=o(s,"BUTTON",{class:!0});var p=i(T);I=l(p,S),p.forEach(h),s.forEach(h),this.h()},h(){p(T,"class","font-bold z-10"),p(e,"target","_blank"),p(e,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center z-0"),p(e,"href",j=a[0].url)},m(s,n){d(s,e,n),f(e,t),f(t,c),f(e,w),f(e,E),f(E,$),f(E,x),f(e,L),f(e,T),f(T,I),A||(B=y(T,"click",a[2],{once:!0}),A=!0)},p(a,[t]){1&t&&P!==(P=`(${a[0].source}) ${a[0].title}`)&&k(c,P),1&t&&U!==(U=a[0].price+"")&&k($,U),2&t&&S!==(S=a[1]?"Eklendi":"Ekle")&&k(I,S),1&t&&j!==(j=a[0].url)&&p(e,"href",j)},i(a){N||m((()=>{N=b(e,g,{}),N.start()}))},o:v,d(a){a&&h(e),A=!1,B()}}}function D(a,e,t){let c;w(a,z,(a=>t(3,c=a)));let{product:s}=e,n=!1;return a.$$set=a=>{"product"in a&&t(0,s=a.product)},[s,n,a=>{a.preventDefault(),c.push(s),t(1,n=!0)}]}"undefined"!=typeof localStorage&&H.subscribe((a=>localStorage.setItem("result",JSON.stringify(a))));class M extends e{constructor(a){super(),t(this,a,D,O,c,{product:0})}}function V(a,e,t){const c=a.slice();return c[39]=e[t],c}function Q(a){let e,t,c;return{c(){e=s("p"),t=n(a[2]),this.h()},l(c){e=o(c,"P",{class:!0});var s=i(e);t=l(s,a[2]),s.forEach(h),this.h()},h(){p(e,"class","text-center m-5 font-bold text-lg")},m(a,c){d(a,e,c),f(e,t)},p(a,e){4&e[0]&&k(t,a[2])},i(a){c||m((()=>{c=b(e,g,{}),c.start()}))},o:v,d(a){a&&h(e)}}}function J(a){let e,t;return e=new M({props:{product:a[39]}}),{c(){E(e.$$.fragment)},l(a){$(e.$$.fragment,a)},m(a,c){x(e,a,c),t=!0},p(a,t){const c={};1&t[0]&&(c.product=a[39]),e.$set(c)},i(a){t||(L(e.$$.fragment,a),t=!0)},o(a){T(e.$$.fragment,a),t=!1},d(a){I(e,a)}}}function K(a){let e,t,c,k,m,b,g,v,w,E,$,x,I,S,z,H,O,D,M,K,q,G,C,F,R,_,W,X,Y,Z,aa,ea,ta,ca,sa,na,ra,oa,ia,la,ha,ua,pa,da,fa,ya,ka,ma,ba,ga,va,wa,Ea,$a,xa,La,Ta,Ia,ja,Na,Aa,Ba=a[2]&&Q(a),Pa=a[0],Ua=[];for(let s=0;s<Pa.length;s+=1)Ua[s]=J(V(a,Pa,s));const Sa=a=>T(Ua[a],1,1,(()=>{Ua[a]=null}));return{c(){e=r(),t=s("h1"),c=n("Ne vereyim abime?"),k=r(),m=s("p"),b=n('Kısaca "ryzen 5600" şeklinde arama yapabilirsin.'),g=r(),v=s("form"),w=s("input"),E=r(),$=s("button"),x=n("Go!"),S=r(),z=s("div"),H=s("div"),O=s("label"),D=s("input"),M=n("\n      Amazon"),K=r(),q=s("label"),G=s("input"),C=n("\n      Hepsiburada"),F=r(),R=s("label"),_=s("input"),W=n("\n      İtopya"),X=r(),Y=s("label"),Z=s("input"),aa=n("\n      Inventus"),ea=r(),ta=s("label"),ca=s("input"),sa=n("\n      Mediamarkt"),na=r(),ra=s("label"),oa=s("input"),ia=n("\n      Qp"),la=r(),ha=s("label"),ua=s("input"),pa=n("\n      Sinerji"),da=r(),fa=s("label"),ya=s("input"),ka=n("\n      Teknobiyotik"),ma=r(),ba=s("label"),ga=s("input"),va=n("\n      Teknosa"),wa=r(),Ea=s("label"),$a=s("input"),xa=n("\n      Vatanbilgisayar"),La=r(),Ba&&Ba.c(),Ta=r(),Ia=s("div");for(let a=0;a<Ua.length;a+=1)Ua[a].c();this.h()},l(a){j('[data-svelte="svelte-1mnaq72"]',document.head).forEach(h),e=u(a),t=o(a,"H1",{class:!0});var s=i(t);c=l(s,"Ne vereyim abime?"),s.forEach(h),k=u(a),m=o(a,"P",{class:!0});var n=i(m);b=l(n,'Kısaca "ryzen 5600" şeklinde arama yapabilirsin.'),n.forEach(h),g=u(a),v=o(a,"FORM",{class:!0});var r=i(v);w=o(r,"INPUT",{class:!0,type:!0,placeholder:!0}),E=u(r),$=o(r,"BUTTON",{class:!0});var p=i($);x=l(p,"Go!"),p.forEach(h),r.forEach(h),S=u(a),z=o(a,"DIV",{class:!0});var d=i(z);H=o(d,"DIV",{class:!0});var f=i(H);O=o(f,"LABEL",{class:!0});var y=i(O);D=o(y,"INPUT",{type:!0}),M=l(y,"\n      Amazon"),y.forEach(h),K=u(f),q=o(f,"LABEL",{class:!0});var L=i(q);G=o(L,"INPUT",{type:!0}),C=l(L,"\n      Hepsiburada"),L.forEach(h),F=u(f),R=o(f,"LABEL",{class:!0});var T=i(R);_=o(T,"INPUT",{type:!0}),W=l(T,"\n      İtopya"),T.forEach(h),X=u(f),Y=o(f,"LABEL",{class:!0});var I=i(Y);Z=o(I,"INPUT",{type:!0}),aa=l(I,"\n      Inventus"),I.forEach(h),ea=u(f),ta=o(f,"LABEL",{class:!0});var N=i(ta);ca=o(N,"INPUT",{type:!0}),sa=l(N,"\n      Mediamarkt"),N.forEach(h),na=u(f),ra=o(f,"LABEL",{class:!0});var A=i(ra);oa=o(A,"INPUT",{type:!0}),ia=l(A,"\n      Qp"),A.forEach(h),la=u(f),ha=o(f,"LABEL",{class:!0});var B=i(ha);ua=o(B,"INPUT",{type:!0}),pa=l(B,"\n      Sinerji"),B.forEach(h),da=u(f),fa=o(f,"LABEL",{class:!0});var P=i(fa);ya=o(P,"INPUT",{type:!0}),ka=l(P,"\n      Teknobiyotik"),P.forEach(h),ma=u(f),ba=o(f,"LABEL",{class:!0});var U=i(ba);ga=o(U,"INPUT",{type:!0}),va=l(U,"\n      Teknosa"),U.forEach(h),wa=u(f),Ea=o(f,"LABEL",{class:!0});var V=i(Ea);$a=o(V,"INPUT",{type:!0}),xa=l(V,"\n      Vatanbilgisayar"),V.forEach(h),f.forEach(h),d.forEach(h),La=u(a),Ba&&Ba.l(a),Ta=u(a),Ia=o(a,"DIV",{class:!0});var Q=i(Ia);for(let e=0;e<Ua.length;e+=1)Ua[e].l(Q);Q.forEach(h),this.h()},h(){document.title="AllOEMinOne",p(t,"class","text-4xl text-center my-8"),p(m,"class","text-center m-3 italic"),p(w,"class","w-auto rounded-md text-lg p-4 border-2 border-gray-200"),p(w,"type","text"),p(w,"placeholder","Ürün ara"),$.disabled=I=!a[1],p($,"class","items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 \n  px-4 rounded"),p(v,"class","flex flex-row justify-center p-4"),p(D,"type","checkbox"),p(O,"class","cursor-pointer"),p(G,"type","checkbox"),G.disabled=!0,p(q,"class","cursor-pointer"),p(_,"type","checkbox"),p(R,"class","cursor-pointer"),p(Z,"type","checkbox"),p(Y,"class","cursor-pointer"),p(ca,"type","checkbox"),p(ta,"class","cursor-pointer"),p(oa,"type","checkbox"),p(ra,"class","cursor-pointer"),p(ua,"type","checkbox"),p(ha,"class","cursor-pointer"),p(ya,"type","checkbox"),p(fa,"class","cursor-pointer"),p(ga,"type","checkbox"),p(ba,"class","cursor-pointer"),p($a,"type","checkbox"),$a.disabled=!0,p(Ea,"class","cursor-pointer"),p(H,"class","grid grid-cols-2 md:grid-cols-4 gap-5"),p(z,"class","flex justify-center items-center p-3"),p(Ia,"class","p-6 grid gap-4 grid-cols-1")},m(s,n){d(s,e,n),d(s,t,n),f(t,c),d(s,k,n),d(s,m,n),f(m,b),d(s,g,n),d(s,v,n),f(v,w),N(w,a[1]),f(v,E),f(v,$),f($,x),d(s,S,n),d(s,z,n),f(z,H),f(H,O),f(O,D),D.checked=a[3],f(O,M),f(H,K),f(H,q),f(q,G),G.checked=a[12],f(q,C),f(H,F),f(H,R),f(R,_),_.checked=a[4],f(R,W),f(H,X),f(H,Y),f(Y,Z),Z.checked=a[7],f(Y,aa),f(H,ea),f(H,ta),f(ta,ca),ca.checked=a[8],f(ta,sa),f(H,na),f(H,ra),f(ra,oa),oa.checked=a[10],f(ra,ia),f(H,la),f(H,ha),f(ha,ua),ua.checked=a[5],f(ha,pa),f(H,da),f(H,fa),f(fa,ya),ya.checked=a[6],f(fa,ka),f(H,ma),f(H,ba),f(ba,ga),ga.checked=a[9],f(ba,va),f(H,wa),f(H,Ea),f(Ea,$a),$a.checked=a[11],f(Ea,xa),d(s,La,n),Ba&&Ba.m(s,n),d(s,Ta,n),d(s,Ia,n);for(let a=0;a<Ua.length;a+=1)Ua[a].m(Ia,null);ja=!0,Na||(Aa=[y(w,"input",a[15]),y($,"click",a[13]),y(D,"change",a[16]),y(G,"change",a[17]),y(_,"change",a[18]),y(Z,"change",a[19]),y(ca,"change",a[20]),y(oa,"change",a[21]),y(ua,"change",a[22]),y(ya,"change",a[23]),y(ga,"change",a[24]),y($a,"change",a[25])],Na=!0)},p(a,e){if(2&e[0]&&w.value!==a[1]&&N(w,a[1]),(!ja||2&e[0]&&I!==(I=!a[1]))&&($.disabled=I),8&e[0]&&(D.checked=a[3]),4096&e[0]&&(G.checked=a[12]),16&e[0]&&(_.checked=a[4]),128&e[0]&&(Z.checked=a[7]),256&e[0]&&(ca.checked=a[8]),1024&e[0]&&(oa.checked=a[10]),32&e[0]&&(ua.checked=a[5]),64&e[0]&&(ya.checked=a[6]),512&e[0]&&(ga.checked=a[9]),2048&e[0]&&($a.checked=a[11]),a[2]?Ba?(Ba.p(a,e),4&e[0]&&L(Ba,1)):(Ba=Q(a),Ba.c(),L(Ba,1),Ba.m(Ta.parentNode,Ta)):Ba&&(Ba.d(1),Ba=null),1&e[0]){let t;for(Pa=a[0],t=0;t<Pa.length;t+=1){const c=V(a,Pa,t);Ua[t]?(Ua[t].p(c,e),L(Ua[t],1)):(Ua[t]=J(c),Ua[t].c(),L(Ua[t],1),Ua[t].m(Ia,null))}for(U(),t=Pa.length;t<Ua.length;t+=1)Sa(t);A()}},i(a){if(!ja){L(Ba);for(let a=0;a<Pa.length;a+=1)L(Ua[a]);ja=!0}},o(a){Ua=Ua.filter(Boolean);for(let e=0;e<Ua.length;e+=1)T(Ua[e]);ja=!1},d(a){a&&h(e),a&&h(t),a&&h(k),a&&h(m),a&&h(g),a&&h(v),a&&h(S),a&&h(z),a&&h(La),Ba&&Ba.d(a),a&&h(Ta),a&&h(Ia),B(Ua,a),Na=!1,P(Aa)}}}function q(a,e,t){let c;w(a,H,(a=>t(0,c=a)));let s=c,n="",r="",o=!1,i="",l=!0,h=!0,u=!0,p=!0,d=!0,f=!0,y=!0,k=!0,m=!1,b=!1;return a.$$.update=()=>{16385&a.$$.dirty[0]&&c&&S(H,c=s.sort(((a,e)=>a.price-e.price)),c)},[c,r,i,l,h,u,p,d,f,y,k,m,b,async a=>{a.preventDefault(),o?alert("Lütfen önceki aramanın tamamlanmasını bekleyin."):(o=!0,n=r,n&&(t(14,s=[]),await(async a=>{const e=`/api/search/${a}`;await fetch(e)})(n),t(2,i="Hemen ustaya sorup geliyorum abi biraz bekleticem..."),u&&(t(2,i="Sinerji'yi arıyorum..."),await(async a=>{const e=`/api/sinerji/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),d&&(t(2,i="Inventus'u arıyorum..."),await(async a=>{const e=`/api/inventus/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),f&&(t(2,i="Mediamarkt'ı arıyorum..."),await(async a=>{const e=`/api/mediamarkt/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),k&&(t(2,i="Qp'yi arıyorum..."),await(async a=>{const e=`/api/qp/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),p&&(t(2,i="Teknobiyotik'i arıyorum..."),await(async a=>{const e=`/api/teknobiyotik/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),y&&(t(2,i="Teknosa'yı arıyorum..."),await(async a=>{const e=`/api/teknosa/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),b&&(t(2,i="Hepsiburada'yı arıyorum..."),await(async a=>{const e=`/api/hepsiburada/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),m&&(t(2,i="Vatanbilgisayar'ı arıyorum..."),await(async a=>{const e=`/api/vatanbilgisayar/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),l&&(t(2,i="Amazon'u arıyorum..."),await(async a=>{const e=`/api/amazon/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),h&&(t(2,i="İtopya'yı arıyorum..."),await(async a=>{const e=`/api/itopya/${a}`,c=await fetch(e),n=await c.json();t(14,s=s.concat(n))})(n)),t(2,i=s.length>0?`${s.length} adet ${n.trim()} var abi buyur:`:"Abime onu vermiyim."),o=!1))},s,function(){r=this.value,t(1,r)},function(){l=this.checked,t(3,l)},function(){b=this.checked,t(12,b)},function(){h=this.checked,t(4,h)},function(){d=this.checked,t(7,d)},function(){f=this.checked,t(8,f)},function(){k=this.checked,t(10,k)},function(){u=this.checked,t(5,u)},function(){p=this.checked,t(6,p)},function(){y=this.checked,t(9,y)},function(){m=this.checked,t(11,m)}]}export default class extends e{constructor(a){super(),t(this,a,q,K,c,{},[-1,-1])}}
