"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[3156],{24951:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var l=t(20641);const i={class:"left-panel"},s={class:"right-panel"},n={class:"right-panel-search"};function o(e,a,t,o,r,d){const c=(0,l.g2)("el-button"),h=(0,l.g2)("el-input"),u=(0,l.g2)("el-header"),p=(0,l.g2)("el-table-column"),b=(0,l.g2)("el-tag"),g=(0,l.g2)("el-popconfirm"),f=(0,l.g2)("el-button-group"),k=(0,l.g2)("scTable"),_=(0,l.g2)("el-main"),m=(0,l.g2)("el-container"),y=(0,l.g2)("save-dialog");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(m,null,{default:(0,l.k6)((()=>[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[(0,l.Lk)("div",i,[(0,l.bF)(c,{type:"primary",icon:"el-icon-plus",onClick:d.add},null,8,["onClick"]),(0,l.bF)(c,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==r.selection.length,onClick:d.batch_del},null,8,["disabled","onClick"])]),(0,l.Lk)("div",s,[(0,l.Lk)("div",n,[(0,l.bF)(h,{modelValue:r.search.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>r.search.keyword=e),placeholder:"部门名称",clearable:""},null,8,["modelValue"]),(0,l.bF)(c,{type:"primary",icon:"el-icon-search",onClick:d.upsearch},null,8,["onClick"])])])])),_:1}),(0,l.bF)(_,{class:"nopadding"},{default:(0,l.k6)((()=>[(0,l.bF)(k,{ref:"table",data:r.data,"row-key":"id",onSelectionChange:d.selectionChange,hidePagination:""},{default:(0,l.k6)((()=>[(0,l.bF)(p,{type:"selection",width:"50"}),(0,l.bF)(p,{label:"部门名称",prop:"name_",width:"250"}),(0,l.bF)(p,{label:"排序",prop:"sn_",width:"150"}),(0,l.bF)(p,{label:"状态",prop:"state_",width:"150"},{default:(0,l.k6)((e=>[1==e.row.state_?((0,l.uX)(),(0,l.Wv)(b,{key:0,type:"success"},{default:(0,l.k6)((()=>[(0,l.eW)("启用")])),_:1})):(0,l.Q3)("",!0),0==e.row.state_?((0,l.uX)(),(0,l.Wv)(b,{key:1,type:"danger"},{default:(0,l.k6)((()=>[(0,l.eW)("停用")])),_:1})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(p,{label:"创建时间",prop:"create_time_",width:"180"}),(0,l.bF)(p,{label:"备注",prop:"desc_","min-width":"300"}),(0,l.bF)(p,{label:"操作",fixed:"right",align:"right",width:"170"},{default:(0,l.k6)((e=>[(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.bF)(c,{text:"",type:"primary",size:"small",onClick:a=>d.table_show(e.row,e.$index)},{default:(0,l.k6)((()=>[(0,l.eW)("查看")])),_:2},1032,["onClick"]),(0,l.bF)(c,{text:"",type:"primary",size:"small",onClick:a=>d.table_edit(e.row,e.$index)},{default:(0,l.k6)((()=>[(0,l.eW)("编辑")])),_:2},1032,["onClick"]),(0,l.bF)(g,{title:"确定删除吗？",onConfirm:a=>d.table_del(e.row,e.$index)},{reference:(0,l.k6)((()=>[(0,l.bF)(c,{text:"",type:"primary",size:"small"},{default:(0,l.k6)((()=>[(0,l.eW)("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["data","onSelectionChange"])])),_:1})])),_:1}),r.dialog.save?((0,l.uX)(),(0,l.Wv)(y,{key:0,ref:"saveDialog",onSuccess:d.handleSaveSuccess,onClosed:a[1]||(a[1]=e=>r.dialog.save=!1)},null,8,["onSuccess"])):(0,l.Q3)("",!0)],64)}var r=t(61255),d={name:"dept",components:{saveDialog:r["default"]},data(){return{dialog:{save:!1},data:[],selection:[],search:{keyword:null}}},async created(){this.data=await this.$apiIAM.group.fromList.get()},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},table_show(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("show").setData(e)}))},async table_del(e){var a={id:e.id},t=await this.$API.demo.post.post(a);200==t.code?(this.$refs.table.refresh(),this.$message.success("删除成功")):this.$alert(t.message,"提示",{type:"error"})},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？如果删除项中含有子集将会被一并删除`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.$refs.table.refresh(),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},selectionChange(e){this.selection=e},upsearch(){},filterTree(e){var a=null;function t(l){l.forEach((l=>{l.id==e&&(a=l),l.children&&t(l.children)}))}return t(this.$refs.table.tableData),a},handleSaveSuccess(e,a){("add"==a||"edit"==a)&&this.$refs.table.refresh()}}},c=t(66262);const h=(0,c.A)(d,[["render",o]]);var u=h}}]);