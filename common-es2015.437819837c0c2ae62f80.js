(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{BkeJ:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var i=t("8Y7J");let r=(()=>{class e{constructor(){this.items=[]}addToCart(e){this.items.push(e)}getItems(){return this.items}clearCart(){return this.items=[],this.items}deleteItem(e){const n=this.items.indexOf(e);return this.items.splice(n,1),this.items}}return e.ngInjectableDef=i.Mb({factory:function(){return new e},token:e,providedIn:"root"}),e})()},Dl6n:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return s}));const i=(e,n)=>null!==n.closest(e),r=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,o=e=>{const n={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>n[e]=!0),n},a=/^[a-z][a-z0-9+\-.]*:/,s=async(e,n,t)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const i=document.querySelector("ion-router");if(i)return null!=n&&n.preventDefault(),i.push(e,t)}return!1}},TMBv:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(e,n,t)=>{const i=`${e*n/t-e}ms`,r=2*Math.PI*n/t;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,n,t)=>{const i=n/t,r=`${e*i-e}ms`,o=2*Math.PI*i;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,n)=>({r:6,style:{left:`${9-9*n}px`,"animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,n,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${e*n/t-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,n,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${e*n/t-e}ms`}})}}},Uch9:function(e,n,t){"use strict";t.d(n,"a",(function(){return w})),t.d(n,"b",(function(){return x})),t.d(n,"c",(function(){return g})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return o}));var i=t("54nT"),r=t("kBU6");const o=e=>new Promise((n,t)=>{Object(i.l)(()=>{a(e),s(e).then(t=>{t.animation&&t.animation.destroy(),c(e),n(t)},n=>{c(e),t(n)})})}),a=e=>{const n=e.enteringEl,t=e.leavingEl;E(n,t,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),b(n,!1),t&&b(t,!1)},s=async e=>{const n=await l(e);return n?u(n,e):d(e)},c=e=>{const n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},l=async e=>{if(e.leavingEl&&e.animated&&0!==e.duration)return e.animationBuilder?e.animationBuilder:"ios"===e.mode?(await t.e(96).then(t.bind(null,"QtHV"))).iosTransitionAnimation:(await t.e(97).then(t.bind(null,"cmQl"))).mdTransitionAnimation},u=async(e,n)=>{await m(n,!0);const t=e(n.baseEl,n);h(n.enteringEl,n.leavingEl);const i=await f(t,n);return n.progressCallback&&n.progressCallback(void 0),i&&y(n.enteringEl,n.leavingEl),{hasCompleted:i,animation:t}},d=async e=>{const n=e.enteringEl,t=e.leavingEl;return await m(e,!1),h(n,t),y(n,t),{hasCompleted:!0}},m=async(e,n)=>{const t=(void 0!==e.deepWait?e.deepWait:n)?[w(e.enteringEl),w(e.leavingEl)]:[v(e.enteringEl),v(e.leavingEl)];await Promise.all(t),await p(e.viewIsReady,e.enteringEl)},p=async(e,n)=>{e&&await e(n)},f=(e,n)=>{const t=n.progressCallback,i=new Promise(n=>{e.onFinish(e=>n(1===e))});return t?(e.progressStart(!0),t(e)):e.play(),i},h=(e,n)=>{g(n,r.c),g(e,r.a)},y=(e,n)=>{g(e,r.b),g(n,r.d)},g=(e,n)=>{if(e){const t=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(t)}},v=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),w=async e=>{const n=e;if(n){if(null!=n.componentOnReady&&null!=await n.componentOnReady())return;await Promise.all(Array.from(n.children).map(w))}},b=(e,n)=>{n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},E=(e,n,t)=>{void 0!==e&&(e.style.zIndex="back"===t?"99":"101"),void 0!==n&&(n.style.zIndex="100")},x=e=>e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e},YtD4:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));const i=e=>{try{if("string"!=typeof e||""===e)return e;const n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=e,s.forEach(e=>{const t=n.querySelectorAll(e);for(let i=t.length-1;i>=0;i--){const e=t[i];e.parentNode?e.parentNode.removeChild(e):n.removeChild(e);const a=o(e);for(let n=0;n<a.length;n++)r(a[n])}});const i=o(n);for(let e=0;e<i.length;e++)r(i[e]);const a=document.createElement("div");a.appendChild(n);const c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(n){return console.error(n),""}},r=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let t=e.attributes.length-1;t>=0;t--){const n=e.attributes.item(t),i=n.name;if(!a.includes(i.toLowerCase())){e.removeAttribute(i);continue}const r=n.value;null!=r&&r.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}const n=o(e);for(let t=0;t<n.length;t++)r(n[t])},o=e=>null!=e.children?e.children:e.childNodes,a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},m9yc:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return r}));const i=async(e,n,t,i,r)=>{if(e)return e.attachViewToDom(n,t,r,i);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof t?n.ownerDocument&&n.ownerDocument.createElement(t):t;return i&&i.forEach(e=>o.classList.add(e)),r&&Object.assign(o,r),n.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(e,n)=>{if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},opz7:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return i}));const i=()=>{const e=window.TapticEngine;e&&e.selection()},r=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},o=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},a=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}},yYAv:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var i=t("8Y7J");let r=(()=>{class e{constructor(){this.phones=[{id:"FIC839e3if",manufacturer:"Google",model:"Pixel 2 XL",price:499,quantity:null,imgURL:"http://cdn.androidbeat.com/wp-content/uploads/2017/10/Pixel-2-XL.png",releaseDate:"2018-05-22",description:"Google Pixel 2 XL has 64/128 GB of internal memory. This device has a Qualcomm MSM8998 Snapdragon 835 chipset. The main screen size is displaysize6.0 inches, 92.6 cm2 with 1440 x 2880 pixels, 18:9 ratio resolution. It has a 538 ppi density) ppi pixel density. The screen covers about 76.4% of the device's body.",total:0},{id:"ckeFCi839ti",manufacturer:"Samsung",model:"Galaxy S9",price:699,quantity:null,imgURL:"https://www.valuewalk.com/wp-content/uploads/2017/11/Galaxy-S9-Render.jpg",releaseDate:"2019-06-12",description:"Samsung Galaxy S9 supports frequency bands GSM , HSPA , LTE. Official announcement date is February 2018. The device is working on an Android 8.0 (Oreo) with a Octa-core (4x2.7 GHz Mongoose M3 & 4x1.8 GHz Cortex-A55) - EMEAOcta-core (4x2.7 GHz Kryo 385 Gold & 4x1.7 GHz Kryo 385 Silver) - USA & China processor and 4 GB RAM memory. Samsung Galaxy S9 has 64/128/256 GB of internal memory.",total:0},{id:"bmuruv7493xieF",manufacturer:"Apple",model:"iPhone X",price:999,quantity:null,imgURL:"https://cdn.dxomark.com/wp-content/uploads/2018/07/apple_iphonex-1024x768.jpg",releaseDate:"2019-02-15",description:"Apple iPhone X supports frequency bands GSM , CDMA , HSPA , EVDO , LTE. Official announcement date is September 2017. The device is working on an iOS 11 with a Hexa-core (2x Monsoon + 4x Mistral) processor and 3 GB RAM memory. Apple iPhone X has 64/256 GB of internal memory. This device has a Apple A11 Bionic chipset. The main screen size is 5.8 inches with 1125 x 2436 pixels resolution.",total:0}]}getAllPhones(){return[...this.phones]}getPhone(e){return Object.assign({},this.phones.find(n=>n.id===e))}}return e.ngInjectableDef=i.Mb({factory:function(){return new e},token:e,providedIn:"root"}),e})()}}]);