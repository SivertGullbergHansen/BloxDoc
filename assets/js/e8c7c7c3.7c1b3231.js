"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3359:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294);const a="itemDetails_F9m4",l="itemCard_maFq",o="itemId_ShAU";var i=r(4996);function c(e){let{id:t=0,json:r="",children:c}=e;var m=r;return n.createElement("div",{className:a},n.createElement("div",null,n.createElement("h2",null,"Description"),n.createElement("p",null,r.description)),n.createElement("div",{className:l},n.createElement("p",{className:o},"ID: ",t),n.createElement("img",{src:m.assetId>0?"https://thumbnails.roblox.com/v1/assets?assetIds="+m.assetId+"&returnPolicy=PlaceHolder&size=700x700&format=Png&isCircular=false":(0,i.Z)("/img/placeholder.png"),alt:"item model preview"}),n.createElement("h3",null,r.category),n.createElement("h4",null,r.itemType),n.createElement("h5",null,r.rarity),n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"Inventory Size"),n.createElement("td",null,r.itemSize)),n.createElement("tr",null,n.createElement("th",null,"Drink"!==r.itemType?"Weight":"Volume"),n.createElement("td",null,"Drink"!==r.itemType?r.weight:r.weight/1e3,"Drink"!==r.itemType?"g":"L")),r.equipSlot&&n.createElement("tr",null,n.createElement("th",null,"Equip Slot"),n.createElement("td",null,r.equipSlot)),r.slots&&n.createElement("tr",null,n.createElement("th",null,"Volume (slots)"),n.createElement("td",null,r.slots))))))}},6375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905)),l=r(3359);const o={slug:"/games/twd/items/7"},i="Water Bottle",c={unversionedId:"Games/The Walking Dead/Game Data/Items/Consumable/Drink/7",id:"Games/The Walking Dead/Game Data/Items/Consumable/Drink/7",title:"Water Bottle",description:"",source:"@site/docs/Games/The Walking Dead/Game Data/Items/Consumable/Drink/7.mdx",sourceDirName:"Games/The Walking Dead/Game Data/Items/Consumable/Drink",slug:"/games/twd/items/7",permalink:"/BloxDoc/games/twd/items/7",draft:!1,tags:[],version:"current",frontMatter:{slug:"/games/twd/items/7"},sidebar:"tutorialSidebar",previous:{title:"Drink",permalink:"/BloxDoc/category/drink"},next:{title:"Food",permalink:"/BloxDoc/category/food"}},m={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"water-bottle"},"Water Bottle"),(0,a.kt)(l.Z,{id:7,json:{actionSound:["rbxassetid://9117430017",0],name:"Water Bottle",itemType:"Drink",assetId:0,action:"Pick Up",description:"Refreshing",calories:0,rarity:["Common",null],category:"Consumable",weight:500,itemSize:1,refreshing:100,itemIcon:["rbxassetid://10158911987",null]},mdxType:"ItemDetails"}))}p.isMDXComponent=!0}}]);