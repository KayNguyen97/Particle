import{b as A}from"./chunk-DCUBXXOY.js";import{w as L}from"./chunk-3T5SDSKD.js";import{a as E}from"./chunk-2NIR645O.js";import{a as w}from"./chunk-ODS2CEAN.js";import{n as P,o as U}from"./chunk-O4EDZSHP.js";import{k as O}from"./chunk-HU3KBV5G.js";import{b as z}from"./chunk-6ZPGW3YM.js";import{a as y}from"./chunk-TPSXCUGD.js";import{C as j,v as b}from"./chunk-CVJKAN5R.js";import{B as T,o as F}from"./chunk-GXQ645QR.js";import{P as S,c as q}from"./chunk-C2H3SRET.js";import{a as _}from"./chunk-V4YVDLI4.js";import{f as m,m as s,o as i}from"./chunk-6V2G2Z5W.js";s();i();var f=m(_());var G=({looker:e,chainId:o,tokenId:l,contractAddress:r})=>{let[c,p]=(0,f.useState)({}),[u,n]=(0,f.useState)(!1),x=(0,f.useCallback)(async()=>{var C,h,D;if(!o||!l)return;n(!0);let t=await L({looker:e,chainId:o,tokenId:l,contractAddress:r}),{tokenStandard:Y}=t,g={...t,locationId:`${(C=t==null?void 0:t.btcNftUtxoDetail)==null?void 0:C.txId}:${(h=t==null?void 0:t.btcNftUtxoDetail)==null?void 0:h.outputIndex}${Y===E.Ordinals?(D=t==null?void 0:t.btcNftUtxoDetail)==null?void 0:D.outputSatOffset:""}`,price:(t==null?void 0:t.salePrice)||(t==null?void 0:t.lastPrice)||(t==null?void 0:t.bestOfferPrice)};return p(g),n(!1),g},[o,r,e,l]);return{loading:u,nftInfo:c,getNFTInfo:x}},X=G;s();i();var M=m(y()),$=m(_());var I=()=>{let e=(0,M.useLocation)();return(0,$.useMemo)(()=>{var o;return w((o=e.search)==null?void 0:o.slice(1))},[e.search])},k=I;s();i();var v=m(_());var Q=m(y());var B=m(z());var J=(e={})=>{let o=(0,Q.useHistory)(),l=(0,B.useDispatch)(),r=O(),{claim:c,offerAddress:p,accountAddress:u}=k();return(0,v.useCallback)((n={})=>{if((e==null?void 0:e.chainName)==="Solana"&&(e==null?void 0:e.sale)){let x=F.tip({alignBottom:!1,title:r("extension_wallet_detail_title_transfer_faild"),children:r("extension_wallet_detail_text_transfer_faild"),confirmText:r("wallet_extension_btn_general_ok"),onConfirm:()=>{x.destroy()}});return}if(c){l(A.setToAddress(u)),o.push({pathname:U,state:{nftInfo:{...e,...n,claim:!0,accountAddress:p}}});return}o.push({pathname:P,state:{nftInfo:{...e,...n}}})},[c,o,e,l,u,p,r])},nt=J;s();i();var a=m(_());j();var H=m(q());s();i();var N={root:"_root_1sfmf_1",circle:"_circle_1sfmf_11",loader:"_loader_1sfmf_16"};function K({className:e,tooltip:o,count:l}){let r=a.default.createElement(a.default.Fragment,null,a.default.createElement(S.Circle,{className:N.circle,loaderClassName:N.loader}),l),c=(0,H.default)(e,N.root);return o?a.default.createElement(T,{className:c,title:b("wallet_brc20_tooltips_card_state_locked_tooltips"),placement:T.DIRECTION.top},r):a.default.createElement("div",{className:c},r)}var bt=K;export{X as a,k as b,nt as c,bt as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-F3PODZED.js.map