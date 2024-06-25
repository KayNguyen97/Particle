import{a as o}from"./chunk-5KSDRGLW.js";import{gb as i,rb as f}from"./chunk-CVJKAN5R.js";import{m as n,o as s}from"./chunk-6V2G2Z5W.js";n();s();f();n();s();var c=(t,a)=>`Failed to get tx hash, localType is ${t}, signedTx is ${a}`;async function H(t,a){try{let e=i({localType:t}),r=e==null?void 0:e.coinType,{calcTxHash:g}=await o();return await g(r,{data:a})}catch{throw new Error(c(t,a))}}export{H as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-PGPPXRV7.js.map
