import{b as c}from"./chunk-R6GCLTW2.js";import{a as P}from"./chunk-3TVEFIPW.js";import{a as o}from"./chunk-5KSDRGLW.js";import{nc as m}from"./chunk-CVJKAN5R.js";import{f as d,m as s,o as n}from"./chunk-6V2G2Z5W.js";s();n();var i=d(P());m();var h=async(t,e,r,a)=>{try{return await a(t,{privateKey:e,hrp:r}),!0}catch{return!1}},x=async(t,e)=>{let r=[],a=c(e),{getNewAddress:f}=await o();return await Promise.all(a.map(({coinType:p,cosmosPrefix:l,baseChain:u})=>h(p,t,l,f).then(y=>{y&&r.push(u)}))),r};var v=async(t,e)=>await x(t,e),C=async(t,e)=>{let r=await v(t,e);return Boolean(r[0])};export{v as a,C as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-O3PROVSJ.js.map
