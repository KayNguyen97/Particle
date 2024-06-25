import{e as b}from"./chunk-MTMZQEHP.js";import{o as c,q as I}from"./chunk-VPBQLZCI.js";import{D as x}from"./chunk-CVJKAN5R.js";import{a as q}from"./chunk-V4YVDLI4.js";import{f as p,m as L,o as G}from"./chunk-6V2G2Z5W.js";L();G();var e=p(q());var r=p(x()),B=(O,g={wait:200,disabled:!1,fetchOnce:null,onFetchSuccess:()=>{},onFetchError:()=>{}})=>{let[v,w]=(0,e.useState)({}),[a,y]=(0,e.useState)(null),[E,{setTrue:S,setFalse:s}]=c(!0),[k,{setFalse:n}]=c(!0),{address:u,inputData:f,tokenAddress:o,coinId:l,value:d}=O,{wait:A,disabled:m,fetchOnce:t,onFetchSuccess:h,onFetchError:F}=g,{run:D}=I(()=>{if(m){s(),n();return}if(t===a&&t!==null){s(),n();return}(async()=>{try{let i={address:u,inputData:f,coinId:l,value:d};o&&(i.tokenAddress=o);let{data:P}=await b(i);w(P),t&&y(t),(0,r.isFunction)(h)&&h()}catch{(0,r.isFunction)(F)&&F()}finally{s(),n()}})()},{wait:A});return(0,e.useEffect)(()=>{S(),D()},[u,f,o,l,d,t,a,m]),[v,E,k]},C=B;export{C as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-GQOO5OO7.js.map
