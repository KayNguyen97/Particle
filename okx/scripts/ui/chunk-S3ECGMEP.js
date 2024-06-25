import{b as m}from"./chunk-PX7HII6H.js";import{b as l,c as f}from"./chunk-ERLETJMZ.js";import{d as n,f as w}from"./chunk-S4N75E3H.js";import{db as k,rb as d}from"./chunk-CVJKAN5R.js";import{m as c,o as a}from"./chunk-6V2G2Z5W.js";c();a();d();w();var p=l({name:"networksSlice",initialState:{networks:[]},reducers:{setNetworks:(e,t)=>{e.networks=t.payload}}}),{actions:u,reducer:N}=p,y=e=>{var t,r,s,o;return(o=(s=(t=e.metamask)==null?void 0:t.chainList)!=null?s:(r=e.networksSlice)==null?void 0:r.networks)!=null?o:[]},L=()=>async(e,t)=>{m.networks.liveQuery().subscribe((r,s)=>{var o;if(s)n().fallbackLegacyChainList();else{let i=t();(o=i==null?void 0:i.metamask)!=null&&o.chainList||(k(r),e(u.setNetworks(r)))}})},v=N;export{y as a,L as b,v as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-S3ECGMEP.js.map
