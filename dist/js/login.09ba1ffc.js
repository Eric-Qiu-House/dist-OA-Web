"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[6966],{76141:function(e,t,l){l.r(t),l.d(t,{default:function(){return $}});var o=l(20641),a=l(90033);const i=e=>((0,o.Qi)("data-v-2395bc3a"),e=e(),(0,o.jt)(),e),n={class:"login_bg"},c={class:"login_main"},s={class:"login_config"},g=i((()=>(0,o.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},[(0,o.Lk)("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),(0,o.Lk)("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))),d={class:"login-form"},r={class:"login-header"},u={class:"logo"},h=["alt"],m={class:"login-oauth"},L={class:"qrCodeLogin"},k={class:"msg"},f=i((()=>(0,o.Lk)("br",null,null,-1))),v={key:0,class:"qrCodeLogin-result"};function b(e,t,l,i,b,w){const O=(0,o.g2)("el-button"),p=(0,o.g2)("el-dropdown-item"),_=(0,o.g2)("el-dropdown-menu"),C=(0,o.g2)("el-dropdown"),$=(0,o.g2)("password-form"),F=(0,o.g2)("el-tab-pane"),A=(0,o.g2)("phone-form"),T=(0,o.g2)("el-tabs"),W=(0,o.g2)("el-divider"),I=(0,o.g2)("sc-qr-code"),P=(0,o.g2)("el-result"),N=(0,o.g2)("el-dialog");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",n,[(0,o.Lk)("div",c,[(0,o.Lk)("div",s,[(0,o.bF)(O,{icon:b.config.dark?"el-icon-sunny":"el-icon-moon",circle:"",type:"info",onClick:w.configDark},null,8,["icon","onClick"]),(0,o.bF)(C,{trigger:"click",placement:"bottom-end",onCommand:w.configLang},{dropdown:(0,o.k6)((()=>[(0,o.bF)(_,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(b.lang,(e=>((0,o.uX)(),(0,o.Wv)(p,{key:e.value,command:e,class:(0,a.C4)({selected:b.config.lang==e.value})},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(e.name),1)])),_:2},1032,["command","class"])))),128))])),_:1})])),default:(0,o.k6)((()=>[(0,o.bF)(O,{circle:""},{default:(0,o.k6)((()=>[g])),_:1})])),_:1},8,["onCommand"])]),(0,o.Lk)("div",d,[(0,o.Lk)("div",r,[(0,o.Lk)("div",u,[(0,o.Lk)("img",{alt:e.$CONFIG.APP_NAME,src:"img/logo.png"},null,8,h),(0,o.Lk)("label",null,(0,a.v_)(e.$CONFIG.APP_NAME),1)])]),(0,o.bF)(T,null,{default:(0,o.k6)((()=>[(0,o.bF)(F,{label:e.$t("login.accountLogin"),lazy:""},{default:(0,o.k6)((()=>[(0,o.bF)($)])),_:1},8,["label"]),(0,o.bF)(F,{label:e.$t("login.mobileLogin"),lazy:""},{default:(0,o.k6)((()=>[(0,o.bF)(A)])),_:1},8,["label"])])),_:1}),e.$CONFIG.MY_SHOW_LOGIN_OAUTH?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[(0,o.bF)(W,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(e.$t("login.signInOther")),1)])),_:1}),(0,o.Lk)("div",m,[(0,o.bF)(O,{type:"success",icon:"sc-icon-wechat",circle:"",onClick:w.wechatLogin},null,8,["onClick"])])],64)):(0,o.Q3)("",!0)])])]),(0,o.bF)(N,{modelValue:b.showWechatLogin,"onUpdate:modelValue":t[0]||(t[0]=e=>b.showWechatLogin=e),title:e.$t("login.wechatLoginTitle"),width:400,"destroy-on-close":""},{default:(0,o.k6)((()=>[(0,o.Lk)("div",L,[(0,o.bF)(I,{class:"qrCode",text:b.WechatLoginCode,size:200},null,8,["text"]),(0,o.Lk)("p",k,[(0,o.eW)((0,a.v_)(e.$tc("login.wechatLoginMsg",1)),1),f,(0,o.eW)((0,a.v_)(e.$tc("login.wechatLoginMsg",2)),1)]),b.isWechatLoginResult?((0,o.uX)(),(0,o.CE)("div",v,[(0,o.bF)(P,{icon:"success",title:e.$tc("login.wechatLoginResult",1),"sub-title":e.$tc("login.wechatLoginResult",2)},null,8,["title","sub-title"])])):(0,o.Q3)("",!0)])])),_:1},8,["modelValue","title"])],64)}var w=l(2181),O=l(36028),p={components:{passwordForm:w["default"],phoneForm:O["default"]},data(){return{config:{lang:this.$TOOL.data.get("APP_LANG")||this.$CONFIG.LANG,dark:this.$TOOL.data.get("APP_DARK")||!1},lang:[{name:"简体中文",value:"zh-cn"},{name:"English",value:"en"}],WechatLoginCode:"",showWechatLogin:!1,isWechatLoginResult:!1}},watch:{"config.dark"(e){e?(document.documentElement.classList.add("dark"),this.$TOOL.data.set("APP_DARK",e)):(document.documentElement.classList.remove("dark"),this.$TOOL.data.remove("APP_DARK"))},"config.lang"(e){this.$i18n.locale=e,this.$TOOL.data.set("APP_LANG",e)}},created:function(){this.$TOOL.cookie.remove("TOKEN"),this.$TOOL.data.remove("USER_INFO"),this.$TOOL.data.remove("MENU"),this.$TOOL.data.remove("PERMISSIONS"),this.$TOOL.data.remove("DASHBOARDGRID"),this.$TOOL.data.remove("grid"),this.$store.commit("clearViewTags"),this.$store.commit("clearKeepLive"),this.$store.commit("clearIframeList"),console.log("%c SCUI %c Gitee: https://github.com/shenxgan/scui","background:#666;color:#fff;border-radius:3px;","")},methods:{configDark(){this.config.dark=!this.config.dark},configLang(e){this.config.lang=e.value},wechatLogin(){this.showWechatLogin=!0,this.WechatLoginCode="SCUI-823677237287236-"+(new Date).getTime(),this.isWechatLoginResult=!1,setTimeout((()=>{this.isWechatLoginResult=!0}),3e3)}}},_=l(66262);const C=(0,_.A)(p,[["render",b],["__scopeId","data-v-2395bc3a"]]);var $=C}}]);