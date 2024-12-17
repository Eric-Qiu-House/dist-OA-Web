(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[4431],{34779:function(e,l,t){var o;
/*!
 * template.js v0.7.1 (https://github.com/yanhaijing/template.js)
 * API https://github.com/yanhaijing/template.js/blob/master/doc/api.md
 * Copyright 2015 yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/template.js/blob/master/MIT-LICENSE.txt)
 */(function(a,n){var d=n(a);o=function(){return d}.call(l,t,l,e),void 0===o||(e.exports=o)})(this,(function(e){"use strict";var l={sTag:"<%",eTag:"%>",compress:!1,escape:!0,error:function(e){}},t={},o={"":function(e){return p(e)},h:function(e){return _(e)},u:function(e){return encodeURI(e)}},a={}.toString,n=[].slice;function d(e){if(null===e)return"null";var l=typeof e;if("object"!==l)return l;var t=a.call(e).slice(8,-1).toLowerCase();return"object"!==t||e.constructor==Object?t:"unknown"}function r(e){return"object"===d(e)}function i(e){return"function"===d(e)}function u(e){return"string"===d(e)}function c(){for(var e=arguments[0]||{},l=n.call(arguments,1),t=l.length,o=0;o<t;o++){var a=l[o];for(var d in a)e[d]=a[d]}return e}function s(){var e=n.call(arguments);return c.apply(null,[{}].concat(e))}function p(e){return e}function _(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function m(e){return e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")}function f(e,l){"undefined"!==typeof console&&console[e]&&console[e](l)}function b(e){var t="template.js error\n\n";for(var o in e)t+="<"+o+">\n"+e[o]+"\n\n";function a(){return"template.js error"}return t+="<message>\n"+e.message+"\n\n",f("error",t),l.error(e),a.toString=function(){return'__code__ = "template.js error"'},a}function g(e,l){var t="",o=l.sTag,a=l.eTag,n=l.escape;function d(e){e=e.replace(/('|")/g,"\\$1");for(var l=e.split("\n"),t="",o=0;o<l.length;o++)t+=';__code__ += ("'+l[o]+(o===l.length-1?'")\n':'\\n")\n');return t}function r(e){var l,t,o,a=/^(?:=|(:.*?)=)(.*)$/;return(t=a.exec(e))?(l=t[2],o=Boolean(t[1])?t[1].slice(1):n?"h":"",';__code__ += __modifierMap__["'+o+'"](typeof ('+l+') !== "undefined" ? ('+l+') : "")\n'):";"+e+"\n"}for(var i=e.split(o),u=0,c=i.length;u<c;u++){var s=i[u].split(a);1===s.length?t+=d(s[0]):(t+=r(s[0],!0),s[1]&&(t+=d(s[1])))}return t}function h(e,l){var t=g(e,l),o='\n    var html = (function (__data__, __modifierMap__) {\n        var __str__ = "", __code__ = "";\n        for(var key in __data__) {\n            __str__+=("var " + key + "=__data__[\'" + key + "\'];");\n        }\n        eval(__str__);\n\n',a="\n        ;return __code__;\n    }(__data__, __modifierMap__));\n    return html;\n",n=o+t+a;n=n.replace(/[\r]/g," ");try{var d=new Function("__data__","__modifierMap__",n);return d.toString=function(){return t},d}catch(r){throw r.temp="function anonymous(__data__, __modifierMap__) {"+n+"}",r}}function w(e,a){a=s(l,a);try{var n=h(e,a)}catch(r){return r.name="CompileError",r.tpl=e,r.render=r.temp,delete r.temp,b(r)}function d(l){l=s(t,l);try{var d=n(l,o);return d=a.compress?m(d):d,d}catch(r){return r.name="RenderError",r.tpl=e,r.render=n.toString(),b(r)()}}return d.toString=function(){return n.toString()},d}function k(e,l){if("string"!==typeof e)return"";var t=w(e);return r(l)?t(l):t}return k.config=function(e){return r(e)&&(l=c(l,e)),s(l)},k.registerFunction=function(e,l){return u(e)?i(l)?t[e]=l:t[e]:s(t)},k.unregisterFunction=function(e){return!!u(e)&&(delete t[e],!0)},k.registerModifier=function(e,l){return u(e)?i(l)?o[e]=l:o[e]:s(o)},k.unregisterModifier=function(e){return!!u(e)&&(delete o[e],!0)},k.__encodeHTML=_,k.__compress=m,k.__handelError=b,k.__compile=w,k.version="0.7.1",k}))},62318:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return _}});var o=t(51464),a=t(51681);const n={style:{"margin-top":"50px",display:"none"}},d={contenteditable:"",class:"code"};function r(e,l,t,r,i,u){const c=(0,o.g2)("el-input"),s=(0,o.g2)("el-table-column"),p=(0,o.g2)("el-checkbox"),_=(0,o.g2)("sc-form-table"),m=(0,o.g2)("el-tab-pane"),f=(0,o.g2)("el-form-item"),b=(0,o.g2)("el-form"),g=(0,o.g2)("el-col"),h=(0,o.g2)("el-row"),w=(0,o.g2)("el-alert"),k=(0,o.g2)("el-tabs"),v=(0,o.g2)("el-card"),F=(0,o.g2)("el-main"),V=(0,o.g2)("el-button"),y=(0,o.g2)("el-dropdown-item"),L=(0,o.g2)("el-dropdown-menu"),C=(0,o.g2)("el-dropdown"),U=(0,o.g2)("el-footer"),S=(0,o.g2)("el-container"),T=(0,o.g2)("el-dialog");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(S,null,{default:(0,o.k6)((()=>[(0,o.bF)(F,null,{default:(0,o.k6)((()=>[(0,o.bF)(v,{shadow:"never"},{default:(0,o.k6)((()=>[(0,o.bF)(k,{"tab-position":"top"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{label:"列配置"},{default:(0,o.k6)((()=>[(0,o.bF)(_,{modelValue:i.column,"onUpdate:modelValue":l[0]||(l[0]=e=>i.column=e),addTemplate:i.addTemplate,placeholder:"请添加列数据"},{default:(0,o.k6)((()=>[(0,o.bF)(s,{prop:"label",label:"显示名称",width:"180"},{default:(0,o.k6)((e=>[(0,o.bF)(c,{modelValue:e.row.label,"onUpdate:modelValue":l=>e.row.label=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.bF)(s,{prop:"prop",label:"字段名",width:"180"},{default:(0,o.k6)((e=>[(0,o.bF)(c,{modelValue:e.row.prop,"onUpdate:modelValue":l=>e.row.prop=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.bF)(s,{prop:"width",label:"宽度",width:"180"},{default:(0,o.k6)((e=>[(0,o.bF)(c,{modelValue:e.row.width,"onUpdate:modelValue":l=>e.row.width=l,placeholder:"请输入内容"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.bF)(s,{prop:"isEdit",label:"加入编辑",width:"80",align:"center"},{default:(0,o.k6)((e=>[(0,o.bF)(p,{modelValue:e.row.isEdit,"onUpdate:modelValue":l=>e.row.isEdit=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.bF)(s,{prop:"isSearch",label:"加入搜索",width:"80",align:"center"},{default:(0,o.k6)((e=>[(0,o.bF)(p,{modelValue:e.row.isSearch,"onUpdate:modelValue":l=>e.row.isSearch=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["modelValue","addTemplate"])])),_:1}),(0,o.bF)(m,{label:"基础配置"},{default:(0,o.k6)((()=>[(0,o.bF)(h,null,{default:(0,o.k6)((()=>[(0,o.bF)(g,{xl:12,lg:8},{default:(0,o.k6)((()=>[(0,o.bF)(b,{model:i.base,"label-width":"80px"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{label:"name"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{modelValue:i.base.name,"onUpdate:modelValue":l[1]||(l[1]=e=>i.base.name=e)},null,8,["modelValue"]),l[10]||(l[10]=(0,o.Lk)("div",{class:"el-form-item-msg"},"系统唯一且与路由别名一致，否则导致缓存失效。",-1))])),_:1}),(0,o.bF)(f,{label:"rowKey"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{modelValue:i.base.rowKey,"onUpdate:modelValue":l[2]||(l[2]=e=>i.base.rowKey=e)},null,8,["modelValue"]),l[11]||(l[11]=(0,o.Lk)("div",{class:"el-form-item-msg"},"表格唯一标识，编辑保存和删除将传递rowKey",-1))])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1}),(0,o.bF)(m,{label:"API路径配置"},{default:(0,o.k6)((()=>[(0,o.bF)(w,{title:"$API 映射文件: @/api/index.js 统一接口管理器, 所以需提前配置好API对象.",type:"warning",style:{margin:"0 0 20px 0"}}),(0,o.bF)(h,null,{default:(0,o.k6)((()=>[(0,o.bF)(g,{xl:12,lg:8},{default:(0,o.k6)((()=>[(0,o.bF)(b,{model:i.api,"label-width":"80px"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{label:"获取列表"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{modelValue:i.api.list,"onUpdate:modelValue":l[3]||(l[3]=e=>i.api.list=e)},{prepend:(0,o.k6)((()=>l[12]||(l[12]=[(0,o.eW)("$API.")]))),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(f,{label:"新增"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{modelValue:i.api.add,"onUpdate:modelValue":l[4]||(l[4]=e=>i.api.add=e)},{prepend:(0,o.k6)((()=>l[13]||(l[13]=[(0,o.eW)("$API.")]))),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(f,{label:"保存"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{modelValue:i.api.save,"onUpdate:modelValue":l[5]||(l[5]=e=>i.api.save=e)},{prepend:(0,o.k6)((()=>l[14]||(l[14]=[(0,o.eW)("$API.")]))),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(f,{label:"查询详细"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{modelValue:i.api.show,"onUpdate:modelValue":l[6]||(l[6]=e=>i.api.show=e)},{prepend:(0,o.k6)((()=>l[15]||(l[15]=[(0,o.eW)("$API.")]))),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(f,{label:"删除"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{modelValue:i.api.del,"onUpdate:modelValue":l[7]||(l[7]=e=>i.api.del=e)},{prepend:(0,o.k6)((()=>l[16]||(l[16]=[(0,o.eW)("$API.")]))),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Lk)("pre",n,(0,a.v_)(i.code),1)])),_:1}),(0,o.bF)(U,null,{default:(0,o.k6)((()=>[(0,o.bF)(C,{style:{"margin-right":"15px"}},{dropdown:(0,o.k6)((()=>[(0,o.bF)(L,null,{default:(0,o.k6)((()=>[(0,o.bF)(y,{onClick:u.downloadListCode},{default:(0,o.k6)((()=>l[18]||(l[18]=[(0,o.eW)("下载 index.vue")]))),_:1},8,["onClick"]),(0,o.bF)(y,{onClick:u.downloadSaveCode},{default:(0,o.k6)((()=>l[19]||(l[19]=[(0,o.eW)("下载 save.vue")]))),_:1},8,["onClick"])])),_:1})])),default:(0,o.k6)((()=>[(0,o.bF)(V,{type:"primary",icon:"el-icon-download",loading:i.downloadcodeLoading},{default:(0,o.k6)((()=>l[17]||(l[17]=[(0,o.eW)("下载VUE文件")]))),_:1},8,["loading"])])),_:1}),(0,o.bF)(C,null,{dropdown:(0,o.k6)((()=>[(0,o.bF)(L,null,{default:(0,o.k6)((()=>[(0,o.bF)(y,{onClick:u.showListCode},{default:(0,o.k6)((()=>l[21]||(l[21]=[(0,o.eW)("预览 index.vue")]))),_:1},8,["onClick"]),(0,o.bF)(y,{onClick:u.showSaveCode},{default:(0,o.k6)((()=>l[22]||(l[22]=[(0,o.eW)("预览 save.vue")]))),_:1},8,["onClick"])])),_:1})])),default:(0,o.k6)((()=>[(0,o.bF)(V,{type:"primary",plain:"",icon:"el-icon-top-right",loading:i.showcodeLoading},{default:(0,o.k6)((()=>l[20]||(l[20]=[(0,o.eW)("预览代码")]))),_:1},8,["loading"])])),_:1})])),_:1})])),_:1}),(0,o.bF)(T,{title:"代码预览",modelValue:i.codeVisible,"onUpdate:modelValue":l[9]||(l[9]=e=>i.codeVisible=e),width:"60%","append-to-body":"","destroy-on-close":""},{footer:(0,o.k6)((()=>[(0,o.bF)(V,{type:"primary",onClick:l[8]||(l[8]=e=>i.codeVisible=!1)},{default:(0,o.k6)((()=>l[23]||(l[23]=[(0,o.eW)("确 定")]))),_:1})])),default:(0,o.k6)((()=>[(0,o.bF)(w,{title:"需将VUE文件放置views文件夹,路由匹配组件的路径下,如文件名为index.vue可不需要写文件名",type:"success","show-icon":"",style:{"margin-bottom":"20px"}}),(0,o.Lk)("pre",d,(0,a.v_)(i.code),1)])),_:1},8,["modelValue"])],64)}t(64660),t(40772);var i=t(34779),u=t.n(i),c={name:"autocode-list",data(){return{codeVisible:!1,showcodeLoading:!1,downloadcodeLoading:!1,code:"",base:{name:"",rowKey:"id"},api:{list:"",add:"",save:"",show:"",del:""},column:[],addTemplate:{label:"",prop:"",width:"100",isSearch:!1,isEdit:!1}}},mounted(){},methods:{async showListCode(){this.showcodeLoading=!0,await this.getListTpl(),this.showcodeLoading=!1,this.codeVisible=!0},async getListTpl(){var e={createDate:(new Date).toLocaleString(),base:this.base,column:this.column,api:this.api},l=await this.$HTTP.get("code/list/index.vue");this.code=u()(l,e)},async showSaveCode(){this.showcodeLoading=!0,await this.getSaveTpl(),this.showcodeLoading=!1,this.codeVisible=!0},async getSaveTpl(){var e={createDate:(new Date).toLocaleString(),base:this.base,column:this.column.filter((e=>!0===e.isEdit)),api:this.api},l=await this.$HTTP.get("code/list/save.vue");this.code=u()(l,e)},async downloadListCode(){this.downloadcodeLoading=!0,await this.getListTpl(),this.downloadcodeLoading=!1,this.createFile(this.code,"index.vue")},async downloadSaveCode(){this.downloadcodeLoading=!0,await this.getSaveTpl(),this.downloadcodeLoading=!1,this.createFile(this.code,"save.vue")},createFile(e,l){const t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download",l),t.style.display="none",t.click()}}},s=t(51456);const p=(0,s.A)(c,[["render",r],["__scopeId","data-v-11ad0de6"]]);var _=p}}]);