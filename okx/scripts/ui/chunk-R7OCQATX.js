import{c as W}from"./chunk-ZXEHJOAD.js";import{i as C,l as h}from"./chunk-2HWABU7H.js";import{h as g}from"./chunk-62JDSRZZ.js";import{d}from"./chunk-VPBQLZCI.js";import{u as y}from"./chunk-X2LENRE7.js";import{d as B}from"./chunk-RMQJRDTF.js";import{D as j,H as o,Pa as x}from"./chunk-CVJKAN5R.js";import{f as S,m as I,o as T}from"./chunk-6V2G2Z5W.js";I();T();var f=S(j());x();var F=(r,a)=>{var p;let b=g(),u=a!=null?a:b,l=W(u),i=d(()=>l.find(n=>n.coinId===(r==null?void 0:r.coinId)),[l,r==null?void 0:r.coinId]),m=(p=i==null?void 0:i.childrenCoin)!=null?p:[],s=C(o,u),c=h(o,u);return d(()=>{if(!r||!y(r)||!Array.isArray(m)||!Array.isArray(s)||!s.length)return[];let n=m.filter(e=>e.coinId===+r.coinId).map(e=>({...e})),A=[],t=(0,f.cloneDeep)(n[0]||r),k=n.map(e=>c[e.addressType]);return s.forEach(({address:e,addressType:O})=>{k.includes(e)||(t.address=e,t.addressType=B[o][O],t.coinAmount=0,t.coinAmountInt=0,t.currencyAmount=0,A.push((0,f.cloneDeep)(t)))}),n.concat(A).filter(e=>Boolean(c[e.addressType]))},[r,m,s,c])};export{F as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-R7OCQATX.js.map
