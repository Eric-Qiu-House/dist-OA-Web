"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[7083],{4731:function(e,t,l){l.r(t),l.d(t,{default:function(){return n}});var i=l(20641);function a(e,t,l,a,r,d){const u=(0,i.g2)("sc-page-header"),n=(0,i.g2)("el-alert"),o=(0,i.g2)("el-input"),s=(0,i.g2)("el-form-item"),c=(0,i.g2)("el-button"),m=(0,i.g2)("el-form"),b=(0,i.g2)("el-card"),f=(0,i.g2)("el-main");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(u,{title:r.id?"编辑":"新增",description:"可用于非常复杂的表单提交，如一些较为简单的表单提交应使用dialog或者drawer更合适",icon:"el-icon-burger"},null,8,["title"]),(0,i.bF)(f,null,{default:(0,i.k6)((()=>[(0,i.bF)(n,{title:"注意: 因为keep-alive只接受组件name,导致多路由共用组件时,关闭或刷新一个标签导致其他同一组件的页面缓存失效,后续还在寻找完美的解决方案.建议在列表页使用dialog或者drawer形式",type:"error",style:{"margin-bottom":"15px"}}),(0,i.bF)(b,{shadow:"never"},{default:(0,i.k6)((()=>[(0,i.bF)(m,{ref:"form","label-width":"100px"},{default:(0,i.k6)((()=>[(0,i.bF)(s,{label:"id"},{default:(0,i.k6)((()=>[(0,i.bF)(o,{modelValue:r.id,"onUpdate:modelValue":t[0]||(t[0]=e=>r.id=e)},null,8,["modelValue"])])),_:1}),(0,i.bF)(s,null,{default:(0,i.k6)((()=>[(0,i.bF)(c,{type:"primary"},{default:(0,i.k6)((()=>[(0,i.eW)("保存")])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1})],64)}var r={name:"listCrud-detail",data(){return{id:this.$route.query.id,input:""}},created(){},mounted(){this.$store.commit("updateViewTagsTitle",this.id?`CURD编辑ID:${this.id}`:"CURD新增")},methods:{}},d=l(66262);const u=(0,d.A)(r,[["render",a]]);var n=u}}]);