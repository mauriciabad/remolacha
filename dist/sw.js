if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const a=e=>n(e,o),d={module:{uri:o},exports:c,require:a};i[o]=Promise.all(s.map((e=>d[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/GameView.896d66ed.css",revision:null},{url:"assets/GameView.e42b85b4.js",revision:null},{url:"assets/index.61b5ac7f.js",revision:null},{url:"assets/index.c7152464.css",revision:null},{url:"index.html",revision:"63a06a46e54f2fd815b54f76b8b78849"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/apple-touch-icon.png",revision:"254b93452b0cd087f9f22212c4b27356"},{url:"icons/safari-pinned-tab.svg",revision:"40e264a5e55a14e74eaa235a806cc2fe"},{url:"icons/favicon-32x32.png",revision:"749f5e8c38b61893b4aed01c9b0f2162"},{url:"icons/favicon-16x16.png",revision:"62d0327b9a2cff6f4f007a1e1daa8dc7"},{url:"icons/android-chrome-192x192.png",revision:"6afe70b5ff7f0b4d6976503ca61d56cb"},{url:"icons/android-chrome-512x512.png",revision:"619b6a41b8c4cb1c78fa5fbbe49bbd20"},{url:"icons/android-chrome-maskable-192x192.png",revision:"308858ef88797c6950b7b229c3b7e7a2"},{url:"icons/android-chrome-maskable-512x512.png",revision:"be6ab9c5870a746f08959555779f735d"},{url:"manifest.webmanifest",revision:"7896e16ec8678be94572746652c3e70d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
