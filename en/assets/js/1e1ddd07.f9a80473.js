"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[19141],{31222:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>o});var t=i(86070),s=i(15658),r=i(63436),a=i(61706);const o=[{value:"CAN Configuration and ID Search",id:"can-configuration-and-id-search",level:2},{value:"Precautions Before Device Search",id:"precautions-before-device-search",level:3},{value:"Device Search",id:"device-search",level:3},{value:"CAN ID Search",id:"can-id-search",level:3},{value:"CAN Issue Collection",id:"can-issue-collection",level:3},{value:"Fill in the CAN ID into the Configuration",id:"fill-in-the-can-id-into-the-configuration",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"can-configuration-and-id-search",children:"CAN Configuration and ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you need to use CAN, make sure your host computer has undergone CAN configuration."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,t.jsx)(n.p,{children:"Please ensure the motherboard is properly connected to the host computer before proceeding with the following operations."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please ensure that the CAN network on the host computer, the CAN rate of the bridge motherboard, and the CAN tool board rate are all consistent."})}),"\n",(0,t.jsx)(n.h3,{id:"precautions-before-device-search",children:"Precautions Before Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for CAN IDs, please first ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Please note that you need to ensure you are logging into SSH via the network, not via serial port."}),"\n",(0,t.jsx)(n.li,{children:"Please ensure that the UTOC or a motherboard with CAN bridge firmware installed is properly connected, and the data cable connecting to the host computer has data transfer capability."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"device-search",children:"Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host computer, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. You will encounter one of the following situations:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command is not found; in this case, you can enter the following command to install the command:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Entering ",(0,t.jsx)(n.code,{children:"lsusb"})," produces no response. This is a system issue beyond our control; you will need to replace the system or use a confirmed working system."]}),"\n",(0,t.jsxs)(n.li,{children:["The information shown below appears. Please note that this is only for reference. You only need to confirm that ",(0,t.jsx)(n.code,{children:"1d50:606f"})," appears.","\n",(0,t.jsx)(r.A,{image:i(1596).A,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1d50:606f"})," belongs to the device you will be using. Ignore any subsequent prompts as they may be incomplete or not displayed due to system issues."]}),"\n",(0,t.jsxs)(n.li,{children:["If there are multiple ",(0,t.jsx)(n.code,{children:"1d50:606f"}),", it is recommended to exclude one, otherwise it may affect subsequent firmware burning and connection, such as when using the ",(0,t.jsx)(n.code,{children:"FLY MINI PAD"}),", it is recommended to use the onboard UTOC and not other CAN bridge devices."]}),"\n",(0,t.jsx)(n.li,{children:"If none appear, please check if the data cable is properly connected and if the firmware is correctly installed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only proceed with CAN ID search when ",(0,t.jsx)(n.code,{children:"1d50:606f"})," is present."]})}),"\n",(0,t.jsx)(n.h3,{id:"can-id-search",children:"CAN ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the following command to search for IDs:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If an ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"Klipper"}),", it means this ID can be used directly."]}),"\n",(0,t.jsxs)(n.li,{children:["If an ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"CANBOOT"})," or ",(0,t.jsx)(n.code,{children:"Katapult"}),", it means you need to flash the firmware to use it.","\n",(0,t.jsx)(r.A,{image:i(65976).A,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"can-issue-collection",children:"CAN Issue Collection"}),"\n",(0,t.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you cannot find a CAN ID, refer to the documentation below."}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(a.A,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/klipper_can",children:"CAN Issue Collection"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"fill-in-the-can-id-into-the-configuration",children:"Fill in the CAN ID into the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer's web interface. In the configuration options on the left sidebar, find ",(0,t.jsx)(n.code,{children:"fluidd"}),": ",(0,t.jsx)(n.code,{children:"{...}"})," ; ",(0,t.jsx)(n.code,{children:"mainsail"}),": ",(0,t.jsx)(n.code,{children:"Machine"}),", then click to access ",(0,t.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,t.jsx)(r.A,{image:i(82239).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the queried UUID and paste it into the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration under ",(0,t.jsx)(n.code,{children:"canbus_uuid:"}),". After saving and restarting, you should be able to connect to the motherboard. If Klipper prompts for firmware updates, ADC errors, etc., it indicates that Klipper has successfully connected to the motherboard."]}),"\n",(0,t.jsx)(r.A,{image:i(65976).A,size:"50%",align:"left"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. Each motherboard's ID is unique, so please modify according to the actual ID obtained."})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},97024:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>a});var t=i(86070),s=i(15658),r=i(63436);const a=[{value:"Search for RS232 ID",id:"search-for-rs232-id",level:2},{value:"Precautions Before Searching for Devices",id:"precautions-before-searching-for-devices",level:3},{value:"Searching for Devices",id:"searching-for-devices",level:3},{value:"Searching for RS232 ID",id:"searching-for-rs232-id",level:3},{value:"Enter the RS232 ID into the Configuration",id:"enter-the-rs232-id-into-the-configuration",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"search-for-rs232-id",children:"Search for RS232 ID"}),"\n",(0,t.jsx)(n.h3,{id:"precautions-before-searching-for-devices",children:"Precautions Before Searching for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for the RS232 ID, please first ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"})]}),"\n",(0,t.jsx)(n.li,{children:"Please note that you need to ensure that you are logging in via SSH using the network, not via a serial port"}),"\n",(0,t.jsx)(n.li,{children:"Please ensure that UTOR is properly connected and that the data cable connecting to the host computer has data transfer capabilities"}),"\n",(0,t.jsx)(n.li,{children:"If using G2T, confirm whether the system supports UART connection"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"searching-for-devices",children:"Searching for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host machine, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. This will result in one of the following scenarios:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command cannot be found, you can enter the following command to install the command:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," results in no response, this indicates a system issue. You will need to change the system or use a confirmed working system."]}),"\n",(0,t.jsx)(n.li,{children:"If you see the information shown in the image below, please note that this is just a reference. You only need to determine the characters after the ID."}),"\n"]}),"\n",(0,t.jsx)(r.A,{image:i(22411).A,size:"100%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1a86:7523"})," belongs to the device you need to use. The subsequent prompts do not need to be concerned with because system issues may cause it to display incompletely or not at all."]}),"\n",(0,t.jsx)(n.li,{children:"If none of these apply, please check if the data cable is properly connected and if the firmware has been correctly flashed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only use the commands below to search for the RS232 ID when you have ",(0,t.jsx)(n.code,{children:"1a86:7523"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"searching-for-rs232-id",children:"Searching for RS232 ID"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-path/*\n"})}),"\n",(0,t.jsx)(r.A,{image:i(95114).A,size:"100%",align:"left"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"ls /dev/serial/by-path/*"})," does not produce any IDs, but ",(0,t.jsx)(n.code,{children:"lsusb"})," shows devices, consider replacing the host machine or the host machine's system."]}),"\n",(0,t.jsx)(n.li,{children:"Please note that using UTOR will output three IDs, and if you have used another UTOR system before, it may record them, leading to multiple IDs appearing during the search."}),"\n",(0,t.jsxs)(n.li,{children:["Ensure that the ID ends with ",(0,t.jsx)(n.code,{children:"-port0"}),", otherwise it cannot be used."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsx)(n.p,{children:"Please make sure that the tool board and UTOR are grounded!!! Otherwise, you will not be able to connect to the tool board!!!"})}),"\n",(0,t.jsx)(n.h3,{id:"enter-the-rs232-id-into-the-configuration",children:"Enter the RS232 ID into the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer web interface and find the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration under the configuration option in the left sidebar. For fluidd, it is ",(0,t.jsx)(n.code,{children:"{...}"}),"; for mainsail, it is ",(0,t.jsx)(n.code,{children:"machine"}),"."]}),"\n",(0,t.jsx)(r.A,{image:i(82239).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the blue ID and paste it into the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration file under ",(0,t.jsx)(n.code,{children:"serial:"}),". After saving and restarting, you should be able to connect to the mainboard. If Klipper prompts ",(0,t.jsx)(n.code,{children:"ADC out of range"}),", this is normal. Connect the hotbed and thermistor properly, configure the thermistor pins and output pins for the nozzle and hotbed, then save and restart."]}),"\n",(0,t.jsx)(r.A,{image:i(51585).A,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The RS232 ID needs to be configured with ",(0,t.jsx)(n.code,{children:"baud:"})," and ",(0,t.jsx)(n.code,{children:"restart_method:command"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Below is a reference configuration:"}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[mcu SHT36]\nserial: /dev/serial/by-path/platform-1c1c000.usb-usb-0:1.2:1.0-port0\nbaud: 250000\nrestart_method:command\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. Each motherboard\u2019s ID is unique, so please modify and fill in according to the actual ID obtained."})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Please note that the IDs below cannot be used!!!"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"serial: /dev/serial/by-id/usb-1a86_USB_Serial-if00-port0\n"})}),"\n",(0,t.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},26664:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>a});var t=i(86070),s=i(15658),r=i(63436);const a=[{value:"Search USB Tutorial",id:"search-usb-tutorial",level:2},{value:"Precautions Before Searching for Devices",id:"precautions-before-searching-for-devices",level:2},{value:"Search for Devices",id:"search-for-devices",level:2},{value:"Search for USB ID",id:"search-for-usb-id",level:2},{value:"Fill in the USB ID in the Configuration",id:"fill-in-the-usb-id-in-the-configuration",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"search-usb-tutorial",children:"Search USB Tutorial"}),"\n",(0,t.jsx)(n.h2,{id:"precautions-before-searching-for-devices",children:"Precautions Before Searching for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for the USB ID, please first ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"})]}),"\n",(0,t.jsx)(n.li,{children:"Please make sure you are logging in via network SSH rather than serial port SSH"}),"\n",(0,t.jsx)(n.li,{children:"Please ensure that the motherboard with the USB firmware installed is properly connected, and the data cable connecting it to the host computer has data transfer capability"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"search-for-devices",children:"Search for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host machine, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. You will encounter one of the following scenarios:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command is not found, you can enter the following command to install the command:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," produces no response, this indicates a system issue beyond our control. You need to change the system or use a confirmed working system."]}),"\n",(0,t.jsxs)(n.li,{children:["If you see the information shown in the image below, note that this is just a reference. You only need to confirm the characters after the ID.","\n",(0,t.jsx)(r.A,{image:i(77236).A,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1d50:614e"})," belongs to the device you will be using. Ignore the rest of the prompt as the system issue may cause it to display incompletely or not at all."]}),"\n",(0,t.jsx)(n.li,{children:"If none of the above occur, please check if the data cable is properly connected and if the firmware is correctly installed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only search for the USB ID when you have ",(0,t.jsx)(n.code,{children:"1d50:614e"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"search-for-usb-id",children:"Search for USB ID"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-id/*\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the command below and press Enter. If everything is normal, a blue ID will appear (the one below is just an example)."}),"\n"]}),"\n",(0,t.jsx)(r.A,{image:i(20534).A,size:"80%",align:"left"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If no ID appears after entering the command below, but ",(0,t.jsx)(n.code,{children:"lsusb"})," shows devices, try changing the host machine or the host machine's system."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["If multiple IDs appear, select the appropriate one based on your motherboard's ",(0,t.jsx)(n.strong,{children:"MCU"})," model."]})}),"\n",(0,t.jsx)(n.h3,{id:"fill-in-the-usb-id-in-the-configuration",children:"Fill in the USB ID in the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer web interface, find the configuration option in the left sidebar: for fluidd, it is ",(0,t.jsx)(n.code,{children:"{...}"}),"; for mainsail, it is ",(0,t.jsx)(n.code,{children:"machine"}),", and click to access ",(0,t.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,t.jsx)(r.A,{image:i(82239).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the blue ID and fill it into the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,t.jsx)(n.code,{children:"serial:"})," parameter in the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration file. Save and restart to connect to the motherboard. If Klipper displays ",(0,t.jsx)(n.code,{children:"ADC out of range"}),", it is normal. Connect the bed and thermistor properly, configure the hotend and bed thermistor and output pins, then save and restart."]}),"\n",(0,t.jsx)(r.A,{image:i(51585).A,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. The actual ID for each motherboard is unique. Please modify according to the actual ID obtained."})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},41238:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>f,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var t=i(86070),s=i(15658),r=i(48784),a=i(49108),o=i(63436),l=i(26664),c=(i(97024),i(31222));const d={sidebar_position:5,sidebar_label:"ID Search Tutorial"},h="Mainboard ID Read and View",u={id:"ProductDoc/MainBoard/fly-c/fly-c8/flash/id",title:"Mainboard ID Read and View",description:"Please do not modify the configuration when translating on the web.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-c/fly-c8/flash/id.mdx",sourceDirName:"ProductDoc/MainBoard/fly-c/fly-c8/flash",slug:"/ProductDoc/MainBoard/fly-c/fly-c8/flash/id",permalink:"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/flash/id",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-c/fly-c8/flash/id.mdx",tags:[],version:"current",lastUpdatedBy:"XiaoK",lastUpdatedAt:1730539595e3,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"ID Search Tutorial"},sidebar:"tutorialSidebar",previous:{title:"USB Bridge CAN Firmware Flashing",permalink:"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/flash/can"},next:{title:"BL firmware, please ignore",permalink:"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/flash/bl"}},f={},p=[...l.RM,...c.RM];function m(e){const n={admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"mainboard-id-read-and-view",children:"Mainboard ID Read and View"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Please do not modify the configuration when translating on the web."})}),"\n",(0,t.jsx)(n.admonition,{title:"Notice",type:"warning",children:(0,t.jsx)(n.p,{children:"Please do not modify the configuration when translating on the web."})}),"\n",(0,t.jsx)(n.admonition,{title:"Important Notice",type:"danger",children:(0,t.jsx)(n.p,{children:"Please do not modify the configuration when translating on the web."})}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"usb",label:"USB ID Acquisition",default:!0,children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Please prepare a data cable with data transmission capability. If the length is particularly long, it is recommended to use a data cable with a magnetic ring."}),"\n",(0,t.jsx)(l.Ay,{}),"\n"]}),"\n"]})}),(0,t.jsx)(a.A,{value:"can",label:"USB Bridge CAN ID Acquisition",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Please prepare a data cable with data transmission capability. If the length is particularly long, it is recommended to use a data cable with a magnetic ring."}),"\n",(0,t.jsx)(n.li,{children:"Before searching for the ID, use the XT30 data cable to connect the tool board to the Gemini mainboard that has been flashed with bridge firmware."}),"\n",(0,t.jsxs)(n.li,{children:["Wiring reference for CAN tool board:","\n",(0,t.jsx)(o.A,{image:i(56898).A,size:"80%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The 120\u03a9 jumper needs to be connected.","\n",(0,t.jsx)(o.A,{image:i(17328).A,size:"80%",align:"left"}),"\n",(0,t.jsx)(c.Ay,{}),"\n"]}),"\n"]})})]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},49108:(e,n,i)=>{i.d(n,{A:()=>a});i(30758);var t=i(13526);const s={tabItem:"tabItem_UnVV"};var r=i(86070);function a(e){let{children:n,hidden:i,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:i,children:n})}},48784:(e,n,i)=>{i.d(n,{A:()=>w});var t=i(30758),s=i(13526),r=i(31134),a=i(25557),o=i(4706),l=i(13587),c=i(15280),d=i(98116);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:s}}=e;return{value:n,label:i,attributes:t,default:s}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function f(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:i=!1,groupId:s}=e,r=u(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,h]=p({queryString:i,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(i);return[s,(0,t.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:s}),x=(()=>{const e=c??m;return f({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=i(1306);const x={tabList:"tabList_mS1C",tabItem:"tabItem_SS9X"};var j=i(86070);function b(e){let{className:n,block:i,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),s=o[i].value;s!==t&&(c(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function y(e){let{lazy:n,children:i,selectedValue:r}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(y,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},1596:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/606f-352fae960c72e57cca3c0492a0c852b8.png"},77236:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/614e-b889f22a76d35eab37cdd4ef9d9ce575.png"},22411:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/7523-6804de320895bcc286988e9c79322f0c.png"},65976:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/canbus-uuid-9df7aa98e15c0c5c409d5fd085dc7df8.png"},51585:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cfg-usb-id-d86733536848d8fa5825e1b7b167b500.png"},82239:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fluidd-cfg-1afd269b70fe36351d23dccfed0bf08c.png"},95114:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/rs232-id-d7188fce913dde9cb86fd10f1e5535f9.png"},20534:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/usb-id-0fab6181658241904a5e5b01af638aab.png"},17328:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/120-52a560999e9ee24a84c6912fb5ec8d12.png"},56898:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/canbridge-36aa144d9dd6547439270e0dc722818e.png"}}]);