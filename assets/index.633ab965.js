import{d as e,dB as t,dC as s,cr as a,cs as n,h as o,o as r,i as d,bz as i,j as c,m}from"./index.9a6e95d8.js";import"./DownOutlined.7914d6be.js";import{A as p}from"./index.3970d233.js";import"./index.b4107331.js";import"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./index.074cf711.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./isEqual.b9304b29.js";import"./index.c729d376.js";import"./transButton.ee7e6c60.js";import{_ as u}from"./index.dc0ec1cc.js";import"./index.8d91dadc.js";import"./usePageContext.dfe3de60.js";import l from"./CurrentPermissionMode.97a07025.js";var j=e({components:{Alert:p,CurrentPermissionMode:l,PageWrapper:u},setup(){const{changeMenu:e}=s();return{RoleEnum:t,changeMenu:e}}});const b=i("data-v-bcdaa5b4");a("data-v-bcdaa5b4");const f={class:"mt-4"},g=m(" 权限切换(请先切换权限模式为后台权限模式): "),x=m(" 获取用户id为1的菜单 "),C=m(" 获取用户id为2的菜单 ");n();const h=b(((e,t,s,a,n,i)=>{const m=o("CurrentPermissionMode"),p=o("Alert"),u=o("a-button"),l=o("a-button-group"),j=o("PageWrapper");return r(),d(j,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:b((()=>[c(m),c(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),c("div",f,[g,c(l,null,{default:b((()=>[c(u,{onClick:t[1]||(t[1]=t=>e.changeMenu("1"))},{default:b((()=>[x])),_:1}),c(u,{onClick:t[2]||(t[2]=t=>e.changeMenu("2"))},{default:b((()=>[C])),_:1})])),_:1})])])),_:1})}));j.render=h,j.__scopeId="data-v-bcdaa5b4";export default j;