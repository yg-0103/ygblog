if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,t)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=t(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-RNByNEllO_x32diK3SZP/_buildManifest.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/-RNByNEllO_x32diK3SZP/_ssgManifest.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/1606726a.a7fa1696d52313a70703.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/434-bd6a4e799ccfceed4fe6.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/506-5ae3a24beccf304eb422.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/597.44c4a97547673449064d.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/62.37418ca3598593f88f24.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/882-71ab9350373ae71a2966.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/958-a36120eaa3f3dd6f8501.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/b98bc7c3-1247dfbb8d44795f3d9a.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/ccf7da5b.c0df377ef41138225444.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/de49cc29.b843f19d304559ba8ec6.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/framework-c93ed74a065331c4bd75.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/main-b72c73f6964823434d31.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/pages/_app-1f5d939d3cc71581a9f1.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/pages/about-93ce619709fc6a90f15a.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/pages/blog-de633f3c57298a12c6ab.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/pages/blog/%5BpostId%5D-e4037a82c00f1f75d913.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/pages/contact-466854b702f8fe274723.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/pages/home-8bcfccd5f7ab18728e89.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/pages/index-321c4ea938f85094fd45.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/pages/voca-b9ba5a4c8f59f1fd2e97.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/chunks/webpack-6332b68861dc101f610c.js",revision:"-RNByNEllO_x32diK3SZP"},{url:"/_next/static/css/803b2ba4d7ad1fb92ff4.css",revision:"-RNByNEllO_x32diK3SZP"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/manifest.json",revision:"bc04cd2c8a4c9a0dc8492c5ecdfc84e1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));