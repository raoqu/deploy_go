import{c as e}from"./classnames@2.3.2.78a47676.js";import{r as n,W as a}from"./react@18.2.0.2fdb0b9b.js";import{d as t,b as l,h as r,f as s,c as o,e as u,g as c}from"./@babel_runtime@7.22.15.d775819b.js";import{A as i,y as f}from"./rc-util@5.37.0_react-dom@18.2.0_react@18.2.0.0a514d36.js";function d(e){return!(!e.addonBefore&&!e.addonAfter)}function p(e){return!!(e.prefix||e.suffix||e.allowClear)}function v(e,n,a,t){if(a){var l=n;if("click"===n.type){var r=e.cloneNode(!0);return l=Object.create(n,{target:{value:r},currentTarget:{value:r}}),r.value="",void a(l)}if(void 0!==t)return l=Object.create(n,{target:{value:e},currentTarget:{value:e}}),e.value=t,void a(l);a(l)}}function m(e,n){if(e){e.focus(n);var a=(n||{}).cursor;if(a){var t=e.value.length;switch(a){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t)}}}}function x(e){return null==e?"":String(e)}var g=function(o){var u,c,i=o.inputElement,f=o.prefixCls,v=o.prefix,m=o.suffix,x=o.addonBefore,g=o.addonAfter,h=o.className,y=o.style,N=o.disabled,E=o.readOnly,b=o.focused,w=o.triggerFocus,C=o.allowClear,R=o.value,S=o.handleReset,j=o.hidden,B=o.classes,W=o.classNames,k=o.dataAttrs,A=o.styles,F=o.components,D=(null==F?void 0:F.affixWrapper)||"span",I=(null==F?void 0:F.groupWrapper)||"span",z=(null==F?void 0:F.wrapper)||"span",K=(null==F?void 0:F.groupAddon)||"span",L=n.useRef(null),O=n.cloneElement(i,{value:R,hidden:j,className:e(null===(u=i.props)||void 0===u?void 0:u.className,!p(o)&&!d(o)&&h)||null,style:t(t({},null===(c=i.props)||void 0===c?void 0:c.style),p(o)||d(o)?{}:y)});if(p(o)){var P,_="".concat(f,"-affix-wrapper"),T=e(_,(l(P={},"".concat(_,"-disabled"),N),l(P,"".concat(_,"-focused"),b),l(P,"".concat(_,"-readonly"),E),l(P,"".concat(_,"-input-with-clear-btn"),m&&C&&R),P),!d(o)&&h,null==B?void 0:B.affixWrapper,null==W?void 0:W.affixWrapper),V=(m||C)&&a.createElement("span",{className:e("".concat(f,"-suffix"),null==W?void 0:W.suffix),style:null==A?void 0:A.suffix},function(){var n;if(!C)return null;var t=!N&&!E&&R,r="".concat(f,"-clear-icon"),o="object"===s(C)&&null!=C&&C.clearIcon?C.clearIcon:"✖";return a.createElement("span",{onClick:S,onMouseDown:function(e){return e.preventDefault()},className:e(r,(n={},l(n,"".concat(r,"-hidden"),!t),l(n,"".concat(r,"-has-suffix"),!!m),n)),role:"button",tabIndex:-1},o)}(),m);O=a.createElement(D,r({className:T,style:t(t({},d(o)?void 0:y),null==A?void 0:A.affixWrapper),hidden:!d(o)&&j,onClick:function(e){var n;null!==(n=L.current)&&void 0!==n&&n.contains(e.target)&&(null==w||w())}},null==k?void 0:k.affixWrapper,{ref:L}),v&&a.createElement("span",{className:e("".concat(f,"-prefix"),null==W?void 0:W.prefix),style:null==A?void 0:A.prefix},v),n.cloneElement(i,{value:R,hidden:null}),V)}if(d(o)){var H="".concat(f,"-group"),M="".concat(H,"-addon"),q=e("".concat(f,"-wrapper"),H,null==B?void 0:B.wrapper),G=e("".concat(f,"-group-wrapper"),h,null==B?void 0:B.group);return a.createElement(I,{className:G,style:y,hidden:j},a.createElement(z,{className:q},x&&a.createElement(K,{className:M},x),n.cloneElement(O,{hidden:null}),g&&a.createElement(K,{className:M},g)))}return O},h=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","classes","classNames","styles"],y=n.forwardRef((function(d,p){var y=d.autoComplete,N=d.onChange,E=d.onFocus,b=d.onBlur,w=d.onPressEnter,C=d.onKeyDown,R=d.prefixCls,S=void 0===R?"rc-input":R,j=d.disabled,B=d.htmlSize,W=d.className,k=d.maxLength,A=d.suffix,F=d.showCount,D=d.type,I=void 0===D?"text":D,z=d.classes,K=d.classNames,L=d.styles,O=o(d,h),P=i(d.defaultValue,{value:d.value}),_=u(P,2),T=_[0],V=_[1],H=n.useState(!1),M=u(H,2),q=M[0],G=M[1],J=n.useRef(null),Q=function(e){J.current&&m(J.current,e)};n.useImperativeHandle(p,(function(){return{focus:Q,blur:function(){var e;null===(e=J.current)||void 0===e||e.blur()},setSelectionRange:function(e,n,a){var t;null===(t=J.current)||void 0===t||t.setSelectionRange(e,n,a)},select:function(){var e;null===(e=J.current)||void 0===e||e.select()},input:J.current}})),n.useEffect((function(){G((function(e){return(!e||!j)&&e}))}),[j]);var U,X=function(e){void 0===d.value&&V(e.target.value),J.current&&v(J.current,e,N)},Y=function(e){w&&"Enter"===e.key&&w(e),null==C||C(e)},Z=function(e){G(!0),null==E||E(e)},$=function(e){G(!1),null==b||b(e)};return a.createElement(g,r({},O,{prefixCls:S,className:W,inputElement:(U=f(d,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","classes","htmlSize","styles","classNames"]),a.createElement("input",r({autoComplete:y},U,{onChange:X,onFocus:Z,onBlur:$,onKeyDown:Y,className:e(S,l({},"".concat(S,"-disabled"),j),null==K?void 0:K.input),style:null==L?void 0:L.input,ref:J,size:B,type:I}))),handleReset:function(e){V(""),Q(),J.current&&v(J.current,e,N)},value:x(T),focused:q,triggerFocus:Q,suffix:function(){var n=Number(k)>0;if(A||F){var r=x(T),o=c(r).length,u="object"===s(F)?F.formatter({value:r,count:o,maxLength:k}):"".concat(o).concat(n?" / ".concat(k):"");return a.createElement(a.Fragment,null,!!F&&a.createElement("span",{className:e("".concat(S,"-show-count-suffix"),l({},"".concat(S,"-show-count-has-suffix"),!!A),null==K?void 0:K.count),style:t({},null==L?void 0:L.count)},u),A)}return null}(),disabled:j,classes:z,classNames:K,styles:L}))}));export{g as B,y as I,x as f,v as r,m as t};