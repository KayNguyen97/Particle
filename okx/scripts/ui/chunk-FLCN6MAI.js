import{a as d}from"./chunk-XKG5DY6K.js";import{j as c,k as a,m as h}from"./chunk-GXQ645QR.js";import{a as E}from"./chunk-V4YVDLI4.js";import{f as T,m as n,o}from"./chunk-6V2G2Z5W.js";n();o();var p={LEVEL_ONE:5,LEVEL_TWO:30,LEVEL_THREE:120,LEVEL_FOUR:360,LEVEL_FIVE:720,LEVEL_MAX:9999999999},r={AUTO:"auto",LIGHT:"light",DARK:"dark"},L={auto:"wallet_extension_tab_appearance_follow_system",light:"wallet_extension_tab_appearance_light_mode",dark:"wallet_extension_tab_apperance_dark_mode"};n();o();var i=T(E());function m(){return window.matchMedia("(prefers-color-scheme: dark)").matches?r.DARK:r.LIGHT}function u(e,t){return t==="auto"&&(t=m()),typeof e=="string"?e.replace(/-light\.|-dark\./g,`-${t}.`):e[t].includes("/cdn/assets/")?`${d()}${e[t]}`:e[t]}function l(){return window.localStorage.getItem("theme")||"auto"}function V(){let[e,t]=(0,i.useState)("auto");return(0,i.useEffect)(()=>{t(l())},[]),e}function f(e){let t=e==="auto"?m():e;a(t),window.localStorage.setItem("theme",e)}function S(e){let t=h();return u(e,t)}function I(e){let t=c();return u(e,t)}function H(){let e=l();if(e===r.AUTO){let t=window.matchMedia("(prefers-color-scheme: dark)"),g=window.matchMedia("(prefers-color-scheme: light)");f("auto"),t.addEventListener("change",({matches:s})=>{s&&a(r.DARK)}),g.addEventListener("change",({matches:s})=>{s&&a(r.LIGHT)})}else a(e)}export{p as a,r as b,L as c,l as d,V as e,f,S as g,I as h,H as i};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-FLCN6MAI.js.map