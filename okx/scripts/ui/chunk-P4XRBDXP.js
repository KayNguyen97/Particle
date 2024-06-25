import{b as c}from"./chunk-PX7HII6H.js";import{b as d,c as u}from"./chunk-ERLETJMZ.js";import{m as l,o as n}from"./chunk-6V2G2Z5W.js";l();n();var s=d({name:"wallet",initialState:{avatarMap:{},currentWalletId:""},reducers:{updateAvatarMap(a,t){a.avatarMap=t.payload},updateCurrentWalletId(a,t){a.currentWalletId=t.payload}}}),{actions:i,reducer:v}=s,{updateAvatarMap:M,updateCurrentWalletId:x}=i;var y=a=>a.wallet.avatarMap,f=()=>async a=>{c.wallet_avatar.liveQuery().subscribe(async(t,p)=>{if(!p){let o=t.reduce((e,r)=>(e[r.walletId]=r.walletAvatar,e),{});a(M(o))}})},m=v;export{y as a,f as b,m as c};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-P4XRBDXP.js.map
