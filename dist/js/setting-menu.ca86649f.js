"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[383],{47223:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(20641),s=n(90033),i=n(53751);const l={class:"custom-tree-node"},o={class:"label"},d={class:"do"};function r(e,t,n,r,u,m){const c=(0,a.g2)("el-input"),p=(0,a.g2)("el-header"),h=(0,a.g2)("el-button"),f=(0,a.g2)("el-tree"),g=(0,a.g2)("el-main"),k=(0,a.g2)("el-footer"),v=(0,a.g2)("el-container"),b=(0,a.g2)("el-aside"),$=(0,a.g2)("save"),F=(0,a.gN)("loading");return(0,a.uX)(),(0,a.Wv)(v,null,{default:(0,a.k6)((()=>[(0,a.bo)(((0,a.uX)(),(0,a.Wv)(b,{width:"300px"},{default:(0,a.k6)((()=>[(0,a.bF)(v,null,{default:(0,a.k6)((()=>[(0,a.bF)(p,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,{placeholder:"输入关键字进行过滤",modelValue:u.menuFilterText,"onUpdate:modelValue":t[0]||(t[0]=e=>u.menuFilterText=e),clearable:""},null,8,["modelValue"])])),_:1}),(0,a.bF)(g,{class:"nopadding"},{default:(0,a.k6)((()=>[(0,a.bF)(f,{ref:"menu",class:"menu","node-key":"id",data:u.menuList,props:u.menuProps,draggable:"","highlight-current":"","expand-on-click-node":!1,"check-strictly":"","show-checkbox":"","filter-node-method":m.menuFilterNode,onNodeClick:m.menuClick,onNodeDrop:m.nodeDrop},{default:(0,a.k6)((({node:e,data:t})=>[(0,a.Lk)("span",l,[(0,a.Lk)("span",o,(0,s.v_)(e.label),1),(0,a.Lk)("span",d,[(0,a.bF)(h,{icon:"el-icon-plus",size:"small",onClick:(0,i.D$)((n=>m.add(e,t)),["stop"])},null,8,["onClick"])])])])),_:1},8,["data","props","filter-node-method","onNodeClick","onNodeDrop"])])),_:1}),(0,a.bF)(k,{style:{height:"51px"}},{default:(0,a.k6)((()=>[(0,a.bF)(h,{type:"primary",size:"small",icon:"el-icon-plus",onClick:t[1]||(t[1]=e=>m.add())}),(0,a.bF)(h,{type:"danger",size:"small",plain:"",icon:"el-icon-delete",onClick:m.delMenu},null,8,["onClick"])])),_:1})])),_:1})])),_:1})),[[F,u.menuloading]]),(0,a.bF)(v,null,{default:(0,a.k6)((()=>[(0,a.bF)(g,{class:"nopadding",style:{padding:"20px"},ref:"main"},{default:(0,a.k6)((()=>[(0,a.bF)($,{ref:"save",menu:u.menuList},null,8,["menu"])])),_:1},512)])),_:1})])),_:1})}var u=n(86514);let m=1;var c={name:"settingMenu",components:{save:u["default"]},data(){return{menuloading:!1,menuList:[],menuProps:{label:e=>e.meta.title},menuFilterText:""}},watch:{menuFilterText(e){this.$refs.menu.filter(e)}},mounted(){this.getMenu()},methods:{async getMenu(){this.menuloading=!0;var e=await this.$apiIAM.system.routerTree.get();this.menuloading=!1,this.menuList=e},menuClick(e,t){var n=1==t.level?void 0:t.parent.data.id;this.$refs.save.setData(e,n),this.$refs.main.$el.scrollTop=0},menuFilterNode(e,t){if(!e)return!0;var n=t.meta.title;return-1!==n.indexOf(e)},nodeDrop(e,t,n){this.$refs.save.setData({}),this.$message(`拖拽对象：${e.data.meta.title}, 释放对象：${t.data.meta.title}, 释放对象的位置：${n}`)},async add(e,t){var n="未命名"+m++,a={parentId:t?t.id:"",name:n,path:"",component:"",meta:{title:n,type:"menu"}};this.menuloading=!0;var s=await this.$API.demo.post.post(a);this.menuloading=!1,a.id=s.data,this.$refs.menu.append(a,e),this.$refs.menu.setCurrentKey(a.id);var i=e?e.data.id:"";this.$refs.save.setData(a,i)},async delMenu(){var e=this.$refs.menu.getCheckedNodes();if(0==e.length)return this.$message.warning("请选择需要删除的项"),!1;var t=await this.$confirm("确认删除已选择的菜单吗？","提示",{type:"warning",confirmButtonText:"删除",confirmButtonClass:"el-button--danger"}).catch((()=>{}));if("confirm"!=t)return!1;this.menuloading=!0;var n={ids:e.map((e=>e.id))},a=await this.$API.demo.post.post(n);this.menuloading=!1,200==a.code?e.forEach((e=>{var t=this.$refs.menu.getNode(e);t.isCurrent&&this.$refs.save.setData({}),this.$refs.menu.remove(e)})):this.$message.warning(a.message)}}},p=n(66262);const h=(0,p.A)(c,[["render",r],["__scopeId","data-v-26183eab"]]);var f=h}}]);