import{e as h}from"./chunk-A5VEFKCJ.js";import{a as T}from"./chunk-E73QHIZ6.js";import{a as w}from"./chunk-PCY622ND.js";import{g as x}from"./chunk-2HWABU7H.js";import{b as A}from"./chunk-VPBQLZCI.js";import{a as _,va as m}from"./chunk-O4EDZSHP.js";import{d as l,f as B}from"./chunk-S4N75E3H.js";import{a as N}from"./chunk-TPSXCUGD.js";import{C as $,Ha as E,Pa as b,v as u}from"./chunk-CVJKAN5R.js";import{H as C}from"./chunk-GXQ645QR.js";import{V as c}from"./chunk-C2H3SRET.js";import{a as R}from"./chunk-V4YVDLI4.js";import{f as g,m as r,o as a}from"./chunk-6V2G2Z5W.js";r();a();var o=g(R());$();var W=g(N());B();var P=0,S=1,k=({coinId:e,from:n=_})=>{let s=(0,W.useHistory)(),[i,f]=(0,o.useState)(!1),{coin:t}=T(e,!1),p=x(),O=(0,o.useCallback)(async()=>{try{f(!0);let d=await l().getPublicKeyByWalletId(p,t==null?void 0:t.localType),{status:y}=await h({pubKey:d,coinId:e,chainId:t==null?void 0:t.chainId});y===S?C.warn({title:u("extension_wallet_transaction_notif_waxaccount_creation")}):y===P?s.push(`${m}?coinId=${e}&from=${n}`):await l().getAccountKeys()}catch{s.push(`${m}?coinId=${e}&from=${n}`)}finally{f(!1)}},[e,n,p,t==null?void 0:t.localType,t==null?void 0:t.chainId]);return o.default.createElement(c,{loading:i,size:c.SIZE.xs,type:c.TYPE.primary,category:c.CATEGORY.outline,onClick:O},u("extension_wallet_manage_btn_create_account"))},D=o.default.memo(k);r();a();b();var K=()=>{let e=w();return A((n={})=>{let{coinId:s,localType:i}=n;return s!==void 0&&[E].includes(s)?Boolean(e[i]):!0})},L=K;r();a();export{D as a,L as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-E6NTQWKX.js.map