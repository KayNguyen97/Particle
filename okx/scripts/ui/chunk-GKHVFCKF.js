import{b as ur,c as or,d as fr,g as hr,m as I,o as B}from"./chunk-6V2G2Z5W.js";var nr={};fr(nr,{Buffer:()=>f,INSPECT_MAX_BYTES:()=>J,SlowBuffer:()=>yr,isBuffer:()=>rr,kMaxLength:()=>sr});function H(){v=!0;for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,i=n.length;r<i;++r)A[r]=n[r],E[n.charCodeAt(r)]=r;E["-".charCodeAt(0)]=62,E["_".charCodeAt(0)]=63}function pr(n){v||H();var r,i,t,e,u,o,h=n.length;if(h%4>0)throw new Error("Invalid string. Length must be a multiple of 4");u=n[h-2]==="="?2:n[h-1]==="="?1:0,o=new ar(h*3/4-u),t=u>0?h-4:h;var a=0;for(r=0,i=0;r<t;r+=4,i+=3)e=E[n.charCodeAt(r)]<<18|E[n.charCodeAt(r+1)]<<12|E[n.charCodeAt(r+2)]<<6|E[n.charCodeAt(r+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=e&255;return u===2?(e=E[n.charCodeAt(r)]<<2|E[n.charCodeAt(r+1)]>>4,o[a++]=e&255):u===1&&(e=E[n.charCodeAt(r)]<<10|E[n.charCodeAt(r+1)]<<4|E[n.charCodeAt(r+2)]>>2,o[a++]=e>>8&255,o[a++]=e&255),o}function cr(n){return A[n>>18&63]+A[n>>12&63]+A[n>>6&63]+A[n&63]}function lr(n,r,i){for(var t,e=[],u=r;u<i;u+=3)t=(n[u]<<16)+(n[u+1]<<8)+n[u+2],e.push(cr(t));return e.join("")}function L(n){v||H();for(var r,i=n.length,t=i%3,e="",u=[],o=16383,h=0,a=i-t;h<a;h+=o)u.push(lr(n,h,h+o>a?a:h+o));return t===1?(r=n[i-1],e+=A[r>>2],e+=A[r<<4&63],e+="=="):t===2&&(r=(n[i-2]<<8)+n[i-1],e+=A[r>>10],e+=A[r>>4&63],e+=A[r<<2&63],e+="="),u.push(e),u.join("")}function D(n,r,i,t,e){var u,o,h=e*8-t-1,a=(1<<h)-1,c=a>>1,l=-7,p=i?e-1:0,F=i?-1:1,w=n[r+p];for(p+=F,u=w&(1<<-l)-1,w>>=-l,l+=h;l>0;u=u*256+n[r+p],p+=F,l-=8);for(o=u&(1<<-l)-1,u>>=-l,l+=t;l>0;o=o*256+n[r+p],p+=F,l-=8);if(u===0)u=1-c;else{if(u===a)return o?NaN:(w?-1:1)*(1/0);o=o+Math.pow(2,t),u=u-c}return(w?-1:1)*o*Math.pow(2,u-t)}function V(n,r,i,t,e,u){var o,h,a,c=u*8-e-1,l=(1<<c)-1,p=l>>1,F=e===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=t?0:u-1,m=t?1:-1,er=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(h=isNaN(r)?1:0,o=l):(o=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-o))<1&&(o--,a*=2),o+p>=1?r+=F/a:r+=F*Math.pow(2,1-p),r*a>=2&&(o++,a/=2),o+p>=l?(h=0,o=l):o+p>=1?(h=(r*a-1)*Math.pow(2,e),o=o+p):(h=r*Math.pow(2,p-1)*Math.pow(2,e),o=0));e>=8;n[i+w]=h&255,w+=m,h/=256,e-=8);for(o=o<<e|h,c+=e;c>0;n[i+w]=o&255,w+=m,o/=256,c-=8);n[i+w-m]|=er*128}function U(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function R(n,r){if(U()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(r),n.__proto__=f.prototype):(n===null&&(n=new f(r)),n.length=r),n}function f(n,r,i){if(!f.TYPED_ARRAY_SUPPORT&&!(this instanceof f))return new f(n,r,i);if(typeof n=="number"){if(typeof r=="string")throw new Error("If encoding is specified then the first argument must be a string");return k(this,n)}return X(this,n,r,i)}function X(n,r,i,t){if(typeof r=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer?Fr(n,r,i,t):typeof r=="string"?Er(n,r,i):Ar(n,r)}function z(n){if(typeof n!="number")throw new TypeError('"size" argument must be a number');if(n<0)throw new RangeError('"size" argument must not be negative')}function wr(n,r,i,t){return z(r),r<=0?R(n,r):i!==void 0?typeof t=="string"?R(n,r).fill(i,t):R(n,r).fill(i):R(n,r)}function k(n,r){if(z(r),n=R(n,r<0?0:N(r)|0),!f.TYPED_ARRAY_SUPPORT)for(var i=0;i<r;++i)n[i]=0;return n}function Er(n,r,i){if((typeof i!="string"||i==="")&&(i="utf8"),!f.isEncoding(i))throw new TypeError('"encoding" must be a valid string encoding');var t=O(r,i)|0;n=R(n,t);var e=n.write(r,i);return e!==t&&(n=n.slice(0,e)),n}function M(n,r){var i=r.length<0?0:N(r.length)|0;n=R(n,i);for(var t=0;t<i;t+=1)n[t]=r[t]&255;return n}function Fr(n,r,i,t){if(r.byteLength,i<0||r.byteLength<i)throw new RangeError("'offset' is out of bounds");if(r.byteLength<i+(t||0))throw new RangeError("'length' is out of bounds");return i===void 0&&t===void 0?r=new Uint8Array(r):t===void 0?r=new Uint8Array(r,i):r=new Uint8Array(r,i,t),f.TYPED_ARRAY_SUPPORT?(n=r,n.__proto__=f.prototype):n=M(n,r),n}function Ar(n,r){if(y(r)){var i=N(r.length)|0;return n=R(n,i),n.length===0||r.copy(n,0,0,i),n}if(r){if(typeof ArrayBuffer<"u"&&r.buffer instanceof ArrayBuffer||"length"in r)return typeof r.length!="number"||dr(r.length)?R(n,0):M(n,r);if(r.type==="Buffer"&&G(r.data))return M(n,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function N(n){if(n>=U())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+U().toString(16)+" bytes");return n|0}function yr(n){return+n!=n&&(n=0),f.alloc(+n)}function y(n){return!!(n!=null&&n._isBuffer)}function O(n,r){if(y(n))return n.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(n)||n instanceof ArrayBuffer))return n.byteLength;typeof n!="string"&&(n=""+n);var i=n.length;if(i===0)return 0;for(var t=!1;;)switch(r){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":case void 0:return T(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i*2;case"hex":return i>>>1;case"base64":return b(n).length;default:if(t)return T(n).length;r=(""+r).toLowerCase(),t=!0}}function Rr(n,r,i){var t=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((i===void 0||i>this.length)&&(i=this.length),i<=0)||(i>>>=0,r>>>=0,i<=r))return"";for(n||(n="utf8");;)switch(n){case"hex":return Cr(this,r,i);case"utf8":case"utf-8":return K(this,r,i);case"ascii":return Dr(this,r,i);case"latin1":case"binary":return Yr(this,r,i);case"base64":return Ur(this,r,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pr(this,r,i);default:if(t)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),t=!0}}function _(n,r,i){var t=n[r];n[r]=n[i],n[i]=t}function Z(n,r,i,t,e){if(n.length===0)return-1;if(typeof i=="string"?(t=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,isNaN(i)&&(i=e?0:n.length-1),i<0&&(i=n.length+i),i>=n.length){if(e)return-1;i=n.length-1}else if(i<0)if(e)i=0;else return-1;if(typeof r=="string"&&(r=f.from(r,t)),y(r))return r.length===0?-1:d(n,r,i,t,e);if(typeof r=="number")return r=r&255,f.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?e?Uint8Array.prototype.indexOf.call(n,r,i):Uint8Array.prototype.lastIndexOf.call(n,r,i):d(n,[r],i,t,e);throw new TypeError("val must be string, number or Buffer")}function d(n,r,i,t,e){var u=1,o=n.length,h=r.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(n.length<2||r.length<2)return-1;u=2,o/=2,h/=2,i/=2}function a(w,m){return u===1?w[m]:w.readUInt16BE(m*u)}var c;if(e){var l=-1;for(c=i;c<o;c++)if(a(n,c)===a(r,l===-1?0:c-l)){if(l===-1&&(l=c),c-l+1===h)return l*u}else l!==-1&&(c-=c-l),l=-1}else for(i+h>o&&(i=o-h),c=i;c>=0;c--){for(var p=!0,F=0;F<h;F++)if(a(n,c+F)!==a(r,F)){p=!1;break}if(p)return c}return-1}function _r(n,r,i,t){i=Number(i)||0;var e=n.length-i;t?(t=Number(t),t>e&&(t=e)):t=e;var u=r.length;if(u%2!==0)throw new TypeError("Invalid hex string");t>u/2&&(t=u/2);for(var o=0;o<t;++o){var h=parseInt(r.substr(o*2,2),16);if(isNaN(h))return o;n[i+o]=h}return o}function gr(n,r,i,t){return P(T(r,n.length-i),n,i,t)}function q(n,r,i,t){return P(Nr(r),n,i,t)}function mr(n,r,i,t){return q(n,r,i,t)}function Ir(n,r,i,t){return P(b(r),n,i,t)}function Br(n,r,i,t){return P(Lr(r,n.length-i),n,i,t)}function Ur(n,r,i){return r===0&&i===n.length?L(n):L(n.slice(r,i))}function K(n,r,i){i=Math.min(n.length,i);for(var t=[],e=r;e<i;){var u=n[e],o=null,h=u>239?4:u>223?3:u>191?2:1;if(e+h<=i){var a,c,l,p;switch(h){case 1:u<128&&(o=u);break;case 2:a=n[e+1],(a&192)===128&&(p=(u&31)<<6|a&63,p>127&&(o=p));break;case 3:a=n[e+1],c=n[e+2],(a&192)===128&&(c&192)===128&&(p=(u&15)<<12|(a&63)<<6|c&63,p>2047&&(p<55296||p>57343)&&(o=p));break;case 4:a=n[e+1],c=n[e+2],l=n[e+3],(a&192)===128&&(c&192)===128&&(l&192)===128&&(p=(u&15)<<18|(a&63)<<12|(c&63)<<6|l&63,p>65535&&p<1114112&&(o=p))}}o===null?(o=65533,h=1):o>65535&&(o-=65536,t.push(o>>>10&1023|55296),o=56320|o&1023),t.push(o),e+=h}return Tr(t)}function Tr(n){var r=n.length;if(r<=W)return String.fromCharCode.apply(String,n);for(var i="",t=0;t<r;)i+=String.fromCharCode.apply(String,n.slice(t,t+=W));return i}function Dr(n,r,i){var t="";i=Math.min(n.length,i);for(var e=r;e<i;++e)t+=String.fromCharCode(n[e]&127);return t}function Yr(n,r,i){var t="";i=Math.min(n.length,i);for(var e=r;e<i;++e)t+=String.fromCharCode(n[e]);return t}function Cr(n,r,i){var t=n.length;(!r||r<0)&&(r=0),(!i||i<0||i>t)&&(i=t);for(var e="",u=r;u<i;++u)e+=kr(n[u]);return e}function Pr(n,r,i){for(var t=n.slice(r,i),e="",u=0;u<t.length;u+=2)e+=String.fromCharCode(t[u]+t[u+1]*256);return e}function x(n,r,i){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+r>i)throw new RangeError("Trying to access beyond buffer length")}function s(n,r,i,t,e,u){if(!y(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>e||r<u)throw new RangeError('"value" argument is out of bounds');if(i+t>n.length)throw new RangeError("Index out of range")}function Y(n,r,i,t){r<0&&(r=65535+r+1);for(var e=0,u=Math.min(n.length-i,2);e<u;++e)n[i+e]=(r&255<<8*(t?e:1-e))>>>(t?e:1-e)*8}function C(n,r,i,t){r<0&&(r=4294967295+r+1);for(var e=0,u=Math.min(n.length-i,4);e<u;++e)n[i+e]=r>>>(t?e:3-e)*8&255}function Q(n,r,i,t,e,u){if(i+t>n.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function $(n,r,i,t,e){return e||Q(n,r,i,4),V(n,r,i,t,23,4),i+4}function j(n,r,i,t,e){return e||Q(n,r,i,8),V(n,r,i,t,52,8),i+8}function Mr(n){if(n=vr(n).replace(Sr,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function vr(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function kr(n){return n<16?"0"+n.toString(16):n.toString(16)}function T(n,r){r=r||1/0;for(var i,t=n.length,e=null,u=[],o=0;o<t;++o){if(i=n.charCodeAt(o),i>55295&&i<57344){if(!e){if(i>56319){(r-=3)>-1&&u.push(239,191,189);continue}else if(o+1===t){(r-=3)>-1&&u.push(239,191,189);continue}e=i;continue}if(i<56320){(r-=3)>-1&&u.push(239,191,189),e=i;continue}i=(e-55296<<10|i-56320)+65536}else e&&(r-=3)>-1&&u.push(239,191,189);if(e=null,i<128){if((r-=1)<0)break;u.push(i)}else if(i<2048){if((r-=2)<0)break;u.push(i>>6|192,i&63|128)}else if(i<65536){if((r-=3)<0)break;u.push(i>>12|224,i>>6&63|128,i&63|128)}else if(i<1114112){if((r-=4)<0)break;u.push(i>>18|240,i>>12&63|128,i>>6&63|128,i&63|128)}else throw new Error("Invalid code point")}return u}function Nr(n){for(var r=[],i=0;i<n.length;++i)r.push(n.charCodeAt(i)&255);return r}function Lr(n,r){for(var i,t,e,u=[],o=0;o<n.length&&!((r-=2)<0);++o)i=n.charCodeAt(o),t=i>>8,e=i%256,u.push(e),u.push(t);return u}function b(n){return pr(Mr(n))}function P(n,r,i,t){for(var e=0;e<t&&!(e+i>=r.length||e>=n.length);++e)r[e+i]=n[e];return e}function dr(n){return n!==n}function rr(n){return n!=null&&(!!n._isBuffer||ir(n)||Wr(n))}function ir(n){return!!n.constructor&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}function Wr(n){return typeof n.readFloatLE=="function"&&typeof n.slice=="function"&&ir(n.slice(0,0))}var A,E,ar,v,xr,G,J,sr,W,Sr,tr=ur(()=>{I();B();A=[],E=[],ar=typeof Uint8Array<"u"?Uint8Array:Array,v=!1;xr={}.toString,G=Array.isArray||function(n){return xr.call(n)=="[object Array]"};J=50;f.TYPED_ARRAY_SUPPORT=globalThis.TYPED_ARRAY_SUPPORT!==void 0?globalThis.TYPED_ARRAY_SUPPORT:!0;sr=U();f.poolSize=8192;f._augment=function(n){return n.__proto__=f.prototype,n};f.from=function(n,r,i){return X(null,n,r,i)};f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array);f.alloc=function(n,r,i){return wr(null,n,r,i)};f.allocUnsafe=function(n){return k(null,n)};f.allocUnsafeSlow=function(n){return k(null,n)};f.isBuffer=rr;f.compare=function(r,i){if(!y(r)||!y(i))throw new TypeError("Arguments must be Buffers");if(r===i)return 0;for(var t=r.length,e=i.length,u=0,o=Math.min(t,e);u<o;++u)if(r[u]!==i[u]){t=r[u],e=i[u];break}return t<e?-1:e<t?1:0};f.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};f.concat=function(r,i){if(!G(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return f.alloc(0);var t;if(i===void 0)for(i=0,t=0;t<r.length;++t)i+=r[t].length;var e=f.allocUnsafe(i),u=0;for(t=0;t<r.length;++t){var o=r[t];if(!y(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(e,u),u+=o.length}return e};f.byteLength=O;f.prototype._isBuffer=!0;f.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var i=0;i<r;i+=2)_(this,i,i+1);return this};f.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var i=0;i<r;i+=4)_(this,i,i+3),_(this,i+1,i+2);return this};f.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var i=0;i<r;i+=8)_(this,i,i+7),_(this,i+1,i+6),_(this,i+2,i+5),_(this,i+3,i+4);return this};f.prototype.toString=function(){var r=this.length|0;return r===0?"":arguments.length===0?K(this,0,r):Rr.apply(this,arguments)};f.prototype.equals=function(r){if(!y(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:f.compare(this,r)===0};f.prototype.inspect=function(){var r="",i=J;return this.length>0&&(r=this.toString("hex",0,i).match(/.{2}/g).join(" "),this.length>i&&(r+=" ... ")),"<Buffer "+r+">"};f.prototype.compare=function(r,i,t,e,u){if(!y(r))throw new TypeError("Argument must be a Buffer");if(i===void 0&&(i=0),t===void 0&&(t=r?r.length:0),e===void 0&&(e=0),u===void 0&&(u=this.length),i<0||t>r.length||e<0||u>this.length)throw new RangeError("out of range index");if(e>=u&&i>=t)return 0;if(e>=u)return-1;if(i>=t)return 1;if(i>>>=0,t>>>=0,e>>>=0,u>>>=0,this===r)return 0;for(var o=u-e,h=t-i,a=Math.min(o,h),c=this.slice(e,u),l=r.slice(i,t),p=0;p<a;++p)if(c[p]!==l[p]){o=c[p],h=l[p];break}return o<h?-1:h<o?1:0};f.prototype.includes=function(r,i,t){return this.indexOf(r,i,t)!==-1};f.prototype.indexOf=function(r,i,t){return Z(this,r,i,t,!0)};f.prototype.lastIndexOf=function(r,i,t){return Z(this,r,i,t,!1)};f.prototype.write=function(r,i,t,e){if(i===void 0)e="utf8",t=this.length,i=0;else if(t===void 0&&typeof i=="string")e=i,t=this.length,i=0;else if(isFinite(i))i=i|0,isFinite(t)?(t=t|0,e===void 0&&(e="utf8")):(e=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var u=this.length-i;if((t===void 0||t>u)&&(t=u),r.length>0&&(t<0||i<0)||i>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");for(var o=!1;;)switch(e){case"hex":return _r(this,r,i,t);case"utf8":case"utf-8":return gr(this,r,i,t);case"ascii":return q(this,r,i,t);case"latin1":case"binary":return mr(this,r,i,t);case"base64":return Ir(this,r,i,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Br(this,r,i,t);default:if(o)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),o=!0}};f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};W=4096;f.prototype.slice=function(r,i){var t=this.length;r=~~r,i=i===void 0?t:~~i,r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),i<0?(i+=t,i<0&&(i=0)):i>t&&(i=t),i<r&&(i=r);var e;if(f.TYPED_ARRAY_SUPPORT)e=this.subarray(r,i),e.__proto__=f.prototype;else{var u=i-r;e=new f(u,void 0);for(var o=0;o<u;++o)e[o]=this[o+r]}return e};f.prototype.readUIntLE=function(r,i,t){r=r|0,i=i|0,t||x(r,i,this.length);for(var e=this[r],u=1,o=0;++o<i&&(u*=256);)e+=this[r+o]*u;return e};f.prototype.readUIntBE=function(r,i,t){r=r|0,i=i|0,t||x(r,i,this.length);for(var e=this[r+--i],u=1;i>0&&(u*=256);)e+=this[r+--i]*u;return e};f.prototype.readUInt8=function(r,i){return i||x(r,1,this.length),this[r]};f.prototype.readUInt16LE=function(r,i){return i||x(r,2,this.length),this[r]|this[r+1]<<8};f.prototype.readUInt16BE=function(r,i){return i||x(r,2,this.length),this[r]<<8|this[r+1]};f.prototype.readUInt32LE=function(r,i){return i||x(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};f.prototype.readUInt32BE=function(r,i){return i||x(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};f.prototype.readIntLE=function(r,i,t){r=r|0,i=i|0,t||x(r,i,this.length);for(var e=this[r],u=1,o=0;++o<i&&(u*=256);)e+=this[r+o]*u;return u*=128,e>=u&&(e-=Math.pow(2,8*i)),e};f.prototype.readIntBE=function(r,i,t){r=r|0,i=i|0,t||x(r,i,this.length);for(var e=i,u=1,o=this[r+--e];e>0&&(u*=256);)o+=this[r+--e]*u;return u*=128,o>=u&&(o-=Math.pow(2,8*i)),o};f.prototype.readInt8=function(r,i){return i||x(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};f.prototype.readInt16LE=function(r,i){i||x(r,2,this.length);var t=this[r]|this[r+1]<<8;return t&32768?t|4294901760:t};f.prototype.readInt16BE=function(r,i){i||x(r,2,this.length);var t=this[r+1]|this[r]<<8;return t&32768?t|4294901760:t};f.prototype.readInt32LE=function(r,i){return i||x(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};f.prototype.readInt32BE=function(r,i){return i||x(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};f.prototype.readFloatLE=function(r,i){return i||x(r,4,this.length),D(this,r,!0,23,4)};f.prototype.readFloatBE=function(r,i){return i||x(r,4,this.length),D(this,r,!1,23,4)};f.prototype.readDoubleLE=function(r,i){return i||x(r,8,this.length),D(this,r,!0,52,8)};f.prototype.readDoubleBE=function(r,i){return i||x(r,8,this.length),D(this,r,!1,52,8)};f.prototype.writeUIntLE=function(r,i,t,e){if(r=+r,i=i|0,t=t|0,!e){var u=Math.pow(2,8*t)-1;s(this,r,i,t,u,0)}var o=1,h=0;for(this[i]=r&255;++h<t&&(o*=256);)this[i+h]=r/o&255;return i+t};f.prototype.writeUIntBE=function(r,i,t,e){if(r=+r,i=i|0,t=t|0,!e){var u=Math.pow(2,8*t)-1;s(this,r,i,t,u,0)}var o=t-1,h=1;for(this[i+o]=r&255;--o>=0&&(h*=256);)this[i+o]=r/h&255;return i+t};f.prototype.writeUInt8=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,1,255,0),f.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[i]=r&255,i+1};f.prototype.writeUInt16LE=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[i]=r&255,this[i+1]=r>>>8):Y(this,r,i,!0),i+2};f.prototype.writeUInt16BE=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[i]=r>>>8,this[i+1]=r&255):Y(this,r,i,!1),i+2};f.prototype.writeUInt32LE=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[i+3]=r>>>24,this[i+2]=r>>>16,this[i+1]=r>>>8,this[i]=r&255):C(this,r,i,!0),i+4};f.prototype.writeUInt32BE=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255):C(this,r,i,!1),i+4};f.prototype.writeIntLE=function(r,i,t,e){if(r=+r,i=i|0,!e){var u=Math.pow(2,8*t-1);s(this,r,i,t,u-1,-u)}var o=0,h=1,a=0;for(this[i]=r&255;++o<t&&(h*=256);)r<0&&a===0&&this[i+o-1]!==0&&(a=1),this[i+o]=(r/h>>0)-a&255;return i+t};f.prototype.writeIntBE=function(r,i,t,e){if(r=+r,i=i|0,!e){var u=Math.pow(2,8*t-1);s(this,r,i,t,u-1,-u)}var o=t-1,h=1,a=0;for(this[i+o]=r&255;--o>=0&&(h*=256);)r<0&&a===0&&this[i+o+1]!==0&&(a=1),this[i+o]=(r/h>>0)-a&255;return i+t};f.prototype.writeInt8=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,1,127,-128),f.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[i]=r&255,i+1};f.prototype.writeInt16LE=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[i]=r&255,this[i+1]=r>>>8):Y(this,r,i,!0),i+2};f.prototype.writeInt16BE=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[i]=r>>>8,this[i+1]=r&255):Y(this,r,i,!1),i+2};f.prototype.writeInt32LE=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[i]=r&255,this[i+1]=r>>>8,this[i+2]=r>>>16,this[i+3]=r>>>24):C(this,r,i,!0),i+4};f.prototype.writeInt32BE=function(r,i,t){return r=+r,i=i|0,t||s(this,r,i,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),f.TYPED_ARRAY_SUPPORT?(this[i]=r>>>24,this[i+1]=r>>>16,this[i+2]=r>>>8,this[i+3]=r&255):C(this,r,i,!1),i+4};f.prototype.writeFloatLE=function(r,i,t){return $(this,r,i,!0,t)};f.prototype.writeFloatBE=function(r,i,t){return $(this,r,i,!1,t)};f.prototype.writeDoubleLE=function(r,i,t){return j(this,r,i,!0,t)};f.prototype.writeDoubleBE=function(r,i,t){return j(this,r,i,!1,t)};f.prototype.copy=function(r,i,t,e){if(t||(t=0),!e&&e!==0&&(e=this.length),i>=r.length&&(i=r.length),i||(i=0),e>0&&e<t&&(e=t),e===t||r.length===0||this.length===0)return 0;if(i<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("sourceStart out of bounds");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),r.length-i<e-t&&(e=r.length-i+t);var u=e-t,o;if(this===r&&t<i&&i<e)for(o=u-1;o>=0;--o)r[o+i]=this[o+t];else if(u<1e3||!f.TYPED_ARRAY_SUPPORT)for(o=0;o<u;++o)r[o+i]=this[o+t];else Uint8Array.prototype.set.call(r,this.subarray(t,t+u),i);return u};f.prototype.fill=function(r,i,t,e){if(typeof r=="string"){if(typeof i=="string"?(e=i,i=0,t=this.length):typeof t=="string"&&(e=t,t=this.length),r.length===1){var u=r.charCodeAt(0);u<256&&(r=u)}if(e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!f.isEncoding(e))throw new TypeError("Unknown encoding: "+e)}else typeof r=="number"&&(r=r&255);if(i<0||this.length<i||this.length<t)throw new RangeError("Out of range index");if(t<=i)return this;i=i>>>0,t=t===void 0?this.length:t>>>0,r||(r=0);var o;if(typeof r=="number")for(o=i;o<t;++o)this[o]=r;else{var h=y(r)?r:T(new f(r,e).toString()),a=h.length;for(o=0;o<t-i;++o)this[o+i]=h[o%a]}return this};Sr=/[^+\/0-9A-Za-z-_]/g});var Hr=or((Xr,S)=>{I();B();var g=(tr(),hr(nr));if(g&&g.default){S.exports=g.default;for(let n in g)S.exports[n]=g[n]}else g&&(S.exports=g)});export{f as a,rr as b,tr as c,Hr as d};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-GKHVFCKF.js.map