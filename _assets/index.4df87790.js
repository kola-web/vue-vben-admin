let e=document.createElement("style");e.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}",document.head.appendChild(e);import{a as t,i as a,o as n,j as o,k as i,w as s}from"./index.2a9ceb8a.js";import"./xlsx.a48e520c.js";import"./DownOutlined.cbacc8d2.js";import{A as r}from"./index.2e922375.js";import"./RightOutlined.95b51b82.js";import"./index.574577b0.js";import"./UpOutlined.92c78b2f.js";import"./LeftOutlined.4da475ad.js";import"./index.d89d898f.js";import{S as d}from"./index.57ad6804.js";import{L as l}from"./index.d2bd9bde.js";import m from"./TargetContent.06c4466c.js";var p=t({components:{LazyContainer:l,TargetContent:m,Skeleton:d,Alert:r},setup:()=>({})});const c={class:"p-4 lazy-base-demo"},x={class:"lazy-base-demo-wrap"},f=i("h1",null,"向下滚动",-1),b={class:"lazy-base-demo-box"};p.render=function(e,t,r,d,l,m){const p=a("Alert"),u=a("TargetContent"),h=a("Skeleton"),j=a("LazyContainer");return n(),o("div",c,[i(p,{message:"基础示例",description:"向下滚动到可见区域才会加载组件",type:"info","show-icon":""}),i("div",x,[f,i("div",b,[i(j,null,{skeleton:s((()=>[i(h,{rows:10})])),default:s((()=>[i(u)])),_:1})])])])};export default p;