"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[96282],{59417:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(86070),o=t(15658);const i={sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},s="\u53c2\u8003\u914d\u7f6e",a={id:"ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/cfg",title:"\u53c2\u8003\u914d\u7f6e",description:"",source:"@site/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/cfg.mdx",sourceDirName:"ProductDoc/ToolBoard/fly-sb2040/sb2040-v3",slug:"/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/cfg",permalink:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/cfg",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/cfg.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1729501964e3,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"Motherboard Reference Wiring",permalink:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/wiring"},next:{title:"Accelerometer Usage",permalink:"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-v3/adxl"}},p={},c=[];function l(n){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cfg",children:'\n#####################################################################\n#      Notes\n#####################################################################\n## \u8bf7\u5c06[include SB2040.cfg]\u6dfb\u52a0\u5230printer.cfg\u4e0b\n## Please add [include SB2040.cfg] under printer.cfg\n## \u5de5\u5177\u677f\u5c06\u4f7f\u7528\u4ee5\u4e0b\u51e0\u79cd\u914d\u7f6e\uff0c\u5982\u679c\u5176\u4ed6\u914d\u7f6e\u4e2d\u4f7f\u7528\u5230\u4e0b\u9762\u7684\u914d\u7f6e\u53ef\u80fd\u4f1a\u51b2\u7a81\n## The tool plate will use the following configurations, \n## and if the following configurations are used in other configurations, conflicts may occur.\n## [resonance_tester] && [extruder] && [tmc2209 extruder] && [fan] && [heater_fan my_hotend_fan]\n## [probe] && [bltouch] && [stepper_x]\n\n#####################################################################\n#      Master ID Configuration\n#####################################################################\n[mcu SB2040]  # \u5de5\u5177\u4e3b\u677f\u5e8f\u5217\u53f7\n## CAN ID\n## ~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\ncanbus_uuid: \n#--------------------------------------------------------------------\n# # RS232 ID\n## \u8bf7\u6839\u636e\u56fa\u4ef6\u914d\u7f6e\u586b\u5199\u6ce2\u7279\u7387\n## Please fill in the baud rate according to the firmware configuration.\n# serial: /dev/serial/by-path/platform-1c1c000.usb-usb-0:1.2:1.0-port0\n# baud: 250000\n# restart_method:command\n\n#####################################################################\n#      Temperature monitoring\n#####################################################################\n[temperature_sensor SB2040]\nsensor_type: temperature_mcu\nsensor_mcu: SB2040\n\n#####################################################################\n#      Accelerometer\n#####################################################################\n## https://www.klipper3d.org/Measuring_Resonances.html?h=adxl#adxl345\n[lis2dw]\ncs_pin: SB2040:gpio12\nspi_software_sclk_pin: SB2040:gpio2\nspi_software_mosi_pin: SB2040:gpio3\nspi_software_miso_pin: SB2040:gpio4\n#--------------------------------------------------------------------\n[resonance_tester]\naccel_chip: lis2dw\nprobe_points: 150, 150, 20\n# Somewhere slightly above the middle of your print bed\n# \u5728\u6253\u5370\u5e8a\u7684\u4e2d\u95f4\u7a0d\u5fae\u504f\u4e0a\u7684\u4f4d\u7f6e\nmin_freq: 5\nmax_freq: 133\naccel_per_hz: 75\nhz_per_sec: 1 \n\n#####################################################################\n#      Stealthburner LED\n#####################################################################\n## https://github.com/VoronDesign/Voron-Stealthburner/tree/main\n[neopixel sb_leds]\npin: SB2040:gpio26\nchain_count: 16\n# Number of LEDs\n# \u706f\u73e0\u6570\u91cf\ncolor_order: GRB\ninitial_RED: 0.4    #66CCFF\ninitial_GREEN: 0.8\ninitial_BLUE: 1\ninitial_WHITE: 0.0\n\n#####################################################################\n#      Extruder thermal sensitivity\n#####################################################################\n## Please select the type of thermocouple you want to use.\n## \u8bf7\u6839\u636e\u4f60\u60f3\u8981\u4f7f\u7528\u7684\u70ed\u654f\u9009\u62e9\n[extruder]\n## Type of sensor - common thermistors are (Generic 3950, ATC Semitec 104GT-2)\n## \u4f20\u611f\u5668\u7c7b\u578b-\u5e38\u89c1\u7684\u70ed\u654f\u7535\u963b\u5668\u662f (Generic 3950, ATC Semitec 104GT-2)\nsensor_type:ATC Semitec 104GT-2\nsensor_pin:SB2040:gpio27\n###------------------------------------------------------------------\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n## \u5982\u679c\u4f7f\u7528PT1000\u8bf7\u5c06\u70ed\u654f\u65c1\u8fb9\u8df3\u7ebf\u63a5\u4e0a\n# sensor_type:PT1000\n# sensor_pin:SB2040:gpio27\n# pullup_resistor: 1000\n###------------------------------------------------------------------\n## Using MAX31865 to connect PT100 or PT1000\n## \u4f7f\u7528MAX31865\u63a5PT100\u6216\u8005PT1000\n# sensor_type: MAX31865\n# sensor_pin: SB2040:gpio17\n# spi_software_sclk_pin: SB2040:gpio2\n# spi_software_mosi_pin: SB2040:gpio3\n# spi_software_miso_pin: SB2040:gpio4\n# rtd_reference_r: 430  ## \u4f7f\u7528PT100\u65f6\u8bf7\u8bbe\u7f6e\u4e3a430\uff0c\u4f7f\u7528PT1000\u65f6\u8bf7\u8bbe\u7f6e\u4e3a4300\n\n#####################################################################\n#      extruder\n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html#extruder\n[extruder]\nstep_pin:SB2040:gpio14\ndir_pin:SB2040:gpio13\nenable_pin: !SB2040:gpio16\nrotation_distance: 21.84\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## \u6821\u51c6\u6b65\u8fdb\u503c: 22.44=\u65e7\u503c22*\u5b9e\u9645\u503c102/\u76ee\u6807\u503c100\ngear_ratio:50:10\n## \u51cf\u901f\u6bd4\uff08\u4f3d\u5229\u7565\u9f7f\u6bd47.5:1 \u5e76\u4e14\u8fd9\u884c\u6ce8\u91ca\u6389\uff1bBMG\u4e3a50\uff1a17\uff0c\u8f93\u51fa\u8f74\u5728\u524d\uff0c\u8f93\u5165\u8f74\u5728\u540e\uff09\nmicrosteps:16\nfull_steps_per_rotation: 200   \nnozzle_diameter:0.400\nfilament_diameter:1.75\nheater_pin:SB2040:gpio23\nmin_temp:-200\nmax_temp:350\nmax_power:1.0\nmin_extrude_temp:10\npressure_advance: 0.05\npressure_advance_smooth_time: 0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51fa\u6d41\u91cf\u62a5\u9519\u53ef\u4ee5\u6ce8\u91ca\u8fd9\u4e2a\uff0c\u4f46\u662f\u5efa\u8bae\u91cd\u65b0\u5207\u7247\n#\u55b7\u5634\u6e29\u5ea6PID\u6821\u51c6\u547d\u4ee4\uff1a  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\nstep_pulse_duration: 0.000004\n###------------------------------------------------------------------\n[tmc2209 extruder]\nuart_pin:SB2040:gpio15\ninterpolate:False\nrun_current: 0.8\nsense_resistor:0.110\nstealthchop_threshold:0\n##------------------------------------------------------------------\n# [tmc2240 extruder]\n# uart_pin:SB2040:gpio15\n# interpolate:False\n# run_current: 0.65\n# interpolate: False\n# rref: 12300\n# stealthchop_threshold: 0 \n\n###------------------------------------------------------------------\n[verify_heater extruder]\nmax_error: 20\ncheck_gain_time:120\nhysteresis: 50\nheating_gain: 2\n\n\n#####################################################################\n#      FAN\n#####################################################################\n[fan]\npin:SB2040:gpio24\n###------------------------------------------------------------------\n[heater_fan my_hotend_fan]\npin: SB2040:gpio19\nheater: extruder\nheater_temp: 50.0\n\n#####################################################################\n#      TAP && PL08N && BLTOUCH \n#####################################################################\n# [stepper_x]\n# endstop_pin: ^!SB2040:gpio18\n\n# #####################################################################\n# #      TAP && PL08N && BLTOUCH \n# #####################################################################\n# ## https://www.klipper3d.org/Config_Reference.html?h=probe#probe\n# [probe]\n# pin: ^SB2040:gpio22          #gpio22\n# x_offset: 0\n# y_offset: 25.0\n# z_offset: 0\n# speed: 10.0\n# samples: 3\n# samples_result: median\n# sample_retract_dist: 4.0\n# samples_tolerance: 0.010\n# samples_tolerance_retries: 3\n\n'})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}}}]);