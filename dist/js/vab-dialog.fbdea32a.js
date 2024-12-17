"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[999],{61488:function(e,a,l){l.r(a),l.d(a,{default:function(){return g}});var o=l(51464);function i(e,a,l,i,d,n){const t=(0,o.g2)("el-alert"),g=(0,o.g2)("el-button"),u=(0,o.g2)("el-card"),s=(0,o.g2)("el-main"),r=(0,o.g2)("sc-dialog"),k=(0,o.g2)("el-empty"),p=(0,o.g2)("dialog1"),y=(0,o.g2)("dialog2");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(s,null,{default:(0,o.k6)((()=>[(0,o.bF)(t,{title:"二次封装el-dialog,加入加载中/最大化.",type:"success",style:{margin:"0 0 20px 0"}}),(0,o.bF)(u,{shadow:"never",header:"内置"},{default:(0,o.k6)((()=>[(0,o.bF)(g,{type:"primary",onClick:n.open1},{default:(0,o.k6)((()=>a[11]||(a[11]=[(0,o.eW)("默认")]))),_:1},8,["onClick"]),(0,o.bF)(g,{type:"primary",onClick:n.open2},{default:(0,o.k6)((()=>a[12]||(a[12]=[(0,o.eW)("加载")]))),_:1},8,["onClick"]),(0,o.bF)(g,{type:"primary",onClick:n.open3},{default:(0,o.k6)((()=>a[13]||(a[13]=[(0,o.eW)("禁止拖拽最大化和关闭")]))),_:1},8,["onClick"])])),_:1}),(0,o.bF)(u,{shadow:"never",header:"异步",style:{"margin-top":"15px"}},{default:(0,o.k6)((()=>[(0,o.bF)(g,{type:"primary",onClick:n.asyn1},{default:(0,o.k6)((()=>a[14]||(a[14]=[(0,o.eW)("异步加载1")]))),_:1},8,["onClick"]),(0,o.bF)(g,{type:"primary",onClick:n.asyn2},{default:(0,o.k6)((()=>a[15]||(a[15]=[(0,o.eW)("异步加载2")]))),_:1},8,["onClick"]),(0,o.bF)(t,{title:"适用于页面有很多弹窗操作,利用异步组件按需加载,加快首屏的加载速度和打包体积",style:{"margin-top":"20px"}})])),_:1})])),_:1}),(0,o.bF)(r,{modelValue:d.dialog1,"onUpdate:modelValue":a[2]||(a[2]=e=>d.dialog1=e),draggable:"",title:"提示"},{footer:(0,o.k6)((()=>[(0,o.bF)(g,{onClick:a[0]||(a[0]=e=>d.dialog1=!1)},{default:(0,o.k6)((()=>a[16]||(a[16]=[(0,o.eW)("取 消")]))),_:1}),(0,o.bF)(g,{type:"primary",onClick:a[1]||(a[1]=e=>d.dialog1=!1)},{default:(0,o.k6)((()=>a[17]||(a[17]=[(0,o.eW)("确 定")]))),_:1})])),default:(0,o.k6)((()=>[a[18]||(a[18]=(0,o.eW)(" 内容 "))])),_:1},8,["modelValue"]),(0,o.bF)(r,{modelValue:d.dialog2,"onUpdate:modelValue":a[5]||(a[5]=e=>d.dialog2=e),draggable:"",title:"模拟加载",width:400,loading:d.dialog2Loading},{footer:(0,o.k6)((()=>[(0,o.bF)(g,{onClick:a[3]||(a[3]=e=>d.dialog2=!1)},{default:(0,o.k6)((()=>a[19]||(a[19]=[(0,o.eW)("取 消")]))),_:1}),(0,o.bF)(g,{type:"primary",onClick:a[4]||(a[4]=e=>d.dialog2=!1),loading:d.dialog2Loading},{default:(0,o.k6)((()=>a[20]||(a[20]=[(0,o.eW)("确 定")]))),_:1},8,["loading"])])),default:(0,o.k6)((()=>[(0,o.bF)(k,{description:"NO Data","image-size":80})])),_:1},8,["modelValue","loading"]),(0,o.bF)(r,{modelValue:d.dialog3,"onUpdate:modelValue":a[8]||(a[8]=e=>d.dialog3=e),title:"禁用拖拽","show-fullscreen":!1,"show-close":!1},{footer:(0,o.k6)((()=>[(0,o.bF)(g,{onClick:a[6]||(a[6]=e=>d.dialog3=!1)},{default:(0,o.k6)((()=>a[21]||(a[21]=[(0,o.eW)("取 消")]))),_:1}),(0,o.bF)(g,{type:"primary",onClick:a[7]||(a[7]=e=>d.dialog3=!1)},{default:(0,o.k6)((()=>a[22]||(a[22]=[(0,o.eW)("确 定")]))),_:1})])),default:(0,o.k6)((()=>[a[23]||(a[23]=(0,o.eW)(" 内容 "))])),_:1},8,["modelValue"]),d.asynDialog1?((0,o.uX)(),(0,o.Wv)(p,{key:0,draggable:"",onClosed:a[9]||(a[9]=e=>d.asynDialog1=!1)})):(0,o.Q3)("",!0),d.asynDialog2?((0,o.uX)(),(0,o.Wv)(y,{key:1,draggable:"",onClosed:a[10]||(a[10]=e=>d.asynDialog2=!1)})):(0,o.Q3)("",!0)],64)}var d={name:"dialogExtend",components:{dialog1:(0,o.$V)((()=>l.e(5449).then(l.bind(l,8358)))),dialog2:(0,o.$V)((()=>l.e(9842).then(l.bind(l,97589))))},data(){return{dialog1:!1,dialog2:!1,dialog3:!1,dialog2Loading:!1,asynDialog1:!1,asynDialog2:!1}},mounted(){},methods:{open1(){this.dialog1=!0},open2(){this.dialog2=!0,this.dialog2Loading=!0,setTimeout((()=>{this.dialog2Loading=!1}),1e3)},open3(){this.dialog3=!0},asyn1(){this.asynDialog1=!0},asyn2(){this.asynDialog2=!0}}},n=l(51456);const t=(0,n.A)(d,[["render",i]]);var g=t}}]);