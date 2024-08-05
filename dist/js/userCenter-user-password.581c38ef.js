"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[4655],{17378:function(e,r,s){s.r(r),s.d(r,{default:function(){return w}});var o=s(20641);const a=(0,o.Lk)("div",{class:"el-form-item-msg"},"必须提供当前登录用户密码才能进行更改",-1),l=(0,o.Lk)("div",{class:"el-form-item-msg"},"请输入包含英文、数字的8位以上密码",-1);function d(e,r,s,d,t,n){const u=(0,o.g2)("el-alert"),m=(0,o.g2)("el-input"),w=(0,o.g2)("el-form-item"),f=(0,o.g2)("sc-password-strength"),p=(0,o.g2)("el-button"),i=(0,o.g2)("el-form"),c=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.Wv)(c,{shadow:"never",header:"修改密码"},{default:(0,o.k6)((()=>[(0,o.bF)(u,{title:"密码更新成功后，您将被重定向到登录页面，您可以使用新密码重新登录。",type:"info","show-icon":"",style:{"margin-bottom":"15px"}}),(0,o.bF)(i,{ref:"form",model:t.form,rules:t.rules,"label-width":"120px",style:{"margin-top":"20px"}},{default:(0,o.k6)((()=>[(0,o.bF)(w,{label:"当前密码",prop:"userPassword"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{modelValue:t.form.userPassword,"onUpdate:modelValue":r[0]||(r[0]=e=>t.form.userPassword=e),type:"password","show-password":"",placeholder:"请输入当前密码"},null,8,["modelValue"]),a])),_:1}),(0,o.bF)(w,{label:"新密码",prop:"newPassword"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{modelValue:t.form.newPassword,"onUpdate:modelValue":r[1]||(r[1]=e=>t.form.newPassword=e),type:"password","show-password":"",placeholder:"请输入新密码"},null,8,["modelValue"]),(0,o.bF)(f,{modelValue:t.form.newPassword,"onUpdate:modelValue":r[2]||(r[2]=e=>t.form.newPassword=e)},null,8,["modelValue"]),l])),_:1}),(0,o.bF)(w,{label:"确认新密码",prop:"confirmNewPassword"},{default:(0,o.k6)((()=>[(0,o.bF)(m,{modelValue:t.form.confirmNewPassword,"onUpdate:modelValue":r[3]||(r[3]=e=>t.form.confirmNewPassword=e),type:"password","show-password":"",placeholder:"请再次输入新密码"},null,8,["modelValue"])])),_:1}),(0,o.bF)(w,null,{default:(0,o.k6)((()=>[(0,o.bF)(p,{type:"primary",onClick:n.save},{default:(0,o.k6)((()=>[(0,o.eW)("保存密码")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1})}var t=s(64089),n={components:{scPasswordStrength:t.A},data(){return{form:{userPassword:"",newPassword:"",confirmNewPassword:""},rules:{userPassword:[{required:!0,message:"请输入当前密码"}],newPassword:[{required:!0,message:"请输入新密码"}],confirmNewPassword:[{required:!0,message:"请再次输入新密码"},{validator:(e,r,s)=>{r!==this.form.newPassword?s(new Error("两次输入密码不一致")):s()}}]}}},methods:{save(){this.$refs.form.validate((e=>{if(!e)return!1;this.$alert("密码修改成功，是否跳转至登录页使用新密码登录","修改成功",{type:"success",center:!0}).then((()=>{this.$router.replace({path:"/login"})})).catch((()=>{}))}))}}},u=s(66262);const m=(0,u.A)(n,[["render",d]]);var w=m}}]);