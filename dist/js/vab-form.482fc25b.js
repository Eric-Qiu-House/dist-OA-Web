"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[7193],{74005:function(e,l,a){a.r(l),a.d(l,{default:function(){return m}});var t=a(51464),n=a(51681);function o(e,l,a,o,i,s){const r=(0,t.g2)("el-timeline-item"),m=(0,t.g2)("el-timeline"),u=(0,t.g2)("el-alert"),c=(0,t.g2)("el-card"),d=(0,t.g2)("el-button"),p=(0,t.g2)("el-col"),b=(0,t.g2)("sc-form"),f=(0,t.g2)("el-row"),g=(0,t.g2)("el-main");return(0,t.uX)(),(0,t.Wv)(g,null,{default:(0,t.k6)((()=>[(0,t.bF)(f,{gutter:15},{default:(0,t.k6)((()=>[(0,t.bF)(p,{lg:6},{default:(0,t.k6)((()=>[(0,t.bF)(c,{shadow:"never",header:"处理逻辑说明"},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(r,{timestamp:"两者数据并无顺序要求,只是获取表单值时需要自行设置loading"},{default:(0,t.k6)((()=>l[1]||(l[1]=[(0,t.eW)("1.远程获取表单配置参数和表单的值")]))),_:1}),(0,t.bF)(r,{timestamp:"构建form对象, 循环渲染对应组件, 获取远程选项数据. 完成前组件将由骨架代替"},{default:(0,t.k6)((()=>l[2]||(l[2]=[(0,t.eW)("2.根据配置构建表单组件")]))),_:1}),(0,t.bF)(r,{timestamp:"合并form对象和表单值"},{default:(0,t.k6)((()=>l[3]||(l[3]=[(0,t.eW)("3.给表单赋值")]))),_:1})])),_:1}),(0,t.bF)(u,{title:"当前版本为预览版本,并未在正式项目中实施,请谨慎使用. 更多配置以及图形化编辑器正在路上.",type:"warning","show-icon":""})])),_:1}),(0,t.bF)(c,{shadow:"never",header:"双向绑定"},{default:(0,t.k6)((()=>[(0,t.bF)(d,{type:"primary",onClick:s.setName},{default:(0,t.k6)((()=>l[4]||(l[4]=[(0,t.eW)("改变输入框的值")]))),_:1},8,["onClick"]),(0,t.bF)(d,{type:"primary",onClick:s.setConfig},{default:(0,t.k6)((()=>l[5]||(l[5]=[(0,t.eW)("改变指定栅格配置")]))),_:1},8,["onClick"])])),_:1})])),_:1}),(0,t.bF)(p,{lg:12},{default:(0,t.k6)((()=>[(0,t.bF)(c,{shadow:"never",header:"动态表单渲染器"},{default:(0,t.k6)((()=>[(0,t.bF)(b,{ref:"formref",config:i.config,modelValue:i.form,"onUpdate:modelValue":l[0]||(l[0]=e=>i.form=e),loading:i.loading},{default:(0,t.k6)((()=>[(0,t.bF)(d,{type:"primary",onClick:s.save},{default:(0,t.k6)((()=>l[6]||(l[6]=[(0,t.eW)("保 存")]))),_:1},8,["onClick"]),(0,t.bF)(d,{onClick:s.reset},{default:(0,t.k6)((()=>l[7]||(l[7]=[(0,t.eW)("重 置")]))),_:1},8,["onClick"])])),_:1},8,["config","modelValue","loading"])])),_:1})])),_:1}),(0,t.bF)(p,{lg:6},{default:(0,t.k6)((()=>[(0,t.bF)(c,{shadow:"never",header:"表单输出"},{default:(0,t.k6)((()=>[(0,t.Lk)("pre",null,(0,n.v_)(i.form),1)])),_:1})])),_:1})])),_:1})])),_:1})}var i={name:"formRender",data(){return{loading:!1,config:{},form:{}}},mounted(){const e={labelWidth:"130px",labelPosition:"right",size:"medium",formItems:[{label:"ElementPlus",component:"title"},{label:"输入框",name:"name",value:"",component:"input",options:{maxlength:"20",placeholder:"Activity name"},rules:[{required:!0,message:"Please input Activity name",trigger:"blur"}],requiredHandle:"$.required==true"},{label:"栅格(12/24)",name:"name2",value:"",component:"input",span:12,options:{placeholder:"span: 12"}},{label:"栅格(12/24)",name:"name3",value:"",component:"input",span:12,options:{placeholder:"span: 12"}},{label:"选择器(多选)",name:"select",value:"",component:"select",span:24,options:{remote:{api:`${this.$CONFIG.API_URL}/system/dic/get`,data:{name:"a"}},multiple:!0,items:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"Please input Activity name",trigger:"change"}],requiredHandle:"$.required==true"},{label:"选择器(单选)",name:"select2",value:"",component:"select",span:24,options:{remote:{api:`${this.$CONFIG.API_URL}/system/dic/get`,data:{name:"b"}},items:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{label:"级联选择器",name:"cascader",value:"",component:"cascader",span:24,options:{items:[{label:"Guide",value:"guide",children:[{label:"Disciplines",value:"disciplines"},{label:"Consistency",value:"consistency"}]},{label:"Resource",value:"resource",children:[{label:"Axure Components",value:"axure"},{label:"Sketch Templates",value:"sketch"},{label:"Design Documentation",value:"docs"}]},{label:"Component",value:"component"}]}},{label:"多选框",name:"checkbox",component:"checkbox",span:24,tips:"多选框配置加上 name 表示拥有嵌套关系。否则将值“平铺”在form对象",options:{items:[{label:"选项1",name:"option1",value:!1},{label:"选项2",name:"option2",value:!1}]},hideHandle:"$.required==true"},{label:"多选框组",name:"checkboxGroup",value:[],component:"checkboxGroup",span:24,options:{items:[{label:"选项1",value:"option1"},{label:"选项2",value:"option2"}]},hideHandle:"$.required==true"},{label:"单选",name:"radio",value:"1",component:"radio",options:{items:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},hideHandle:"$.required==true"},{label:"开关",name:"required",message:"演示如何使用表达式动态显隐和必填，试试打开和关闭开关",value:!1,component:"switch"},{label:"日期/时间",name:"date",value:"",component:"date",options:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"},rules:[{required:!0,message:"Please input Data",trigger:"change"}]},{label:"滑块",name:"slider",value:0,component:"slider",options:{marks:{0:"0°C",8:"8°C",37:"37°C"}}},{label:"数值",name:"number",value:0,component:"number"},{label:"颜色",name:"color",value:"",component:"color"},{label:"评分",name:"rate",value:0,component:"rate"},{label:"SCUI扩展",component:"title"},{label:"表格选择器",name:"tableselect",value:{},component:"tableselect",span:24,options:{apiObj:"$API.demo.page",column:[{label:"ID",prop:"id",width:150},{label:"姓名",prop:"user"}],props:{label:"user",value:"id",keyword:"keyword"}}},{label:"上传",component:"upload",options:{items:[{label:"图像1",name:"img1",value:""},{label:"图像2",name:"img2",value:""}]}},{label:"富文本",name:"text",value:"",component:"editor"}]},l={name:"Activity name",checkbox:{option1:!0},checkboxGroup:["option1"],select:["1"],select2:"1",cascader:["resource","docs"],tableselect:{user:"何敏",id:"360000197302144442"},text:'<p><span style="font-size: 28px;">Editor</span></p>\n<table style="border-collapse: collapse; width: 100%;" border="1">\n<tbody>\n<tr>\n<td style="width: 47.4544%; background-color: #ecf0f1;">Name</td>\n<td style="width: 47.4544%;">SCUI</td>\n</tr>\n<tr>\n<td style="width: 47.4544%; background-color: #ecf0f1;">Describe</td>\n<td style="width: 47.4544%;">Super color UI Admin</td>\n</tr>\n</tbody>\n</table>'};setTimeout((()=>{this.config=e}),500),this.loading=!0,setTimeout((()=>{this.form=l,this.loading=!1}),100)},methods:{setName(){this.form.name="New Title"},setConfig(){this.config.formItems[2].span=24==this.config.formItems[2].span?12:24,this.config.formItems[3].span=24==this.config.formItems[3].span?12:24},save(){this.$refs.formref.validate(((e,l)=>{if(!e)return this.$refs.formref.scrollToField(Object.keys(l)[0]),!1;console.log(this.form),alert("submit!")}))},reset(){this.$refs.formref.resetFields()}}},s=a(51456);const r=(0,s.A)(i,[["render",o]]);var m=r}}]);