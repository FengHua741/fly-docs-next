"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[6226],{99596:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(86070),o=i(15658),s=i(63436);const r={sidebar_position:3,sidebar_label:"Connecting Klipper"},c="Connecting Klipper",l={id:"ProductDoc/ExtensionBoard/fly-airclick/wifi",title:"Connecting Klipper",description:"* The onboard antenna of this product can only be used for receiving, the transmission antenna needs to be installed by yourself, the antenna terminal is ipex3",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-airclick/wifi.mdx",sourceDirName:"ProductDoc/ExtensionBoard/fly-airclick",slug:"/ProductDoc/ExtensionBoard/fly-airclick/wifi",permalink:"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-airclick/wifi",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-airclick/wifi.mdx",tags:[],version:"current",lastUpdatedBy:"XiaoK",lastUpdatedAt:1730539595e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Connecting Klipper"},sidebar:"tutorialSidebar",previous:{title:"Firmware Update",permalink:"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-airclick/falsh"},next:{title:"Wireless Connection Configuration",permalink:"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-airclick/button"}},a={},d=[{value:"Connecting AirClick to WIFI",id:"connecting-airclick-to-wifi",level:2},{value:"Changing Language",id:"changing-language",level:2},{value:"Connecting to Klipper",id:"connecting-to-klipper",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"connecting-klipper",children:"Connecting Klipper"})}),"\n",(0,t.jsx)(n.admonition,{title:"Important Notice",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The onboard antenna of this product can only be used for receiving, the transmission antenna needs to be installed by yourself, the antenna terminal is ",(0,t.jsx)(n.code,{children:"ipex3"})]}),"\n",(0,t.jsx)(n.li,{children:"Please install the antenna properly!!! Otherwise, poor signal will cause serious heating!!!"}),"\n",(0,t.jsx)(n.li,{children:"You need to manually connect to the AirClick hotspot first, then connect to the corresponding WIFI"}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{title:"Important Notice",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AirClick sends commands to the Klipper control machine after connecting to Moonraker"}),"\n",(0,t.jsx)(n.li,{children:"Custom macros, emergency stop, Klipper restart, firmware restart, system shutdown, etc., can be achieved"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"connecting-airclick-to-wifi",children:"Connecting AirClick to WIFI"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Connect to the AirClick hotspot, the hotspot name is ",(0,t.jsx)(n.code,{children:"FLY-WBTN-XXXXXX"}),"\n",(0,t.jsx)(s.A,{image:i(2342).A,size:"50%",align:"Center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["After connecting to the hotspot, access ",(0,t.jsx)(n.a,{href:"http://192.168.4.1/#/setting",children:"192.168.4.1"})," through a browser"]}),"\n",(0,t.jsxs)(n.li,{children:["This will display the WIFI settings interface where you need to manually enter the password of the router that your printer is connected to and click the blue box below to connect to WIFI","\n",(0,t.jsx)(s.A,{image:i(18972).A,size:"50%",align:"Center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["After connecting to WIFI, it will prompt the IP address of the AirClick after connection. Click the blue box below to restart the device","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Number 1 circled is the IP address of the AirClick"}),"\n",(0,t.jsx)(n.li,{children:"Number 2 circled copy the IP and restart the device"}),"\n"]}),"\n",(0,t.jsx)(s.A,{image:i(26551).A,size:"80%",align:"Center"}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Please note that you need to manually switch your current network to the corresponding router, otherwise you will not be able to access"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"changing-language",children:"Changing Language"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on the icon circled at the top right, choose the language you need","\n",(0,t.jsx)(s.A,{image:i(66171).A,size:"80%",align:"Center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"connecting-to-klipper",children:"Connecting to Klipper"}),"\n",(0,t.jsx)(n.admonition,{title:"Important Notice",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AirClick sends commands to the Klipper control machine after connecting to Moonraker"}),"\n",(0,t.jsx)(n.li,{children:"Custom macros, emergency stop, Klipper restart, firmware restart, system shutdown, etc., can be achieved"}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Click on the System Settings on the left","\n",(0,t.jsx)(s.A,{image:i(42073).A,size:"80%",align:"Center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Find the ",(0,t.jsx)(n.code,{children:"Moonraker IP"})," below and enter the IP address of the Klipper machine","\n",(0,t.jsx)(s.A,{image:i(25411).A,size:"80%",align:"Center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Number 1 enter the IP address of the Klipper host"}),"\n",(0,t.jsxs)(n.li,{children:["Number 2 defaults to ",(0,t.jsx)(n.code,{children:"7125"}),", if the host uses another port, you need to enter the corresponding port manually"]}),"\n",(0,t.jsx)(n.li,{children:"Number 3 confirm and save the configuration"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["After correct connection, a prompt will appear at the top of the webpage","\n",(0,t.jsx)(s.A,{image:i(28497).A,size:"80%",align:"Center"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},25411:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/setting-1-14e2da7d1d2de4cb747fb40bdbbfe20e.png"},66171:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/setting-2-dcbc57f2e612fade89b23908e028a9db.png"},28497:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/setting-3-6e2cb0f90016a40a31f9d71cd1ad5b50.png"},42073:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/setting-a3a1380c1def1cea7e765dca2109ee53.png"},18972:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/wifi-1-05e270ebe7e3019e627f5a0f93cb6d63.png"},26551:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/wifi-2-e78393e1f88a6ce2413b19a5e0de0a44.png"},2342:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/wifi-ef96e8ccb7fdd543c0343cf0441f9700.png"}}]);