"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[2790],{54806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(74848),c=t(28453),a=t(67194);const o={sidebar_position:11,sidebar_label:"\u4e3b\u63a7\u98ce\u6247"},s="\u677f\u8f7d5V\u98ce\u6247\u53e3",i={id:"ProductDoc/MainBoard/fly-c/fly-c8/fan",title:"\u677f\u8f7d5V\u98ce\u6247\u53e3",description:"C8\u677f\u8f7d\u4e86\u4e00\u4e2a5V\u7684\u53ef\u63a7\u63a5\u53e3\uff0c\u7528\u4e8e\u4e3b\u63a7\u6563\u70ed\uff0c\u63a5\u7ebf\u65b9\u6cd5\u5982\u4e0b\u56fe",source:"@site/docs/ProductDoc/MainBoard/fly-c/fly-c8/fan.mdx",sourceDirName:"ProductDoc/MainBoard/fly-c/fly-c8",slug:"/ProductDoc/MainBoard/fly-c/fly-c8/fan",permalink:"/fly-docs-next/de/docs/ProductDoc/MainBoard/fly-c/fly-c8/fan",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-c/fly-c8/fan.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1724309456e3,sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"\u4e3b\u63a7\u98ce\u6247"},sidebar:"tutorialSidebar",previous:{title:"CAN\u6865\u63a5",permalink:"/fly-docs-next/de/docs/ProductDoc/MainBoard/fly-c/fly-c8/canbridge"},next:{title:"BL\u70e7\u5f55",permalink:"/fly-docs-next/de/docs/ProductDoc/MainBoard/fly-c/fly-c8/bl"}},d={},l=[{value:"C8\u677f\u8f7d\u4e86\u4e00\u4e2a5V\u7684\u53ef\u63a7\u63a5\u53e3\uff0c\u7528\u4e8e\u4e3b\u63a7\u6563\u70ed\uff0c\u63a5\u7ebf\u65b9\u6cd5\u5982\u4e0b\u56fe",id:"c8\u677f\u8f7d\u4e86\u4e00\u4e2a5v\u7684\u53ef\u63a7\u63a5\u53e3\u7528\u4e8e\u4e3b\u63a7\u6563\u70ed\u63a5\u7ebf\u65b9\u6cd5\u5982\u4e0b\u56fe",level:2},{value:"\u53c2\u8003\u914d\u7f6e",id:"\u53c2\u8003\u914d\u7f6e",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u677f\u8f7d5v\u98ce\u6247\u53e3",children:"\u677f\u8f7d5V\u98ce\u6247\u53e3"}),"\n",(0,r.jsx)(n.h2,{id:"c8\u677f\u8f7d\u4e86\u4e00\u4e2a5v\u7684\u53ef\u63a7\u63a5\u53e3\u7528\u4e8e\u4e3b\u63a7\u6563\u70ed\u63a5\u7ebf\u65b9\u6cd5\u5982\u4e0b\u56fe",children:"C8\u677f\u8f7d\u4e86\u4e00\u4e2a5V\u7684\u53ef\u63a7\u63a5\u53e3\uff0c\u7528\u4e8e\u4e3b\u63a7\u6563\u70ed\uff0c\u63a5\u7ebf\u65b9\u6cd5\u5982\u4e0b\u56fe"}),"\n",(0,r.jsx)(a.A,{image:t(22583).A,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu host]                      # FlyOS\u5df2\u9ed8\u8ba4\u4e3a\u60a8\u751f\u6210linux MCU\uff0c\u5b9a\u4e49\u5373\u53ef\u4f7f\u7528           \nserial: /tmp/klipper_host_mcu \n\n[temperature_sensor FLY-\u03c0]      # \u4e0a\u4f4d\u673a\u6e29\u5ea6\nsensor_type: temperature_host\n\n\n[temperature_fan core_fan]      # \u4e0a\u4f4d\u673a\u6563\u70ed\u98ce\u6247\npin: host:gpiochip1/gpio103     # \u4e0a\u4f4d\u673a\u98ce\u6247pin\u811a\nmax_power: 1.0\nsensor_type: temperature_host   # \u8bbe\u7f6e\u4e3a\u4e0a\u4f4d\u673a\u4e3b\u63a7\u6e29\u5ea6\ncontrol:watermark               # \u63a7\u5236\u65b9\u5f0f\ntarget_temp: 48                 # \u4e0a\u4f4d\u673a\u6563\u70ed\u98ce\u6247\u542f\u52a8\u6e29\u5ea6\nmin_temp: 0                     # \u6700\u4f4e\u6e29\u5ea6\uff0c\u4f4e\u4e8e\u6b64\u6e29\u5ea6\u5c06\u4f1a\u62a5\u9519\nmax_temp: 90                    # \u6700\u9ad8\u6e29\u5ea6\uff0c\u9ad8\u4e8e\u6b64\u6e29\u5ea6\u5c06\u4f1a\u62a5\u9519\noff_below: 0.10\nkick_start_time: 0.50\nmax_speed: 0.8                  # \u6700\u5927\u8f6c\u901f\uff0c\u4e3a\u6ee1\u529f\u7387\u8fd0\u8f6c\u65f6\u768480%\nmin_speed: 0.3                  # \u6700\u5c0f\u8f6c\u901f\uff0c\u4e3a\u6ee1\u529f\u7387\u8fd0\u8f6c\u65f6\u768430%\n"})})]})}function f(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},22583:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/corefan-facfc174e551c74f64ad60fb355773b1.png"}}]);