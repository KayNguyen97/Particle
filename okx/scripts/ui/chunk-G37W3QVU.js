import{a as P,b as _,d as Ae,f as ye,k as Ee}from"./chunk-NNLKCRJB.js";import{a as Ne}from"./chunk-I4A7V6SN.js";import{G as fe}from"./chunk-HE77KLJ4.js";import{a as pe}from"./chunk-YLO74Q7W.js";import{a as de}from"./chunk-D54UDGZS.js";import{a as le}from"./chunk-PGPPXRV7.js";import{d as H,e as ut,g as ue}from"./chunk-FEET7RP6.js";import{b as K}from"./chunk-PCY622ND.js";import{b as Bt,d as Zt}from"./chunk-JLLMIXPD.js";import{a as ne}from"./chunk-5OUCZQSW.js";import{b as Te,c as ge,d as _e}from"./chunk-EXUJ54CX.js";import{b as Xt,c as te,d as mt,e as ee}from"./chunk-XAMN4IIH.js";import{g as Et,n as ie}from"./chunk-2HWABU7H.js";import{a as Qt,b as At}from"./chunk-QNEJI55N.js";import{d as Jt}from"./chunk-5W7SRP5N.js";import{a as zt,g as jt}from"./chunk-VIS7KIVI.js";import{d as ce,f as V,i as me}from"./chunk-DMJQUOJT.js";import{b as _t}from"./chunk-4OTZHHYZ.js";import{$ as $t,G as Mt,J as Wt,R as qt,V as Kt,W as Vt,_ as Yt,w as y,x as X}from"./chunk-R6GCLTW2.js";import{l as dt}from"./chunk-IU3TYIWS.js";import{b as S,e as yt,f as se,j as re,q as ae}from"./chunk-VPBQLZCI.js";import{t as Ht}from"./chunk-X2LENRE7.js";import{R as oe}from"./chunk-O4EDZSHP.js";import{k as q}from"./chunk-HU3KBV5G.js";import{b as F}from"./chunk-6ZPGW3YM.js";import{j as Tt,k as tt,o as gt}from"./chunk-ZKDHZDUE.js";import{d as x,f as st}from"./chunk-S4N75E3H.js";import{a as I,b as G}from"./chunk-YMZEQGAL.js";import{a as Ze}from"./chunk-3TVEFIPW.js";import{y as Ut}from"./chunk-UXFKODVN.js";import{a as ze}from"./chunk-TPSXCUGD.js";import{a as ct}from"./chunk-6PGLMYAE.js";import{D as xt,Db as bt,F as Ot,Fb as Lt,G as It,Hb as rt,Ib as at,Jb as kt,Nb as Ft,Ob as Q,Pa as St,Tb as it,Vb as ft,a as vt,b as $e,jc as Gt,nc as Be,sb as j,ub as Dt,zb as J}from"./chunk-CVJKAN5R.js";import{G as k}from"./chunk-GXQ645QR.js";import{a as W}from"./chunk-V4YVDLI4.js";import{f as w,m as T,o as g}from"./chunk-6V2G2Z5W.js";T();g();var Y=w(F());function fo(){let t=(0,Y.useSelector)(jt),s=t&&t.metadata?t.metadata.id:null,o=s?1:0,e=(0,Y.useSelector)(Wt),n=e.length,i=(0,Y.useSelector)(Mt),a=(0,Y.useSelector)($t),c=a.length,u=(0,Y.useSelector)(Yt),l=u.length;return{unapprovedTxList:e,unapprovedTxCount:n,unapprovedSmCount:i,unapprovedStList:a,unapprovedStCount:c,unapprovedPermissionCount:o,unapprovedPermissionsRequestId:s,unapprovedSnList:u,unapprovedSnCount:l,unapprovedRequestCount:n+i+c+l+o}}T();g();T();g();var N=w(W()),lt=w(F());var qe=w(ze());T();g();var he=w(F());var $=w(W());function je(t){let s=t.map(e=>{let{nonce:n}=e.txParams;return parseInt(n,16)}),o=Math.max.apply(null,s);return Number.isInteger(o)?o+1:0}function we(t){let s=H(),o=K(),e=t||o,n=(0,he.useSelector)(ce),i=yt(Ae()),a=yt(ye()),[c,u]=(0,$.useState)(!1),[l,r]=(0,$.useState)(null),[m,p]=(0,$.useState)(null),f=S(async()=>{let d;try{u(!0),d=await(await s()).eth.getTransactionCount(e,"latest")}finally{u(!1)}let h=je(i.current),E=Math.max(d,h),A=a.current.map(O=>{let{nonce:b}=O.txParams;return Te(b)}),v=E;for(;A.includes(v);)v+=1;return r(d),p(v),{nonce:d,suggestedNonce:v}});return(0,$.useEffect)(()=>{f()},[s,e,n]),{loadingNonce:c,nonce:l,suggestedNonce:m,request:f}}ft();T();g();var ot=w(F()),U=w(xt());st();var et=w(Ze());ft();St();$e();Be();T();g();var Pe=w(W());var Je=()=>{let t=q(),s=Ee();return o=>{var e,n,i,a;if(o){let{type:c,status:u,txHash:l,extraParams:r}=o,m={[_.TRANS_OUT]:{key:"wallet_transfer_notif_send_success",params:{first:r==null?void 0:r.value,second:r==null?void 0:r.coinSymbol}},[_.CONTRACT_CALL]:{key:"wallet_transfer_notif_contract_interaction_success"},[_.AUTHORIZATION]:{key:"wallet_transfer_notif_approval_success",params:{first:r==null?void 0:r.coinSymbol}},[_.CANCEL_AUTHORIZATION]:{key:"wallet_transfer_notif_cancel_approval_success",params:{first:r==null?void 0:r.coinSymbol}},[_.CONTRACT_DEPLOY]:{key:"developer_mode_dapp_toast_deployed_successfully"}},p={[_.TRANS_OUT]:{key:"wallet_transfer_notif_send_fail",params:{first:r==null?void 0:r.value,second:r==null?void 0:r.coinSymbol}},[_.CONTRACT_CALL]:{key:"wallet_transfer_notif_contract_interaction_fail"},[_.AUTHORIZATION]:{key:"wallet_transfer_notif_approval_fail",params:{first:r==null?void 0:r.coinSymbol}},[_.CANCEL_AUTHORIZATION]:{key:"wallet_transfer_notif_cancel_approval_fail",params:{first:r==null?void 0:r.coinSymbol}},[_.CONTRACT_DEPLOY]:{key:"developer_mode_dapp_toast_deployfailed"}},f,d,h,E,A;u===P.PENDING?(f=k.TYPE.success,c===_.CANCEL_AUTHORIZATION?(d="wallet_transfer_notif_cancel_approval_submit",h={first:r==null?void 0:r.coinSymbol}):d="wallet_transfer_notif_transaction_submit"):(u===P.SUCCEED?(f=k.TYPE.success,d=(e=m[c])==null?void 0:e.key,h=(n=m[c])==null?void 0:n.params):(f=k.TYPE.error,d=(i=p[c])==null?void 0:i.key,h=(a=p[c])==null?void 0:a.params),u!==P.DROPPED&&(E=s(l),A="wallet_transfer_notif_view_on_explorer")),k[f]({title:t(d,h)||d,desc:E?Pe.default.createElement(ne,{url:E,urlText:t(A)}):null,duration:3})}}},Ce=Je;T();g();st();var Re=async t=>await x().rpcEvmAddTransaction(t),Nt=async t=>await x().rpcEvmUpdateTransaction(t),ve=async t=>await x().rpcEvmConfirmTransaction(t),xe=async t=>await x().rpcEvmFindTransaction(t),Oe=async t=>await x().rpcEvmPublishTransaction(t);function Qe(t){let s={to:t.to,value:(0,et.addHexPrefix)(G(t.value)),gasLimit:(0,et.addHexPrefix)(G(t.gasLimit)),gasPrice:(0,et.addHexPrefix)(G(t.gasPrice)),nonce:(0,et.addHexPrefix)(G(t.nonce))};return t.data&&(s.data=t.data),s}function ht(){let t=(0,ot.useSelector)(V),s=K();return S(o=>{let{type:e,txParams:n,extraParams:i}=o,a=e;return a||(n.to?a=_.CONTRACT_CALL:a=_.CONTRACT_DEPLOY),{id:Gt(),type:a,txParams:{...Qe(n),from:n.from||s,chainId:t.chainId},status:P.UNAPPROVED,createTime:+new Date,txPool:[],isCanceling:!1,isSpeeding:!1,extraParams:i||{}}})}function wt(){let t=Ce(),s=(0,ot.useSelector)(Kt),o=Et();return S(async(e,{walletId:n=o,signedCallback:i=U.noop}={})=>{if(!e)throw new Error("tx meta error");let a;if(e.txParams.result)a=e.txParams.result;else{let{from:u}=e.txParams;a=await x().signRpcEvmTransaction(e.txParams,u,s,n)}let c=await le(Ot,a);return await i({rawTx:a,txHash:c,status:P.PENDING}),new Promise((u,l)=>{Oe({txId:e.id,rawTx:a}).then(({error:r,data:m,tx:p})=>{if(r){((p==null?void 0:p.status)===P.PENDING||(p==null?void 0:p.status)===P.DROPPED)&&t(p),l(r);let{type:f,txParams:d,extraParams:h}=e,{from:E,to:A,value:v,gasLimit:O,gasPrice:b,nonce:L,chainId:B}=d||{},{approvedAmount:Z,coinSymbol:z,tokenAddress:M,approvedAddress:nt,value:Rt,toAddress:pt}=h||{};vt.captureEvent({tags:{address:E},message:"API_ERROR_evm_rpc_send_tx",contexts:{report:{info:JSON.stringify({type:f,txParams:{from:E,to:A,value:v,gasLimit:O,gasPrice:b,nonce:L,chainId:B},extraParams:(0,U.omitBy)({approvedAmount:Z,coinSymbol:z,tokenAddress:M,approvedAddress:nt,value:Rt,toAddress:pt},U.isNil)})}},exception:{values:[{type:"API_ERROR_evm_rpc_send_tx",value:r==null?void 0:r.message}]},level:"info"})}else t(p),u({id:e.id,txHash:m.result})}).catch(async r=>{await ve({txId:e.id,tx:{status:P.DROPPED,finishTime:+new Date,errorMessage:r==null?void 0:r.message},checkPoolEmpty:!0}),l(r)})})})}var Pt=()=>{let t=(0,ot.useDispatch)(),s=Et();return async(o,e=s)=>{await t(Jt({walletId:e,txParams:o.txParams,isRpcMode:!0}));let{id:n}=o,i=await xe(n);if(i&&(i.status===P.SUCCEED||i.status===P.DROPPED||i.status===P.DROPPED))throw Error(ct)}};function Ie(){let t=ht(),s=wt(),o=Pt();return S(async(e,n)=>{if(!await de({walletId:n}))return U.noop;let a=t(e);return await o(a,n),s(a,{walletId:n,signedCallback:c=>Re({...a,...c})})})}function sn(){let t=ht(),s=wt(),o=Pt();return S(async e=>{let{type:n,txParams:i,extraParams:a}=e,c=I(i.gasPrice),u=t({type:n,txParams:{...i,gasPrice:Q(j(c,1.2),0)},extraParams:a}),{id:l,txPool:r}=e;return e.id=u.id,u.id=l,e.txPool=[],await o(u),s(u,{signedCallback:m=>Nt({txId:l,tx:{...u,status:P.PENDING,isSpeeding:!0,txPool:[e,...r],...m}})})})}function rn(){let t=ut(!0),s=ht(),o=wt(),e=Pt();return S(async n=>{let{txParams:i,extraParams:a}=n,{from:c,gasPrice:u,gasLimit:l,nonce:r,chainId:m}=i,p=t.find(({address:E})=>!E),f=s({type:_.TRANS_OUT,txParams:{to:c,value:"0x0",gasPrice:Q(j(I(u),1.2),0),gasLimit:l,nonce:r,chainId:m},extraParams:a}),{id:d,txPool:h}=n;return n.id=f.id,f.id=d,n.txPool=[],await e(f),o(f,{signedCallback:E=>Nt({txId:d,tx:{...f,status:P.PENDING,isCanceling:!0,txPool:[n,...h],extraParams:{toAddress:c,tokenAddress:"",coinSymbol:p==null?void 0:p.symbol,value:"0"},...E}})})})}T();g();gt();st();var Se=w(W()),De=w(F()),Xe=()=>{let t=(0,De.useDispatch)();return(0,Se.useCallback)(async({id:s})=>{await x().finishRequest({id:s,type:Ut.REJECTED}),await tt(t)},[t])},be=Xe;T();g();var Le=async(t,s)=>{let o;try{o=await s.eth.getCode(t)}catch{o=null}return{isContractAddress:o&&o!=="0x"&&o!=="0x0"}};T();g();var C=w(W()),Ct=w(F()),Ge=w(xt());T();g();var D=w(W());function ke(t){let{wait:s=7e3}=t!=null?t:{},o=H(),[e,n]=(0,D.useState)(!1),[i,a]=(0,D.useState)(null),c=S(async()=>{let m;try{n(!0),m=await(await o()).eth.getGasPrice()}finally{n(!1)}return a(m),m}),u=(0,D.useRef)(null),l=(0,D.useRef)(!1),r=()=>{l.current=!0,clearTimeout(u.current)};return re(()=>{let m=()=>{c().catch(()=>{}).finally(()=>{l.current||(u.current=setTimeout(m,s))})};m()}),se(r),{loadingChainGasPrice:e,chainGasPrice:i,requestChainGasPrice:c}}function Fe(t){let s=H(),o=K(),{to:e,data:n,value:i}=t||{},[a,c]=(0,D.useState)(!1),[u,l]=(0,D.useState)(null),{run:r}=ae(async({to:m,data:p,value:f}={})=>{let d;if(!m||!fe(m,{allowNonPrefixed:!1}))d=21e3;else{p?_e(p)?p=Ht(p):p=ge(p):p=void 0;try{c(!0),d=await(await s()).eth.estimateGas({from:o,to:m,data:p,value:f})}catch{d=0}finally{c(!1)}}return l(d),d},{wait:500});return(0,D.useEffect)(()=>{r(t)},[e,n,i]),{loadingChainGasLimit:a,chainGasLimit:u,requestChainGasLimit:r}}ft();function He(t){let{id:s,gasPrice:o}=t,{chainGasPrice:e}=ke(),[n,i]=(0,C.useState)(null),[a,c]=(0,C.useState)(null),[u,l]=(0,C.useState)(!0),r=(0,C.useMemo)(()=>(0,Ge.isNull)(a)?o&&J(o,0)?rt(I(o)):rt(e||0):a,[e,o,a]);return(0,C.useEffect)(()=>{let m=rt(o&&J(o,0)?I(o):e);i(m),l(!1)},[e,o,s]),[{suggested:n,custom:r,pending:u},c]}function Ue(t){let{id:s,gas:o,to:e,data:n,value:i}=t,{chainGasLimit:a}=Fe({to:e,data:n,value:i||"0x0"}),[c,u]=(0,C.useState)(null),[l,r]=(0,C.useState)(null),[m,p]=(0,C.useState)(!0);return(0,C.useEffect)(()=>{let f=o&&J(o,0)?I(o):a;u(f),r(f),p(!1)},[a,s,o]),[{suggested:c,custom:l,pending:m},r]}function Me({from:t,gasPrice:s,gasLimit:o,value:e,symbol:n}){let{symbol:i,usdToThisRate:a}=(0,Ct.useSelector)(Vt),[c,u]=(0,C.useState)(!0),l=ut(!1,!1,!1),{chainId:r}=(0,Ct.useSelector)(V),m=l.find(O=>O.account===t&&O.chainId===r);(0,C.useEffect)(()=>{!s.pending&&!o.pending&&u(!1)},[s.pending,o.pending]);let p=(0,C.useMemo)(()=>{let O=j(`${s.custom||s.suggested||0}`,`${o.custom||o.suggested||0}`),b=kt(O),L=bt(b),B=dt(L,{symbol:n}),Z=pe({amount:L,rate:a,symbol:i},{useApproximate:!0}),z=at(I(e||0)),M=it(Q(Dt(L,z),(m==null?void 0:m.decimals)||6)),nt=J(M,m==null?void 0:m.balance);return{gasInCoin:B,gasInFiat:Z,totalInCoin:M,lackCoin:nt,gasInEthDec:b,gasInEthStr:L}},[s.custom,o.custom,e,m==null?void 0:m.balance]),{gasInCoin:f,gasInFiat:d,totalInCoin:h,lackCoin:E,gasInEthDec:A,gasInEthStr:v}=p;return{gasDisplay:`${f} ${d}`,totalDisplay:dt(h,{symbol:n}),lackCoin:E,loading:c,gasInCoin:f,gasInEthDec:A,gasInEthStr:v}}T();g();function We(t,{customPermissionAmount:s,decimals:o}){let e=X(t);if(e){if(e.name!==y.TOKEN_METHOD_APPROVE)throw new Error(`Invalid data; should be 'approve' method, but instead is '${e.name}'`)}else throw new Error("Invalid data");let n=mt(e);n.startsWith("0x")&&(n=n.substring(2));let[i,a]=t.split(n);if(!i||!a)throw new Error("Invalid data");if(a.length!==64)throw new Error("Invalid token value; should be exactly 64 hex digits long (u256)");let c=G(te(s,o));if(c.length>64)throw new Error("Custom value is larger than u256");return c=c.padStart(a.length,"0"),`${i}${n}${c}`}function to({data:t,to:s}){let o=H(),[e,n]=(0,N.useState)(""),[i,a]=(0,N.useState)(!1);return(0,N.useEffect)(()=>{(async()=>{if(t&&!s){n(y.DEPLOY_CONTRACT);return}try{let r=X(t),m=r==null?void 0:r.name,p=[y.TOKEN_METHOD_APPROVE,y.TOKEN_METHOD_TRANSFER,y.TOKEN_METHOD_TRANSFER_FROM].find(f=>f.toLowerCase()===m.toLowerCase());if(p){n(p);return}}catch{}a(!0);let u=await o(),{isContractAddress:l}=await Le(s,u);n(l?y.CONTRACT_INTERACTION:y.SENT_ETHER),a(!1)})()},[t,s,o]),[e,i]}function eo({data:t,type:s}){let o,e,n,i;try{let a=X(t),c=ee(a);o=mt(a),i=c,e=s===y.TOKEN_METHOD_APPROVE,n=e&&Number(i)===0}catch{}return{address:o,isApprove:e,isRevoke:n,amount:i}}function oo(t){let s=ue(),[o,e]=(0,N.useState)({}),[n,i]=(0,N.useState)(!1),a=async()=>{try{i(!0);let{symbol:c,decimals:u}=await s(t);e({symbol:c,decimals:u}),i(!1)}catch{i(!1)}};return(0,N.useEffect)(()=>{t&&a()},[t]),[o,n]}function no(t){let s=q(),o=10**13,[e,n]=(0,N.useState)(-1),{isApprove:i,formattedAmount:a,decimals:c,symbol:u}=t;(0,N.useEffect)(()=>{i&&n(a)},[i,a]);let l=(0,N.useMemo)(()=>e>=o?s("wallet_dapp_connection_subtitle_approval_amount_unlimitied"):`${it(Ft(e,c))}${u||""}`,[e,c,u,s,o]);return[{...t,customApproveAmount:e,approveAmountDisplay:l,INFINITY:o},n]}function so({origin:t,isApprove:s,isRevoke:o,symbol:e,walletId:n}){let i=q(),a=ie(n),c=(0,lt.useSelector)(qt),u=n?a:c,r=(0,lt.useSelector)(zt)[t]||{},[m,p]=(0,N.useState)({});return(0,N.useEffect)(()=>{let f=null,d=null,h=null;s?(f=null,d=e,h=o?i("wallet_approval_subtitle_revoke_approval_desc",{tokenSymbol:e}):i("wallet_dapp_conncetion_alert_approve_tip",{name:r.name,tokenSymbol:e})):(f=r.icon,h=r.host,d=r.name),p({icon:f,host:h,name:d})},[o,e]),{...m,originInfo:r,wallet:`${u.keyringName} - ${u.walletName}`}}function ro(t){let{nonce:s,suggestedNonce:o}=we(t),[e,n]=(0,N.useState)(0),[i,a]=(0,N.useState)(!0);return(0,N.useEffect)(()=>{n(o),a(!1)},[o]),[{suggested:s,custom:e,pending:i},n]}function ao(){return(0,lt.useSelector)(V)}var io=({tx:t,gasLimit:s,gasPrice:o,nonce:e,txData:n,tokenInfo:i,chain:a,approvedAmount:c,formattedAmount:u,txType:l})=>{let{from:r,to:m,value:p,data:f}=t,d={from:r,to:m,value:p,gasLimit:s,gasPrice:o,nonce:e,data:f},E={[y.DEPLOY_CONTRACT]:_.CONTRACT_DEPLOY,[y.CONTRACT_INTERACTION]:_.CONTRACT_CALL,[y.TOKEN_METHOD_APPROVE]:_.AUTHORIZATION,[y.SENT_ETHER]:_.TRANS_OUT,[y.TOKEN_METHOD_TRANSFER]:_.TRANS_OUT,[y.TOKEN_METHOD_TRANSFER_FROM]:_.TRANS_OUT}[l]||_.CONTRACT_CALL;n.isRevoke&&(E=_.CANCEL_AUTHORIZATION);let A={};return l===y.TOKEN_METHOD_APPROVE&&(A.approvedAmount=c,A.coinSymbol=i.symbol,A.tokenAddress=m,A.approvedAddress=n.address),l===y.SENT_ETHER&&(A.value=at(I(p)),A.toAddress=m,A.coinSymbol=a.symbol),(l===y.TOKEN_METHOD_TRANSFER||l===y.TOKEN_METHOD_TRANSFER_FROM)&&(A.value=u,A.tokenAddress=m,A.toAddress=n.address,A.coinSymbol=i.symbol),{type:E,txParams:d,extraParams:A}};function co(t,s){let o=(0,qe.useHistory)(),e=Ne(),n=be(),i=Ie(),[a,c]=(0,N.useState)(!1);return[{sign:async r=>{c(!0),i(t,r).then(async({txHash:m})=>{e({id:s,result:m}),o.push(oe)}).catch(m=>{m.message!==ct&&k.error({title:m==null?void 0:m.message}),e({id:s,error:(m==null?void 0:m.message)||"Transaction failed"}),c(!1)}).finally(()=>{o.go(0)})},cancel:async()=>{await n({id:s}),o.go(0)}},a]}function Ts(t){let s=q(),[o]=to(t),e=eo({data:t.data,type:o}),[n,i]=oo(t==null?void 0:t.to),a=so({walletId:t==null?void 0:t.walletId,origin:t.origin,...e,...n}),c=(0,N.useMemo)(()=>Xt((e==null?void 0:e.amount)||0,n==null?void 0:n.decimals),[e==null?void 0:e.amount,n==null?void 0:n.decimals]),[u,l]=no({...e,...n,formattedAmount:c}),[r,m]=(0,N.useState)(t.data);(0,N.useEffect)(()=>{if(o===y.TOKEN_METHOD_APPROVE&&u.customApproveAmount>=0&&u.customApproveAmount<=u.INFINITY)try{let pt=We(t.data,{customPermissionAmount:u.customApproveAmount,decimals:n==null?void 0:n.decimals});m(pt)}catch{}},[u.customApproveAmount,u.INFINITY,t.data,n==null?void 0:n.decimals,e,o]);let p=ao(),f={...p,name:p.name||p.chainName},[d,h]=ro(t.from),[E,A]=He(t),[v,O]=Ue(t),b=Me({from:t.from,gasPrice:E,gasLimit:v,value:t.value,symbol:f.symbol||f.ticker}),L=io({tx:{...t,data:r},gasLimit:v.custom||v.suggested,gasPrice:Lt(E.custom||E.suggested),nonce:d.custom||d.suggested,txData:e,tokenInfo:n,chain:f,approvedAmount:u.customApproveAmount,formattedAmount:c,txType:o}),[{sign:B,cancel:Z},z]=co(L,t.id),M=(0,N.useMemo)(()=>{switch(o){case y.DEPLOY_CONTRACT:return s("developer_mode_history_title_contract_eployment");case y.TOKEN_METHOD_APPROVE:return e!=null&&e.isRevoke?s("wallet_extension_popup_btn_revoke_approval"):s("wallet_extension_popup_btn_approve");default:return s("wallet_extension_popup_title_contract_interaction")}},[o,e==null?void 0:e.isRevoke,s]);return[{type:o,title:M,auth:{...u,...n,formattedAmount:c},meta:a,chain:f,nonce:d,fee:b,gas:{price:E,limit:v},loading:{sign:z,token:i},data:r},{sign:B,cancel:Z,setNonce:h,setGasLimit:O,setGasPrice:A,setAuthAmount:l}]}T();g();var Ye=w(F());T();g();gt();st();function Ke(t,s,o){return async e=>{await x().resolvePendingApproval(t,s);let{pendingApprovals:n}=await Tt(e);Object.values(n).length===0&&!o&&e(At())}}function Ve(t){return async s=>{await x().rejectPendingApproval(t);let{pendingApprovals:o}=await Tt(s);Object.values(o).length===0&&s(At())}}St();gt();function Ss(t){let s=(0,Ye.useDispatch)(),e=(a=>{let{id:c,origin:u,requestData:l,type:r,requestData:{chainId:m}}=a;return{id:c,origin:u,...l,requestData:l,chainIdToDisplay:parseInt(m,16),switchType:r,explorers:l.blockExplorerUrl}})(t);return[e,{cancel:async()=>{await s(Ve(e.id)),await tt(s)},approve:async()=>{let{rpcUrl:a,ticker:c,blockExplorerUrl:u,chainId:l,faucetUrl:r,icon:m,chainName:p}=e,{uniqueId:f}=await s(me({chainId:l,explorerUrl:u,faucetUrl:r,icon:m,name:p,rpcUrl:a,symbol:c}));await s(_t("isRpcMode",!0)),await s(_t("currentNetworkUniqueId",f)),await s(Qt(It,a,c,p,l,{},!0,f)),await s(Ke(e.id,e.requestData)),await tt(s)}}]}T();g();function Fs(t){return Bt(t==null?void 0:t.image)?t.image=t.image[0]:Zt(t==null?void 0:t.image)&&(t.image=null),t}export{we as a,Ce as b,ve as c,xe as d,Ie as e,sn as f,rn as g,be as h,ke as i,Fe as j,to as k,eo as l,oo as m,ao as n,io as o,Ts as p,Ss as q,fo as r,Fs as s};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-G37W3QVU.js.map