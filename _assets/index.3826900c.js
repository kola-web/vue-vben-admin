import{a as e,s as t,R as s,ad as r,f as n,y as a}from"./index.2a9ceb8a.js";import{D as i}from"./index.43c5cbf5.js";import{M as d}from"./index.6dc36799.js";import{g as o}from"./tsxHelper.6d1e25d3.js";import{I as c}from"./index.934c3ccb.js";const l={trigger:{type:[Array],default:()=>["contextmenu"]}};var m=e({name:"Dropdown",props:Object.assign({},l,{dropMenuList:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]}}),emits:["menuEvent"],setup(e,{slots:a,emit:l,attrs:m}){const p=t((()=>e.dropMenuList));function u({key:e}){const t=n(p).find((t=>`${t.event}`==`${e}`));l("menuEvent",t)}return()=>s(i,{trigger:e.trigger,...m},{default:()=>s("span",null,o(a)),overlay:()=>s(d,{onClick:u,selectedKeys:e.selectedKeys},(()=>s(r,null,n(p).map((e=>{const{disabled:t,icon:n,text:a,divider:i,event:o}=e;return[s(d.Item,{key:`${o}`,disabled:t},(()=>s(r,null,n&&s(c,{icon:n}),s("span",{class:"ml-1"},a)))),i&&s(d.Divider,{key:`d-${o}`})]})))))})}});a(m);export{m as D};