import{a as A}from"./chunk-TYILG3ER.js";import{a as h}from"./chunk-YM6UXGIC.js";import{g as C}from"./chunk-2HWABU7H.js";import{b as B}from"./chunk-6ZPGW3YM.js";import{Ab as p,C as S,Vb as U,q as d,ub as a}from"./chunk-CVJKAN5R.js";import{a as M}from"./chunk-V4YVDLI4.js";import{f as i,m as c,o as f}from"./chunk-6V2G2Z5W.js";c();f();var y=i(B());S();var I=i(M());U();var q=o=>o.map(e=>({...e,coinAmount:null})),D=()=>{let o=C(),{currentNetworkUniqueId:e}=h(),n=A(),{createdMap:N,needSyncMap:g={}}=(0,y.useSelector)(m=>m.metamask),b=Boolean(N[o]),W=Boolean(g[o]);return(!b||W)&&(n=q(n)),(0,I.useMemo)(()=>{if(e==="")return n;let m=n.filter(r=>((r==null?void 0:r.childrenCoin)||[]).find(t=>t.chainId===Number(e))||r.chainId===Number(e)),s=[];return m.forEach(r=>{if(r!=null&&r.aggregation){let t=((r==null?void 0:r.childrenCoin)||[]).filter(u=>u.chainId===Number(e)),k=t.reduce((u,l)=>a(u,l.coinAmount),"0"),w=t.reduce((u,l)=>a(u,l.currencyAmount),"0");s.push({...r,childrenCoin:t,coinAmount:k,currencyAmount:w})}else s.push(r)}),s.map(r=>({...r,coinAmount:(r==null?void 0:r.coinAmount)===null?"--":d.truncate(r==null?void 0:r.coinAmount,6,!1)})).sort((r,t)=>p(t.currencyAmount,r.currencyAmount)?1:-1)},[n,e])};export{D as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-S2GTSTCF.js.map