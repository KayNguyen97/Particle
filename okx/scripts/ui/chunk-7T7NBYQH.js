import{a as S}from"./chunk-V4YVDLI4.js";import{f as x,m as E,o as c}from"./chunk-6V2G2Z5W.js";E();c();var n=x(S()),s="unmount",N="entering",a="entered",f="exiting",u="exited",m=0,I=0,d=(T,i,r)=>{let[t,l]=(0,n.useState)(s),e=(0,n.useCallback)(o=>{o!==t&&l(o)},[t]);return(0,n.useEffect)(()=>{if(T){if(clearTimeout(I),t===s){e(u);return}t===u&&r.current&&r.current.clientWidth,(t===u||t===f)&&(e(N),m=setTimeout(()=>{e(a)},i))}else clearTimeout(m),(t===a||t===N)&&(e(f),I=setTimeout(()=>{e(s)},i))},[r,T,e,t,i]),t};d.STATUS={UNMOUNT:"unmount",ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};var g=d;export{g as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-7T7NBYQH.js.map
