import{r as n,R as Dt}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var Yt={exports:{}},ze={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft=n,Ht=Symbol.for("react.element"),Wt=Symbol.for("react.fragment"),zt=Object.prototype.hasOwnProperty,Ut=Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bt={key:!0,ref:!0,__self:!0,__source:!0};function jt(e,a,d){var o,p={},u=null,v=null;d!==void 0&&(u=""+d),a.key!==void 0&&(u=""+a.key),a.ref!==void 0&&(v=a.ref);for(o in a)zt.call(a,o)&&!Bt.hasOwnProperty(o)&&(p[o]=a[o]);if(e&&e.defaultProps)for(o in a=e.defaultProps,a)p[o]===void 0&&(p[o]=a[o]);return{$$typeof:Ht,type:e,key:u,ref:v,props:p,_owner:Ut.current}}ze.Fragment=Wt;ze.jsx=jt;ze.jsxs=jt;Yt.exports=ze;var w=Yt.exports,Tt={exports:{}},$e={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var et;function Kt(){if(et)return $e;et=1;var e=Dt,a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function v(f,c,E){var y,R={},g=null,X=null;E!==void 0&&(g=""+E),c.key!==void 0&&(g=""+c.key),c.ref!==void 0&&(X=c.ref);for(y in c)o.call(c,y)&&!u.hasOwnProperty(y)&&(R[y]=c[y]);if(f&&f.defaultProps)for(y in c=f.defaultProps,c)R[y]===void 0&&(R[y]=c[y]);return{$$typeof:a,type:f,key:g,ref:X,props:R,_owner:p.current}}return $e.Fragment=d,$e.jsx=v,$e.jsxs=v,$e}Tt.exports=Kt();var H=Tt.exports;const L=(e,a,d)=>e<a?a:e>d?d:e,Jt=(e,a,d)=>{let o=0;return a==="top"?o=(e.offsetY*2-1)*-1:a==="bottom"?o=(e.offsetY-.5)*2:a==="left"?o=(e.offsetX*2-1)*-1:a==="right"?o=(e.offsetX-.5)*2:a==="all"&&(o=Math.max(Math.abs(e.offsetX-.5)*2,Math.abs(e.offsetY-.5)*2)),(o*d).toFixed(2)},Qt=(e,a,d)=>{let o=e.offsetX,p=e.offsetY;d||(o=1-o,p=1-p);let u="translateX(0%) translateY(0%)";return a==="top"?u=`translateX( ${o*50}% )`:a==="bottom"?u=`translateX( ${o*50}% ) translateY(50%)`:a==="left"?u=`translateY( ${p*50}% )`:a==="right"?u=`translateX(50%) translateY( ${p*50}% ) `:a==="all"&&(u=`translateX(${(o-.5)*50}%) translateY(${(p-.5)*50}%) `),u},tt=e=>{if(!e)return"translateX(0%) translateY(0%)";switch(e){case"top-left":e={left:"25%",top:"25%"};break;case"top-right":e={left:"75%",top:"25%"};break;case"bottom-left":e={left:"25%",top:"75%"};break;case"bottom-right":e={left:"75%",top:"75%"};break;case"center":e={left:"50%",top:"50%"};break}const a=e.left.includes("%")?String(parseInt(e.left)/2)+"%":e.left,d=e.top.includes("%")?String(parseInt(e.top)/2)+"%":e.top;return`translateX(${a}) translateY(${d})`},Zt=(e,a,d)=>{let o=e.offsetX,p=e.offsetY;a==="top-right"&&(o=1-o),a==="bottom-left"&&(p=1-p),a==="bottom-right"&&(o=1-o,p=1-p);let u=0;return d?u=((o+p)*(3/2)-1)*100:u=((o+p)*(-3/2)+.5)*100,`translateX(${u}%)`},at=(e,a)=>{if(!a)return`translateX(${e?"50%":"-100%"})`;switch(a){case"left":a={left:"25%"};break;case"center":a={left:"50%"};break;case"right":a={left:"75%"};break}return`translateX(${a.left.includes("%")?String(parseInt(a.left)/2)+"%":a.left})`},rt=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document.documentElement;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},ea=n.forwardRef(({width:e,height:a,borderRadius:d,perspective:o="1000px",scale:p=1,shadowEnable:u=!1,shadow:v="0 0 1rem rgba(0,0,0,0.5)",shadowType:f="box",lineGlareEnable:c=!0,lineGlareBlurEnable:E=!0,lineGlareBlurAmount:y="4px",lineGlareMaxOpacity:R=.1,lineGlareWidthPercent:g=10,lineGlareMixBlendMode:X="normal",lineGlareColor:_e="white",lineGlareReverse:te=!1,lineGlareDirection:ae="to-bottom-right",lineGlareHoverPosition:Ie="top-left",lineGlareFixedPosition:z=void 0,spotGlareEnable:ye=!0,spotGlareSizePercent:U=200,spotGlareMaxOpacity:re=.5,spotGlareMixBlendMode:Ce="normal",spotGlarePosition:B="top",spotGlareColor:Xe="white",spotGlareReverse:ie=!1,spotGlareFixedPosition:S=void 0,tiltMaxAngleX:$=20,tiltMaxAngleY:_=20,tiltReverse:ve=!1,tiltReset:ne=!0,initialAngleX:Y=0,initialAngleY:j=0,disableScrollOnTouch:h=!0,style:Ue,tiltStyle:ce,tiltClass:K,tiltProps:Ye,gyroMaxAngleX:P=0,gyroMaxAngleY:I=0,gyroReverse:he=!1,disabled:x=!1,disabledFilter:J="grayscale(1) brightness(125%)",CSSTransition:oe="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:je,fullPageListening:k=!1,controlElement:b,controlElementOnly:T=!1,preserve3dEnable:ge=!0,testIdEnable:D=!1,onTilt:r,onReset:l,onMouseEnter:i,onMouseMove:N,onMouseLeave:G,onTouchStart:O,onTouchMove:de,onTouchEnd:C,children:Be,...At},Lt)=>{const M=n.useRef(),be=n.useRef(!1),ue=!k&&(!b||b&&!T),Q=n.useRef(null),F=n.useRef(null),V=n.useRef(null),Z=n.useRef(null),Pt=n.useCallback(({children:t})=>H.jsx(H.Fragment,{children:t}),[]),Nt=je||Pt;c&&(g=L(g,0,50)/2),ye&&(U=U<0?0:U/2),$=L($,0,90),_=L(_,0,90),P=L(P,0,90),I=L(I,0,90),Y&&(Y=L(Y,-$,$)),j&&(j=L(j,-_,_));const Te=n.useMemo(()=>c?(100-g)/2:0,[c,g]),Qe=n.useMemo(()=>c?Te+g:0,[c,g,Te]),A=n.useCallback((t=!0)=>{requestAnimationFrame(()=>{F.current&&(F.current.style.willChange=t?"transform":""),V.current&&(V.current.style.willChange=t?"transform, opacity":""),Z.current&&(Z.current.style.willChange=t?"transform":"")})},[]),q=n.useCallback((t=!0)=>{requestAnimationFrame(()=>{if(f==="box")F.current&&u&&(F.current.style.boxShadow=t?v:"");else if(Q.current&&u){const s=Q.current.style.filter.replace(/(drop-shadow?\(.*?\))(?=\s[a-z].*?\(.*?\)|\s*$)/g,"");Q.current.style.filter=t?s+` drop-shadow(${v})`:s}})},[v,u,f]),pe=n.useCallback(()=>{if(!Q.current||!V.current||!M.current||S)return;const t=Jt(M.current,B,re),s=Qt(M.current,B,ie);requestAnimationFrame(()=>{V.current&&(V.current.style.opacity=t,V.current.style.transform=s)})},[B,re,ie,S]),fe=n.useCallback(()=>{if(!Q.current||!Z.current||!M.current||z)return;const t=Zt(M.current,Ie,te);requestAnimationFrame(()=>{Z.current&&(Z.current.style.transform=t)})},[Ie,te,z]),le=n.useCallback((t=!0)=>{if(!Q.current||!M.current)return{angleX:0,angleY:0};let s=-(M.current.offsetY-.5)*2*$,m=(M.current.offsetX-.5)*2*_;return ve&&t&&(s=-s,m=-m),{angleX:s,angleY:m}},[$,_,ve]),Ze=n.useCallback(t=>{const s=(t.angleY/_+1)/2,m=(-t.angleX/$+1)/2;M.current={offsetX:s,offsetY:m}},[$,_]),me=n.useCallback((t,s=!0,m=!1)=>{const Se=s?p:1;requestAnimationFrame(()=>{F.current&&(F.current.style.transform=`rotateX(${t.angleX}deg) rotateY(${t.angleY}deg) scale3d(${Se},${Se},${Se})`)}),r&&r({angleX:t.angleX,angleY:t.angleY},m)},[r,p]),se=n.useCallback((t,s=!1,m=!1)=>{Ze(t),me(t,s,m),q(s),fe(),pe()},[Ze,me,q,fe,pe]),ee=n.useCallback(()=>{l&&l(),Y||j?se({angleX:Y||0,angleY:j||0}):(M.current=void 0,requestAnimationFrame(()=>{Z.current&&!z&&(Z.current.style.transform=at(te)),V.current&&!S&&(V.current.style.transform=tt(),V.current.style.opacity="0"),F.current&&(F.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[Y,j,te,S,z,l,se]),Oe=n.useCallback((t,s)=>{if(!s)return;if(k){M.current={offsetX:t.x/window.innerWidth,offsetY:t.y/window.innerHeight};return}const m=s.getBoundingClientRect();if(!m.width||!m.height)return;const Se=L(t.x,m.left,m.right),Gt=L(t.y,m.top,m.bottom),Vt=(Se-m.left)/m.width,qt=(Gt-m.top)/m.height;M.current={offsetX:Vt,offsetY:qt}},[k]);n.useImperativeHandle(Lt,()=>({tilt:se,reset:ee,angle:()=>le(!1),updateWillChange:A,element:Q.current}),[se,ee,A,le]);const xe=n.useCallback(()=>{x||(be.current=!0,A(),q())},[x,q,A]),ke=n.useCallback(()=>{x||(h&&!k&&(typeof h=="boolean"?document.body.style.overflow="hidden":h.style.overflow="hidden"),be.current=!0,A(),q())},[h,x,k,q,A]),we=n.useCallback(t=>{x||(Oe({x:t.clientX,y:t.clientY},t.currentTarget),me(le()),fe(),pe())},[x,le,Oe,me,fe,pe]),Ee=n.useCallback(t=>{if(x)return;const s=t.changedTouches[0];s&&(Oe({x:s.clientX,y:s.clientY},t.currentTarget),me(le()),fe(),pe())},[x,le,Oe,me,fe,pe]),Me=n.useCallback(()=>{x||(be.current=!1,A(!1),q(!1),ne&&ee())},[x,ee,ne,q,A]),Re=n.useCallback(()=>{x||(h&&!k&&(typeof h=="boolean"?document.body.style.overflow="":h.style.overflow=""),be.current=!1,A(!1),q(!1),ne&&ee())},[h,x,k,ee,ne,q,A]);n.useEffect(()=>{if(!b&&!k)return;let t;k||!b?t=[document]:t=Array.isArray(b)?b:[b];for(let s of t){const m=rt(s);m&&(s=m,s.addEventListener("mouseenter",xe),s.addEventListener("mousemove",we),s.addEventListener("mouseleave",Me),s.addEventListener("touchstart",ke,{passive:!0}),s.addEventListener("touchmove",Ee,{passive:!0}),s.addEventListener("touchend",Re,{passive:!0}))}return()=>{for(let s of t){const m=rt(s);m&&(s=m,s.removeEventListener("mouseenter",xe),s.removeEventListener("mousemove",we),s.removeEventListener("mouseleave",Me),s.removeEventListener("touchstart",ke),s.removeEventListener("touchmove",Ee),s.removeEventListener("touchend",Re))}}},[b,xe,we,Me,ke,Ee,Re,k]);const Ke=n.useCallback(t=>{if(be.current||t.beta===null&&t.gamma===null)return;let s=P&&t.beta?L(-t.beta,-P,P):Y||0,m=I&&t.gamma?L(t.gamma,-I,I):j||0;he&&(s=-s,m=-m),se({angleX:s,angleY:m},!1,!0)},[P,I,Y,j,he,se]);return n.useEffect(()=>{if(!(!P&&!I))return window.addEventListener("deviceorientation",Ke),()=>window.removeEventListener("deviceorientation",Ke)},[P,I,Ke,A]),H.jsx("div",{ref:t=>{t&&(Q.current=t,M.current&&(x?ee():se(le())),(Y||j)&&!M.current&&ee())},"data-testid":D?"container":void 0,style:Object.assign({display:"inline-block",verticalAlign:"middle",width:e,height:a,borderRadius:d,perspective:o,transformStyle:ge?"preserve-3d":void 0,backfaceVisibility:"hidden",filter:x?J:void 0,transition:f==="drop"?oe:void 0},Ue),onMouseEnter:ue?i?t=>{xe(),i(t)}:xe:i,onTouchStart:ue?O?t=>{ke(),O(t)}:ke:O,onMouseMove:ue?N?t=>{we(t),N(t)}:we:N,onTouchMove:ue?de?t=>{Ee(t),de(t)}:Ee:de,onMouseLeave:ue?G?t=>{Me(),G(t)}:Me:G,onTouchEnd:ue?C?t=>{Re(),C(t)}:Re:C,...At,children:H.jsx(Nt,{children:H.jsxs("div",{ref:F,"data-testid":D?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:d,transformStyle:ge?"preserve-3d":void 0,backfaceVisibility:"hidden",transition:oe,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},ce),className:K,...Ye,children:[Be,ye&&H.jsx("div",{"data-testid":D?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:d,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:Ce},children:H.jsx("div",{ref:V,"data-testid":D?"spot-glare":void 0,style:{position:"absolute",left:B==="all"&&!S?"-50%":"-100%",top:B==="all"&&!S?"-50%":"-100%",width:"200%",height:"200%",transition:oe,backgroundImage:`radial-gradient(${Xe}, transparent ${U}%)`,transform:tt(S),opacity:S?re:"0"}})}),c&&H.jsx("div",{"data-testid":D?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:d,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:X},children:H.jsx("div",{"data-testid":D?"line-glare":void 0,ref:Z,style:{position:"absolute",left:z?"-100%":0,top:"-50%",width:"200%",height:"200%",filter:E?`blur(${y})`:"",transition:oe,opacity:String(R),transform:at(te,z),backgroundImage:`linear-gradient(${ae==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${Te}%, ${_e} calc(${Te}% + 1px), ${_e} ${Qe}%, transparent calc(${Qe}% + 1px), transparent 0%)`}})})]})})})}),Ot=n.memo(ea);Ot.displayName="Tilt";const nt=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},ta=(e,a)=>{const d=e.split(a);for(const u of d)if(isNaN(Number(u)))return;const o=d.length>1?Number(d[0]):0,p=d.length>1?Number(d[1]):Number(d[0]);return[o,p]},Je=(e,a,d)=>{e[a]=d},aa=(e,a,d,o,p,u,v)=>{const f={element:e,transformInitial:e.style.transform};for(const c of a){const E=e.getAttribute(`${d}-${c}`);if(E)switch(c){case"offset":{const y=u==="all"||u==="offset";f.offset=Number(E)*v.offset,y&&(f.offset*=-1),f.transformInitial=f.transformInitial.replace(/translate[XY3d]*\([^)]*\)/g,"");break}case"opacity":case"scale":case"rotation":case"skew":{const y=ta(E,o);if(!y)continue;const R=u==="all"||u==="all-except-offset"||u==="opacity"&&c==="opacity"||u==="scale"&&c==="scale"||u==="rotation"&&c==="rotation"||u==="skew"&&c==="skew";let g=R?y[1]:y[0],X=R?y[0]:y[1];v[c]!==1&&(g*=v[c],X*=v[c]),Je(f,c+"Initial",p==="center-to-edge"?g:g+(X-g)/2),Je(f,c+"Start",g),Je(f,c+"End",X),c==="scale"?f.transformInitial=f.transformInitial.replace(/scale[XY3d]*\([^)]*\)/g,""):c==="rotation"?f.transformInitial=f.transformInitial.replace(/rotate[Z3d]*\([^)]*\)/g,""):c==="skew"&&(f.transformInitial=f.transformInitial.replace(/skew[XY3d]*\([^)]*\)/g,""));break}}}return f},Ae=(e,a,d,o,p,u)=>{if(u==="center-to-edge"){const v=a?Math.abs(e.angleX)/a:0,f=d?Math.abs(e.angleY)/d:0;return Math.max(v,f)*(p-o)+o}else{const v=a?e.angleX/a:0,f=d?e.angleY/d:0;return u==="edge-to-edge-x"?(f+1)/2*(p-o)+o:u==="edge-to-edge-y"?(-v+1)/2*(p-o)+o:((-v+f)/2+1)/2*(p-o)+o}},ra=n.forwardRef(({overflowHiddenEnable:e=!0,animationMode:a="center-to-edge",animationReverse:d="none",offsetMultiplier:o=1,opacityMultiplier:p=1,scaleMultiplier:u=1,rotationMultiplier:v=1,skewMultiplier:f=1,disabled:c=!1,fullPageListening:E,controlElement:y,controlElementOnly:R,perspective:g="1200px",scale:X=1.05,shadowEnable:_e=!0,shadow:te="0 0 1.5rem rgba(0, 0, 0, 0.5)",CSSTransition:ae="all 0.3s ease-out",spotGlareSizePercent:Ie=100,spotGlarePosition:z="all",children:ye,tiltMaxAngleX:U=20,tiltMaxAngleY:re=20,gyroMaxAngleX:Ce=0,gyroMaxAngleY:B=0,tiltStyle:Xe={},onMouseEnter:ie,onMouseLeave:S,onTouchStart:$,onTouchEnd:_,onTilt:ve,onReset:ne,...Y},j)=>{const[h,Ue]=n.useState([]),ce=!E&&(!y||y&&!R),K=n.useRef(null),Ye="data-parallax",P=";",I=n.useMemo(()=>["offset","opacity","rotation","scale","skew"],[]),he=I.map(r=>`[${Ye}-${r}]`).join(", "),x=n.useMemo(()=>({offset:o,opacity:p,scale:u,rotation:v,skew:f}),[o,p,v,u,f]),J=n.useCallback((r=!0)=>{requestAnimationFrame(()=>{for(const l of h)if(!r)l.element.style.willChange="";else{const i=[];(l.offset||l.opacityInitial!==void 0||l.scaleInitial!==void 0||l.rotationInitial!==void 0||l.skewInitial!==void 0)&&i.push("transform"),l.opacityInitial!==void 0&&i.push("opacity"),l.element.style.willChange=i.join(", ")}})},[h]),oe=n.useCallback((r,l=!1)=>{for(const i of h){const N=l?Ce:U,G=l?B:re;let O="",de=i.opacityInitial;if(i.offset){const C=G?r.angleY/G*i.offset:0,Be=N?-r.angleX/N*i.offset:0;O+=`translate(${C}%, ${Be}%)`}if(i.rotationStart!==void 0&&i.rotationEnd!==void 0){const C=Ae(r,N,G,i.rotationStart,i.rotationEnd,a);O+=` rotate(${C}deg)`}if(i.scaleStart!==void 0&&i.scaleEnd!==void 0){const C=Ae(r,N,G,i.scaleStart,i.scaleEnd,a);O+=` scale(${C})`}if(i.skewStart!==void 0&&i.skewEnd!==void 0){const C=Ae(r,N,G,i.skewStart,i.skewEnd,a);O+=` skew(${C}deg, ${C}deg)`}i.opacityStart!==void 0&&i.opacityEnd!==void 0&&(de=Ae(r,N,G,i.opacityStart,i.opacityEnd,a)),i.transformInitial&&(O+=" "+i.transformInitial),requestAnimationFrame(()=>{O&&(i.element.style.transform=O),i.opacityStart!==void 0&&i.opacityEnd!==void 0&&(i.element.style.opacity=String(de))})}},[h,a,U,re,Ce,B]),je=n.useCallback(()=>{requestAnimationFrame(()=>{for(const r of h)r.element.style.transition=ae})},[ae,h]),k=n.useCallback(()=>{for(const r of h){let l="";r.offset&&(l+="translate(0%, 0%)"),r.rotationInitial!==void 0&&(l+=` rotate(${r.rotationInitial}deg)`),r.scaleInitial!==void 0&&(l+=` scale(${r.scaleInitial})`),r.skewInitial!==void 0&&(l+=` skew(${r.skewInitial}deg, ${r.skewInitial}deg)`),r.transformInitial&&(l+=" "+r.transformInitial),requestAnimationFrame(()=>{l&&(r.element.style.transform=l),r.opacityInitial!==void 0&&(r.element.style.opacity=String(r.opacityInitial))})}},[h]);n.useImperativeHandle(j,()=>K.current?{...K.current,updateWillChange:(r=!0)=>{var l;(l=K.current)==null||l.updateWillChange(r),J(r)}}:{element:null,angle:()=>({angleX:0,angleY:0}),reset:()=>{},tilt:()=>{},updateWillChange:()=>{}},[J,X]);const b=n.useCallback(()=>{c||J()},[c,J]),T=n.useCallback(()=>{c||J(!1)},[c,J]),ge=n.useCallback((r,l)=>{oe(r,l)},[oe]),D=n.useCallback(()=>{k()},[k]);return n.useEffect(()=>{if(!y&&!E)return;let r;E||!y?r=[document]:r=Array.isArray(y)?y:[y];for(let l of r){const i=nt(l);i&&(l=i,l.addEventListener("mouseenter",b),l.addEventListener("mouseleave",T),l.addEventListener("touchstart",b,{passive:!0}),l.addEventListener("touchend",T))}return()=>{for(let l of r){const i=nt(l);i&&(l=i,l.removeEventListener("mouseenter",b),l.removeEventListener("mouseleave",T),l.removeEventListener("touchstart",b),l.removeEventListener("touchend",T))}}},[y,E,b,T]),n.useEffect(()=>{var l;if(!((l=K.current)!=null&&l.element))return;const r=[];K.current.element.querySelectorAll(he).forEach(i=>{r.push(aa(i,I,Ye,P,a,d,x)),i.style.transition=ae}),Ue(r)},[ae,a,d,he,I,x,ye]),n.useEffect(()=>{h.length!==0&&(k(),je())},[je,h,k]),w.jsx(Ot,{ref:K,onMouseEnter:ce?ie?r=>{b(),ie(r)}:b:ie,onTouchStart:ce?$?r=>{b(),$(r)}:b:$,onMouseLeave:ce?S?r=>{T(),S(r)}:T:S,onTouchEnd:ce?_?r=>{T(),_(r)}:T:_,onTilt:ve?(r,l)=>{ge(r,l),ve(r,l)}:ge,onReset:ne?()=>{D(),ne()}:D,disabled:c,fullPageListening:E,controlElement:y,controlElementOnly:R,perspective:g,scale:X,shadowEnable:_e,shadow:te,CSSTransition:ae,spotGlareSizePercent:Ie,spotGlarePosition:z,tiltMaxAngleX:U,tiltMaxAngleY:re,tiltStyle:e?Object.assign({overflow:"hidden"},Xe):Xe,...Y,children:ye})}),We=n.memo(ra);We.displayName="Parallax";try{We.displayName="Parallax",We.__docgenInfo={description:"",displayName:"Parallax",props:{animationMode:{defaultValue:{value:"center-to-edge"},description:'Determines the animation mode when animating `data-parallax-...="x;y"` attributes\n\n`center-to-edge`: the value will be `x` at the center and change towards `y` relative to the distance from the center on all sides. | initial value = `x`\n\n`edge-to-edge-x`: the value will be `x` at the left edge and `y` at the right edge. | initial value = `x + (x - y / 2)`\n\n`edge-to-edge-y`: the value will be `x` at the top edge and `y` at the bottom edge. | initial value = `x + (x - y / 2)`\n\n`edge-to-edge-both`: the value will be `x` at the top left corner and `y` at the bottom right corner. | initial value = `x + (x - y / 2)`\n@note To reverse the direction, you can swap the start and end numbers: e.g. "-100;100" => "100:-100"\n\nNot applicable for `data-attribute-offset`\n@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--animation-mode Storybook}',name:"animationMode",required:!1,type:{name:"enum",value:[{value:'"center-to-edge"'},{value:'"edge-to-edge-x"'},{value:'"edge-to-edge-y"'},{value:'"edge-to-edge-both"'}]}},animationReverse:{defaultValue:{value:"none"},description:"Reverses the animation direction for the specified attribute\n\n`'none'` : doesn't modify the direction\n\n`'all'` : reverses direction for all attributes\n\n`'all-except-offset'` : reverses direction for all attributes except `data-parallax-offset`\n\n`'offset'` : reverses direction for the `data-parallax-offset` attribute\n\n`'opacity'` : reverses direction for the `data-parallax-opacity` attribute\n\n`'scale'` : reverses direction for the `data-parallax-scale` attribute\n\n`'rotation'` : reverses direction for the `data-parallax-rotation` attribute\n\n`'skew'` : reverses direction for the `data-parallax-skew` attribute\n@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--animation-reverse Storybook}",name:"animationReverse",required:!1,type:{name:"enum",value:[{value:'"all"'},{value:'"all-except-offset"'},{value:'"offset"'},{value:'"opacity"'},{value:'"scale"'},{value:'"rotation"'},{value:'"skew"'},{value:'"none"'}]}},offsetMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all offset values
@note Allows for easy adjustment of translation amount/speed
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--offset Storybook}`,name:"offsetMultiplier",required:!1,type:{name:"number"}},opacityMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all opacity values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--opacity Storybook}`,name:"opacityMultiplier",required:!1,type:{name:"number"}},scaleMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all scale values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--scale Storybook}`,name:"scaleMultiplier",required:!1,type:{name:"number"}},rotationMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all rotation values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--rotation Storybook}`,name:"rotationMultiplier",required:!1,type:{name:"number"}},skewMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all skew values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--skew Storybook}`,name:"skewMultiplier",required:!1,type:{name:"number"}},overflowHiddenEnable:{defaultValue:{value:"true"},description:"Enables/Disables `overflow: hidden` on the tilt element\n@note Disable if you want to set up your own composition with some elements being outside the frame\n@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--overflow-hidden Storybook}",name:"overflowHiddenEnable",required:!1,type:{name:"boolean"}}}}}catch{}const na="test.webp",W=({layers:e={layer1:{},layer2:{},layer3:{}}})=>w.jsxs("div",{style:{position:"relative",width:"400px",height:"400px"},children:[w.jsx("img",{src:na,alt:"test image",style:{position:"absolute",inset:"0"}}),w.jsx("div",{style:{position:"absolute",width:"75%",aspectRatio:"1",backgroundColor:"red",opacity:"0.8",top:"50%",left:"50%",translate:"-50% -50%"},...e.layer1}),w.jsx("div",{style:{position:"absolute",width:"50%",aspectRatio:"1",backgroundColor:"green",opacity:"0.8",top:"50%",left:"50%",translate:"-50% -50%"},...e.layer2}),w.jsx("div",{style:{position:"absolute",width:"25%",aspectRatio:"1",backgroundColor:"blue",opacity:"0.8",top:"50%",left:"50%",translate:"-50% -50%"},...e.layer3})]}),sa={title:"Parallax (react-next-parallax)",component:We,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},onKeyDown:{table:{disable:!0}}}},Le={args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-offset":"-10"},layer2:{},layer3:{"data-parallax-offset":"10"}}})}},Pe={parameters:{controls:{include:["offsetMultiplier","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-offset":"-10"},layer2:{},layer3:{"data-parallax-offset":"10"}}}),offsetMultiplier:1,animationReverse:"none"}},Ne={parameters:{controls:{include:["opacityMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-opacity":"0;1"},layer2:{},layer3:{"data-parallax-opacity":"1;0"}}}),opacityMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},Ge={parameters:{controls:{include:["scaleMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{},layer2:{"data-parallax-scale":"0;1"},layer3:{"data-parallax-scale":"1;0"}}}),scaleMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},Ve={parameters:{controls:{include:["rotationMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-rotation":"0;90"},layer2:{},layer3:{"data-parallax-rotation":"90;0"}}}),rotationMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},qe={parameters:{controls:{include:["skewMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-skew":"0;15"},layer2:{},layer3:{"data-parallax-skew":"15;0"}}}),skewMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},De={parameters:{controls:{include:"animationMode"}},args:{children:w.jsx(W,{layers:{layer1:{},layer2:{"data-parallax-scale":"0;1"},layer3:{"data-parallax-scale":"1;0"}}}),animationMode:"center-to-edge"}},Fe={parameters:{controls:{include:["animationReverse","animationMode"]}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-offset":"-10","data-parallax-skew":"0;15"},layer2:{"data-parallax-scale":"0;1"},layer3:{"data-parallax-offset":"10","data-parallax-rotation":"0;90","data-parallax-opacity":"0;1"}}}),animationReverse:"all",animationMode:"edge-to-edge-x"}},He={parameters:{controls:{include:"overflowHidden"}},args:{children:w.jsx(W,{layers:{layer1:{"data-parallax-rotation":"0;90","data-parallax-scale":"1.25;1.25"},layer2:{"data-parallax-rotation":"90;0","data-parallax-scale":"1.5;2"},layer3:{"data-parallax-offset":"300"}}}),overflowHiddenEnable:!0}};var ot,lt,st;Le.parameters={...Le.parameters,docs:{...(ot=Le.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(lt=Le.parameters)==null?void 0:lt.docs)==null?void 0:st.source}}};var it,ct,dt;Pe.parameters={...Pe.parameters,docs:{...(it=Pe.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(dt=(ct=Pe.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,pt,ft;Ne.parameters={...Ne.parameters,docs:{...(ut=Ne.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(ft=(pt=Ne.parameters)==null?void 0:pt.docs)==null?void 0:ft.source}}};var mt,yt,vt;Ge.parameters={...Ge.parameters,docs:{...(mt=Ge.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(vt=(yt=Ge.parameters)==null?void 0:yt.docs)==null?void 0:vt.source}}};var ht,gt,bt;Ve.parameters={...Ve.parameters,docs:{...(ht=Ve.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(bt=(gt=Ve.parameters)==null?void 0:gt.docs)==null?void 0:bt.source}}};var xt,kt,wt;qe.parameters={...qe.parameters,docs:{...(xt=qe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(wt=(kt=qe.parameters)==null?void 0:kt.docs)==null?void 0:wt.source}}};var Et,Mt,Rt;De.parameters={...De.parameters,docs:{...(Et=De.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Rt=(Mt=De.parameters)==null?void 0:Mt.docs)==null?void 0:Rt.source}}};var St,$t,_t;Fe.parameters={...Fe.parameters,docs:{...(St=Fe.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(_t=($t=Fe.parameters)==null?void 0:$t.docs)==null?void 0:_t.source}}};var It,Ct,Xt;He.parameters={...He.parameters,docs:{...(It=He.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Xt=(Ct=He.parameters)==null?void 0:Ct.docs)==null?void 0:Xt.source}}};const ia=["Default","Offset","Opacity","Scale","Rotation","Skew","AnimationMode","AnimationReverse","OverflowHidden"];export{De as AnimationMode,Fe as AnimationReverse,Le as Default,Pe as Offset,Ne as Opacity,He as OverflowHidden,Ve as Rotation,Ge as Scale,qe as Skew,ia as __namedExportsOrder,sa as default};
//# sourceMappingURL=FlipTilt.stories-9e910ea1.js.map
