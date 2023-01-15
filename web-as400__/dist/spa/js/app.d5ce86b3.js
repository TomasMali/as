(()=>{"use strict";var e={4695:(e,t,r)=>{r(5363),r(71);var o=r(8880),n=r(9592),a=r(3673);function i(e,t,r,o,n,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}var l=r(1907);const s=(0,a.aZ)({name:"App",createPinia:l.WB});var c=r(4260);const u=(0,c.Z)(s,[["render",i]]),d=u;var p=r(3340),h=r(8339),f=r(589);const m=[{path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(128)]).then(r.bind(r,3128)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(290)]).then(r.bind(r,3290))},{path:"test",component:()=>Promise.all([r.e(736),r.e(417)]).then(r.bind(r,8417))},{path:"query",component:()=>Promise.all([r.e(736),r.e(64),r.e(174)]).then(r.bind(r,7174)),meta:{isAuth:f.Z.getItem("currentUser")}},{path:"home",component:()=>Promise.all([r.e(736),r.e(64),r.e(290)]).then(r.bind(r,3290))},{path:"workitems",component:()=>Promise.all([r.e(736),r.e(604)]).then(r.bind(r,604))},{path:"botgpt",component:()=>Promise.all([r.e(736),r.e(977)]).then(r.bind(r,977))},{path:"preference",component:()=>Promise.all([r.e(736),r.e(64),r.e(499)]).then(r.bind(r,6499)),meta:{isAuth:f.Z.getItem("currentUser")}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],b=m,v=(0,p.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t.beforeEach(((e,t,r)=>{null===e.meta.isAuth||"null"===e.meta.isAuth||""===e.meta.isAuth?r("/home"):r()})),t}));async function g(e,t){const r="function"===typeof v?await v({}):v,o=e(d);return o.use(n.Z,t),{app:o,router:r}}var y=r(7153),w=r(1417),P=r(4434);const k={config:{},plugins:{LocalStorage:f.Z,SessionStorage:y.Z,Dialog:w.Z,Notify:P.Z}},A="";async function O({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:A})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}g(o.ri,k).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,9332))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));O(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>l});var o=r(3340),n=r(52),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},9332:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(3340),n=r(1907);const a=(0,o.xr)((({app:e})=>{e.use((0,n.WB)())}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"6d97652e",128:"1dc59322",174:"6eb9f663",193:"369286d6",290:"2830a2bf",417:"dcb54e7b",499:"361436fc",604:"e62f3aa3",977:"08235ad8"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",174:"8cbc117d",290:"6d01b01b",604:"3db59c4d",736:"a58ddbb2",977:"39d6e824"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="web-as400:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={174:1,290:1,604:1,977:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var u=s(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkweb_as400"]=globalThis["webpackChunkweb_as400"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4695)));o=r.O(o)})();