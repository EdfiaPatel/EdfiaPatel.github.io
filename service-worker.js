if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let d={};const l=e=>s(e,a),f={module:{uri:a},exports:d,require:l};i[a]=Promise.all(c.map((e=>f[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0b91753bc5c7d03b9d1f1521f3690eaf"},{url:"archives/2024/01/index.html",revision:"f617abcf5d3eedc03d0df3de74e26c53"},{url:"archives/2024/index.html",revision:"23d247c1ca11c087353e7ebb850ec959"},{url:"archives/index.html",revision:"493e30e1130bfc4bd7f1bd3f6d81fd33"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"962a88d1fedc2bdafaeac8d5b9e2bcd1"},{url:"css/footer.css",revision:"cadb48c34a020d450c663f4cd86d650b"},{url:"css/index.css",revision:"5af22a72b1cf37b80eaed0024a5ac8dd"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"6de3e4edb1e8566bc613cee5a3b693f1"},{url:"js/main.js",revision:"4802a927bf0b57f3859b3be8ed0b0351"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"a0c72193c089d7ef2c3d5359379c4516"},{url:"link/index.html",revision:"d155ed181e3e2996561cb5de75b72a40"},{url:"Proxy/index.html",revision:"fba0dcfacbd2abda320455e6caf52690"},{url:"tags/index.html",revision:"04d264e027ae61603284fd1c704884fa"},{url:"tags/其他/index.html",revision:"05516faf3082e28891cc767fff218379"},{url:"网络代理/index.html",revision:"6020fbb24a251a5da4f5c6e1ef02da7e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
