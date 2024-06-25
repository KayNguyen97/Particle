import{c as a}from"./chunk-E2KMZQ6K.js";import{l as u}from"./chunk-VPBQLZCI.js";import{a as i,b as m}from"./chunk-MVLY6WUP.js";import{f as c,h as f}from"./chunk-ZEAKIEIQ.js";import{m as o,o as s}from"./chunk-6V2G2Z5W.js";o();s();f();m();var p="usd",P=5e3,l=async t=>{let r={coinIds:[t]},e={headers:{currency:p}},{data:n}=await c(i.postMarketUrl,r,e),{currencyAmount:d}=n[0]||{};return d},g=t=>{let r=a(t,{withPrice:!0}),e=r==null?void 0:r.usdPrice,{data:n}=u(()=>l(t),{pollingInterval:P,ready:t!==void 0&&(r==null?void 0:r.coinId)!==void 0&&!e});return{...r,coinPrice:e||n||"0"}},w=g;export{w as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-ATUBFYS2.js.map
