import{e,h as n,b as t,d as o,g as c,c as r}from"./@babel_runtime@7.22.15.d775819b.js";import{r as a,a as i}from"./react@18.2.0.be237728.js";import{r as s}from"./react-dom@18.2.0_react@18.2.0.0bb4e6e8.js";import{c as l}from"./classnames@2.3.2.78a47676.js";import{a as u}from"./rc-motion@2.9.0_react-dom@18.2.0_react@18.2.0.9878debb.js";import{K as f}from"./rc-util@5.37.0_react-dom@18.2.0_react@18.2.0.5dac6347.js";var m=a.forwardRef((function(o,c){var r=o.prefixCls,i=o.style,s=o.className,u=o.duration,m=void 0===u?4.5:u,d=o.eventKey,v=o.content,y=o.closable,p=o.closeIcon,N=void 0===p?"x":p,k=o.props,C=o.onClick,E=o.onNoticeClose,x=o.times,g=a.useState(!1),h=e(g,2),b=h[0],R=h[1],j=function(){E(d)};a.useEffect((function(){if(!b&&m>0){var e=setTimeout((function(){j()}),1e3*m);return function(){clearTimeout(e)}}}),[m,b,x]);var A="".concat(r,"-notice");return a.createElement("div",n({},k,{ref:c,className:l(A,s,t({},"".concat(A,"-closable"),y)),style:i,onMouseEnter:function(){R(!0)},onMouseLeave:function(){R(!1)},onClick:C}),a.createElement("div",{className:"".concat(A,"-content")},v),y&&a.createElement("a",{tabIndex:0,className:"".concat(A,"-close"),onKeyDown:function(e){"Enter"!==e.key&&"Enter"!==e.code&&e.keyCode!==f.ENTER||j()},onClick:function(e){e.preventDefault(),e.stopPropagation(),j()}},N))})),d=i.createContext({}),v=function(e){var n=e.children,t=e.classNames;return i.createElement(d.Provider,{value:{classNames:t}},n)},y=function(e){var t=e.configList,c=e.placement,r=e.prefixCls,s=e.className,f=e.style,v=e.motion,y=e.onAllNoticeRemoved,p=e.onNoticeClose,N=a.useContext(d).classNames,k=t.map((function(e){return{config:e,key:e.key}})),C="function"==typeof v?v(c):v;return i.createElement(u,n({key:c,className:l(r,"".concat(r,"-").concat(c),null==N?void 0:N.list,s),style:f,keys:k,motionAppear:!0},C,{onAllRemoved:function(){y(c)}}),(function(e,t){var c=e.config,a=e.className,s=e.style,u=c,f=u.key,d=u.times,v=c,y=v.className,k=v.style;return i.createElement(m,n({},c,{ref:t,prefixCls:r,className:l(a,y,null==N?void 0:N.notice),style:o(o({},s),k),times:d,key:f,eventKey:f,onNoticeClose:p}))}))},p=a.forwardRef((function(n,t){var r=n.prefixCls,i=void 0===r?"rc-notification":r,l=n.container,u=n.motion,f=n.maxCount,m=n.className,d=n.style,v=n.onAllRemoved,p=n.renderNotifications,N=a.useState([]),k=e(N,2),C=k[0],E=k[1],x=function(e){var n,t=C.find((function(n){return n.key===e}));null==t||null===(n=t.onClose)||void 0===n||n.call(t),E((function(n){return n.filter((function(n){return n.key!==e}))}))};a.useImperativeHandle(t,(function(){return{open:function(e){E((function(n){var t,r=c(n),a=r.findIndex((function(n){return n.key===e.key})),i=o({},e);a>=0?(i.times=((null===(t=n[a])||void 0===t?void 0:t.times)||0)+1,r[a]=i):(i.times=0,r.push(i));return f>0&&r.length>f&&(r=r.slice(-f)),r}))},close:function(e){x(e)},destroy:function(){E([])}}}));var g=a.useState({}),h=e(g,2),b=h[0],R=h[1];a.useEffect((function(){var e={};C.forEach((function(n){var t=n.placement,o=void 0===t?"topRight":t;o&&(e[o]=e[o]||[],e[o].push(n))})),Object.keys(b).forEach((function(n){e[n]=e[n]||[]})),R(e)}),[C]);var j=function(e){R((function(n){var t=o({},n);return(t[e]||[]).length||delete t[e],t}))},A=a.useRef(!1);if(a.useEffect((function(){Object.keys(b).length>0?A.current=!0:A.current&&(null==v||v(),A.current=!1)}),[b]),!l)return null;var _=Object.keys(b);return s.createPortal(a.createElement(a.Fragment,null,_.map((function(e){var n=b[e],t=a.createElement(y,{key:e,configList:n,placement:e,prefixCls:i,className:null==m?void 0:m(e),style:null==d?void 0:d(e),motion:u,onNoticeClose:x,onAllNoticeRemoved:j});return p?p(t,{prefixCls:i,key:e}):t}))),l)})),N=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","renderNotifications"],k=function(){return document.body},C=0;function E(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.getContainer,o=void 0===t?k:t,i=n.motion,s=n.prefixCls,l=n.maxCount,u=n.className,f=n.style,m=n.onAllRemoved,d=n.renderNotifications,v=r(n,N),y=a.useState(),E=e(y,2),x=E[0],g=E[1],h=a.useRef(),b=a.createElement(p,{container:x,ref:h,prefixCls:s,motion:i,maxCount:l,className:u,style:f,onAllRemoved:m,renderNotifications:d}),R=a.useState([]),j=e(R,2),A=j[0],_=j[1],w=a.useMemo((function(){return{open:function(e){var n=function(){for(var e={},n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return t.forEach((function(n){n&&Object.keys(n).forEach((function(t){var o=n[t];void 0!==o&&(e[t]=o)}))})),e}(v,e);null!==n.key&&void 0!==n.key||(n.key="rc-notification-".concat(C),C+=1),_((function(e){return[].concat(c(e),[{type:"open",config:n}])}))},close:function(e){_((function(n){return[].concat(c(n),[{type:"close",key:e}])}))},destroy:function(){_((function(e){return[].concat(c(e),[{type:"destroy"}])}))}}}),[]);return a.useEffect((function(){g(o())})),a.useEffect((function(){h.current&&A.length&&(A.forEach((function(e){switch(e.type){case"open":h.current.open(e.config);break;case"close":h.current.close(e.key);break;case"destroy":h.current.destroy()}})),_((function(e){return e.filter((function(e){return!A.includes(e)}))})))}),[A]),[w,b]}export{m as N,v as a,E as u};