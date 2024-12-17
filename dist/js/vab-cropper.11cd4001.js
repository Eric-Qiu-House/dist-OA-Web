"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[2822],{83062:function(e,l,a){a.r(l),a.d(l,{default:function(){return i}});var t=a(51464);const o=["src"];function r(e,l,a,r,p,s){const c=(0,t.g2)("sc-cropper"),u=(0,t.g2)("el-card"),i=(0,t.g2)("el-option"),d=(0,t.g2)("el-select"),m=(0,t.g2)("el-form-item"),n=(0,t.g2)("el-form"),b=(0,t.g2)("el-button"),g=(0,t.g2)("el-col"),f=(0,t.g2)("el-alert"),k=(0,t.g2)("sc-upload"),F=(0,t.g2)("el-row"),h=(0,t.g2)("el-main");return(0,t.uX)(),(0,t.Wv)(h,null,{default:(0,t.k6)((()=>[(0,t.bF)(F,{gutter:15},{default:(0,t.k6)((()=>[(0,t.bF)(g,{lg:14},{default:(0,t.k6)((()=>[(0,t.bF)(u,{shadow:"never"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{src:p.cropperImg,compress:p.compress,aspectRatio:p.aspectRatio,ref:"cropper"},null,8,["src","compress","aspectRatio"])])),_:1}),(0,t.bF)(u,{shadow:"never",header:"参数和方法"},{default:(0,t.k6)((()=>[(0,t.bF)(n,{"label-width":"100px"},{default:(0,t.k6)((()=>[(0,t.bF)(m,{label:"aspectRatio"},{default:(0,t.k6)((()=>[(0,t.bF)(d,{modelValue:p.aspectRatio,"onUpdate:modelValue":l[0]||(l[0]=e=>p.aspectRatio=e),placeholder:"请选择"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{label:"自由",value:0}),(0,t.bF)(i,{label:"1:1",value:1}),(0,t.bF)(i,{label:"4:3",value:4/3}),(0,t.bF)(i,{label:"16:9",value:16/9})])),_:1},8,["modelValue"]),l[3]||(l[3]=(0,t.Lk)("div",{class:"el-form-item-msg"},"固定选区或者不固定",-1))])),_:1}),(0,t.bF)(m,{label:"compress"},{default:(0,t.k6)((()=>[(0,t.bF)(d,{modelValue:p.compress,"onUpdate:modelValue":l[1]||(l[1]=e=>p.compress=e),placeholder:"请选择"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{label:"0.1",value:.1}),(0,t.bF)(i,{label:"0.5",value:.5}),(0,t.bF)(i,{label:"1",value:1})])),_:1},8,["modelValue"]),l[4]||(l[4]=(0,t.Lk)("div",{class:"el-form-item-msg"},"图像压缩率，值为：0.1-1",-1))])),_:1})])),_:1}),(0,t.bF)(b,{type:"primary",plain:"",onClick:s.getBase64},{default:(0,t.k6)((()=>l[5]||(l[5]=[(0,t.eW)("Base64")]))),_:1},8,["onClick"]),(0,t.bF)(b,{type:"primary",plain:"",onClick:s.getBlob},{default:(0,t.k6)((()=>l[6]||(l[6]=[(0,t.eW)("Blob")]))),_:1},8,["onClick"]),(0,t.bF)(b,{type:"primary",plain:"",onClick:s.getFile},{default:(0,t.k6)((()=>l[7]||(l[7]=[(0,t.eW)("File")]))),_:1},8,["onClick"])])),_:1}),(0,t.bF)(u,{shadow:"never",header:"方法结果"},{default:(0,t.k6)((()=>[(0,t.Lk)("img",{src:p.imgData},null,8,o)])),_:1})])),_:1}),(0,t.bF)(g,{lg:10},{default:(0,t.k6)((()=>[(0,t.bF)(u,{shadow:"never",header:"已内置剪裁的上传组件"},{default:(0,t.k6)((()=>[(0,t.bF)(f,{title:"设置cropper就可以开启上传前剪裁, 并已封装compress和aspectRatio, 打开F12查看网络请求",type:"success",style:{"margin-bottom":"20px"}}),(0,t.bF)(k,{modelValue:p.uploadImg,"onUpdate:modelValue":l[2]||(l[2]=e=>p.uploadImg=e),title:"开启剪裁",cropper:!0,compress:1,aspectRatio:1},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}a(84535),a(91554),a(325);var p=a(22402),s={name:"cropper",components:{scCropper:p["default"]},data(){return{cropperImg:"img/avatar.jpg",compress:.5,aspectRatio:0,uploadImg:"",imgData:""}},methods:{getBase64(){this.$refs.cropper.getCropData((e=>{this.imgData=e}))},getBlob(){this.$refs.cropper.getCropBlob((e=>{this.imgData=URL.createObjectURL(e)}))},getFile(){this.$refs.cropper.getCropFile((e=>{let l=document.createElement("a");l.download=e.name,l.href=URL.createObjectURL(e),l.click()}),"fileName.jpg","image/jpeg")}}},c=a(51456);const u=(0,c.A)(s,[["render",r]]);var i=u}}]);