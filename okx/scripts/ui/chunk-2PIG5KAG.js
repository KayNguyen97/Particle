import{b as T,k as E}from"./chunk-62JDSRZZ.js";import{p as d,q as c}from"./chunk-O4EDZSHP.js";import{a as m,b as i,f as p}from"./chunk-7MX3OHNE.js";import{a as L}from"./chunk-TPSXCUGD.js";import{e as l}from"./chunk-6PGLMYAE.js";import{a as y}from"./chunk-V4YVDLI4.js";import{f as o,m as a,o as s}from"./chunk-6V2G2Z5W.js";a();s();var f=o(T()),u=o(L());var C=o(y());var _=()=>{let e=(0,u.useHistory)(),t=E();return(0,C.useCallback)(async r=>{let g=await p.hasConnectedLedger(),{walletName:h}=t(r),n=`${c}?${f.default.stringify({type:l.addChain,walletId:r})}`;g?e.push(n):i.openModal(m.hardWareNotConnected,{walletName:h,onButtonClick:()=>{globalThis.platform.openExtensionInBrowser(d)},onExtButtonClick:()=>{globalThis.platform.openExtensionInBrowser(`${n}&hideBack=1`)}})},[e,t])};export{_ as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-2PIG5KAG.js.map
