import{h as D}from"./chunk-YLO74Q7W.js";import{a as U}from"./chunk-E73QHIZ6.js";import{g as A}from"./chunk-2HWABU7H.js";import{a as E,b as o,c as n}from"./chunk-DUHXKIBS.js";import{s as L}from"./chunk-VPBQLZCI.js";import{a as x,b as H}from"./chunk-MVLY6WUP.js";import{c as S,h as B}from"./chunk-ZEAKIEIQ.js";import{Vb as F,sb as T,zb as w}from"./chunk-CVJKAN5R.js";import{a as z}from"./chunk-V4YVDLI4.js";import{f as q,m as l,o as m}from"./chunk-6V2G2Z5W.js";l();m();var u=q(z());F();l();m();B();H();async function N(f){let{data:y={}}=await S(x.getGasReturnCheck,f);return y}var s={empty:1,unavailable:2,error:3,ok:4};function O({walletId:f,coinId:y,fromAddress:d,toAddress:C,txType:p,unavailable:W,disabled:G,fee:K}){let M=A(),I=f||M,{baseCoin:R}=U(y,!0),v=R.chainId,P=D(R.coinId),b=T(K,P),[t,h]=(0,u.useState)(null),[c,e]=(0,u.useState)(null),j=async()=>{if(G||!v||!d||!p){h(null);return}try{let i=await N({accountId:I,chainId:v,address:d,toAddress:C,txType:p});if(i){let{activitySymbol:a,activityStatus:g,errorCode:k}=i;a===E.gasReturn&&g===1&&k!==n.notStart&&h(i)}}catch{}};L(()=>{j()},[I,v,d,C,p,G],{wait:100}),(0,u.useEffect)(()=>{if(!t){e(null);return}let{gas:i,errorCode:a,availableTimes:g,errorMsg:k}=t;a===n.exceedingTheSubsidyLimit?e({key:o.exceedTodayGasLimit,error:!0}):a===n.exceededTheLimit?e({key:o.availableTimesLimit,args:{num:0},error:!0}):a===n.walletAssetNotEnough?e({key:o.walletAssetNotEnough,text:k,error:!0}):w(b,i)?e({key:o.exceedGasLimit,error:!0}):e({key:o.availableTimesLimit,args:{num:g},error:!1})},[t,b]);let r;return t?W?r=s.unavailable:c!=null&&c.error?r=s.error:r=s.ok:r=s.empty,{status:r,activityId:r===s.ok?t.activityId:void 0,activity:t,tip:c,clear:()=>{h(null),e(null)}}}var ae=O;export{s as a,ae as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-MEW6SUUR.js.map