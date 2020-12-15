import{a as e,i as l,o,j as i,k as s,w as n,p as t}from"./index.2a9ceb8a.js";import"./xlsx.a48e520c.js";import"./index.d85deb39.js";import"./Trigger.2036b7e9.js";import"./omit.f8a77210.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.cbacc8d2.js";import"./CheckOutlined.138ae102.js";import{s as a}from"./index.40f83885.js";import"./colors.b7cfe24e.js";import"./RightOutlined.95b51b82.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1f2a22da.js";import"./index.025c284b.js";import"./index.a172b251.js";import"./index.dd0edbd2.js";import"./UpOutlined.92c78b2f.js";import"./index.99954415.js";import"./index.7224a2dd.js";import"./index.94403f82.js";import"./index.85b39766.js";import"./useDebounce.e511ddc2.js";import"./useEventListener.3da23d91.js";import"./useBreakpoint.72fc05ec.js";import{C as d}from"./index.d2bd9bde.js";import"./index.2fe39cb8.js";import"./tsxHelper.6d1e25d3.js";import"./index.934c3ccb.js";import"./index.1fc78044.js";import{u as p}from"./useForm.27757259.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],r=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:l})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:l}=e;await l()}})}];var m=e({components:{BasicForm:a,CollapseContainer:d},setup(){const[e,{setProps:l,updateSchema:o,appendSchemaByField:i,removeSchemaByFiled:s}]=p({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[n]=p({labelWidth:120,schemas:r,actionColOptions:{span:24}});return{register:e,register1:n,schemas:c,setProps:l,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){i({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){s("field11")}}}});const f={class:"m-4"},b={class:"mb-4"},u=t("更改字段3label"),h=t("同时更改字段3,4label"),j=t("往字段3后面插入字段10"),P=t("删除字段11");m.render=function(e,t,a,d,p,c){const r=l("a-button"),m=l("BasicForm"),g=l("CollapseContainer");return o(),i("div",f,[s("div",b,[s(r,{onClick:e.changeLabel3,class:"mr-2"},{default:n((()=>[u])),_:1},8,["onClick"]),s(r,{onClick:e.changeLabel34,class:"mr-2"},{default:n((()=>[h])),_:1},8,["onClick"]),s(r,{onClick:e.appendField,class:"mr-2"},{default:n((()=>[j])),_:1},8,["onClick"]),s(r,{onClick:e.deleteField,class:"mr-2"},{default:n((()=>[P])),_:1},8,["onClick"])]),s(g,{title:"动态表单示例,动态根据表单内其他值改变"},{default:n((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(g,{class:"mt-5",title:"componentProps动态改变"},{default:n((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default m;