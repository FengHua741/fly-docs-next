"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[51604],{67204:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var n=r(86070),o=r(15658),t=r(63436),s=r(61706);const d={sidebar_position:8,sidebar_label:"Main Board Precautions"},c="Main Board Precautions",l={id:"ProductDoc/MainBoard/fly-super/fly-super8-pro/warning",title:"Main Board Precautions",description:"Power Indicator",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-super/fly-super8-pro/warning.mdx",sourceDirName:"ProductDoc/MainBoard/fly-super/fly-super8-pro",slug:"/ProductDoc/MainBoard/fly-super/fly-super8-pro/warning",permalink:"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/warning",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/warning.mdx",tags:[],version:"current",lastUpdatedBy:"XiaoK",lastUpdatedAt:1730539595e3,sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Main Board Precautions"},sidebar:"tutorialSidebar",previous:{title:"3D Models and Schematics",permalink:"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/schematic"},next:{title:"FLY-Super8",permalink:"/fly-docs-next/en/docs/category/fly-super8"}},a={},h=[{value:"Power Indicator",id:"power-indicator",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Drivers",id:"drivers",level:2},{value:"Limit Switches",id:"limit-switches",level:2},{value:"Firmware Burning",id:"firmware-burning",level:2}];function u(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"main-board-precautions",children:"Main Board Precautions"})}),"\n",(0,n.jsx)(i.h2,{id:"power-indicator",children:"Power Indicator"}),"\n",(0,n.jsx)(t.A,{image:r(63965).A,size:"80%",align:"center"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["When powered only through TYPE-C without connecting other motherboard power, at least two lights ",(0,n.jsx)(i.code,{children:"3.3V"})," and ",(0,n.jsx)(i.code,{children:"5V"})," should be on."]}),"\n",(0,n.jsxs)(i.li,{children:["After connecting to the motherboard power, the motherboard power light should illuminate ",(0,n.jsx)(i.code,{children:"3.3V"}),", ",(0,n.jsx)(i.code,{children:"5V"}),", and ",(0,n.jsx)(i.code,{children:"12V"}),"."]}),"\n",(0,n.jsx)(i.li,{children:"The power indicator on the bottom left of the motherboard will only light up normally after the driver power 0-2, driver power 3-7, and hotbed power are connected."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(i.admonition,{title:"Notice",type:"danger",children:(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"With no external devices connected (drivers, limit switches, 12864, etc.)"}),"\n",(0,n.jsxs)(i.li,{children:["At least two LEDs, ",(0,n.jsx)(i.code,{children:"3.3V"})," and ",(0,n.jsx)(i.code,{children:"5V"}),", should remain constantly on when powered only through TYPE-C."]}),"\n"]})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["If ",(0,n.jsx)(i.code,{children:"3.3V"})," and ",(0,n.jsx)(i.code,{children:"5V"})," do not light up, please check the motherboard's 5V jumper."]}),"\n",(0,n.jsx)(i.li,{children:"If the issue persists after changing the jumper and confirming that the TYPE-C is supplying power correctly, contact customer service."}),"\n",(0,n.jsxs)(i.li,{children:["If one of the lights ",(0,n.jsx)(i.code,{children:"3.3V"}),", ",(0,n.jsx)(i.code,{children:"5V"}),", or ",(0,n.jsx)(i.code,{children:"12V"})," is blinking, it indicates a chip short circuit, and you need to contact customer service.","\n",(0,n.jsx)(t.A,{image:r(75513).A,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"drivers",children:"Drivers"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Pay attention to the driver power, which is divided into two routes: the first route powers drivers 3-7, and the second route powers 0-2."}),"\n",(0,n.jsxs)(i.li,{children:["The motherboard supports external drivers     ",(0,n.jsx)(s.A,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ModuleDrive/servo-drive",children:"Wiring and Configuration Guide"})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"limit-switches",children:"Limit Switches"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Except for the last driver port (Drive7), which has an infinite limit switch, all other driver ports have infinite limits directly connected to the limit switch."}),"\n",(0,n.jsxs)(i.li,{children:["If the limit switch does not work, you can replace the limit switch or cut off the infinite limit pin of the driver.","\n",(0,n.jsx)(t.A,{image:r(1061).A,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"firmware-burning",children:"Firmware Burning"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The motherboard uses an SD card for burning."}),"\n",(0,n.jsxs)(i.li,{children:["Due to tutorial issues, DFU was previously used for burning. If you need to update the firmware, you need to ",(0,n.jsx)(s.A,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/MainBoard/fly-super/fly-super8-pro/flash/bl",children:"re-burn BL"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},75513:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/5v-f96a9a008aac4ff5c232f7e1a91c2ad1.png"},63965:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/power-6ab06bd6f950d8dea54699ea3f7ecd23.png"},1061:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/2209diag-09da8b2465737ef5ae2d4b3f9c07e52f.png"}}]);