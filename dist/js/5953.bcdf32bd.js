"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[5953],{5953:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var n=i(51464),a=i(51681),r=i(45883);function u(e,t,i,u,o,s){return(0,n.uX)(),(0,n.CE)("div",{class:"sc-code-editor",style:(0,a.Tr)({height:s._height})},[(0,n.bo)((0,n.Lk)("textarea",{ref:"textarea","onUpdate:modelValue":t[0]||(t[0]=e=>o.contentValue=e)},null,512),[[r.Jo,o.contentValue]])],4)}var o=i(25456),s=i(39218),h=i.n(s),l=(i(82013),i(80867),i(319),{props:{modelValue:{type:String,default:""},mode:{type:String,default:"javascript"},height:{type:[String,Number],default:300},options:{type:Object,default:()=>{}},theme:{type:String,default:"idea"},readOnly:{type:Boolean,default:!1}},data(){return{contentValue:this.modelValue,coder:null,opt:{theme:this.theme,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!1,tabSize:4,indentUnit:4,indentWithTabs:!0,mode:this.mode,readOnly:this.readOnly,...this.options}}},computed:{_height(){return Number(this.height)?Number(this.height)+"px":this.height}},watch:{modelValue(e){this.contentValue=e,e!==this.coder.getValue()&&this.coder.setValue(e)}},mounted(){this.init()},methods:{init(){this.coder=(0,o.IG)(h().fromTextArea(this.$refs.textarea,this.opt)),this.coder.on("change",(e=>{this.contentValue=e.getValue(),this.$emit("update:modelValue",this.contentValue)}))},formatStrInJson(e){return JSON.stringify(JSON.parse(e),null,4)}}}),d=i(51456);const c=(0,d.A)(l,[["render",u],["__scopeId","data-v-a0186eba"]]);var p=c}}]);