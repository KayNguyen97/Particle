import{a as S}from"./chunk-QIUJDVIV.js";import{a as W,e as O}from"./chunk-DCZKBMNP.js";import{a as L}from"./chunk-KZ77CGYD.js";import{da as E}from"./chunk-R6GCLTW2.js";import{p as C}from"./chunk-X2LENRE7.js";import{k as g}from"./chunk-HU3KBV5G.js";import{b as H}from"./chunk-6ZPGW3YM.js";import{c as _}from"./chunk-2YLR7R2N.js";import{qb as T,rb as j}from"./chunk-CVJKAN5R.js";import{B as x,G as y}from"./chunk-GXQ645QR.js";import{J as N,c as B}from"./chunk-C2H3SRET.js";import{a as w}from"./chunk-V4YVDLI4.js";import{f as l,m as i,o as n}from"./chunk-6V2G2Z5W.js";i();n();var o=l(w());var I=l(B());i();n();var m={refreshWrapper:"_refreshWrapper_1r7a4_1",refreshIcon:"_refreshIcon_1r7a4_4",hidden:"_hidden_1r7a4_10",amount:"_amount_1r7a4_13",refreshAnimation:"_refreshAnimation_1r7a4_32",refresh:"_refresh_1r7a4_1"};var K={maxWidth:156,popupStyle:{borderRadius:4},modifiers:[{name:"offset",options:{offset:[86,-10]}},{name:"arrow",options:{padding:({popper:e})=>e.width/2}}]},P={14:36,15:32,16:32,17:28,18:28,19:24,20:24,21:24,22:20,23:20,24:20,25:20,26:18,27:18};function Y({coinSymbol:e,amountDisplay:r,currencyDisplay:c}){let[t,a]=(0,o.useState)("hidden"),d=(0,o.useMemo)(()=>{let h=r.length,u={};return u.fontSize=P[h]||40,h>=28&&(u={fontSize:18,display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",cursor:"pointer"}),u},[r]),k=()=>{a("hidden")},A=(0,o.useCallback)(()=>{t!=="loading"&&a("show")},[t]),f=(0,o.useCallback)(()=>{t!=="loading"&&a("hidden")},[t]);return o.default.createElement("div",{className:"coin-detail-balance"},o.default.createElement(_.FlexBox,{align:_.ALIGN.center,justify:_.ALIGN.center,style:d,onMouseEnter:A,onMouseLeave:f,className:m.refreshWrapper},o.default.createElement(_.Box,{onAnimationEnd:k,className:(0,I.default)(m.refreshWrapper,{[m.refreshAnimation]:t==="success"})},d.textOverflow?o.default.createElement(x,{layerClassName:"coin-detail-balance__tooltip",style:d,title:`${r} ${e}`,type:x.TYPES.neutral,placement:x.DIRECTION.bottom,...K},r):r,o.default.createElement(O,{className:(0,I.default)(m.refreshIcon,{[m.hidden]:t==="hidden"}),status:t,handleRefresh:a}))),c&&o.default.createElement("div",{className:"coin-detail-balance__currency"},c))}var q=Y;i();n();var M=l(w()),z=l(B());function J({className:e,children:r}){return M.default.createElement("div",{className:(0,z.default)("coin-detail-overview-container",e)},r)}var Q=J;i();n();var s=l(w());var F=l(H());j();function U({address:e,addressType:r,chainName:c,baseCoin:t={},coin:a={}}){let d=g(),[k,A]=S(),f=(0,F.useSelector)(E),h=W(),u=T.includes(a==null?void 0:a.localType),G=()=>{if(f){h();return}if(!k){A(e);let b=d("wallet_extension_overview_receive_address_copied");r&&(b=L(d,r,t==null?void 0:t.symbol)),y.success({title:b,desc:s.default.createElement("div",{className:"coin-detail-address__copy-message"},e)})}},$=()=>f?s.default.createElement("span",{className:"new-coin-detail-address-content-black"},C(e)):u?s.default.createElement("span",null,e):s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{className:"new-coin-detail-address-content-black"},e));return s.default.createElement("div",{className:"new-coin-detail-address",onClick:G},s.default.createElement("div",{className:"new-coin-detail-address-title"},d("extension_wallet_address_text_network_address",{network:c})),s.default.createElement("div",{className:"new-coin-detail-address-content"},$()),s.default.createElement("div",{className:"new-coin-detail-address__icon"},s.default.createElement(N,{className:"okx-wallet-plugin-copy-1",style:{fontSize:"24px",color:f?"var(--okd-color-content-disabled)":"var(--okd-color-content-primary)"}})))}var V=U;i();n();i();n();var p=l(w());function X({address:e}){let r=g(),[c,t]=S();return p.default.createElement("div",{className:"coin-detail-address"},p.default.createElement("div",{className:"coin-detail-address__text",onClick:()=>{if(!c){t(e);let d=r("wallet_extension_overview_receive_address_copied");y.success({title:d,desc:p.default.createElement("div",{className:"coin-detail-address__copy-message"},e)})}}},C(e),p.default.createElement("div",{className:"coin-detail-address__icon"},p.default.createElement(N,{className:"okx-wallet-plugin-copy",style:{fontSize:"20px"}}))))}var Z=X;export{q as a,Z as b,Q as c,V as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-FXXWM5E2.js.map