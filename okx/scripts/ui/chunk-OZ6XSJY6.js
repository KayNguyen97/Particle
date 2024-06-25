import{b as r}from"./chunk-DMJQUOJT.js";import{b as o,c as i}from"./chunk-ERLETJMZ.js";import{d as n,f as c}from"./chunk-S4N75E3H.js";import{m as a,o as t}from"./chunk-6V2G2Z5W.js";a();t();c();var s="Token",k=r(s),p={chainTokens:[],chainTokenPrice:{},chainTokenBalance:{}},l=e=>e.metamask.rpcEvmChainTokens||[],x=e=>e.metamask.rpcEvmChainTokenPrice||{},g=e=>e.metamask.rpcEvmChainTokenBalance||{},m=o({name:k,initialState:p,reducers:{}}),{reducer:T}=m,B=e=>async()=>{await n().addChainToken(e)},E=e=>async()=>{await n().updateChainToken(e)},P=e=>async()=>{await n().updateChainTokenPrice(e)},f=e=>async()=>{await n().updateChainTokenBalance(e)},v=T;export{k as a,l as b,x as c,g as d,B as e,E as f,P as g,f as h,v as i};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-OZ6XSJY6.js.map
