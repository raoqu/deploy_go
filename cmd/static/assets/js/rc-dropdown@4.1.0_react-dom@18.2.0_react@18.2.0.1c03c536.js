import{c as e,e as t,h as o,b as r}from"./@babel_runtime@7.22.15.d775819b.js";import{T as n}from"./@rc-component_trigger@1.15.6_react-dom@18.2.0_react@18.2.0.6f95a0ff.js";import{c as i}from"./classnames@2.3.2.78a47676.js";import{l as a,K as s,m as l,s as c}from"./rc-util@5.37.0_react-dom@18.2.0_react@18.2.0.5dac6347.js";import{r as f,a as u}from"./react@18.2.0.be237728.js";var p=s.ESC,v=s.TAB;var m=f.forwardRef((function(e,t){var o=e.overlay,r=e.arrow,n=e.prefixCls,i=f.useMemo((function(){return"function"==typeof o?o():o}),[o]),a=l(t,null==i?void 0:i.ref);return u.createElement(u.Fragment,null,r&&u.createElement("div",{className:"".concat(n,"-arrow")}),u.cloneElement(i,{ref:c(i)?a:void 0}))})),d={adjustX:1,adjustY:1},g=[0,0],w={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:g},top:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:g},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:g},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:g},bottom:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:g},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:g}},b=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function h(s,d){var g,h=s.arrow,y=void 0!==h&&h,C=s.prefixCls,R=void 0===C?"rc-dropdown":C,E=s.transitionName,N=s.animation,O=s.align,A=s.placement,x=void 0===A?"bottomLeft":A,P=s.placements,j=void 0===P?w:P,k=s.getPopupContainer,V=s.showAction,_=s.hideAction,F=s.overlayClassName,L=s.overlayStyle,S=s.visible,T=s.trigger,M=void 0===T?["hover"]:T,W=s.autoFocus,D=s.overlay,B=s.children,H=s.onVisibleChange,I=e(s,b),K=u.useState(),X=t(K,2),Y=X[0],q=X[1],z="visible"in s?S:Y,G=u.useRef(null),J=u.useRef(null),Q=u.useRef(null);u.useImperativeHandle(d,(function(){return G.current}));var U=function(e){q(e),null==H||H(e)};!function(e){var t=e.visible,o=e.triggerRef,r=e.onVisibleChange,n=e.autoFocus,i=e.overlayRef,s=f.useRef(!1),l=function(){var e,n;t&&(null===(e=o.current)||void 0===e||null===(n=e.focus)||void 0===n||n.call(e),null==r||r(!1))},c=function(){var e;return!(null===(e=i.current)||void 0===e||!e.focus||(i.current.focus(),s.current=!0,0))},u=function(e){switch(e.keyCode){case p:l();break;case v:var t=!1;s.current||(t=c()),t?e.preventDefault():l()}};f.useEffect((function(){return t?(window.addEventListener("keydown",u),n&&a(c,3),function(){window.removeEventListener("keydown",u),s.current=!1}):function(){s.current=!1}}),[t])}({visible:z,triggerRef:Q,onVisibleChange:U,autoFocus:W,overlayRef:J});var Z,$,ee,te=function(){return u.createElement(m,{ref:J,overlay:D,prefixCls:R,arrow:y})},oe=u.cloneElement(B,{className:i(null===(g=B.props)||void 0===g?void 0:g.className,z&&(Z=s.openClassName,void 0!==Z?Z:"".concat(R,"-open"))),ref:c(B)?l(Q,B.ref):void 0}),re=_;return re||-1===M.indexOf("contextMenu")||(re=["click"]),u.createElement(n,o({builtinPlacements:j},I,{prefixCls:R,ref:G,popupClassName:i(F,r({},"".concat(R,"-show-arrow"),y)),popupStyle:L,action:M,showAction:V,hideAction:re,popupPlacement:x,popupAlign:O,popupTransitionName:E,popupAnimation:N,popupVisible:z,stretch:($=s.minOverlayWidthMatchTrigger,ee=s.alignPoint,("minOverlayWidthMatchTrigger"in s?$:!ee)?"minWidth":""),popup:"function"==typeof D?te:te(),onPopupVisibleChange:U,onPopupClick:function(e){var t=s.onOverlayClick;q(!1),t&&t(e)},getPopupContainer:k}),oe)}const y=u.forwardRef(h);export{y as D};