"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[7373],{98870:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var l=t(20641),o=t(90033);const r={class:"left-panel"},s={class:"right-panel"},i={class:"right-panel-search"},n={key:0,style:{"writing-mode":"horizontal-tb"}};function d(e,a,t,d,c,u){const p=(0,l.g2)("el-tree"),h=(0,l.g2)("el-card"),b=(0,l.g2)("el-col"),g=(0,l.g2)("el-tab-pane"),f=(0,l.g2)("el-tabs"),m=(0,l.g2)("el-header"),k=(0,l.g2)("el-button"),_=(0,l.g2)("el-input"),F=(0,l.g2)("el-table-column"),y=(0,l.g2)("el-avatar"),w=(0,l.g2)("el-popconfirm"),v=(0,l.g2)("el-button-group"),C=(0,l.g2)("scTable"),D=(0,l.g2)("el-main"),$=(0,l.g2)("el-tag"),I=(0,l.g2)("el-row"),L=(0,l.g2)("save-dialog"),N=(0,l.gN)("loading");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(D,null,{default:(0,l.k6)((()=>[(0,l.bF)(I,{gutter:15},{default:(0,l.k6)((()=>[(0,l.bF)(b,{lg:3},{default:(0,l.k6)((()=>[(0,l.bF)(h,{header:"项目编号"},{default:(0,l.k6)((()=>[(0,l.bo)((0,l.bF)(p,{style:{"max-width":"600px"},data:c.projectData,"node-key":"id_",props:c.defaultProps,onNodeClick:u.handleNodeClick},null,8,["data","props","onNodeClick"]),[[N,c.proNumLoading]])])),_:1})])),_:1}),(0,l.bF)(b,{lg:21},{default:(0,l.k6)((()=>[(0,l.bF)(h,{shadow:"never",header:""},{default:(0,l.k6)((()=>[(0,l.bF)(m,{class:"header-tabs"},{default:(0,l.k6)((()=>[(0,l.bF)(f,{type:"card",modelValue:c.groupId,"onUpdate:modelValue":a[0]||(a[0]=e=>c.groupId=e),onTabChange:u.tabChange},{default:(0,l.k6)((()=>[(0,l.bF)(g,{label:"项目成员 - 23010",name:"0"}),(0,l.bF)(g,{label:"外部通讯录",name:"1",disabled:""})])),_:1},8,["modelValue","onTabChange"])])),_:1}),(0,l.bF)(h,{shadow:"never",header:""},{default:(0,l.k6)((()=>[(0,l.bF)(m,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",r,[(0,l.bF)(k,{type:"primary",icon:"el-icon-plus",onClick:u.add},null,8,["onClick"])]),(0,l.Lk)("div",s,[(0,l.Lk)("div",i,[(0,l.bF)(_,{modelValue:c.search.name,"onUpdate:modelValue":a[1]||(a[1]=e=>c.search.name=e),placeholder:"查询",clearable:""},null,8,["modelValue"]),(0,l.bF)(k,{type:"primary",icon:"el-icon-search",onClick:u.upsearch},null,8,["onClick"])])])])),_:1}),0==c.groupId?((0,l.uX)(),(0,l.Wv)(D,{key:0,class:"nopadding"},{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(C,{ref:"table",data:c.usersData,onSelectionChange:u.selectionChange,stripe:"",remoteSort:"",remoteFilter:""},{default:(0,l.k6)((()=>[(0,l.bF)(F,{type:"selection",width:"50"}),(0,l.bF)(F,{label:"ID",prop:"id_",width:"80",sortable:"custom"}),(0,l.bF)(F,{label:"头像",width:"100","column-key":"filterAvatar",filters:[{text:"已上传",value:"1"},{text:"未上传",value:"0"}]},{default:(0,l.k6)((e=>[(0,l.bF)(y,{src:e.row.avatar_?e.row.avatar_:"",style:(0,o.Tr)({backgroundColor:e.row.avatar_?"":"#409EFF",color:"#fff"})},{default:(0,l.k6)((()=>[e.row.avatar_?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("span",n,(0,o.v_)(e.row.fullname_.slice(-2)),1))])),_:2},1032,["src","style"])])),_:1}),(0,l.bF)(F,{label:"登录账号",prop:"account_",width:"150",sortable:"custom","column-key":"filterUserName",filters:[{text:"系统账号",value:"1"},{text:"普通账号",value:"0"}]}),(0,l.bF)(F,{label:"姓名",prop:"fullname_",width:"150",sortable:"custom"}),(0,l.bF)(F,{label:"邮箱",prop:"email_",width:"150",sortable:"custom"}),(0,l.bF)(F,{label:"手机号码",prop:"mobile_",width:"150",sortable:"custom"}),(0,l.bF)(F,{label:"状态",prop:"status_",width:"150",sortable:"custom"}),(0,l.bF)(F,{label:"操作",fixed:"right",align:"right",width:"160"},{default:(0,l.k6)((e=>[(0,l.bF)(v,null,{default:(0,l.k6)((()=>[(0,l.bF)(w,{title:"确定删除吗？",onConfirm:a=>u.table_del(e.row,e.$index)},{reference:(0,l.k6)((()=>[(0,l.bF)(k,{text:"",type:"primary",size:"small"},{default:(0,l.k6)((()=>[(0,l.eW)("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["data","onSelectionChange"])),[[N,c.userLoading]])])),_:1})):(0,l.Q3)("",!0),1==c.groupId?((0,l.uX)(),(0,l.Wv)(D,{key:1,class:"nopadding"},{default:(0,l.k6)((()=>[(0,l.bF)(C,{ref:"table",data:c.contactList,onSelectionChange:u.selectionChange1,stripe:"",remoteSort:"",remoteFilter:""},{default:(0,l.k6)((()=>[(0,l.bF)(F,{type:"selection",width:"0"}),(0,l.bF)(F,{prop:"companyName",label:"公司名称",width:"180"}),(0,l.bF)(F,{prop:"contactName",label:"联系人",width:"150"}),(0,l.bF)(F,{prop:"type",label:"类型",width:"150"},{default:(0,l.k6)((({row:e})=>[(0,l.bF)($,{type:u.getTagType(e.type)},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.type),1)])),_:2},1032,["type"])])),_:1}),(0,l.bF)(F,{prop:"phone",label:"联系电话",width:"150"}),(0,l.bF)(F,{prop:"email",label:"电子邮件",width:"200"})])),_:1},8,["data","onSelectionChange"])])),_:1})):(0,l.Q3)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c.dialog.save?((0,l.uX)(),(0,l.Wv)(L,{key:0,ref:"saveDialog",onSuccess:u.handleSuccess,onClosed:a[2]||(a[2]=e=>c.dialog.save=!1)},null,8,["onSuccess"])):(0,l.Q3)("",!0)],64)}var c=t(53879),u={name:"user",components:{saveDialog:c["default"]},data(){return{defaultProps:{label:"project_number_"},proNumLoading:!1,userLoading:!1,groupId:"0",contactList:[],dialog:{save:!1},showGrouploading:!1,groupFilterText:"",group:[],apiObj:[],selection:[],search:{name:null},projectData:[],usersData:[]}},created(){this.getProjectInfo()},methods:{async handleNodeClick(e){const a={project_id_:e.uuid_};this.userLoading=!0;try{const e=await this.$dmsApi.projectUsershiproute.readId.post(a);if(!e)return null;this.usersData=await this.$apiIAM.user.usersByUserIds.post(e)}catch(t){this.usersData=[]}finally{this.userLoading=!1}},async getProjectInfo(){this.proNumLoading=!0;try{this.projectData=await this.$dmsApi.project.readAll.get()}catch(e){console.error("Error fetching user list:",e)}finally{this.proNumLoading=!1}},selectionChange1(e){console.log("选中的行：",e)},getTagType(e){switch(e){case"供应商":return"success";case"设计院":return"warning";case"承包商":return"info";default:return"primary"}},tabChange(e){var a={groupId:e};this.$refs.table.reload(a)},filterChange(e){this.$refs.table.upData(e)},add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open().setData(this.usersData)}))},table_edit(e){this.dialog.save=!0,console.log(e)},table_show(e){this.dialog.save=!0,console.log(e)},async table_del(e,a){var t={id:e.id},l=await this.$API.demo.post.post(t);200==l.code?this.$refs.table.tableData.splice(a,1):this.$alert(l.message,"提示",{type:"error"})},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((a,t)=>{e.id===a.id&&this.$refs.table.tableData.splice(t,1)}))})),e.close()})).catch((()=>{}))},selectionChange(e){this.selection=e},groupFilterNode(e,a){return!e||-1!==a.label.indexOf(e)},groupClick(e){var a={groupId:e.id};this.$refs.table.reload(a)},upsearch(){this.$refs.table.upData(this.search)},handleSuccess(e,a){"add"==a?(e.id=(new Date).getTime(),this.$refs.table.tableData.unshift(e)):"edit"==a&&this.$refs.table.tableData.filter((a=>a.id===e.id)).forEach((a=>{Object.assign(a,e)}))}}},p=t(66262);const h=(0,p.A)(u,[["render",d]]);var b=h}}]);