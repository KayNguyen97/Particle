import{a as j}from"./chunk-R7OCQATX.js";import{a as F}from"./chunk-MBJ4MFYL.js";import{i as S}from"./chunk-2HWABU7H.js";import{h as P}from"./chunk-TPEASXIF.js";import{p as e}from"./chunk-IU3TYIWS.js";import{p as D}from"./chunk-X2LENRE7.js";import{b as z}from"./chunk-6ZPGW3YM.js";import{d as L}from"./chunk-JIRWXBHS.js";import{b as E,e as u}from"./chunk-RMQJRDTF.js";import{c as r}from"./chunk-2YLR7R2N.js";import{C,H as T,Pa as Y,v as y}from"./chunk-CVJKAN5R.js";import{G as h,c as b,o as v}from"./chunk-GXQ645QR.js";import{a as B}from"./chunk-V4YVDLI4.js";import{f as _,m as i,o as a}from"./chunk-6V2G2Z5W.js";i();a();var n=_(B());C();Y();var W=_(z());i();a();var s=_(B());C();i();a();var d={itemWrapper:"_itemWrapper_guwjx_1",chain:"_chain_guwjx_8",content:"_content_guwjx_11",address:"_address_guwjx_14",amount:"_amount_guwjx_17",active:"_active_guwjx_20"};var G=({data:t,active:m,onClick:f})=>{let{addressType:l,userAddress:x,coinAmount:c,currencyAmount:A}=t;return s.default.createElement(r.FlexBox,{align:r.ALIGN.center,className:`${d.itemWrapper} ${m&&d.active}`,onClick:f},s.default.createElement(r.Box,{className:d.chain},s.default.createElement(b,{alt:"token",width:32,height:32,src:(t==null?void 0:t.image)||L,errorImg:L})),s.default.createElement(r.FlexBox,{align:r.ALIGN.center,justify:"space-between",className:d.content},s.default.createElement(r.FlexBox,{direction:r.DIRECTION.vertical},s.default.createElement(e.Text,{strong:500,className:d.address},y(E[u[l]])),s.default.createElement(e.Text,{type:e.TYPE.secondary,size:e.SIZE.xs},D(x))),s.default.createElement(r.FlexBox,{direction:r.DIRECTION.vertical,align:r.ALIGN.unset},s.default.createElement(e.DisplayAmount,{strong:!0,noStyle:!1,amount:c,mode:e.CRYPTO,ellipsis:!0,align:e.ALIGN.right,className:d.amount}),s.default.createElement(e.DisplayAmount,{mode:e.LEGAL,size:e.SIZE.xs,type:e.TYPE.secondary,align:e.ALIGN.right,useApproximate:!1,ellipsis:!0},A))))};i();a();var g={main:"_main_s0oma_1",title:"_title_s0oma_4",subTitle:"_subTitle_s0oma_9"};var Z=({visible:t,onClose:m,coinId:f,walletId:l,children:x,onChange:c})=>{let A=(0,W.useDispatch)(),w=S(T,l),k=j({coinId:f},l),H=w.map(o=>k.find(p=>u[p==null?void 0:p.addressType]===o.addressType)).filter(Boolean),I=F(T,l),O=o=>{I!==o.userAddress&&(m(),A(P(l,{[T]:u[o==null?void 0:o.addressType]})).then(()=>{h.success({title:y("wallet_extension_toast_address_format_changed"),desc:o.userAddress,duration:1.5,placement:h.DIRECTION.top,containerClassName:"address-copy-notification"}),c&&c([null,{walletInfo:w,walletId:l,btcAddress:o.userAddress}])}).catch(p=>{c&&c([p,null])}))};return n.default.createElement(v.Action,{visible:t,onClose:m,maskClosable:!0,noTopRadius:!1,windowStyle:{overflow:"hidden"}},n.default.createElement(r.Box,{className:g.main},x,H.map((o,p)=>n.default.createElement(G,{key:(o==null?void 0:o.addressType)||p,data:o,active:I===(o==null?void 0:o.userAddress),onClick:()=>O(o)}))))},$=({title:t,subTitle:m})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(e.Text,{strong:700,className:g.title},t),n.default.createElement(e.Text,{className:g.subTitle},m));Z.Header=$;export{Z as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-PJG4F6OY.js.map