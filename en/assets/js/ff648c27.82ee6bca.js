"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[32175],{89789:(e,n,i)=>{i.d(n,{Ay:()=>d,RM:()=>s});var t=i(86070),r=i(15658);const s=[];function o(e){const n={admonition:"admonition",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Infinite Position Usage Tip",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Infinite position usage requires occupying a limit port, normally IO1 is used for the first drive position, IO2 for the second drive position, and so on."}),"\n",(0,t.jsx)(n.li,{children:"When using infinite position, please make sure not to connect anything to the corresponding limit port."}),"\n",(0,t.jsx)(n.li,{children:"For some FLY motherboards, the drive ports are directly connected, please pay attention to whether DIAG is directly connected to the corresponding pin."}),"\n"]})})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},18051:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var t=i(86070),r=i(15658),s=i(63436),o=i(89789);const d={sidebar_position:3},l="TMC 5160",c={id:"ProductDoc/ModuleDrive/tmc5160",title:"TMC 5160",description:"Basic Parameters",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ModuleDrive/tmc5160.mdx",sourceDirName:"ProductDoc/ModuleDrive",slug:"/ProductDoc/ModuleDrive/tmc5160",permalink:"/fly-docs-next/en/docs/ProductDoc/ModuleDrive/tmc5160",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ModuleDrive/tmc5160.mdx",tags:[],version:"current",lastUpdatedBy:"XiaoK",lastUpdatedAt:1730539595e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TMC 2240",permalink:"/fly-docs-next/en/docs/ProductDoc/ModuleDrive/tmc2240"},next:{title:"TMC 5160HV",permalink:"/fly-docs-next/en/docs/ProductDoc/ModuleDrive/tmc5160hv"}},a={},p=[{value:"Basic Parameters",id:"basic-parameters",level:2},{value:"Mainboard Jumper Explanation",id:"mainboard-jumper-explanation",level:2},{value:"TMC5160 Reference Configuration",id:"tmc5160-reference-configuration",level:2},{value:"SPI Mode Reference Configuration",id:"spi-mode-reference-configuration",level:3},{value:"Infinite Limit Usage Instructions",id:"infinite-limit-usage-instructions",level:2},...o.RM];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tmc-5160",children:"TMC 5160"})}),"\n",(0,t.jsx)(s.A,{image:i(6981).A,size:"80%",align:"center"}),"\n",(0,t.jsx)(n.h2,{id:"basic-parameters",children:"Basic Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Input Voltage: 12V-24V"}),"\n",(0,t.jsx)(n.li,{children:"Maximum Current: 4.4A"}),"\n",(0,t.jsx)(n.li,{children:"Suitable for: Marlin/Klipper/RRF firmware"}),"\n",(0,t.jsx)(n.li,{children:"Drive Mode Support: TMC: SPI"}),"\n",(0,t.jsx)(n.li,{children:"Stepper/direction interface with microPlyer interpolation"}),"\n",(0,t.jsx)(n.li,{children:"Highest resolution is 256 microsteps"}),"\n",(0,t.jsx)(n.li,{children:"Supports stealthChop2 silent operation and smooth motion"}),"\n",(0,t.jsx)(n.li,{children:"Supports resonance suppression at mid-frequency resonance"}),"\n",(0,t.jsx)(n.li,{children:"Supports spreadCycle high dynamic motor control chopper"}),"\n",(0,t.jsx)(n.li,{children:"Supports dcStep load-dependent speed control"}),"\n",(0,t.jsx)(n.li,{children:"Supports stallGuard2 high precision sensorless motor load detection"}),"\n",(0,t.jsx)(n.li,{children:"Supports coolStep current control, up to 75% energy saving"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mainboard-jumper-explanation",children:"Mainboard Jumper Explanation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TMC5160 uses SPI jumpers"}),"\n",(0,t.jsxs)(n.li,{children:["The SPI pin for the FLY drive is the fourth pin from the left on the bottom. The CS pin is the SPI pin. If the motherboard does not have the corresponding pin position, SPI cannot be used.","\n",(0,t.jsx)(s.A,{image:i(41844).A,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tmc5160-reference-configuration",children:"TMC5160 Reference Configuration"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The drive sampling resistor is ",(0,t.jsx)(n.code,{children:"sense_resistor: 0.075"}),". Please do not set it incorrectly."]}),"\n",(0,t.jsxs)(n.li,{children:["Only one of ",(0,t.jsx)(n.code,{children:"spi_bus"})," and ",(0,t.jsx)(n.code,{children:"spi_software"})," can be selected."]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"spi-mode-reference-configuration",children:"SPI Mode Reference Configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[tmc5160 stepper_x]\ncs_pin:\nspi_bus:\n# spi_software_mosi_pin:\n# spi_software_miso_pin:\n# spi_software_sclk_pin: \nrun_current: 1.0                    # Motor operating current value\ninterpolate: False                  # Whether to enable 256 microstep interpolation (enable is True, disable is False)\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndriver_DISS2G: 1\ndriver_DISS2VS: 1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"infinite-limit-usage-instructions",children:"Infinite Limit Usage Instructions"}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.admonition,{title:"Infinite Limit Usage Tip",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This driver requires you to solder the DIAG pin yourself; otherwise, the infinite limit function cannot be used."}),"\n",(0,t.jsxs)(n.li,{children:["The original ",(0,t.jsx)(n.code,{children:"endstop_pin:"})," needs to be masked or deleted, and add ",(0,t.jsx)(n.code,{children:"endstop_pin: tmc5160_stepper_x:virtual_endstop"})]}),"\n",(0,t.jsxs)(n.li,{children:["After configuring ",(0,t.jsx)(n.code,{children:"diag1_pin:"}),", the limit status refresh is not triggered."]}),"\n",(0,t.jsxs)(n.li,{children:["You need to test a suitable value for ",(0,t.jsx)(n.code,{children:"driver_SGT:"})]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reference Configuration"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:'[stepper_x]\n# endstop_pin:PF3\nendstop_pin: tmc5160_stepper_x:virtual_endstop\nhoming_retract_dist: 0        # Retract distance should not be changed to 0 as it may cause failed homing\n\n[tmc5160 stepper_x]\ndiag1_pin: ^!\ndriver_SGT: 1\n\n#   After configuration, ensure that the limit status is not triggered\n#   This pin usually uses the "^" prefix to enable internal pull-up\n#   Sensitivity is related to belt tension and needs to be adjusted manually\n#  (Ensure that `driver_SGTHRS` is set to an appropriate sensitivity at the same time)\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},6981:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/5160-02c714de27e3072a5bf0db14ee62194e.png"},41844:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/jumper-8d242014fa678e0989e907da66a6d0ed.png"}}]);