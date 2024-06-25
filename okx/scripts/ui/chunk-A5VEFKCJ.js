import{d as n,f as x}from"./chunk-S4N75E3H.js";import{a as c,b as A}from"./chunk-MVLY6WUP.js";import{c as r,f as o,h as y}from"./chunk-ZEAKIEIQ.js";import{m as s,o as u}from"./chunk-6V2G2Z5W.js";s();u();y();A();x();var l=async(e={})=>{let{data:t}=await r(c.queryAccountExist,e);return t},q=async e=>{let{data:t}=await r(c.queryAccountInfo,e);return t},w=async(e,t)=>{let a=await n().getSignRequestHeaders({walletId:t});return await o(c.createWaxAccount,e,{headers:a})||{}},g=async(e,t)=>{let a=await n().getSignRequestHeaders({walletId:t});return await o(c.createFreeWaxAccount,e,{headers:a})||{}},W=async e=>{let{data:t}=await r(c.queryAccountStatus,e);return t||{}},h=async e=>{let{data:t}=await r(c.checkAccountPattern,e);return t!=null?t:!1};export{l as a,q as b,w as c,g as d,W as e,h as f};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-A5VEFKCJ.js.map
