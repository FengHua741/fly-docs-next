"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[86524],{69214:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-ercf/ercfv2/cfg","title":"\u53c2\u8003\u914d\u7f6e","description":"","source":"@site/docs/ProductDoc/ToolBoard/fly-ercf/ercfv2/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-ercf/ercfv2","slug":"/ProductDoc/ToolBoard/fly-ercf/ercfv2/cfg","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-ercf/ercfv2/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-ercf/ercfv2/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1724657695000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53c2\u8003\u914d\u7f6e"},"sidebar":"tutorialSidebar","previous":{"title":"Main Board Wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-ercf/ercfv2/wiring"},"next":{"title":"Accelerometer Usage","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-ercf/ercfv2/adxl"}}');var t=r(86070),s=r(15658);const i={sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},c="\u53c2\u8003\u914d\u7f6e",a={},p=[];function l(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"## Enraged Rabbit : Carrot Feeder V1.1 hardware config file\n\n# This configuration file is only applicable to FLY ERCF Board\n\n[mcu ercf]\ncanbus_uuid:  *3251a329e6e3*\n\n# Carrot Feeder 5mm D-cut shaft\n[manual_stepper gear_stepper]\nstep_pin: ercf:gpio7\ndir_pin: ercf:gpio8\nenable_pin: !ercf:gpio6\nrotation_distance: 22.6789511    #Bondtech 5mm Drive Gears\ngear_ratio: 80:20\nmicrosteps: 16  # Please do not go higher than 16, this can cause 'MCU Timer too close' issues under Klipper\nfull_steps_per_rotation: 200    #200 for 1.8 degree, 400 for 0.9 degree\nvelocity: 35\naccel: 150\n#Right now no pin is used for the endstop, but we need to define one for klipper. So just use a random, not used pin\nendstop_pin: ercf:gpio15\n\n[tmc2209 manual_stepper gear_stepper]\n# Adapt accordingly to your setup and desires\n# The default values are tested with the BOM NEMA14 motor\n# Please adapt those values to the motor you are using\n# Example : for NEMA17 motors, you'll usually set the stealthchop_threshold to 0\n# and use higher current\nuart_pin: ercf:gpio9\ninterpolate: True\nrun_current: 0.40\nhold_current: 0.1\nsense_resistor: 0.110\nstealthchop_threshold: 500\n# diag_pin: ercf:gpio15\n\n# [tmc5160 manual_stepper gear_stepper]\n# cs_pin: ercf:gpio9\n#spi_software_sclk_pin: ercf:gpio19\n#spi_software_mosi_pin: ercf:gpio18\n#spi_software_miso_pin: ercf:gpio16\n# interpolate: True\n# run_current: 0.40\n# hold_current: 0.1\n# stealthchop_threshold: 500\n# diag0_pin: ercf:gpio15\n\n\n\n# Carrot Feeder selector\n[manual_stepper selector_stepper]\nstep_pin: ercf:gpio4\ndir_pin: ercf:gpio5\nenable_pin: !ercf:gpio5\nmicrosteps: 16    # Please do not go higher than 16, this can cause 'MCU Timer too close' issues under Klipper\nrotation_distance: 40\nfull_steps_per_rotation: 200    #200 for 1.8 degree, 400 for 0.9 degree\nvelocity: 200\naccel: 600\n# Select the endstop you want depending if you are using sensorless homing for the selector or not\nendstop_pin: ercf:gpio20\n#endstop_pin: tmc2209_selector_stepper:virtual_endstop\n#endstop_pin: tmc5160_selector_stepper:virtual_endstop\n\n[tmc2209 manual_stepper selector_stepper]\nuart_pin: ercf:gpio2\nrun_current: 0.55\ninterpolate: True\nsense_resistor: 0.110\nstealthchop_threshold: 500\n# Uncomment the lines below if you want to use sensorless homing for the selector\n#diag_pin: ^ercf:gpio20      # Set to MCU pin connected to TMC DIAG pin\n#driver_SGTHRS: 75  # 255 is most sensitive value, 0 is least sensitive\n\n# [tmc5160 manual_stepper selector_stepper]\n# cs_pin: ercf:gpio2\n#spi_software_sclk_pin: ercf:gpio19\n#spi_software_mosi_pin: ercf:gpio18\n#spi_software_miso_pin: ercf:gpio16\n# interpolate: True\n# run_current: 0.40\n# hold_current: 0.1\n# stealthchop_threshold: 500\n# diag_pin: ercf:gpio20\n# driver_SGT: 75\n\n\n# Values are for the MG90S servo\n[servo ercf_servo]\npin: ercf:gpio21\nmaximum_servo_angle: 180\nminimum_pulse_width: 0.00085\nmaximum_pulse_width: 0.00215\n\n[duplicate_pin_override]\npins: ercf:gpio15\n# Put there the pin used by the encoder and the filament_motion_sensor\n# It has to be the same pin for those 3\n\n[filament_motion_sensor encoder_sensor]\nswitch_pin: ^ercf:gpio21\npause_on_runout: False\ndetection_length: 10.0\nextruder: extruder\n# runout_gcode: _ERCF_ENCODER_MOTION_ISSUE\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);