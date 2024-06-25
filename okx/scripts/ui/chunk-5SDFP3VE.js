import{b as g}from"./chunk-E73QHIZ6.js";import{c as p}from"./chunk-MTMZQEHP.js";import{a as F,b as L}from"./chunk-MVLY6WUP.js";import{f as m,h as K}from"./chunk-ZEAKIEIQ.js";import{m as n,o as e}from"./chunk-6V2G2Z5W.js";n();e();n();e();L();K();var C=o=>{let r=F.getZKTransferFee;return m(r,o)};function w(){let o=g();return async(r,f,a)=>{var d,u;let i=await p(f,a),{coinFeeList:l,...I}=((d=i==null?void 0:i.data)==null?void 0:d.info)||{},S=f.coinId,c=(l||[]).find(({coinId:t})=>S===t);if(c){let{coin:t}=await o(c.coinId,!1);if(t){let{chainId:h,address:y}=t,s=await C({chainId:h,address:a.toAddr,contractAddress:y,type:r});return{info:I,feeCoin:c,fee:((u=s==null?void 0:s.data)==null?void 0:u.fee)||"0"}}}return null}}var z=w;export{z as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-5SDFP3VE.js.map
