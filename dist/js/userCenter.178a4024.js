"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[869],{16269:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(51464),u=n(51681);const a={class:"user-info-top"},s={key:0,style:{"writing-mode":"horizontal-tb"}};function o(e,t,n,o,i,r){const c=(0,l.g2)("el-avatar"),d=(0,l.g2)("el-header"),p=(0,l.g2)("el-icon"),m=(0,l.g2)("el-menu-item"),k=(0,l.g2)("el-menu-item-group"),g=(0,l.g2)("el-menu"),f=(0,l.g2)("el-main"),h=(0,l.g2)("el-container"),b=(0,l.g2)("el-aside"),v=(0,l.g2)("el-skeleton");return(0,l.uX)(),(0,l.Wv)(h,{class:"page-user"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{style:{width:"240px"}},{default:(0,l.k6)((()=>[(0,l.bF)(h,null,{default:(0,l.k6)((()=>[(0,l.bF)(d,{style:{height:"auto",display:"block"}},{default:(0,l.k6)((()=>[(0,l.Lk)("div",a,[(0,l.bF)(c,{size:70,src:i.user.userNameF?i.user.userNameF:"",style:(0,u.Tr)({backgroundColor:i.user.userNameF?"":"#409EFF",color:"#fff"})},{default:(0,l.k6)((()=>[i.user.userNameF?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("span",s,(0,u.v_)(i.user.userName.slice(-2)),1))])),_:1},8,["src","style"]),(0,l.Lk)("h2",null,(0,u.v_)(i.user.userName),1)])])),_:1}),(0,l.bF)(f,{class:"nopadding"},{default:(0,l.k6)((()=>[(0,l.bF)(g,{class:"menu","default-active":i.page},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.menu,(e=>((0,l.uX)(),(0,l.Wv)(k,{key:e.groupName,title:e.groupName},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.list,(e=>((0,l.uX)(),(0,l.Wv)(m,{key:e.component,index:e.component,onClick:r.openPage},{title:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,u.v_)(e.title),1)])),default:(0,l.k6)((()=>[e.icon?((0,l.uX)(),(0,l.Wv)(p,{key:0},{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.Wv)((0,l.$y)(e.icon)))])),_:2},1024)):(0,l.Q3)("",!0)])),_:2},1032,["index","onClick"])))),128))])),_:2},1032,["title"])))),128))])),_:1},8,["default-active"])])),_:1})])),_:1})])),_:1}),(0,l.bF)(f,null,{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.Wv)(l.tY,null,{default:(0,l.k6)((()=>[((0,l.uX)(),(0,l.Wv)((0,l.$y)(i.page)))])),fallback:(0,l.k6)((()=>[(0,l.bF)(v,{rows:3})])),_:1}))])),_:1})])),_:1})}var i={name:"userCenter",components:{account:(0,l.$V)((()=>n.e(7841).then(n.bind(n,6698)))),seting:(0,l.$V)((()=>n.e(7636).then(n.bind(n,92981)))),pushSettings:(0,l.$V)((()=>n.e(9383).then(n.bind(n,57401)))),password:(0,l.$V)((()=>Promise.all([n.e(8749),n.e(4655)]).then(n.bind(n,8131)))),space:(0,l.$V)((()=>Promise.all([n.e(8749),n.e(4078)]).then(n.bind(n,46794)))),logs:(0,l.$V)((()=>n.e(2701).then(n.bind(n,35452)))),upToEnterprise:(0,l.$V)((()=>n.e(237).then(n.bind(n,7058))))},data(){return{menu:[{groupName:"基本设置",list:[{icon:"el-icon-postcard",title:"账号信息",component:"account"},{icon:"el-icon-lock",title:"密码",component:"password"},{icon:"el-icon-operation",title:"个人设置",component:"seting"},{icon:"el-icon-bell",title:"通知设置",component:"pushSettings"}]}],user:{userName:"",userNameF:"",role:""},page:"account"}},created(){var e=this.$TOOL.data.get("USER_INFO");this.user.userName=e.fullname_},beforeRouteEnter(e,t,n){n((e=>{t.is&&(delete t.is,e.$alert("路由跳转过来后含有特殊标识，做特殊处理","提示",{type:"success",center:!0}).then((()=>{})).catch((()=>{})))}))},methods:{openPage(e){this.page=e.index}}},r=n(51456);const c=(0,r.A)(i,[["render",o]]);var d=c}}]);