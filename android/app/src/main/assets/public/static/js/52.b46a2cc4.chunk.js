/*! For license information please see 52.b46a2cc4.chunk.js.LICENSE.txt */
(this.webpackJsonplaundree=this.webpackJsonplaundree||[]).push([[52],{87:function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return B}));var n=r(3),s="-shadowcsshost",o="-shadowcssslotted",c="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",u=new RegExp("(-shadowcsshost"+i,"gim"),a=new RegExp("(-shadowcsscontext"+i,"gim"),l=new RegExp("(-shadowcssslotted"+i,"gim"),p="-shadowcsshost-no-combinator",f=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,v=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S="%BLOCK%",O=function(t,e){var r=W(t),n=0;return r.escapedString.replace(_,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",i=t[4],u="";i&&i.startsWith("{%BLOCK%")&&(c=r.blocks[n++],i=i.substring(S.length+1),u="{");var a={selector:o,content:c},l=e(a);return""+t[1]+l.selector+t[3]+u+l.content+i}))},W=function(t){for(var e=t.split(b),r=[],n=[],s=0,o=[],c=0;c<e.length;c++){var i=e[c];"}"===i&&s--,s>0?o.push(i):(o.length>0&&(n.push(o.join("")),r.push(S),o=[]),r.push(i)),"{"===i&&s++}return o.length>0&&(n.push(o.join("")),r.push(S)),{escapedString:r.join(""),blocks:n}},j=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),s=[],o=0;o<n.length;o++){var c=n[o].trim();if(!c)break;s.push(r(p,c,t[3]))}return s.join(",")}return p+t[3]}))},k=function(t,e,r){return t+e.replace(s,"")+r},E=function(t,e,r){return e.indexOf(s)>-1?k(t,e,r):t+e+r+", "+e+" "+t+r},R=function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},C=function(t,e,r){for(var n,s="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}))),o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(p)>-1)n=function(t,e,r){if(g.lastIndex=0,g.test(t)){var n="."+r;return t.replace(f,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,s){return e+n+r+s}))})).replace(g,n+" ")}return e+" "+t}(t,e,r);else{var o=t.replace(g,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+s+c[2]+c[3])}}return n},c=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var s="__ph-"+r+"__";return e.push(n),r++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,s){var o="__ph-"+r+"__";return e.push(s),r++,n+o})),placeholders:e}}(t),i="",u=0,a=/( |>|\+|~(?!=))\s*/g,l=!((t=c.content).indexOf(p)>-1);null!==(n=a.exec(t));){var h=n[1],d=t.slice(u,n.index).trim();i+=((l=l||d.indexOf(p)>-1)?o(d):d)+" "+h+" ",u=a.lastIndex}var m=t.substring(u);return i+=(l=l||m.indexOf(p)>-1)?o(m):m,function(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))}(c.placeholders,i)},L=function t(e,r,n,s,o){return O(e,(function(e){var o=e.selector,c=e.content;return"@"!==e.selector[0]?o=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():R(t,e)?C(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,s):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(c=t(e.content,r,n,s)),{selector:o.replace(/\s{2,}/g," ").trim(),content:c}}))},T=function(t,e,r,n,i){var f=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(l,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var s=t[2].trim(),o=t[3],c=r+s+o,i="",u=t[4]-1;u>=0;u--){var a=t[5][u];if("}"===a||","===a)break;i=a+i}var l=i+c,f=""+i.trimRight()+c.trim();if(l.trim()!==f.trim()){var h=f+", "+l;n.push({orgSelector:l,updatedSelector:h})}return c}return p+t[3]})),{selectors:n,cssText:t}}(t=function(t){return j(t,a,E)}(t=function(t){return j(t,u,k)}(t=function(t){return t.replace(v,c).replace(d,s).replace(m,o)}(t))),n);return t=function(t){return h.reduce((function(t,e){return t.replace(e," ")}),t)}(t=f.cssText),e&&(t=L(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:f.selectors}},B=function(t,e,r){var s=e+"-h",o=e+"-s",c=function(t){return t.match(w)||[]}(t);t=function(t){return t.replace(x,"")}(t);var i=[];if(r){var u=function(t){var e="/*!@___"+i.length+"___*/",r="/*!@"+t.selector+"*/";return i.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=O(t,(function(t){return"@"!==t.selector[0]?u(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=O(t.content,u),t):t}))}var a=T(t,e,s,o);return t=Object(n.d)([a.cssText],c).join("\n"),r&&i.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),a.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=52.b46a2cc4.chunk.js.map