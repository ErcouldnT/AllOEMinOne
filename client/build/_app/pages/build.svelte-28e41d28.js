import{C as t,S as s,i as e,s as a,j as n,m as l,o,v as r,r as c,w as i,k as f,e as h,t as u,H as d,d as m,n as g,c as p,a as $,g as v,b as x,f as j,D as S,u as b,K as k,M as w,B as E}from"../chunks/vendor-ac1d1b55.js";import{P as B}from"../chunks/Product-b65d5d20.js";const D=t([]);function H(t,s,e){const a=t.slice();return a[1]=s[e],a}function P(t){let s,e;return s=new B({props:{product:t[1]}}),{c(){n(s.$$.fragment)},l(t){l(s.$$.fragment,t)},m(t,a){o(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.product=t[1]),s.$set(a)},i(t){e||(r(s.$$.fragment,t),e=!0)},o(t){c(s.$$.fragment,t),e=!1},d(t){i(s,t)}}}function y(t){let s,e,a,n,l,o,i=t[0],w=[];for(let r=0;r<i.length;r+=1)w[r]=P(H(t,i,r));const B=t=>c(w[t],1,1,(()=>{w[t]=null}));return{c(){s=f(),e=h("h1"),a=u("Sistemin:"),n=f(),l=h("div");for(let t=0;t<w.length;t+=1)w[t].c();this.h()},l(t){d('[data-svelte="svelte-xwe5ij"]',document.head).forEach(m),s=g(t),e=p(t,"H1",{class:!0});var o=$(e);a=v(o,"Sistemin:"),o.forEach(m),n=g(t),l=p(t,"DIV",{class:!0});var r=$(l);for(let s=0;s<w.length;s+=1)w[s].l(r);r.forEach(m),this.h()},h(){document.title="Sistem diz",x(e,"class","text-4xl text-center my-8"),x(l,"class","grid gap-4 grid-cols-1")},m(t,r){j(t,s,r),j(t,e,r),S(e,a),j(t,n,r),j(t,l,r);for(let s=0;s<w.length;s+=1)w[s].m(l,null);o=!0},p(t,[s]){if(1&s){let e;for(i=t[0],e=0;e<i.length;e+=1){const a=H(t,i,e);w[e]?(w[e].p(a,s),r(w[e],1)):(w[e]=P(a),w[e].c(),r(w[e],1),w[e].m(l,null))}for(E(),e=i.length;e<w.length;e+=1)B(e);b()}},i(t){if(!o){for(let t=0;t<i.length;t+=1)r(w[t]);o=!0}},o(t){w=w.filter(Boolean);for(let s=0;s<w.length;s+=1)c(w[s]);o=!1},d(t){t&&m(s),t&&m(e),t&&m(n),t&&m(l),k(w,t)}}}function z(t,s,e){let a;return w(t,D,(t=>e(0,a=t))),console.log(a),[a]}export default class extends s{constructor(t){super(),e(this,t,z,y,a,{})}}