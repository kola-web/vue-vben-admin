import{d as e,b5 as i,u as t,h as s,o as n,i as r,w as o,j as d,l}from"./index.9a6e95d8.js";import"./SearchOutlined.0274a049.js";import"./index.fa1a1838.js";import"./DownOutlined.7914d6be.js";import"./CheckOutlined.9adc9f3e.js";import"./index.a3a1e8cf.js";import"./EyeOutlined.301bca7e.js";import{u as p}from"./index.55de31d8.js";import"./index.3970d233.js";import"./colors.2afe0cf1.js";import"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./uuid.d595bce3.js";import"./findIndex.2287226b.js";import"./_stringToArray.c244b21e.js";import"./domUtils.4bf6def6.js";import"./isEqual.b9304b29.js";import"./_baseProperty.74f89655.js";import"./index.734b408e.js";import"./index.47b09016.js";import"./UpOutlined.2c90282e.js";import"./LeftOutlined.7f33cb51.js";import"./index.a42a59eb.js";import"./responsiveObserve.c545f1cc.js";import"./index.c13f1716.js";import"./index.5182ab2a.js";import"./index.dbe75ef4.js";import"./index.c729d376.js";import"./index.b3ef3e6d.js";import"./index.167971e0.js";import"./index.b10dc2f3.js";import"./index.5f0ec28f.js";import"./util.61e89dd9.js";import"./index.3322d17d.js";import"./index.f7e9d603.js";import{F as m,a}from"./FullscreenOutlined.ae5dc3db.js";import"./RightOutlined.ffcbe06b.js";import"./useTimeout.fa08b045.js";import"./index.7069600f.js";import"./index.8d91dadc.js";import"./animation.5c0b7ef6.js";import"./useScrollTo.162b59ba.js";import"./useAttrs.2a07db8f.js";import"./useWindowSizeFn.fed78a59.js";import"./download.8ba6c906.js";import{u as c}from"./useFullScreen.189629a2.js";var u=e({name:"FullScreenSetting",components:{FullscreenExitOutlined:m,FullscreenOutlined:a,Tooltip:i},setup(){const e=p(),{t:i}=t(),{toggleFullscreen:s,isFullscreenRef:n}=c(e.wrapRef);return{handleFullScreen:function(){s()},isFullscreenRef:n,t:i}}});u.render=function(e,i,t,p,m,a){const c=s("FullscreenOutlined"),u=s("FullscreenExitOutlined"),j=s("Tooltip");return n(),r(j,{placement:"top"},{title:o((()=>[d("span",null,l(e.t("component.table.settingFullScreen")),1)])),default:o((()=>[e.isFullscreenRef?(n(),r(u,{key:1,onClick:e.handleFullScreen},null,8,["onClick"])):(n(),r(c,{key:0,onClick:e.handleFullScreen},null,8,["onClick"]))])),_:1})};export default u;