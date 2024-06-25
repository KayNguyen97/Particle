import{f as p,g as M}from"./chunk-O5LVHMPV.js";import{D as v,fc as u,gc as D}from"./chunk-CVJKAN5R.js";import{a as E}from"./chunk-V4YVDLI4.js";import{f as d,l as process,m as c,o as g}from"./chunk-6V2G2Z5W.js";c();g();M();var e=d(E()),f=d(v());D();var S=(n,s={})=>{let[o,w]=(0,e.useState)(null),[T,y]=(0,e.useState)(null),[r,b]=(0,e.useState)(s);return(0,e.useEffect)(()=>{(0,f.isEqual)(s,r)||b(s)},[s]),(0,e.useEffect)(()=>{let a=document.getElementById("sandbox"),l,i=t=>{t.data.chanel===n&&y(t.data)},m=t=>{t.data.status===201&&(window.removeEventListener("message",m),clearInterval(l),window.addEventListener("message",i),w(a))};return l=setInterval(()=>{var t;(t=a.contentWindow)==null||t.postMessage({status:200,buildType:process.env.ASSETS_BUILD_TYPE,cdn:p(),browser:u()},"*")},1e3),window.addEventListener("message",m),()=>{window.removeEventListener("message",i)}},[]),(0,e.useEffect)(()=>{var a;n&&o&&((a=o.contentWindow)==null||a.postMessage({chanel:n,data:r},"*"))},[n,o,r]),T};export{S as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-AX4SXHC6.js.map
