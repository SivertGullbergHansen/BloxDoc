"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3359:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a="itemDetails_F9m4";var l=r(4996);function o(e){let{id:t=0,json:r="",children:o}=e;var i=r;return n.createElement("div",{className:a},n.createElement("p",null,r.description),n.createElement("div",null,n.createElement("img",{src:i.assetId>0?"https://thumbnails.roblox.com/v1/assets?assetIds="+i.assetId+"&returnPolicy=PlaceHolder&size=700x700&format=Png&isCircular=false":(0,l.Z)("/img/placeholder.png"),alt:""}),n.createElement("h1",null,r.rarity),n.createElement("h3",null,r.itemType),n.createElement("table",null,n.createElement("tr",null,n.createElement("th",null,"Inventory Size"),n.createElement("td",null,r.itemSize)),n.createElement("tr",null,n.createElement("th",null,"Weight"),n.createElement("td",null,r.weight,"g")),r.equipSlot&&n.createElement("tr",null,n.createElement("th",null,"Equip Slot"),n.createElement("td",null,r.equipSlot)),r.slots&&n.createElement("tr",null,n.createElement("th",null,"Volume (slots)"),n.createElement("td",null,r.slots)))))}},6340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),l=r(3359);const o={slug:"/games/twd/items/5"},i="Used Shotgun Shells",s={unversionedId:"Games/The Walking Dead/Game Data/Items/Material/Crafting/5",id:"Games/The Walking Dead/Game Data/Items/Material/Crafting/5",title:"Used Shotgun Shells",description:"",source:"@site/docs/Games/The Walking Dead/Game Data/Items/Material/Crafting/5.mdx",sourceDirName:"Games/The Walking Dead/Game Data/Items/Material/Crafting",slug:"/games/twd/items/5",permalink:"/BloxDoc/games/twd/items/5",draft:!1,tags:[],version:"current",frontMatter:{slug:"/games/twd/items/5"},sidebar:"tutorialSidebar",previous:{title:"Crafting",permalink:"/BloxDoc/category/crafting"},next:{title:"Weapon",permalink:"/BloxDoc/category/weapon"}},c={},m=[],u={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"used-shotgun-shells"},"Used Shotgun Shells"),(0,a.kt)(l.Z,{id:5,json:{actionSound:["rbxassetid://9119116825",0],name:"Used Shotgun Shells",itemType:"Crafting",assetId:0,itemSize:.5,ammoType:"12 Gauge",description:"Can be used to craft shotgun shells",rarity:["Common",null],category:"Material",weight:5,action:"Pick Up",stack:30,itemIcon:["rbxassetid://10158910378",null]},mdxType:"ItemDetails"}))}p.isMDXComponent=!0}}]);