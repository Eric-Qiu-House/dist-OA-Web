"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[8049],{42391:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=s(20641);function n(e,t,s,n,i,r){const o=(0,a.g2)("el-tab-pane"),d=(0,a.g2)("el-tabs"),u=(0,a.g2)("el-header"),l=(0,a.g2)("dwg-menu");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(u,{class:"header-tabs"},{default:(0,a.k6)((()=>[(0,a.bF)(d,{type:"card",modelValue:i.groupId,"onUpdate:modelValue":t[0]||(t[0]=e=>i.groupId=e),onTabChange:e.tabChange},{default:(0,a.k6)((()=>[(0,a.bF)(o,{label:"友奇（内部）",name:"0"}),(0,a.bF)(o,{label:"船厂（外部）",name:"1",disabled:""}),(0,a.bF)(o,{label:"外派（外部）",name:"4",disabled:""})])),_:1},8,["modelValue","onTabChange"])])),_:1}),(0,a.bF)(l)],64)}var i=s(44717),r=s(1253);let o=1;var d={name:"settingMenu",components:{save:i.A,dwgMenu:r.A},props:["projectUuid"],data(){return{groupId:0,menuloading:!1,menuList:[],menuProps:{label:e=>e.title},menuFilterText:"",displayType:"图纸"}},watch:{menuFilterText(e){this.$refs.menu.filter(e)}},mounted(){console.log(this.$route.query.projectUuid,"sssssssssssssssssssssssssss")},methods:{async getMenu(){this.menuloading=!0;const e={project_id_:1};var t=await this.$dmsApi.drawingMenuProject.readId.post(e);this.menuloading=!1,this.menuList=t},menuClick(e,t){var s=1==t.level?void 0:t.parent.data.id;this.$refs.save.setData(e,s),this.$refs.main.$el.scrollTop=0,console.log(e,t)},menuFilterNode(e,t){if(!e)return!0;var s=t.title;return-1!==s.indexOf(e)},nodeDrop(e,t,s){this.$refs.save.setData({}),this.$message(`拖拽对象：${e.data.title}, 释放对象：${t.data.title}, 释放对象的位置：${s}`)},async add(e,t){var s="未命名"+o++,a={parent_id:t?t.id:null,name:s,path:"",component:"",title:s,type:"menu"};this.menuloading=!0,await this.$apiIAM.system.addRouter.post(a),this.getMenu(),this.menuloading=!1},async delMenu(){var e=this.$refs.menu.getCheckedNodes();if(0==e.length)return this.$message.warning("请选择需要删除的项"),!1;var t=await this.$confirm("确认删除已选择的菜单吗？","提示",{type:"warning",confirmButtonText:"删除",confirmButtonClass:"el-button--danger"}).catch((()=>{}));if("confirm"!=t)return!1;this.menuloading=!0;var s={ids:e.map((e=>e.id))},a=await this.$API.demo.post.post(s);this.menuloading=!1,200==a.code?e.forEach((e=>{var t=this.$refs.menu.getNode(e);t.isCurrent&&this.$refs.save.setData({}),this.$refs.menu.remove(e)})):this.$message.warning(a.message)}}},u=s(66262);const l=(0,u.A)(d,[["render",n],["__scopeId","data-v-39808fb5"]]);var m=l}}]);