import{_ as pe}from"./preload-helper.cf010ec4.js";const fe=Symbol(),Z=Object.getPrototypeOf,J=new WeakMap,me=e=>e&&(J.has(e)?J.get(e):Z(e)===Object.prototype||Z(e)===Array.prototype),ge=e=>me(e)&&e[fe]||null,ee=(e,t=!0)=>{J.set(e,t)},H=e=>typeof e=="object"&&e!==null,A=new WeakMap,x=new WeakSet,he=(e=Object.is,t=(n,h)=>new Proxy(n,h),s=n=>H(n)&&!x.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),r=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},l=new WeakMap,c=(n,h,E=r)=>{const b=l.get(n);if(b?.[0]===h)return b[1];const y=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return ee(y,!0),l.set(n,[h,y]),Reflect.ownKeys(n).forEach(U=>{if(Object.getOwnPropertyDescriptor(y,U))return;const L=Reflect.get(n,U),D={value:L,enumerable:!0,configurable:!0};if(x.has(L))ee(L,!1);else if(L instanceof Promise)delete D.value,D.get=()=>E(L);else if(A.has(L)){const[v,z]=A.get(L);D.value=c(v,z(),E)}Object.defineProperty(y,U,D)}),Object.preventExtensions(y)},m=new WeakMap,f=[1,1],S=n=>{if(!H(n))throw new Error("object required");const h=m.get(n);if(h)return h;let E=f[0];const b=new Set,y=(a,i=++f[0])=>{E!==i&&(E=i,b.forEach(o=>o(a,i)))};let U=f[1];const L=(a=++f[1])=>(U!==a&&!b.size&&(U=a,v.forEach(([i])=>{const o=i[1](a);o>E&&(E=o)})),E),D=a=>(i,o)=>{const g=[...i];g[1]=[a,...g[1]],y(g,o)},v=new Map,z=(a,i)=>{if(b.size){const o=i[3](D(a));v.set(a,[i,o])}else v.set(a,[i])},Y=a=>{var i;const o=v.get(a);o&&(v.delete(a),(i=o[1])==null||i.call(o))},de=a=>(b.add(a),b.size===1&&v.forEach(([o,g],R)=>{const k=o[3](D(R));v.set(R,[o,k])}),()=>{b.delete(a),b.size===0&&v.forEach(([o,g],R)=>{g&&(g(),v.set(R,[o]))})}),F=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),V=t(F,{deleteProperty(a,i){const o=Reflect.get(a,i);Y(i);const g=Reflect.deleteProperty(a,i);return g&&y(["delete",[i],o]),g},set(a,i,o,g){const R=Reflect.has(a,i),k=Reflect.get(a,i,g);if(R&&(e(k,o)||m.has(o)&&e(k,m.get(o))))return!0;Y(i),H(o)&&(o=ge(o)||o);let $=o;if(o instanceof Promise)o.then(W=>{o.status="fulfilled",o.value=W,y(["resolve",[i],W])}).catch(W=>{o.status="rejected",o.reason=W,y(["reject",[i],W])});else{!A.has(o)&&s(o)&&($=S(o));const W=!x.has($)&&A.get($);W&&z(i,W)}return Reflect.set(a,i,$,g),y(["set",[i],o,k]),!0}});m.set(n,V);const ue=[F,L,c,de];return A.set(V,ue),Reflect.ownKeys(n).forEach(a=>{const i=Object.getOwnPropertyDescriptor(n,a);"value"in i&&(V[a]=n[a],delete i.value,delete i.writable),Object.defineProperty(F,a,i)}),V})=>[S,A,x,e,t,s,r,l,c,m,f],[be]=he();function C(e={}){return be(e)}function P(e,t,s){const r=A.get(e);let l;const c=[],m=r[3];let f=!1;const n=m(h=>{if(c.push(h),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,n()}}function ye(e,t){const s=A.get(e),[r,l,c]=s;return c(r,l(),t)}const d=C({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),ce={state:d,subscribe(e){return P(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=ce.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},ve=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=C({enabled:ve,userSessionId:"",events:[],connectedWalletId:void 0}),Ie={state:u,subscribe(e){return P(u.events,()=>e(ye(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},w=C({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:w,subscribe(e){return P(w,()=>e(w))},setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},B=C({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),T={state:B,subscribe(e){return P(B,()=>e(B))},setConfig(e){var t,s;Ie.initialize(),I.setChains(e.chains),I.setIsAuth(!!e.enableAuthMode),I.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),I.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign(B,e)}};var Ee=Object.defineProperty,te=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,se=(e,t,s)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Le=(e,t)=>{for(var s in t||(t={}))we.call(t,s)&&se(e,s,t[s]);if(te)for(var s of te(t))Oe.call(t,s)&&se(e,s,t[s]);return e};const q="https://explorer-api.walletconnect.com",G="wcm",Q="js-2.6.2";async function K(e,t){const s=Le({sdkType:G,sdkVersion:Q},t),r=new URL(e,q);return r.searchParams.append("projectId",T.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(await fetch(r)).json()}const j={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${q}/w3m/v1/getWalletImage/${e}?projectId=${T.state.projectId}&sdkType=${G}&sdkVersion=${Q}`},getAssetImageUrl(e){return`${q}/w3m/v1/getAssetImage/${e}?projectId=${T.state.projectId}&sdkType=${G}&sdkVersion=${Q}`}};var Se=Object.defineProperty,ne=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,oe=(e,t,s)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ce=(e,t)=>{for(var s in t||(t={}))We.call(t,s)&&oe(e,s,t[s]);if(ne)for(var s of ne(t))Ae.call(t,s)&&oe(e,s,t[s]);return e};const re=p.isMobile(),O=C({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ke={state:O,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=T.state;if(e==="NONE"||t==="ALL"&&!e)return O.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await j.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const f=e.indexOf(c.id),S=e.indexOf(m.id);return f-S}),O.recomendedWallets=l}else{const{chains:s,isAuth:r}=I.state,l=s?.join(","),c=p.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=re?await j.getMobileListings(m):await j.getDesktopListings(m);O.recomendedWallets=Object.values(f)}return O.recomendedWallets},async getWallets(e){const t=Ce({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=T.state,{recomendedWallets:l}=O;if(r==="ALL")return O.wallets;l.length?t.excludedIds=l.map(E=>E.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:f,total:S}=re?await j.getMobileListings(t):await j.getDesktopListings(t),n=Object.values(f),h=m?"search":"wallets";return O[h]={listings:[...O[h].listings,...n],total:S,page:c??1},{listings:n,total:S}},getWalletImageUrl(e){return j.getWalletImageUrl(e)},getAssetImageUrl(e){return j.getAssetImageUrl(e)},resetSearch(){O.search={listings:[],total:0,page:1}}},_=C({open:!1}),X={state:_,subscribe(e){return P(_,()=>e(_))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=I.state;if(p.removeWalletConnectDeepLink(),I.setWalletConnectUri(e?.uri),I.setChains(e?.chains),ce.reset("ConnectWallet"),s&&r)_.open=!0,t();else{const l=setInterval(()=>{const c=I.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),_.open=!0,t())},200)}})},close(){_.open=!1}};var De=Object.defineProperty,ie=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,ae=(e,t,s)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Pe=(e,t)=>{for(var s in t||(t={}))je.call(t,s)&&ae(e,s,t[s]);if(ie)for(var s of ie(t))Me.call(t,s)&&ae(e,s,t[s]);return e};function Ue(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const N=C({themeMode:Ue()?"dark":"light"}),le={state:N,subscribe(e){return P(N,()=>e(N))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(N.themeMode=t),s&&(N.themeVariables=Pe({},s))}},M=C({open:!1,message:"",variant:"success"}),Ne={state:M,subscribe(e){return P(M,()=>e(M))},openToast(e,t){M.open=!0,M.message=e,M.variant=t},closeToast(){M.open=!1}};class Re{constructor(t){this.openModal=X.open,this.closeModal=X.close,this.subscribeModal=X.subscribe,this.setTheme=le.setThemeConfig,le.setThemeConfig(t),T.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index.9b0776cc.js"),["_astro/index.9b0776cc.js","_astro/browser.d1736441.js","_astro/App.9de35e1f.js","_astro/index.12efa584.js","_astro/preload-helper.cf010ec4.js","_astro/App.62eddb5c.css"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),I.setIsUiLoaded(!0)}}}const Ve=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Re},Symbol.toStringTag,{value:"Module"}));export{Ie as R,ce as T,p as a,Ve as i,le as n,Ne as o,I as p,X as s,ke as t,T as y};
