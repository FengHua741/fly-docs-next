"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[81055],{25714:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>t});var i=r(86070),s=r(15658),a=r(63436);const t=[{value:"DSI Usage",id:"dsi-usage",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"dsi-usage",children:"DSI Usage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"After the image writing is completed, enter /boot/config.txt and add the following command"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"dtoverlay=vc4-kms-dsi-7inch\n"})}),"\n",(0,i.jsx)(a.A,{image:r(91285).A,size:"100%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Save and exit"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},65718:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>f,toc:()=>g});var i=r(86070),s=r(15658),a=r(48784),t=r(49108),l=r(25714),c=r(63436);function o(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"raspberry-pi-5-with-mipi",children:"Raspberry Pi 5 with MIPI"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"FLY_MIPI is a special adapter module designed for Raspberry Pi 5, which can be used directly with DSI and CSI devices through the adapter."})}),"\n",(0,i.jsx)(n.h3,{id:"wiring-for-raspberry-pi-5-with-mipi",children:"Wiring for Raspberry Pi 5 with MIPI"}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The DSI and CSI interfaces on Raspberry Pi 5 are now called MIPI."}),"\n",(0,i.jsx)(n.li,{children:"The MIPI interface can be used directly with CSI cameras or DSI screens through configuration."}),"\n",(0,i.jsx)(n.li,{children:"Please pay attention to the direction of the gold fingers."}),"\n"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Raspberry Pi 5 now has two MIPI interfaces. If you look at it from the front, you can see markings 1 and 0."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"wiring-for-dsi-screen",children:"Wiring for DSI Screen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If using the 1st interface, configure the screen as follows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dtoverlay=vc4-kms-dsi-7inch,dsi1\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If using the 0th interface, configure the screen as follows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dtoverlay=vc4-kms-dsi-7inch,dsi0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Reference wiring:","\n",(0,i.jsx)(c.A,{image:r(34419).A,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"wiring-for-csi-camera",children:"Wiring for CSI Camera"}),"\n",(0,i.jsx)(c.A,{image:r(21941).A,size:"100%",align:"left"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Please note that the camera model needs to be configured according to the one you purchased. This tutorial uses imx219 as an example."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If using the left MIPI interface, configure the camera as follows:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dtoverlay=imx219,cam1\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If using the right MIPI interface, configure the camera as follows:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dtoverlay=imx219,cam0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Reference wiring:"}),"\n"]}),"\n",(0,i.jsx)(c.A,{image:r(10120).A,size:"100%",align:"left"})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var u=r(61706);const h={sidebar_position:2,sidebar_label:"DSI usage"},p="DSI usage",f={id:"ProductDoc/Screen/fly-lcd/dsi",title:"DSI usage",description:"This tutorial uses Raspberry Pi 4B as an example",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-lcd/dsi.mdx",sourceDirName:"ProductDoc/Screen/fly-lcd",slug:"/ProductDoc/Screen/fly-lcd/dsi",permalink:"/fly-docs-next/en/docs/ProductDoc/Screen/fly-lcd/dsi",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-lcd/dsi.mdx",tags:[],version:"current",lastUpdatedBy:"XiaoK",lastUpdatedAt:1730539595e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"DSI usage"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/fly-docs-next/en/docs/ProductDoc/Screen/fly-lcd/"},next:{title:"HDMI use",permalink:"/fly-docs-next/en/docs/ProductDoc/Screen/fly-lcd/hdmi"}},m={},g=[{value:"Raspberry Pi system",id:"raspberry-pi-system",level:2},{value:"Reference wiring",id:"reference-wiring",level:2},{value:"Raspberry Pi configuration",id:"raspberry-pi-configuration",level:2},...l.RM,{value:"Raspberry Pi 5 with MIPI",id:"raspberry-pi-5-with-mipi",level:2},{value:"Wiring for Raspberry Pi 5 with MIPI",id:"wiring-for-raspberry-pi-5-with-mipi",level:3},{value:"Wiring for DSI Screen",id:"wiring-for-dsi-screen",level:2},{value:"Wiring for CSI Camera",id:"wiring-for-csi-camera",level:2}];function b(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"dsi-usage",children:"DSI usage"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"This tutorial uses Raspberry Pi 4B as an example"})}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It is recommended to use the ",(0,i.jsx)(n.code,{children:"bookworm"})," version of the Raspberry Pi system"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"raspberry-pi-system",children:"Raspberry Pi system"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There are pre-packaged system images available, which have been tested for DSI screen display and touch"}),"\n",(0,i.jsxs)(n.li,{children:["Tip: Screen configuration is required\n",(0,i.jsx)(u.A,{variant:"contained",disableElevation:!0,href:"/docs/ResDownload/system-img/rpi",children:"System image"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference-wiring",children:"Reference wiring"}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,i.jsx)(n.p,{children:"Please pay attention to the direction of the GPIO pins"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["DSI core module wiring","\n",(0,i.jsx)(c.A,{image:r(5826).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Raspberry Pi wiring","\n",(0,i.jsx)(c.A,{image:r(88449).A,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"raspberry-pi-configuration",children:"Raspberry Pi configuration"}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(t.A,{value:"Raspberry Pi 4B/3B using DSI interface",default:!0,children:(0,i.jsx)(l.Ay,{})}),(0,i.jsx)(t.A,{value:"Raspberry Pi 5B using Mipi interface",default:!0,children:(0,i.jsx)(d,{})})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},49108:(e,n,r)=>{r.d(n,{A:()=>t});r(30758);var i=r(13526);const s={tabItem:"tabItem_UnVV"};var a=r(86070);function t(e){let{children:n,hidden:r,className:t}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,t),hidden:r,children:n})}},48784:(e,n,r)=>{r.d(n,{A:()=>I});var i=r(30758),s=r(13526),a=r(31134),t=r(25557),l=r(4706),c=r(13587),o=r(15280),d=r(98116);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:s}}=e;return{value:n,label:r,attributes:i,default:s}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const s=(0,t.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[t,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[o,u]=f({queryString:r,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(r);return[s,(0,i.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),b=(()=>{const e=o??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:t,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=r(1306);const b={tabList:"tabList_mS1C",tabItem:"tabItem_SS9X"};var x=r(86070);function j(e){let{className:n,block:r,selectedValue:i,selectValue:t,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==i&&(o(n),t(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:a}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function I(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},21941:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/csi1-cbf46125f558b1f3e6a15ba65b69dfed.png"},91285:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/dsi-46ccdcea085d8e67e82dac55faf9c1ed.png"},10120:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/mipi_csi-d22d323c895477bc81e6cc2992762c8f.png"},34419:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/mipi_dsi-380578b4e747da5132861bc5f1f7336f.png"},5826:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/dsi-link-edcff78aa3dc7ccc10c53e7d45b30e2f.png"},88449:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/dsi-link1-27cc748115182e51d6b14c1c077165bb.png"}}]);