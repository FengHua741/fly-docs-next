"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[54724],{11516:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(86070),r=i(15658);const o={sidebar_position:2},s="Print start temperature instability waiting time too long",a={id:"DebugDoc/ref-config/m109",title:"Print start temperature instability waiting time too long",description:"* This macro can be directly placed in the configuration.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/m109.mdx",sourceDirName:"DebugDoc/ref-config",slug:"/DebugDoc/ref-config/m109",permalink:"/fly-docs-next/en/docs/DebugDoc/ref-config/m109",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/m109.mdx",tags:[],version:"current",lastUpdatedBy:"XiaoK",lastUpdatedAt:1730539595e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"debugdocSidebar",previous:{title:"Filament Sensor",permalink:"/fly-docs-next/en/docs/DebugDoc/ref-config/filament-switch-sensor"},next:{title:"Heating Tolerance Configuration",permalink:"/fly-docs-next/en/docs/DebugDoc/ref-config/verify_heater"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"print-start-temperature-instability-waiting-time-too-long",children:"Print start temperature instability waiting time too long"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This macro can be directly placed in the configuration."}),"\n",(0,n.jsx)(t.li,{children:"The purpose of this macro is to normally wait for the temperature to rise, but once the temperature reaches the target, it proceeds to the next step immediately."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[gcode_macro M109]\nrename_existing: M109.1\ngcode:\n    {% set s = params.S|float %}\n    M104 {% for p in params %}{'%s%s' % (p, params[p])}{% endfor %}  ; Set hotend temp\n    {% if s != 0 %}\n    TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s} MAXIMUM={s+1}   ; Wait for hotend temp (within 1 degree)\n    {% endif %}\t\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);