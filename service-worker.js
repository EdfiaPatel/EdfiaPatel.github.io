if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let l={};const f=e=>s(e,c),d={module:{uri:c},exports:l,require:f};i[c]=Promise.all(a.map((e=>d[e]||f(e)))).then((e=>(r(...e),l)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b783c24292d97feee66f1620859436e1"},{url:"archives/2024/01/index.html",revision:"0021655a30f6007f2d640f9599209beb"},{url:"archives/2024/index.html",revision:"9e9ab0a537bf17d2523ee3852fc520f4"},{url:"archives/index.html",revision:"d31da9f4bcba6a8bf418f2b09c00d71e"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"3033b03ea6491799fd689e87b1efaace"},{url:"css/footer.css",revision:"cadb48c34a020d450c663f4cd86d650b"},{url:"css/index.css",revision:"5af22a72b1cf37b80eaed0024a5ac8dd"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"0632a1fe969578ee30e0af14188ea0a1"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"link/index.html",revision:"e00d2f6042c039f1f8faaa3ea7080fb9"},{url:"tags/index.html",revision:"47118534a37b57fc0e10506760ebe4ef"},{url:"tags/其他/index.html",revision:"ba3c88e11cf5db826cd764bcd5ab7e6c"},{url:"网络代理/index.html",revision:"b9441617905830ef69b4fd9fe6e27052"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
