import{S as s,i as t,s as o}from"../../chunks/vendor-509cf542.js";const r=async({page:s,fetch:t})=>{const o=`http://localhost:9999/build/api/${s.params.slug}`,r=await t(o);if(r.ok){return{props:{build:await r.json()}}}const{message:e}=await r.json();return{error:new Error(e)}};function e(s,t,o){let{build:r}=t;return console.log(r),s.$$set=s=>{"build"in s&&o(0,r=s.build)},[r]}export default class extends s{constructor(s){super(),t(this,s,e,null,o,{build:0})}}export{r as load};
