"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[7079],{70567:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=a(51464),o=a(51681);const r={class:"progress"},i={class:"percentage-value"},n={class:"progress"},s={class:"percentage-value"};function d(e,t,a,d,p,u){const g=(0,l.g2)("el-tab-pane"),b=(0,l.g2)("el-tabs"),c=(0,l.g2)("el-header"),x=(0,l.g2)("scEcharts"),h=(0,l.g2)("el-card"),m=(0,l.g2)("el-col"),v=(0,l.g2)("el-progress"),k=(0,l.g2)("el-row"),F=(0,l.g2)("el-main");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(c,{class:"header-tabs"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{type:"card",modelValue:e.groupId,"onUpdate:modelValue":t[0]||(t[0]=t=>e.groupId=t),onTabChange:e.tabChange},{default:(0,l.k6)((()=>[(0,l.bF)(g,{label:"友奇（内部）",name:"0"}),(0,l.bF)(g,{label:"船厂（外部）",name:"1"}),(0,l.bF)(g,{label:"外派（外部）",name:"4"})])),_:1},8,["modelValue","onTabChange"])])),_:1}),(0,l.bF)(F,null,{default:(0,l.k6)((()=>[(0,l.bF)(k,{gutter:15},{default:(0,l.k6)((()=>[(0,l.bF)(m,{lg:12},{default:(0,l.k6)((()=>[(0,l.bF)(h,{shadow:"never"},{default:(0,l.k6)((()=>[(0,l.bF)(x,{height:"300px",option:p.option},null,8,["option"])])),_:1})])),_:1}),(0,l.bF)(m,{lg:12},{default:(0,l.k6)((()=>[(0,l.bF)(h,{shadow:"never"},{default:(0,l.k6)((()=>[(0,l.bF)(x,{height:"300px",option:p.option2},null,8,["option"])])),_:1})])),_:1}),(0,l.bF)(m,{lg:12},{default:(0,l.k6)((()=>[(0,l.bF)(h,{shadow:"never"},{default:(0,l.k6)((()=>[(0,l.bF)(x,{height:"300px",option:p.option3},null,8,["option"])])),_:1})])),_:1}),(0,l.bF)(m,{lg:12},{default:(0,l.k6)((()=>[(0,l.bF)(h,{shadow:"never"},{default:(0,l.k6)((()=>[(0,l.bF)(x,{height:"300px",option:p.option33},null,8,["option"])])),_:1})])),_:1}),(0,l.bF)(m,{lg:12},{default:(0,l.k6)((()=>[(0,l.bF)(h,{shadow:"hover",header:"初版-进度"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",r,[(0,l.bF)(v,{type:"dashboard",percentage:85.5,width:160},{default:(0,l.k6)((({percentage:e})=>[(0,l.Lk)("div",i,(0,o.v_)(e)+"%",1),t[1]||(t[1]=(0,l.Lk)("div",{class:"percentage-label"},"当前进度",-1))])),_:1})])])),_:1})])),_:1}),(0,l.bF)(m,{lg:12},{default:(0,l.k6)((()=>[(0,l.bF)(h,{shadow:"hover",header:"认可版-进度"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",n,[(0,l.bF)(v,{type:"dashboard",percentage:85.5,width:160},{default:(0,l.k6)((({percentage:e})=>[(0,l.Lk)("div",s,(0,o.v_)(e)+"%",1),t[2]||(t[2]=(0,l.Lk)("div",{class:"percentage-label"},"当前进度",-1))])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})],64)}var p=a(83547),u={name:"chart",components:{scEcharts:p.A},data(){return{option:{title:{text:"图纸完成数量（总体）",subtext:"初版 & 认可版"},grid:{top:"80px"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:["系统图","流程图","清单文件","计算文件","电气图","连接图","管系轴测图"]},yAxis:{type:"value"},series:[{data:[10,12,16,13,14,7,6],type:"bar",barWidth:"15px"},{data:[5,8,6,5,4,9,5],type:"bar",barWidth:"15px"}]},option2:{title:{text:"完成数量（当月）",subtext:"初版 & 任课表"},grid:{top:"80px"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:["系统图","流程图","清单文件","计算文件","电气图","连接图","管系轴测图"]},yAxis:{type:"value"},series:[{data:[2,3,5,2,3,7,4],type:"line"},{data:[4,1,5,6,7,3,1],type:"line"}]},option3:{title:{text:"图纸状态分布",subtext:"初版图"},tooltip:{trigger:"item"},series:[{name:"",type:"pie",radius:["40%","70%"],center:["50%","60%"],label:!1,data:[{value:50,name:"已完成"},{value:20,name:"将到期"},{value:15,name:"已超期"},{value:26,name:"未开始"}]}]},option33:{title:{text:"图纸状态分布",subtext:"认可版图"},tooltip:{trigger:"item"},series:[{name:"",type:"pie",radius:["40%","70%"],center:["50%","60%"],label:!1,data:[{value:20,name:"已完成"},{value:10,name:"将到期"},{value:5,name:"已超期"},{value:6,name:"未开始"}]}]},option4:{title:{text:"Radar Demo",subtext:"基础雷达(属性)图"},tooltip:{trigger:"item"},radar:{radius:100,center:["50%","55%"],indicator:[{name:"销售",max:100},{name:"管理",max:100},{name:"信息技术",max:100},{name:"客服",max:100},{name:"研发",max:100},{name:"市场",max:100}]},series:[{name:"SCUI",type:"radar",areaStyle:{},data:[{value:[74,90,95,65,80,31]}]}]},option5:{title:{text:"Kline Demo",subtext:"基础K线图"},grid:{top:"80px"},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{data:["2017-10-23","2017-10-24","2017-10-25","2017-10-26","2017-10-27","2017-10-28","2017-10-29","2017-10-30"]},yAxis:{scale:!0},series:[{type:"k",data:[[2213.19,2199.31,2191.85,2224.63],[2203.89,2177.91,2173.86,2210.58],[2170.78,2174.12,2161.14,2179.65],[2179.05,2205.5,2179.05,2222.81],[2212.5,2231.17,2212.5,2236.07],[2227.86,2235.57,2219.44,2240.26],[2242.39,2246.3,2235.42,2255.21],[2246.96,2232.97,2221.38,2247.86]]}]},option6:{title:{text:"Gauge Demo",subtext:"基础仪表盘"},series:[{center:["50%","60%"],type:"gauge",anchor:{show:!0,showAbove:!0,size:20,itemStyle:{borderWidth:5}},progress:{show:!0},data:[{value:70}]}]}}}},g=a(51456);const b=(0,g.A)(u,[["render",d],["__scopeId","data-v-2440a17a"]]);var c=b}}]);