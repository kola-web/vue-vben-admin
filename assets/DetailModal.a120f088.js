import{d as e,u as s,h as t,o as i,i as o,w as r,j as a,aH as n}from"./index.9a6e95d8.js";import"./colors.2afe0cf1.js";import"./_stringToArray.c244b21e.js";import"./domUtils.4bf6def6.js";import"./isEqual.b9304b29.js";import"./responsiveObserve.c545f1cc.js";import"./index.dbe75ef4.js";import"./index.3322d17d.js";import"./index.ef0055a4.js";import{_ as d}from"./index.f7e9d603.js";import"./FullscreenOutlined.ae5dc3db.js";import"./RightOutlined.ffcbe06b.js";import"./useTimeout.fa08b045.js";import"./index.7069600f.js";import"./index.8d91dadc.js";import"./animation.5c0b7ef6.js";import"./useScrollTo.162b59ba.js";import"./useAttrs.2a07db8f.js";import"./useWindowSizeFn.fed78a59.js";import{D as m}from"./index.3500a4e7.js";import{u as p}from"./useDescription.022ee8a9.js";import{getDescSchema as c}from"./data.cb282e1a.js";var f=e({name:"ErrorLogDetailModal",components:{BasicModal:d,Description:m},props:{info:{type:Object,default:null}},setup(){const{t:e}=s(),[t]=p({column:2,schema:c()});return{register:t,useI18n:s,t:e}}});f.render=function(e,s,d,m,p,c){const f=t("Description"),j=t("BasicModal");return i(),o(j,n({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:r((()=>[a(f,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;