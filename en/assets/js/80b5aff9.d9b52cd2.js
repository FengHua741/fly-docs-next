"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[6770],{60173:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>i});var r=t(86070),a=t(15658);const i=[];function s(e){const n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,r.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,r.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,r.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["CAN connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RS232 connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["USB connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},48120:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var r=t(86070),a=t(15658),i=t(63436);const s=[];function l(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install the flashing tool"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enter the following command in SSH"}),"\n",(0,r.jsx)(n.li,{children:"Only execute this for the first flashing, no need to run it again after that"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,r.jsx)(i.A,{image:t(64692).A,size:"100%",align:"left"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execute the following command to check if the connection is successful."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter ",(0,r.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If there is no ",(0,r.jsx)(n.code,{children:"2e8a:0003"})," device, please try to re-enter ",(0,r.jsx)(n.strong,{children:"flashing mode"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Due to system version issues, it may display other names. If there is a ",(0,r.jsx)(n.code,{children:"2e8a:0003"}),", it indicates that the flashing mode has been entered."]}),"\n",(0,r.jsx)(i.A,{image:t(85284).A,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,r.jsxs)(n.p,{children:["Only proceed if there is a ",(0,r.jsx)(n.code,{children:"2e8a:0003"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pull the pre-compiled firmware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,r.jsx)(n.li,{children:"Please note that the host machine needs to be able to access the internet to install"}),"\n",(0,r.jsx)(n.li,{children:"The host machine needs to execute the following command to download the firmware package"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you have already downloaded the firmware package, it is recommended to update the firmware package before proceeding with the remaining steps"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},32049:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var r=t(86070),a=t(15658),i=t(63436);const s=[];function l(e){const n={code:"code",li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prepare a data cable with data transmission capability"}),"\n",(0,r.jsx)(n.li,{children:"Download the firmware to your computer"}),"\n",(0,r.jsxs)(n.li,{children:["Connect the BOOT jumper or hold it down after connecting to the computer, at this point the ",(0,r.jsx)(n.code,{children:"RPI-RP2"})," disk will appear","\n",(0,r.jsx)(i.A,{image:t(59205).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Remove the BOOT jumper or release the button!!!"}),"\n",(0,r.jsx)(n.li,{children:"Copy the firmware you need to burn into the disk, please note that only UF2 suffix firmware can be used!!! (Do not modify the suffix name, it is useless)"}),"\n",(0,r.jsxs)(n.li,{children:["Reference","\n",(0,r.jsx)(i.A,{image:t(31736).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["After copying the firmware into the ",(0,r.jsx)(n.code,{children:"RPI-RP2"})," disk, it will automatically disappear, at this point the firmware burning is completed!"]}),"\n"]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>p,default:()=>g,frontMatter:()=>h,metadata:()=>m,toc:()=>b});var r=t(86070),a=t(15658),i=t(32049),s=t(48120),l=t(60173),o=t(48784),c=t(49108),d=t(61706),u=t(63436);const h={sidebar_position:6,sidebar_label:"BL firmware, please ignore"},p="Katapult Firmware",m={id:"ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/flash/bl",title:"Katapult Firmware",description:"Katapult Firmware Description",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/flash/bl.mdx",sourceDirName:"ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/flash",slug:"/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/flash/bl",permalink:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/flash/bl",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/flash/bl.mdx",tags:[],version:"current",lastUpdatedBy:"XiaoK",lastUpdatedAt:1730539595e3,sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"BL firmware, please ignore"},sidebar:"tutorialSidebar",previous:{title:"ID Search Tutorial",permalink:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/flash/id"},next:{title:"Motherboard Reference Wiring",permalink:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/wiring"}},f={},b=[{value:"Katapult Firmware Description",id:"katapult-firmware-description",level:2},...l.RM,{value:"Entering Programming Mode",id:"entering-programming-mode",level:2},{value:"Flashing Firmware",id:"flashing-firmware",level:2},...i.RM,...s.RM,{value:"Confirming Firmware Boot",id:"confirming-firmware-boot",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"katapult-firmware",children:"Katapult Firmware"})}),"\n",(0,r.jsx)(n.h2,{id:"katapult-firmware-description",children:"Katapult Firmware Description"}),"\n",(0,r.jsx)(l.Ay,{}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040_V3 supports CAN and RS232"}),"\n",(0,r.jsx)(n.li,{children:"Only CAN firmware at 500K and 1M baud rates are provided here"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"entering-programming-mode",children:"Entering Programming Mode"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The left is the ",(0,r.jsx)(n.code,{children:"RESET button"}),", and the right is the ",(0,r.jsx)(n.code,{children:"BOOT button"}),"."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"There are two methods to enter programming mode."}),"\n",(0,r.jsx)(n.li,{children:"Method one: With the main board completely powered off, hold the BOOT button and then connect the data transmission cable to both the main board and your device."}),"\n",(0,r.jsxs)(n.li,{children:["Method two: Connect the data transmission cable to both the main board and your device, hold the BOOT button, press the RST button, release the RST button, and finally release the BOOT button.","\n",(0,r.jsx)(u.A,{image:t(48668).A,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flashing-firmware",children:"Flashing Firmware"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(c.A,{value:"win",label:"Windows Flash Tutorial",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The Katapult firmware for SB2040 V3 ",(0,r.jsx)(d.A,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/SB2040_V3.zip",children:"Click to automatically download the firmware"})]}),"\n"]}),(0,r.jsx)(i.Ay,{})]}),(0,r.jsxs)(c.A,{value:"linux",label:"Host Machine Flash Tutorial",children:[(0,r.jsx)(s.Ay,{}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Flash Firmware"}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Only one firmware needs to be flashed."})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Below is the command to flash the 500K CAN baud rate firmware:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SB2040/FLY_SB2040V3_CANBOOT_CAN_500K.uf2\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Below is the command to flash the 1M CAN baud rate firmware:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SB2040/FLY_SB2040V3_CANBOOT_CAN_1M.uf2\n"})}),"\n"]}),"\n"]}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you see the prompt below, the flashing is successful."}),"\n",(0,r.jsx)(u.A,{image:t(13235).A,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"After flashing, you need to power off the main board completely."})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"confirming-firmware-boot",children:"Confirming Firmware Boot"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the firmware starts up normally, the LED will blink.","\n",(0,r.jsx)(u.A,{image:t(64245).A,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},49108:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var r=t(13526);const a={tabItem:"tabItem_UnVV"};var i=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},48784:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(30758),a=t(13526),i=t(31134),s=t(25557),l=t(4706),o=t(13587),c=t(15280),d=t(98116);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(1306);const x={tabList:"tabList_mS1C",tabItem:"tabItem_SS9X"};var g=t(86070);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(w,{...n,...e})]})}function v(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},64692:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/2040-43c81d0f8030e52816db1be8521a2929.png"},13235:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/flash3-45b54a25718cd4a451d3d2b457069876.png"},59205:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/uf2-675454aaf6017450feee226084f05572.png"},31736:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/uf21-130cad39055e132ae37b750c38bc9eb8.png"},85284:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/2e8a-5bc7c58f995abf8e3174d6c8e696caa6.png"},48668:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/boot-726e24d4fa1489d4d97830731937e583.png"},64245:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/led-9a5abcc0c5d41ca1e11ed433aa7f27b0.png"}}]);