"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[49396],{31741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=n(86070),i=n(15658),s=n(63436);const l={sidebar_position:1,sidebar_label:"Introduction"},d="Introduction",o={id:"ProductDoc/ToolBoard/fly-sht36/sht36_v3/index",title:"Introduction",description:"This document is being migrated. Please visit the old documentation until it is complete.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_v3/index.mdx",sourceDirName:"ProductDoc/ToolBoard/fly-sht36/sht36_v3",slug:"/ProductDoc/ToolBoard/fly-sht36/sht36_v3/",permalink:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/index.mdx",tags:[],version:"current",lastUpdatedBy:"XiaoK",lastUpdatedAt:1730539595e3,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"FLY-SHT36-V3",permalink:"/fly-docs-next/en/docs/category/fly-sht36-v3"},next:{title:"Onboard DIP Switch Introduction",permalink:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/dip_switch"}},c={},a=[{value:"1.1 Product Features",id:"11-product-features",level:2},{value:"1.2 New Features",id:"12-new-features",level:2},{value:"1.3 Product Specifications",id:"13-product-specifications",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["This document is being migrated. Please visit the ",(0,r.jsx)(t.a,{href:"https://mellow.klipper.cn/#/",children:"old documentation"})," until it is complete."]})}),"\n",(0,r.jsx)(t.h1,{id:"1-product-introduction",children:"1. Product Introduction"}),"\n",(0,r.jsx)(t.p,{children:"FLY SHT36 V3 is a tool board designed by Guangzhou Mellow Electronic Technology Co., Ltd. for 3D printer extruder heads, which can replace the complex wiring between the motherboard and the print head with four wires, optimizing the layout. SHT36 V3 is suitable for 36 stepper motors and integrates features such as a CAN transceiver, RS232 transceiver, TypeC port, TMC2209 driver, LIS2DW accelerometer sensor, two controllable fans, and more. This tool board is compatible with Klipper and RRF firmware."}),"\n",(0,r.jsx)(s.A,{image:n(15303).A,size:"100%",align:"center"}),"\n",(0,r.jsx)(t.h2,{id:"11-product-features",children:"1.1 Product Features"}),"\n",(0,r.jsx)(t.p,{children:"*\u9884\u7559Boot\u6309\u94ae\uff0c\u7528\u6237\u53ef\u901a\u8fc7TypeC\u8fdb\u5165Boot\u6a21\u5f0f\u66f4\u65b0\u56fa\u4ef6"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Supports Klipper firmware and RRF firmware"}),"\n",(0,r.jsx)(t.li,{children:"Supports CAN mode, RS232 mode, and RRF CAN mode"}),"\n",(0,r.jsx)(t.li,{children:"In RS232 mode, it has higher transmission rates and stronger stability. In CAN mode, it supports CAN expansion and has reserved CAN expansion interfaces"}),"\n",(0,r.jsx)(t.li,{children:"Temperature sensor support: Onboard MAX31865 chip, compatible with PT100 and PT1000 temperature sensors."}),"\n",(0,r.jsx)(t.li,{children:"Supports two controllable fans with selectable voltage, can be replaced with Mos small boards for easy maintenance and replacement, with a maximum output current of up to 1A"}),"\n",(0,r.jsx)(t.li,{children:"Onboard LIS2DW accelerometer sensor and LDC1612 sensor"}),"\n",(0,r.jsx)(t.li,{children:"Reserved RGB interface, onboard TMC2209 driver, supports multiple leveling sensors such as BLTouch, Klicky, Voron Tap, PL08n, etc."}),"\n",(0,r.jsx)(t.li,{children:"Supports input voltage of 12-24V and 15A current, larger heating rod port with a rated current of 10A"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"12-new-features",children:"1.2 New Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Supports switching between Klipper CAN mode, RS232 mode, and RRF CAN mode"}),"\n",(0,r.jsx)(t.li,{children:"New RS232 mode with higher transmission rates and stronger stability, making debugging simpler"}),"\n",(0,r.jsx)(t.li,{children:"New RRF CAN mode, can switch to RRF tool board, enhancing versatility"}),"\n",(0,r.jsx)(t.li,{children:"New CAN expansion interface for easy expansion of CAN devices"}),"\n",(0,r.jsx)(t.li,{children:"New terminal resistor DIP switch, with a 120R terminal resistor that can be selected via the DIP switch, eliminating the need for jumpers"}),"\n",(0,r.jsx)(t.li,{children:"New 1-meter power/signal connection cable, designed with twisted pair for stronger interference resistance"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"13-product-specifications",children:"1.3 Product Specifications"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"MCU: Raspberry Pi rp2040, Dual-core ARM Cortex-M0+ @ 133 MHz"}),"\n",(0,r.jsx)(t.li,{children:"Connection interface uses XT30 (2+2) connector supporting 15A current, peak 30A"}),"\n",(0,r.jsx)(t.li,{children:"Firmware: RepRap/Klipper"}),"\n",(0,r.jsx)(t.li,{children:"Input voltage: DC12V-24V"}),"\n",(0,r.jsx)(t.li,{children:"Logic voltage: DC3.3V"}),"\n",(0,r.jsx)(t.li,{children:"Onboard sensors: LIS2DW and LDC1612"}),"\n",(0,r.jsx)(t.li,{children:"Heater block interface: Heater (HEAT0), 10A"}),"\n",(0,r.jsx)(t.li,{children:"Expansion interfaces: RGB, EndStop, PT100/PT1000, XH2.54-2P CAN expansion port"}),"\n",(0,r.jsx)(t.li,{children:"Fan interfaces: Two controllable DC fans"}),"\n",(0,r.jsx)(t.li,{children:"Motor driver: Onboard TMC2209"}),"\n",(0,r.jsx)(t.li,{children:"Temperature sensor: One 100K NTC or PT1000 (TH0), one PT100/PT1000 selectable"}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"4-product-categories",children:"4. Product Categories"}),"\n",(0,r.jsxs)(t.p,{children:["RRF tutorial link ",(0,r.jsx)(t.a,{href:"https://teamgloomy.github.io/fly_rrf_36_general.html",children:"RRF"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"SHT36 V3"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"V3"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Plus V3"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Max V3"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Klipper CANBus"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Klipper RS232"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"RRF CANBus"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"LIS2DW"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"MAX31865"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"LDC1612"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},15303:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/sht36-19256d0d817d18edd3aea34906c806ac.png"}}]);