import{d as A,k as f}from"./chunk-R6GCLTW2.js";import{f as k,m as l,o as u}from"./chunk-6V2G2Z5W.js";l();u();var m=k(A());function y(e){return e.metamask.addressBookList||[]}function I(e){return e.metamask.recentlyAddresses||{}}var x=(0,m.createSelector)(f,(e,t)=>{let{selectedWallet:r,keyringIdentities:s}=e.metamask;return{selectedWallet:r,keyringIdentities:s,chainId:t}},(e,{selectedWallet:t,keyringIdentities:r,chainId:s})=>{var i;let p=(i=(e||[]).find(n=>+n.chainId==+s))==null?void 0:i.localType,d=[],c="";return r.forEach(n=>{n.walletIdentities.forEach(a=>{let o=a.account[p];a.walletId===t&&(c=o),o&&d.push(o)})}),{currentAddress:c,allAddress:d}});export{y as a,I as b,x as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-54GDJWA6.js.map
