import{a as S}from"./chunk-5QB4AVYL.js";import{h as y}from"./chunk-2HWABU7H.js";import{e as h}from"./chunk-5W7SRP5N.js";import{d}from"./chunk-MTMZQEHP.js";import{sa as l}from"./chunk-O4EDZSHP.js";import{b as T}from"./chunk-6ZPGW3YM.js";import{a as w}from"./chunk-TPSXCUGD.js";import{Ca as c,Pa as Z,Q as u}from"./chunk-CVJKAN5R.js";import{a as N}from"./chunk-V4YVDLI4.js";import{f as a,m as f,o as g}from"./chunk-6V2G2Z5W.js";f();g();var C=a(N()),b=a(T()),m=a(w());Z();var E=()=>{let{accountMap:t}=y();return t[u]},D=()=>{let t=(0,m.useHistory)(),n=E(),i=async o=>{let s={fromAddr:n},e={address:n,coinId:o},{info:r}=await d(e,s);return r||{}};return async({coinId:o,baseCoinId:s})=>{if([Number(s),Number(o)].includes(c)){let{accountId:e,nonce:r}=await i(o);if(r===0)return t.push(`${l}?coinId=${o}&nonce=${r}&accountId=${e}`),!1}return!0}},G=({nonce:t=0,address:n,accountId:i})=>{let o=(0,m.useHistory)(),s=(0,b.useDispatch)();return(0,C.useCallback)(async()=>{let r=Number(t),x={nonce:t,accountId:i,type:"changePubkey",from:n},{txHash:P,...p}=await h(x,n,u),{type:A}=p,I={txHash:P,signedTx:JSON.stringify({fastProcessing:null,tx:{nonce:r,...p},signature:null}),toAdr:"",txSource:2,coinAmount:0,fromAdr:n,serviceCharge:"0",coinId:c,extJson:JSON.stringify({type:A||"ChangePubKey",serviceChargeCoinId:c})};try{await s(S(I)),o.go(-1)}catch(K){console.log(K)}},[])};export{D as a,G as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-NHCC23IQ.js.map