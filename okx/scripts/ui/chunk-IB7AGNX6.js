import{a as E}from"./chunk-5SDFP3VE.js";import{a as x}from"./chunk-H5KDYYS6.js";import{b as R}from"./chunk-E73QHIZ6.js";import{a as g}from"./chunk-PCY622ND.js";import{e as K}from"./chunk-5W7SRP5N.js";import{H as k,I as P}from"./chunk-MTMZQEHP.js";import{j as Z}from"./chunk-VPBQLZCI.js";import{ta as b}from"./chunk-O4EDZSHP.js";import{o as f}from"./chunk-UXFKODVN.js";import{a as z}from"./chunk-TPSXCUGD.js";import{i as A}from"./chunk-RMQJRDTF.js";import{C as F,D as O,Da as p,Pa as v,R as m,v as u}from"./chunk-CVJKAN5R.js";import{o as _}from"./chunk-GXQ645QR.js";import{a as N}from"./chunk-V4YVDLI4.js";import{f as S,m as L,o as w}from"./chunk-6V2G2Z5W.js";L();w();var T=S(z());F();v();var h=S(N());var I=S(O()),D=async({chainId:s,address:e,contractAddress:o})=>{let a={chainId:s,address:e,contractAddress:o};try{return await k(a)}catch{return{status:f.NONE,register:!1}}},J=async({chainId:s,contractAddress:e})=>{let o={chainId:s,contractAddress:e};try{return await P(o)}catch{return{result:!1}}},rt=()=>{let s=(0,T.useHistory)(),e=g(m),o=R();return async({coinId:t})=>{let{coin:r,baseCoin:i}=await o(t,!0);if(![String(t),String(i.coinId)].includes(String(p)))return!0;let[n,c]=await Promise.all([D({chainId:r.chainId,address:e,contractAddress:r.address}),J({chainId:r.chainId,contractAddress:r.address})]);if(!c.result){let d=_.warn({title:u("wallet_send_modaltitle_crypto_not_supported"),text:u("wallet_dialog_modal_crypto_notavailable"),confirmText:u("wallet_send_modal_notsupported_okbtn"),alignBottom:!1,onConfirm:()=>{d.destroy()}});return!1}let y=n.status===f.NONE||n.status===f.TIMEOUT||n.status===f.ERROR;if(!n.register&&y){let d=_.warn({title:u("wallet_dialog_modal_not_registered"),text:u("wallet_dialog_modal_register_before_using"),confirmText:u("wallet_dialog_modal_registerbtn"),cancelText:u("wallet_dialog_modal_backbtn"),alignBottom:!1,onConfirm:()=>{d.destroy(),s.push(b)},onCancel:()=>{d.destroy()}});return!1}return!0}};function et(){let s=E(),e=g(m),[o,a]=(0,h.useState)(!1),[t,r]=(0,h.useState)(null);return Z(()=>{(async()=>{a(!0);let l={coinId:p,address:e},n={fromAddr:e,toAddr:e,value:"0"};try{let c=await s("ChangePubKey",l,n);r(c)}finally{a(!1)}})()}),{loading:o,feeResult:t}}function nt(){let s=x(),e=g(m),o=async t=>{let{fee:r,feeCoin:i,info:l}=t||{},{accountId:n,nonce:c}=l||{},y={type:"changePubkey",accountId:(0,I.isNil)(n)?null:parseInt(n,10),nonce:(0,I.isNil)(c)?null:parseInt(c,10),from:e,fees:r,tokenId:parseInt(i==null?void 0:i.tokenId,10)};return{signedTx:await K(y,e,m),feeResult:t}},a=async({signedTx:t,feeResult:r})=>{var d,C;if(t!=null&&t.code)return{error:t};let{tx:i}=t||{},{txHash:l,...n}=i||{},c={txSource:A.DAPP,signedTx:JSON.stringify({tx:n}),fromAdr:e,serviceCharge:(d=t==null?void 0:t.tx)==null?void 0:d.fee,coinAmount:"0",coinId:p,txHash:l,extJson:JSON.stringify({type:"ChangePubKey",serviceChargeCoinId:(C=r==null?void 0:r.feeCoin)==null?void 0:C.coinId})};return await s(c)};return async t=>{let r=await o(t);return a(r)}}export{rt as a,et as b,nt as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-IB7AGNX6.js.map