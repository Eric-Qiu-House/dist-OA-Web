"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[4659],{67816:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=a(51464),s=a(51681),i=a(45883);const r={style:{padding:"10px 0",height:"52px",display:"flex","align-items":"center"}},u={class:"ellipsis-text"};function n(e,t,a,n,o,d){const _=(0,l.g2)("el-button"),c=(0,l.g2)("router-link"),p=(0,l.g2)("el-header"),h=(0,l.g2)("el-option"),w=(0,l.g2)("el-select"),b=(0,l.g2)("el-card"),m=(0,l.g2)("el-table-column"),f=(0,l.g2)("el-tag"),g=(0,l.g2)("el-popconfirm"),k=(0,l.g2)("scTable"),y=(0,l.g2)("el-main"),v=(0,l.g2)("el-container");return(0,l.uX)(),(0,l.Wv)(v,null,{default:(0,l.k6)((()=>[(0,l.bF)(p,null,{default:(0,l.k6)((()=>[(0,l.bF)(c,{to:{name:"articleEdit",query:{type:"新增内容"}}},{default:(0,l.k6)((()=>[(0,l.bF)(_,{type:"primary",icon:"el-icon-plus"},{default:(0,l.k6)((()=>t[3]||(t[3]=[(0,l.eW)("添加文章")]))),_:1})])),_:1})])),_:1}),(0,l.bF)(y,{class:"nopadding"},{default:(0,l.k6)((()=>[(0,l.bF)(b,null,{default:(0,l.k6)((()=>[(0,l.Lk)("p",null,[t[5]||(t[5]=(0,l.eW)(" 主菜单： ")),(0,l.bF)(_,{round:"",onClick:t[0]||(t[0]=e=>d.article())},{default:(0,l.k6)((()=>t[4]||(t[4]=[(0,l.eW)("全部")]))),_:1}),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.menu,((e,t)=>((0,l.uX)(),(0,l.Wv)(_,{round:"",key:t,onClick:t=>d.cutMenu(e.file_path_)},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.folder_name_),1)])),_:2},1032,["onClick"])))),128))]),(0,l.Lk)("p",r,[t[6]||(t[6]=(0,l.eW)(" 子菜单： ")),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.menuChild,((e,t)=>(0,l.bo)(((0,l.uX)(),(0,l.Wv)(_,{round:"",key:t,onClick:t=>d.cutMenuChild(e.id_)},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.menu_name_ch_),1)])),_:2},1032,["onClick"])),[[i.aG,e.form_==this.paths&&0!=this.paths&&5!=this.paths]]))),128))]),(0,l.bF)(w,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value=e),placeholder:"Select",size:"large",style:{width:"240px"},onChange:t[2]||(t[2]=e=>d.language(o.value))},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.selectedLanguage,(e=>((0,l.uX)(),(0,l.Wv)(h,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,l.bF)(k,{ref:"table",data:o.newsList,"row-key":"id_",stripe:"","row-class-name":e.getRowClassName},{default:(0,l.k6)((()=>[(0,l.bF)(m,{type:"selection",width:"50"}),(0,l.bF)(m,{label:"标题",prop:"title_",width:"200"},{default:(0,l.k6)((({row:e})=>[(0,l.Lk)("div",u,(0,s.v_)(e.title_),1)])),_:1}),(0,l.bF)(m,{label:"访问数量",prop:"visit_num_",width:"150",sortable:""}),(0,l.bF)(m,{label:"发布/下架 时间",prop:"release_time_",width:"150",sortable:""},{default:(0,l.k6)((e=>[(0,l.eW)((0,s.v_)(d.formatDate(e.row.release_time_)),1)])),_:1}),(0,l.bF)(m,{label:"语言",prop:"language_",width:"150",sortable:""},{default:(0,l.k6)((e=>[(0,l.eW)((0,s.v_)(0===e.row.language_?"中文":1===e.row.language_?"英文":"未选择"),1)])),_:1}),(0,l.bF)(m,{label:"发布人",prop:"release_name_",width:"150",sortable:""}),(0,l.bF)(m,{label:"文档状态",prop:"status_",width:"150",sortable:""},{default:(0,l.k6)((e=>["0"==e.row.status_?((0,l.uX)(),(0,l.Wv)(f,{key:0},{default:(0,l.k6)((()=>t[7]||(t[7]=[(0,l.eW)("未发布")]))),_:1})):(0,l.Q3)("",!0),"1"==e.row.status_?((0,l.uX)(),(0,l.Wv)(f,{key:1,type:"success"},{default:(0,l.k6)((()=>t[8]||(t[8]=[(0,l.eW)("发布")]))),_:1})):(0,l.Q3)("",!0),"2"==e.row.status_?((0,l.uX)(),(0,l.Wv)(f,{key:2,type:"danger"},{default:(0,l.k6)((()=>t[9]||(t[9]=[(0,l.eW)("下架")]))),_:1})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(m,{label:"更新时间",prop:"update_time_",width:"150",sortable:""},{default:(0,l.k6)((e=>[(0,l.eW)((0,s.v_)(d.formatDate(e.row.update_time_)),1)])),_:1}),(0,l.bF)(m,{label:"更新人",prop:"updater_",width:"150",sortable:""}),(0,l.bF)(m,{label:"操作",prop:"progress",width:"280",sortable:""},{default:(0,l.k6)((e=>[(0,l.bF)(c,{to:{name:"articleRead",query:{id:e.row.id_,form:!0,type:"NewsList"}}},{default:(0,l.k6)((()=>[(0,l.bF)(_,{text:"",type:"primary"},{default:(0,l.k6)((()=>t[10]||(t[10]=[(0,l.eW)("详情")]))),_:1})])),_:2},1032,["to"]),0===e.row.status_||2===e.row.status_?((0,l.uX)(),(0,l.Wv)(c,{key:0,to:{name:"articleEdit",query:{id:e.row.id_}}},{default:(0,l.k6)((()=>[(0,l.bF)(_,{text:"",type:"primary"},{default:(0,l.k6)((()=>t[11]||(t[11]=[(0,l.eW)("编辑")]))),_:1})])),_:2},1032,["to"])):(0,l.Q3)("",!0),0===e.row.status_||2===e.row.status_?((0,l.uX)(),(0,l.Wv)(g,{key:1,title:`确定发布${e.row.title_}吗?`,onConfirm:t=>d.table_up(e.row,e.$index)},{reference:(0,l.k6)((()=>[(0,l.bF)(_,{text:"",type:"primary"},{default:(0,l.k6)((()=>t[12]||(t[12]=[(0,l.eW)("发布")]))),_:1})])),_:2},1032,["title","onConfirm"])):(0,l.Q3)("",!0),1===e.row.status_?((0,l.uX)(),(0,l.Wv)(g,{key:2,title:`确定下架${e.row.title_}吗?`,onConfirm:t=>d.table_up(e.row,e.$index)},{reference:(0,l.k6)((()=>[(0,l.bF)(_,{text:"",type:"primary"},{default:(0,l.k6)((()=>t[13]||(t[13]=[(0,l.eW)("下架")]))),_:1})])),_:2},1032,["title","onConfirm"])):(0,l.Q3)("",!0),0===e.row.status_||2===e.row.status_?((0,l.uX)(),(0,l.Wv)(g,{key:3,title:`确定删除${e.row.title_}吗?`,onConfirm:t=>d.table_delete(e.row,e.$index)},{reference:(0,l.k6)((()=>[(0,l.bF)(_,{text:"",type:"primary"},{default:(0,l.k6)((()=>t[14]||(t[14]=[(0,l.eW)("删除")]))),_:1})])),_:2},1032,["title","onConfirm"])):(0,l.Q3)("",!0)])),_:1})])),_:1},8,["data","row-class-name"])])),_:1})])),_:1})}a(64660),a(40772);const o=(0,l.$V)((()=>Promise.all([a.e(8774),a.e(6158),a.e(26)]).then(a.bind(a,50026))));var d={name:"tableBase",components:{scEditor:o},data(){return{newsList:[],menu:[],menuChild:[],paths:"",value:"all",selectedLanguage:[{value:"all",label:"全部"},{value:"0",label:"中文"},{value:"1",label:"英文"}],filteredTableData:[],cacheNewsList:[]}},created(){this.article()},mounted(){this.getMenu(),this.getMenuChild()},methods:{language(e){this.newsList="all"===e?this.cacheNewsList:this.cacheNewsList.filter((t=>t.language_===e))},async article(){this.value="all";try{const e=await this.$cmsApi.inquire.get();this.cacheNewsList=e,this.newsList=e}catch(e){console.error("Error fetching user list:",e)}},async cutMenu(e){this.value="all",this.paths=e;const t={menu_class_:e};var a=await this.$cmsApi.inquireType.post(t);this.cacheNewsList=a,this.newsList=a},async cutMenuChild(e){this.value="all";const t={belong_to_:e};var a=await this.$cmsApi.inquireType.post(t);this.cacheNewsList=a,this.newsList=a},async getMenu(){var e=await this.$fileApi.file.menu.get();this.cacheNewsList=e,this.menu=e},async getMenuChild(){var e=await this.$cmsApi.inquireMenu.get();this.menuChild=e},change(e){this.filterData=e},formatDate(e){return e?e.split("T")[0]:e},async table_up(e,t){let a;var l=this.$TOOL.data.get("USER_INFO");console.log(l,"userrr"),a=1==e.status_?2:1;const s={id_:e.id_,status_:a,release_time_:(new Date).toISOString(),release_by_:l.id_,release_name_:l.fullname_};try{this.newsList[t]=await this.$cmsApi.updata.post(s)}catch(i){console.error("Error updating data:",i)}},async table_delete(e,t){const a={id_:e.id_,delete_time_:(new Date).toISOString()};try{this.newsList[t]=await this.$cmsApi.updata.post(a)}catch(l){console.error("Error updating data:",l)}}}},_=a(51456);const c=(0,_.A)(d,[["render",n],["__scopeId","data-v-6f54a0ea"]]);var p=c}}]);