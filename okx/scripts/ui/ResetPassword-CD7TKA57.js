import{a as x}from"./chunk-ALCVBZDB.js";import{a as f,b as S}from"./chunk-I3HSL7JC.js";import"./chunk-AHAXQBXQ.js";import"./chunk-AX4SXHC6.js";import{o as E}from"./chunk-TPEASXIF.js";import"./chunk-JSAFBAMQ.js";import"./chunk-XEOGXIVD.js";import"./chunk-PCGRDRHF.js";import"./chunk-IU3TYIWS.js";import{D as y,b as F,o as T}from"./chunk-VPBQLZCI.js";import"./chunk-FRDOFRM7.js";import"./chunk-X2LENRE7.js";import{a as b}from"./chunk-O4EDZSHP.js";import"./chunk-HU3KBV5G.js";import"./chunk-6ZPGW3YM.js";import"./chunk-ZKDHZDUE.js";import"./chunk-4UESFVD2.js";import"./chunk-D7KW4FFX.js";import"./chunk-RAXGEVRQ.js";import{d as I,f as v}from"./chunk-S4N75E3H.js";import"./chunk-JIRWXBHS.js";import"./chunk-3TVEFIPW.js";import"./chunk-52GWQSZH.js";import"./chunk-TPSXCUGD.js";import"./chunk-2YLR7R2N.js";import"./chunk-MVLY6WUP.js";import"./chunk-ZEAKIEIQ.js";import"./chunk-5KSDRGLW.js";import"./chunk-DQTCC3FF.js";import"./chunk-O5LVHMPV.js";import{C as V,v as o}from"./chunk-CVJKAN5R.js";import"./chunk-A5Y2KVNP.js";import{D as t,H as P,q as e}from"./chunk-GXQ645QR.js";import"./chunk-DQ2NYVYI.js";import{V as d}from"./chunk-C2H3SRET.js";import{a as U}from"./chunk-V4YVDLI4.js";import"./chunk-TW6D7CWA.js";import"./chunk-3T5D6KAV.js";import"./chunk-MAWXDEJZ.js";import"./chunk-Z37GURZ6.js";import"./chunk-IYYFWVWL.js";import"./chunk-RYNAOZ73.js";import"./chunk-Q34CQJXG.js";import"./chunk-GKHVFCKF.js";import{f as O,m as p,o as w}from"./chunk-6V2G2Z5W.js";p();w();var s=O(U());V();v();p();w();var C={root:"_root_1r48s_1"};var rs=({history:B})=>{var g,h;let l=t.useForm(),[r,z]=s.default.useState({}),[N,c]=s.default.useState(null),[Z,{setTrue:A,setFalse:k}]=T(!1);y(()=>{!r.oldPassword||E(r.oldPassword).then(()=>{c(null),l.cleanErrors("oldPassword")}).catch(()=>{let a=o("wallet_set_password_errortip_password_wrong");c(a),l.setErrors({oldPassword:a})})},[r.oldPassword],{wait:500});let u=!!N||!r.oldPassword||!r.password||!r.confirm||((g=r.password)==null?void 0:g.length)<f||((h=r.confirm)==null?void 0:h.length)<f,L=F(async()=>{let{password:a,confirm:m}=r;if(u)return;if(a!==m){l.setErrors({confirm:o("wallet_settings_reset_passord_errortip_input_error")});return}A(),await I().modifyPassword(m)&&(P.success(o("wallet_edit_wallet_toast_renamed_success")),B.push(b)),k()},[u,r]);return s.default.createElement(x,{className:C.root,title:o("wallet_settings_reset_passord_maintitle_reset_password"),desc:o("wallet_extension_subtitle_password_unlock")},({formClass:a,formErrorClass:m,itemClass:i})=>s.default.createElement(t,{form:l,size:e.SIZE.lg,validateTrigger:["onChange","onBlur"],className:a,errorClassName:m,onSubmit:L,onValuesChange:(_,n)=>{z(n)}},s.default.createElement(t.Item,{name:"oldPassword",style:{marginBottom:0},label:o("wallet_settings_reset_passord_subtitle_old_password"),className:i},s.default.createElement(e.Password,{autoFocus:!0,autoComplete:"off",size:e.SIZE.xl,placeholder:o("wallet_settings_reset_passord_placeholder_input_old_password")})),s.default.createElement(t.Item,{name:"password",style:{marginBottom:0,marginTop:"32px"},className:i,label:o("wallet_settings_reset_passord_subtitle_new_password")},s.default.createElement(e.Password,{autoComplete:"off",size:e.SIZE.xl,placeholder:o("wallet_settings_reset_passord_placeholder_input_desc")})),s.default.createElement(t.Item,{noStyle:!0,shouldUpdate:(_,n)=>_.password!==n.password},({getFieldValue:_})=>{let n=_("password");return s.default.createElement(S,{password:n})}),s.default.createElement(t.Item,{name:"confirm",className:i,label:o("wallet_settings_reset_passord_subtitle_password_confirmation"),style:{flex:1,marginTop:"32px"}},s.default.createElement(e.Password,{autoComplete:"off",size:e.SIZE.xl,placeholder:o("wallet_settings_reset_passord_placeholder_input_password_confirmation"),onChange:()=>{l.cleanErrors("confirm")}})),s.default.createElement(t.Item,{noStyle:!0},s.default.createElement(d,{block:!0,htmlType:"submit",loading:Z,disabled:u,category:d.CATEGORY.fill,type:d.TYPE.highlight,size:d.SIZE.lg},o("wallet_set_password_btn_confirm")))))};export{rs as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=ResetPassword-CD7TKA57.js.map