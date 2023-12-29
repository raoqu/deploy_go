import{d as e,e as t,g as n,h as o,c as r}from"./@babel_runtime@7.22.15.d775819b.js";import{P as i}from"./@rc-component_portal@1.1.2_react-dom@18.2.0_react@18.2.0.91f09b50.js";import{c as a}from"./classnames@2.3.2.78a47676.js";import{R as l}from"./rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0.218d0dcd.js";import{h as u,j as s,k as c,b as f,l as p,g as m,m as v,s as d,n as h,f as g,o as y,p as b}from"./rc-util@5.37.0_react-dom@18.2.0_react@18.2.0.5dac6347.js";import{r as x}from"./react@18.2.0.be237728.js";import{r as w}from"./react-dom@18.2.0_react@18.2.0.0bb4e6e8.js";import"./react-is@16.13.1.80a4043c.js";import{C as E}from"./rc-motion@2.9.0_react-dom@18.2.0_react@18.2.0.9878debb.js";var C=x.createContext(null);function M(e){return e?Array.isArray(e)?e:[e]:[]}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(arguments.length>2?arguments[2]:void 0)?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function k(e,t,n,o){return t||(n?{motionName:"".concat(e,"-").concat(n)}:o?{motionName:o}:null)}function L(e){return e.ownerDocument.defaultView}function N(e){for(var t=[],n=null==e?void 0:e.parentElement,o=["hidden","scroll","clip","auto"];n;){var r=L(n).getComputedStyle(n);[r.overflowX,r.overflowY,r.overflow].some((function(e){return o.includes(e)}))&&t.push(n),n=n.parentElement}return t}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Number.isNaN(e)?t:e}function A(e){return R(parseFloat(e),0)}function S(t,n){var o=e({},t);return(n||[]).forEach((function(e){if(!(e instanceof HTMLBodyElement||e instanceof HTMLHtmlElement)){var t=L(e).getComputedStyle(e),n=t.overflow,r=t.overflowClipMargin,i=t.borderTopWidth,a=t.borderBottomWidth,l=t.borderLeftWidth,u=t.borderRightWidth,s=e.getBoundingClientRect(),c=e.offsetHeight,f=e.clientHeight,p=e.offsetWidth,m=e.clientWidth,v=A(i),d=A(a),h=A(l),g=A(u),y=R(Math.round(s.width/p*1e3)/1e3),b=R(Math.round(s.height/c*1e3)/1e3),x=(p-m-h-g)*y,w=(c-f-v-d)*b,E=v*b,C=d*b,M=h*y,P=g*y,k=0,N=0;if("clip"===n){var S=A(r);k=S*y,N=S*b}var D=s.x+M-k,T=s.y+E-N,j=D+s.width+2*k-M-P-x,H=T+s.height+2*N-E-C-w;o.left=Math.max(o.left,D),o.top=Math.max(o.top,T),o.right=Math.min(o.right,j),o.bottom=Math.min(o.bottom,H)}})),o}function D(e){var t="".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0),n=t.match(/^(.*)\%$/);return n?e*(parseFloat(n[1])/100):parseFloat(t)}function T(e,n){var o=t(n||[],2),r=o[0],i=o[1];return[D(e.width,r),D(e.height,i)]}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[e[0],e[1]]}function H(e,t){var n,o=t[0],r=t[1];return n="t"===o?e.y:"b"===o?e.y+e.height:e.y+e.height/2,{x:"l"===r?e.x:"r"===r?e.x+e.width:e.x+e.width/2,y:n}}function X(e,t){var n={t:"b",b:"t",l:"r",r:"l"};return e.map((function(e,o){return o===t?n[e]||"c":e})).join("")}function Y(e){var t=e.prefixCls,n=e.align,o=e.arrow,r=e.arrowPos,i=o||{},l=i.className,u=i.content,s=r.x,c=void 0===s?0:s,f=r.y,p=void 0===f?0:f,m=x.useRef();if(!n||!n.points)return null;var v={position:"absolute"};if(!1!==n.autoArrow){var d=n.points[0],h=n.points[1],g=d[0],y=d[1],b=h[0],w=h[1];g!==b&&["t","b"].includes(g)?"t"===g?v.top=0:v.bottom=0:v.top=p,y!==w&&["l","r"].includes(y)?"l"===y?v.left=0:v.right=0:v.left=c}return x.createElement("div",{ref:m,className:a("".concat(t,"-arrow"),l),style:v},u)}function z(e){var t=e.prefixCls,n=e.open,r=e.zIndex,i=e.mask,l=e.motion;return i?x.createElement(E,o({},l,{motionAppear:!0,visible:n,removeOnLeave:!0}),(function(e){var n=e.className;return x.createElement("div",{style:{zIndex:r},className:a("".concat(t,"-mask"),n)})})):null}var B=x.memo((function(e){return e.children}),(function(e,t){return t.cache})),V=x.forwardRef((function(n,r){var i=n.popup,u=n.className,s=n.prefixCls,c=n.style,p=n.target,m=n.onVisibleChanged,d=n.open,h=n.keepDom,g=n.onClick,y=n.mask,b=n.arrow,w=n.arrowPos,C=n.align,M=n.motion,P=n.maskMotion,k=n.forceRender,L=n.getPopupContainer,N=n.autoDestroy,R=n.portal,A=n.zIndex,S=n.onMouseEnter,D=n.onMouseLeave,T=n.onPointerEnter,j=n.ready,H=n.offsetX,X=n.offsetY,V=n.offsetR,W=n.offsetB,O=n.onAlign,_=n.onPrepare,F=n.stretch,I=n.targetWidth,J=n.targetHeight,$="function"==typeof i?i():i,q=d||h,G=(null==L?void 0:L.length)>0,K=x.useState(!L||!G),Q=t(K,2),U=Q[0],Z=Q[1];if(f((function(){!U&&G&&p&&Z(!0)}),[U,G,p]),!U)return null;var ee="auto",te={left:"-1000vw",top:"-1000vh",right:ee,bottom:ee};if(j||!d){var ne=C.points,oe=C._experimental,re=null==oe?void 0:oe.dynamicInset,ie=re&&"r"===ne[0][1],ae=re&&"b"===ne[0][0];ie?(te.right=V,te.left=ee):(te.left=H,te.right=ee),ae?(te.bottom=W,te.top=ee):(te.top=X,te.bottom=ee)}var le={};return F&&(F.includes("height")&&J?le.height=J:F.includes("minHeight")&&J&&(le.minHeight=J),F.includes("width")&&I?le.width=I:F.includes("minWidth")&&I&&(le.minWidth=I)),d||(le.pointerEvents="none"),x.createElement(R,{open:k||q,getContainer:L&&function(){return L(p)},autoDestroy:N},x.createElement(z,{prefixCls:s,open:d,zIndex:A,mask:y,motion:P}),x.createElement(l,{onResize:O,disabled:!d},(function(t){return x.createElement(E,o({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:k,leavedClassName:"".concat(s,"-hidden")},M,{onAppearPrepare:_,onEnterPrepare:_,visible:d,onVisibleChanged:function(e){var t;null==M||null===(t=M.onVisibleChanged)||void 0===t||t.call(M,e),m(e)}}),(function(n,o){var i=n.className,l=n.style,f=a(s,i,u);return x.createElement("div",{ref:v(t,r,o),className:f,style:e(e(e(e({"--arrow-x":"".concat(w.x||0,"px"),"--arrow-y":"".concat(w.y||0,"px")},te),le),l),{},{boxSizing:"border-box",zIndex:A},c),onMouseEnter:S,onMouseLeave:D,onPointerEnter:T,onClick:g},b&&x.createElement(Y,{prefixCls:s,arrow:b,arrowPos:w,align:C}),x.createElement(B,{cache:!d},$))}))})))})),W=x.forwardRef((function(e,t){var n=e.children,o=e.getTriggerDOMNode,r=d(n),i=x.useCallback((function(e){h(t,o?o(e):e)}),[o]),a=g(i,n.ref);return r?x.cloneElement(n,{ref:a}):n})),O=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];const _=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return x.forwardRef((function(i,v){var d=i.prefixCls,h=void 0===d?"rc-trigger-popup":d,g=i.children,E=i.action,A=void 0===E?"hover":E,D=i.showAction,Y=i.hideAction,z=i.popupVisible,B=i.defaultPopupVisible,_=i.onPopupVisibleChange,F=i.afterPopupVisibleChange,I=i.mouseEnterDelay,J=i.mouseLeaveDelay,$=void 0===J?.1:J,q=i.focusDelay,G=i.blurDelay,K=i.mask,Q=i.maskClosable,U=void 0===Q||Q,Z=i.getPopupContainer,ee=i.forceRender,te=i.autoDestroy,ne=i.destroyPopupOnHide,oe=i.popup,re=i.popupClassName,ie=i.popupStyle,ae=i.popupPlacement,le=i.builtinPlacements,ue=void 0===le?{}:le,se=i.popupAlign,ce=i.zIndex,fe=i.stretch,pe=i.getPopupClassNameFromAlign,me=i.alignPoint,ve=i.onPopupClick,de=i.onPopupAlign,he=i.arrow,ge=i.popupMotion,ye=i.maskMotion,be=i.popupTransitionName,xe=i.popupAnimation,we=i.maskTransitionName,Ee=i.maskAnimation,Ce=i.className,Me=i.getTriggerDOMNode,Pe=r(i,O),ke=te||ne||!1,Le=x.useState(!1),Ne=t(Le,2),Re=Ne[0],Ae=Ne[1];f((function(){Ae(y())}),[]);var Se=x.useRef({}),De=x.useContext(C),Te=x.useMemo((function(){return{registerSubPopup:function(e,t){Se.current[e]=t,null==De||De.registerSubPopup(e,t)}}}),[De]),je=b(),He=x.useState(null),Xe=t(He,2),Ye=Xe[0],ze=Xe[1],Be=u((function(e){s(e)&&Ye!==e&&ze(e),null==De||De.registerSubPopup(je,e)})),Ve=x.useState(null),We=t(Ve,2),Oe=We[0],_e=We[1],Fe=u((function(e){s(e)&&Oe!==e&&_e(e)})),Ie=x.Children.only(g),Je=(null==Ie?void 0:Ie.props)||{},$e={},qe=u((function(e){var t,n,o=Oe;return(null==o?void 0:o.contains(e))||(null===(t=m(o))||void 0===t?void 0:t.host)===e||e===o||(null==Ye?void 0:Ye.contains(e))||(null===(n=m(Ye))||void 0===n?void 0:n.host)===e||e===Ye||Object.values(Se.current).some((function(t){return(null==t?void 0:t.contains(e))||e===t}))})),Ge=k(h,ge,xe,be),Ke=k(h,ye,Ee,we),Qe=x.useState(B||!1),Ue=t(Qe,2),Ze=Ue[0],et=Ue[1],tt=null!=z?z:Ze,nt=u((function(e){void 0===z&&et(e)}));f((function(){et(z||!1)}),[z]);var ot=x.useRef(tt);ot.current=tt;var rt=u((function(e){w.flushSync((function(){tt!==e&&(nt(e),null==_||_(e))}))})),it=x.useRef(),at=function(){clearTimeout(it.current)},lt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;at(),0===t?rt(e):it.current=setTimeout((function(){rt(e)}),1e3*t)};x.useEffect((function(){return at}),[]);var ut=x.useState(!1),st=t(ut,2),ct=st[0],ft=st[1];f((function(e){e&&!tt||ft(!0)}),[tt]);var pt=x.useState(null),mt=t(pt,2),vt=mt[0],dt=mt[1],ht=x.useState([0,0]),gt=t(ht,2),yt=gt[0],bt=gt[1],xt=function(e){bt([e.clientX,e.clientY])},wt=function(n,o,r,i,a,l,p){var m=x.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[i]||{}}),v=t(m,2),d=v[0],h=v[1],g=x.useRef(0),y=x.useMemo((function(){return o?N(o):[]}),[o]),b=x.useRef({});n||(b.current={});var w=u((function(){if(o&&r&&n){let n=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:oe,o=Y.x+e,r=Y.y+t,i=o+J,a=r+I,l=Math.max(o,n.left),u=Math.max(r,n.top),s=Math.min(i,n.right),c=Math.min(a,n.bottom);return Math.max(0,(s-l)*(c-u))},xt=function(){ye=Y.y+Se,be=ye+I,xe=Y.x+Ae,we=xe+J};var u,f,m,v=o,d=v.ownerDocument,g=L(v).getComputedStyle(v),x=g.width,w=g.height,E=g.position,C=v.style.left,M=v.style.top,P=v.style.right,k=v.style.bottom,N=e(e({},a[i]),l),A=d.createElement("div");if(null===(u=v.parentElement)||void 0===u||u.appendChild(A),A.style.left="".concat(v.offsetLeft,"px"),A.style.top="".concat(v.offsetTop,"px"),A.style.position=E,A.style.height="".concat(v.offsetHeight,"px"),A.style.width="".concat(v.offsetWidth,"px"),v.style.left="0",v.style.top="0",v.style.right="auto",v.style.bottom="auto",Array.isArray(r))m={x:r[0],y:r[1],width:0,height:0};else{var D=r.getBoundingClientRect();m={x:D.x,y:D.y,width:D.width,height:D.height}}var Y=v.getBoundingClientRect(),z=d.documentElement,B=z.clientWidth,V=z.clientHeight,W=z.scrollWidth,O=z.scrollHeight,_=z.scrollTop,F=z.scrollLeft,I=Y.height,J=Y.width,$=m.height,q=m.width,G={left:0,top:0,right:B,bottom:V},K={left:-F,top:-_,right:W-F,bottom:O-_},Q=N.htmlRegion,U="visible",Z="visibleFirst";"scroll"!==Q&&Q!==Z&&(Q=U);var ee=Q===Z,te=S(K,y),ne=S(G,y),oe=Q===U?ne:te,re=ee?ne:oe;v.style.left="auto",v.style.top="auto",v.style.right="0",v.style.bottom="0";var ie=v.getBoundingClientRect();v.style.left=C,v.style.top=M,v.style.right=P,v.style.bottom=k,null===(f=v.parentElement)||void 0===f||f.removeChild(A);var ae=R(Math.round(J/parseFloat(x)*1e3)/1e3),le=R(Math.round(I/parseFloat(w)*1e3)/1e3);if(0===ae||0===le||s(r)&&!c(r))return;var ue=N.offset,se=N.targetOffset,ce=T(Y,ue),fe=t(ce,2),pe=fe[0],me=fe[1],ve=T(m,se),de=t(ve,2),he=de[0],ge=de[1];m.x-=he,m.y-=ge;var ye,be,xe,we,Ee=N.points||[],Ce=t(Ee,2),Me=Ce[0],Pe=j(Ce[1]),ke=j(Me),Le=H(m,Pe),Ne=H(Y,ke),Re=e({},N),Ae=Le.x-Ne.x+pe,Se=Le.y-Ne.y+me,De=n(Ae,Se),Te=n(Ae,Se,ne),je=H(m,["t","l"]),He=H(Y,["t","l"]),Xe=H(m,["b","r"]),Ye=H(Y,["b","r"]),ze=N.overflow||{},Be=ze.adjustX,Ve=ze.adjustY,We=ze.shiftX,Oe=ze.shiftY,_e=function(e){return"boolean"==typeof e?e:e>=0};xt();var Fe=_e(Ve),Ie=ke[0]===Pe[0];if(Fe&&"t"===ke[0]&&(be>re.bottom||b.current.bt)){var Je=Se;Ie?Je-=I-$:Je=je.y-Ye.y-me;var $e=n(Ae,Je),qe=n(Ae,Je,ne);$e>De||$e===De&&(!ee||qe>=Te)?(b.current.bt=!0,Se=Je,me=-me,Re.points=[X(ke,0),X(Pe,0)]):b.current.bt=!1}if(Fe&&"b"===ke[0]&&(ye<re.top||b.current.tb)){var Ge=Se;Ie?Ge+=I-$:Ge=Xe.y-He.y-me;var Ke=n(Ae,Ge),Qe=n(Ae,Ge,ne);Ke>De||Ke===De&&(!ee||Qe>=Te)?(b.current.tb=!0,Se=Ge,me=-me,Re.points=[X(ke,0),X(Pe,0)]):b.current.tb=!1}var Ue=_e(Be),Ze=ke[1]===Pe[1];if(Ue&&"l"===ke[1]&&(we>re.right||b.current.rl)){var et=Ae;Ze?et-=J-q:et=je.x-Ye.x-pe;var tt=n(et,Se),nt=n(et,Se,ne);tt>De||tt===De&&(!ee||nt>=Te)?(b.current.rl=!0,Ae=et,pe=-pe,Re.points=[X(ke,1),X(Pe,1)]):b.current.rl=!1}if(Ue&&"r"===ke[1]&&(xe<re.left||b.current.lr)){var ot=Ae;Ze?ot+=J-q:ot=Xe.x-He.x-pe;var rt=n(ot,Se),it=n(ot,Se,ne);rt>De||rt===De&&(!ee||it>=Te)?(b.current.lr=!0,Ae=ot,pe=-pe,Re.points=[X(ke,1),X(Pe,1)]):b.current.lr=!1}xt();var at=!0===We?0:We;"number"==typeof at&&(xe<ne.left&&(Ae-=xe-ne.left-pe,m.x+q<ne.left+at&&(Ae+=m.x-ne.left+q-at)),we>ne.right&&(Ae-=we-ne.right-pe,m.x>ne.right-at&&(Ae+=m.x-ne.right+at)));var lt=!0===Oe?0:Oe;"number"==typeof lt&&(ye<ne.top&&(Se-=ye-ne.top-me,m.y+$<ne.top+lt&&(Se+=m.y-ne.top+$-lt)),be>ne.bottom&&(Se-=be-ne.bottom-me,m.y>ne.bottom-lt&&(Se+=m.y-ne.bottom+lt)));var ut=Y.x+Ae,st=ut+J,ct=Y.y+Se,ft=ct+I,pt=m.x,mt=pt+q,vt=m.y,dt=vt+$,ht=(Math.max(ut,pt)+Math.min(st,mt))/2-ut,gt=(Math.max(ct,vt)+Math.min(ft,dt))/2-ct;null==p||p(o,Re);var yt=ie.right-Y.x-(Ae+Y.width),bt=ie.bottom-Y.y-(Se+Y.height);h({ready:!0,offsetX:Ae/ae,offsetY:Se/le,offsetR:yt/ae,offsetB:bt/le,arrowX:ht/ae,arrowY:gt/le,scaleX:ae,scaleY:le,align:Re})}})),E=function(){h((function(t){return e(e({},t),{},{ready:!1})}))};return f(E,[i]),f((function(){n||E()}),[n]),[d.ready,d.offsetX,d.offsetY,d.offsetR,d.offsetB,d.arrowX,d.arrowY,d.scaleX,d.scaleY,d.align,function(){g.current+=1;var e=g.current;Promise.resolve().then((function(){g.current===e&&w()}))}]}(tt,Ye,me?yt:Oe,ae,ue,se,de),Et=t(wt,11),Ct=Et[0],Mt=Et[1],Pt=Et[2],kt=Et[3],Lt=Et[4],Nt=Et[5],Rt=Et[6],At=Et[7],St=Et[8],Dt=Et[9],Tt=Et[10],jt=function(e,t,n,o){return x.useMemo((function(){var r=M(null!=n?n:t),i=M(null!=o?o:t),a=new Set(r),l=new Set(i);return e&&(a.has("hover")&&(a.delete("hover"),a.add("click")),l.has("hover")&&(l.delete("hover"),l.add("click"))),[a,l]}),[e,t,n,o])}(Re,A,D,Y),Ht=t(jt,2),Xt=Ht[0],Yt=Ht[1],zt=Xt.has("click"),Bt=Yt.has("click")||Yt.has("contextMenu"),Vt=u((function(){ct||Tt()}));!function(e,t,o,r,i){f((function(){if(e&&t&&o){let e=function(){r(),i()};var a=o,l=N(t),u=N(a),s=L(a),c=new Set([s].concat(n(l),n(u)));return c.forEach((function(t){t.addEventListener("scroll",e,{passive:!0})})),s.addEventListener("resize",e,{passive:!0}),r(),function(){c.forEach((function(t){t.removeEventListener("scroll",e),s.removeEventListener("resize",e)}))}}}),[e,t,o])}(tt,Oe,Ye,Vt,(function(){ot.current&&me&&Bt&&lt(!1)})),f((function(){Vt()}),[yt,ae]),f((function(){!tt||null!=ue&&ue[ae]||Vt()}),[JSON.stringify(se)]);var Wt=x.useMemo((function(){var e=function(e,t,n,o){for(var r=n.points,i=Object.keys(e),a=0;a<i.length;a+=1){var l,u=i[a];if(P(null===(l=e[u])||void 0===l?void 0:l.points,r,o))return"".concat(t,"-placement-").concat(u)}return""}(ue,h,Dt,me);return a(e,null==pe?void 0:pe(Dt))}),[Dt,pe,ue,h,me]);x.useImperativeHandle(v,(function(){return{forceAlign:Vt}}));var Ot=x.useState(0),_t=t(Ot,2),Ft=_t[0],It=_t[1],Jt=x.useState(0),$t=t(Jt,2),qt=$t[0],Gt=$t[1],Kt=function(){if(fe&&Oe){var e=Oe.getBoundingClientRect();It(e.width),Gt(e.height)}};function Qt(e,t,n,o){$e[e]=function(r){var i;null==o||o(r),lt(t,n);for(var a=arguments.length,l=new Array(a>1?a-1:0),u=1;u<a;u++)l[u-1]=arguments[u];null===(i=Je[e])||void 0===i||i.call.apply(i,[Je,r].concat(l))}}f((function(){vt&&(Tt(),vt(),dt(null))}),[vt]),(zt||Bt)&&($e.onClick=function(e){var t;ot.current&&Bt?lt(!1):!ot.current&&zt&&(xt(e),lt(!0));for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=Je.onClick)||void 0===t||t.call.apply(t,[Je,e].concat(o))}),function(e,n,o,r,i,a,l,u){var s=x.useRef(e),c=x.useRef(!1);s.current!==e&&(c.current=!0,s.current=e),x.useEffect((function(){var e=p((function(){c.current=!1}));return function(){p.cancel(e)}}),[e]),x.useEffect((function(){if(n&&r&&(!i||a)){var e=function(){var e=!1;return[function(t){var n=t.target;e=l(n)},function(t){var n=t.target;c.current||!s.current||e||l(n)||u(!1)}]},f=e(),p=t(f,2),v=p[0],d=p[1],h=e(),g=t(h,2),y=g[0],b=g[1],x=L(r);x.addEventListener("mousedown",v,!0),x.addEventListener("click",d,!0),x.addEventListener("contextmenu",d,!0);var w=m(o);return w&&(w.addEventListener("mousedown",y,!0),w.addEventListener("click",b,!0),w.addEventListener("contextmenu",b,!0)),function(){x.removeEventListener("mousedown",v,!0),x.removeEventListener("click",d,!0),x.removeEventListener("contextmenu",d,!0),w&&(w.removeEventListener("mousedown",y,!0),w.removeEventListener("click",b,!0),w.removeEventListener("contextmenu",b,!0))}}}),[n,o,r,i,a])}(tt,Bt,Oe,Ye,K,U,qe,lt);var Ut,Zt,en=Xt.has("hover"),tn=Yt.has("hover");en&&(Qt("onMouseEnter",!0,I,(function(e){xt(e)})),Qt("onPointerEnter",!0,I,(function(e){xt(e)})),Ut=function(){(tt||ct)&&lt(!0,I)},me&&($e.onMouseMove=function(e){var t;null===(t=Je.onMouseMove)||void 0===t||t.call(Je,e)})),tn&&(Qt("onMouseLeave",!1,$),Qt("onPointerLeave",!1,$),Zt=function(){lt(!1,$)}),Xt.has("focus")&&Qt("onFocus",!0,q),Yt.has("focus")&&Qt("onBlur",!1,G),Xt.has("contextMenu")&&($e.onContextMenu=function(e){var t;ot.current&&Yt.has("contextMenu")?lt(!1):(xt(e),lt(!0)),e.preventDefault();for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=Je.onContextMenu)||void 0===t||t.call.apply(t,[Je,e].concat(o))}),Ce&&($e.className=a(Je.className,Ce));var nn=e(e({},Je),$e),on={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach((function(e){Pe[e]&&(on[e]=function(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];null===(t=nn[e])||void 0===t||t.call.apply(t,[nn].concat(o)),Pe[e].apply(Pe,o)})}));var rn=x.cloneElement(Ie,e(e({},nn),on)),an={x:Nt,y:Rt},ln=he?e({},!0!==he?he:{}):null;return x.createElement(x.Fragment,null,x.createElement(l,{disabled:!tt,ref:Fe,onResize:function(){Kt(),Vt()}},x.createElement(W,{getTriggerDOMNode:Me},rn)),x.createElement(C.Provider,{value:Te},x.createElement(V,{portal:o,ref:Be,prefixCls:h,popup:oe,className:a(re,Wt),style:ie,target:Oe,onMouseEnter:Ut,onMouseLeave:Zt,onPointerEnter:Ut,zIndex:ce,open:tt,keepDom:ct,onClick:ve,mask:K,motion:Ge,maskMotion:Ke,onVisibleChanged:function(e){ft(!1),Tt(),null==F||F(e)},onPrepare:function(){return new Promise((function(e){Kt(),dt((function(){return e}))}))},forceRender:ee,autoDestroy:ke,getPopupContainer:Z,align:Dt,arrow:ln,arrowPos:an,ready:Ct,offsetX:Mt,offsetY:Pt,offsetR:kt,offsetB:Lt,onAlign:Vt,stretch:fe,targetWidth:Ft/At,targetHeight:qt/St})))}))}(i);export{_ as T};
