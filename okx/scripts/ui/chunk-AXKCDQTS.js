import{b as E}from"./chunk-JWFSXEUV.js";import{d as p}from"./chunk-PD2BTUUF.js";import{$a as u,_a as f,gb as m,rb as y}from"./chunk-CVJKAN5R.js";import{f as C,m as r,o as e}from"./chunk-6V2G2Z5W.js";r();e();y();r();e();var i=C(E());function v(t){return/^0x[0-9a-fA-F]{40}$/.test(t)}function l(t){try{let o=`0x${(0,i.fromBech32)(t)[1].toString("hex")}`;return v(o)?o:t}catch{return t}}r();e();function A(t){return/^0x[0-9a-fA-F]{40}$/.test(t)}function a(t){let o=t.replace("ronin:","0x");return A(o)?o:t}var I=t=>!!p(t),B=(t,o,n={})=>{var c;let x=typeof t=="string"&&typeof o=="string",T=n.baseCoinId||n.localType;if(!x||!T)return!1;let h=n.localType||((c=m({coinId:n.baseCoinId}))==null?void 0:c.localType);return I(h)?t.toLowerCase()===o.toLowerCase():t===o},F=(t,o)=>o===f?a(t):o===u?l(t):t;export{B as a,F as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-AXKCDQTS.js.map
