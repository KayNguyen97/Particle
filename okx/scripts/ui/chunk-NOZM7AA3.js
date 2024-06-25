import{c as i}from"./chunk-4KY5XQ5E.js";import{d as s,f as n}from"./chunk-S4N75E3H.js";import{G as o}from"./chunk-GXQ645QR.js";import{m as a,o as d}from"./chunk-6V2G2Z5W.js";a();d();n();async function y(r){try{return await s().addAddressBook(r)}catch(t){throw(t==null?void 0:t.message)!==i&&o.error({title:t==null?void 0:t.message}),t}}async function p(r,t){try{return await s().updateAddressBook(r,t)}catch(e){return o.error({title:e==null?void 0:e.message}),e}}async function A(r){try{return await s().removeAddressBook(r)}catch(t){throw o.error({title:t==null?void 0:t.message}),t}}async function g(r,t){try{return await s().addRecentlyAddress(r,t)}catch(e){return o.error({title:e==null?void 0:e.message}),e}}export{y as a,p as b,A as c,g as d};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-NOZM7AA3.js.map
