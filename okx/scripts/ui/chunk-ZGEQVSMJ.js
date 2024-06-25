import{k as d}from"./chunk-HU3KBV5G.js";import{Bb as c,Ub as i,Vb as q,sb as s,xb as m,yb as o,zb as e}from"./chunk-CVJKAN5R.js";import{m as l,o as w}from"./chunk-6V2G2Z5W.js";l();w();q();var I=()=>{let C=d(),n=C("extension_wallet_transaction_text_minute"),x=C("extension_wallet_transaction_text_second");return(t,r,p)=>{if(p)return`-- ${n}`;let u=i(t.minCost,n,x),_=i(t.normalCost,n,x),$=i(t.maxCost,n,x),a=`> 3 ${n}`,S=`> 10 ${n}`,T=`> 60 ${n}`;return c(r,t.min)?$:e(r,t.min)&&m(r,t.normal)?`< ${$}`:c(r,t.normal)?_:e(r,t.normal)&&m(r,t.max)?`< ${_}`:c(r,t.max)?u:e(r,t.max)?`< ${u}`:m(r,t.min)?o(r,s(t.min,.85))?T:o(r,s(t.min,.9))?S:(o(r,s(t.min,.95)),a):`-- ${n}`}};export{I as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-ZGEQVSMJ.js.map
