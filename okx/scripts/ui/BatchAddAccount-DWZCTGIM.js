import{a as bt}from"./chunk-ZLO3STNF.js";import{a as wt}from"./chunk-UMY7O2L3.js";import{a as Nt}from"./chunk-5ZZIKR7L.js";import{a as ht}from"./chunk-YOZOX6GO.js";import"./chunk-S4WP5LDP.js";import{a as W}from"./chunk-GDJJKMDU.js";import"./chunk-JXT6JCNO.js";import{a as rt}from"./chunk-XOD56IFT.js";import{a as Et,b as Bt,c as kt,d as Dt}from"./chunk-FCQXV5DP.js";import"./chunk-NGDV3PTC.js";import"./chunk-FF7XOOGZ.js";import"./chunk-R6GCLTW2.js";import"./chunk-S3ECGMEP.js";import"./chunk-PX7HII6H.js";import{p as yt}from"./chunk-UEO7AURD.js";import"./chunk-DXFO7P35.js";import"./chunk-ERLETJMZ.js";import"./chunk-X2LENRE7.js";import{Sa as O,Ta as H}from"./chunk-O4EDZSHP.js";import{k as A}from"./chunk-HU3KBV5G.js";import{b as ro}from"./chunk-6ZPGW3YM.js";import{j as It,o as so}from"./chunk-ZKDHZDUE.js";import{i as gt,m as no}from"./chunk-4UESFVD2.js";import"./chunk-D7KW4FFX.js";import"./chunk-RAXGEVRQ.js";import{d as _t,f as to}from"./chunk-S4N75E3H.js";import"./chunk-FLCN6MAI.js";import"./chunk-7E3KY4EN.js";import"./chunk-3TVEFIPW.js";import"./chunk-UXFKODVN.js";import{a as At}from"./chunk-TPSXCUGD.js";import"./chunk-XKG5DY6K.js";import{h as et}from"./chunk-RMQJRDTF.js";import{c as d}from"./chunk-2YLR7R2N.js";import"./chunk-MVLY6WUP.js";import"./chunk-ZEAKIEIQ.js";import"./chunk-5KSDRGLW.js";import"./chunk-DQTCC3FF.js";import"./chunk-O5LVHMPV.js";import{C as mt,ac as pt,ec as oo,fc as xt,gc as eo,q as k}from"./chunk-CVJKAN5R.js";import"./chunk-A5Y2KVNP.js";import{D,q as dt,w as ft}from"./chunk-GXQ645QR.js";import"./chunk-DQ2NYVYI.js";import{J as ct,O as ut,P as lt,V as _,c as ot}from"./chunk-C2H3SRET.js";import{a as y}from"./chunk-V4YVDLI4.js";import"./chunk-TW6D7CWA.js";import"./chunk-3T5D6KAV.js";import"./chunk-MAWXDEJZ.js";import"./chunk-Z37GURZ6.js";import"./chunk-IYYFWVWL.js";import"./chunk-CLSYGH6A.js";import"./chunk-DHRSDA7N.js";import"./chunk-RYNAOZ73.js";import"./chunk-Q34CQJXG.js";import"./chunk-GKHVFCKF.js";import{f,m as t,o}from"./chunk-6V2G2Z5W.js";t();o();var R=f(y()),M=f(At());t();o();var P=f(y());t();o();var j=f(y());t();o();var nt={root:"_root_th09o_1",header:"_header_th09o_42"};t();o();t();o();var Ct=f(y());t();o();var L=rt(Bt,Dt),V=rt(Et,kt);t();o();var Tt=f(At());function ao(){let r=(0,Tt.useHistory)(),e=l=>(p=!0)=>{p?r.replace(l):r.push(l)},n=l=>r.location.pathname===l,i=e(H),s=e(O),a=n(O),m=n(H);return{isHomePage:a,isAddPage:m,gotoAddPage:i,gotoHomePage:s}}var Y=ao;function io(){let[r]=L(),{gotoHomePage:e,isHomePage:n}=Y();(0,Ct.useLayoutEffect)(()=>{!n&&!r&&e()},[e,n,r])}var Lt=io;function mo(){return Lt(),null}var St=mo;function co({children:r,hidden:e=!1}){return j.default.createElement(d.Box,{className:nt.root},j.default.createElement(wt,{className:nt.header}),e?null:r,j.default.createElement(St,null))}var z=co;t();o();var Z=f(y());t();o();var S={root:"_root_1ccc7_1",titleBox:"_titleBox_1ccc7_17",title:"_title_1ccc7_17",subtitle:"_subtitle_1ccc7_160",add:"_add_1ccc7_179"};function uo(){let r=A(),e=r("wallet_extension_addaccount_title_add_account"),n=r("wallet_extension_addaccount_subtitle_select_account");return Z.default.createElement(d.Box,{className:S.titleBox},Z.default.createElement(d.Box,{className:S.title},e),Z.default.createElement(d.Box,{className:S.subtitle},n))}var Ft=uo;t();o();var h=f(y());t();o();mt();var lo=r=>r.filter(e=>[et.MNEMONIC,et.MPC].includes(e.keyringIdentityType)).filter(e=>e.walletIdentities.every(n=>{var s;return((s=n.backupData)!=null?s:[]).length<=0})),st=1;function fo(){var B;let r=A(),e=D.useForm(),{gotoAddPage:n}=Y(),{keyringIdentities:i,remainAccountAmount:s}=W(),[,a]=V(),[,m]=L(),l=w=>{if(Object.keys(e.getErrors()).length>0)return;let{keyringId:U,amount:x}=w;if(x==="0")return;let K=Number(x||st);!U||K>s||(a(K),m(U),n())},p=lo(i).map(w=>({value:w.keyringId,label:w.keyringName})),N={keyringId:(B=p[0])==null?void 0:B.value,amount:""},F=(w,tt=st)=>{if(Number(tt||st)<=s&&s>0)return Promise.resolve();let x=r("wallet_extension_addaccount_remainder_added_upper_limits",{num:k.thousandFormat(s)});return Promise.reject(x)},E=()=>{e.setFieldsValue({amount:s})},C=s<=0||p.length<=0;return{initialValues:N,onSubmit:l,form:e,options:p,amountValidator:F,onSetMaxAmount:E,disableAdd:C}}var Ot=fo;t();o();var q={root:"_root_m7mwn_2",confirm:"_confirm_m7mwn_57",max:"_max_m7mwn_71"};function _o(){let r=A(),{initialValues:e,onSubmit:n,form:i,options:s,amountValidator:a,onSetMaxAmount:m,disableAdd:l}=Ot();return h.default.createElement(d.Box,{className:q.root},h.default.createElement(D,{requiredMark:!0,initialValues:e,onSubmit:n,form:i},h.default.createElement(D.Item,{label:r("wallet_extension_addaccount_title_select_wallet"),name:"keyringId"},h.default.createElement(ft,{title:"Title",options:s,searchable:!1})),h.default.createElement(D.Item,{label:r("wallet_extension_addaccount_text_added_amount"),name:"amount",rules:[{validator:a}]},h.default.createElement(dt.Number,{placeholder:"1",precision:0,min:1,suffix:h.default.createElement(d.Box,{className:q.max,onClick:m},r("wallet_extension_addaccount_textbtn_max"))})),h.default.createElement(D.Item,{noStyle:!0,className:q.confirm},h.default.createElement(_,{category:_.CATEGORY.fill,type:_.TYPE.highlight,size:_.SIZE.xl,disabled:l,htmlType:"submit",block:!0},r("wallet_extension_addaccount_btn_add")))))}var Ht=_o;function po(){return P.default.createElement(z,null,P.default.createElement(d.Box,{className:S.root},P.default.createElement(Ft,null),P.default.createElement(Ht,null)))}var Pt=po;t();o();var T=f(y());t();o();var Gt={root:"_root_1uqqr_1"};t();o();t();o();to();var Mt=f(ro());so();no();var xo=()=>{let r=(0,Mt.useDispatch)();return async(n,i=1)=>{try{return await _t().addNewWallets(n,i)}catch(s){throw r(gt(s==null?void 0:s.message)),s}finally{await It(r)}}},Ut=xo;var g=f(y());t();o();function yo(){let r=e=>({execute:e,cancel:()=>{},pause:()=>{}});return new bt(r)}var Kt=yo;t();o();var Ao={NONE:"NONE",ADDING:"ADDING",FINISHED:"FINISHED",FAILED:"FAILED"},u=Ao;var X=r=>e=>e+r,Io=r=>{let[e,n]=(0,g.useState)(u.NONE),i=(0,g.useRef)(),[s]=V(),[a,m]=(0,g.useState)(0),[l,p]=(0,g.useState)(0),N=(0,g.useRef)(),F=Ut(),E=s-a,C=x=>x>0;(0,g.useEffect)(()=>{s<=0||(a===s&&n(u.FINISHED),l===s&&n(u.FAILED))},[l,a,s]);let B=x=>{!C(x)||(n(u.ADDING),i.current=Kt(),i.current.start(async K=>{if(C(x)&&x>N.current){let v=Math.min(x-N.current,1);try{let it=(await F(r,v)).length;m(X(it)),p(X(v-it))}catch{p(X(v))}finally{N.current=X(v)(N.current),K()}}else n(u.FINISHED)}))};return{start:()=>{a>0||(N.current=0,B(s))},cancel:()=>{var x;n(u.FINISHED),(x=i.current)==null||x.cancel()},retry:()=>{E>0&&(N.current=0,p(0),B(E))},failed:l,success:a,total:s,remain:E,status:e}},No=r=>{var a,m;let{keyringIdentities:e,remainAccountAmount:n}=W(),i=e.find(l=>l.keyringId===r),s=(m=(a=i==null?void 0:i.walletIdentities)==null?void 0:a[0])==null?void 0:m.walletId;return{keyring:i,walletId:s,remainAccountAmount:n}};function ho(){let[r]=L(),{walletId:e,keyring:n,remainAccountAmount:i}=No(r),s=(0,g.useRef)(!1),{start:a,cancel:m,retry:l,success:p,failed:N,total:F,status:E}=Io(e),C=async()=>{let B=await globalThis.platform.getActiveTabs();await globalThis.platform.closeTab(B.map(({id:w})=>w))};return(0,g.useEffect)(()=>{!s.current&&e&&i>0&&(a(),s.current=!0)},[e,i,a]),{start:a,cancel:m,retry:l,success:p,failed:N,total:F,keyring:n,status:E,onFinish:C}}var vt=ho;t();o();var Vt=f(y()),Yt=f(ot());t();o();var Wt={root:"_root_1lp9n_1"};var wo=({status:r,className:e,walletName:n})=>{let i=A(),a={[u.NONE]:null,[u.ADDING]:{key:"wallet_extension_addaccount_remainder_account_creating",params:{acctName:n}},[u.FINISHED]:{key:"wallet_extension_addaccount_remainder_account_created"},[u.FAILED]:{key:"wallet_extension_addaccount_adding_maintitle_create_failed"}}[r],m=a?i(a.key,a.params):"";return Vt.default.createElement(d.Box,{className:(0,Yt.default)(Wt.root,e)},m)},jt=wo;t();o();var J=f(y());var zt=f(ot());t();o();var G={icon:"_icon_1y49k_1",failed:"_failed_1y49k_5",finished:"_finished_1y49k_8",loading:"_loading_1y49k_11"};var Zt=(r,e)=>()=>J.default.createElement(ct,{className:(0,zt.default)(r,G.icon,e)}),Eo=Zt("okds-success-circle",G.finished),Bo=Zt("okx-wallet-plugin-warning-circle",G.failed),ko=()=>J.default.createElement(lt,{loaderClassName:G.loading}),Do=()=>null,bo={[u.NONE]:Do,[u.ADDING]:ko,[u.FINISHED]:Eo,[u.FAILED]:Bo},To=({status:r})=>{let e=bo[r];return J.default.createElement(e,null)},qt=To;t();o();var $=f(y());t();o();mt();var Co=({status:r,success:e=0,total:n=0,failed:i=0})=>{let a=u.FINISHED===r?n-e:i,m={success:{key:"wallet_extension_addaccount_adding_text_create_success",params:{num:k.thousandFormat(e)}},failed:{key:"wallet_extension_addaccount_adding_text_create_failed",params:{num:k.thousandFormat(a)},withRetry:a>0},adding:{key:"wallet_extension_addaccount_remainder_created_account",params:{successnum:k.thousandFormat(e),totalnum:k.thousandFormat(n)}}};return{items:{[u.NONE]:[],[u.ADDING]:[m.adding],[u.FINISHED]:[m.success,a>0?m.failed:void 0].filter(Boolean),[u.FAILED]:[m.failed]}[r]}},Xt=Co;t();o();var Q={root:"_root_4wjpy_1",item:"_item_4wjpy_107",retry:"_retry_4wjpy_130"};function Lo(r){let{items:e=[]}=Xt(r),n=A(),{retry:i}=r;return $.default.createElement(d.Box,{className:Q.root},e.map((s,a)=>{let{key:m,params:l,withRetry:p}=s;return $.default.createElement(d.Box,{key:a,className:Q.item},n(m,l),p&&$.default.createElement(d.Box,{onClick:i,className:Q.retry},n("wallet_extension_addaccount_adding_textbtn_retry")))}))}var Jt=Lo;t();o();var I=f(y());var at=f(ot());eo();oo();t();o();var b={root:"_root_1chmx_1",actions:"_actions_1chmx_21",adding:"_adding_1chmx_38",finish:"_finish_1chmx_52",tip:"_tip_1chmx_104",hiddenTip:"_hiddenTip_1chmx_202"};function So(r){let e=A(),{isSm:n}=ut(),{status:i,cancel:s,download:a,finish:m}=r,l=i===u.ADDING,p=xt();return I.default.createElement(d.Box,{className:b.root},I.default.createElement(d.Box,{className:(0,at.default)(b.actions,l?b.adding:b.finish)},l?I.default.createElement(I.default.Fragment,null,I.default.createElement(_,{category:_.CATEGORY.outline,type:_.TYPE.primary,onClick:s,size:_.SIZE.xl,block:!0},e("wallet_extension_addaccount_adding_btn_cancel"))):I.default.createElement(I.default.Fragment,null,p!==pt&&I.default.createElement(_,{category:_.CATEGORY.outline,type:_.TYPE.primary,size:_.SIZE.xl,onClick:Nt(yt)(a),block:n},e("wallet_extension_addaccount_adding_btn_download_address")),I.default.createElement(_,{category:_.CATEGORY.fill,type:_.TYPE.highlight,size:_.SIZE.xl,onClick:m,block:n},e("wallet_extension_addaccount_adding_btn_confirm")))),I.default.createElement(d.Box,{className:(0,at.default)(b.tip,!l&&b.hiddenTip)},l?e("wallet_extension_addaccount_adding_text_not_close"):""))}var Qt=So;function Fo(){let{cancel:r,retry:e,success:n,failed:i,total:s,keyring:a,status:m,onFinish:l}=vt(),{downloadAddress:p}=ht();return T.default.createElement(z,{hidden:m===u.NONE},T.default.createElement(d.Box,{className:Gt.root},T.default.createElement(qt,{status:m}),T.default.createElement(jt,{status:m,walletName:a==null?void 0:a.keyringName}),T.default.createElement(Jt,{status:m,retry:e,total:s,failed:i,success:n}),T.default.createElement(Qt,{status:m,cancel:r,download:p,finish:l})))}var $t=Fo;var ts=()=>R.default.createElement(M.Switch,null,R.default.createElement(M.Route,{path:O,component:Pt,exact:!0}),R.default.createElement(M.Route,{path:H,component:$t,exact:!0}));export{ts as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=BatchAddAccount-DWZCTGIM.js.map