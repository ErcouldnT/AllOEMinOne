import{S as t,i as s,s as e,e as a,t as r,c as i,a as n,g as c,d as o,b as l,f as u,D as h,h as f,E as d}from"../chunks/vendor-e2d8fcd2.js";function p(t){let s,e;return{c(){s=a("h1"),e=r(t[0]),this.h()},l(a){s=i(a,"H1",{class:!0});var r=n(s);e=c(r,t[0]),r.forEach(o),this.h()},h(){l(s,"class","text-center text-4xl")},m(t,a){u(t,s,a),h(s,e)},p(t,[s]){1&s&&f(e,t[0])},i:d,o:d,d(t){t&&o(s)}}}function x({error:t,status:s}){return{props:{title:`${s}: ${t.message}`}}}function m(t,s,e){let{title:a}=s;return t.$$set=t=>{"title"in t&&e(0,a=t.title)},[a]}export default class extends t{constructor(t){super(),s(this,t,m,p,e,{title:0})}}export{x as load};