import{C as x,a,b as d,d as g,e as f,g as l,h as m,k as e,l as b,m as c}from"./chunk-CVJKAN5R.js";import{l as process,m as t,o as r}from"./chunk-6V2G2Z5W.js";t();r();d();b();m();f();var p=new g,u=l[process.env.ASSETS_BUILD_TYPE],s={countryCode:"",setCountryCode:o=>{s.countryCode=o,p.set({countryCode:o})}};(async()=>{let{countryCode:o}=await p.get("countryCode")||"";s.countryCode=o})();var S={environment:u,release:process.env.APP_VERSION,tracesSampleRate:.2,defaultIntegrations:!1,beforeSend:o=>(!o.exception||!o.exception.values||(o.tags||(o.tags={}),Array.isArray(o.exception.values)&&(o.exception.values[0].type=`${o.exception.values[0].type} ${process.env.APP_VERSION}`),o.tags.os=navigator.vendor||"Firefox",o.tags.browserName=navigator.language,o.tags.language=navigator.language,o.tags.device=navigator.product,o.tags.browser=navigator.userAgent,o.tags.environment=u,o.tags.countryCode=s.countryCode),o),hideBreadcrumb:!0,noDefaultReport:!0,sendClientReports:!1},i=`https://b25a7d61802a41b6bf564e64acff1b50@${e.getUrl()}/apmfe/120`;async function y(){return await e.setUrlFromLocalAsync(),i=`https://b25a7d61802a41b6bf564e64acff1b50@${e.getUrl()}/apmfe/120`,a.init({dsn:i,...S}),a}t();r();t();r();x();var E=c()?()=>{}:()=>document.body,v=c()?void 0:window.getComputedStyle;t();r();t();r();export{S as a,i as b,y as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-YTINGM2Q.js.map