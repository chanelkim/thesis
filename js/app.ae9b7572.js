(function(e){function t(t){for(var c,r,l=t[0],s=t[1],i=t[2],m=0,b=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},o={app:0},a=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/thesis/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0872":function(e,t,n){"use strict";n("7e66")},"08b9":function(e,t,n){},"13d1":function(e,t,n){"use strict";n("152c")},"152c":function(e,t,n){},"18a0":function(e,t,n){e.exports=n.p+"img/hero.f18c76f9.png"},"197c":function(e,t,n){"use strict";n("4ef4")},"41f9":function(e,t,n){"use strict";n("4312")},4299:function(e,t,n){"use strict";n("8a7a")},4312:function(e,t,n){},"4ef4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o=Object(c["createTextVNode"])("Home"),a=Object(c["createTextVNode"])("Collection"),r=Object(c["createTextVNode"])("Methodology"),l=Object(c["createTextVNode"])("Discover"),s=Object(c["createTextVNode"])("History"),i=Object(c["createTextVNode"])("Acknowledgments"),d=Object(c["createTextVNode"])("References");function m(e,t,n,m,b,u){const j=Object(c["resolveComponent"])("router-link"),O=Object(c["resolveComponent"])("el-menu-item"),h=Object(c["resolveComponent"])("el-menu"),p=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(h,{"default-active":e.activeIndex,class:"el-menu",mode:"horizontal",onSelect:e.handleSelect},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{class:"el-menu",index:"1"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{class:"margin-x",to:"/"},{default:Object(c["withCtx"])(()=>[o]),_:1})]),_:1}),Object(c["createVNode"])(O,{index:"2"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{class:"margin-x",to:"/collection"},{default:Object(c["withCtx"])(()=>[a]),_:1})]),_:1}),Object(c["createVNode"])(O,{index:"3"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{class:"margin-x",to:"/methodology"},{default:Object(c["withCtx"])(()=>[r]),_:1})]),_:1}),Object(c["createVNode"])(O,{index:"4"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{class:"margin-x",to:"/discover"},{default:Object(c["withCtx"])(()=>[l]),_:1})]),_:1}),Object(c["createVNode"])(O,{index:"5"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{class:"margin-x",to:"/history"},{default:Object(c["withCtx"])(()=>[s]),_:1})]),_:1}),Object(c["createVNode"])(O,{index:"6"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{class:"margin-x",to:"/acknowledgments"},{default:Object(c["withCtx"])(()=>[i]),_:1})]),_:1}),Object(c["createVNode"])(O,{index:"7"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{class:"margin-x",to:"/references"},{default:Object(c["withCtx"])(()=>[d]),_:1})]),_:1})]),_:1},8,["default-active","onSelect"]),Object(c["createVNode"])(p,{catalogData:b.catalogData,ngaData:b.ngaData,sectionData:b.sectionData},null,8,["catalogData","ngaData","sectionData"])])}var b=n("898b"),u={name:"App",components:{},data(){return{catalogData:{},ngaData:[],sectionData:[]}},mounted(){const e=["./data/catalog_categories.json","./data/IoAD_merged_geo_data.json","./data/sections/textile_section_0.json","./data/sections/utopian_section_1.json","./data/sections/architecture_section_2.json","./data/sections/tool_section_3.json","./data/sections/domestic_section_4.json","./data/sections/furniture_section_5.json","./data/sections/wood_section_6.json","./data/sections/ceramic_section_7.json","./data/sections/silver_section_8.json","./data/sections/toy_section_9.json"];Promise.all(e.map(e=>b["a"](e))).then(e=>{this.catalogData=e[0],this.ngaData=e[1],this.sectionData=e.slice(2).flat()}).catch(e=>{console.error("Error loading JSON data:",e)})}},j=(n("e482"),n("6b0d")),O=n.n(j);const h=O()(u,[["render",m]]);var p=h,g=n("c3a1"),f=(n("7437"),n("6c02"));const k=Object(c["createElementVNode"])("a",{href:"#"},"sign up now",-1),v=Object(c["createElementVNode"])("a",{href:"#"},"more info",-1),y=Object(c["createElementVNode"])("h1",null,"Slot Example",-1),E=Object(c["createElementVNode"])("p",null,"lorem ipsum",-1),w=Object(c["createElementVNode"])("h1",null,"Sign up for the newsletter",-1),N=Object(c["createElementVNode"])("p",null,"For updates and promo codes",-1);function V(e,t,n,o,a,r){const l=Object(c["resolveComponent"])("Hero"),s=Object(c["resolveComponent"])("Modal");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(l),a.showModal?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Teleport"],{key:0,to:"#modals"},[Object(c["createVNode"])(s,{theme:"success",onClose:e.toggleModal},{links:Object(c["withCtx"])(()=>[k,v]),default:Object(c["withCtx"])(()=>[y,E]),_:1},8,["onClose"])])):Object(c["createCommentVNode"])("",!0),a.showModalTwo?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Teleport"],{key:1,to:"#modals"},[Object(c["createVNode"])(s,{onClose:e.toggleModalTwo},{default:Object(c["withCtx"])(()=>[w,N]),_:1},8,["onClose"])])):Object(c["createCommentVNode"])("",!0)])}const B={class:"container"},C={class:"logo"},D=["src"],x={class:"hero"},_=["src"];function I(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",B,[Object(c["createElementVNode"])("div",C,[Object(c["createElementVNode"])("img",{src:a.logo},null,8,D)]),Object(c["createElementVNode"])("div",x,[Object(c["createElementVNode"])("img",{src:a.hero},null,8,_)])])}var A=n("18a0"),S=n.n(A),T=n("6f06"),M=n.n(T),F={name:"Hero",data(){return{hero:S.a,logo:M.a}}};n("0872");const U=O()(F,[["render",I]]);var L=U,H={name:"Home",components:{Hero:L},data(){return{title:"Index of American Design",subtitle:"Making an Obscure Collection Discoverable",header:"Testing Modal Header",text:"Testing Modal Text",showModal:!1,showModalTwo:!1}},computed:{},methods:{}};n("7f18");const P=O()(H,[["render",V]]);var z=P;const R=Object(c["createElementVNode"])("div",{class:"wip"},[Object(c["createElementVNode"])("p",null,"Under Construction")],-1),J=Object(c["createElementVNode"])("div",{class:"header"},[Object(c["createElementVNode"])("h1",null,"Collection"),Object(c["createElementVNode"])("h2",null,"Index by Artist")],-1),W=Object(c["createElementVNode"])("div",{class:"description"},[Object(c["createElementVNode"])("p",null,"Zoomable Treemap")],-1);function Z(e,t,n,o,a,r){const l=Object(c["resolveComponent"])("Treemap");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[R,J,W,Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.allArtists,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:t},[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(e.name),1),Object(c["createElementVNode"])("ul",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.titles,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:t},Object(c["toDisplayString"])(e.title),1))),128))])]))),128))])]),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(l,{createTreemap:e.treemapElement},null,8,["createTreemap"])])],64)}const $={ref:"treemapContainer"};function q(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",$,null,512)}var G={name:"Treemap",props:{ngaData:Array},computed:{analyzeData(){const e=[];return this.ngaData.forEach(t=>{const{attribution:n,title:c,objectid:o,imagematch:a,geostate:r,geodivision:l,georegion:s,catstate:i}=t,d=e.find(e=>e.name===n);d?(d.titles.push({title:c,objectid:o,imagematch:a||"Image not available",geodivision:l||"Unknown regional division",georegion:s||"Unknown region",geostate:r||"Unknown state",catstate:i||"Unknown catalog state"}),d.count++):e.push({name:n,titles:[{title:c,objectid:o,imagematch:a||"Image not available",geodivision:l||"Unknown regional division",georegion:s||"Unknown region",geostate:r||"Unknown state",catstate:i||"Unknown catalog state"}],count:1})}),e}},methods:{},mounted(){this.$emit("artists-updated",this.analyzeData)}};const K=O()(G,[["render",q]]);var Q=K;const X=1920;var Y={name:"Collection",components:{Treemap:Q},data(){return{width:Math.min(X,window.innerWidth)}},props:{ngaData:Array,allArtists:Array},methods:{},mounted(){console.log(this.allArtists)}};const ee=O()(Y,[["render",Z]]);var te=ee;const ne=Object(c["createElementVNode"])("div",{class:"wip"},[Object(c["createElementVNode"])("p",null,"Under Construction")],-1),ce=Object(c["createElementVNode"])("div",{class:"header"},[Object(c["createElementVNode"])("h1",null,"Methodology"),Object(c["createElementVNode"])("h2",null,"Data Structures & Analysis")],-1),oe=Object(c["createElementVNode"])("div",{class:"description"},[Object(c["createElementVNode"])("p",null,"Data Comparison: Collection of Estimated Object Counts per Category")],-1),ae={class:"description"};function re(e,t,n,o,a,r){const l=Object(c["resolveComponent"])("CatalogBarChart"),s=Object(c["resolveComponent"])("CategoriesBarChart");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[ne,ce,oe,Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(l,{transformedData:r.transformData,height:500,width:a.width},null,8,["transformedData","width"])]),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(s,{transformedCatData:r.transformCatData,height:500,width:a.width},null,8,["transformedCatData","width"])]),Object(c["createElementVNode"])("div",ae,[Object(c["createElementVNode"])("p",null,"Data Length: "+Object(c["toDisplayString"])(Object.keys(n.catalogData).length),1),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.catalogData,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",{key:t},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e,e=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("ul",{key:e.category},Object(c["toDisplayString"])(e.category)+" - "+Object(c["toDisplayString"])(e.count),1))),128))]))),128))])],64)}n("13d5");const le={class:"chart"},se=Object(c["createElementVNode"])("h3",null,"Catalog Bar Chart",-1),ie=["height","width"],de={class:"bars"},me=["x","y","width","height"];function be(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",le,[se,(Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",{height:n.height,width:n.width},[Object(c["createElementVNode"])("g",de,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(r.bars,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("rect",{key:t,x:e.x,y:e.y,width:e.width,height:e.height,fill:"#3282dc"},null,8,me))),128))])],8,ie))])}const ue=20,je=60,Oe=20,he=40;var pe={name:"CatalogBarChart",props:{transformedData:Array,height:Number,width:Number},computed:{bars(){return this.transformedData.map(e=>{const t=he,n=this.yScale(e.name),c=this.xScale(e.value)-he,o=this.yScale.bandwidth();return{x:t,y:n,width:c,height:o}})},xScale(){const e=b["d"]().domain([0,b["b"](this.transformedData,e=>e.value)]).range([he,this.width-je]);return e},yScale(){const e=b["c"]().domain(this.transformedData.map(e=>e.name)).range([ue,this.height-Oe]).padding(.1);return e}}};n("41f9");const ge=O()(pe,[["render",be]]);var fe=ge;const ke={class:"chart"},ve=Object(c["createElementVNode"])("h3",null,"Categories Bar Chart",-1),ye=["height","width"],Ee={class:"bars"},we=["x","y","width","height"];function Ne(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",ke,[ve,(Object(c["openBlock"])(),Object(c["createElementBlock"])("svg",{height:n.height,width:n.width},[Object(c["createElementVNode"])("g",Ee,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(r.bars,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("rect",{key:t,x:e.x,y:e.y,width:e.width,height:e.height,fill:"#3c5064"},null,8,we))),128))])],8,ye))])}const Ve=20,Be=60,Ce=20,De=40;var xe={name:"CategoriesBarChart",props:{transformedCatData:Array,height:Number,width:Number},computed:{bars(){return this.transformedCatData.map(e=>{const t=De,n=this.yScale(e.name),c=this.xScale(e.value)-De,o=this.yScale.bandwidth();return{x:t,y:n,width:c,height:o}})},xScale(){const e=b["d"]().domain([0,b["b"](this.transformedCatData,e=>e.value)]).range([De,this.width-Be]);return e},yScale(){const e=b["c"]().domain(this.transformedCatData.map(e=>e.name)).range([Ve,this.height-Ce]).padding(.1);return e}}};n("a2f4");const _e=O()(xe,[["render",Ne]]);var Ie=_e;const Ae=1920;var Se={name:"Methodology",components:{CatalogBarChart:fe,CategoriesBarChart:Ie},data(){return{width:Math.min(Ae,window.innerWidth)}},props:{catalogData:Object,sectionData:Array},computed:{transformData(){const e=[];for(let t in this.catalogData){const n=this.catalogData[t].reduce((e,t)=>e+t.count,0);e.push({name:t,value:n})}return e},transformCatData(){const e=[],t=e=>{let n=0;for(let c in e){const o=e[c];Array.isArray(o.ObjectIDs)&&(n+=o.ObjectIDs.length),"object"===typeof o&&Object.keys(o).length>0&&(n+=t(o))}return n},n=n=>{for(let c in n){const o=n[c];let a=0;Array.isArray(o.ObjectIDs)&&(a+=o.ObjectIDs.length),"object"===typeof o&&Object.keys(o).length>0&&(a+=t(o)),e.push({name:c,value:a})}};return n(this.sectionData),e}},methods:{onResize(){this.width=Math.min(Ae,window.innerWidth)}},mounted(){window.addEventListener("resize",this.onResize)},beforeUnmount(){window.removeEventListener("resize",this.onResize)}};n("197c");const Te=O()(Se,[["render",re]]);var Me=Te;const Fe=e=>(Object(c["pushScopeId"])("data-v-d138b44c"),e=e(),Object(c["popScopeId"])(),e),Ue=Fe(()=>Object(c["createElementVNode"])("div",{class:"wip"},[Object(c["createElementVNode"])("p",null,"Under Construction")],-1)),Le=Fe(()=>Object(c["createElementVNode"])("div",{class:"header"},[Object(c["createElementVNode"])("h1",null,"Discover"),Object(c["createElementVNode"])("h2",null,"Interactive Directory")],-1)),He=Fe(()=>Object(c["createElementVNode"])("div",{class:"description"},[Object(c["createElementVNode"])("p",null,"Ten Categories According to the Consolidated Catalogs")],-1)),Pe={class:"directory"},ze=["onClick"],Re={key:1},Je=["onClick"],We={key:2};function Ze(e,t,n,o,a,r){const l=Object(c["resolveComponent"])("ImageDisplay");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Ue,Le,He,Object(c["createElementVNode"])("div",Pe,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.sectionData,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t},["showImages"!==t?(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[r.isValidButton(e)&&"ObjectIDs"!==t?(Object(c["openBlock"])(),Object(c["createElementBlock"])("button",{key:0,onClick:t=>r.toggleImages(e)},Object(c["toDisplayString"])(t),9,ze)):Object(c["createCommentVNode"])("",!0)],64)):Object(c["createCommentVNode"])("",!0),e.showImages?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Re,["object"!==typeof e||Array.isArray(e)?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(e,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("button",{key:t,onClick:t=>r.toggleImages(e)},[r.isValidButton(e)&&"showImages"!==t&&"ObjectIDs"!==t?(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t),1)],64)):Object(c["createCommentVNode"])("",!0)],8,Je))),128))])):Object(c["createCommentVNode"])("",!0),e.showImages?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",We,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.images,(e,t)=>(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:"image-"+t,"image-url":e},null,8,["image-url"]))),128))])):Object(c["createCommentVNode"])("",!0)]))),128))]))),128))])],64)}const $e={class:"card"},qe=["src","alt"];function Ge(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",$e,[Object(c["createElementVNode"])("img",{src:n.imageUrl,alt:n.creditline},null,8,qe)])}var Ke={props:{imageUrl:String,creditline:String}};n("4299");const Qe=O()(Ke,[["render",Ge],["__scopeId","data-v-17a0dd2e"]]);var Xe=Qe,Ye={name:"Discover",components:{ImageDisplay:Xe},data(){return{sections:[],images:[],matchingItems:[]}},props:{sectionData:Array,ngaData:Array},created(){this.loadData()},methods:{loadData(){this.sections=this.sectionData.map(e=>({...e,showImages:!1})),console.log(this.sections)},toggleImages(e){if(this.sections.forEach(t=>{t!==e&&t.showImages&&(t.showImages=!1)}),e.showImages=!e.showImages,e.showImages)if(Array.isArray(e))this.loadImages(e);else{const t=e.ObjectIDs;this.images=t.map(e=>{const t=this.ngaData.find(t=>t.objectid===e);return t?t.imagematch:null})}},loadImages(e){const t=[],n=e=>{if(e&&e.ObjectIDs)t.push(...e.ObjectIDs);else if("object"===typeof e&&!Array.isArray(e))for(const t in e)n(e[t])};n(e),this.images=t.map(e=>{const t=this.ngaData.find(t=>t.objectid===e);return console.log(t),t?t.imagematch:null})},isValidButton(e){return"object"===typeof e&&!Array.isArray(e)&&null!==e&&Object.keys(e).length>0}}};n("13d1");const et=O()(Ye,[["render",Ze],["__scopeId","data-v-d138b44c"]]);var tt=et;const nt=Object(c["createElementVNode"])("div",{class:"wip"},[Object(c["createElementVNode"])("p",null,"Under Construction")],-1),ct=Object(c["createElementVNode"])("div",{class:"header"},[Object(c["createElementVNode"])("h1",null,"History"),Object(c["createElementVNode"])("h2",null,"The Index as a Federal Art Project")],-1),ot=Object(c["createElementVNode"])("div",{class:"description"},[Object(c["createElementVNode"])("p",null,"A moment in American history as national work-relief effort")],-1);function at(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[nt,ct,ot],64)}var rt={name:"History"};const lt=O()(rt,[["render",at]]);var st=lt;const it=Object(c["createElementVNode"])("div",{class:"wip"},[Object(c["createElementVNode"])("p",null,"Under Construction")],-1),dt=Object(c["createElementVNode"])("div",{class:"header"},[Object(c["createElementVNode"])("h1",null,"Acknowledgments"),Object(c["createElementVNode"])("h2",null,"Thank you")],-1);function mt(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[it,dt],64)}var bt={name:"Acknowledgments"};n("bbbd");const ut=O()(bt,[["render",mt]]);var jt=ut;const Ot=Object(c["createElementVNode"])("div",{class:"wip"},[Object(c["createElementVNode"])("p",null,"Under Construction")],-1),ht=Object(c["createElementVNode"])("div",{class:"header"},[Object(c["createElementVNode"])("h1",null,"References"),Object(c["createElementVNode"])("h2",null,"Record of Citations")],-1),pt=Object(c["createElementVNode"])("div",{class:"description"},[Object(c["createElementVNode"])("p",null,"Ten Categories According to the Consolidated Catalogs")],-1);function gt(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Ot,ht,pt],64)}var ft={name:"References"};const kt=O()(ft,[["render",gt]]);var vt=kt;const yt=[{path:"/",name:"Home",component:z},{path:"/collection",name:"Collection",component:te},{path:"/methodology",name:"Methodology",component:Me},{path:"/discover",name:"Discover",component:tt},{path:"/history",name:"History",component:st},{path:"/acknowledgments",name:"Acknowledgments",component:jt},{path:"/references",name:"References",component:vt}],Et=f["a"]({history:f["b"](),routes:yt});n("db43");Object(c["createApp"])(p).use(Et).use(g["a"]).mount("#app")},"58eb":function(e,t,n){},"59d5":function(e,t,n){},"6f06":function(e,t,n){e.exports=n.p+"img/IoAD_stack-2.e8ccc71c.svg"},7403:function(e,t,n){},"7e66":function(e,t,n){},"7f18":function(e,t,n){"use strict";n("7403")},"8a7a":function(e,t,n){},a2f4:function(e,t,n){"use strict";n("58eb")},bbbd:function(e,t,n){"use strict";n("59d5")},db43:function(e,t,n){},e482:function(e,t,n){"use strict";n("08b9")}});
//# sourceMappingURL=app.ae9b7572.js.map