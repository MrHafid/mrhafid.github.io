if(!self.define){let s,e={};const c=(c,i)=>(c=new URL(c+".js",i).href,e[c]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=c,s.onload=e,document.head.appendChild(s)}else s=c,importScripts(c),e()})).then((()=>{let s=e[c];if(!s)throw new Error(`Module ${c} didn’t register its module`);return s})));self.define=(i,r)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let t={};const a=s=>c(s,d),n={module:{uri:d},exports:t,require:a};e[d]=Promise.all(i.map((s=>n[s]||a(s)))).then((s=>(r(...s),t)))}}define(["./workbox-80b43d3d"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/css/styles.css",revision:"58e602b2430cf592a9caa1eddce1f801"},{url:"assets/img/perfil.png",revision:"79b8b43dc8a3737a485147b882952115"},{url:"assets/js/main.js",revision:"cbe8603bff1c2e97e3e86d7d2e3370f2"},{url:"assets/scss/base/_base.scss",revision:"fabf1bdcd212f1123d13a80f3016f48a"},{url:"assets/scss/components/_header.scss",revision:"9bed4a4d0012b91983cdf9c8c4327fd9"},{url:"assets/scss/components/_mediaqueries.scss",revision:"a1682ae8ddf4e5af18f2645f7721ab33"},{url:"assets/scss/config/_variables.scss",revision:"9c917c7d3d4cae9b0d7948a6c3d30d6a"},{url:"assets/scss/layout/_layout.scss",revision:"1443fd893f33913744dfcd565bf33193"},{url:"assets/scss/styles.scss",revision:"d6459d00fb5ab309f1433ded6ddb3a59"},{url:"assets/scss/theme/_theme.scss",revision:"518e3be483018c12d95891b9abcc50de"},{url:"index.html",revision:"e863cd403909fc32fc56c6384631f2cf"},{url:"manifest.json",revision:"8dc254ffc08371a19e097cd536e4574a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map