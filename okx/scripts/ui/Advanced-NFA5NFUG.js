import{c as b}from"./chunk-2LZ7PSBI.js";import{a as y}from"./chunk-YM6UXGIC.js";import"./chunk-3QK7FEQ5.js";import{c as w}from"./chunk-P2BTSOJO.js";import"./chunk-AX4SXHC6.js";import"./chunk-DXFO7P35.js";import{a as A}from"./chunk-JSAFBAMQ.js";import"./chunk-XEOGXIVD.js";import{a as T}from"./chunk-PCGRDRHF.js";import{p as E}from"./chunk-IU3TYIWS.js";import"./chunk-VPBQLZCI.js";import"./chunk-FRDOFRM7.js";import{o as C}from"./chunk-X2LENRE7.js";import"./chunk-O4EDZSHP.js";import"./chunk-HU3KBV5G.js";import"./chunk-6ZPGW3YM.js";import{i as v,m as W}from"./chunk-4UESFVD2.js";import"./chunk-RAXGEVRQ.js";import{d as N,f as $}from"./chunk-S4N75E3H.js";import"./chunk-JIRWXBHS.js";import"./chunk-3TVEFIPW.js";import"./chunk-52GWQSZH.js";import"./chunk-TPSXCUGD.js";import"./chunk-2YLR7R2N.js";import"./chunk-ZEAKIEIQ.js";import"./chunk-5KSDRGLW.js";import"./chunk-DQTCC3FF.js";import"./chunk-O5LVHMPV.js";import{C as P,v as e}from"./chunk-CVJKAN5R.js";import"./chunk-A5Y2KVNP.js";import{B as g,H as x,o as c}from"./chunk-GXQ645QR.js";import"./chunk-DQ2NYVYI.js";import{J as f,V as a,c as S}from"./chunk-C2H3SRET.js";import{a as O}from"./chunk-V4YVDLI4.js";import"./chunk-TW6D7CWA.js";import"./chunk-3T5D6KAV.js";import"./chunk-MAWXDEJZ.js";import"./chunk-Z37GURZ6.js";import"./chunk-IYYFWVWL.js";import"./chunk-RYNAOZ73.js";import"./chunk-Q34CQJXG.js";import"./chunk-GKHVFCKF.js";import{f as p,m as l,o as n}from"./chunk-6V2G2Z5W.js";l();n();var t=p(O());var k=p(S());P();W();$();l();n();var G=[{title:"wallet_extension_settings_select_text_switch_servers",type:"NETWORK_CHANGE"},{type:"LINE"},{title:"wallet_extension_clearcache_expand_clearcache",type:"CLEAN"},{title:"extension_wallet_advanced_select_clear",type:"CLEAR_PENGDING_TX"}];l();n();var o={advanced:"_advanced_1079x_1",list:"_list_1079x_1",item:"_item_1079x_4",title:"_title_1079x_18",arrow:"_arrow_1079x_22",disabled:"_disabled_1079x_25",line:"_line_1079x_34"};var B=()=>{let{isRpcMode:I}=y(),[L,d]=(0,t.useState)(!1),h=({type:i})=>{switch(i){case"CLEAN":c.warn({alignBottom:!1,title:e("wallet_extension_clearcache_modaltitle_sure_toclear"),text:e("wallet_extension_clearcache_modaldesc_sure_toclear"),cancelText:e("wallet_extension_btn_general_cancel"),confirmText:e("wallet_extension_btn_general_confirm"),onConfirm:()=>{chrome.runtime.reload()}});break;case"CLEAR_PENGDING_TX":c.warn({alignBottom:!1,title:e("extension_wallet_advanced_title_clear_confirm"),text:e("extension_wallet_advanced_subtitle_clear_confirm"),cancelText:e("wallet_extension_btn_general_cancel"),confirmText:e("wallet_extension_btn_general_confirm"),onConfirm:async()=>{await N().rpcEvmClearPendingTransaction(),x.success({title:e("extension_wallet_advanced_notification_cleared")})}});break;case"NETWORK_CHANGE":d(!0);break;default:break}},D=G.map((i,r)=>{let{type:_,title:m}=i,s=_==="CLEAR_PENGDING_TX"&&!I;return _==="LINE"?t.default.createElement("div",{key:`${_}${r}`,className:o.line}):t.default.createElement("div",{key:`${_}${r}`,className:`${o.item} ${s&&o.disabled}`,onClick:()=>{!s&&h(i)}},t.default.createElement("div",{className:o.title},s?t.default.createElement(g,{title:e("extension_wallet_advanced_tooltips_only_available")},e(m)):t.default.createElement(E.Text,{strong:500},e(m))),t.default.createElement(f,{className:(0,k.default)("okds-arrow-chevron-right-centered-md",o.arrow)}))});return t.default.createElement("div",{className:o.advanced},t.default.createElement(A,{title:e("extension_wallet_advanced_grouptitle_advanced"),closeable:!1}),t.default.createElement("div",{className:o.list},D),t.default.createElement(T.FooterActions,null,t.default.createElement(a,{block:!0,size:a.SIZE.lg,category:a.CATEGORY.outline,type:a.TYPE.primary,icon:"okx-wallet-plugin-import-wallet",iconType:a.ICON_POSITION.leading,onClick:()=>{w(),window.logStateString((i,r)=>{i?v(e("wallet_settings_state_logs_errortip_statelog_error")):C(`${e("wallet_settings_state_logs_maintitle_wallet_state_logs")}.json`,r)})}},e("wallet_extension_preferences_btn_download_logs"))),t.default.createElement(b,{visible:L,onClose:()=>{d(!1)}}))},se=B;export{se as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=Advanced-NFA5NFUG.js.map