import{r as n,R as Vt}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var jt={exports:{}},Be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tt=n,Ft=Symbol.for("react.element"),Gt=Symbol.for("react.fragment"),Nt=Object.prototype.hasOwnProperty,qt=Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wt={key:!0,ref:!0,__self:!0,__source:!0};function Yt(e,r,u){var l,f={},d=null,h=null;u!==void 0&&(d=""+u),r.key!==void 0&&(d=""+r.key),r.ref!==void 0&&(h=r.ref);for(l in r)Nt.call(r,l)&&!Wt.hasOwnProperty(l)&&(f[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps,r)f[l]===void 0&&(f[l]=r[l]);return{$$typeof:Ft,type:e,key:d,ref:h,props:f,_owner:qt.current}}Be.Fragment=Gt;Be.jsx=Yt;Be.jsxs=Yt;jt.exports=Be;var w=jt.exports,$t={exports:{}},Se={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var et;function Bt(){if(et)return Se;et=1;var e=Vt,r=Symbol.for("react.element"),u=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,f=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(p,c,k){var y,S={},v=null,$=null;k!==void 0&&(v=""+k),c.key!==void 0&&(v=""+c.key),c.ref!==void 0&&($=c.ref);for(y in c)l.call(c,y)&&!d.hasOwnProperty(y)&&(S[y]=c[y]);if(p&&p.defaultProps)for(y in c=p.defaultProps,c)S[y]===void 0&&(S[y]=c[y]);return{$$typeof:r,type:p,key:v,ref:$,props:S,_owner:f.current}}return Se.Fragment=u,Se.jsx=h,Se.jsxs=h,Se}$t.exports=Bt();var W=$t.exports;const P=(e,r,u)=>e<r?r:e>u?u:e,Dt=(e,r,u)=>{let l=0;return r==="top"?l=(e.offsetY*2-1)*-1:r==="bottom"?l=(e.offsetY-.5)*2:r==="left"?l=(e.offsetX*2-1)*-1:r==="right"?l=(e.offsetX-.5)*2:r==="all"&&(l=Math.max(Math.abs(e.offsetX-.5)*2,Math.abs(e.offsetY-.5)*2)),(l*u).toFixed(2)},Zt=(e,r,u)=>{let l=e.offsetX,f=e.offsetY;u||(l=1-l,f=1-f);let d="translateX(0%) translateY(0%)";return r==="top"?d=`translateX( ${l*50}% )`:r==="bottom"?d=`translateX( ${l*50}% ) translateY(50%)`:r==="left"?d=`translateY( ${f*50}% )`:r==="right"?d=`translateX(50%) translateY( ${f*50}% ) `:r==="all"&&(d=`translateX(${(l-.5)*50}%) translateY(${(f-.5)*50}%) `),d},Jt=(e,r,u)=>{let l=e.offsetX,f=e.offsetY;r==="top-right"&&(l=1-l),r==="bottom-left"&&(f=1-f),r==="bottom-right"&&(l=1-l,f=1-f);let d=0;return u?d=((l+f)*(3/2)-1)*100:d=((l+f)*(-3/2)+.5)*100,`translateX(${d}%)`},tt=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},Qt=n.forwardRef(({width:e,height:r,borderRadius:u,perspective:l="1000px",scale:f=1,shadowEnable:d=!1,shadow:h="0 0 1rem rgba(0,0,0,0.5)",shadowType:p="box",lineGlareEnable:c=!0,lineGlareBlurEnable:k=!0,lineGlareBlurAmount:y="4px",lineGlareMaxOpacity:S=.1,lineGlareWidthPercent:v=10,lineGlareMixBlendMode:$="normal",lineGlareColor:Re="white",lineGlareReverse:U=!1,lineGlareDirection:ee="to-bottom-right",lineGlareHoverPosition:_e="top-left",spotGlareEnable:Ce=!0,spotGlareSizePercent:te=200,spotGlareMaxOpacity:le=.5,spotGlareMixBlendMode:ye="normal",spotGlarePosition:D="top",spotGlareColor:Ie="white",spotGlareReverse:he=!1,tiltMaxAngleX:R=20,tiltMaxAngleY:_=20,tiltReverse:oe=!1,tiltReset:Z=!0,initialAngleX:C=0,initialAngleY:I=0,disableScrollOnTouch:H=!0,style:De,tiltStyle:j,tiltClass:Ze,tiltProps:se,gyroMaxAngleX:x=0,gyroMaxAngleY:L=0,gyroReverse:je=!1,disabled:g=!1,disabledFilter:Ye="grayscale(1) brightness(125%)",CSSTransition:ae="all 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)",TiltWrapper:J,fullPageListening:E=!1,controlElement:X,controlElementOnly:ie=!1,preserve3dEnable:Y=!0,testIdEnable:b=!1,onTilt:ce,onReset:de,onMouseEnter:a,onMouseMove:o,onMouseLeave:i,onTouchStart:V,onTouchMove:T,onTouchEnd:O,children:$e,...F},Je)=>{const M=n.useRef(),ve=n.useRef(!1),ue=!E&&(!X||X&&!ie),Q=n.useRef(null),q=n.useRef(null),G=n.useRef(null),K=n.useRef(null),Xt=n.useCallback(({children:t})=>W.jsx(W.Fragment,{children:t}),[]),Ot=J||Xt;c&&(v=P(v,0,50)/2),Ce&&(te=te<0?0:te/2),R=P(R,0,90),_=P(_,0,90),x=P(x,0,90),L=P(L,0,90),C&&(C=P(C,-R,R)),I&&(I=P(I,-_,_));const Le=n.useMemo(()=>c?(100-v)/2:0,[c,v]),ze=n.useMemo(()=>c?Le+v:0,[c,v,Le]),A=n.useCallback((t=!0)=>{requestAnimationFrame(()=>{q.current&&(q.current.style.willChange=t?"transform":""),G.current&&(G.current.style.willChange=t?"transform, opacity":""),K.current&&(K.current.style.willChange=t?"transform":"")})},[]),N=n.useCallback((t=!0)=>{requestAnimationFrame(()=>{if(p==="box")q.current&&d&&(q.current.style.boxShadow=t?h:"");else if(Q.current&&d){const s=Q.current.style.filter.replace(/(drop-shadow?\(.*?\))(?=\s[a-z].*?\(.*?\)|\s*$)/g,"");Q.current.style.filter=t?s+` drop-shadow(${h})`:s}})},[h,d,p]),fe=n.useCallback(()=>{if(!Q.current||!G.current||!M.current)return;const t=Dt(M.current,D,le),s=Zt(M.current,D,he);requestAnimationFrame(()=>{G.current&&(G.current.style.opacity=t,G.current.style.transform=s)})},[D,le,he]),pe=n.useCallback(()=>{if(!Q.current||!K.current||!M.current)return;const t=Jt(M.current,_e,U);requestAnimationFrame(()=>{K.current&&(K.current.style.transform=t)})},[_e,U]),re=n.useCallback((t=!0)=>{if(!Q.current||!M.current)return{angleX:0,angleY:0};let s=-(M.current.offsetY-.5)*2*R,m=(M.current.offsetX-.5)*2*_;return oe&&t&&(s=-s,m=-m),{angleX:s,angleY:m}},[R,_,oe]),Ue=n.useCallback(t=>{const s=(t.angleY/_+1)/2,m=(-t.angleX/R+1)/2;M.current={offsetX:s,offsetY:m}},[R,_]),me=n.useCallback((t,s=!0,m=!1)=>{const Ee=s?f:1;requestAnimationFrame(()=>{q.current&&(q.current.style.transform=`rotateX(${t.angleX}deg) rotateY(${t.angleY}deg) scale3d(${Ee},${Ee},${Ee})`)}),ce&&ce({angleX:t.angleX,angleY:t.angleY},m)},[ce,f]),ne=n.useCallback((t,s=!1,m=!1)=>{Ue(t),me(t,s,m),N(s),pe(),fe()},[Ue,me,N,pe,fe]),z=n.useCallback(()=>{de&&de(),C||I?ne({angleX:C||0,angleY:I||0}):(M.current=void 0,requestAnimationFrame(()=>{K.current&&(K.current.style.transform=`translateX(${U?"50%":"-100%"})`),G.current&&(G.current.style.transform="translateX(0%) translateY(0%)",G.current.style.opacity="0"),q.current&&(q.current.style.transform="rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")}))},[C,I,U,de,ne]),Xe=n.useCallback((t,s)=>{if(!s)return;if(E&&s instanceof Document){M.current={offsetX:t.x/window.innerWidth,offsetY:t.y/window.innerHeight};return}const m=s.getBoundingClientRect();if(!m.width||!m.height)return;const Ee=P(t.x,m.left,m.right),At=P(t.y,m.top,m.bottom),Pt=(Ee-m.left)/m.width,Ht=(At-m.top)/m.height;M.current={offsetX:Pt,offsetY:Ht}},[E]);n.useImperativeHandle(Je,()=>({tilt:ne,reset:z,angle:()=>re(!1),updateWillChange:A,element:Q.current}),[ne,z,A,re]);const ge=n.useCallback(()=>{g||(ve.current=!0,A(),N())},[g,N,A]),be=n.useCallback(()=>{g||(H&&!E&&(typeof H=="boolean"?document.body.style.overflow="hidden":H.style.overflow="hidden"),ve.current=!0,A(),N())},[H,g,E,N,A]),xe=n.useCallback(t=>{g||(Xe({x:t.clientX,y:t.clientY},t.currentTarget),me(re()),pe(),fe())},[g,re,Xe,me,pe,fe]),we=n.useCallback(t=>{if(g)return;const s=t.changedTouches[0];s&&(Xe({x:s.clientX,y:s.clientY},t.currentTarget),me(re()),pe(),fe())},[g,re,Xe,me,pe,fe]),ke=n.useCallback(()=>{g||(ve.current=!1,A(!1),N(!1),Z&&z())},[g,z,Z,N,A]),Me=n.useCallback(()=>{g||(H&&!E&&(typeof H=="boolean"?document.body.style.overflow="":H.style.overflow=""),ve.current=!1,A(!1),N(!1),Z&&z())},[H,g,E,z,Z,N,A]);n.useEffect(()=>{if(!X&&!E)return;let t;E||!X?t=[document]:t=Array.isArray(X)?X:[X];for(let s of t){const m=tt(s);m&&(s=m,s.addEventListener("mouseenter",ge),s.addEventListener("mousemove",xe),s.addEventListener("mouseleave",ke),s.addEventListener("touchstart",be,{passive:!0}),s.addEventListener("touchmove",we,{passive:!0}),s.addEventListener("touchend",Me,{passive:!0}))}return()=>{for(let s of t){const m=tt(s);m&&(s=m,s.removeEventListener("mouseenter",ge),s.removeEventListener("mousemove",xe),s.removeEventListener("mouseleave",ke),s.removeEventListener("touchstart",be),s.removeEventListener("touchmove",we),s.removeEventListener("touchend",Me))}}},[X,ge,xe,ke,be,we,Me,E]);const Qe=n.useCallback(t=>{if(ve.current||t.beta===null&&t.gamma===null)return;let s=x&&t.beta?P(-t.beta,-x,x):C||0,m=L&&t.gamma?P(t.gamma,-L,L):I||0;je&&(s=-s,m=-m),ne({angleX:s,angleY:m},!1,!0)},[x,L,C,I,je,ne]);return n.useEffect(()=>{if(!(!x&&!L))return window.addEventListener("deviceorientation",Qe),()=>window.removeEventListener("deviceorientation",Qe)},[x,L,Qe,A]),W.jsx("div",{ref:t=>{t&&(Q.current=t,M.current&&(g?z():ne(re())),(C||I)&&!M.current&&z())},"data-testid":b?"container":void 0,style:Object.assign({display:"inline-block",verticalAlign:"middle",width:e,height:r,borderRadius:u,perspective:l,transformStyle:Y?"preserve-3d":void 0,backfaceVisibility:"hidden",filter:g?Ye:void 0,transition:p==="drop"?ae:void 0},De),onMouseEnter:ue?a?t=>{ge(),a(t)}:ge:a,onTouchStart:ue?V?t=>{be(),V(t)}:be:V,onMouseMove:ue?o?t=>{xe(t),o(t)}:xe:o,onTouchMove:ue?T?t=>{we(t),T(t)}:we:T,onMouseLeave:ue?i?t=>{ke(),i(t)}:ke:i,onTouchEnd:ue?O?t=>{Me(),O(t)}:Me:O,...F,children:W.jsx(Ot,{children:W.jsxs("div",{ref:q,"data-testid":b?"tilt":void 0,style:Object.assign({boxSizing:"border-box",position:"relative",width:"100%",height:"100%",borderRadius:u,transformStyle:Y?"preserve-3d":void 0,backfaceVisibility:"hidden",transition:ae,transform:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"},j),className:Ze,...se,children:[$e,Ce&&W.jsx("div",{"data-testid":b?"spot-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:u,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:ye},children:W.jsx("div",{ref:G,"data-testid":b?"spot-glare":void 0,style:{position:"absolute",left:D==="all"?"-50%":"-100%",top:D==="all"?"-50%":"-100%",width:"200%",height:"200%",transition:ae,backgroundImage:`radial-gradient(${Ie}, transparent ${te}%)`,transform:"translateX(0%) translateY(0%)",opacity:"0"}})}),c&&W.jsx("div",{"data-testid":b?"line-glare-container":void 0,style:{pointerEvents:"none",position:"absolute",inset:"0",borderRadius:u,overflow:"hidden",backfaceVisibility:"hidden",mixBlendMode:$},children:W.jsx("div",{"data-testid":b?"line-glare":void 0,ref:K,style:{position:"absolute",left:0,top:"-50%",width:"200%",height:"200%",filter:k?`blur(${y})`:"",transition:ae,opacity:String(S),transform:`translateX(${U?"50%":"-100%"})`,backgroundImage:`linear-gradient(${ee==="to-bottom-right"?"to bottom right":"to bottom left"}, transparent, transparent ${Le}%, ${Re} calc(${Le}% + 1px), ${Re} ${ze}%, transparent calc(${ze}% + 1px), transparent 0%)`}})})]})})})}),Lt=n.memo(Qt);Lt.displayName="Tilt";const at=e=>{if(e instanceof HTMLElement)return e;if(e instanceof Document)return document;if(e.current&&e.current instanceof Object&&"element"in e.current&&e.current.element instanceof HTMLElement)return e.current.element;if(e.current&&e.current instanceof HTMLElement)return e.current},Kt=(e,r)=>{const u=e.split(r);for(const d of u)if(isNaN(Number(d)))return;const l=u.length>1?Number(u[0]):0,f=u.length>1?Number(u[1]):Number(u[0]);return[l,f]},Ke=(e,r,u)=>{e[r]=u},zt=(e,r,u,l,f,d,h)=>{const p={element:e,transformInitial:e.style.transform};for(const c of r){const k=e.getAttribute(`${u}-${c}`);if(k)switch(c){case"offset":{const y=d==="all"||d==="offset";p.offset=Number(k)*h.offset,y&&(p.offset*=-1),p.transformInitial=p.transformInitial.replace(/translate[XY3d]*\([^)]*\)/g,"");break}case"opacity":case"scale":case"rotation":case"skew":{const y=Kt(k,l);if(!y)continue;const S=d==="all"||d==="all-except-offset"||d==="opacity"&&c==="opacity"||d==="scale"&&c==="scale"||d==="rotation"&&c==="rotation"||d==="skew"&&c==="skew";let v=S?y[1]:y[0],$=S?y[0]:y[1];h[c]!==1&&(v*=h[c],$*=h[c]),Ke(p,c+"Initial",f==="center-to-edge"?v:v+($-v)/2),Ke(p,c+"Start",v),Ke(p,c+"End",$),c==="scale"?p.transformInitial=p.transformInitial.replace(/scale[XY3d]*\([^)]*\)/g,""):c==="rotation"?p.transformInitial=p.transformInitial.replace(/rotate[Z3d]*\([^)]*\)/g,""):c==="skew"&&(p.transformInitial=p.transformInitial.replace(/skew[XY3d]*\([^)]*\)/g,""));break}}}return p},Oe=(e,r,u,l,f,d)=>{if(d==="center-to-edge"){const h=r?Math.abs(e.angleX)/r:0,p=u?Math.abs(e.angleY)/u:0;return Math.max(h,p)*(f-l)+l}else{const h=r?e.angleX/r:0,p=u?e.angleY/u:0;return d==="edge-to-edge-x"?(p+1)/2*(f-l)+l:d==="edge-to-edge-y"?(-h+1)/2*(f-l)+l:((-h+p)/2+1)/2*(f-l)+l}},Ut=n.forwardRef(({overflowHiddenEnable:e=!0,animationMode:r="center-to-edge",animationReverse:u="none",offsetMultiplier:l=1,opacityMultiplier:f=1,scaleMultiplier:d=1,rotationMultiplier:h=1,skewMultiplier:p=1,disabled:c=!1,fullPageListening:k,controlElement:y,controlElementOnly:S,perspective:v="1200px",scale:$=1.05,shadowEnable:Re=!0,shadow:U="0 0 1.5rem rgba(0, 0, 0, 0.5)",CSSTransition:ee="all 0.3s ease-out",spotGlareSizePercent:_e=100,spotGlarePosition:Ce="all",children:te,tiltMaxAngleX:le=20,tiltMaxAngleY:ye=20,gyroMaxAngleX:D=0,gyroMaxAngleY:Ie=0,tiltStyle:he={},onMouseEnter:R,onMouseLeave:_,onTouchStart:oe,onTouchEnd:Z,onTilt:C,onReset:I,...H},De)=>{const[j,Ze]=n.useState([]),se=!k&&(!y||y&&!S),x=n.useRef(null),L="data-parallax",je=";",g=n.useMemo(()=>["offset","opacity","rotation","scale","skew"],[]),Ye=g.map(a=>`[${L}-${a}]`).join(", "),ae=n.useMemo(()=>({offset:l,opacity:f,scale:d,rotation:h,skew:p}),[l,f,h,d,p]),J=n.useCallback((a=!0)=>{requestAnimationFrame(()=>{for(const o of j)if(!a)o.element.style.willChange="";else{const i=[];(o.offset||o.opacityInitial!==void 0||o.scaleInitial!==void 0||o.rotationInitial!==void 0||o.skewInitial!==void 0)&&i.push("transform"),o.opacityInitial!==void 0&&i.push("opacity"),o.element.style.willChange=i.join(", ")}})},[j]),E=n.useCallback((a,o=!1)=>{for(const i of j){const V=o?D:le,T=o?Ie:ye;let O="",$e=i.opacityInitial;if(i.offset){const F=T?a.angleY/T*i.offset:0,Je=V?-a.angleX/V*i.offset:0;O+=`translate(${F}%, ${Je}%)`}if(i.rotationStart!==void 0&&i.rotationEnd!==void 0){const F=Oe(a,V,T,i.rotationStart,i.rotationEnd,r);O+=` rotate(${F}deg)`}if(i.scaleStart!==void 0&&i.scaleEnd!==void 0){const F=Oe(a,V,T,i.scaleStart,i.scaleEnd,r);O+=` scale(${F})`}if(i.skewStart!==void 0&&i.skewEnd!==void 0){const F=Oe(a,V,T,i.skewStart,i.skewEnd,r);O+=` skew(${F}deg, ${F}deg)`}i.opacityStart!==void 0&&i.opacityEnd!==void 0&&($e=Oe(a,V,T,i.opacityStart,i.opacityEnd,r)),i.transformInitial&&(O+=" "+i.transformInitial),requestAnimationFrame(()=>{O&&(i.element.style.transform=O),i.opacityStart!==void 0&&i.opacityEnd!==void 0&&(i.element.style.opacity=String($e))})}},[j,r,le,ye,D,Ie]),X=n.useCallback(()=>{requestAnimationFrame(()=>{for(const a of j)a.element.style.transition=ee})},[ee,j]),ie=n.useCallback(()=>{for(const a of j){let o="";a.offset&&(o+="translate(0%, 0%)"),a.rotationInitial!==void 0&&(o+=` rotate(${a.rotationInitial}deg)`),a.scaleInitial!==void 0&&(o+=` scale(${a.scaleInitial})`),a.skewInitial!==void 0&&(o+=` skew(${a.skewInitial}deg, ${a.skewInitial}deg)`),a.transformInitial&&(o+=" "+a.transformInitial),requestAnimationFrame(()=>{o&&(a.element.style.transform=o),a.opacityInitial!==void 0&&(a.element.style.opacity=String(a.opacityInitial))})}},[j]);n.useImperativeHandle(De,()=>x.current?{...x.current,updateWillChange:(a=!0)=>{var o;(o=x.current)==null||o.updateWillChange(a),J(a)}}:{element:null,angle:()=>({angleX:0,angleY:0}),reset:()=>{},tilt:()=>{},updateWillChange:()=>{}},[J,$]);const Y=n.useCallback(()=>{c||J()},[c,J]),b=n.useCallback(()=>{c||J(!1)},[c,J]),ce=n.useCallback((a,o)=>{E(a,o)},[E]),de=n.useCallback(()=>{ie()},[ie]);return n.useEffect(()=>{if(!y&&!k)return;let a;k||!y?a=[document]:a=Array.isArray(y)?y:[y];for(let o of a){const i=at(o);i&&(o=i,o.addEventListener("mouseenter",Y),o.addEventListener("mouseleave",b),o.addEventListener("touchstart",Y,{passive:!0}),o.addEventListener("touchend",b))}return()=>{for(let o of a){const i=at(o);i&&(o=i,o.removeEventListener("mouseenter",Y),o.removeEventListener("mouseleave",b),o.removeEventListener("touchstart",Y),o.removeEventListener("touchend",b))}}},[y,k,Y,b]),n.useEffect(()=>{var o;if(!((o=x.current)!=null&&o.element))return;const a=[];x.current.element.querySelectorAll(Ye).forEach(i=>{a.push(zt(i,g,L,je,r,u,ae)),i.style.transition=ee}),Ze(a)},[ee,r,u,Ye,g,ae,te]),n.useEffect(()=>{j.length!==0&&(ie(),X())},[X,j,ie]),w.jsx(Lt,{ref:x,onMouseEnter:se?R?a=>{Y(),R(a)}:Y:R,onTouchStart:se?oe?a=>{Y(),oe(a)}:Y:oe,onMouseLeave:se?_?a=>{b(),_(a)}:b:_,onTouchEnd:se?Z?a=>{b(),Z(a)}:b:Z,onTilt:C?(a,o)=>{ce(a,o),C(a,o)}:ce,onReset:I?()=>{de(),I()}:de,disabled:c,fullPageListening:k,controlElement:y,controlElementOnly:S,perspective:v,scale:$,shadowEnable:Re,shadow:U,CSSTransition:ee,spotGlareSizePercent:_e,spotGlarePosition:Ce,tiltMaxAngleX:le,tiltMaxAngleY:ye,tiltStyle:e?Object.assign({overflow:"hidden"},he):he,...H,children:te})}),We=n.memo(Ut);We.displayName="Parallax";try{We.displayName="Parallax",We.__docgenInfo={description:"",displayName:"Parallax",props:{animationMode:{defaultValue:{value:"center-to-edge"},description:'Determines the animation mode when animating `data-parallax-...="x;y"` attributes\n\n`center-to-edge`: the value will be `x` at the center and change towards `y` relative to the distance from the center on all sides. | initial value = `x`\n\n`edge-to-edge-x`: the value will be `x` at the left edge and `y` at the right edge. | initial value = `x + (x - y / 2)`\n\n`edge-to-edge-y`: the value will be `x` at the top edge and `y` at the bottom edge. | initial value = `x + (x - y / 2)`\n\n`edge-to-edge-both`: the value will be `x` at the top left corner and `y` at the bottom right corner. | initial value = `x + (x - y / 2)`\n@note To reverse the direction, you can swap the start and end numbers: e.g. "-100;100" => "100:-100"\n\nNot applicable for `data-attribute-offset`\n@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--animation-mode Storybook}',name:"animationMode",required:!1,type:{name:"enum",value:[{value:'"center-to-edge"'},{value:'"edge-to-edge-x"'},{value:'"edge-to-edge-y"'},{value:'"edge-to-edge-both"'}]}},animationReverse:{defaultValue:{value:"none"},description:"Reverses the animation direction for the specified attribute\n\n`'none'` : doesn't modify the direction\n\n`'all'` : reverses direction for all attributes\n\n`'all-except-offset'` : reverses direction for all attributes except `data-parallax-offset`\n\n`'offset'` : reverses direction for the `data-parallax-offset` attribute\n\n`'opacity'` : reverses direction for the `data-parallax-opacity` attribute\n\n`'scale'` : reverses direction for the `data-parallax-scale` attribute\n\n`'rotation'` : reverses direction for the `data-parallax-rotation` attribute\n\n`'skew'` : reverses direction for the `data-parallax-skew` attribute\n@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--animation-reverse Storybook}",name:"animationReverse",required:!1,type:{name:"enum",value:[{value:'"all"'},{value:'"all-except-offset"'},{value:'"offset"'},{value:'"opacity"'},{value:'"scale"'},{value:'"rotation"'},{value:'"skew"'},{value:'"none"'}]}},offsetMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all offset values
@note Allows for easy adjustment of translation amount/speed
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--offset Storybook}`,name:"offsetMultiplier",required:!1,type:{name:"number"}},opacityMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all opacity values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--opacity Storybook}`,name:"opacityMultiplier",required:!1,type:{name:"number"}},scaleMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all scale values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--scale Storybook}`,name:"scaleMultiplier",required:!1,type:{name:"number"}},rotationMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all rotation values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--rotation Storybook}`,name:"rotationMultiplier",required:!1,type:{name:"number"}},skewMultiplier:{defaultValue:{value:"1"},description:`Multiplier applied to all skew values
@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--skew Storybook}`,name:"skewMultiplier",required:!1,type:{name:"number"}},overflowHiddenEnable:{defaultValue:{value:"true"},description:"Enables/Disables `overflow: hidden` on the tilt element\n@note Disable if you want to set up your own composition with some elements being outside the frame\n@see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--overflow-hidden Storybook}",name:"overflowHiddenEnable",required:!1,type:{name:"boolean"}}}}}catch{}const ea="test.webp",B=({layers:e={layer1:{},layer2:{},layer3:{}}})=>w.jsxs("div",{style:{position:"relative",width:"400px",height:"400px"},children:[w.jsx("img",{src:ea,alt:"test image",style:{position:"absolute",inset:"0"}}),w.jsx("div",{style:{position:"absolute",width:"75%",aspectRatio:"1",backgroundColor:"red",opacity:"0.8",top:"50%",left:"50%",translate:"-50% -50%"},...e.layer1}),w.jsx("div",{style:{position:"absolute",width:"50%",aspectRatio:"1",backgroundColor:"green",opacity:"0.8",top:"50%",left:"50%",translate:"-50% -50%"},...e.layer2}),w.jsx("div",{style:{position:"absolute",width:"25%",aspectRatio:"1",backgroundColor:"blue",opacity:"0.8",top:"50%",left:"50%",translate:"-50% -50%"},...e.layer3})]}),ra={title:"Parallax (react-next-parallax)",component:We,parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#333"}]},actions:{argTypesRegex:/^on(Tilt|Reset)$/},docs:{source:{language:"tsx"}}},tags:["autodocs"],argTypes:{children:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onBlur:{table:{disable:!0}},onKeyDown:{table:{disable:!0}}}},Ae={args:{children:w.jsx(B,{layers:{layer1:{"data-parallax-offset":"-10"},layer2:{},layer3:{"data-parallax-offset":"10"}}})}},Pe={parameters:{controls:{include:["offsetMultiplier","animationReverse"]}},args:{children:w.jsx(B,{layers:{layer1:{"data-parallax-offset":"-10"},layer2:{},layer3:{"data-parallax-offset":"10"}}}),offsetMultiplier:1,animationReverse:"none"}},He={parameters:{controls:{include:["opacityMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(B,{layers:{layer1:{"data-parallax-opacity":"0;1"},layer2:{},layer3:{"data-parallax-opacity":"1;0"}}}),opacityMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},Ve={parameters:{controls:{include:["scaleMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(B,{layers:{layer1:{},layer2:{"data-parallax-scale":"0;1"},layer3:{"data-parallax-scale":"1;0"}}}),scaleMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},Te={parameters:{controls:{include:["rotationMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(B,{layers:{layer1:{"data-parallax-rotation":"0;90"},layer2:{},layer3:{"data-parallax-rotation":"90;0"}}}),rotationMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},Fe={parameters:{controls:{include:["skewMultiplier","animationMode","animationReverse"]}},args:{children:w.jsx(B,{layers:{layer1:{"data-parallax-skew":"0;15"},layer2:{},layer3:{"data-parallax-skew":"15;0"}}}),skewMultiplier:1,animationMode:"center-to-edge",animationReverse:"none"}},Ge={parameters:{controls:{include:"animationMode"}},args:{children:w.jsx(B,{layers:{layer1:{},layer2:{"data-parallax-scale":"0;1"},layer3:{"data-parallax-scale":"1;0"}}}),animationMode:"center-to-edge"}},Ne={parameters:{controls:{include:["animationReverse","animationMode"]}},args:{children:w.jsx(B,{layers:{layer1:{"data-parallax-offset":"-10","data-parallax-skew":"0;15"},layer2:{"data-parallax-scale":"0;1"},layer3:{"data-parallax-offset":"10","data-parallax-rotation":"0;90","data-parallax-opacity":"0;1"}}}),animationReverse:"all",animationMode:"edge-to-edge-x"}},qe={parameters:{controls:{include:"overflowHidden"}},args:{children:w.jsx(B,{layers:{layer1:{"data-parallax-rotation":"0;90","data-parallax-scale":"1.25;1.25"},layer2:{"data-parallax-rotation":"90;0","data-parallax-scale":"1.5;2"},layer3:{"data-parallax-offset":"300"}}}),overflowHiddenEnable:!0}};var rt,nt,lt;Ae.parameters={...Ae.parameters,docs:{...(rt=Ae.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(nt=Ae.parameters)==null?void 0:nt.docs)==null?void 0:lt.source}}};var ot,st,it;Pe.parameters={...Pe.parameters,docs:{...(ot=Pe.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(it=(st=Pe.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ct,dt,ut;He.parameters={...He.parameters,docs:{...(ct=He.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(dt=He.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var ft,pt,mt;Ve.parameters={...Ve.parameters,docs:{...(ft=Ve.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(mt=(pt=Ve.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var yt,ht,vt;Te.parameters={...Te.parameters,docs:{...(yt=Te.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(vt=(ht=Te.parameters)==null?void 0:ht.docs)==null?void 0:vt.source}}};var gt,bt,xt;Fe.parameters={...Fe.parameters,docs:{...(gt=Fe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(xt=(bt=Fe.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var wt,kt,Mt;Ge.parameters={...Ge.parameters,docs:{...(wt=Ge.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Mt=(kt=Ge.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source}}};var Et,St,Rt;Ne.parameters={...Ne.parameters,docs:{...(Et=Ne.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Rt=(St=Ne.parameters)==null?void 0:St.docs)==null?void 0:Rt.source}}};var _t,Ct,It;qe.parameters={...qe.parameters,docs:{...(_t=qe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(It=(Ct=qe.parameters)==null?void 0:Ct.docs)==null?void 0:It.source}}};const na=["Default","Offset","Opacity","Scale","Rotation","Skew","AnimationMode","AnimationReverse","OverflowHidden"];export{Ge as AnimationMode,Ne as AnimationReverse,Ae as Default,Pe as Offset,He as Opacity,qe as OverflowHidden,Te as Rotation,Ve as Scale,Fe as Skew,na as __namedExportsOrder,ra as default};
//# sourceMappingURL=FlipTilt.stories-2451c4d3.js.map
