"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[7373],{7748:function(e,a,l){l.r(a),l.d(a,{default:function(){return b}});var t=l(641),i=l(33);const s={class:"left-panel"},o={class:"right-panel"},r={class:"right-panel-search"};function _(e,a,l,_,d,n){const u=(0,t.g2)("el-tree"),c=(0,t.g2)("el-card"),b=(0,t.g2)("el-col"),p=(0,t.g2)("el-button"),m=(0,t.g2)("el-input"),h=(0,t.g2)("el-header"),g=(0,t.g2)("el-table-column"),f=(0,t.g2)("el-link"),k=(0,t.g2)("el-button-group"),F=(0,t.g2)("el-popconfirm"),x=(0,t.g2)("scTable"),w=(0,t.g2)("el-main"),y=(0,t.g2)("el-row"),v=(0,t.g2)("save-dialog");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(w,null,{default:(0,t.k6)((()=>[(0,t.bF)(y,{gutter:15},{default:(0,t.k6)((()=>[(0,t.bF)(b,{lg:3},{default:(0,t.k6)((()=>[(0,t.bF)(c,null,{default:(0,t.k6)((()=>[(0,t.bF)(u,{style:{"max-width":"600px"},data:d.data,"node-key":"id","default-expanded-keys":[1,2,3],"default-checked-keys":[42],props:e.defaultProps},null,8,["data","props"])])),_:1})])),_:1}),(0,t.bF)(b,{lg:21},{default:(0,t.k6)((()=>[(0,t.bF)(c,{shadow:"never",header:"项目成员 - 23010"},{default:(0,t.k6)((()=>[(0,t.bF)(h,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",s,[(0,t.bF)(p,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==d.selection.length,onClick:n.batch_del},null,8,["disabled","onClick"]),(0,t.bF)(p,{type:"primary",plain:"",disabled:0==d.selection.length},{default:(0,t.k6)((()=>[(0,t.eW)("添加成员")])),_:1},8,["disabled"]),(0,t.bF)(p,{type:"primary",plain:"",disabled:0==d.selection.length},{default:(0,t.k6)((()=>[(0,t.eW)("密码重置")])),_:1},8,["disabled"])]),(0,t.Lk)("div",o,[(0,t.Lk)("div",r,[(0,t.bF)(m,{modelValue:d.search.name,"onUpdate:modelValue":a[0]||(a[0]=e=>d.search.name=e),placeholder:"登录账号 / 姓名",clearable:""},null,8,["modelValue"]),(0,t.bF)(p,{type:"primary",icon:"el-icon-search",onClick:n.upsearch},null,8,["onClick"])])])])),_:1}),(0,t.bF)(w,{class:"nopadding"},{default:(0,t.k6)((()=>[(0,t.bF)(x,{ref:"table",data:d.apiObj,onSelectionChange:n.selectionChange,stripe:"",remoteSort:"",remoteFilter:""},{default:(0,t.k6)((()=>[(0,t.bF)(g,{type:"selection",width:"0"}),(0,t.bF)(g,{label:"ID",prop:"id_",width:"80",sortable:"custom"}),(0,t.bF)(g,{label:"登录账号",prop:"account_",width:"120",sortable:"custom","column-key":"filterUserName",filters:[{text:"系统账号",value:"1"},{text:"普通账号",value:"0"}]}),(0,t.bF)(g,{label:"姓名",prop:"fullname_",width:"100",sortable:"custom"}),(0,t.bF)(g,{label:"角色",prop:"juese_",width:"100",sortable:"custom"}),(0,t.bF)(g,{label:"邮箱",prop:"email_",width:"150",sortable:"custom"}),(0,t.bF)(g,{label:"手机号码",prop:"mobile_",width:"150",sortable:"custom"}),(0,t.bF)(g,{label:"所属组织",prop:"create_org_id_",width:"150",sortable:"custom"},{default:(0,t.k6)((e=>[(0,t.bF)(k,null,{default:(0,t.k6)((()=>[(0,t.bF)(f,{type:"外部"===e.row.create_org_id_?"danger":""},{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(e.row.create_org_id_),1)])),_:2},1032,["type"])])),_:2},1024)])),_:1}),(0,t.bF)(g,{label:"到期时间",prop:"expire_date_",width:"150",sortable:"custom"}),(0,t.bF)(g,{label:"状态",prop:"status_",width:"150",sortable:"custom"},{default:(0,t.k6)((e=>[(0,t.bF)(k,null,{default:(0,t.k6)((()=>[(0,t.bF)(f,{type:"启用"===e.row.status_?"success":"danger"},{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(e.row.status_),1)])),_:2},1032,["type"])])),_:2},1024)])),_:1}),(0,t.bF)(g,{label:"操作",fixed:"right",align:"right",width:"160"},{default:(0,t.k6)((e=>[(0,t.bF)(k,null,{default:(0,t.k6)((()=>[(0,t.bF)(p,{text:"",type:"primary",size:"small"},{default:(0,t.k6)((()=>[(0,t.eW)("查看")])),_:1}),(0,t.bF)(p,{text:"",type:"primary",size:"small"},{default:(0,t.k6)((()=>[(0,t.eW)("编辑")])),_:1}),(0,t.bF)(F,{title:"确定删除吗？",onConfirm:a=>n.table_del(e.row,e.$index)},{reference:(0,t.k6)((()=>[(0,t.bF)(p,{text:"",type:"primary",size:"small"},{default:(0,t.k6)((()=>[(0,t.eW)("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["data","onSelectionChange"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),d.dialog.save?((0,t.uX)(),(0,t.Wv)(v,{key:0,ref:"saveDialog",onSuccess:n.handleSuccess,onClosed:a[1]||(a[1]=e=>d.dialog.save=!1)},null,8,["onSuccess"])):(0,t.Q3)("",!0)],64)}var d=l(6330),n={name:"user",components:{saveDialog:d["default"]},data(){return{data:[{id:1,label:"项目表",children:[{id:43,label:"23010"},{id:45,label:"22041"},{id:46,label:"23029"},{id:42,label:"21014S"}]}],dialog:{save:!1},showGrouploading:!1,groupFilterText:"",group:[],apiObj:[{id_:1,account_:"user1",fullname_:"邹荡平",email_:"john.doe@example.com",mobile_:"1234567890",create_org_id_:"友奇",expire_date_:"长期",status_:"启用",juese_:"项目经理"},{id_:2,account_:"user2",fullname_:"赵琦",email_:"jane.smith@example.com",mobile_:"2345678901",create_org_id_:"友奇",expire_date_:"长期",status_:"停用",juese_:"二维设计"},{id_:3,account_:"user3",fullname_:"黄义",email_:"alice.johnson@example.com",mobile_:"3456789012",create_org_id_:"友奇",expire_date_:"长期",status_:"启用",juese_:"三维设计"},{id_:4,account_:"user4",fullname_:"陈维原",email_:"bob.brown@example.com",mobile_:"4567890123",create_org_id_:"友奇",expire_date_:"长期",status_:"启用",juese_:"电气"},{id_:5,account_:"user5",fullname_:"朱文广",email_:"charlie.davis@example.com",mobile_:"5678901234",create_org_id_:"友奇",expire_date_:"长期",status_:"停用",juese_:"工艺"},{id_:6,account_:"user6",fullname_:"袁永航",email_:"diana.evans@example.com",mobile_:"6789012345",create_org_id_:"外部",expire_date_:"2024-07-31",status_:"启用",juese_:"电气"},{id_:7,account_:"user7",fullname_:"陈相羽",email_:"edward.franklin@example.com",mobile_:"7890123456",create_org_id_:"外部",expire_date_:"2024-06-30",status_:"启用",juese_:"工艺"},{id_:8,account_:"user8",fullname_:"陈硕",email_:"fiona.green@example.com",mobile_:"8901234567",create_org_id_:"外部",expire_date_:"2024-05-31",status_:"停用",juese_:"自动化"},{id_:9,account_:"user9",fullname_:"陆智杰",email_:"george.harris@example.com",mobile_:"9012345678",create_org_id_:"友奇",expire_date_:"长期",status_:"启用",juese_:"计算"},{id_:10,account_:"user10",fullname_:"郑昊",email_:"hannah.irving@example.com",mobile_:"0123456789",create_org_id_:"友奇",expire_date_:"长期",status_:"停用",juese_:"计算"}],selection:[],search:{name:null}}},async created(){},watch:{},mounted(){},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{}))},table_edit(e){this.dialog.save=!0,console.log(e)},table_show(e){this.dialog.save=!0,console.log(e)},async table_del(e,a){var l={id:e.id},t=await this.$API.demo.post.post(l);200==t.code?(this.$refs.table.tableData.splice(a,1),this.$message.success("删除成功")):this.$alert(t.message,"提示",{type:"error"})},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((a,l)=>{e.id===a.id&&this.$refs.table.tableData.splice(l,1)}))})),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},selectionChange(e){this.selection=e},groupFilterNode(e,a){return!e||-1!==a.label.indexOf(e)},groupClick(e){var a={groupId:e.id};this.$refs.table.reload(a)},upsearch(){this.$refs.table.upData(this.search)},handleSuccess(e,a){"add"==a?(e.id=(new Date).getTime(),this.$refs.table.tableData.unshift(e)):"edit"==a&&this.$refs.table.tableData.filter((a=>a.id===e.id)).forEach((a=>{Object.assign(a,e)}))}}},u=l(6262);const c=(0,u.A)(n,[["render",_]]);var b=c}}]);