"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[8046],{48199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var l=t(74848),i=t(28453);t(48816);const r={sidebar_position:1},s="\u901a\u8fc7\u63d2\u4ef6\u6269\u5c55\u63a7\u5236\u9a71\u52a8LED",c={id:"ToolsDoc/led_effect/index",title:"\u901a\u8fc7\u63d2\u4ef6\u6269\u5c55\u63a7\u5236\u9a71\u52a8LED",description:"* \u539f\u6587\u6863",source:"@site/docs/ToolsDoc/led_effect/index.mdx",sourceDirName:"ToolsDoc/led_effect",slug:"/ToolsDoc/led_effect/",permalink:"/fly-docs-next/ko/docs/ToolsDoc/led_effect/",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ToolsDoc/led_effect/index.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1718704746e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolsdocSidebar",previous:{title:"LED\u63d2\u4ef6",permalink:"/fly-docs-next/ko/docs/category/led\u63d2\u4ef6"}},o={},a=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u53c2\u8003\u914d\u7f6e",id:"\u53c2\u8003\u914d\u7f6e",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u901a\u8fc7\u63d2\u4ef6\u6269\u5c55\u63a7\u5236\u9a71\u52a8led",children:"\u901a\u8fc7\u63d2\u4ef6\u6269\u5c55\u63a7\u5236\u9a71\u52a8LED"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u539f\u6587\u6863"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"https://github.com/julianschill/klipper-led_effect\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsxs)(n.p,{children:["\u8bf7\u4f7f\u7528",(0,l.jsx)(n.strong,{children:"MobaXterm_Personal"}),"\u7b49",(0,l.jsx)(n.strong,{children:"SSH\u5de5\u5177"}),"\u8fde\u63a5\u901a\u8fc7",(0,l.jsx)(n.strong,{children:"WIFI"}),"\u5230\u60a8\u7684\u4e0a\u4f4d\u673a\uff0c\u5e76\u4e14\u9700\u8981\u786e\u5b9a\u4ee5\u4e0b\u51e0\u70b9"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u8bf7\u786e\u4fdd\u4e0a\u4f4d\u673a\u5b89\u88c5\u597d\u4e86Klipper\u56fa\u4ef6"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u8bf7\u786e\u4fdd\u767b\u5f55\u7684\u7528\u6237\u5fc5\u987b\u662f\u5b89\u88c5\u597dKlipper\u7684\u7528\u6237"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u8bf7\u786e\u4fdd\u4f60\u7684\u8f93\u5165\u6cd5\u662f\u82f1\u6587"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u8bf7\u786e\u4fdd\u4f60\u7684\u4e0a\u4f4d\u673a\u53ef\u4ee5\u6b63\u5e38\u641c\u7d22\u5230\u8bbe\u5907"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u8bf7\u786e\u4fdd\u4ee5\u4e0a\u6ce8\u610f\u4e8b\u9879\u90fd\u505a\u5230\uff0c\u5426\u5219\u65e0\u6cd5\u8fdb\u884c\u4e0b\u4e00\u6b65"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u6a21\u5757\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5b89\u88c5\u5230\u73b0\u6709\u7684 Klipper \u5b89\u88c5\u4e2d\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"cd ~\ngit clone https://github.com/julianschill/klipper-led_effect.git\ncd klipper-led_effect\n./install-led_effect.sh\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"[neopixel TP_led]\npin: PB7\nchain_count: 25\n# Number of LEDs\n# \u706f\u73e0\u6570\u91cf\ncolor_order: GRB\ninitial_RED: 0.4    \ninitial_GREEN: 0.8\ninitial_BLUE: 1\ninitial_WHITE: 0.0\n#66CCFF \n\n[led_effect sb_nozzle_cooling]\nautostart:              false\nframe_rate:             24\nleds:\n    neopixel:TP_led (9,10)\nlayers:\n        breathing  3 1 top (0.0, 0.0, 1.0, 0.1)\n\n[led_effect rainbow]\nleds:\n    neopixel:TP_led\nautostart:                          true\nframe_rate:                         24\nlayers:\n    gradient  0.3  1 add (0.3, 0.0, 0.0),(0.0, 0.3, 0.0),(0.0, 0.0, 0.3)\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},48816:(e,n,t)=>{t.d(n,{A:()=>f});var l=t(96540),i=t(10900),r=t(74848);function s(e){return(0,r.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:[(0,r.jsx)("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),(0,r.jsx)("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(45 12 12)",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0.125s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),(0,r.jsx)("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(90 12 12)",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0.25s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),(0,r.jsx)("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(135 12 12)",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0.375s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),(0,r.jsx)("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(180 12 12)",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0.5s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),(0,r.jsx)("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(225 12 12)",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0.625s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),(0,r.jsx)("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(270 12 12)",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0.75s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})}),(0,r.jsx)("circle",{cx:"12",cy:"2",r:"0",fill:"currentColor",transform:"rotate(315 12 12)",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0.875s",calcMode:"spline",dur:"1s",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",repeatCount:"indefinite",values:"0;2;0;0"})})]})}var c,o,a,d;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},h.apply(null,arguments)}const u=e=>{let{title:n,titleId:t,...i}=e;return l.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:512,height:512,viewBox:"0 0 512 512","aria-labelledby":t},i),n?l.createElement("title",{id:t},n):null,c||(c=l.createElement("path",{fill:"#a5f4ff",d:"M496.327 449.306H15.673C7.018 449.306 0 442.289 0 433.633V78.367c0-8.656 7.018-15.673 15.673-15.673h480.653c8.656 0 15.673 7.018 15.673 15.673v355.265c.001 8.657-7.017 15.674-15.672 15.674"})),o||(o=l.createElement("path",{fill:"#ffea8c",d:"M256 231.441c-28.808 0-52.245-23.437-52.245-52.245s23.437-52.245 52.245-52.245 52.245 23.437 52.245 52.245-23.437 52.245-52.245 52.245"})),a||(a=l.createElement("path",{fill:"#6ddbc9",d:"M512 243.835v189.797c0 8.656-7.018 15.673-15.673 15.673h-337.29C213.445 308.946 358.013 221.228 512 243.835"})),d||(d=l.createElement("path",{fill:"#69f4db",d:"M0 243.835v189.797c0 8.656 7.018 15.673 15.673 15.673h337.29C298.553 308.946 153.987 221.228 0 243.835"})))},x=e=>{const[n,t]=l.useState(!1);return l.useEffect((()=>{document.onfullscreenchange=()=>{t(document.fullscreenElement)}}),[]),(0,r.jsx)("svg",{className:"PhotoView-Slider__toolbarIcon",fill:"white",width:"44",height:"44",viewBox:"0 0 768 768",...e,children:n?(0,r.jsx)("path",{d:"M511.5 256.5h96v63h-159v-159h63v96zM448.5 607.5v-159h159v63h-96v96h-63zM256.5 256.5v-96h63v159h-159v-63h96zM160.5 511.5v-63h159v159h-63v-96h-96z"}):(0,r.jsx)("path",{d:"M448.5 160.5h159v159h-63v-96h-96v-63zM544.5 544.5v-96h63v159h-159v-63h96zM160.5 319.5v-159h159v63h-96v96h-63zM223.5 448.5v96h96v63h-159v-159h63z"})})},f=e=>{const{image:n,size:t="100%",width:l,height:c,alt:o="",align:a="center"}=e;function d(){if(document.fullscreenElement)document.exitFullscreen();else{const e=document.querySelector(".PhotoView-Portal");e&&e.requestFullscreen()}}return(0,r.jsx)(i.wy,{speed:()=>400,easing:e=>2===e?"cubic-bezier(0.36, 0, 0.66, -0.56)":"cubic-bezier(0.34, 1.56, 0.64, 1)",loadingElement:(0,r.jsx)(s,{className:"text-white w-8 h-8"}),brokenElement:(0,r.jsx)("img",{className:"w-32 h-32",src:u.src,alt:""}),toolbarRender:e=>{let{rotate:n,onRotate:t,onScale:l,scale:i,index:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("svg",{className:"PhotoView-Slider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>l(i+.5),children:(0,r.jsx)("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM415.5 223.5v129h129v63h-129v129h-63v-129h-129v-63h129v-129h63z"})}),(0,r.jsx)("svg",{className:"PhotoView-Slider__toolbarIcon",width:"44",height:"44",viewBox:"0 0 768 768",fill:"white",onClick:()=>l(i-.5),children:(0,r.jsx)("path",{d:"M384 640.5q105 0 180.75-75.75t75.75-180.75-75.75-180.75-180.75-75.75-180.75 75.75-75.75 180.75 75.75 180.75 180.75 75.75zM384 64.5q132 0 225.75 93.75t93.75 225.75-93.75 225.75-225.75 93.75-225.75-93.75-93.75-225.75 93.75-225.75 225.75-93.75zM223.5 352.5h321v63h-321v-63z"})}),(0,r.jsx)("svg",{className:"PhotoView-Slider__toolbarIcon",onClick:()=>t(n+90),width:"44",height:"44",fill:"white",viewBox:"0 0 768 768",children:(0,r.jsx)("path",{d:"M565.5 202.5l75-75v225h-225l103.5-103.5c-34.5-34.5-82.5-57-135-57-106.5 0-192 85.5-192 192s85.5 192 192 192c84 0 156-52.5 181.5-127.5h66c-28.5 111-127.5 192-247.5 192-141 0-255-115.5-255-256.5s114-256.5 255-256.5c70.5 0 135 28.5 181.5 75z"})}),document.fullscreenEnabled&&(0,r.jsx)(x,{onClick:d})]})},children:(0,r.jsx)("div",{className:"foo",width:"100%",style:{textAlign:a},children:(0,r.jsx)(i.A8,{src:n,children:(0,r.jsx)("img",{width:t||l,height:t||c,src:n,alt:o})},n)})})}}}]);