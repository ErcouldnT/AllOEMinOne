import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f as p,D as f,h as l,k as i,l as d,n as m,E as h}from"./chunks/vendor-798bf6bb.js";function k(s){let r,a,i=s[1].stack+"";return{c(){r=t("pre"),a=e(i)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,i),t.forEach(u)},m(s,t){p(s,r,t),f(r,a)},p(s,r){2&r&&i!==(i=s[1].stack+"")&&l(a,i)},d(s){s&&u(r)}}}function E(s){let r,a,E,v,b,g,x,P=s[1].message+"",$=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),E=i(),v=t("p"),b=e(P),g=i(),$&&$.c(),x=d()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),E=m(t),v=o(t,"P",{});var p=n(v);b=c(p,P),p.forEach(u),g=m(t),$&&$.l(t),x=d()},m(s,t){p(s,r,t),f(r,a),p(s,E,t),p(s,v,t),f(v,b),p(s,g,t),$&&$.m(s,t),p(s,x,t)},p(s,[r]){1&r&&l(a,s[0]),2&r&&P!==(P=s[1].message+"")&&l(b,P),s[1].stack?$?$.p(s,r):($=k(s),$.c(),$.m(x.parentNode,x)):$&&($.d(1),$=null)},i:h,o:h,d(s){s&&u(r),s&&u(E),s&&u(v),s&&u(g),$&&$.d(s),s&&u(x)}}}function v({error:s,status:r}){return{props:{error:s,status:r}}}function b(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,b,E,a,{status:0,error:1})}}export{v as load};