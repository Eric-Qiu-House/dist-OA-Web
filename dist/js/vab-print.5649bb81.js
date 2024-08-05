"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[684],{68380:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var i=n(20641);const o=t=>((0,i.Qi)("data-v-03a2c1a0"),t=t(),(0,i.jt)(),t),r=o((()=>(0,i.Lk)("div",{style:{height:"20px"}},null,-1))),l={class:"printMain",ref:"printMain"},c={class:"item"},a=o((()=>(0,i.Lk)("p",{class:"no-print"},"忽略打印",-1))),s=o((()=>(0,i.Lk)("div",{style:{"page-break-after":"always"}},null,-1))),u=o((()=>(0,i.Lk)("div",{class:"item"},"打印内容2",-1)));function d(t,e,n,o,d,p){const f=(0,i.g2)("el-alert"),m=(0,i.g2)("el-button"),h=(0,i.g2)("el-icon-eleme-filled"),y=(0,i.g2)("el-icon"),b=(0,i.g2)("el-tab-pane"),k=(0,i.g2)("el-tabs"),v=(0,i.g2)("el-card"),g=(0,i.g2)("el-main");return(0,i.uX)(),(0,i.Wv)(g,null,{default:(0,i.k6)((()=>[(0,i.bF)(v,{shadow:"never"},{default:(0,i.k6)((()=>[(0,i.bF)(k,{"tab-position":"top"},{default:(0,i.k6)((()=>[(0,i.bF)(b,{label:"普通打印"},{default:(0,i.k6)((()=>[(0,i.bF)(f,{title:"打印当前页面已存在的元素,如包含.no-print样式就忽略,分页打印就需要{page-break-after: always}控制",type:"success",style:{"margin-bottom":"20px"}}),(0,i.bF)(m,{type:"primary",onClick:p.print},{default:(0,i.k6)((()=>[(0,i.eW)("普通打印")])),_:1},8,["onClick"]),r,(0,i.Lk)("div",l,[(0,i.Lk)("div",c,[(0,i.eW)("打印内容1 "),(0,i.bF)(y,null,{default:(0,i.k6)((()=>[(0,i.bF)(h)])),_:1}),(0,i.eW)(),a]),s,u],512)])),_:1}),(0,i.bF)(b,{label:"动态打印"},{default:(0,i.k6)((()=>[(0,i.bF)(f,{title:"打印创建的DOM结构,适用于远程获取模板后打印",type:"success",style:{"margin-bottom":"20px"}}),(0,i.bF)(m,{type:"primary",onClick:p.print2},{default:(0,i.k6)((()=>[(0,i.eW)("动态打印")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}const p=function(t,e){if(!(this instanceof p))return new p(t,e);if(this.options=this.extend({noPrint:".no-print"},e),"string"===typeof t)try{this.dom=document.querySelector(t)}catch{var n=document.createElement("div");n.innerHTML=t,this.dom=n}else this.isDOM(t),this.dom=this.isDOM(t)?t:t.$el;this.init()};p.prototype={init:function(){var t=this.getStyle()+this.getHtml();this.writeIframe(t)},extend:function(t,e){for(var n in e)t[n]=e[n];return t},getStyle:function(){for(var t="",e=document.querySelectorAll("style,link"),n=0;n<e.length;n++)t+=e[n].outerHTML;return t+="<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>",t+="<style>html,body{background-color:#fff;}</style>",t},getHtml:function(){for(var t=document.querySelectorAll("input"),e=document.querySelectorAll("textarea"),n=document.querySelectorAll("select"),i=0;i<t.length;i++)"checkbox"==t[i].type||"radio"==t[i].type?1==t[i].checked?t[i].setAttribute("checked","checked"):t[i].removeAttribute("checked"):(t[i].type,t[i].setAttribute("value",t[i].value));for(var o=0;o<e.length;o++)"textarea"==e[o].type&&(e[o].innerHTML=e[o].value);for(var r=0;r<n.length;r++)if("select-one"==n[r].type){var l=n[r].children;for(var c in l)"OPTION"==l[c].tagName&&(1==l[c].selected?l[c].setAttribute("selected","selected"):l[c].removeAttribute("selected"))}return this.dom.outerHTML},writeIframe:function(t){var e,n,i=document.createElement("iframe"),o=document.body.appendChild(i);i.id="myIframe",i.setAttribute("style","position:absolute;width:0;height:0;top:-10px;left:-10px;"),e=o.contentWindow||o.contentDocument,n=o.contentDocument||o.contentWindow.document,n.open(),n.write(t),n.close();var r=this;i.onload=function(){r.toPrint(e),setTimeout((function(){document.body.removeChild(i)}),100)}},toPrint:function(t){try{setTimeout((function(){t.focus();try{t.document.execCommand("print",!1,null)||t.print()}catch(e){t.print()}t.close()}),10)}catch(e){console.log("err",e)}},isDOM:"object"===typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"===typeof t&&1===t.nodeType&&"string"===typeof t.nodeName}};var f=p,m={name:"print",data(){return{}},methods:{print(){f(this.$refs.printMain)},print2(){var t="<h2>TITLE</h2><p>后创建的DOM结构</p>";f(t)}}},h=n(66262);const y=(0,h.A)(m,[["render",d],["__scopeId","data-v-03a2c1a0"]]);var b=y}}]);