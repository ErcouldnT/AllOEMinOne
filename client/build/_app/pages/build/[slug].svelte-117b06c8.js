import{S as s,i as r,s as t}from"../../chunks/vendor-509cf542.js";const o=async({page:s,fetch:r})=>{const t=`/api/build/${s.params.slug}`,o=await r(t);if(o.ok){return{props:{build:await o.json()}}}const{message:e}=await o.json();return{error:new Error(e)}};function e(s,r,t){let{build:o}=r;return console.log(o),s.$$set=s=>{"build"in s&&t(0,o=s.build)},[o]}export default class extends s{constructor(s){super(),r(this,s,e,null,t,{build:0})}}export{o as load};
