"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[6667],{16888:function(e,o,t){t.r(o),t.d(o,{default:function(){return r}});var l=t(20641);const a={key:2},i={style:{display:"flex","justify-content":"center",width:"100%"}};function d(e,o,t,d,n,c){const s=(0,l.g2)("el-step"),u=(0,l.g2)("el-steps"),r=(0,l.g2)("el-option"),m=(0,l.g2)("el-select"),p=(0,l.g2)("el-form-item"),f=(0,l.g2)("el-input"),b=(0,l.g2)("el-form"),y=(0,l.g2)("sc-workflow"),k=(0,l.g2)("el-button"),v=(0,l.g2)("el-result"),g=(0,l.g2)("el-col"),F=(0,l.g2)("el-row"),h=(0,l.g2)("el-card"),_=(0,l.g2)("el-main");return(0,l.uX)(),(0,l.Wv)(_,null,{default:(0,l.k6)((()=>[(0,l.bF)(h,{shadow:"never",header:"分步表单"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{active:n.active,"align-center":"",style:{"margin-bottom":"20px"}},{default:(0,l.k6)((()=>[(0,l.bF)(s,{title:"基础设计"}),(0,l.bF)(s,{title:"表单设置"}),(0,l.bF)(s,{title:"流程设计"})])),_:1},8,["active"]),(0,l.bF)(F,null,{default:(0,l.k6)((()=>[(0,l.bF)(g,{style:{display:"flex","justify-content":"center"}},{default:(0,l.k6)((()=>[0==n.active?((0,l.uX)(),(0,l.Wv)(b,{key:0,ref:"stepForm_0",model:n.form,rules:n.rules,"label-position":"top"},{default:(0,l.k6)((()=>[(0,l.bF)(p,{label:"表单名称",prop:"paymentAccount"},{default:(0,l.k6)((()=>[(0,l.bF)(m,{modelValue:n.form.paymentAccount,"onUpdate:modelValue":o[0]||(o[0]=e=>n.form.paymentAccount=e),clearable:""},{default:(0,l.k6)((()=>[(0,l.bF)(r,{label:"sakuya@scui.com",value:"sakuya@scui.com"}),(0,l.bF)(r,{label:"lolicode@scui.com",value:"lolicode@scui.com"})])),_:1},8,["modelValue"])])),_:1}),(0,l.bF)(p,{label:"所在分组",prop:"collectionAccount"},{default:(0,l.k6)((()=>[(0,l.bF)(f,{modelValue:n.form.collectionAccount,"onUpdate:modelValue":o[1]||(o[1]=e=>n.form.collectionAccount=e),clearable:""},null,8,["modelValue"])])),_:1}),(0,l.bF)(p,{label:"表单说明",prop:"collectionName"},{default:(0,l.k6)((()=>[(0,l.bF)(f,{modelValue:n.form.collectionName,"onUpdate:modelValue":o[2]||(o[2]=e=>n.form.collectionName=e),clearable:""},null,8,["modelValue"])])),_:1}),(0,l.bF)(p,{label:"谁可以发起",prop:"amount"},{default:(0,l.k6)((()=>[(0,l.bF)(f,{modelValue:n.form.amount,"onUpdate:modelValue":o[3]||(o[3]=e=>n.form.amount=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])):(0,l.Q3)("",!0),1==n.active?((0,l.uX)(),(0,l.Wv)(b,{key:1,ref:"stepForm_1",model:n.form,rules:n.rules,"label-position":"top"},{default:(0,l.k6)((()=>[(0,l.bF)(p,{label:"表单设计",prop:"payPassword"},{default:(0,l.k6)((()=>[(0,l.bF)(f,{modelValue:n.form.payPassword,"onUpdate:modelValue":o[4]||(o[4]=e=>n.form.payPassword=e),"show-password":"",placeholder:"请输入"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])):(0,l.Q3)("",!0),2==n.active?((0,l.uX)(),(0,l.CE)("div",a,[(0,l.bF)(y,{modelValue:n.data.nodeConfig,"onUpdate:modelValue":o[5]||(o[5]=e=>n.data.nodeConfig=e)},null,8,["modelValue"]),(0,l.bF)(v,{icon:"success",title:"操作成功","sub-title":""},{extra:(0,l.k6)((()=>[(0,l.bF)(k,{type:"primary",onClick:c.again},{default:(0,l.k6)((()=>[(0,l.eW)("确认提交")])),_:1},8,["onClick"]),(0,l.bF)(k,null,{default:(0,l.k6)((()=>[(0,l.eW)("查看")])),_:1})])),_:1})])):(0,l.Q3)("",!0)])),_:1}),(0,l.Lk)("div",i,[n.active>0&&n.active<2?((0,l.uX)(),(0,l.Wv)(k,{key:0,onClick:c.pre,disabled:n.submitLoading},{default:(0,l.k6)((()=>[(0,l.eW)("上一步")])),_:1},8,["onClick","disabled"])):(0,l.Q3)("",!0),n.active<1?((0,l.uX)(),(0,l.Wv)(k,{key:1,type:"primary",onClick:c.next},{default:(0,l.k6)((()=>[(0,l.eW)("下一步")])),_:1},8,["onClick"])):(0,l.Q3)("",!0),1==n.active?((0,l.uX)(),(0,l.Wv)(k,{key:2,type:"primary",onClick:c.submit,loading:n.submitLoading},{default:(0,l.k6)((()=>[(0,l.eW)("提交")])),_:1},8,["onClick","loading"])):(0,l.Q3)("",!0)])])),_:1})])),_:1})])),_:1})}var n=t(31244),c={name:"stepform",components:{scWorkflow:n.A},data(){return{data:{id:1,name:"请假审批",nodeConfig:{nodeName:"发起人",type:0,nodeRoleList:[],childNode:{nodeName:"条件路由",type:4,conditionNodes:[{nodeName:"长期",type:3,priorityLevel:1,conditionMode:1,conditionList:[{label:"请假天数",field:"day",operator:">",value:"7"}],childNode:{nodeName:"领导审批",type:1,setType:1,nodeUserList:[{id:"360000197302144442",name:"何敏"}],nodeRoleList:[],examineLevel:1,directorLevel:1,selectMode:1,termAuto:!1,term:0,termMode:1,examineMode:1,directorMode:0}},{nodeName:"短期",type:3,priorityLevel:2,conditionMode:1,conditionList:[],childNode:{nodeName:"直接主管审批",type:1,setType:2,nodeUserList:[],nodeRoleList:[],examineLevel:1,directorLevel:1,selectMode:1,termAuto:!1,term:0,termMode:1,examineMode:1,directorMode:0}}],childNode:{nodeName:"抄送人",type:2,userSelectFlag:!0,nodeUserList:[{id:"220000200908305857",name:"何秀英"}]}}}},active:0,submitLoading:!1,form:{paymentAccount:"请假申请",collectionAccount:"行政组",collectionName:"企业通用请假申请",amount:"全部",payPassword:""},rules:{paymentAccount:[{required:!0,message:"请输入..."}],collectionAccount:[{required:!0,message:"请输入"}],collectionName:[{required:!0,message:"请输入"}],amount:[{required:!0,message:"请输入"}],payPassword:[{required:!0,message:"请输入"}]}}},mounted(){},methods:{exportJson(){this.$message("返回值请查看F12控制台console.log()"),console.log(this.data)},next(){const e=`stepForm_${this.active}`;this.$refs[e].validate((e=>{if(!e)return!1;this.active+=1}))},pre(){this.active-=1},submit(){const e=`stepForm_${this.active}`;this.$refs[e].validate((e=>{if(!e)return!1;this.submitLoading=!0,setTimeout((()=>{this.submitLoading=!1,this.active+=1}),1e3)}))},again(){this.active=0}}},s=t(66262);const u=(0,s.A)(c,[["render",d],["__scopeId","data-v-718632a6"]]);var r=u}}]);