import{a as T}from"./chunk-XAMN4IIH.js";import{f as c}from"./chunk-DUHXKIBS.js";import{b as u}from"./chunk-QNEJI55N.js";import{a as w,b as M,c as I}from"./chunk-5W7SRP5N.js";import{L as C}from"./chunk-R6GCLTW2.js";import{s as x}from"./chunk-TPEASXIF.js";import{g as s,o as L}from"./chunk-ZKDHZDUE.js";import{g as p,h as k,i as a,m as E}from"./chunk-4UESFVD2.js";import{a as R}from"./chunk-D7KW4FFX.js";import{la as B,v as b}from"./chunk-RAXGEVRQ.js";import{c as l,d as i,f as N}from"./chunk-S4N75E3H.js";import{f as K,m as d,o as f}from"./chunk-6V2G2Z5W.js";d();f();var t=K(R());N();E();L();B();var P=()=>{};async function O(e){return i().getCustomCoinInfo(e)}async function Q(e){await i().addCustomCoins(e)}function V(e){return l().addCrypto(e,P)}function X(e){return l().removeServerCoins(e,P)}function Y(){return async e=>{e(p()),t.default.debug("background.setCurrentCurrency");let r;try{r={}}catch(o){t.default.error(o.stack),e(a(o.message));return}finally{e(k())}e({type:b,value:{currentCurrency:r.currentCurrency,conversionRate:r.conversionRate,conversionDate:r.conversionDate}})}}function Z(e){return t.default.debug("action - signMsg"),async r=>{t.default.debug("actions calling background.signMessage");let o;try{return o=await r(w(e)),r(s(o)),r(c(e.metamaskId)),r(u()),e}catch(n){throw t.default.error(n),r(a(n.message)),n}}}function $(e){return t.default.debug("action - signPersonalMsg"),async r=>{t.default.debug("actions calling background.signPersonalMessage");let o;try{return o=await r(M(e)),r(s(o)),r(c(e.metamaskId)),r(u()),e}catch(n){throw t.default.error(n),r(a(n.message)),n}}}function h(e){return t.default.debug("action - decryptMsgInline"),async r=>{t.default.debug("actions calling background.decryptMessageInline");let o;try{o=await i().decryptMessageInline(e)}catch(n){throw t.default.error(n),r(a(n.message)),n}return r(s(o)),o.unapprovedDecryptMsgs[e.metamaskId]}}function D(e){return t.default.debug("action - decryptMsg"),async r=>{t.default.debug("actions calling background.decryptMessage");let o;try{o=await i().decryptMessage(e)}catch(n){throw t.default.error(n),r(a(n.message)),n}return r(s(o)),r(c(e.metamaskId)),r(u()),e}}function ee(e){return t.default.debug("action - encryptionPublicKeyMsg"),async r=>{t.default.debug("actions calling background.encryptionPublicKey");let o;try{o=await i().encryptionPublicKey(e)}catch(n){throw t.default.error(n),r(a(n.message)),n}return r(s(o)),r(c(e.metamaskId)),r(u()),e}}function re(e,r){return t.default.debug("action - signTypedMsg"),async o=>{t.default.debug("actions calling background.signTypedMessage");try{let n=await o(I(e,r));return o(s(n)),o(c(e.metamaskId)),o(u()),e}catch(n){throw t.default.error(n),o(a(n.message)),n}}}function ne(e){return(r,o)=>{let n=o(),y=n.metamask.tokens,v=C(n),g=y.find(({address:m})=>e===m);return g?Promise.resolve({symbol:g.symbol,decimals:g.decimals}):(t.default.debug("loadingTokenParams"),T(v,e,y).then(({symbol:m,decimals:S})=>{r(x(e,m,Number(S)))}))}}export{O as a,Q as b,V as c,X as d,Y as e,Z as f,$ as g,h,D as i,ee as j,re as k,ne as l};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-D5VZXMFP.js.map