"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[1173],{6642:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var r=l(51464),a=l(51681);const s={class:"left-panel"};function i(e,t,l,i,n,o){const p=(0,r.g2)("el-button"),u=(0,r.g2)("el-header"),b=(0,r.g2)("el-table-column"),d=(0,r.g2)("el-tag"),c=(0,r.g2)("el-progress"),f=(0,r.g2)("scTable"),g=(0,r.g2)("el-main"),k=(0,r.g2)("el-container");return(0,r.uX)(),(0,r.Wv)(k,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.Lk)("div",s,[(0,r.bF)(p,{type:"primary",icon:"el-icon-plus"}),(0,r.bF)(p,{type:"danger",plain:"",icon:"el-icon-delete"})])])),_:1}),(0,r.bF)(g,{class:"nopadding"},{default:(0,r.k6)((()=>[(0,r.bF)(f,{ref:"table",apiObj:n.list.apiObj,"row-key":"id",stripe:""},{default:(0,r.k6)((()=>[(0,r.bF)(b,{type:"selection",width:"50"}),(0,r.bF)(b,{label:"姓名",prop:"name",width:"150"}),(0,r.bF)(b,{label:"性别",prop:"sex",width:"150",filters:n.sexFilters,"filter-method":o.filterHandler},{default:(0,r.k6)((e=>["男"==e.row.sex?((0,r.uX)(),(0,r.Wv)(d,{key:0},{default:(0,r.k6)((()=>[(0,r.eW)((0,a.v_)(e.row.sex),1)])),_:2},1024)):(0,r.Q3)("",!0),"女"==e.row.sex?((0,r.uX)(),(0,r.Wv)(d,{key:1,type:"success"},{default:(0,r.k6)((()=>[(0,r.eW)((0,a.v_)(e.row.sex),1)])),_:2},1024)):(0,r.Q3)("",!0)])),_:1},8,["filters","filter-method"]),(0,r.bF)(b,{label:"邮箱",prop:"email",width:"250"}),(0,r.bF)(b,{label:"评分",prop:"num",width:"150",sortable:""}),(0,r.bF)(b,{label:"进度",prop:"progress",width:"250",sortable:""},{default:(0,r.k6)((e=>[(0,r.bF)(c,{percentage:e.row.progress},null,8,["percentage"])])),_:1}),(0,r.bF)(b,{label:"注册时间",prop:"datetime",width:"150",sortable:""})])),_:1},8,["apiObj"])])),_:1})])),_:1})}var n={name:"tableBase",data(){return{sexFilters:[{text:"男",value:"男"},{text:"女",value:"女"}],list:{apiObj:this.$API.demo.list}}},methods:{filterHandler(e,t,l){const r=l["property"];return t[r]===e}}},o=l(51456);const p=(0,o.A)(n,[["render",i]]);var u=p}}]);