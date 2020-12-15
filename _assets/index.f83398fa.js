import{k as n,L as t,G as e,$ as o,K as r,bH as l,bI as c,ad as a,P as i,a as s,_ as u,I as f,M as d,r as p,Q as b,bJ as m,b9 as v,bK as y,a5 as x,bc as h,J as C}from"./index.2a9ceb8a.js";function w(n){return"function"==typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!t(n)}function g(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function j(n){return null!=n}var S=function(t){var e,o=t.itemPrefixCls,r=t.component,l=t.span,c=t.bordered,a=t.label,i=t.content,s=t.colon,u=r;return c?n(u,{class:[(e={},g(e,"".concat(o,"-item-label"),j(a)),g(e,"".concat(o,"-item-content"),j(i)),e)],colSpan:l},{default:function(){return[j(a)?a:i]}}):n(u,{class:["".concat(o,"-item")],colSpan:l},{default:function(){return[a&&n("span",{class:["".concat(o,"-item-label"),g({},"".concat(o,"-item-no-colon"),!s)]},w(a)?a:{default:function(){return[a]}}),i&&n("span",{class:"".concat(o,"-item-content")},w(i)?i:{default:function(){return[i]}})]}})},k=function(t){var i=function(t,a,i){var s=a.colon,u=a.prefixCls,f=a.bordered,d=i.component,p=i.type,b=i.showLabel,m=i.showContent;return t.map((function(t,a){var i=e(t),v=i.prefixCls,y=void 0===v?u:v,x=i.span,h=void 0===x?1:x,C=o(t,"label"),w=r(t),g=l(t),j=c(t),k=t.key;return"string"==typeof d?n(S,{key:"".concat(p,"-").concat(k||a),class:g,style:j,span:h,colon:s,component:d,itemPrefixCls:y,bordered:f,label:b?C:null,content:m?w:null},null):[n(S,{key:"label-".concat(k||a),class:g,style:j,span:1,colon:s,component:d[0],itemPrefixCls:y,bordered:f,label:C},null),n(S,{key:"content-".concat(k||a),class:g,style:j,span:2*h-1,component:d[1],itemPrefixCls:y,bordered:f,content:w},null)]}))},s=t.prefixCls,u=t.vertical,f=t.row,d=t.index,p=t.bordered;return u?n(a,null,[n("tr",{key:"label-".concat(d),class:"".concat(s,"-row")},[i(f,t,{component:"th",type:"label",showLabel:!0})]),n("tr",{key:"content-".concat(d),class:"".concat(s,"-row")},[i(f,t,{component:"td",type:"content",showContent:!0})])]):n("tr",{key:d,class:"".concat(s,"-row")},[i(f,t,{component:p?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0})])};function O(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function P(n){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function I(n){return"function"==typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!t(n)}i.string,i.any,i.number;var D=s({name:"ADescriptionsItem",props:{prefixCls:i.string,label:i.VNodeChild,span:i.number.def(1)},render:function(){return null}}),z={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function L(n,t,e){var o=n;return(void 0===t||t>e)&&(o=h(n,{span:e}),C(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}var N={prefixCls:i.string,bordered:i.looseBool,size:i.oneOf(u("default","middle","small")).def("default"),title:i.VNodeChild,extra:i.VNodeChild,column:{type:[Number,Object],default:function(){return z}},layout:i.oneOf(u("horizontal","vertical")),colon:i.looseBool},V=s({name:"ADescriptions",Item:D,setup:function(t,e){var o,r=e.slots,l=f("configProvider",d).getPrefixCls,c=p({});return b((function(){o=m.subscribe((function(n){"object"===P(t.column)&&(c.value=n)}))})),v((function(){m.unsubscribe(o)})),function(){var e,o,a,i,s=t.prefixCls,u=t.column,f=t.size,d=t.bordered,p=void 0!==d&&d,b=t.layout,m=void 0===b?"horizontal":b,v=t.colon,h=void 0===v||v,C=t.title,w=void 0===C?null===(o=r.title)||void 0===o?void 0:o.call(r):C,g=t.extra,j=void 0===g?null===(a=r.extra)||void 0===a?void 0:a.call(r):g,S=l("descriptions",s),D=function(n,t){if("number"==typeof n)return n;if("object"===P(n))for(var e=0;e<y.length;e++){var o=y[e];if(t[o]&&void 0!==n[o])return n[o]||z[o]}return 3}(u,c.value),N=function(n,t){var e=x(n),o=[],r=[],l=t;return e.forEach((function(n,c){var a,i=null===(a=n.props)||void 0===a?void 0:a.span,s=i||1;if(c===e.length-1)return r.push(L(n,i,l)),void o.push(r);s<l?(l-=s,r.push(n)):(r.push(L(n,s,l)),o.push(r),l=t,r=[])})),o}(null===(i=r.default)||void 0===i?void 0:i.call(r),D);return n("div",{class:[S,(e={},O(e,"".concat(S,"-").concat(f),"default"!==f),O(e,"".concat(S,"-bordered"),!!p),e)]},[(w||j)&&n("div",{class:"".concat(S,"-header")},[n("div",{class:"".concat(S,"-title")},I(w)?w:{default:function(){return[w]}}),n("div",{class:"".concat(S,"-extra")},I(j)?j:{default:function(){return[j]}})]),n("div",{class:"".concat(S,"-view")},[n("table",null,[n("tbody",null,[N.map((function(t,e){return n(k,{key:e,index:e,colon:h,prefixCls:S,vertical:"vertical"===m,bordered:p,row:t},null)}))])])])])}}});V.props=N,V.install=function(n){return n.component(V.name,V),n.component(V.Item.name,V.Item),n};export{V as D};