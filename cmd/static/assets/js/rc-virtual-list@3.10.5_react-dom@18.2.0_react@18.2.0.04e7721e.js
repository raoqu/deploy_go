import{d as e,b as t,h as n,e as r,_ as o,a as u,f as i,c}from"./@babel_runtime@7.22.15.d775819b.js";import{r as a}from"./react@18.2.0.be237728.js";import{r as l}from"./react-dom@18.2.0_react@18.2.0.0bb4e6e8.js";import{c as s}from"./classnames@2.3.2.78a47676.js";import{R as f}from"./rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0.218d0dcd.js";import{l as v,J as d,b as h,h as m}from"./rc-util@5.37.0_react-dom@18.2.0_react@18.2.0.5dac6347.js";import"./react-is@16.13.1.80a4043c.js";var g=a.forwardRef((function(r,o){var u,i=r.height,c=r.offsetY,l=r.offsetX,v=r.children,d=r.prefixCls,h=r.onInnerResize,m=r.innerProps,g=r.rtl,p=r.extra,R={},E={display:"flex",flexDirection:"column"};void 0!==c&&(R={height:i,position:"relative",overflow:"hidden"},E=e(e({},E),{},(u={transform:"translateY(".concat(c,"px)")},t(u,g?"marginRight":"marginLeft",-l),t(u,"position","absolute"),t(u,"left",0),t(u,"right",0),t(u,"top",0),u)));return a.createElement("div",{style:R},a.createElement(f,{onResize:function(e){e.offsetHeight&&h&&h()}},a.createElement("div",n({style:E,className:s(t({},"".concat(d,"-holder-inner"),d)),ref:o},m),v,p)))}));function p(e,t){return("touches"in e?e.touches[0]:e)[t?"pageX":"pageY"]}g.displayName="Filler";var R=a.forwardRef((function(e,n){var o,u=e.prefixCls,i=e.rtl,c=e.scrollOffset,l=e.scrollRange,f=e.onStartMove,d=e.onStopMove,h=e.onScroll,m=e.horizontal,g=e.spinSize,R=e.containerSize,E=a.useState(!1),M=r(E,2),b=M[0],w=M[1],S=a.useState(null),x=r(S,2),y=x[0],L=x[1],H=a.useState(null),z=r(H,2),T=z[0],Y=z[1],N=!i,D=a.useRef(),_=a.useRef(),j=a.useState(!1),k=r(j,2),C=k[0],I=k[1],P=a.useRef(),X=function(){clearTimeout(P.current),I(!0),P.current=setTimeout((function(){I(!1)}),3e3)},O=l-R||0,K=R-g||0,V=O>0,W=a.useMemo((function(){return 0===c||0===O?0:c/O*K}),[c,O,K]),A=a.useRef({top:W,dragging:b,pageY:y,startTop:T});A.current={top:W,dragging:b,pageY:y,startTop:T};var F=function(e){w(!0),L(p(e,m)),Y(A.current.top),f(),e.stopPropagation(),e.preventDefault()};a.useEffect((function(){var e=function(e){e.preventDefault()},t=D.current,n=_.current;return t.addEventListener("touchstart",e),n.addEventListener("touchstart",F),function(){t.removeEventListener("touchstart",e),n.removeEventListener("touchstart",F)}}),[]);var J=a.useRef();J.current=O;var q=a.useRef();q.current=K,a.useEffect((function(){if(b){var e,t=function(t){var n=A.current,r=n.dragging,o=n.pageY,u=n.startTop;if(v.cancel(e),r){var i=p(t,m)-o,c=u;!N&&m?c-=i:c+=i;var a=J.current,l=q.current,s=l?c/l:0,f=Math.ceil(s*a);f=Math.max(f,0),f=Math.min(f,a),e=v((function(){h(f,m)}))}},n=function(){w(!1),d()};return window.addEventListener("mousemove",t),window.addEventListener("touchmove",t),window.addEventListener("mouseup",n),window.addEventListener("touchend",n),function(){window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",t),window.removeEventListener("mouseup",n),window.removeEventListener("touchend",n),v.cancel(e)}}}),[b]),a.useEffect((function(){X()}),[c]),a.useImperativeHandle(n,(function(){return{delayHidden:X}}));var B="".concat(u,"-scrollbar"),G={position:"absolute",visibility:C&&V?null:"hidden"},Q={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return m?(G.height=8,G.left=0,G.right=0,G.bottom=0,Q.height="100%",Q.width=g,N?Q.left=W:Q.right=W):(G.width=8,G.top=0,G.bottom=0,N?G.right=0:G.left=0,Q.width="100%",Q.height=g,Q.top=W),a.createElement("div",{ref:D,className:s(B,(o={},t(o,"".concat(B,"-horizontal"),m),t(o,"".concat(B,"-vertical"),!m),t(o,"".concat(B,"-visible"),C),o)),style:G,onMouseDown:function(e){e.stopPropagation(),e.preventDefault()},onMouseMove:X},a.createElement("div",{ref:_,className:s("".concat(B,"-thumb"),t({},"".concat(B,"-thumb-moving"),b)),style:Q,onMouseDown:F}))}));function E(e){var t=e.children,n=e.setRef,r=a.useCallback((function(e){n(e)}),[]);return a.cloneElement(t,{ref:r})}var M=function(){function e(){u(this,e),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return o(e,[{key:"set",value:function(e,t){this.maps[e]=t,this.id+=1}},{key:"get",value:function(e){return this.maps[e]}}]),e}();function b(e,t,n){var o=a.useState(e),u=r(o,2),i=u[0],c=u[1],l=a.useState(null),s=r(l,2),f=s[0],v=s[1];return a.useEffect((function(){var r=function(e,t,n){var r,o,u=e.length,i=t.length;if(0===u&&0===i)return null;u<i?(r=e,o=t):(r=t,o=e);var c={__EMPTY_ITEM__:!0};function a(e){return void 0!==e?n(e):c}for(var l=null,s=1!==Math.abs(u-i),f=0;f<o.length;f+=1){var v=a(r[f]);if(v!==a(o[f])){l=f,s=s||v!==a(o[f+1]);break}}return null===l?null:{index:l,multiple:s}}(i||[],e||[],t);void 0!==(null==r?void 0:r.index)&&(null==n||n(r.index),v(e[r.index])),c(e)}),[e]),[f]}var w="object"===("undefined"==typeof navigator?"undefined":i(navigator))&&/Firefox/i.test(navigator.userAgent);const S=function(e,t){var n=a.useRef(!1),r=a.useRef(null);var o=a.useRef({top:e,bottom:t});return o.current.top=e,o.current.bottom=t,function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],u=e<0&&o.current.top||e>0&&o.current.bottom;return t&&u?(clearTimeout(r.current),n.current=!1):u&&!n.current||(clearTimeout(r.current),n.current=!0,r.current=setTimeout((function(){n.current=!1}),50)),!n.current&&u}};function x(e,t,n,r,o){var u=a.useRef(0),i=a.useRef(null),c=a.useRef(null),l=a.useRef(!1),s=S(t,n);var f=a.useRef(null),d=a.useRef(null);return[function(t){if(e){v.cancel(d.current),d.current=v((function(){f.current=null}),2);var n=t.deltaX,a=t.deltaY,h=Math.abs(n),m=Math.abs(a);null===f.current&&(f.current=r&&h>m?"x":"y"),"x"===f.current?function(e){var t=e.deltaX;o(t,!0),w||e.preventDefault()}(t):function(e){v.cancel(i.current);var t=e.deltaY;u.current+=t,c.current=t,s(t)||(w||e.preventDefault(),i.current=v((function(){var e=l.current?10:1;o(u.current*e),u.current=0})))}(t)}},function(t){e&&(l.current=t.detail===c.current)}]}var y=14/15;var L=20;function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=e/(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)*100;return isNaN(t)&&(t=0),t=Math.max(t,L),t=Math.min(t,e/2),Math.floor(t)}var z=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender"],T=[],Y={overflowY:"auto",overflowAnchor:"none"};function N(o,u){var p=o.prefixCls,w=void 0===p?"rc-virtual-list":p,L=o.className,N=o.height,D=o.itemHeight,_=o.fullHeight,j=void 0===_||_,k=o.style,C=o.data,I=o.children,P=o.itemKey,X=o.virtual,O=o.direction,K=o.scrollWidth,V=o.component,W=void 0===V?"div":V,A=o.onScroll,F=o.onVirtualScroll,J=o.onVisibleChange,q=o.innerProps,B=o.extraRender,G=c(o,z),Q=!(!1===X||!N||!D),U=Q&&C&&D*C.length>N,Z="rtl"===O,$=s(w,t({},"".concat(w,"-rtl"),Z),L),ee=C||T,te=a.useRef(),ne=a.useRef(),re=a.useState(0),oe=r(re,2),ue=oe[0],ie=oe[1],ce=a.useState(0),ae=r(ce,2),le=ae[0],se=ae[1],fe=a.useState(!1),ve=r(fe,2),de=ve[0],he=ve[1],me=function(){he(!0)},ge=function(){he(!1)},pe=a.useCallback((function(e){return"function"==typeof P?P(e):null==e?void 0:e[P]}),[P]),Re={getKey:pe};function Ee(e){ie((function(t){var n=function(e){var t=e;Number.isNaN(Ae.current)||(t=Math.min(t,Ae.current));return t=Math.max(t,0),t}("function"==typeof e?e(t):e);return te.current.scrollTop=n,n}))}var Me=a.useRef({start:0,end:ee.length}),be=a.useRef(),we=b(ee,pe),Se=r(we,1)[0];be.current=Se;var xe=function(e,t,n){var o=a.useState(0),u=r(o,2),i=u[0],c=u[1],l=a.useRef(new Map),s=a.useRef(new M),f=a.useRef();function h(){v.cancel(f.current)}function m(){h(),f.current=v((function(){l.current.forEach((function(e,t){if(e&&e.offsetParent){var n=d(e),r=n.offsetHeight;s.current.get(t)!==r&&s.current.set(t,n.offsetHeight)}})),c((function(e){return e+1}))}))}return a.useEffect((function(){return h}),[]),[function(r,o){var u=e(r),i=l.current.get(u);o?(l.current.set(u,o),m()):l.current.delete(u),!i!=!o&&(o?null==t||t(r):null==n||n(r))},m,s.current,i]}(pe,null,null),ye=r(xe,4),Le=ye[0],He=ye[1],ze=ye[2],Te=ye[3],Ye=a.useMemo((function(){if(!Q)return{scrollHeight:void 0,start:0,end:ee.length-1,offset:void 0};var e;if(!U)return{scrollHeight:(null===(e=ne.current)||void 0===e?void 0:e.offsetHeight)||0,start:0,end:ee.length-1,offset:void 0};for(var t,n,r,o=0,u=ee.length,i=0;i<u;i+=1){var c=ee[i],a=pe(c),l=ze.get(a),s=o+(void 0===l?D:l);s>=ue&&void 0===t&&(t=i,n=o),s>ue+N&&void 0===r&&(r=i),o=s}return void 0===t&&(t=0,n=0,r=Math.ceil(N/D)),void 0===r&&(r=ee.length-1),{scrollHeight:o,start:t,end:r=Math.min(r+1,ee.length-1),offset:n}}),[U,Q,ue,ee,Te,N]),Ne=Ye.scrollHeight,De=Ye.start,_e=Ye.end,je=Ye.offset;Me.current.start=De,Me.current.end=_e;var ke=a.useState({width:0,height:N}),Ce=r(ke,2),Ie=Ce[0],Pe=Ce[1],Xe=a.useRef(),Oe=a.useRef(),Ke=a.useMemo((function(){return H(Ie.width,K)}),[Ie.width,K]),Ve=a.useMemo((function(){return H(Ie.height,Ne)}),[Ie.height,Ne]),We=Ne-N,Ae=a.useRef(We);Ae.current=We;var Fe=ue<=0,Je=ue>=We,qe=S(Fe,Je),Be=function(){return{x:Z?-le:le,y:ue}},Ge=a.useRef(Be()),Qe=m((function(){if(F){var e=Be();Ge.current.x===e.x&&Ge.current.y===e.y||(F(e),Ge.current=e)}}));function Ue(e,t){var n=e;t?(l.flushSync((function(){se(n)})),Qe()):Ee(n)}var Ze=function(e){var t=e,n=K-Ie.width;return t=Math.max(t,0),t=Math.min(t,n)},$e=m((function(e,t){t?(l.flushSync((function(){se((function(t){return Ze(t+(Z?-e:e))}))})),Qe()):Ee((function(t){return t+e}))})),et=x(Q,Fe,Je,!!K,$e),tt=r(et,2),nt=tt[0],rt=tt[1];!function(e,t,n){var r,o=a.useRef(!1),u=a.useRef(0),i=a.useRef(null),c=a.useRef(null),l=function(e){if(o.current){var t=Math.ceil(e.touches[0].pageY),r=u.current-t;u.current=t,n(r)&&e.preventDefault(),clearInterval(c.current),c.current=setInterval((function(){(!n(r*=y,!0)||Math.abs(r)<=.1)&&clearInterval(c.current)}),16)}},s=function(){o.current=!1,r()},f=function(e){r(),1!==e.touches.length||o.current||(o.current=!0,u.current=Math.ceil(e.touches[0].pageY),i.current=e.target,i.current.addEventListener("touchmove",l),i.current.addEventListener("touchend",s))};r=function(){i.current&&(i.current.removeEventListener("touchmove",l),i.current.removeEventListener("touchend",s))},h((function(){return e&&t.current.addEventListener("touchstart",f),function(){var e;null===(e=t.current)||void 0===e||e.removeEventListener("touchstart",f),r(),clearInterval(c.current)}}),[e])}(Q,te,(function(e,t){return!qe(e,t)&&(nt({preventDefault:function(){},deltaY:e}),!0)})),h((function(){function e(e){Q&&e.preventDefault()}var t=te.current;return t.addEventListener("wheel",nt),t.addEventListener("DOMMouseScroll",rt),t.addEventListener("MozMousePixelScroll",e),function(){t.removeEventListener("wheel",nt),t.removeEventListener("DOMMouseScroll",rt),t.removeEventListener("MozMousePixelScroll",e)}}),[Q]);var ot=function(){var e,t;null===(e=Xe.current)||void 0===e||e.delayHidden(),null===(t=Oe.current)||void 0===t||t.delayHidden()},ut=function(e,t,n,r,o,u,c,l){var s=a.useRef();return function(a){if(null!=a){if(v.cancel(s.current),"number"==typeof a)c(a);else if(a&&"object"===i(a)){var f,d=a.align;f="index"in a?a.index:t.findIndex((function(e){return o(e)===a.key}));var h=a.offset,m=void 0===h?0:h;!function i(a,l){if(!(a<0)&&e.current){var h=e.current.clientHeight,g=!1,p=l;if(h){for(var R=l||d,E=0,M=0,b=0,w=Math.min(t.length,f),S=0;S<=w;S+=1){var x=o(t[S]);M=E;var y=n.get(x);E=b=M+(void 0===y?r:y),S===f&&void 0===y&&(g=!0)}var L=null;switch(R){case"top":L=M-m;break;case"bottom":L=b-h+m;break;default:var H=e.current.scrollTop;M<H?p="top":b>H+h&&(p="bottom")}null!==L&&L!==e.current.scrollTop&&c(L)}s.current=v((function(){g&&u(),i(a-1,p)}),2)}}(3)}}else l()}}(te,ee,ze,D,pe,He,Ee,ot);a.useImperativeHandle(u,(function(){return{getScrollInfo:Be,scrollTo:function(e){var t;(t=e)&&"object"===i(t)&&("left"in t||"top"in t)?(void 0!==e.left&&se(Ze(e.left)),ut(e.top)):ut(e)}}})),h((function(){if(J){var e=ee.slice(De,_e+1);J(e,ee)}}),[De,_e,ee]);var it=function(e,t,n,o){var u=a.useMemo((function(){return[new Map,[]]}),[e,n.id,o]),i=r(u,2),c=i[0],l=i[1];return function(r){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,i=c.get(r),a=c.get(u);if(void 0===i||void 0===a)for(var s=e.length,f=l.length;f<s;f+=1){var v,d=e[f],h=t(d);c.set(h,f);var m=null!==(v=n.get(h))&&void 0!==v?v:o;if(l[f]=(l[f-1]||0)+m,h===r&&(i=f),h===u&&(a=f),void 0!==i&&void 0!==a)break}return{top:l[i-1]||0,bottom:l[a]}}}(ee,pe,ze,D),ct=null==B?void 0:B({start:De,end:_e,virtual:U,offsetX:le,offsetY:je,rtl:Z,getSize:it}),at=function(e,t,n,r,o,u,i){var c=i.getKey;return e.slice(t,n+1).map((function(e,n){var i=u(e,t+n,{style:{width:r}}),l=c(e);return a.createElement(E,{key:l,setRef:function(t){return o(e,t)}},i)}))}(ee,De,_e,K,Le,I,Re),lt=null;N&&(lt=e(t({},j?"height":"maxHeight",N),Y),Q&&(lt.overflowY="hidden",K&&(lt.overflowX="hidden"),de&&(lt.pointerEvents="none")));var st={};return Z&&(st.dir="rtl"),a.createElement("div",n({style:e(e({},k),{},{position:"relative"}),className:$},st,G),a.createElement(f,{onResize:function(e){Pe(e)}},a.createElement(W,{className:"".concat(w,"-holder"),style:lt,ref:te,onScroll:function(e){var t=e.currentTarget.scrollTop;t!==ue&&Ee(t),null==A||A(e),Qe()},onMouseEnter:ot},a.createElement(g,{prefixCls:w,height:Ne,offsetX:le,offsetY:je,scrollWidth:K,onInnerResize:He,ref:ne,innerProps:q,rtl:Z,extra:ct},at))),U&&Ne>N&&a.createElement(R,{ref:Xe,prefixCls:w,scrollOffset:ue,scrollRange:Ne,rtl:Z,onScroll:Ue,onStartMove:me,onStopMove:ge,spinSize:Ve,containerSize:Ie.height}),U&&K&&a.createElement(R,{ref:Oe,prefixCls:w,scrollOffset:le,scrollRange:K,rtl:Z,onScroll:Ue,onStartMove:me,onStopMove:ge,spinSize:Ke,containerSize:Ie.width,horizontal:!0}))}var D=a.forwardRef(N);D.displayName="List";export{D as L};
