import{a as lt}from"./chunk-FRDOFRM7.js";import{C as Re,ha as st,z as ct}from"./chunk-X2LENRE7.js";import{g as Ve}from"./chunk-GXQ645QR.js";import{a as b}from"./chunk-V4YVDLI4.js";import{c as G,f as y,m as u,o as a}from"./chunk-6V2G2Z5W.js";var vt=G((Gn,Ge)=>{u();a();Ge.exports=pt;function Pe(){return new DOMException("The request is not allowed","NotAllowedError")}async function mt(e){if(!navigator.clipboard)throw Pe();return navigator.clipboard.writeText(e)}async function dt(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let r=window.getSelection(),n=window.document.createRange();r.removeAllRanges(),n.selectNode(t),r.addRange(n);let o=!1;try{o=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(t)}if(!o)throw Pe()}async function pt(e){try{await mt(e)}catch(t){try{await dt(e)}catch(r){throw r||t||Pe()}}}});var or=G((Xo,nr)=>{u();a();var xt=ct(),Et=function(){return xt.Date.now()};nr.exports=Et});var ur=G((Jo,ir)=>{u();a();var St=/\s/;function Tt(e){for(var t=e.length;t--&&St.test(e.charAt(t)););return t}ir.exports=Tt});var fr=G((Qo,ar)=>{u();a();var Rt=ur(),Pt=/^\s+/;function Ot(e){return e&&e.slice(0,Rt(e)+1).replace(Pt,"")}ar.exports=Ot});var mr=G((ri,lr)=>{u();a();var At=fr(),cr=Re(),Ct=lt(),sr=0/0,Ft=/^[-+]0x[0-9a-f]+$/i,Dt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,Lt=parseInt;function jt(e){if(typeof e=="number")return e;if(Ct(e))return sr;if(cr(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=cr(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=At(e);var r=Dt.test(e);return r||Mt.test(e)?Lt(e.slice(2),r?2:8):Ft.test(e)?sr:+e}lr.exports=jt});var le=G((oi,pr)=>{u();a();var Wt=Re(),Ce=or(),dr=mr(),Ut="Expected a function",Ht=Math.max,It=Math.min;function Bt(e,t,r){var n,o,i,c,s,l,f=0,d=!1,v=!1,x=!0;if(typeof e!="function")throw new TypeError(Ut);t=dr(t)||0,Wt(r)&&(d=!!r.leading,v="maxWait"in r,i=v?Ht(dr(r.maxWait)||0,t):i,x="trailing"in r?!!r.trailing:x);function g(w){var D=n,j=o;return n=o=void 0,f=w,c=e.apply(j,D),c}function p(w){return f=w,s=setTimeout(U,t),d?g(w):c}function E(w){var D=w-l,j=w-f,re=t-D;return v?It(re,i-j):re}function W(w){var D=w-l,j=w-f;return l===void 0||D>=t||D<0||v&&j>=i}function U(){var w=Ce();if(W(w))return I(w);s=setTimeout(U,E(w))}function I(w){return s=void 0,x&&n?g(w):(n=o=void 0,c)}function z(){s!==void 0&&clearTimeout(s),f=0,n=l=o=s=void 0}function B(){return s===void 0?c:I(Ce())}function F(){var w=Ce(),D=W(w);if(n=arguments,o=this,l=w,D){if(s===void 0)return p(l);if(v)return clearTimeout(s),s=setTimeout(U,t),g(l)}return s===void 0&&(s=setTimeout(U,t)),c}return F.cancel=z,F.flush=B,F}pr.exports=Bt});var Fe=G((_i,gr)=>{u();a();var Vt=le(),Gt=Re(),Xt="Expected a function";function Yt(e,t,r){var n=!0,o=!0;if(typeof e!="function")throw new TypeError(Xt);return Gt(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Vt(e,t,{leading:n,maxWait:t,trailing:o})}gr.exports=Yt});u();a();var ne=y(b());u();a();var T=function(e){return typeof e=="function"};var Xe=function(e){return typeof e=="number"},Ye=function(e){return typeof e>"u"};u();a();var ht=!1,H=ht;function gt(e){H&&(T(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var t=(0,ne.useRef)(e);t.current=(0,ne.useMemo)(function(){return e},[e]);var r=(0,ne.useRef)();return r.current||(r.current=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return t.current.apply(this,n)}),r.current}var R=gt;u();a();var Ke=y(b());u();a();var $e=y(b()),Je=function(e){return function(t,r){var n=(0,$e.useRef)(!1);e(function(){return function(){n.current=!1}},[]),e(function(){if(!n.current)n.current=!0;else return t()},r)}};var M=Je(Ke.useEffect);u();a();var ke=y(b());u();a();function $(e,t){if(e===t)return!0;for(var r=0;r<e.length;r++)if(!Object.is(e[r],t[r]))return!1;return!0}function J(e,t){var r=(0,ke.useRef)({deps:t,obj:void 0,initialized:!1}).current;return(r.initialized===!1||!$(r.deps,t))&&(r.deps=t,r.obj=e(),r.initialized=!0),r.obj}u();a();var Ze=y(b());u();a();var Qe=y(b());function yt(e){var t=(0,Qe.useRef)(e);return t.current=e,t}var A=yt;var bt=function(e){H&&(T(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var t=A(e);(0,Ze.useEffect)(function(){return function(){t.current()}},[])},C=bt;u();a();var er=y(b());var _t=function(e){H&&(T(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".'))),(0,er.useEffect)(function(){e==null||e()},[])},Oe=_t;u();a();u();a();var S=function(){return S=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},S.apply(this,arguments)};function ce(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function K(e,t,r,n){function o(i){return i instanceof r?i:new r(function(c){c(i)})}return new(r||(r=Promise))(function(i,c){function s(d){try{f(n.next(d))}catch(v){c(v)}}function l(d){try{f(n.throw(d))}catch(v){c(v)}}function f(d){d.done?i(d.value):o(d.value).then(s,l)}f((n=n.apply(e,t||[])).next())})}function k(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,c;return c={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function s(f){return function(d){return l([f,d])}}function l(f){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,f[0]&&(r=0)),r;)try{if(n=1,o&&(i=f[0]&2?o.return:f[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,f[1])).done)return i;switch(o=0,i&&(f=[f[0]&2,i.value]),f[0]){case 0:case 1:i=f;break;case 4:return r.label++,{value:f[1],done:!1};case 5:r.label++,o=f[1],f=[0];continue;case 7:f=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(f[0]===6||f[0]===2)){r=0;continue}if(f[0]===3&&(!i||f[1]>i[0]&&f[1]<i[3])){r.label=f[1];break}if(f[0]===6&&r.label<i[1]){r.label=i[1],i=f;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(f);break}i[2]&&r.ops.pop(),r.trys.pop();continue}f=t.call(e,r)}catch(d){f=[6,d],o=0}finally{n=i=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}function h(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),o,i=[],c;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(s){c={error:s}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(c)throw c.error}}return i}function _(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var se=y(b());function wt(e,t){e===void 0&&(e=!1);var r=h((0,se.useState)(e),2),n=r[0],o=r[1],i=(0,se.useMemo)(function(){var c=t===void 0?!e:t,s=function(){return o(function(v){return v===e?c:e})},l=function(v){return o(v)},f=function(){return o(e)},d=function(){return o(c)};return{toggle:s,set:l,setLeft:f,setRight:d}},[]);return[n,i]}var Ae=wt;u();a();var rr=y(b());function tr(e){e===void 0&&(e=!1);var t=h(Ae(!!e),2),r=t[0],n=t[1],o=n.toggle,i=n.set,c=(0,rr.useMemo)(function(){var s=function(){return i(!0)},l=function(){return i(!1)};return{toggle:o,set:function(f){return i(!!f)},setTrue:s,setFalse:l}},[]);return[r,c]}u();a();var vr=y(le()),hr=y(b());function Nt(e,t){var r;H&&(T(e)||console.error("useDebounceFn expected parameter is a function, got ".concat(typeof e)));var n=A(e),o=(r=t==null?void 0:t.wait)!==null&&r!==void 0?r:1e3,i=(0,hr.useMemo)(function(){return(0,vr.default)(function(){for(var c=[],s=0;s<arguments.length;s++)c[s]=arguments[s];return n.current.apply(n,_([],h(c),!1))},o,t)},[]);return C(function(){i.cancel()}),{run:i,cancel:i.cancel,flush:i.flush}}var oe=Nt;u();a();var me=y(b());function zt(e,t){var r=h((0,me.useState)(e),2),n=r[0],o=r[1],i=oe(function(){o(e)},t).run;return(0,me.useEffect)(function(){i()},[e]),n}var qt=zt;u();a();var de=y(b());u();a();var yr=y(Fe()),br=y(b());function $t(e,t){var r;H&&(T(e)||console.error("useThrottleFn expected parameter is a function, got ".concat(typeof e)));var n=A(e),o=(r=t==null?void 0:t.wait)!==null&&r!==void 0?r:1e3,i=(0,br.useMemo)(function(){return(0,yr.default)(function(){for(var c=[],s=0;s<arguments.length;s++)c[s]=arguments[s];return n.current.apply(n,_([],h(c),!1))},o,t)},[]);return C(function(){i.cancel()}),{run:i,cancel:i.cancel,flush:i.flush}}var De=$t;function Jt(e,t,r){var n=h((0,de.useState)({}),2),o=n[0],i=n[1],c=De(function(){i({})},r).run;(0,de.useEffect)(function(){return c()},t),M(e,[o])}var Kt=Jt;u();a();u();a();u();a();u();a();var _r=y(b());var wr=function(e,t){var r=t.manual,n=t.ready,o=n===void 0?!0:n,i=t.defaultParams,c=i===void 0?[]:i,s=t.refreshDeps,l=s===void 0?[]:s,f=t.refreshDepsAction,d=(0,_r.useRef)(!1);return d.current=!1,M(function(){!r&&o&&(d.current=!0,e.run.apply(e,_([],h(c),!1)))},[o]),M(function(){d.current||r||(d.current=!0,f?f():e.refresh())},_([],h(l),!1)),{onBefore:function(){if(!o)return{stopNow:!0}}}};wr.onInit=function(e){var t=e.ready,r=t===void 0?!0:t,n=e.manual;return{loading:!n&&r}};var xr=wr;u();a();var Me=y(b());u();a();var pe=new Map,Er=function(e,t,r){var n=pe.get(e);n!=null&&n.timer&&clearTimeout(n.timer);var o=void 0;t>-1&&(o=setTimeout(function(){pe.delete(e)},t)),pe.set(e,S(S({},r),{timer:o}))},Sr=function(e){return pe.get(e)};u();a();var ve=new Map,Tr=function(e){return ve.get(e)},Rr=function(e,t){ve.set(e,t),t.then(function(r){return ve.delete(e),r}).catch(function(){ve.delete(e)})};u();a();var X={},Pr=function(e,t){X[e]&&X[e].forEach(function(r){return r(t)})},he=function(e,t){return X[e]||(X[e]=[]),X[e].push(t),function(){var n=X[e].indexOf(t);X[e].splice(n,1)}};var en=function(e,t){var r=t.cacheKey,n=t.cacheTime,o=n===void 0?5*60*1e3:n,i=t.staleTime,c=i===void 0?0:i,s=t.setCache,l=t.getCache,f=(0,Me.useRef)(),d=(0,Me.useRef)(),v=function(g,p){s?s(p):Er(g,o,p),Pr(g,p.data)},x=function(g,p){return p===void 0&&(p=[]),l?l(p):Sr(g)};return J(function(){if(!!r){var g=x(r);g&&Object.hasOwnProperty.call(g,"data")&&(e.state.data=g.data,e.state.params=g.params,(c===-1||new Date().getTime()-g.time<=c)&&(e.state.loading=!1)),f.current=he(r,function(p){e.setState({data:p})})}},[]),C(function(){var g;(g=f.current)===null||g===void 0||g.call(f)}),r?{onBefore:function(g){var p=x(r,g);return!p||!Object.hasOwnProperty.call(p,"data")?{}:c===-1||new Date().getTime()-p.time<=c?{loading:!1,data:p==null?void 0:p.data,error:void 0,returnNow:!0}:{data:p==null?void 0:p.data,error:void 0}},onRequest:function(g,p){var E=Tr(r);return E&&E!==d.current?{servicePromise:E}:(E=g.apply(void 0,_([],h(p),!1)),d.current=E,Rr(r,E),{servicePromise:E})},onSuccess:function(g,p){var E;r&&((E=f.current)===null||E===void 0||E.call(f),v(r,{data:g,params:p,time:new Date().getTime()}),f.current=he(r,function(W){e.setState({data:W})}))},onMutate:function(g){var p;r&&((p=f.current)===null||p===void 0||p.call(f),v(r,{data:g,params:e.state.params,time:new Date().getTime()}),f.current=he(r,function(E){e.setState({data:E})}))}}:{}},Or=en;u();a();var Ar=y(le()),Q=y(b()),rn=function(e,t){var r=t.debounceWait,n=t.debounceLeading,o=t.debounceTrailing,i=t.debounceMaxWait,c=(0,Q.useRef)(),s=(0,Q.useMemo)(function(){var l={};return n!==void 0&&(l.leading=n),o!==void 0&&(l.trailing=o),i!==void 0&&(l.maxWait=i),l},[n,o,i]);return(0,Q.useEffect)(function(){if(r){var l=e.runAsync.bind(e);return c.current=(0,Ar.default)(function(f){f()},r,s),e.runAsync=function(){for(var f=[],d=0;d<arguments.length;d++)f[d]=arguments[d];return new Promise(function(v,x){var g;(g=c.current)===null||g===void 0||g.call(c,function(){l.apply(void 0,_([],h(f),!1)).then(v).catch(x)})})},function(){var f;(f=c.current)===null||f===void 0||f.cancel(),e.runAsync=l}}},[r,s]),r?{onCancel:function(){var l;(l=c.current)===null||l===void 0||l.cancel()}}:{}},Cr=rn;u();a();var Fr=y(b()),tn=function(e,t){var r=t.loadingDelay,n=t.ready,o=(0,Fr.useRef)();if(!r)return{};var i=function(){o.current&&clearTimeout(o.current)};return{onBefore:function(){return i(),n!==!1&&(o.current=setTimeout(function(){e.setState({loading:!0})},r)),{loading:!1}},onFinally:function(){i()},onCancel:function(){i()}}},Dr=tn;u();a();var ge=y(b());u();a();u();a();var nn=!!(typeof window<"u"&&window.document&&window.document.createElement),L=nn;function Y(){return L?document.visibilityState!=="hidden":!0}u();a();var ie=[];function on(e){return ie.push(e),function(){var r=ie.indexOf(e);ie.splice(r,1)}}L&&(Mr=function(){if(!!Y())for(var e=0;e<ie.length;e++){var t=ie[e];t()}},window.addEventListener("visibilitychange",Mr,!1));var Mr,Lr=on;var un=function(e,t){var r=t.pollingInterval,n=t.pollingWhenHidden,o=n===void 0?!0:n,i=t.pollingErrorRetryCount,c=i===void 0?-1:i,s=(0,ge.useRef)(),l=(0,ge.useRef)(),f=(0,ge.useRef)(0),d=function(){var v;s.current&&clearTimeout(s.current),(v=l.current)===null||v===void 0||v.call(l)};return M(function(){r||d()},[r]),r?{onBefore:function(){d()},onError:function(){f.current+=1},onSuccess:function(){f.current=0},onFinally:function(){c===-1||c!==-1&&f.current<=c?s.current=setTimeout(function(){!o&&!Y()?l.current=Lr(function(){e.refresh()}):e.refresh()},r):f.current=0},onCancel:function(){d()}}:{}},jr=un;u();a();var ye=y(b());u();a();function Le(e,t){var r=!1;return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];r||(r=!0,e.apply(void 0,_([],h(n),!1)),setTimeout(function(){r=!1},t))}}u();a();u();a();function je(){return L&&typeof navigator.onLine<"u"?navigator.onLine:!0}var ue=[];function an(e){return ue.push(e),function(){var r=ue.indexOf(e);r>-1&&ue.splice(r,1)}}L&&(We=function(){if(!(!Y()||!je()))for(var e=0;e<ue.length;e++){var t=ue[e];t()}},window.addEventListener("visibilitychange",We,!1),window.addEventListener("focus",We,!1));var We,Wr=an;var fn=function(e,t){var r=t.refreshOnWindowFocus,n=t.focusTimespan,o=n===void 0?5e3:n,i=(0,ye.useRef)(),c=function(){var s;(s=i.current)===null||s===void 0||s.call(i)};return(0,ye.useEffect)(function(){if(r){var s=Le(e.refresh.bind(e),o);i.current=Wr(function(){s()})}return function(){c()}},[r,o]),C(function(){c()}),{}},Ur=fn;u();a();var be=y(b()),cn=function(e,t){var r=t.retryInterval,n=t.retryCount,o=(0,be.useRef)(),i=(0,be.useRef)(0),c=(0,be.useRef)(!1);return n?{onBefore:function(){c.current||(i.current=0),c.current=!1,o.current&&clearTimeout(o.current)},onSuccess:function(){i.current=0},onError:function(){if(i.current+=1,n===-1||i.current<=n){var s=r!=null?r:Math.min(1e3*Math.pow(2,i.current),3e4);o.current=setTimeout(function(){c.current=!0,e.refresh()},s)}else i.current=0},onCancel:function(){i.current=0,o.current&&clearTimeout(o.current)}}:{}},Hr=cn;u();a();var Ir=y(Fe()),_e=y(b()),sn=function(e,t){var r=t.throttleWait,n=t.throttleLeading,o=t.throttleTrailing,i=(0,_e.useRef)(),c={};return n!==void 0&&(c.leading=n),o!==void 0&&(c.trailing=o),(0,_e.useEffect)(function(){if(r){var s=e.runAsync.bind(e);return i.current=(0,Ir.default)(function(l){l()},r,c),e.runAsync=function(){for(var l=[],f=0;f<arguments.length;f++)l[f]=arguments[f];return new Promise(function(d,v){var x;(x=i.current)===null||x===void 0||x.call(i,function(){s.apply(void 0,_([],h(l),!1)).then(d).catch(v)})})},function(){var l;e.runAsync=s,(l=i.current)===null||l===void 0||l.cancel()}}},[r,n,o]),r?{onCancel:function(){var s;(s=i.current)===null||s===void 0||s.cancel()}}:{}},Br=sn;u();a();u();a();var we=y(b()),ln=function(){var e=h((0,we.useState)({}),2),t=e[1];return(0,we.useCallback)(function(){return t({})},[])},Ue=ln;u();a();var mn=function(){function e(t,r,n,o){o===void 0&&(o={}),this.serviceRef=t,this.options=r,this.subscribe=n,this.initState=o,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=S(S(S({},this.state),{loading:!r.manual}),o)}return e.prototype.setState=function(t){t===void 0&&(t={}),this.state=S(S({},this.state),t),this.subscribe()},e.prototype.runPluginHandler=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var o=this.pluginImpls.map(function(i){var c;return(c=i[t])===null||c===void 0?void 0:c.call.apply(c,_([i],h(r),!1))}).filter(Boolean);return Object.assign.apply(Object,_([{}],h(o),!1))},e.prototype.runAsync=function(){for(var t,r,n,o,i,c,s,l,f,d,v=[],x=0;x<arguments.length;x++)v[x]=arguments[x];return K(this,void 0,void 0,function(){var g,p,E,W,U,I,z,B,F,w,D;return k(this,function(j){switch(j.label){case 0:if(this.count+=1,g=this.count,p=this.runPluginHandler("onBefore",v),E=p.stopNow,W=E===void 0?!1:E,U=p.returnNow,I=U===void 0?!1:U,z=ce(p,["stopNow","returnNow"]),W)return[2,new Promise(function(){})];if(this.setState(S({loading:!0,params:v},z)),I)return[2,Promise.resolve(z.data)];(r=(t=this.options).onBefore)===null||r===void 0||r.call(t,v),j.label=1;case 1:return j.trys.push([1,3,,4]),B=this.runPluginHandler("onRequest",this.serviceRef.current,v).servicePromise,B||(B=(D=this.serviceRef).current.apply(D,_([],h(v),!1))),[4,B];case 2:return F=j.sent(),g!==this.count?[2,new Promise(function(){})]:(this.setState({data:F,error:void 0,loading:!1}),(o=(n=this.options).onSuccess)===null||o===void 0||o.call(n,F,v),this.runPluginHandler("onSuccess",F,v),(c=(i=this.options).onFinally)===null||c===void 0||c.call(i,v,F,void 0),g===this.count&&this.runPluginHandler("onFinally",v,F,void 0),[2,F]);case 3:if(w=j.sent(),g!==this.count)return[2,new Promise(function(){})];throw this.setState({error:w,loading:!1}),(l=(s=this.options).onError)===null||l===void 0||l.call(s,w,v),this.runPluginHandler("onError",w,v),(d=(f=this.options).onFinally)===null||d===void 0||d.call(f,v,void 0,w),g===this.count&&this.runPluginHandler("onFinally",v,void 0,w),w;case 4:return[2]}})})},e.prototype.run=function(){for(var t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];this.runAsync.apply(this,_([],h(r),!1)).catch(function(o){t.options.onError||console.error(o)})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,_([],h(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,_([],h(this.state.params||[]),!1))},e.prototype.mutate=function(t){var r=T(t)?t(this.state.data):t;this.runPluginHandler("onMutate",r),this.setState({data:r})},e}(),Nr=mn;function dn(e,t,r){t===void 0&&(t={}),r===void 0&&(r=[]);var n=t.manual,o=n===void 0?!1:n,i=ce(t,["manual"]);H&&t.defaultParams&&!Array.isArray(t.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof t.defaultParams));var c=S({manual:o},i),s=A(e),l=Ue(),f=J(function(){var d=r.map(function(v){var x;return(x=v==null?void 0:v.onInit)===null||x===void 0?void 0:x.call(v,c)}).filter(Boolean);return new Nr(s,c,l,Object.assign.apply(Object,_([{}],h(d),!1)))},[]);return f.options=c,f.pluginImpls=r.map(function(d){return d(f,c)}),Oe(function(){if(!o){var d=f.state.params||t.defaultParams||[];f.run.apply(f,_([],h(d),!1))}}),C(function(){f.cancel()}),{loading:f.state.loading,data:f.state.data,error:f.state.error,params:f.state.params||[],cancel:R(f.cancel.bind(f)),refresh:R(f.refresh.bind(f)),refreshAsync:R(f.refreshAsync.bind(f)),run:R(f.run.bind(f)),runAsync:R(f.runAsync.bind(f)),mutate:R(f.mutate.bind(f))}}var zr=dn;function pn(e,t,r){return zr(e,t,_(_([],h(r||[]),!1),[Cr,Dr,jr,Ur,Br,xr,Or,Hr],!1))}var qr=pn;var He=qr;u();a();var Vr=y(b());function vn(e){return T(e[Symbol.asyncIterator])}function hn(e,t){(0,Vr.useEffect)(function(){var r=e(),n=!1;function o(){return K(this,void 0,void 0,function(){var i;return k(this,function(c){switch(c.label){case 0:if(!vn(r))return[3,4];c.label=1;case 1:return[4,r.next()];case 2:return i=c.sent(),i.done||n?[3,3]:[3,1];case 3:return[3,6];case 4:return[4,r];case 5:c.sent(),c.label=6;case 6:return[2]}})})}return o(),function(){n=!0}},t)}var gn=hn;u();a();u();a();function O(e,t){if(!!L){if(!e)return t;var r;return T(e)?r=e():"current"in e?r=e.current:r=e,r}}u();a();var yn=function(e){return e.every(function(t){var r=O(t);if(!r)return!1;if(r.getRootNode()instanceof ShadowRoot)return!0})},bn=function(e){return e?e.getRootNode():document},_n=function(e){if(!e||!document.getRootNode)return document;var t=Array.isArray(e)?e:[e];return yn(t)?bn(O(t[0])):document},Gr=_n;u();a();var Xr=y(b());u();a();var ae=y(b());var wn=function(e){var t=function(r,n,o){var i=(0,ae.useRef)(!1),c=(0,ae.useRef)([]),s=(0,ae.useRef)([]),l=(0,ae.useRef)();e(function(){var f,d=Array.isArray(o)?o:[o],v=d.map(function(x){return O(x)});if(!i.current){i.current=!0,c.current=v,s.current=n,l.current=r();return}(v.length!==c.current.length||!$(v,c.current)||!$(n,s.current))&&((f=l.current)===null||f===void 0||f.call(l),c.current=v,s.current=n,l.current=r())}),C(function(){var f;(f=l.current)===null||f===void 0||f.call(l),i.current=!1})};return t},xe=wn;var xn=xe(Xr.useEffect),q=xn;function Yr(e,t,r){r===void 0&&(r="click");var n=A(e);q(function(){var o=function(s){var l=Array.isArray(t)?t:[t];l.some(function(f){var d=O(f);return!d||d.contains(s.target)})||n.current(s)},i=Gr(t),c=Array.isArray(r)?r:[r];return c.forEach(function(s){return i.addEventListener(s,o)}),function(){c.forEach(function(s){return i.removeEventListener(s,o)})}},Array.isArray(r)?r:[r],t)}u();a();var Ee=y(b());function En(e,t,r){var n=h((0,Ee.useState)({}),2),o=n[0],i=n[1],c=oe(function(){i({})},r).run;(0,Ee.useEffect)(function(){return c()},t),M(e,[o])}var Sn=En;u();a();var kr=y(b());u();a();var Ie=y(b());u();a();var $r=y(st()),Jr=function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=[]),(0,$r.default)(e,t)};var Kr=function(e){return function(t,r){var n=(0,Ie.useRef)(),o=(0,Ie.useRef)(0);(r===void 0||!Jr(r,n.current))&&(n.current=r,o.current+=1),e(t,[o.current])}};var Tn=Kr(kr.useEffect);u();a();function Rn(e,t,r){r===void 0&&(r={});var n=A(t);q(function(){var o=O(r.target,window);if(!!(o!=null&&o.addEventListener)){var i=function(c){return n.current(c)};return o.addEventListener(e,i,{capture:r.capture,once:r.once,passive:r.passive}),function(){o.removeEventListener(e,i,{capture:r.capture})}}},[e,r.capture,r.once,r.passive],r.target)}var Be=Rn;u();a();var fe=y(b());u();a();var Qr=function(e){return e===document||e===document.body?Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop):e.scrollTop},Zr=function(e){return e.scrollHeight||Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)},et=function(e){return e.clientHeight||Math.max(document.documentElement.clientHeight,document.body.clientHeight)};var Pn=function(e,t){t===void 0&&(t={});var r=t.target,n=t.isNoMore,o=t.threshold,i=o===void 0?100:o,c=t.reloadDeps,s=c===void 0?[]:c,l=t.manual,f=t.onBefore,d=t.onSuccess,v=t.onError,x=t.onFinally,g=h((0,fe.useState)(),2),p=g[0],E=g[1],W=h((0,fe.useState)(!1),2),U=W[0],I=W[1],z=(0,fe.useMemo)(function(){return n?n(p):!1},[p]),B=He(function(P){return K(void 0,void 0,void 0,function(){var N,V,te;return k(this,function(qe){switch(qe.label){case 0:return[4,e(P)];case 1:return N=qe.sent(),E(P?S(S({},N),{list:_(_([],h((te=P.list)!==null&&te!==void 0?te:[]),!1),h(N.list),!1)}):S(S({},N),{list:_([],h((V=N.list)!==null&&V!==void 0?V:[]),!1)})),[2,N]}})})},{manual:l,onFinally:function(P,N,V){I(!1),x==null||x(N,V)},onBefore:function(){return f==null?void 0:f()},onSuccess:function(P){setTimeout(function(){ze()}),d==null||d(P)},onError:function(P){return v==null?void 0:v(P)}}),F=B.loading,w=B.run,D=B.runAsync,j=B.cancel,re=R(function(){z||(I(!0),w(p))}),ut=R(function(){return z?Promise.reject():(I(!0),D(p))}),at=function(){return I(!1),w()},ft=function(){return I(!1),D()},ze=function(){var P=O(r);if(!!P){P=P===document?document.documentElement:P;var N=Qr(P),V=Zr(P),te=et(P);V-N<=te+i&&re()}};return Be("scroll",function(){F||U||ze()},{target:r}),M(function(){w()},_([],h(s),!1)),{data:p,loading:!U&&F,loadingMore:U,noMore:z,loadMore:re,loadMoreAsync:ut,reload:R(at),reloadAsync:R(ft),mutate:E,cancel:j}},On=Pn;u();a();var Z=y(b());var An=function(e,t,r){r===void 0&&(r={});var n=R(e),o=(0,Z.useRef)(null),i=(0,Z.useCallback)(function(){o.current&&clearInterval(o.current)},[]);return(0,Z.useEffect)(function(){if(!(!Xe(t)||t<0))return r.immediate&&n(),o.current=setInterval(n,t),i},[t,r.immediate]),i},Cn=An;u();a();u();a();var rt=y(b());function tt(e){function t(r,n){n===void 0&&(n={});var o,i=n.onError,c=i===void 0?function(p){console.error(p)}:i;try{o=e()}catch(p){c(p)}var s=function(p){return n!=null&&n.serializer?n==null?void 0:n.serializer(p):JSON.stringify(p)},l=function(p){return n!=null&&n.deserializer?n==null?void 0:n.deserializer(p):JSON.parse(p)};function f(){try{var p=o==null?void 0:o.getItem(r);if(p)return l(p)}catch(E){c(E)}return T(n==null?void 0:n.defaultValue)?n==null?void 0:n.defaultValue():n==null?void 0:n.defaultValue}var d=h((0,rt.useState)(function(){return f()}),2),v=d[0],x=d[1];M(function(){x(f())},[r]);var g=function(p){var E=T(p)?p(v):p;if(x(E),Ye(E))o==null||o.removeItem(r);else try{o==null||o.setItem(r,s(E))}catch(W){console.error(W)}};return[v,R(g)]}return t}var Fn=tt(function(){return L?localStorage:void 0}),Dn=Fn;u();a();var ee=y(b());function Mn(e){var t=(0,ee.useRef)(0),r=h((0,ee.useState)(e),2),n=r[0],o=r[1],i=(0,ee.useCallback)(function(c){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){o(c)})},[]);return C(function(){cancelAnimationFrame(t.current)}),[n,i]}var Se=Mn;u();a();var Ne=y(b()),Ln=function(e,t){return!Object.is(e,t)};function jn(e,t){t===void 0&&(t=Ln);var r=(0,Ne.useRef)(),n=(0,Ne.useRef)();return t(n.current,e)&&(r.current=n.current,n.current=e),r.current}var Wn=jn;u();a();function Un(e,t){t===void 0&&(t=function(){return!0});var r=h(Se(),2),n=r[0],o=r[1],i=A(t);return q(function(){var c=O(e,document);if(!!c){var s=function(){var l;c===document?document.scrollingElement?l={left:document.scrollingElement.scrollLeft,top:document.scrollingElement.scrollTop}:l={left:Math.max(window.pageXOffset,document.documentElement.scrollLeft,document.body.scrollLeft),top:Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)}:l={left:c.scrollLeft,top:c.scrollTop},i.current(l)&&o(l)};return s(),c.addEventListener("scroll",s),function(){c.removeEventListener("scroll",s)}}},[],e),n}var Hn=Un;u();a();var Te=y(b());var In=function(e){var t=h((0,Te.useState)(e),2),r=t[0],n=t[1],o=(0,Te.useCallback)(function(i){n(function(c){var s=T(i)?i(c):i;return s?S(S({},c),s):c})},[]);return[r,o]},Bn=In;u();a();u();a();u();a();var nt=y(b());var Nn=xe(nt.useLayoutEffect),ot=Nn;var zn=L?ot:q,it=zn;function qn(e){var t=h(Se(function(){var o=O(e);return o?{width:o.clientWidth,height:o.clientHeight}:void 0}),2),r=t[0],n=t[1];return it(function(){var o=O(e);if(!!o){var i=new Ve(function(c){c.forEach(function(s){var l=s.target,f=l.clientWidth,d=l.clientHeight;n({width:f,height:d})})});return i.observe(o),function(){i.disconnect()}}},[],e),r}var Vn=qn;export{vt as a,R as b,M as c,J as d,A as e,C as f,mr as g,le as h,Fe as i,Oe as j,Ue as k,He as l,gn as m,Ae as n,tr as o,Yr as p,oe as q,qt as r,Sn as s,Tn as t,Be as u,On as v,Cn as w,Dn as x,Wn as y,Hn as z,Bn as A,Vn as B,De as C,Kt as D};
/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-VPBQLZCI.js.map