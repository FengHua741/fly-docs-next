"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[92599],{68885:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=i(86070),r=i(15658),t=i(63436);const o={sidebar_position:4,sidebar_label:"Motherboard Wiring"},a="Motherboard Wiring",d={id:"ProductDoc/MainBoard/fly-super/fly-super5/wiring",title:"Motherboard Wiring",description:"Interface Diagram",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-super/fly-super5/wiring.mdx",sourceDirName:"ProductDoc/MainBoard/fly-super/fly-super5",slug:"/ProductDoc/MainBoard/fly-super/fly-super5/wiring",permalink:"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super5/wiring",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super5/wiring.mdx",tags:[],version:"current",lastUpdatedBy:"XiaoK",lastUpdatedAt:1730539595e3,sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Motherboard Wiring"},sidebar:"tutorialSidebar",previous:{title:"BL firmware, please ignore",permalink:"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super5/flash/bl"},next:{title:"Klipper\u53c2\u8003\u914d\u7f6e",permalink:"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super5/cfg"}},c={},l=[{value:"Interface Diagram",id:"interface-diagram",level:2},{value:"Interface Description",id:"interface-description",level:3},{value:"Pin Description",id:"pin-description",level:3},{value:"Power Wiring",id:"power-wiring",level:2},{value:"Driver Installation",id:"driver-installation",level:2},{value:"Motherboard Driver Jumper Settings",id:"motherboard-driver-jumper-settings",level:3},{value:"Driver Installation",id:"driver-installation-1",level:3},{value:"Stepper Motor Wiring",id:"stepper-motor-wiring",level:2},{value:"Heater Wire Connection",id:"heater-wire-connection",level:2},{value:"Bed Wiring",id:"bed-wiring",level:2},{value:"Thermistor Wiring",id:"thermistor-wiring",level:2},{value:"Thermistor Type Introduction",id:"thermistor-type-introduction",level:3},{value:"Motherboard Thermistor Wiring",id:"motherboard-thermistor-wiring",level:3},{value:"Fan Wiring",id:"fan-wiring",level:2},{value:"Limit Switch Wiring",id:"limit-switch-wiring",level:2},{value:"Leveling Sensor Wiring",id:"leveling-sensor-wiring",level:2},{value:"Metal Proximity Switch Wiring",id:"metal-proximity-switch-wiring",level:3},{value:"BL-Touch Wiring",id:"bl-touch-wiring",level:3},{value:"Klicky Wiring",id:"klicky-wiring",level:3},{value:"Voron Tap Wiring",id:"voron-tap-wiring",level:3},{value:"FLY-Mini12864 LCD Wiring",id:"fly-mini12864-lcd-wiring",level:2},{value:"Connecting to Host",id:"connecting-to-host",level:2}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"motherboard-wiring",children:"Motherboard Wiring"})}),"\n",(0,s.jsx)(n.h2,{id:"interface-diagram",children:"Interface Diagram"}),"\n",(0,s.jsx)(n.h3,{id:"interface-description",children:"Interface Description"}),"\n",(0,s.jsx)(t.A,{image:i(5328).A,size:"50%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"pin-description",children:"Pin Description"}),"\n",(0,s.jsx)(t.A,{image:i(44016).A,size:"50%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"power-wiring",children:"Power Wiring"}),"\n",(0,s.jsx)(t.A,{image:i(21649).A,size:"40%",align:"center"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fuse Installation"}),"\n"]}),"\n",(0,s.jsx)(t.A,{image:i(40907).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"driver-installation",children:"Driver Installation"}),"\n",(0,s.jsx)(n.h3,{id:"motherboard-driver-jumper-settings",children:"Motherboard Driver Jumper Settings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"STEP/DIR Mode."})," In this mode, the subdivision is set by using a jumper cap and the current is adjusted by a potentiometer. The most common driver used in this mode is the A4988 driver. For drivers like this, you need to consult the manufacturer's subdivision configuration table and then set the subdivision using the jumper cap."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"UART Mode."})," The most common drivers using this mode are TMC2208, TMC2209, TMC2226, etc. These drivers can communicate asynchronously with the main controller via UART serial communication, and the subdivision, operating current, silent mode, etc., can be set by modifying the configuration file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SPI Mode."})," The most common drivers using this mode are TMC5160, TMC2230, etc. These drivers communicate synchronously with the main controller via SPI serial communication, and the subdivision, operating current, silent mode, etc., can also be set by modifying the configuration file."]}),"\n",(0,s.jsx)(t.A,{image:i(9569).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"driver-installation-1",children:"Driver Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Before installing the driver, it needs to be checked accordingly to avoid damaging the driver or motherboard."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FLY Driver:"})," If you do not use the infinite zeroing function, set the DIP switch to position 1; conversely, if you want to use the infinite zeroing function, set the DIP switch to ON."]}),"\n",(0,s.jsx)(t.A,{image:i(42259).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Note!!! When installing the driver module, make sure the insertion direction is correct, i.e., the EN pin should be on the top left, otherwise it may damage the driver or even the motherboard!!! Make sure to attach a heatsink to the driver!!!"})}),"\n"]})}),"\n",(0,s.jsx)(t.A,{image:i(34623).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"stepper-motor-wiring",children:"Stepper Motor Wiring"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Regardless of the manufacturer, a two-phase stepper motor will ultimately have four wires. No matter what color they are, black, white, green, yellow, etc., they correspond to four wires. So we need to group the wires into two groups, A and B."}),"\n",(0,s.jsx)(n.li,{children:"For a two-phase four-wire stepper motor, we don't need to know which is group A and which is group B; mainly, we just need to identify one group. The motor direction can be modified in the configuration."}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In 3D printers, the most commonly used is a two-phase four-wire stepper motor. Its principle is shown in the figure below. There are two methods to identify the wire sequence of the stepper motor:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Connect any two phase wires, turn the motor shaft by hand, and if there is significant resistance, the two wires are a pair. Conversely, they are not a pair, and you need to test other phase wires."}),"\n",(0,s.jsx)(n.li,{children:"Use a multimeter set to continuity mode to test any two phase wires of the stepper motor. If they are connected, they form a pair; otherwise, they are not a pair, and you need to test other phase wires."}),"\n"]}),"\n",(0,s.jsx)(t.A,{image:i(33675).A,size:"50%",align:"center"}),"\n",(0,s.jsx)(t.A,{image:i(71301).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"heater-wire-connection",children:"Heater Wire Connection"}),"\n",(0,s.jsx)(t.A,{image:i(17563).A,size:"60%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"bed-wiring",children:"Bed Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AC Bed:"})," When wiring the solid-state relay, make sure not to mix up the input and output."]}),"\n",(0,s.jsx)(t.A,{image:i(90681).A,size:"20%",align:"center"}),"\n",(0,s.jsx)(t.A,{image:i(32335).A,size:"40%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DC Bed:"})," When connecting a DC bed to the onboard MOSFET, pay attention to the power usage. The maximum current for a DC bed cannot exceed 10A. If it exceeds 10A, it is recommended to use an external MOS module to connect the bed to avoid irreversible damage to the motherboard."]}),"\n",(0,s.jsx)(t.A,{image:i(37997).A,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"thermistor-wiring",children:"Thermistor Wiring"}),"\n",(0,s.jsx)(n.h3,{id:"thermistor-type-introduction",children:"Thermistor Type Introduction"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The wiring method for thermistors is as shown below. Please consult the purchasing merchant for the type of thermistor."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If purchased from fly (as shown below), set the sensor_type to: ",(0,s.jsx)(n.strong,{children:"ATC Semitec 104GT-2"})]}),"\n",(0,s.jsx)(t.A,{image:i(68814).A,size:"30%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If it is a conventional NTC 100K (as shown below), set the sensor_type to: ",(0,s.jsx)(n.strong,{children:"Generic 3950"})]}),"\n",(0,s.jsx)(t.A,{image:i(96645).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(t.A,{image:i(44380).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"motherboard-thermistor-wiring",children:"Motherboard Thermistor Wiring"}),"\n",(0,s.jsx)(t.A,{image:i(27908).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(t.A,{image:i(91149).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"fan-wiring",children:"Fan Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Fan Wiring"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Fan voltage selection. Connect the corresponding voltage pin with a jumper cap. The selection method is shown below. Note: The jumper configurations within the yellow boxes are the same.\nNote!!! Choosing the wrong fan voltage may damage the fan or MOS module."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"MOS Module Installation (no polarity). As shown below"}),"\n"]}),"\n",(0,s.jsx)(t.A,{image:i(42414).A,size:"30%",align:"center"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fan Wiring"}),"\n"]}),"\n",(0,s.jsx)(t.A,{image:i(96325).A,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"limit-switch-wiring",children:"Limit Switch Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Limit switches come in normally open (NO) and normally closed (NC) types. In 3D printers, it is generally recommended to use ",(0,s.jsx)(n.strong,{children:"normally closed (NC)"}),". This way, if there is a problem with the limit switch circuit, the system will promptly report an error, avoiding unnecessary crashes and damage to the printer."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"The limit switch voltage on Super8 can be changed by altering the shorting resistor, with options of 3.3V, 5V, 12V, defaulting to 5V. The default voltage is sufficient for most use cases, so no changes are needed unless necessary. However, please proceed with caution if modifications are required."})}),"\n",(0,s.jsx)(t.A,{image:i(96996).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(t.A,{image:i(31917).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"leveling-sensor-wiring",children:"Leveling Sensor Wiring"}),"\n",(0,s.jsx)(n.h3,{id:"metal-proximity-switch-wiring",children:"Metal Proximity Switch Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"VORON officially recommends using the Omron TL-Q5MC sensor (previously, the PL08N was recommended; both have the same principle but different detection distances) for bed leveling. The wiring method is shown below."}),"\n",(0,s.jsx)(t.A,{image:i(79616).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"bl-touch-wiring",children:"BL-Touch Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"BL-touch has five wires in total. The first group of three wires is responsible for powering the sensor and extending/retracting the probe. The second group consists of the ground wire and signal wire, which outputs the limit signal. When wiring BL-touch, carefully verify the wire sequence. Incorrect wiring may permanently damage the sensor and motherboard!!!\nWiring method is shown below."}),"\n",(0,s.jsx)(t.A,{image:i(31973).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"klicky-wiring",children:"Klicky Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Klicky is a third-party leveling sensor that can be made at home with low cost and stable performance. It is highly recommended. The wiring method is shown below."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Project Address: ",(0,s.jsx)(n.a,{href:"https://github.com/jlas1/Klicky-Probe",title:"Project Address, click to jump",children:"jlas1/Klicky-Probe"})]}),"\n",(0,s.jsx)(t.A,{image:i(8221).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"voron-tap-wiring",children:"Voron Tap Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Tap is a nozzle-based z-probe suitable for V2 and Trident printer designs. The entire toolhead moves to trigger the optical switch, providing better precision than regular limit switches and compatible with almost all print platforms."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Voron Tap is not recommended to connect to ",(0,s.jsx)(n.strong,{children:"24V"}),". Some versions using ",(0,s.jsx)(n.strong,{children:"24V"})," have a high probability of damaging the Tap sensor, which is not a problem with the Fly product but a design flaw of Voron Tap. Please be aware!!!"]})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Note: 5V and GND cannot be reversed, otherwise it may damage the Tap sensor or even the motherboard!!!"})}),"\n",(0,s.jsx)(t.A,{image:i(15917).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"fly-mini12864-lcd-wiring",children:"FLY-Mini12864 LCD Wiring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The wiring method for the FLY mini12864 is shown below. For screens from other manufacturers, please consult the relevant manufacturer. If the Mini12864 screen is wired incorrectly, it may prevent the host computer from connecting to the MCU. If you were able to connect the motherboard's MCU before using the Mini12864 screen but can no longer connect after using it, try unplugging the Mini12864 wiring!!!"}),"\n",(0,s.jsx)(t.A,{image:i(3320).A,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"connecting-to-host",children:"Connecting to Host"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The motherboard connects to the host computer's USB port via a Type-C interface, or it can connect through a serial port. Only the former is described here."}),"\n",(0,s.jsx)(t.A,{image:i(68089).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5328:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/interface-0de8960bd4cdea16de7e62a636460f34.png"},44016:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pin-e68e192916e61950f9a1ac273530f47b.png"},32335:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/bed-ac-2-8b36a0b3b170f25be618d27e822631bf.png"},37997:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/bed-dc-d080ca13e4a28fc71127f6e61f309083.png"},31973:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/bltouch-8145ea0c053da9d11d132ec57e300534.png"},68089:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/connect-host-a9bb762cf75f8b02338ffbf872b6c89b.png"},96996:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/endstop-voltage-396d114eadd7c58ba3992966d3749c93.png"},31917:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/endstop-43bc6df3ef4c13db55b635f9f18af1d3.png"},96325:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/fan-d206e8c50760fbf28f2894f348a59cfe.png"},40907:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/fuse-40a41c50110d5fa0ef6ee2301b6a83e0.png"},17563:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/heater-a30e3b268240985dfb6f8bbbf2455bc8.png"},8221:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/klicky-aaf684ad46aadeaede4c9653ce884f4b.png"},3320:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/mini12864-db50c8b41893af5a6338d8c4faaa61b3.png"},71301:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/motor-fbb51f95bb5d2b41168bdf293fd3447a.png"},27908:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ntc-4-e0e13d018139b21fb391b34f763dd566.png"},91149:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ntc-5-0cc789ae6f4b4fad73fc88625e25fd26.png"},79616:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pl08-f815d6278518c73a054e7d94adae7d75.png"},21649:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/power-2298b545d59bf9583b4999adcb15c067.png"},15917:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/tap-625ebd6dfd17097cf3f58669cecff59d.png"},90681:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/bed-ac-1-a4b4eab93ba1947b0f5255d44742eb3f.png"},9569:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/drive-dip-1aebf17b24c834f025388ade3bf8e272.png"},34623:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/drive-install-56d7ab81c9915397e3f2fd81ba34e36f.png"},42259:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/fly2209-1cee8fa0494f5b62764ed69e253bed6e.png"},42414:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/mos-aef51ef9ab558b462c85fb5137277d4c.png"},33675:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/motor-sch-b16829f4e51bb69ef280f7db774a904b.png"},68814:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ntc-1-746ec56dfccc1c129fb2bb5239a37c3d.png"},96645:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ntc-2-0330ce02c944c6cee65495605121ac0a.png"},44380:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ntc-3-5434e95a50b04bcf3cf4a8905fd23687.png"}}]);