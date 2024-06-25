import{c as l}from"./chunk-2CPFAAZ7.js";import{C as g,v as n}from"./chunk-CVJKAN5R.js";import{o as a}from"./chunk-GXQ645QR.js";import{V as t}from"./chunk-C2H3SRET.js";import{a as f}from"./chunk-V4YVDLI4.js";import{f as m,m as c,o as s}from"./chunk-6V2G2Z5W.js";c();s();var u=m(f());g();var p=({text:o})=>(0,u.useCallback)(()=>new Promise((r,i)=>{a.prompt({title:n("extension_signature_text_at_risk"),infoType:a.Prompt.INFO_TYPE.warn,text:o,alignBottom:!1,hideCloseBtn:!0,confirmBtnProps:{size:t.SIZE.lg,type:t.TYPE.highlight,category:t.CATEGORY.fill},cancelBtnProps:{size:t.SIZE.lg,category:t.CATEGORY.outline},onCancel(e){r(),e.destroy()},cancelText:n("extension_signature_text_continue"),onConfirm(e){i(),e.destroy()},confirmText:n("extension_signature_text_reject")})}),[o]),C=({text:o,handleConfirm:r,handleCancel:i})=>{let e=p({text:o});return{actionType:l.ACTION_TYPE.CONFIRM,type:t.TYPE.red,async onClick(){try{await e(),await r()}catch{await i()}}}},E=C;export{E as a};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-P34A6LS4.js.map
