"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[8141],{38936:function(e,l,t){t.r(l),t.d(l,{default:function(){return f}});var i=t(51464),s=t(51681);const a={class:"bottom"},n={class:"state"},d={class:"handler"};function o(e,l,t,o,u,c){const r=(0,i.g2)("el-tag"),k=(0,i.g2)("el-button"),g=(0,i.g2)("el-popconfirm"),f=(0,i.g2)("el-dropdown-item"),h=(0,i.g2)("el-dropdown-menu"),m=(0,i.g2)("el-dropdown"),p=(0,i.g2)("el-card"),b=(0,i.g2)("el-col"),v=(0,i.g2)("el-icon-plus"),_=(0,i.g2)("el-icon"),F=(0,i.g2)("el-row"),C=(0,i.g2)("el-main"),w=(0,i.g2)("save-dialog"),L=(0,i.g2)("logs"),y=(0,i.g2)("el-drawer");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(C,null,{default:(0,i.k6)((()=>[(0,i.bF)(F,{gutter:15},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(u.list,(e=>((0,i.uX)(),(0,i.Wv)(b,{xl:6,lg:6,md:8,sm:12,xs:24,key:e.id},{default:(0,i.k6)((()=>[(0,i.bF)(p,{class:"task task-item",shadow:"hover"},{default:(0,i.k6)((()=>[(0,i.Lk)("h2",null,(0,s.v_)(e.title),1),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[l[2]||(l[2]=(0,i.Lk)("h4",null,"执行类",-1)),(0,i.Lk)("p",null,(0,s.v_)(e.handler),1)]),(0,i.Lk)("li",null,[l[3]||(l[3]=(0,i.Lk)("h4",null,"定时规则",-1)),(0,i.Lk)("p",null,(0,s.v_)(e.cron),1)])]),(0,i.Lk)("div",a,[(0,i.Lk)("div",n,["1"==e.state?((0,i.uX)(),(0,i.Wv)(r,{key:0,size:"small"},{default:(0,i.k6)((()=>l[4]||(l[4]=[(0,i.eW)("准备就绪")]))),_:1})):(0,i.Q3)("",!0),"-1"==e.state?((0,i.uX)(),(0,i.Wv)(r,{key:1,size:"small",type:"info"},{default:(0,i.k6)((()=>l[5]||(l[5]=[(0,i.eW)("停用")]))),_:1})):(0,i.Q3)("",!0)]),(0,i.Lk)("div",d,[(0,i.bF)(g,{title:"确定立即执行吗？",onConfirm:l=>c.run(e)},{reference:(0,i.k6)((()=>[(0,i.bF)(k,{type:"primary",icon:"el-icon-caret-right",circle:""})])),_:2},1032,["onConfirm"]),(0,i.bF)(m,{trigger:"click"},{dropdown:(0,i.k6)((()=>[(0,i.bF)(h,null,{default:(0,i.k6)((()=>[(0,i.bF)(f,{onClick:l=>c.edit(e)},{default:(0,i.k6)((()=>l[6]||(l[6]=[(0,i.eW)("编辑")]))),_:2},1032,["onClick"]),(0,i.bF)(f,{onClick:l=>c.logs(e)},{default:(0,i.k6)((()=>l[7]||(l[7]=[(0,i.eW)("日志")]))),_:2},1032,["onClick"]),(0,i.bF)(f,{onClick:l=>c.del(e),divided:""},{default:(0,i.k6)((()=>l[8]||(l[8]=[(0,i.eW)("删除")]))),_:2},1032,["onClick"])])),_:2},1024)])),default:(0,i.k6)((()=>[(0,i.bF)(k,{type:"primary",icon:"el-icon-more",circle:"",plain:""})])),_:2},1024)])])])),_:2},1024)])),_:2},1024)))),128)),(0,i.bF)(b,{xl:6,lg:6,md:8,sm:12,xs:24},{default:(0,i.k6)((()=>[(0,i.bF)(p,{class:"task task-add",shadow:"never",onClick:c.add},{default:(0,i.k6)((()=>[(0,i.bF)(_,null,{default:(0,i.k6)((()=>[(0,i.bF)(v)])),_:1}),l[9]||(l[9]=(0,i.Lk)("p",null,"添加计划任务",-1))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),u.dialog.save?((0,i.uX)(),(0,i.Wv)(w,{key:0,ref:"saveDialog",onSuccess:c.handleSuccess,onClosed:l[0]||(l[0]=e=>u.dialog.save=!1)},null,8,["onSuccess"])):(0,i.Q3)("",!0),(0,i.bF)(y,{title:"计划任务日志",modelValue:u.dialog.logsVisible,"onUpdate:modelValue":l[1]||(l[1]=e=>u.dialog.logsVisible=e),size:600,direction:"rtl","destroy-on-close":""},{default:(0,i.k6)((()=>[(0,i.bF)(L)])),_:1},8,["modelValue"])],64)}t(78982),t(64660),t(40772),t(89593);var u=t(77654),c=t(64242),r={name:"task",components:{saveDialog:u["default"],logs:c["default"]},provide(){return{list:this.list}},data(){return{dialog:{save:!1,logsVisible:!1},list:[{id:"1",title:"清理服务器缓存",handler:"cleanUpCacheHandler",cron:"59 59 23 * * ? *",state:"1"},{id:"2",title:"自动审核",handler:"automaticAuditHandler",cron:"0 0 * * * ? *",state:"1"},{id:"3",title:"清理未实名用户",handler:"deleteUserHandler",cron:"0 0 0 * * ? *",state:"-1"}]}},mounted(){},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},del(e){this.$confirm(`确认删除 ${e.title} 计划任务吗？`,"提示",{type:"warning",confirmButtonText:"删除",confirmButtonClass:"el-button--danger"}).then((()=>{this.list.splice(this.list.findIndex((l=>l.id===e.id)),1)})).catch((()=>{}))},logs(){this.dialog.logsVisible=!0},run(e){this.$message.success(`已成功执行计划任务：${e.title}`)},handleSuccess(e,l){"add"==l?(e.id=(new Date).getTime(),this.list.push(e)):"edit"==l&&this.list.filter((l=>l.id===e.id)).forEach((l=>{Object.assign(l,e)}))}}},k=t(51456);const g=(0,k.A)(r,[["render",o],["__scopeId","data-v-dbf89736"]]);var f=g}}]);