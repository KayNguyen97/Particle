import{C as f,q as c}from"./chunk-CVJKAN5R.js";import{m as o,o as l}from"./chunk-6V2G2Z5W.js";o();l();f();var s=(e,i=2,r="")=>{if(!e)return`${r}${c.ceilShort("0.00",2)}`;let t=c.ceilShort(e,i);return`${r}${t}`},P=e=>{var i;if(e){let r="",t=new c.BigNumber(`${(i=e.price)!=null?i:0}`);if(t.lt(1e-4))r=`< ${c.ceilShort("0.0001",4)}`;else{let u=t.toFixed(4),n=new c.BigNumber(`${u}`);n.eq(n.toFixed(0,1))?r=s(n.toString()):r=s(e.price,Math.min(n.decimalPlaces(),4))}return{currency:e.currency,currencyUrl:e.currencyUrl,price:e.price,priceDisplay:r,usdPrice:e.usdPrice}}return null};export{s as a,P as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-SI3RW2CS.js.map
