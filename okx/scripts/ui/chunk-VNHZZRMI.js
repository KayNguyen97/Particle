import{d as q}from"./chunk-U3YDJ2W7.js";import{a as $,b as j,c as w,d as E}from"./chunk-VCWU5FEX.js";import{a as K}from"./chunk-AHAXQBXQ.js";import{a as k}from"./chunk-PGPPXRV7.js";import{d as U}from"./chunk-F64VYES3.js";import{b as B}from"./chunk-DHX2X277.js";import{c as b}from"./chunk-MTMZQEHP.js";import{h as Y,i as L,l as Z}from"./chunk-62JDSRZZ.js";import{b as G,l as z}from"./chunk-VPBQLZCI.js";import{V as D,aa as H}from"./chunk-O4EDZSHP.js";import{d as g,f as A}from"./chunk-S4N75E3H.js";import{x as O}from"./chunk-UXFKODVN.js";import{a as at}from"./chunk-TPSXCUGD.js";import{i as F}from"./chunk-RMQJRDTF.js";import{a as v,b as st}from"./chunk-MVLY6WUP.js";import{f as N,h as nt}from"./chunk-ZEAKIEIQ.js";import{C as rt,D as ot,a as R,b as tt,v as i}from"./chunk-CVJKAN5R.js";import{o as W}from"./chunk-GXQ645QR.js";import{V as d}from"./chunk-C2H3SRET.js";import{a as et}from"./chunk-V4YVDLI4.js";import{f as h,m as I,o as P}from"./chunk-6V2G2Z5W.js";I();P();var m=h(et());tt();A();nt();st();rt();var X=h(at());I();P();A();var M=h(ot()),V=async e=>{try{return await g().getMpcIdByWalletId(e)}catch{return null}},J=async e=>{try{return await g().accountCheck(e)}catch{return!1}},Q=async e=>{try{let{data:t}=await q([{mpcId:e}]);return{mpcStatus:(0,M.get)(t,"[0].mpcStatus"),accountStatus:(0,M.get)(t,"[0].accountStatus")}}catch{return{mpcStatus:E.ESCAPE,accountStatus:w.FROZEN}}};var ct=()=>G(async e=>{let{coinId:t,address:s,...r}=e||{};if(!s||!t)return{};try{let c={coinId:t,address:s},{data:a}=await b(c,{...r}),{info:_,...o}=a||{};return{...o,..._||{}}}catch(c){return Promise.reject(c)}},[]),lt=7e3,Gt=({coinId:e,address:t,...s},r={})=>{let c=ct(),[a,_]=(0,m.useState)({}),o={pollingInterval:lt,ready:!!e&&!!t,...r||{}};return z(async()=>await c({coinId:e,address:t,...s}),{...o,onSuccess:n=>{var p;_(n),(p=o==null?void 0:o.onSuccess)==null||p.call(o,n)}}),a},_t=({fromAddr:e,localType:t})=>(0,m.useCallback)(({params:s,isSignError:r})=>{R.captureEvent({message:`signTxError: ${e}`,contexts:{report:{info:JSON.stringify({params:s,isSignError:r,localType:t})}},exception:{values:[{type:"BIZ_ERROR_signTxError",value:e}]},level:"error"})},[e,t]),zt=({fromAddr:e,localType:t,walletId:s})=>{let r=L(s),c=_t({fromAddr:e,localType:t});return(0,m.useCallback)(async({params:a={},needCapture:_=!1,...o})=>{try{return B(r==null?void 0:r.initialType)?await U({walletInfo:r,txParams:a,baseChain:t}):await g().signTransaction(a,e,t,s,o)}catch(n){throw _&&c({params:a,isSignError:(n==null?void 0:n.message)===O}),new Error(n==null?void 0:n.message)}},[e,t,r,s])},Yt=({coinId:e,txType:t,walletId:s,coinAmount:r,fromAddr:c,toAddr:a,localType:_,networkFee:o,extJson:n,...p})=>{let l=L(s),f=l==null?void 0:l.walletId;return(0,m.useCallback)(async(y,u={})=>{let S=(u==null?void 0:u.txHash)||await k(_,y),T={coinId:e,txHash:S,txType:t,extJson:n,signedTx:y,coinAmount:r,toAdr:a,fromAdr:c,serviceCharge:o,accountId:f,walletType:l==null?void 0:l.serverWalletType,txSource:F.NORMAL,...p,...u},x=await g().getRequestHeaders({walletId:f,needSign:!0,currency:"usd"}),{data:C}=await N(v.postTx,T,{headers:x});return C},[_,e,t,n,r,a,c,o,f,l==null?void 0:l.serverWalletType,p])},Zt=(e,t)=>{let s=(0,m.useRef)(),r=(0,X.useHistory)(),c=Y(),a=e||c,_=Z(a),o=K();return(0,m.useCallback)(async()=>{if(!_)return Promise.resolve();let n=await V(a);if(!n)return Promise.resolve();let p=await J(n),{mpcStatus:l,accountStatus:f}=await Q(n);if(f===w.NORMAL&&l!==E.ESCAPE&&p)return Promise.resolve();let u={},S=()=>{var x;t==null||t(),r.replace(H),(x=s.current)==null||x.destroy()},T=window.location.pathname.includes(D);return p?f===w.DELETE?u={title:i("extension_wallet_error_toast_modatitle_deleteacct"),text:i("extension_wallet_error_toast_modaldesc_deleteacct"),confirmText:i("extension_wallet_error_toast_btn_switch_wallet"),onConfirm:S}:f===w.FROZEN?u={title:i("extension_wallet_error_toast_title_freeze_account"),text:i("extension_wallet_error_toast_text_freeze_desc"),confirmText:i("extension_wallet_error_toast_btn_switch_wallet"),onConfirm:S}:l===E.ESCAPE&&(u={title:i("extension_wallet_error_toast_modaltitle_wallet_escaped"),text:i("extension_wallet_error_toast_modaldesc_wallet_escapeddesc"),confirmText:i("extension_wallet_error_toast_btn_switch_wallet"),onConfirm:S}):u={text:i("extension_wallet_error_toast_text_verify_again1"),title:i("extension_wallet_error_toast_title_verify_again"),confirmText:i("extension_wallet_error_toast_btn_verification"),onConfirm:async()=>{var C;t==null||t(),(C=s.current)==null||C.destroy();let x=i("wallet_common_okx_link");await g().setMpcAction($.VERIFY,a),globalThis.open((o==null?void 0:o.mpcLogin)||`https://${x}${j}`),window.close()},cancelText:T?void 0:i("extension_wallet_error_toast_btn_switch_wallet"),cancelBtnProps:T?void 0:{category:d.CATEGORY.outline,size:d.SIZE.lg},onCancel:T?void 0:S},s.current=W.prompt({visible:!0,hideCloseBtn:!0,infoType:W.Prompt.INFO_TYPE.warn,alignBottom:!1,maskClosable:!1,confirmBtnProps:{type:d.TYPE.highlight,size:d.SIZE.lg},...u}),Promise.reject()},[r,_,a,t])};export{ct as a,Gt as b,zt as c,Yt as d,Zt as e};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-VNHZZRMI.js.map