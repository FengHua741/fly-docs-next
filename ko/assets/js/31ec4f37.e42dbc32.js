"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[27163],{69294:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var l=i(86070),d=i(15658);i(63436);const r={sidebar_position:2},s="\u56fa\u4ef6\u8bf4\u660e",t={id:"DebugDoc/baodian/firmware",title:"\u56fa\u4ef6\u8bf4\u660e",description:"* Klipper\u56fa\u4ef6\u6700\u597d\u4f7f\u7528\u4f60\u7684\u4e0a\u4f4d\u673a\u56fa\u4ef6\u8fdb\u884c\u7f16\u8bd1",source:"@site/docs/DebugDoc/baodian/firmware.mdx",sourceDirName:"DebugDoc/baodian",slug:"/DebugDoc/baodian/firmware",permalink:"/fly-docs-next/ko/docs/DebugDoc/baodian/firmware",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/baodian/firmware.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1729488452e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"debugdocSidebar",previous:{title:"\u4e0a\u4f4d\u673a\u7bc7",permalink:"/fly-docs-next/ko/docs/DebugDoc/baodian/host"}},o={},c=[{value:"\u7279\u6b8a\u8bf4\u660e",id:"\u7279\u6b8a\u8bf4\u660e",level:2},{value:"\u56fa\u4ef6\u7f16\u8bd1\u8bf4\u660e",id:"\u56fa\u4ef6\u7f16\u8bd1\u8bf4\u660e",level:2},{value:"\u56fa\u4ef6\u7f16\u8bd1\u8bf4\u660e",id:"\u56fa\u4ef6\u7f16\u8bd1\u8bf4\u660e-1",level:2},{value:"STM32",id:"stm32",level:3},{value:"RP2040",id:"rp2040",level:3},{value:"\u56fa\u4ef6\u70e7\u5f55\u8bf4\u660e",id:"\u56fa\u4ef6\u70e7\u5f55\u8bf4\u660e",level:2},{value:"Katapult\u56fa\u4ef6",id:"katapult\u56fa\u4ef6",level:3},{value:"bootloader\u56fa\u4ef6",id:"bootloader\u56fa\u4ef6",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u56fa\u4ef6\u8bf4\u660e",children:"\u56fa\u4ef6\u8bf4\u660e"})}),"\n",(0,l.jsx)(n.admonition,{title:"\u987b\u77e5",type:"danger",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Klipper\u56fa\u4ef6\u6700\u597d\u4f7f\u7528\u4f60\u7684\u4e0a\u4f4d\u673a\u56fa\u4ef6\u8fdb\u884c\u7f16\u8bd1"}),"\n",(0,l.jsx)(n.li,{children:"\u4f7f\u7528\u5176\u4ed6\u4eba\u7f16\u8bd1\u6216\u8005\u56fa\u4ef6\u7248\u672c\u4e0d\u4e00\u6837\u53ef\u80fd\u5bfc\u81f4\u5404\u79cd\u95ee\u9898"}),"\n",(0,l.jsx)(n.li,{children:"\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\u9b54\u6539\u7684\u4e0a\u4f4d\u673a"}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u7279\u6b8a\u8bf4\u660e",children:"\u7279\u6b8a\u8bf4\u660e"}),"\n",(0,l.jsx)(n.admonition,{title:"\u7279\u6b8a\u8bf4\u660e",type:"info",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["FLY\u5927\u90e8\u5206\u4e3b\u677f\u5df2\u7ecf\u5728\u51fa\u5382\u65f6\u5019\u70e7\u5f55\u4e86",(0,l.jsx)(n.code,{children:"Katapult"}),"\u56fa\u4ef6"]}),"\n",(0,l.jsxs)(n.li,{children:["FLY\u4e3b\u677f\u73b0\u5728\u4e3b\u8981\u4ee5",(0,l.jsx)(n.code,{children:"Katapult"}),"\u56fa\u4ef6\u6765\u5237\u5199",(0,l.jsx)(n.code,{children:"Klipper"}),"\u56fa\u4ef6"]}),"\n",(0,l.jsxs)(n.li,{children:["DP5\u3001D5\u3001D7\u8fd9\u4e09\u4e2a\u4e3b\u677f\u9700\u8981\u624b\u52a8\u70e7\u5f55\u5bf9\u5e94\u7684",(0,l.jsx)(n.code,{children:"Katapult"}),"\u56fa\u4ef6"]}),"\n",(0,l.jsxs)(n.li,{children:["\u56e0\u4e4b\u524d\u56fa\u4ef6\u5f71\u54cd\u70e7\u5f55\u5b8c",(0,l.jsx)(n.code,{children:"Katapult"}),"\u56fa\u4ef6\uff0c\u5982\u679c\u8981\u641c\u7d22\u4e3b\u677fID\u9700\u8981\u70b9\u51fb\u4e24\u6b21\u4e3b\u677f\u91cd\u7f6e,\u5426\u5219\u65e0\u6cd5\u8fdb\u884c\u56fa\u4ef6\u70e7\u5f55"]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u56fa\u4ef6\u7f16\u8bd1\u8bf4\u660e",children:"\u56fa\u4ef6\u7f16\u8bd1\u8bf4\u660e"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"FLY\u4e3b\u677f\u4f7f\u7528Katapult\u4e0e\u5185\u5b58\u5361\u70e7\u5f55\u7684bootloader"}),"\n",(0,l.jsx)(n.li,{children:"Katapult\u56fa\u4ef6\u4f18\u70b9\u662f\u53ef\u65e0\u63a5\u89e6\u4e3b\u677f\u76f4\u63a5\u66f4\u65b0\u56fa\u4ef6"}),"\n",(0,l.jsx)(n.li,{children:"bootloader\u56fa\u4ef6\u4f18\u70b9\u662f\u4e0d\u7528\u62c5\u5fc3\u5237\u9519\u56fa\u4ef6"}),"\n",(0,l.jsxs)(n.li,{children:["\u6700\u597d\u4f7f\u7528",(0,l.jsx)(n.code,{children:"MobaXterm"}),"\u8fdb\u884c\u56fa\u4ef6\u914d\u7f6e\uff0c\u7ecf\u8fc7\u7fa4\u53cb\u53cd\u9988\u4e00\u4e9b\u7279\u522b\u7684SSH\u8f6f\u4ef6\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u5931\u8d25"]}),"\n"]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8bf7\u6ce8\u610f\u4e0d\u7ba1\u662f\u54ea\u4e2a\u56fa\u4ef6\u90fd\u9700\u8981\u786e\u4fdd\u56fa\u4ef6\u7f16\u8bd1\u6b63\u786e\u5426\u5219\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u627e\u5230\u6b63\u5e38\u6253\u5370\u751a\u81f3\u8bbe\u5907\u90fd\u65e0\u6cd5\u627e\u5230"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u56fa\u4ef6\u7f16\u8bd1\u8bf4\u660e-1",children:"\u56fa\u4ef6\u7f16\u8bd1\u8bf4\u660e"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u9700\u8981\u6ce8\u610f\u5c06",(0,l.jsx)(n.code,{children:"Enable extra low-level configuration options"}),"\u6b64\u9009\u9879\u9009\u62e9\u4e0a\u5426\u5219\u4e0d\u4f1a\u663e\u793a\u5177\u4f53\u5185\u5bb9"]}),"\n"]})}),"\n",(0,l.jsx)(n.h3,{id:"stm32",children:"STM32"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5982\u679cSTM32\u56fa\u4ef6\u7f16\u8bd1\u65f6\u5019\u9700\u8981\u914d\u7f6e",(0,l.jsx)(n.code,{children:"GPIO pins to set at micro-controller startup"}),"\u8bf7\u6ce8\u610f\u4e00\u5b9a\u8981\u5927\u5199"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"rp2040",children:"RP2040"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5982\u679cRP2040\u56fa\u4ef6\u7f16\u8bd1\u65f6\u5019\u9700\u8981\u914d\u7f6e",(0,l.jsx)(n.code,{children:"GPIO pins to set at micro-controller startup"}),"\u8bf7\u6ce8\u610f\u4e00\u5b9a\u8981\u5c0f\u5199"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u56fa\u4ef6\u70e7\u5f55\u8bf4\u660e",children:"\u56fa\u4ef6\u70e7\u5f55\u8bf4\u660e"}),"\n",(0,l.jsx)(n.admonition,{title:"\u987b\u77e5",type:"danger",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u901a\u8fc7",(0,l.jsx)(n.code,{children:"Katapult"}),"\u56fa\u4ef6\u70e7\u5f55",(0,l.jsx)(n.code,{children:"Klipper"}),"\u56fa\u4ef6\u9700\u8981\u786e\u4fdd\u80fd\u627e\u5230\u8bbe\u5907\uff0c\u5982\u679c\u65e0\u6cd5\u627e\u5230\u8bbe\u5907\u9700\u8981\u624b\u52a8\u70b9\u51fb\u4e24\u6b21\u4e3b\u677f\u91cd\u7f6e"]}),"\n",(0,l.jsx)(n.li,{children:"\u8bf7\u4e0d\u8981\u4f7f\u7528\u6559\u7a0b\u5916\u7684\u65b9\u6cd5\u70e7\u5f55\u56fa\u4ef6"}),"\n",(0,l.jsx)(n.li,{children:"\u8bf7\u68c0\u67e5\u56fa\u4ef6\u6709\u6ca1\u6709\u7f16\u8bd1\u9519\u8bef\uff0c\u7f16\u8bd1\u9519\u8bef\u5219\u65e0\u6cd5\u6b63\u5e38\u70e7\u5f55\u56fa\u4ef6"}),"\n"]})}),"\n",(0,l.jsx)(n.h3,{id:"katapult\u56fa\u4ef6",children:"Katapult\u56fa\u4ef6"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4f7f\u7528Katapult\u56fa\u4ef6\u5237\u4e86\u7f16\u8bd1\u9519\u8bef\u7684\u56fa\u4ef6\u89e3\u51b3\u65b9\u6cd5"}),"\n",(0,l.jsx)(n.li,{children:"\u70b9\u51fb\u4e24\u6b21\u4e3b\u677f\u91cd\u7f6e\u5373\u53ef\uff0c\u70b9\u51fb\u91cd\u7f6e\u540e\u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u6709\u4e00\u4e2aLED\u95ea\u70c1\u8d77\u6765"}),"\n",(0,l.jsx)(n.li,{children:"\u6e05\u9664\u4e3b\u677f\u56fa\u4ef6\uff0c\u7136\u540e\u91cd\u65b0\u5237Katapult\u56fa\u4ef6"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bootloader\u56fa\u4ef6",children:"bootloader\u56fa\u4ef6"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4f7f\u7528bootloader\u56fa\u4ef6\u5237\u4e86\u7f16\u8bd1\u9519\u8bef\u7684\u56fa\u4ef6\u89e3\u51b3\u65b9\u6cd5"}),"\n",(0,l.jsx)(n.li,{children:"\u91cd\u65b0\u4f7f\u7528TF\u5361\u5237\u5199\u5373\u53ef"}),"\n",(0,l.jsx)(n.li,{children:"\u5237\u4e0d\u8fdb\u53bb\u8bf7\u5148\u65ad\u7535\uff0c\u5c06\u5185\u5b58\u5361\u5b89\u88c5\u5230\u4e3b\u677f\u540e\u5728\u4e0a\u7535\uff0c\u4e94\u79d2\u949f\u5373\u53ef\u5237\u53ef"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}}}]);