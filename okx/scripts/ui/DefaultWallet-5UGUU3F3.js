import"./chunk-33SB5WSN.js";import{b as d,c as b}from"./chunk-BBN3UGKM.js";import{e as T}from"./chunk-UEO7AURD.js";import"./chunk-DXFO7P35.js";import{a as f}from"./chunk-JSAFBAMQ.js";import{b as y}from"./chunk-A336VZZF.js";import"./chunk-XEOGXIVD.js";import"./chunk-PCGRDRHF.js";import{p as l}from"./chunk-IU3TYIWS.js";import"./chunk-VPBQLZCI.js";import"./chunk-FRDOFRM7.js";import"./chunk-X2LENRE7.js";import"./chunk-O4EDZSHP.js";import"./chunk-HU3KBV5G.js";import{b as N}from"./chunk-6ZPGW3YM.js";import"./chunk-ZKDHZDUE.js";import"./chunk-4UESFVD2.js";import"./chunk-D7KW4FFX.js";import"./chunk-RAXGEVRQ.js";import"./chunk-S4N75E3H.js";import"./chunk-JIRWXBHS.js";import"./chunk-3TVEFIPW.js";import"./chunk-52GWQSZH.js";import"./chunk-TPSXCUGD.js";import{c as t}from"./chunk-2YLR7R2N.js";import"./chunk-MVLY6WUP.js";import"./chunk-ZEAKIEIQ.js";import"./chunk-5KSDRGLW.js";import"./chunk-DQTCC3FF.js";import"./chunk-O5LVHMPV.js";import{C as h,v as a}from"./chunk-CVJKAN5R.js";import"./chunk-A5Y2KVNP.js";import{r as m}from"./chunk-GXQ645QR.js";import"./chunk-DQ2NYVYI.js";import{c as w}from"./chunk-C2H3SRET.js";import{a as O}from"./chunk-V4YVDLI4.js";import"./chunk-TW6D7CWA.js";import"./chunk-3T5D6KAV.js";import"./chunk-MAWXDEJZ.js";import"./chunk-Z37GURZ6.js";import"./chunk-IYYFWVWL.js";import"./chunk-RYNAOZ73.js";import"./chunk-Q34CQJXG.js";import"./chunk-GKHVFCKF.js";import{f as _,m as r,o as n}from"./chunk-6V2G2Z5W.js";r();n();var e=_(O());var v=_(w());var C=_(N());h();r();n();var i={textWrapper:"_textWrapper_v8s21_1",title:"_title_v8s21_4",subTitle:"_subTitle_v8s21_9",content:"_content_v8s21_12",option:"_option_v8s21_15",left:"_left_v8s21_23",optionTitle:"_optionTitle_v8s21_26",optionSubTitle:"_optionSubTitle_v8s21_29",select:"_select_v8s21_32",active:"_active_v8s21_37"};var I=()=>{let p=(0,C.useDispatch)(),[x]=b(d.defaultWallet),k=[{title:a("wallet_extension_default_radio_okx_wallet"),subTitle:a("wallet_extension_default_radio_okx_preferred"),type:"OKX"},{title:a("wallet_extension_default_radio_other_wallet"),subTitle:a("wallet_extension_default_radio_no_okx"),type:"OTHER"},{title:a("wallet_extension_default_radio_always_ask"),subTitle:a("wallet_extension_default_radio_reselect"),type:"HIJACK"}],u=(0,e.useCallback)(o=>{let s;switch(o){case"OKX":s="okx";break;case"OTHER":s="otherwallet";break;case"HIJACK":s="askeverytime";break;default:break}T({button_name:s}),p(y(o))},[p]),E=(0,e.useCallback)((o,s)=>{let c=x===o.type;return e.default.createElement(t.FlexBox,{key:s,className:(0,v.default)(i.option,{[i.active]:c}),onClick:()=>u(o.type),align:t.ALIGN.center},e.default.createElement(t.FlexBox,{className:i.left,direction:t.DIRECTION.vertical},e.default.createElement(l.Text,{size:l.SIZE.md,strong:500,className:i.optionTitle},o.title),o.subTitle&&e.default.createElement(l.Text,{size:l.SIZE.xs,type:l.TYPE.secondary,className:i.optionSubTitle},o.subTitle)),c&&e.default.createElement(t.FlexBox,null,e.default.createElement(m.Circle,{checked:!0})))},[x,u]);return e.default.createElement(t.Container,null,e.default.createElement(f,{closeable:!1,bordered:!1}),e.default.createElement(t.FlexBox,{className:i.textWrapper,direction:t.DIRECTION.vertical},e.default.createElement(l.Text,{strong:700,className:i.title},a("wallet_extension_default_title_set_as_default")),e.default.createElement(l.Text,{size:l.SIZE.sm,type:l.TYPE.secondary,className:i.subTitle},a("wallet_extension_default_subtitle_set_as_default"))),e.default.createElement(t.FlexBox,{direction:t.DIRECTION.vertical,className:i.content},k.map((o,s)=>E(o,s))))},U=I;export{U as default};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=DefaultWallet-5UGUU3F3.js.map