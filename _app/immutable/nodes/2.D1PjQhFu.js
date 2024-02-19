import{s as he,c as Ee,e as E,b as L,d as T,f as N,j as R,O as Z,i as b,v as M,k as S,l as w,P as A,Q as tt,R as lt,u as Te,g as ze,a as Be,A as _e,S as st,x as G,T as P,C as F,p as je,n as ge,U as ye,t as re,h as ae,V as Le,W as Re,X as nt,Y as ot,m as ke,w as J,Z as qe,o as we,_ as Y,$ as it,r as rt,a0 as me,a1 as ve,a2 as at}from"../chunks/scheduler.VdEMU1Gt.js";import{S as ue,i as fe,t as W,a as X,b as te,d as le,m as se,e as ne,f as ct}from"../chunks/index.CfFGSHzU.js";import{w as Me,b as Oe}from"../chunks/paths.DWFNNnZZ.js";function pe(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const ht=t=>({}),Ie=t=>({});function ut(t){let e,l,s,n,o,h,f,a,c,u="close modal",i,g,_;const O=t[3].header,v=Ee(O,t,t[2],Ie),C=t[3].default,H=Ee(C,t,t[2],null);return{c(){e=E("dialog"),l=E("div"),v&&v.c(),s=L(),n=E("hr"),o=L(),H&&H.c(),h=L(),f=E("hr"),a=L(),c=E("button"),c.textContent=u,this.h()},l(r){e=T(r,"DIALOG",{class:!0});var p=N(e);l=T(p,"DIV",{class:!0});var k=N(l);v&&v.l(k),s=R(k),n=T(k,"HR",{}),o=R(k),H&&H.l(k),h=R(k),f=T(k,"HR",{}),a=R(k),c=T(k,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(c)!=="svelte-15i90tf"&&(c.textContent=u),k.forEach(b),p.forEach(b),this.h()},h(){c.autofocus=!0,M(c,"class","svelte-19dligb"),M(l,"class","svelte-19dligb"),M(e,"class","svelte-19dligb")},m(r,p){S(r,e,p),w(e,l),v&&v.m(l,null),w(l,s),w(l,n),w(l,o),H&&H.m(l,null),w(l,h),w(l,f),w(l,a),w(l,c),t[6](e),i=!0,c.focus(),g||(_=[A(c,"click",t[5]),A(l,"click",tt(t[4])),A(e,"close",t[7]),A(e,"click",lt(t[8]))],g=!0)},p(r,[p]){v&&v.p&&(!i||p&4)&&Te(v,O,r,r[2],i?Be(O,r[2],p,ht):ze(r[2]),Ie),H&&H.p&&(!i||p&4)&&Te(H,C,r,r[2],i?Be(C,r[2],p,null):ze(r[2]),null)},i(r){i||(W(v,r),W(H,r),i=!0)},o(r){X(v,r),X(H,r),i=!1},d(r){r&&b(e),v&&v.d(r),H&&H.d(r),t[6](null),g=!1,_e(_)}}}function ft(t,e,l){let{$$slots:s={},$$scope:n}=e,{showModal:o}=e,h;function f(g){st.call(this,t,g)}const a=()=>h.close();function c(g){G[g?"unshift":"push"](()=>{h=g,l(1,h)})}const u=()=>l(0,o=!1),i=()=>h.close();return t.$$set=g=>{"showModal"in g&&l(0,o=g.showModal),"$$scope"in g&&l(2,n=g.$$scope)},t.$$.update=()=>{t.$$.dirty&3&&h&&o&&h.showModal()},[o,h,n,s,f,a,c,u,i]}class dt extends ue{constructor(e){super(),fe(this,e,ft,ut,he,{showModal:0})}}let oe={};const B=(t,e=null)=>{document.execCommand(t,!1,e)},Je=(t,e)=>{if(e=e||(t&&t.tagName?[t.tagName]:[]),t&&t.parentNode)t=t.parentNode;else return e;const l=t.tagName;return t.style&&t.getAttribute&&[t.style.textAlign||t.getAttribute("align"),t.style.color||l==="FONT"&&"forecolor",t.style.backgroundColor&&"backcolor"].filter(s=>s).forEach(s=>e.push(s)),l==="DIV"?e:(e.push(l),Je(t,e).filter(s=>s!=null))},be=t=>{const e=document.getSelection();if(oe.range=null,e.rangeCount){let l=oe.range=e.getRangeAt(0),s=document.createRange(),n;s.selectNodeContents(t),s.setEnd(l.startContainer,l.startOffset),n=(s+"").length,oe.metaRange={start:n,end:n+(l+"").length}}},ce=t=>{let e=oe.metaRange,l=oe.range,s=document.getSelection(),n;if(l){if(e&&e.start!==e.end){let o=0,h=[t],f,a=!1,c=!1;for(n=document.createRange();!c&&(f=h.pop());)if(f.nodeType===3){let u=o+f.length;!a&&e.start>=o&&e.start<=u&&(n.setStart(f,e.start-o),a=!0),a&&e.end>=o&&e.end<=u&&(n.setEnd(f,e.end-o),c=!0),o=u}else{let u=f.childNodes,i=u.length;for(;i>0;)i-=1,h.push(u[i])}}s.removeAllRanges(),s.addRange(n||l)}},gt=t=>{const e=t.match(/<!--StartFragment-->(.*?)<!--EndFragment-->/);let l=e&&e[1]||t;return l=l.replace(/\r?\n|\r/g," ").replace(/<!--(.*?)-->/g,"").replace(new RegExp("<(/)*(meta|link|span|\\?xml:|st1:|o:|font|w:sdt)(.*?)>","gi"),"").replace(/<!\[if !supportLists\]>(.*?)<!\[endif\]>/gi,"").replace(/style="[^"]*"/gi,"").replace(/style='[^']*'/gi,"").replace(/&nbsp;/gi," ").replace(/>(\s+)</g,"><").replace(/class="[^"]*"/gi,"").replace(/class='[^']*'/gi,"").replace(/<[^/].*?>/g,s=>s.split(/[ >]/g)[0]+">").trim(),l=He(l),l},mt=t=>{const e=document.createDocumentFragment();for(;t.firstChild;){const l=t.removeChild(t.firstChild);e.appendChild(l)}t.parentNode.replaceChild(e,t)},Qe=(t,e)=>{Array.from(t).forEach(l=>{e.some(s=>s===l.tagName.toLowerCase())&&(l.children.length&&Qe(l.children,e),mt(l))})},ie=t=>Object.keys(t).map(e=>t[e]),vt=(t,e=[])=>{if(e&&e.length){const l={};return e.forEach(s=>{typeof s=="string"?l[s]=Object.assign({},t[s]):t[s.name]?l[s.name]=Object.assign(t[s.name],s):l[s.name]=Object.assign({},s)}),l}else return t},He=t=>(["style","script","applet","embed","noframes","noscript"].forEach(e=>{t=t.replace(new RegExp(`<${e}.*?${e}(.*?)>`,"gi"),"")}),t),Ge=(t,e)=>t===e?!0:t.parentElement?Ge(t.parentElement,e):!1,Se='<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M31.1 48.9l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9L15 50.4c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L11 41.8c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7c2.5-2.6 3.1-6.7 1.5-10l-5.9 5.9zM38.7 22.5l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2L42 38c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1c0 .1 0 .1 0 0z"></path><path d="M44.2 30.5c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.3-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.9 40.6c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM49.9 55.4h-8.5v-5h8.5v-8.9h5.2v8.9h8.5v5h-8.5v8.9h-5.2v-8.9z"></path></svg>',pt='<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M30.9 49.1l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9l-5.2-5.2c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L10.8 42c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7C38 50.5 38.6 46.3 37 43l-6.1 6.1zM38.5 22.7l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2-6.5 6.5c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1z"></path><path d="M44.1 30.7c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.2-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.8 40.8c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM41.3 55.8v-5h22.2v5H41.3z"></path></svg>',bt={viewHtml:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path fill="none" stroke="currentColor" stroke-width="8" stroke-miterlimit="10" d="M26.9 17.9L9 36.2 26.9 54M45 54l17.9-18.3L45 17.9"></path></svg>',title:"View HTML",result:function(){let t=P(this.references),e=P(this.state).actionObj,l=P(this.helper);l.showEditor=!l.showEditor,t.editor.style.display=l.showEditor?"block":"none",t.raw.style.display=l.showEditor?"none":"block",l.showEditor?t.editor.innerHTML=t.raw.value:t.raw.value=t.editor.innerHTML,setTimeout(()=>{Object.keys(e).forEach(s=>e[s].disabled=!l.showEditor),e.viewHtml.disabled=!1,e.viewHtml.active=!l.showEditor,this.state.update(s=>(s.actionBtns=ie(e),s.actionObj=e,s))})}},undo:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M61.2 51.2c0-5.1-2.1-9.7-5.4-13.1-3.3-3.3-8-5.4-13.1-5.4H26.1v-12L10.8 36l15.3 15.3V39.1h16.7c3.3 0 6.4 1.3 8.5 3.5 2.2 2.2 3.5 5.2 3.5 8.5h6.4z"></path></svg>',title:"Undo",result:()=>B("undo")},redo:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M10.8 51.2c0-5.1 2.1-9.7 5.4-13.1 3.3-3.3 8-5.4 13.1-5.4H46v-12L61.3 36 45.9 51.3V39.1H29.3c-3.3 0-6.4 1.3-8.5 3.5-2.2 2.2-3.5 5.2-3.5 8.5h-6.5z"></path></svg>',title:"Redo",result:()=>B("redo")},b:{icon:"<b>B</b>",title:"Bold",result:()=>B("bold")},i:{icon:"<i>I</i>",title:"Italic",result:()=>B("italic")},u:{icon:"<u>U</u>",title:"Underline",result:()=>B("underline")},strike:{icon:"<strike>S</strike>",title:"Strike-through",result:()=>B("strikeThrough")},sup:{icon:"A<sup>2</sup>",title:"Superscript",result:()=>B("superscript")},sub:{icon:"A<sub>2</sub>",title:"Subscript",result:()=>B("subscript")},h1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:()=>B("formatBlock","<H1>")},h2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:()=>B("formatBlock","<H2>")},p:{icon:"&#182;",title:"Paragraph",result:()=>B("formatBlock","<P>")},blockquote:{icon:"&#8220; &#8221;",title:"Quote",result:()=>B("formatBlock","<BLOCKQUOTE>")},ol:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M27 14h36v8H27zM27 50h36v8H27zM27 32h36v8H27zM11.8 15.8V22h1.8v-7.8h-1.5l-2.1 1 .3 1.3zM12.1 38.5l.7-.6c1.1-1 2.1-2.1 2.1-3.4 0-1.4-1-2.4-2.7-2.4-1.1 0-2 .4-2.6.8l.5 1.3c.4-.3 1-.6 1.7-.6.9 0 1.3.5 1.3 1.1 0 .9-.9 1.8-2.6 3.3l-1 .9V40H15v-1.5h-2.9zM13.3 53.9c1-.4 1.4-1 1.4-1.8 0-1.1-.9-1.9-2.6-1.9-1 0-1.9.3-2.4.6l.4 1.3c.3-.2 1-.5 1.6-.5.8 0 1.2.3 1.2.8 0 .7-.8.9-1.4.9h-.7v1.3h.7c.8 0 1.6.3 1.6 1.1 0 .6-.5 1-1.4 1-.7 0-1.5-.3-1.8-.5l-.4 1.4c.5.3 1.3.6 2.3.6 2 0 3.2-1 3.2-2.4 0-1.1-.8-1.8-1.7-1.9z"></path></svg>',title:"Ordered List",result:()=>B("insertOrderedList")},ul:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M27 14h36v8H27zM27 50h36v8H27zM9 50h9v8H9zM9 32h9v8H9zM9 14h9v8H9zM27 32h36v8H27z"></path></svg>',title:"Unordered List",result:()=>B("insertUnorderedList")},hr:{icon:"&#8213;",title:"Horizontal Line",result:()=>B("insertHorizontalRule")},left:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h36v8H9z"></path></svg>',title:"Justify left",result:()=>B("justifyLeft")},right:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM27 32h36v8H27z"></path></svg>',title:"Justify right",result:()=>B("justifyRight")},center:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM18 32h36v8H18z"></path></svg>',title:"Justify center",result:()=>B("justifyCenter")},justify:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h54v8H9z"></path></svg>',title:"Justify full",result:()=>B("justifyFull")},a:{icon:Se,title:"Insert link",result:function(){const t=P(this.state).actionObj,e=P(this.references);if(t.a.active){const l=window.getSelection(),s=document.createRange();s.selectNodeContents(document.getSelection().focusNode),l.removeAllRanges(),l.addRange(s),B("unlink"),t.a.title="Insert link",t.a.icon=Se,this.state.update(n=>(n.actionBtn=ie(t),n.actionObj=t,n))}else be(e.editor),e.modal.$set({show:!0,event:"linkUrl",title:"Insert link",label:"Url"}),P(this.helper).link||(this.helper.update(l=>(l.link=!0,l)),e.modal.$on("linkUrl",l=>{ce(e.editor),B("createLink",l.detail),t.a.title="Unlink",t.a.icon=pt,this.state.update(s=>(s.actionBtn=ie(t),s.actionObj=t,s))}))}},image:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M64 17v38H8V17h56m8-8H0v54h72V9z"></path><path d="M17.5 22C15 22 13 24 13 26.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM16 50h27L29.5 32zM36 36.2l8.9-8.5L60.2 50H45.9S35.6 35.9 36 36.2z"></path></svg>',title:"Image",result:function(){const t=P(this.references);be(t.editor),t.modal.$set({show:!0,event:"imageUrl",title:"Insert image",label:"Url"}),P(this.helper).image||(this.helper.update(e=>(e.image=!0,e)),t.modal.$on("imageUrl",e=>{ce(t.editor),B("insertImage",e.detail)}))}},forecolor:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M32 15h7.8L56 57.1h-7.9l-4-11.1H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1z"></path></svg>',title:"Text color",colorPicker:!0,result:function(){Ne.call(this,"foreColor")}},backcolor:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M36.5 22.3l-6.3 18.1H43l-6.3-18.1z"></path><path d="M9 8.9v54.2h54.1V8.9H9zm39.9 48.2L45 46H28.2l-3.9 11.1h-7.6L32.8 15h7.8l16.2 42.1h-7.9z"></path></svg>',title:"Background color",colorPicker:!0,result:function(){Ne.call(this,"backColor")}},removeFormat:{icon:'<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M58.2 54.6L52 48.5l3.6-3.6 6.1 6.1 6.4-6.4 3.8 3.8-6.4 6.4 6.1 6.1-3.6 3.6-6.1-6.1-6.4 6.4-3.7-3.8 6.4-6.4zM21.7 52.1H50V57H21.7zM18.8 15.2h34.1v6.4H39.5v24.2h-7.4V21.5H18.8v-6.3z"></path></svg>',title:"Remove format",result:function(){const t=P(this.references),e=window.getSelection();if(!e.toString().length){Qe(t.editor.children,this.removeFormatTags);const l=document.createRange();l.selectNodeContents(t.editor),e.removeAllRanges(),e.addRange(l)}B("removeFormat"),e.removeAllRanges()}}},Ne=function(t){const e=P(this.references);be(e.editor),e.colorPicker.$set({show:!0,event:t}),P(this.helper)[t]||(this.helper.update(l=>(l[t]=!0,l)),e.colorPicker.$on(t,l=>{let s=l.detail;if(s.modal){e.modal.$set({show:!0,event:`${t}Changed`,title:"Text color",label:t==="foreColor"?"Text color":"Background color"});const n=t;P(this.helper)[`${n}Modal`]||(P(this.helper)[`${n}Modal`]=!0,e.modal.$on(`${n}Changed`,o=>{let h=o.detail;ce(e.editor),B(n,h)}))}else ce(e.editor),B(t,s.color)}))};function xe(t){let e,l,s,n,o,h,f,a,c,u,i,g,_,O,v,C,H,r="Confirm",p,k,V="Cancel",z,x,j=t[2]&&Ae();return{c(){e=E("div"),l=L(),s=E("div"),n=E("div"),o=E("span"),h=re(t[3]),f=L(),a=E("form"),c=E("label"),u=E("input"),i=L(),g=E("span"),_=E("span"),O=re(t[4]),v=L(),j&&j.c(),C=L(),H=E("button"),H.textContent=r,p=L(),k=E("button"),k.textContent=V,this.h()},l(I){e=T(I,"DIV",{class:!0}),N(e).forEach(b),l=R(I),s=T(I,"DIV",{class:!0});var D=N(s);n=T(D,"DIV",{class:!0});var q=N(n);o=T(q,"SPAN",{class:!0});var Q=N(o);h=ae(Q,t[3]),Q.forEach(b),f=R(q),a=T(q,"FORM",{});var m=N(a);c=T(m,"LABEL",{class:!0});var y=N(c);u=T(y,"INPUT",{name:!0,class:!0}),i=R(y),g=T(y,"SPAN",{class:!0});var U=N(g);_=T(U,"SPAN",{class:!0});var K=N(_);O=ae(K,t[4]),K.forEach(b),v=R(U),j&&j.l(U),U.forEach(b),y.forEach(b),C=R(m),H=T(m,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),Z(H)!=="svelte-1mghl0k"&&(H.textContent=r),p=R(m),k=T(m,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),Z(k)!=="svelte-1yas1qa"&&(k.textContent=V),m.forEach(b),q.forEach(b),D.forEach(b),this.h()},h(){M(e,"class","cl-editor-overlay svelte-42yfje"),M(o,"class","modal-title svelte-42yfje"),M(u,"name","text"),M(u,"class","svelte-42yfje"),M(_,"class","svelte-42yfje"),M(g,"class","input-info svelte-42yfje"),M(c,"class","modal-label svelte-42yfje"),Le(c,"input-error",t[2]),M(H,"class","modal-button modal-submit svelte-42yfje"),M(H,"type","submit"),M(k,"class","modal-button modal-reset svelte-42yfje"),M(k,"type","reset"),M(n,"class","modal-box svelte-42yfje"),M(s,"class","cl-editor-modal svelte-42yfje")},m(I,D){S(I,e,D),S(I,l,D),S(I,s,D),w(s,n),w(n,o),w(o,h),w(n,f),w(n,a),w(a,c),w(c,u),t[11](u),Re(u,t[1]),w(c,i),w(c,g),w(g,_),w(_,O),w(g,v),j&&j.m(g,null),w(a,C),w(a,H),w(a,p),w(a,k),z||(x=[A(e,"click",t[8]),A(u,"keyup",t[9]),nt(t[6].call(null,u)),A(u,"input",t[12]),A(k,"click",t[8]),A(a,"submit",ot(t[13]))],z=!0)},p(I,D){D&8&&ke(h,I[3]),D&2&&u.value!==I[1]&&Re(u,I[1]),D&16&&ke(O,I[4]),I[2]?j||(j=Ae(),j.c(),j.m(g,null)):j&&(j.d(1),j=null),D&4&&Le(c,"input-error",I[2])},d(I){I&&(b(e),b(l),b(s)),t[11](null),j&&j.d(),z=!1,_e(x)}}}function Ae(t){let e,l="Required";return{c(){e=E("span"),e.textContent=l,this.h()},l(s){e=T(s,"SPAN",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1hsxkja"&&(e.textContent=l),this.h()},h(){M(e,"class","msg-error svelte-42yfje")},m(s,n){S(s,e,n)},d(s){s&&b(e)}}}function _t(t){let e,l=t[0]&&xe(t);return{c(){l&&l.c(),e=je()},l(s){l&&l.l(s),e=je()},m(s,n){l&&l.m(s,n),S(s,e,n)},p(s,[n]){s[0]?l?l.p(s,n):(l=xe(s),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:ge,o:ge,d(s){s&&b(e),l&&l.d(s)}}}function wt(t,e,l){let s=new ye,{show:n=!1}=e,{text:o=""}=e,{event:h=""}=e,{title:f=""}=e,{label:a=""}=e,{error:c=!1}=e,u={};const i=r=>{r.type=h.includes("Color")?"color":"text"};function g(){o?(s(h,o),_()):(l(2,c=!0),u.text.focus())}function _(){l(0,n=!1),l(1,o=""),l(2,c=!1)}function O(){l(2,c=!1)}function v(r){G[r?"unshift":"push"](()=>{u.text=r,l(5,u)})}function C(){o=this.value,l(1,o)}const H=r=>g();return t.$$set=r=>{"show"in r&&l(0,n=r.show),"text"in r&&l(1,o=r.text),"event"in r&&l(10,h=r.event),"title"in r&&l(3,f=r.title),"label"in r&&l(4,a=r.label),"error"in r&&l(2,c=r.error)},t.$$.update=()=>{t.$$.dirty&33&&n&&setTimeout(()=>{u.text.focus()})},[n,o,c,f,a,u,i,g,_,O,h,v,C,H]}class kt extends ue{constructor(e){super(),fe(this,e,wt,_t,he,{show:0,text:1,event:10,title:3,label:4,error:2})}get show(){return this.$$.ctx[0]}set show(e){this.$$set({show:e}),F()}get text(){return this.$$.ctx[1]}set text(e){this.$$set({text:e}),F()}get event(){return this.$$.ctx[10]}set event(e){this.$$set({event:e}),F()}get title(){return this.$$.ctx[3]}set title(e){this.$$set({title:e}),F()}get label(){return this.$$.ctx[4]}set label(e){this.$$set({label:e}),F()}get error(){return this.$$.ctx[2]}set error(e){this.$$set({error:e}),F()}}function De(t,e,l){const s=t.slice();return s[8]=e[l],s}function Ve(t){let e,l=(t[8].text||"")+"",s,n,o;function h(...f){return t[6](t[8],...f)}return{c(){e=E("button"),s=re(l),this.h()},l(f){e=T(f,"BUTTON",{type:!0,class:!0,style:!0});var a=N(e);s=ae(a,l),a.forEach(b),this.h()},h(){M(e,"type","button"),M(e,"class","color-picker-btn svelte-njq4pk"),J(e,"background-color",t[8].color)},m(f,a){S(f,e,a),w(e,s),n||(o=A(e,"click",h),n=!0)},p(f,a){t=f,a&2&&l!==(l=(t[8].text||"")+"")&&ke(s,l),a&2&&J(e,"background-color",t[8].color)},d(f){f&&b(e),n=!1,o()}}}function Mt(t){let e,l,s,n,o,h,f=pe(t[1]),a=[];for(let c=0;c<f.length;c+=1)a[c]=Ve(De(t,f,c));return{c(){e=E("div"),l=E("div"),s=L(),n=E("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=T(c,"DIV",{style:!0});var u=N(e);l=T(u,"DIV",{class:!0}),N(l).forEach(b),s=R(u),n=T(u,"DIV",{class:!0});var i=N(n);for(let g=0;g<a.length;g+=1)a[g].l(i);i.forEach(b),u.forEach(b),this.h()},h(){M(l,"class","color-picker-overlay svelte-njq4pk"),M(n,"class","color-picker-wrapper svelte-njq4pk"),J(e,"display",t[0]?"block":"none")},m(c,u){S(c,e,u),w(e,l),w(e,s),w(e,n);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(n,null);o||(h=A(l,"click",t[2]),o=!0)},p(c,[u]){if(u&10){f=pe(c[1]);let i;for(i=0;i<f.length;i+=1){const g=De(c,f,i);a[i]?a[i].p(g,u):(a[i]=Ve(g),a[i].c(),a[i].m(n,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=f.length}u&1&&J(e,"display",c[0]?"block":"none")},i:ge,o:ge,d(c){c&&b(e),qe(a,c),o=!1,h()}}}function Ht(t,e,l){const s=new ye;let{show:n=!1}=e,{btns:o=[]}=e,{event:h=""}=e,{colors:f=[]}=e;function a(){l(0,n=!1)}function c(i){s(h,i),a()}const u=(i,g)=>c(i);return t.$$set=i=>{"show"in i&&l(0,n=i.show),"btns"in i&&l(1,o=i.btns),"event"in i&&l(4,h=i.event),"colors"in i&&l(5,f=i.colors)},t.$$.update=()=>{t.$$.dirty&32&&l(1,o=f.map(i=>({color:i})).concat([{text:"#",modal:!0}]))},[n,o,a,c,h,f,u]}class Ct extends ue{constructor(e){super(),fe(this,e,Ht,Mt,he,{show:0,btns:1,event:4,colors:5})}}const yt=function(t){let e={actionBtns:[],actionObj:{}};const{subscribe:l,set:s,update:n}=Me(e);return{name:t,set:s,update:n,subscribe:l}},Et=yt;function Ue(t,e,l){const s=t.slice();return s[38]=e[l],s}function Pe(t){let e,l,s=t[38].icon+"",n,o,h,f,a,c;function u(...i){return t[24](t[38],...i)}return{c(){e=E("button"),l=new me(!1),n=L(),this.h()},l(i){e=T(i,"BUTTON",{type:!0,class:!0,title:!0});var g=N(e);l=ve(g,!1),n=R(g),g.forEach(b),this.h()},h(){l.a=n,M(e,"type","button"),M(e,"class",o="cl-button "+(t[38].active?"active":"")+" svelte-1a534py"),M(e,"title",h=t[38].title),e.disabled=f=t[38].disabled},m(i,g){S(i,e,g),l.m(s,e),w(e,n),a||(c=A(e,"click",u),a=!0)},p(i,g){t=i,g[0]&16&&s!==(s=t[38].icon+"")&&l.p(s),g[0]&16&&o!==(o="cl-button "+(t[38].active?"active":"")+" svelte-1a534py")&&M(e,"class",o),g[0]&16&&h!==(h=t[38].title)&&M(e,"title",h),g[0]&16&&f!==(f=t[38].disabled)&&(e.disabled=f)},d(i){i&&b(e),a=!1,c()}}}function Tt(t){let e,l,s,n,o,h,f,a,c,u,i,g,_,O=pe(t[4].actionBtns),v=[];for(let r=0;r<O.length;r+=1)v[r]=Pe(Ue(t,O,r));let C={};a=new kt({props:C}),t[31](a);let H={colors:t[2]};return u=new Ct({props:H}),t[32](u),{c(){e=E("div"),l=E("div");for(let r=0;r<v.length;r+=1)v[r].c();s=L(),n=E("div"),o=L(),h=E("textarea"),f=L(),te(a.$$.fragment),c=L(),te(u.$$.fragment),this.h()},l(r){e=T(r,"DIV",{class:!0});var p=N(e);l=T(p,"DIV",{class:!0});var k=N(l);for(let z=0;z<v.length;z+=1)v[z].l(k);k.forEach(b),s=R(p),n=T(p,"DIV",{id:!0,class:!0,style:!0,contenteditable:!0});var V=N(n);V.forEach(b),o=R(p),h=T(p,"TEXTAREA",{class:!0,style:!0}),N(h).forEach(b),f=R(p),le(a.$$.fragment,p),c=R(p),le(u.$$.fragment,p),p.forEach(b),this.h()},h(){M(l,"class","cl-actionbar svelte-1a534py"),M(n,"id",t[1]),M(n,"class","cl-content svelte-1a534py"),J(n,"height",t[0]),M(n,"contenteditable","true"),M(h,"class","cl-textarea svelte-1a534py"),J(h,"max-height",t[0]),J(h,"min-height",t[0]),M(e,"class","cl svelte-1a534py")},m(r,p){S(r,e,p),w(e,l);for(let k=0;k<v.length;k+=1)v[k]&&v[k].m(l,null);w(e,s),w(e,n),t[25](n),w(e,o),w(e,h),t[30](h),w(e,f),se(a,e,null),w(e,c),se(u,e,null),t[33](e),i=!0,g||(_=[A(window,"click",t[23]),A(n,"input",t[26]),A(n,"mouseup",t[27]),A(n,"keyup",t[28]),A(n,"paste",t[29])],g=!0)},p(r,p){if(p[0]&272){O=pe(r[4].actionBtns);let z;for(z=0;z<O.length;z+=1){const x=Ue(r,O,z);v[z]?v[z].p(x,p):(v[z]=Pe(x),v[z].c(),v[z].m(l,null))}for(;z<v.length;z+=1)v[z].d(1);v.length=O.length}(!i||p[0]&2)&&M(n,"id",r[1]),(!i||p[0]&1)&&J(n,"height",r[0]),(!i||p[0]&1)&&J(h,"max-height",r[0]),(!i||p[0]&1)&&J(h,"min-height",r[0]);const k={};a.$set(k);const V={};p[0]&4&&(V.colors=r[2]),u.$set(V)},i(r){i||(W(a.$$.fragment,r),W(u.$$.fragment,r),i=!0)},o(r){X(a.$$.fragment,r),X(u.$$.fragment,r),i=!1},d(r){r&&b(e),qe(v,r),t[25](null),t[30](null),t[31](null),ne(a),t[32](null),ne(u),t[33](null),g=!1,_e(_)}}}const Fe=[];function zt(t,e,l){let s,n,o,h=new ye,{actions:f=[]}=e,{height:a="300px"}=e,{html:c=""}=e,{contentId:u=""}=e,{colors:i=["#ffffff","#000000","#eeece1","#1f497d","#4f81bd","#c0504d","#9bbb59","#8064a2","#4bacc6","#f79646","#ffff00","#f2f2f2","#7f7f7f","#ddd9c3","#c6d9f0","#dbe5f1","#f2dcdb","#ebf1dd","#e5e0ec","#dbeef3","#fdeada","#fff2ca","#d8d8d8","#595959","#c4bd97","#8db3e2","#b8cce4","#e5b9b7","#d7e3bc","#ccc1d9","#b7dde8","#fbd5b5","#ffe694","#bfbfbf","#3f3f3f","#938953","#548dd4","#95b3d7","#d99694","#c3d69b","#b2a2c7","#b7dde8","#fac08f","#f2c314","#a5a5a5","#262626","#494429","#17365d","#366092","#953734","#76923c","#5f497a","#92cddc","#e36c09","#c09100","#7f7f7f","#0c0c0c","#1d1b10","#0f243e","#244061","#632423","#4f6128","#3f3151","#31859b","#974806","#7f6000"]}=e,{removeFormatTags:g=["h1","h2","blockquote"]}=e,_=Me({foreColor:!1,backColor:!1,foreColorModal:!1,backColorModal:!1,image:!1,link:!1,showEditor:!0,blurActive:!1});we(t,_,d=>l(34,n=d)),Fe.push({});let O="editor_"+Fe.length,v=Et(O);we(t,v,d=>l(4,o=d));let C=Me({});we(t,C,d=>l(3,s=d)),Y(v,o.actionObj=vt(bt,f),o);let H={exec:x,getHtml:j,getText:I,setHtml:D,saveRange:q,restoreRange:Q,helper:_,references:C,state:v,removeFormatTags:g};it(O,H),rt(()=>{Y(v,o.actionBtns=ie(o.actionObj),o),D(c)});function r(d){s.editor.focus(),q(s.editor),Q(s.editor),d.result.call(H),p()}function p(d){const $=d?[]:Je(document.getSelection().focusNode);Object.keys(o.actionObj).forEach(ee=>Y(v,o.actionObj[ee].active=!1,o)),$.forEach(ee=>(o.actionObj[ee.toLowerCase()]||{}).active=!0),Y(v,o.actionBtns=ie(o.actionObj),o),v.set(o)}function k(d){d.preventDefault(),x("insertHTML",d.clipboardData.getData("text/html")?gt(d.clipboardData.getData("text/html")):d.clipboardData.getData("text"))}function V(d){h("change",d)}function z(d){!Ge(d.target,s.editorWrapper)&&n.blurActive&&h("blur",d),Y(_,n.blurActive=!0,n)}function x(d,$){B(d,$)}function j(d){return d?He(s.editor.innerHTML):s.editor.innerHTML}function I(){return s.editor.innerText}function D(d,$){const ee=$?He(d):d||"";Y(C,s.editor.innerHTML=ee,s),Y(C,s.raw.value=ee,s)}function q(){be(s.editor)}function Q(){ce(s.editor)}const m=s,y=d=>z(d),U=(d,$)=>r(d);function K(d){G[d?"unshift":"push"](()=>{s.editor=d,C.set(s)})}const de=d=>V(d.target.innerHTML),Ke=()=>p(),We=()=>p(),Xe=d=>k(d);function Ye(d){G[d?"unshift":"push"](()=>{s.raw=d,C.set(s)})}function Ze(d){G[d?"unshift":"push"](()=>{s.modal=d,C.set(s)})}function $e(d){G[d?"unshift":"push"](()=>{s.colorPicker=d,C.set(s)})}function et(d){G[d?"unshift":"push"](()=>{s.editorWrapper=d,C.set(s)})}return t.$$set=d=>{"actions"in d&&l(13,f=d.actions),"height"in d&&l(0,a=d.height),"html"in d&&l(14,c=d.html),"contentId"in d&&l(1,u=d.contentId),"colors"in d&&l(2,i=d.colors),"removeFormatTags"in d&&l(15,g=d.removeFormatTags)},[a,u,i,s,o,_,v,C,r,p,k,V,z,f,c,g,x,j,I,D,q,Q,m,y,U,K,de,Ke,We,Xe,Ye,Ze,$e,et]}class Ce extends ue{constructor(e){super(),fe(this,e,zt,Tt,he,{actions:13,height:0,html:14,contentId:1,colors:2,removeFormatTags:15,exec:16,getHtml:17,getText:18,setHtml:19,saveRange:20,restoreRange:21,refs:22},null,[-1,-1])}get actions(){return this.$$.ctx[13]}set actions(e){this.$$set({actions:e}),F()}get height(){return this.$$.ctx[0]}set height(e){this.$$set({height:e}),F()}get html(){return this.$$.ctx[14]}set html(e){this.$$set({html:e}),F()}get contentId(){return this.$$.ctx[1]}set contentId(e){this.$$set({contentId:e}),F()}get colors(){return this.$$.ctx[2]}set colors(e){this.$$set({colors:e}),F()}get removeFormatTags(){return this.$$.ctx[15]}set removeFormatTags(e){this.$$set({removeFormatTags:e}),F()}get exec(){return this.$$.ctx[16]}get getHtml(){return this.$$.ctx[17]}get getText(){return this.$$.ctx[18]}get setHtml(){return this.$$.ctx[19]}get saveRange(){return this.$$.ctx[20]}get restoreRange(){return this.$$.ctx[21]}get refs(){return this.$$.ctx[22]}}function Bt(t){let e,l,s,n;return s=new Ce({props:{html:t[2]}}),s.$on("change",t[7]),{c(){e=new me(!1),l=L(),te(s.$$.fragment),this.h()},l(o){e=ve(o,!1),l=R(o),le(s.$$.fragment,o),this.h()},h(){e.a=l},m(o,h){e.m(t[2],o,h),S(o,l,h),se(s,o,h),n=!0},p(o,h){(!n||h&4)&&e.p(o[2]);const f={};h&4&&(f.html=o[2]),s.$set(f)},i(o){n||(W(s.$$.fragment,o),n=!0)},o(o){X(s.$$.fragment,o),n=!1},d(o){o&&(e.d(),b(l)),ne(s,o)}}}function jt(t){let e,l="show daisyui modal",s,n,o,h,f,a,c,u,i='<form method="dialog"><button class="btn">Close</button></form>',g,_,O="show svelte modal",v,C,H,r,p,k,V,z,x,j,I,D;a=new Ce({props:{html:t[2]}}),a.$on("change",t[4]);function q(m){t[8](m)}let Q={$$slots:{default:[Bt]},$$scope:{ctx:t}};return t[1]!==void 0&&(Q.showModal=t[1]),C=new dt({props:Q}),G.push(()=>ct(C,"showModal",q)),x=new Ce({props:{html:t[2]}}),x.$on("change",t[9]),{c(){e=E("button"),e.textContent=l,s=L(),n=E("dialog"),o=E("div"),h=new me(!1),f=L(),te(a.$$.fragment),c=L(),u=E("div"),u.innerHTML=i,g=L(),_=E("button"),_.textContent=O,v=L(),te(C.$$.fragment),r=re(`

base: `),p=re(Oe),k=L(),V=new me(!1),z=L(),te(x.$$.fragment),this.h()},l(m){e=T(m,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-131ewty"&&(e.textContent=l),s=R(m),n=T(m,"DIALOG",{id:!0,class:!0});var y=N(n);o=T(y,"DIV",{class:!0});var U=N(o);h=ve(U,!1),f=R(U),le(a.$$.fragment,U),c=R(U),u=T(U,"DIV",{class:!0,"data-svelte-h":!0}),Z(u)!=="svelte-ij97s3"&&(u.innerHTML=i),U.forEach(b),y.forEach(b),g=R(m),_=T(m,"BUTTON",{"data-svelte-h":!0}),Z(_)!=="svelte-nvka2l"&&(_.textContent=O),v=R(m),le(C.$$.fragment,m),r=ae(m,`

base: `),p=ae(m,Oe),k=R(m),V=ve(m,!1),z=R(m),le(x.$$.fragment,m),this.h()},h(){M(e,"class","btn"),h.a=f,M(u,"class","modal-action"),M(o,"class","modal-box"),M(n,"id","my_modal_1"),M(n,"class","modal"),V.a=z},m(m,y){S(m,e,y),S(m,s,y),S(m,n,y),w(n,o),h.m(t[2],o),w(o,f),se(a,o,null),w(o,c),w(o,u),t[5](n),S(m,g,y),S(m,_,y),S(m,v,y),se(C,m,y),S(m,r,y),S(m,p,y),S(m,k,y),V.m(t[2],m,y),S(m,z,y),se(x,m,y),j=!0,I||(D=[A(e,"click",t[3]),A(_,"click",t[6])],I=!0)},p(m,[y]){(!j||y&4)&&h.p(m[2]);const U={};y&4&&(U.html=m[2]),a.$set(U);const K={};y&2052&&(K.$$scope={dirty:y,ctx:m}),!H&&y&2&&(H=!0,K.showModal=m[1],at(()=>H=!1)),C.$set(K),(!j||y&4)&&V.p(m[2]);const de={};y&4&&(de.html=m[2]),x.$set(de)},i(m){j||(W(a.$$.fragment,m),W(C.$$.fragment,m),W(x.$$.fragment,m),j=!0)},o(m){X(a.$$.fragment,m),X(C.$$.fragment,m),X(x.$$.fragment,m),j=!1},d(m){m&&(b(e),b(s),b(n),b(g),b(_),b(v),b(r),b(p),b(k),V.d(),b(z)),ne(a),t[5](null),ne(C,m),ne(x,m),I=!1,_e(D)}}}function Lt(t,e,l){let s,n=!1,o="<div>try bold any word multiple times</div><p>try bold this paragraph multiple times</p>";const h=()=>s.showModal(),f=_=>l(2,o=_.detail);function a(_){G[_?"unshift":"push"](()=>{s=_,l(0,s)})}const c=()=>l(1,n=!0),u=_=>l(2,o=_.detail);function i(_){n=_,l(1,n)}return[s,n,o,h,f,a,c,u,i,_=>l(2,o=_.detail)]}class St extends ue{constructor(e){super(),fe(this,e,Lt,jt,he,{})}}export{St as component};
