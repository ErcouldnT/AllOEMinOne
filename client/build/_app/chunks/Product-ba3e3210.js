import{S as r,i as a,s,e,t,k as o,c,a as h,g as n,d as l,n as f,b as u,f as d,D as i,h as p,H as g,I as m,O as v}from"./vendor-3f517aaa.js";function x(r){let a,s,x,$,w,b,E,H,S,k,y,A,L,T=`(${r[0].source}) ${r[0].title}`,j=r[0].price+"";return{c(){a=e("a"),s=e("h2"),x=t(T),$=o(),w=e("h3"),b=t(j),E=t(" TL"),H=o(),S=e("a"),k=t("Seç"),this.h()},l(r){a=c(r,"A",{target:!0,class:!0,href:!0});var e=h(a);s=c(e,"H2",{});var t=h(s);x=n(t,T),t.forEach(l),$=f(e),w=c(e,"H3",{});var o=h(w);b=n(o,j),E=n(o," TL"),o.forEach(l),H=f(e),S=c(e,"A",{href:!0,class:!0});var u=h(S);k=n(u,"Seç"),u.forEach(l),e.forEach(l),this.h()},h(){u(S,"href","www.google.com.tr"),u(S,"class","font-bold"),u(a,"target","_blank"),u(a,"class","p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md\r\nflex flex-col items-center"),u(a,"href",y=r[0].url)},m(r,e){d(r,a,e),i(a,s),i(s,x),i(a,$),i(a,w),i(w,b),i(w,E),i(a,H),i(a,S),i(S,k),L=!0},p(r,[s]){(!L||1&s)&&T!==(T=`(${r[0].source}) ${r[0].title}`)&&p(x,T),(!L||1&s)&&j!==(j=r[0].price+"")&&p(b,j),(!L||1&s&&y!==(y=r[0].url))&&u(a,"href",y)},i(r){L||(g((()=>{A||(A=m(a,v,{},!0)),A.run(1)})),L=!0)},o(r){A||(A=m(a,v,{},!1)),A.run(0),L=!1},d(r){r&&l(a),r&&A&&A.end()}}}function $(r,a,s){let{product:e}=a;return r.$$set=r=>{"product"in r&&s(0,e=r.product)},[e]}class w extends r{constructor(r){super(),a(this,r,$,x,s,{product:0})}}export{w as P};
