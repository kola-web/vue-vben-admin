import{a as e,r as t,aB as a,u as o,aS as s,i as n,o as l,j as i,w as r,k as d}from"./index.2a9ceb8a.js";import"./xlsx.a48e520c.js";import"./Trigger.2036b7e9.js";import{T as p}from"./index.b7d4b255.js";import{R as u}from"./RedoOutlined.50df31e5.js";var m=e({name:"TabContent",components:{RedoOutlined:u,Tooltip:p},setup(){const e=t(!1),{prefixCls:n}=a("multiple-tabs-content"),{t:l}=o(),{refreshPage:i}=s();return{prefixCls:n,t:l,handleRedo:async function(){e.value=!0,await i(),setTimeout((()=>{e.value=!1}),1e3)},loading:e}}});m.render=function(e,t,a,o,s,p){const u=n("RedoOutlined"),m=n("Tooltip");return l(),i(m,{title:e.t("layout.multipleTab.tooltipRedo"),placement:"bottom",mouseEnterDelay:.5},{default:r((()=>[d("span",{class:`${e.prefixCls}__extra-redo`,onClick:t[1]||(t[1]=(...t)=>e.handleRedo&&e.handleRedo(...t))},[d(u,{spin:e.loading},null,8,["spin"])],2)])),_:1},8,["title","mouseEnterDelay"])};export default m;