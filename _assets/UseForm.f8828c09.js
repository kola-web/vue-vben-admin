import{a as s,h as e,i as o,o as t,j as l,k as i,w as a,p as r}from"./index.2a9ceb8a.js";import"./xlsx.a48e520c.js";import"./index.d85deb39.js";import"./Trigger.2036b7e9.js";import"./omit.f8a77210.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.cbacc8d2.js";import"./CheckOutlined.138ae102.js";import{s as n}from"./index.40f83885.js";import"./colors.b7cfe24e.js";import"./RightOutlined.95b51b82.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.1f2a22da.js";import"./index.025c284b.js";import"./index.a172b251.js";import"./index.dd0edbd2.js";import"./UpOutlined.92c78b2f.js";import"./index.99954415.js";import"./index.7224a2dd.js";import"./index.94403f82.js";import"./index.85b39766.js";import"./useDebounce.e511ddc2.js";import"./useEventListener.3da23d91.js";import"./useBreakpoint.72fc05ec.js";import{C as p}from"./index.d2bd9bde.js";import"./index.2fe39cb8.js";import"./tsxHelper.6d1e25d3.js";import"./index.934c3ccb.js";import"./index.1fc78044.js";import{u as c}from"./useForm.27757259.js";const d=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:s=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var m=s({components:{BasicForm:n,CollapseContainer:p},setup(){const{createMessage:s}=e(),[o,{setProps:t}]=c({labelWidth:120,schemas:d,actionColOptions:{span:24}});return{register:o,schemas:d,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps:t}}});const u={class:"m-4"},b={class:"mb-4"},f=r("更改labelWidth"),j=r("还原labelWidth"),P=r("更改Size"),C=r("还原Size"),k=r("禁用表单"),h=r("解除禁用"),x=r("紧凑表单"),_=r("还原正常间距"),g=r(" 操作按钮位置 "),v={class:"mb-4"},B=r(" 隐藏操作按钮 "),S=r(" 显示操作按钮 "),w=r(" 隐藏重置按钮 "),O=r(" 显示重置按钮 "),R=r(" 隐藏查询按钮 "),F=r(" 显示查询按钮 "),W=r(" 修改重置按钮 "),y=r(" 修改查询按钮 ");m.render=function(s,e,r,n,p,c){const d=o("a-button"),m=o("BasicForm"),z=o("CollapseContainer");return t(),l("div",u,[i("div",b,[i(d,{onClick:e[1]||(e[1]=e=>s.setProps({labelWidth:150})),class:"mr-2"},{default:a((()=>[f])),_:1}),i(d,{onClick:e[2]||(e[2]=e=>s.setProps({labelWidth:120})),class:"mr-2"},{default:a((()=>[j])),_:1}),i(d,{onClick:e[3]||(e[3]=e=>s.setProps({size:"large"})),class:"mr-2"},{default:a((()=>[P])),_:1}),i(d,{onClick:e[4]||(e[4]=e=>s.setProps({size:"default"})),class:"mr-2"},{default:a((()=>[C])),_:1}),i(d,{onClick:e[5]||(e[5]=e=>s.setProps({disabled:!0})),class:"mr-2"},{default:a((()=>[k])),_:1}),i(d,{onClick:e[6]||(e[6]=e=>s.setProps({disabled:!1})),class:"mr-2"},{default:a((()=>[h])),_:1}),i(d,{onClick:e[7]||(e[7]=e=>s.setProps({compact:!0})),class:"mr-2"},{default:a((()=>[x])),_:1}),i(d,{onClick:e[8]||(e[8]=e=>s.setProps({compact:!1})),class:"mr-2"},{default:a((()=>[_])),_:1}),i(d,{onClick:e[9]||(e[9]=e=>s.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:a((()=>[g])),_:1})]),i("div",v,[i(d,{onClick:e[10]||(e[10]=e=>s.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:a((()=>[B])),_:1}),i(d,{onClick:e[11]||(e[11]=e=>s.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:a((()=>[S])),_:1}),i(d,{onClick:e[12]||(e[12]=e=>s.setProps({showResetButton:!1})),class:"mr-2"},{default:a((()=>[w])),_:1}),i(d,{onClick:e[13]||(e[13]=e=>s.setProps({showResetButton:!0})),class:"mr-2"},{default:a((()=>[O])),_:1}),i(d,{onClick:e[14]||(e[14]=e=>s.setProps({showSubmitButton:!1})),class:"mr-2"},{default:a((()=>[R])),_:1}),i(d,{onClick:e[15]||(e[15]=e=>s.setProps({showSubmitButton:!0})),class:"mr-2"},{default:a((()=>[F])),_:1}),i(d,{onClick:e[16]||(e[16]=e=>s.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:a((()=>[W])),_:1}),i(d,{onClick:e[17]||(e[17]=e=>s.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:a((()=>[y])),_:1})]),i(z,{title:"useForm示例"},{default:a((()=>[i(m,{onRegister:s.register,onSubmit:s.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;