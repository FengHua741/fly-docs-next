"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[57283],{92848:(e,n,i)=>{i.d(n,{Ay:()=>o,RM:()=>a});var t=i(86070),r=i(15658);const a=[];function s(e){const n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,t.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,t.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,t.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CAN connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,t.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["RS232 connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,t.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["USB connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},30675:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/index","title":"index","description":"* The SB2040 PRO V3 is shipped with a Katapult firmware pre-flashed for CAN connection at a rate of 1M.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Firmware Burn-in Instructions"},"sidebar":"tutorialSidebar","previous":{"title":"SB2040 PRO V3 \u56fa\u4ef6\u7f16\u8bd1\u4e0e\u70e7\u5f55","permalink":"/fly-docs-next/en/docs/category/sb2040-pro-v3-\u56fa\u4ef6\u7f16\u8bd1\u4e0e\u70e7\u5f55"},"next":{"title":"CAN Firmware Flashing","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/can"}}');var r=i(86070),a=i(15658),s=i(61706),o=i(63436),l=i(92848);const d={sidebar_position:1,sidebar_label:"Firmware Burn-in Instructions"},c="Firmware Burn-in Instructions",h={},u=[{value:"How to Determine Which Firmware You Need",id:"how-to-determine-which-firmware-you-need",level:2},{value:"Katapult Firmware Instructions",id:"katapult-firmware-instructions",level:2},...l.RM];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The SB2040 PRO V3 is shipped with a Katapult firmware pre-flashed for CAN connection at a rate of 1M."}),"\n",(0,r.jsx)(n.li,{children:"The Katapult firmware connected via CAN to the SB2040 PRO V3 has rates of 500K and 1M, which can be flashed as needed."}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(s.A,{variant:"contained",disableElevation:!0,href:"./bl",children:"Burn Katapult Firmware"}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"firmware-burn-in-instructions",children:"Firmware Burn-in Instructions"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The SB2040 PRO V3 can connect to the host machine via two methods: RS232 or CAN."}),"\n",(0,r.jsxs)(n.li,{children:["Both RS232 and CAN require the use of ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})," for connection."]}),"\n",(0,r.jsxs)(n.li,{children:["Below is the appearance of the ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})," data cable."]}),"\n"]}),"\n",(0,r.jsx)(o.A,{image:i(15159).A,size:"80%",align:"left"}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Motherboard firmware burn-in needs to be done through Katapult to flash Klipper."}),"\n",(0,r.jsx)(n.li,{children:"If it is confirmed that the motherboard has already been flashed with Katapult, there is no need to perform the final step of flashing the Katapult firmware; this is just a precaution in case the Katapult firmware was not successfully flashed on the motherboard."}),"\n",(0,r.jsx)(n.li,{children:"You can quickly press the reset button twice to see if an LED on the motherboard blinks, indicating that the motherboard has entered the Katapult firmware."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-determine-which-firmware-you-need",children:"How to Determine Which Firmware You Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The SB2040 PRO V3 can connect to the host machine using the following methods."}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(s.A,{variant:"contained",disableElevation:!0,href:"./can",children:"CAN Firmware Burn-in"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Advantage: If the ",(0,r.jsx)(n.code,{children:"Katapult"})," firmware is flashed, you can update the firmware without touching the motherboard, and it supports bus connections."]}),"\n",(0,r.jsxs)(n.li,{children:["Disadvantage: There may be errors such as homing timeouts when used with ",(0,r.jsx)(n.code,{children:"KlipperScreen"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Tip: If you need to use CAN, ensure that the host machine supports CAN and that it is paired with UTOC or a motherboard with bridge firmware flashed."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(s.A,{variant:"contained",disableElevation:!0,href:"./rs232",children:"RS232 Firmware Burn-in"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantage: No special software is required; communication is reliable and stable."}),"\n",(0,r.jsxs)(n.li,{children:["Disadvantage: To reflash the firmware, you need to enter manual DFU mode or double-click RST to enter ",(0,r.jsx)(n.code,{children:"Katapult"})," to update the firmware."]}),"\n",(0,r.jsx)(n.li,{children:"Tip: It requires pairing with G2T or UTOR to be used."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"katapult-firmware-instructions",children:"Katapult Firmware Instructions"}),"\n",(0,r.jsx)(l.Ay,{})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},15159:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/xt30-7ba44ea4a7b99f68b997fb49f5689382.png"}}]);