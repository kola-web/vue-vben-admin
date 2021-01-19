import{d as e,r as t,e as n,o as s,i as r,a2 as a,bc as l,j as o,b4 as c}from"./index.9a6e95d8.js";import{x as u}from"./index.9565bed4.js";var i=e({name:"ImportExcel",emits:["success","error"],setup(e,{emit:s}){const r=t(null),a=t(!1);function l(e){if(!e||!e["!ref"])return[];const t=[],n=u.utils.decode_range(e["!ref"]),s=n.s.r;for(let r=n.s.c;r<=n.e.c;++r){const n=e[u.utils.encode_cell({c:r,r:s})];let a="UNKNOWN "+r;n&&n.t&&(a=u.utils.format_cell(n)),t.push(a)}return t}function o(e){return a.value=!0,new Promise(((t,n)=>{const r=new FileReader;r.onload=async e=>{try{const n=e.target&&e.target.result,r=function(e){const t=[];for(const n of e.SheetNames){const s=e.Sheets[n],r=l(s),a=u.utils.sheet_to_json(s);t.push({header:r,results:a,meta:{sheetName:n}})}return t}(u.read(n,{type:"array"}));s("success",r),t("")}catch(r){n(r),s("error")}finally{a.value=!1}},r.readAsArrayBuffer(e)}))}return{handleUpload:function(){const e=n(r);e&&e.click()},handleInputClick:function(e){const t=e&&e.target.files,s=t&&t[0];s&&async function(e){const t=n(r);t&&(t.value=""),await o(e)}(s)},inputRef:r}}});i.render=function(e,t,n,u,i,d){return s(),r("div",null,[a(o("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[1]||(t[1]=(...t)=>e.handleInputClick&&e.handleInputClick(...t))},null,544),[[l,!1]]),o("div",{onClick:t[2]||(t[2]=(...t)=>e.handleUpload&&e.handleUpload(...t))},[c(e.$slots,"default")])])};export default i;