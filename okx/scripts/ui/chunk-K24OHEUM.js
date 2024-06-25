import{jc as w,nc as a}from"./chunk-CVJKAN5R.js";import{a as m}from"./chunk-IYYFWVWL.js";import{f as d,m as k,o as p}from"./chunk-6V2G2Z5W.js";k();p();var l=d(m());a();var c={},h=class{constructor(r){this.worker=null,this.processing={},this.url=r,this.setUpWorker()}onMessage(r){let{id:e,payload:s,error:t}=r.data,i=this.processing[e];delete this.processing[e];let{resolve:n,reject:u}=i;t?u(t):n(s)}onError(r){console.log(r)}setUpWorker(){this.worker||(this.worker=new Worker(this.url),this.worker.onmessage=this.onMessage.bind(this),this.worker.onerror=this.onError.bind(this))}exec(r,e){let s=(e==null?void 0:e.id)||w(),t=new Promise((i,n)=>{this.processing[s]={resolve:i,reject:n}});return this.worker.postMessage({id:s,method:r,args:e}),t}},M=()=>{let o=l.default.runtime.getURL("worker.js");if(c[o])return c[o];let r=new h(o);return c[o]=r,r};export{M as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-K24OHEUM.js.map
