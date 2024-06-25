import{h as s,m as a,o as u}from"./chunk-6V2G2Z5W.js";a();u();var i={uninitialized:0,initialized:1,waiting:2,paused:3,working:4,canceled:5,unknown:6},e=class{constructor(t){s(this,"status",i.uninitialized);s(this,"nextInfo",null);s(this,"cb",null);s(this,"args",[]);s(this,"next",(...t)=>{[i.waiting,i.canceled,i.paused].includes(this.status)||!this.cb||(t.length>0&&(this.args=t),this.nextInfo=this.generator(this.execute,...this.args),this.status=i.waiting,this.nextInfo.execute())});s(this,"execute",()=>{var t;this.status=i.working,(t=this.cb)==null||t.call(this,this.next)});s(this,"cancel",()=>{var t,n;this.status=i.canceled,(n=(t=this.nextInfo).cancel)==null||n.call(t),this.cb=void 0});s(this,"pause",()=>{var t,n;this.status=i.paused,(n=(t=this.nextInfo).pause)==null||n.call(t)});s(this,"start",(t,...n)=>{this.cb=t,n.length>0&&(this.args=n),this.next()});s(this,"continue",()=>{this.status=i.initialized,this.next()});this.generator=t,this.status=i.initialized,this.nextInfo=null,this.cb=null}};export{e as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-ZLO3STNF.js.map
