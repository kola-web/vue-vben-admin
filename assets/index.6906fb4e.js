import{d as e,r as s,g as t,cr as c,cs as l,h as n,o as a,i,j as r,bz as u,m as d}from"./index.9a6e95d8.js";import"./DownOutlined.7914d6be.js";import"./index.b4107331.js";import"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./index.074cf711.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./isEqual.b9304b29.js";import"./transButton.ee7e6c60.js";import{_ as o}from"./index.dc0ec1cc.js";import{B as f}from"./BugOutlined.f0bcff89.js";import{R as m}from"./RightOutlined.ffcbe06b.js";import"./index.8d91dadc.js";import"./usePageContext.dfe3de60.js";import{B as p}from"./index.66817d08.js";var y=e({components:{BasicDragVerify:p,BugOutlined:f,RightOutlined:m,PageWrapper:o},setup(){const{createMessage:e}=t();return{handleSuccess:function(s){const{time:t}=s;e.success(`校验成功,耗时${t}秒`)},el1:s(null),el2:s(null),el3:s(null),el4:s(null),el5:s(null),handleBtnClick:function(e){e&&e.resume()}}}});const b=u("data-v-5ebbb404");c("data-v-5ebbb404");const g={class:"flex justify-center p-4 items-center bg-gray-700"},j=d("还原"),h={class:"flex justify-center p-4 items-center bg-gray-700"},x=d("还原"),S={class:"flex justify-center p-4 items-center bg-gray-700"},k=d("还原"),B={class:"flex justify-center p-4 items-center bg-gray-700"},C=d("还原"),v={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=d(" 成功 "),R={key:1},D=d(" 拖动 "),I=d("还原");l();const P=b(((e,s,t,c,l,u)=>{const d=n("BasicDragVerify"),o=n("a-button"),f=n("BugOutlined"),m=n("RightOutlined"),p=n("PageWrapper");return a(),i(p,{title:"拖动校验示例"},{default:b((()=>[r("div",g,[r(d,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),r(o,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:b((()=>[j])),_:1})]),r("div",h,[r(d,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),r(o,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:b((()=>[x])),_:1})]),r("div",S,[r(d,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),r(o,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:b((()=>[k])),_:1})]),r("div",B,[r(d,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:b((e=>[e?(a(),i(f,{key:0})):(a(),i(m,{key:1}))])),_:1},8,["onSuccess"]),r(o,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:b((()=>[C])),_:1})]),r("div",v,[r(d,{ref:"el5",onSuccess:e.handleSuccess},{text:b((e=>[e?(a(),i("div",_,[r(f),O])):(a(),i("div",R,[D,r(m)]))])),_:1},8,["onSuccess"]),r(o,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:b((()=>[I])),_:1})])])),_:1})}));y.render=P,y.__scopeId="data-v-5ebbb404";export default y;