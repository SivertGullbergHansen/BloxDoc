"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),c=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(m,".").concat(d)]||p[d]||u[d]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3359:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const a="itemDetails_F9m4",l="itemId_ShAU";var i=r(4996);function o(e){let{id:t=0,json:r="",children:o}=e;var m=r;return n.createElement("div",{className:a},n.createElement("p",null,r.description),n.createElement("div",null,n.createElement("p",{className:l},"ID: ",t),n.createElement("img",{src:m.assetId>0?"https://thumbnails.roblox.com/v1/assets?assetIds="+m.assetId+"&returnPolicy=PlaceHolder&size=700x700&format=Png&isCircular=false":(0,i.Z)("/img/placeholder.png"),alt:""}),n.createElement("h1",null,r.category),n.createElement("h2",null,r.itemType),n.createElement("h3",null,r.rarity),n.createElement("table",null,n.createElement("tr",null,n.createElement("th",null,"Inventory Size"),n.createElement("td",null,r.itemSize)),n.createElement("tr",null,n.createElement("th",null,"Drink"!==r.itemType?"Weight":"Volume"),n.createElement("td",null,"Drink"!==r.itemType?r.weight:r.weight/1e3,"Drink"!==r.itemType?"g":"L")),r.equipSlot&&n.createElement("tr",null,n.createElement("th",null,"Equip Slot"),n.createElement("td",null,r.equipSlot)),r.slots&&n.createElement("tr",null,n.createElement("th",null,"Volume (slots)"),n.createElement("td",null,r.slots)))))}},7391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var n=r(7462),a=(r(7294),r(3905)),l=r(3359);const i={slug:"/games/twd/items/9"},o="9mm Luger",m={unversionedId:"Games/The Walking Dead/Game Data/Items/Ammunition/Cartridge/9",id:"Games/The Walking Dead/Game Data/Items/Ammunition/Cartridge/9",title:"9mm Luger",description:"",source:"@site/docs/Games/The Walking Dead/Game Data/Items/Ammunition/Cartridge/9.mdx",sourceDirName:"Games/The Walking Dead/Game Data/Items/Ammunition/Cartridge",slug:"/games/twd/items/9",permalink:"/BloxDoc/games/twd/items/9",draft:!1,tags:[],version:"current",frontMatter:{slug:"/games/twd/items/9"},sidebar:"tutorialSidebar",previous:{title:".357 Magnum",permalink:"/BloxDoc/games/twd/items/3"},next:{title:"Shell",permalink:"/BloxDoc/category/shell"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"9mm-luger"},"9mm Luger"),(0,a.kt)(l.Z,{id:9,json:{actionSound:["rbxassetid://9113026916",0],name:"9mm Luger",itemType:"Cartridge",assetId:0,itemSize:.25,ammoType:"9mm",description:"Its not the biggest and baddest round, but it gets the job done",rarity:["Uncommon",null],category:"Ammunition",weight:7,action:"Pick Up",stack:30,itemIcon:["rbxassetid://10158938611",null]},mdxType:"ItemDetails"}))}p.isMDXComponent=!0}}]);