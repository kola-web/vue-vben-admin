let t=document.createElement("style");t.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(t);import{a as e,i as a,o,j as n,k as s,w as i}from"./index.2a9ceb8a.js";import"./xlsx.a48e520c.js";import"./DownOutlined.cbacc8d2.js";import{A as r}from"./index.2e922375.js";import"./RightOutlined.95b51b82.js";import"./index.574577b0.js";import"./UpOutlined.92c78b2f.js";import"./LeftOutlined.4da475ad.js";import"./index.d89d898f.js";import{S as d}from"./index.57ad6804.js";import{L as c}from"./index.d2bd9bde.js";import m from"./TargetContent.06c4466c.js";var l=e({components:{LazyContainer:c,TargetContent:m,Skeleton:d,Alert:r},setup:()=>({})});const p={class:"p-4 lazy-base-demo"},u={class:"lazy-base-demo-wrap"},f=s("h1",null,"向下滚动",-1),x={class:"lazy-base-demo-box"};l.render=function(t,e,r,d,c,m){const l=a("Alert"),b=a("TargetContent"),y=a("LazyContainer");return o(),n("div",p,[s(l,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),s("div",u,[f,s("div",x,[s(y,{transitionName:"custom"},{default:i((()=>[s(b)])),_:1})])])])};export default l;