import{a as E}from"./chunk-DMJQUOJT.js";import{b as m,c as g}from"./chunk-ERLETJMZ.js";import{d as i,f as N}from"./chunk-S4N75E3H.js";import{D as b}from"./chunk-CVJKAN5R.js";import{f,m as c,o as s}from"./chunk-6V2G2Z5W.js";c();s();N();var p=f(b());var a=E("form"),U={name:"",nameErr:"",rpcUrl:"",rpcUrlErr:"",chainId:"",chainIdErr:"",chainIdTip:"",symbol:"",symbolErr:"",symbolTip:"",explorerUrl:"",explorerUrlErr:"",fieldUpdated:!1},S=m({name:a,initialState:U,reducers:{setName:(r,{payload:e})=>{r.name=e,r.fieldUpdated=!0},setNameErr:(r,{payload:e})=>{r.nameErr=e},setRpcUrl:(r,{payload:e})=>{r.rpcUrl=e,r.fieldUpdated=!0},setRpcUrlErr:(r,{payload:e})=>{r.rpcUrlErr=e},setChainId:(r,{payload:e})=>{r.chainId=e,r.fieldUpdated=!0},setChainIdErr:(r,{payload:e})=>{let{chainId:t}=r,{validChainId:o,err:l}=e;t===o&&(r.chainIdErr=l)},setChainIdTip:(r,{payload:e})=>{let{chainId:t}=r,{validChainId:o,tip:l}=e;t===o&&(r.chainIdTip=l)},setSymbol:(r,{payload:e})=>{r.symbol=e,r.fieldUpdated=!0},setSymbolErr:(r,{payload:e})=>{r.symbolErr=e},setSymbolTip:(r,{payload:e})=>{r.symbolTip=e},setExplorerUrl:(r,{payload:e})=>{r.explorerUrl=e,r.fieldUpdated=!0},setExplorerUrlErr:(r,{payload:e})=>{r.explorerUrlErr=e},updateFormData:(r,{payload:e})=>{(0,p.forEach)(e,(t,o)=>{r[o]=t})},resetFormData:r=>{(0,p.forEach)(U,(e,t)=>{r[t]=e})}}}),W=r=>{let{name:e,nameErr:t}=r[a];return{name:e,nameErr:t}},M=r=>{let{rpcUrl:e,rpcUrlErr:t}=r[a];return{rpcUrl:e,rpcUrlErr:t}},v=r=>{let{chainId:e,chainIdErr:t,chainIdTip:o,fieldUpdated:l}=r[a];return{chainId:e,chainIdErr:t,chainIdTip:o,fieldUpdated:l}},w=r=>{let{symbol:e,symbolErr:t,symbolTip:o,fieldUpdated:l}=r[a];return{symbol:e,symbolErr:t,symbolTip:o,fieldUpdated:l}},A=r=>{let{explorerUrl:e,explorerUrlErr:t}=r[a];return{explorerUrl:e,explorerUrlErr:t}},h=r=>{let{name:e,rpcUrl:t,symbol:o,chainId:l,explorerUrl:n,uniqueId:d}=r[a];return{name:e,rpcUrl:t,symbol:o,chainId:l,explorerUrl:n,uniqueId:d}},B=()=>async(r,e)=>{await i().handleAddNetWork(h(e()))},q=()=>async(r,e)=>{await i().handleModifyNetWork(h(e()))},P=r=>{let{name:e,rpcUrl:t,symbol:o,chainId:l,nameErr:n,rpcUrlErr:d,symbolErr:x,chainIdErr:u,fieldUpdated:I,explorerUrlErr:y}=r[a];return!!(!e||!t||!o||!l||n||d||x||u||y||!I)},{actions:T,reducer:C}=S,{setName:j,setNameErr:z,setRpcUrl:G,setRpcUrlErr:H,setChainId:J,setChainIdErr:K,setChainIdTip:L,setSymbol:O,setSymbolErr:Q,setSymbolTip:V,setExplorerUrl:X,setExplorerUrlErr:Y,updateFormData:Z,resetFormData:_}=T,$=C;export{a,W as b,M as c,v as d,w as e,A as f,h as g,B as h,q as i,P as j,j as k,z as l,G as m,H as n,J as o,K as p,L as q,O as r,Q as s,V as t,X as u,Y as v,Z as w,_ as x,$ as y};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-3HKLXQEP.js.map