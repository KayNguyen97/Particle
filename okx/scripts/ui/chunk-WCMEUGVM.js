import{d as a}from"./chunk-FEET7RP6.js";import{m as u}from"./chunk-DMJQUOJT.js";import{b as R}from"./chunk-6ZPGW3YM.js";import{a as N}from"./chunk-S4N75E3H.js";import{D as B}from"./chunk-CVJKAN5R.js";import{a as h}from"./chunk-V4YVDLI4.js";import{f as r,m as s,o as m}from"./chunk-6V2G2Z5W.js";s();m();var e=r(h()),f=r(R()),i=r(B()),p=r(N());var d=20*1e3,y=()=>{let b=(0,f.useDispatch)(),c=a(),o=(0,e.useRef)(null);(0,e.useEffect)(()=>{let l=()=>{clearInterval(o.current),o.current=null},n=async()=>{try{let t=await c();if((0,i.isEmpty)(t)){l();return}let k=await(0,p.default)(t.eth.getBlockNumber)();b(u(k))}catch(t){console.log(`fetch block failed 
${t}`)}};return n(),o.current=setInterval(()=>{n()},d),()=>{l()}},[c])},w=y;export{w as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-WCMEUGVM.js.map
