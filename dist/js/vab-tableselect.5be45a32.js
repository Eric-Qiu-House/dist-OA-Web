"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[1513],{7041:function(e,l,a){a.r(l),a.d(l,{default:function(){return n}});var t=a(641);const o=(0,t.Lk)("div",{style:{height:"15px"}},null,-1);function d(e,l,a,d,u,p){const r=(0,t.g2)("el-alert"),n=(0,t.g2)("el-table-column"),s=(0,t.g2)("sc-table-select"),b=(0,t.g2)("el-card"),i=(0,t.g2)("el-option"),m=(0,t.g2)("el-select"),c=(0,t.g2)("el-form-item"),h=(0,t.g2)("el-date-picker"),g=(0,t.g2)("el-button"),f=(0,t.g2)("el-form"),k=(0,t.g2)("el-main");return(0,t.uX)(),(0,t.Wv)(k,null,{default:(0,t.k6)((()=>[(0,t.bF)(r,{title:"select深度改造的表格选择器, 非常适用于大量数据选择的场景",type:"success",style:{"margin-bottom":"20px"}}),(0,t.bF)(b,{shadow:"never",header:"单选"},{default:(0,t.k6)((()=>[(0,t.bF)(s,{modelValue:u.value2,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value2=e),apiObj:u.apiObj,params:u.params,"table-width":600,props:u.props,onChange:p.change},{default:(0,t.k6)((()=>[(0,t.bF)(n,{prop:"id",label:"ID",width:"180"}),(0,t.bF)(n,{prop:"user",label:"姓名"})])),_:1},8,["modelValue","apiObj","params","props","onChange"])])),_:1}),o,(0,t.bF)(b,{shadow:"never",header:"多选"},{default:(0,t.k6)((()=>[(0,t.bF)(s,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=e=>u.value=e),apiObj:u.apiObj,"table-width":700,multiple:"",clearable:"","collapse-tags":"","collapse-tags-tooltip":"",props:u.props,onChange:p.change},{header:(0,t.k6)((({form:e,submit:l})=>[(0,t.bF)(f,{inline:!0,model:e},{default:(0,t.k6)((()=>[(0,t.bF)(c,null,{default:(0,t.k6)((()=>[(0,t.bF)(m,{modelValue:e.sex,"onUpdate:modelValue":l=>e.sex=l,placeholder:"性别",clearable:"",teleported:!1},{default:(0,t.k6)((()=>[(0,t.bF)(i,{label:"男",value:"1"}),(0,t.bF)(i,{label:"女",value:"2"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.bF)(c,null,{default:(0,t.k6)((()=>[(0,t.bF)(h,{modelValue:e.date,"onUpdate:modelValue":l=>e.date=l,"value-format":"YYYY-MM-DD",type:"date",placeholder:"注册时间",teleported:!1},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.bF)(c,null,{default:(0,t.k6)((()=>[(0,t.bF)(g,{type:"primary",onClick:l},{default:(0,t.k6)((()=>[(0,t.eW)("查询")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1032,["model"]),(0,t.bF)(r,{title:"自定义FORM插糟 传递了form对象和提交方法",type:"info"})])),default:(0,t.k6)((()=>[(0,t.bF)(n,{prop:"id",label:"ID",width:"180"}),(0,t.bF)(n,{prop:"user",label:"姓名",width:"100"}),(0,t.bF)(n,{prop:"cip",label:"最后请求IP",width:"150"}),(0,t.bF)(n,{prop:"time",label:"注册时间"})])),_:1},8,["modelValue","apiObj","props","onChange"])])),_:1})])),_:1})}var u={name:"tableselect",data(){return{apiObj:this.$API.demo.page,params:{name:"demoName"},value:[{id:"410000199512025445",user:"魏磊"},{id:"520000198407304275",user:"史平"}],value2:{id:"520000198407304275",user:"史平"},props:{label:"user",value:"id",keyword:"keyword"}}},computed:{},mounted(){},methods:{change(e){this.$message("change事件，返回详情查看控制台"),console.log(e)}}},p=a(6262);const r=(0,p.A)(u,[["render",d]]);var n=r}}]);