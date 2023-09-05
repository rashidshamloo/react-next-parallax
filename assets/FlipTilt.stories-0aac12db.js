import{r as l,R as Ft}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var $t={exports:{}},Be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gt=l,Vt=Symbol.for("react.element"),zt=Symbol.for("react.fragment"),Ht=Object.prototype.hasOwnProperty,Wt=Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dt={key:!0,ref:!0,__self:!0,__source:!0};function Ot(e,t,n){var a,d={},s=null,h=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(h=t.ref);for(a in t)Ht.call(t,a)&&!Dt.hasOwnProperty(a)&&(d[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)d[a]===void 0&&(d[a]=t[a]);return{$$typeof:Vt,type:e,key:s,ref:h,props:d,_owner:Wt.current}}Be.Fragment=zt;Be.jsx=Ot;Be.jsxs=Ot;$t.exports=Be;var w=$t.exports,Lt={exports:{}},Se={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at;function Bt(){if(at)return Se;at=1;var e=Ft,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function h(p,f,k){var y,S={},v=null,$=null;k!==void 0&&(v=""+k),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&($=f.ref);for(y in f)a.call(f,y)&&!s.hasOwnProperty(y)&&(S[y]=f[y]);if(p&&p.defaultProps)for(y in f=p.defaultProps,f)S[y]===void 0&&(S[y]=f[y]);return{$$typeof:t,type:p,key:v,ref:$,props:S,_owner:d.current}}return Se.Fragment=n,Se.jsx=h,Se.jsxs=h,Se}Lt.exports=Bt();var H=Lt.exports;const X=(e,t,n)=>e<t?t:e>n?n:e,Zt=(e,t,n)=>{let a=0;return t==="top"?a=(e.offsetY*2-1)*-1:t==="bottom"?a=(e.offsetY-.5)*2:t==="left"?a=(e.offsetX*2-1)*-1:t==="right"?a=(e.offsetX-.5)*2:t==="all"&&(a=Math.max(Math.abs(e.offsetX-.5)*2,Math.abs(e.offsetY-.5)*2)),(a*n).toFixed(2)},Qt=(e,t,n)=>{let a=e.offsetX,d=e.offsetY;n||(a=1-a,d=1-d);let s="translateX(0%) translateY(0%)";return t==="top"?s=`translateX( ${a*50}% )`:t==="bottom"?s=`translateX( ${a*50}% ) translateY(50%)`:t==="left"?s=`translateY( ${d*50}% )`:t==="right"?s=`translateX(50%) translateY( ${d*50}% ) `:t==="all"&&(s=`translateX(${(a-.5)*50}%) translateY(${(d-.5)*50}%) `),s},Kt=(e,t,n)=>{let a=e.offsetX,d=e.offsetY;t==="top-right"&&(a=1-a),t==="bottom-left"&&(d=1-d),t==="bottom-right"&&(a=1-a,d=1-d);let s=0;return n?s=((a+d)*(3/2)-1)*100:s=((a+d)*(-3/2)+.5)*100,`translateX(${s}%)`},rt=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},He=(e,t)=>{if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let n,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!He(e[a],t[a]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;for(a of e.entries())if(!He(a[1],t.get(a[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=e.length)return!1;for(a=n;a--!==0;)if(e[a]!==e[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const d=Object.keys(e);if(n=d.length,n!==Object.keys(t).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,d[a]))return!1;for(a=n;a--!==0;){const s=d[a];if(!(s==="_owner"&&e.$$typeof)&&!He(e[s],t[s]))return!1}return!0}return e!==e&&t!==t},Jt=l.forwardRef(({width:e,height:t,borderRadius:n,perspective:a="1000px",scale:d=1,shadowEnable:s=!1,shadow:h="0 0 1rem rgba(0,0,0,0.5)",shadowType:p="box",lineGlareEnable:f=!0,lineGlareBlurEnable:k=!0,lineGlareBlurAmount:y="4px",lineGlareMaxOpacity:S=.1,lineGlareWidthPercent:v=10,lineGlareMixBlendMode:$="normal",lineGlareColor:Re="white",lineGlareReverse:U=!1,lineGlareDirection:ee="to-bottom-right",lineGlareHoverPosition:je="top-left",spotGlareEnable:Ce=!0,spotGlareSizePercent:ne=200,spotGlareMaxOpacity:oe=.5,spotGlareMixBlendMode:ye="normal",spotGlarePosition:D="top",spotGlareColor:Ie="white",spotGlareReverse:he=!1,tiltMaxAngleX:R=20,tiltMaxAngleY:j=20,tiltReverse:le=!1,tiltReset:B=!0,initialAngleX:C=0,initialAngleY:I=0,disableScrollOnTouch:P=!0,style:Ze,tiltStyle:_,tiltClass:Qe,tiltProps:ie,gyroMaxAngleX:b=0,gyroMaxAngleY:O=0,gyroReverse:_e=!1,disabled:g=!1,disabledFilter:Ye="grayscale(1) brightness(125%)",CSSTransition:te="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:Z,fullPageListening:E=!1,controlElement:L,controlElementOnly:se=!1,preserve3dEnable:Y=!0,testIdEnable:x=!1,onTilt:ce,onReset:ue,onMouseEnter:o,onMouseMove:i,onMouseLeave:u,onTouchStart:N,onTouchMove:q,onTouchEnd:A,children:$e,...F},Ke)=>{const M=l.useRef(),ve=l.useRef(!1),de=!E&&(!L||L&&!se),Q=l.useRef(null),z=l.useRef(null),G=l.useRef(null),K=l.useRef(null),Tt=l.useCallback(({children:r})=>H.jsx(H.Fragment,{children:r}),[]),Xt=Z||Tt;f&&(v=X(v,0,50)/2),Ce&&(ne=ne<0?0:ne/2),R=X(R,0,90),j=X(j,0,90),b=X(b,0,90),O=X(O,0,90),C&&(C=X(C,-R,R)),I&&(I=X(I,-j,j));const Oe=l.useMemo(()=>f?(100-v)/2:0,[f,v]),et=l.useMemo(()=>f?Oe+v:0,[f,v,Oe]),T=l.useCallback((r=!0)=>{requestAnimationFrame(()=>{z.current&&(z.current.style.willChange=r?"transform":""),G.current&&(G.current.style.willChange=r?"transform, opacity":""),K.current&&(K.current.style.willChange=r?"transform":"")})},[]),V=l.useCallback((r=!0)=>{requestAnimationFrame(()=>{if(p==="box")z.current&&s&&(z.current.style.boxShadow=r?h:"");else if(Q.current&&s){const c=Q.current.style.filter.replace(/(drop-shadow?\(.*?\))(?=\s[a-z].*?\(.*?\)|\s*$)/g,"");Q.current.style.filter=r?c+` drop-shadow(${h})`:c}})},[h,s,p]),fe=l.useCallback(()=>{if(!Q.current||!G.current||!M.current)return;const r=Zt(M.current,D,oe),c=Qt(M.current,D,he);requestAnimationFrame(()=>{G.current&&(G.current.style.opacity=r,G.current.style.transform=c)})},[D,oe,he]),pe=l.useCallback(()=>{if(!Q.current||!K.current||!M.current)return;const r=Kt(M.current,je,U);requestAnimationFrame(()=>{K.current&&(K.current.style.transform=r)})},[je,U]),ae=l.useCallback((r=!0)=>{if(!Q.current||!M.current)return{angleX:0,angleY:0};let c=-(M.current.offsetY-.5)*2*R,m=(M.current.offsetX-.5)*2*j;return le&&r&&(c=-c,m=-m),{angleX:c,angleY:m}},[R,j,le]),tt=l.useCallback(r=>{const c=(r.angleY/j+1)/2,m=(-r.angleX/R+1)/2;M.current={offsetX:c,offsetY:m}},[R,j]),me=l.useCallback((r,c=!0,m=!1)=>{const Ee=c?d:1;requestAnimationFrame(()=>{z.current&&(z.current.style.transform=`rotateX(${r.angleX}deg) rotateY(${r.angleY}deg) scale3d(${Ee},${Ee},${Ee})`)}),ce&&ce({angleX:r.angleX,angleY:r.angleY},m)},[ce,d]),re=l.useCallback((r,c=!1,m=!1)=>{tt(r),me(r,c,m),V(c),pe(),fe()},[tt,me,V,pe,fe]),J=l.useCallback(()=>{ue&&ue(),C||I?re({angleX:C||0,angleY:I||0}):(M.current=void 0,requestAnimationFrame(()=>{K.current&&(K.current.style.transform=`translateX(${U?"50%":"-100%"})`),G.current&&(G.current.style.transform="translateX(0%) translateY(0%)",G.current.style.opacity="0"),z.current&&(z.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[C,I,U,ue,re]),Le=l.useCallback((r,c)=>{if(!c)return;if(E&&c instanceof Document){M.current={offsetX:r.x/window.innerWidth,offsetY:r.y/window.innerHeight};return}const m=c.getBoundingClientRect();if(!m.width||!m.height)return;const Ee=X(r.x,m.left,m.right),Pt=X(r.y,m.top,m.bottom),Nt=(Ee-m.left)/m.width,qt=(Pt-m.top)/m.height;M.current={offsetX:Nt,offsetY:qt}},[E]);l.useImperativeHandle(Ke,()=>({tilt:re,reset:J,angle:()=>ae(!1),updateWillChange:T,element:Q.current}),[re,J,T,ae]);const ge=l.useCallback(()=>{g||(ve.current=!0,T(),V())},[g,V,T]),xe=l.useCallback(()=>{g||(P&&!E&&(typeof P=="boolean"?document.body.style.overflow="hidden":P.style.overflow="hidden"),ve.current=!0,T(),V())},[P,g,E,V,T]),be=l.useCallback(r=>{g||(Le({x:r.clientX,y:r.clientY},r.currentTarget),me(ae()),pe(),fe())},[g,ae,Le,me,pe,fe]),we=l.useCallback(r=>{if(g)return;const c=r.changedTouches[0];c&&(Le({x:c.clientX,y:c.clientY},r.currentTarget),me(ae()),pe(),fe())},[g,ae,Le,me,pe,fe]),ke=l.useCallback(()=>{g||(ve.current=!1,T(!1),V(!1),B&&J())},[g,J,B,V,T]),Me=l.useCallback(()=>{g||(P&&!E&&(typeof P=="boolean"?document.body.style.overflow="":P.style.overflow=""),ve.current=!1,T(!1),V(!1),B&&J())},[P,g,E,J,B,V,T]);l.useEffect(()=>{if(!L&&!E)return;let r;E||!L?r=[document]:r=Array.isArray(L)?L:[L];for(let c of r){const m=rt(c);m&&(c=m,c.addEventListener("mouseenter",ge),c.addEventListener("mousemove",be),c.addEventListener("mouseleave",ke),c.addEventListener("touchstart",xe,{passive:!0}),c.addEventListener("touchmove",we,{passive:!0}),c.addEventListener("touchend",Me,{passive:!0}))}return()=>{for(let c of r){const m=rt(c);m&&(c=m,c.removeEventListener("mouseenter",ge),c.removeEventListener("mousemove",be),c.removeEventListener("mouseleave",ke),c.removeEventListener("touchstart",xe),c.removeEventListener("touchmove",we),c.removeEventListener("touchend",Me))}}},[L,ge,be,ke,xe,we,Me,E]);const Je=l.useCallback(r=>{if(ve.current||r.beta===null&&r.gamma===null)return;let c=b&&r.beta?X(-r.beta,-b,b):C||0,m=O&&r.gamma?X(r.gamma,-O,O):I||0;_e&&(c=-c,m=-m),re({angleX:c,angleY:m},!1,!0)},[b,O,C,I,_e,re]);return l.useEffect(()=>{if(!(!b&&!O))return window.addEventListener("deviceorientation",Je),()=>window.removeEventListener("deviceorientation",Je)},[b,O,Je,T]),H.jsx("div",{ref:r=>{r&&(Q.current=r,M.current&&(g?J():re(ae())),(C||I)&&!M.current&&J())},"data-testid":x?"container":void 0,style:Object.assign({display:"inline-block",verticalAlign:"middle",width:e,height:t,borderRadius:n,perspective:a,transformStyle:Y?"preserve-3d":void 0,backfaceVisibility:"hidden",filter:g?Ye:void 0,transition:p==="drop"?te:void 0},Ze),onMouseEnter:de?o?r=>{ge(),o(r)}:ge:o,onTouchStart:de?N?r=>{xe(),N(r)}:xe:N,onMouseMove:de?i?r=>{be(r),i(r)}:be:i,onTouchMove:de?q?r=>{we(r),q(r)}:we:q,onMouseLeave:de?u?r=>{ke(),u(r)}:ke:u,onTouchEnd:de?A?r=>{Me(),A(r)}:Me:A,...F,children:H.jsx(Xt,{children:H.jsxs("div",{ref:z,"data-testid":x?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:n,transformStyle:Y?"preserve-3d":void 0,backfaceVisibility:"hidden",transition:te,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},_),className:Qe,...ie,children:[$e,Ce&&H.jsx("div",{"data-testid":x?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:n,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:ye},children:H.jsx("div",{ref:G,"data-testid":x?"spot-glare":void 0,style:{position:"absolute",left:D==="all"?"-50%":"-100%",top:D==="all"?"-50%":"-100%",width:"200%",height:"200%",transition:te,backgroundImage:`radial-gradient(${Ie}, transparent ${ne}%)`,transform:"translateX(0%) translateY(0%)",opacity:"0"}})}),f&&H.jsx("div",{"data-testid":x?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:n,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:$},children:H.jsx("div",{"data-testid":x?"line-glare":void 0,ref:K,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:k?`blur(${y})`:"",transition:te,opacity:String(S),transform:`translateX(${U?"50%":"-100%"})`,backgroundImage:`linear-gradient(${ee==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${Oe}%, ${Re} calc(${Oe}% + 1px), ${Re} ${et}%, transparent calc(${et}% + 1px), transparent 0%)`}})})]})})})}),At=l.memo(Jt,(e,t)=>He(e,t));At.displayName="Tilt";const nt=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},Ut=(e,t)=>{const n=e.split(t);for(const s of n)if(isNaN(Number(s)))return;const a=n.length>1?Number(n[0]):0,d=n.length>1?Number(n[1]):Number(n[0]);return[a,d]},Ue=(e,t,n)=>{e[t]=n},ea=(e,t,n,a,d,s,h)=>{const p={element:e,transformInitial:e.style.transform};for(const f of t){const k=e.getAttribute(`${n}-${f}`);if(k)switch(f){case"offset":{const y=s==="all"||s==="offset";p.offset=Number(k)*h.offset,y&&(p.offset*=-1),p.transformInitial=p.transformInitial.replace(/translate[XY3d]*\([^)]*\)/g,"");break}case"opacity":case"scale":case"rotation":case"skew":{const y=Ut(k,a);if(!y)continue;const S=s==="all"||s==="all-except-offset"||s==="opacity"&&f==="opacity"||s==="scale"&&f==="scale"||s==="rotation"&&f==="rotation"||s==="skew"&&f==="skew";let v=S?y[1]:y[0],$=S?y[0]:y[1];h[f]!==1&&(v*=h[f],$*=h[f]),Ue(p,f+"Initial",d==="center-to-edge"?v:v+($-v)/2),Ue(p,f+"Start",v),Ue(p,f+"End",$),f==="scale"?p.transformInitial=p.transformInitial.replace(/scale[XY3d]*\([^)]*\)/g,""):f==="rotation"?p.transformInitial=p.transformInitial.replace(/rotate[Z3d]*\([^)]*\)/g,""):f==="skew"&&(p.transformInitial=p.transformInitial.replace(/skew[XY3d]*\([^)]*\)/g,""));break}}}return p},Ae=(e,t,n,a,d,s)=>{if(s==="center-to-edge"){const h=t?Math.abs(e.angleX)/t:0,p=n?Math.abs(e.angleY)/n:0;return Math.max(h,p)*(d-a)+a}else{const h=t?e.angleX/t:0,p=n?e.angleY/n:0;return s==="edge-to-edge-x"?(p+1)/2*(d-a)+a:s==="edge-to-edge-y"?(-h+1)/2*(d-a)+a:((-h+p)/2+1)/2*(d-a)+a}},We=(e,t)=>{if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let n,a;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!We(e[a],t[a]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;for(a of e.entries())if(!We(a[1],t.get(a[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=e.length)return!1;for(a=n;a--!==0;)if(e[a]!==e[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const d=Object.keys(e);if(n=d.length,n!==Object.keys(t).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,d[a]))return!1;for(a=n;a--!==0;){const s=d[a];if(!(s==="_owner"&&e.$$typeof)&&!We(e[s],t[s]))return!1}return!0}return e!==e&&t!==t},ta=l.forwardRef(({overflowHiddenEnable:e=!0,animationMode:t="center-to-edge",animationReverse:n="none",offsetMultiplier:a=1,opacityMultiplier:d=1,scaleMultiplier:s=1,rotationMultiplier:h=1,skewMultiplier:p=1,disabled:f=!1,fullPageListening:k,controlElement:y,controlElementOnly:S,perspective:v="1200px",scale:$=1.05,shadowEnable:Re=!0,shadow:U="0 0 1.5rem rgba(0, 0, 0, 0.5)",CSSTransition:ee="all 0.3s ease-out",spotGlareSizePercent:je=100,spotGlarePosition:Ce="all",children:ne,tiltMaxAngleX:oe=20,tiltMaxAngleY:ye=20,gyroMaxAngleX:D=0,gyroMaxAngleY:Ie=0,tiltStyle:he={},onMouseEnter:R,onMouseLeave:j,onTouchStart:le,onTouchEnd:B,onTilt:C,onReset:I,...P},Ze)=>{const[_,Qe]=l.useState([]),ie=!k&&(!y||y&&!S),b=l.useRef(null),O="data-parallax",_e=";",g=l.useMemo(()=>["offset","opacity","rotation","scale","skew"],[]),Ye=g.map(o=>`[${O}-${o}]`).join(", "),te=l.useMemo(()=>({offset:a,opacity:d,scale:s,rotation:h,skew:p}),[a,d,h,s,p]),Z=l.useCallback((o=!0)=>{requestAnimationFrame(()=>{for(const i of _)if(!o)i.element.style.willChange="";else{const u=[];(i.offset||i.opacityInitial!==void 0||i.scaleInitial!==void 0||i.rotationInitial!==void 0||i.skewInitial!==void 0)&&u.push("transform"),i.opacityInitial!==void 0&&u.push("opacity"),i.element.style.willChange=u.join(", ")}})},[_]),E=l.useCallback((o,i=!1)=>{for(const u of _){const N=i?D:oe,q=i?Ie:ye;let A="",$e=u.opacityInitial;if(u.offset){const F=q?o.angleY/q*u.offset:0,Ke=N?-o.angleX/N*u.offset:0;A+=`translate(${F}%, ${Ke}%)`}if(u.rotationStart!==void 0&&u.rotationEnd!==void 0){const F=Ae(o,N,q,u.rotationStart,u.rotationEnd,t);A+=` rotate(${F}deg)`}if(u.scaleStart!==void 0&&u.scaleEnd!==void 0){const F=Ae(o,N,q,u.scaleStart,u.scaleEnd,t);A+=` scale(${F})`}if(u.skewStart!==void 0&&u.skewEnd!==void 0){const F=Ae(o,N,q,u.skewStart,u.skewEnd,t);A+=` skew(${F}deg, ${F}deg)`}u.opacityStart!==void 0&&u.opacityEnd!==void 0&&($e=Ae(o,N,q,u.opacityStart,u.opacityEnd,t)),u.transformInitial&&(A+=" "+u.transformInitial),requestAnimationFrame(()=>{A&&(u.element.style.transform=A),u.opacityStart!==void 0&&u.opacityEnd!==void 0&&(u.element.style.opacity=String($e))})}},[_,t,oe,ye,D,Ie]),L=l.useCallback(()=>{requestAnimationFrame(()=>{for(const o of _)o.element.style.transition=ee})},[ee,_]),se=l.useCallback(()=>{for(const o of _){let i="";o.offset&&(i+="translate(0%, 0%)"),o.rotationInitial!==void 0&&(i+=` rotate(${o.rotationInitial}deg)`),o.scaleInitial!==void 0&&(i+=` scale(${o.scaleInitial})`),o.skewInitial!==void 0&&(i+=` skew(${o.skewInitial}deg, ${o.skewInitial}deg)`),o.transformInitial&&(i+=" "+o.transformInitial),requestAnimationFrame(()=>{i&&(o.element.style.transform=i),o.opacityInitial!==void 0&&(o.element.style.opacity=String(o.opacityInitial))})}},[_]);l.useImperativeHandle(Ze,()=>b.current?{...b.current,updateWillChange:(o=!0)=>{var i;(i=b.current)==null||i.updateWillChange(o),Z(o)}}:{element:null,angle:()=>({angleX:0,angleY:0}),reset:()=>{},tilt:()=>{},updateWillChange:()=>{}},[Z,$]);const Y=l.useCallback(()=>{f||Z()},[f,Z]),x=l.useCallback(()=>{f||Z(!1)},[f,Z]),ce=l.useCallback((o,i)=>{E(o,i)},[E]),ue=l.useCallback(()=>{se()},[se]);return l.useEffect(()=>{if(!y&&!k)return;let o;k||!y?o=[document]:o=Array.isArray(y)?y:[y];for(let i of o){const u=nt(i);u&&(i=u,i.addEventListener("mouseenter",Y),i.addEventListener("mouseleave",x),i.addEventListener("touchstart",Y,{passive:!0}),i.addEventListener("touchend",x))}return()=>{for(let i of o){const u=nt(i);u&&(i=u,i.removeEventListener("mouseenter",Y),i.removeEventListener("mouseleave",x),i.removeEventListener("touchstart",Y),i.removeEventListener("touchend",x))}}},[y,k,Y,x]),l.useEffect(()=>{var i;if(!((i=b.current)!=null&&i.element))return;const o=[];b.current.element.querySelectorAll(Ye).forEach(u=>{o.push(ea(u,g,O,_e,t,n,te)),u.style.transition=ee}),Qe(o)},[ee,t,n,Ye,g,te]),l.useEffect(()=>{_.length!==0&&(se(),L())},[L,_,se]),w.jsx(At,{ref:b,onMouseEnter:ie?R?o=>{Y(),R(o)}:Y:R,onTouchStart:ie?le?o=>{Y(),le(o)}:Y:le,onMouseLeave:ie?j?o=>{x(),j(o)}:x:j,onTouchEnd:ie?B?o=>{x(),B(o)}:x:B,onTilt:C?(o,i)=>{ce(o,i),C(o,i)}:ce,onReset:I?()=>{ue(),I()}:ue,disabled:f,fullPageListening:k,controlElement:y,controlElementOnly:S,perspective:v,scale:$,shadowEnable:Re,shadow:U,CSSTransition:ee,spotGlareSizePercent:je,spotGlarePosition:Ce,tiltMaxAngleX:oe,tiltMaxAngleY:ye,tiltStyle:e?Object.assign({overflow:"hidden"},he):he,...P,children:ne})}),De=l.memo(ta,(e,t)=>We(e,t));De.displayName="Parallax";try{De.displayName="Parallax",De.__docgenInfo={description:"",displayName:"Parallax",props:{animationMode:{defaultValue:{value:"center-to-edge"},description:'Determines the animation mode when animating `data-parallax-...="x;y"` attributes\n\n`center-to-edge`: the value will be `x` at the center and change towards `y` relative to the distance from the center on all sides. | initial value = `x`\n\n`edge-to-edge-x`: the value will be `x` at the left edge and `y` at the right edge. | initial value = `x + (x - y / 2)`\n\n`edge-to-edge-y`: the value will be `x` at the top edge and `y` at the bottom edge. | initial value = `x + (x - y / 2)`\n\n`edge-to-edge-both`: the value will be `x` at the top left corner and `y` at the bottom right corner. | initial value = `x + (x - y / 2)`\n@note To reverse the direction, you can swap the start and end numbers: e.g. "-100;100" => "100:-100"\n\nNot applicable for `data-attribute-offset`\n@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--animation-mode Storybook}',name:"animationMode",required:!1,type:{name:"enum",value:[{value:'"center-to-edge"'},{value:'"edge-to-edge-x"'},{value:'"edge-to-edge-y"'},{value:'"edge-to-edge-both"'}]}},animationReverse:{defaultValue:{value:"none"},description:"Reverses the animation direction for the specified attribute\n\n`'none'` : doesn't modify the direction\n\n`'all'` : reverses direction for all attributes\n\n`'all-except-offset'` : reverses direction for all attributes except `data-parallax-offset`\n\n`'offset'` : reverses direction for the `data-parallax-offset` attribute\n\n`'opacity'` : reverses direction for the `data-parallax-opacity` attribute\n\n`'scale'` : reverses direction for the `data-parallax-scale` attribute\n\n`'rotation'` : reverses direction for the `data-parallax-rotation` attribute\n\n`'skew'` : reverses direction for the `data-parallax-skew` attribute\n@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--animation-reverse Storybook}",name:"animationReverse",required:!1,type:{name:"enum",value:[{value:'"all"'},{value:'"all-except-offset"'},{value:'"offset"'},{value:'"opacity"'},{value:'"scale"'},{value:'"rotation"'},{value:'"skew"'},{value:'"none"'}]}},offsetMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all offset values
@note Allows for easy adjustment of translation amount/speed
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--offset Storybook}`,name:"offsetMultiplier",required:!1,type:{name:"number"}},opacityMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all opacity values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--opacity Storybook}`,name:"opacityMultiplier",required:!1,type:{name:"number"}},scaleMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all scale values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--scale Storybook}`,name:"scaleMultiplier",required:!1,type:{name:"number"}},rotationMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all rotation values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--rotation Storybook}`,name:"rotationMultiplier",required:!1,type:{name:"number"}},skewMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all skew values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--skew Storybook}`,name:"skewMultiplier",required:!1,type:{name:"number"}},overflowHiddenEnable:{defaultValue:{value:"true"},description:"Enables/Disables `overflow: hidden` on the tilt element\n@note Disable if you want to set up your own composition with some elements being outside the frame\n@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--overflow-hidden Storybook}",name:"overflowHiddenEnable",required:!1,type:{name:"boolean"}}}}}catch{}const aa="test.webp",W=({layers:e={layer1:{},layer2:{},layer3:{}}})=>w.jsxs("div",{style:{position:"relative",width:"400px",height:"400px"},children:[w.jsx("img",{src:aa,alt:"test image",style:{position:"absolute",inset:"0"}}),w.jsx("div",{style:{position:"absolute",width:"75%",aspectRatio:"1",backgroundColor:"red",opacity:"0.8",top:"50%",left:"50%",translate:"-50% -50%"},...e.layer1}),w.jsx("div",{style:{position:"absolute",width:"50%",aspectRatio:"1",backgroundColor:"green",opacity:"0.8",top:"50%",left:"50%",translate:"-50% -50%"},...e.layer2}),w.jsx("div",{style:{position:"absolute",width:"25%",aspectRatio:"1",backgroundColor:"blue",opacity:"0.8",top:"50%",left:"50%",translate:"-50% -50%"},...e.layer3})]}),oa={title:"Parallax (react-next-parallax)",component:De,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},onKeyDown:{table:{disable:!0}}}},Te={args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-offset":"-10"},layer2:{},layer3:{"data-parallax-offset":"10"}}})}},Xe={parameters:{controls:{include:["offsetMultiplier","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-offset":"-10"},layer2:{},layer3:{"data-parallax-offset":"10"}}}),offsetMultiplier:1,animationReverse:"none"}},Pe={parameters:{controls:{include:["opacityMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-opacity":"0;1"},layer2:{},layer3:{"data-parallax-opacity":"1;0"}}}),opacityMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},Ne={parameters:{controls:{include:["scaleMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{},layer2:{"data-parallax-scale":"0;1"},layer3:{"data-parallax-scale":"1;0"}}}),scaleMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},qe={parameters:{controls:{include:["rotationMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-rotation":"0;90"},layer2:{},layer3:{"data-parallax-rotation":"90;0"}}}),rotationMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},Fe={parameters:{controls:{include:["skewMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-skew":"0;15"},layer2:{},layer3:{"data-parallax-skew":"15;0"}}}),skewMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},Ge={parameters:{controls:{include:"animationMode"}},args:{children:w.jsx(W,{layers:{layer1:{},layer2:{"data-parallax-scale":"0;1"},layer3:{"data-parallax-scale":"1;0"}}}),animationMode:"center-to-edge"}},Ve={parameters:{controls:{include:["animationReverse","animationMode"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-offset":"-10","data-parallax-skew":"0;15"},layer2:{"data-parallax-scale":"0;1"},layer3:{"data-parallax-offset":"10","data-parallax-rotation":"0;90","data-parallax-opacity":"0;1"}}}),animationReverse:"all",animationMode:"edge-to-edge-x"}},ze={parameters:{controls:{include:"overflowHidden"}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-rotation":"0;90","data-parallax-scale":"1.25;1.25"},layer2:{"data-parallax-rotation":"90;0","data-parallax-scale":"1.5;2"},layer3:{"data-parallax-offset":"300"}}}),overflowHiddenEnable:!0}};var ot,lt,it;Te.parameters={...Te.parameters,docs:{...(ot=Te.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    children: <Scene layers={{
      layer1: {
        'data-parallax-offset': '-10'
      },
      layer2: {},
      layer3: {
        'data-parallax-offset': '10'
      }
    }} />
  }
}`,...(it=(lt=Te.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};var st,ct,ut;Xe.parameters={...Xe.parameters,docs:{...(st=Xe.parameters)==null?void 0:st.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['offsetMultiplier', 'animationReverse']
    }
  },
  args: {
    children: <Scene layers={{
      layer1: {
        'data-parallax-offset': '-10'
      },
      layer2: {},
      layer3: {
        'data-parallax-offset': '10'
      }
    }} />,
    offsetMultiplier: 1,
    animationReverse: 'none'
  }
}`,...(ut=(ct=Xe.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var dt,ft,pt;Pe.parameters={...Pe.parameters,docs:{...(dt=Pe.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['opacityMultiplier', 'animationMode', 'animationReverse']
    }
  },
  args: {
    children: <Scene layers={{
      layer1: {
        'data-parallax-opacity': '0;1'
      },
      layer2: {},
      layer3: {
        'data-parallax-opacity': '1;0'
      }
    }} />,
    opacityMultiplier: 1,
    animationMode: 'center-to-edge',
    animationReverse: 'none'
  }
}`,...(pt=(ft=Pe.parameters)==null?void 0:ft.docs)==null?void 0:pt.source}}};var mt,yt,ht;Ne.parameters={...Ne.parameters,docs:{...(mt=Ne.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['scaleMultiplier', 'animationMode', 'animationReverse']
    }
  },
  args: {
    children: <Scene layers={{
      layer1: {},
      layer2: {
        'data-parallax-scale': '0;1'
      },
      layer3: {
        'data-parallax-scale': '1;0'
      }
    }} />,
    scaleMultiplier: 1,
    animationMode: 'center-to-edge',
    animationReverse: 'none'
  }
}`,...(ht=(yt=Ne.parameters)==null?void 0:yt.docs)==null?void 0:ht.source}}};var vt,gt,xt;qe.parameters={...qe.parameters,docs:{...(vt=qe.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['rotationMultiplier', 'animationMode', 'animationReverse']
    }
  },
  args: {
    children: <Scene layers={{
      layer1: {
        'data-parallax-rotation': '0;90'
      },
      layer2: {},
      layer3: {
        'data-parallax-rotation': '90;0'
      }
    }} />,
    rotationMultiplier: 1,
    animationMode: 'center-to-edge',
    animationReverse: 'none'
  }
}`,...(xt=(gt=qe.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var bt,wt,kt;Fe.parameters={...Fe.parameters,docs:{...(bt=Fe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['skewMultiplier', 'animationMode', 'animationReverse']
    }
  },
  args: {
    children: <Scene layers={{
      layer1: {
        'data-parallax-skew': '0;15'
      },
      layer2: {},
      layer3: {
        'data-parallax-skew': '15;0'
      }
    }} />,
    skewMultiplier: 1,
    animationMode: 'center-to-edge',
    animationReverse: 'none'
  }
}`,...(kt=(wt=Fe.parameters)==null?void 0:wt.docs)==null?void 0:kt.source}}};var Mt,Et,St;Ge.parameters={...Ge.parameters,docs:{...(Mt=Ge.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'animationMode'
    }
  },
  args: {
    children: <Scene layers={{
      layer1: {},
      layer2: {
        'data-parallax-scale': '0;1'
      },
      layer3: {
        'data-parallax-scale': '1;0'
      }
    }} />,
    animationMode: 'center-to-edge'
  }
}`,...(St=(Et=Ge.parameters)==null?void 0:Et.docs)==null?void 0:St.source}}};var Rt,jt,Ct;Ve.parameters={...Ve.parameters,docs:{...(Rt=Ve.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['animationReverse', 'animationMode']
    }
  },
  args: {
    children: <Scene layers={{
      layer1: {
        'data-parallax-offset': '-10',
        'data-parallax-skew': '0;15'
      },
      layer2: {
        'data-parallax-scale': '0;1'
      },
      layer3: {
        'data-parallax-offset': '10',
        'data-parallax-rotation': '0;90',
        'data-parallax-opacity': '0;1'
      }
    }} />,
    animationReverse: 'all',
    animationMode: 'edge-to-edge-x'
  }
}`,...(Ct=(jt=Ve.parameters)==null?void 0:jt.docs)==null?void 0:Ct.source}}};var It,_t,Yt;ze.parameters={...ze.parameters,docs:{...(It=ze.parameters)==null?void 0:It.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: 'overflowHidden'
    }
  },
  args: {
    children: <Scene layers={{
      layer1: {
        'data-parallax-rotation': '0;90',
        'data-parallax-scale': '1.25;1.25'
      },
      layer2: {
        'data-parallax-rotation': '90;0',
        'data-parallax-scale': '1.5;2'
      },
      layer3: {
        'data-parallax-offset': '300'
      }
    }} />,
    overflowHiddenEnable: true
  }
}`,...(Yt=(_t=ze.parameters)==null?void 0:_t.docs)==null?void 0:Yt.source}}};const la=["Default","Offset","Opacity","Scale","Rotation","Skew","AnimationMode","AnimationReverse","OverflowHidden"];export{Ge as AnimationMode,Ve as AnimationReverse,Te as Default,Xe as Offset,Pe as Opacity,ze as OverflowHidden,qe as Rotation,Ne as Scale,Fe as Skew,la as __namedExportsOrder,oa as default};
//# sourceMappingURL=FlipTilt.stories-0aac12db.js.map
