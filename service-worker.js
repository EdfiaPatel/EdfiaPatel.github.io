if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const l=e=>s(e,d),f={module:{uri:d},exports:r,require:l};i[d]=Promise.all(c.map((e=>f[e]||l(e)))).then((e=>(a(...e),r)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2024/01/22/网络代理/index.html",revision:"aa7784c50e495bc7449ad0ca7c8c299e"},{url:"404.html",revision:"2cb1fc3f968fd4a5ef4daffcf2d3a3a1"},{url:"archives/2024/01/index.html",revision:"d7b8bfeae99ce72c9d8ea2af6a802ad0"},{url:"archives/2024/index.html",revision:"24edb15888bc9ad63c91c1631d2578fa"},{url:"archives/index.html",revision:"a5dd8fd99e192ff78d6e67547a1f3eeb"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"c5f1b7480ac16a8cfb03b93d35d8ba4d"},{url:"css/footer.css",revision:"cadb48c34a020d450c663f4cd86d650b"},{url:"css/index.css",revision:"5af22a72b1cf37b80eaed0024a5ac8dd"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7eb32d0588d20279dbb967a3f557c2c2"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"link/index.html",revision:"397cf16dd4ea4a7fa94330de545d23ca"},{url:"tags/index.html",revision:"c067cd2aa3f4b88db763d7a1229ae656"},{url:"tags/其他/index.html",revision:"3b6e8c63f22bb4db0060c45f681ccee6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
