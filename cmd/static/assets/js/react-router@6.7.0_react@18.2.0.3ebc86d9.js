import{i as e,g as t,r,j as n,p as a,m as o,A as l,s,a as u}from"./@remix-run_router@1.3.0.1d5183a9.js";import{R as i,r as c}from"./react@18.2.0.be237728.js";
/**
 * React Router v6.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}const p="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:d,useEffect:h,useLayoutEffect:f,useDebugValue:v}=i;function g(e){const t=e.getSnapshot,r=e.value;try{const e=t();return!p(r,e)}catch(n){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement;"useSyncExternalStore"in i&&i.useSyncExternalStore;const E=c.createContext(null),x=c.createContext(null),y=c.createContext(null),C=c.createContext(null),b=c.createContext({outlet:null,matches:[]}),R=c.createContext(null);function w(){return null!=c.useContext(C)}function U(){return w()||e(!1),c.useContext(C).location}function P(){w()||e(!1);let{basename:a,navigator:o}=c.useContext(y),{matches:l}=c.useContext(b),{pathname:s}=U(),u=JSON.stringify(t(l).map((e=>e.pathnameBase))),i=c.useRef(!1);return c.useEffect((()=>{i.current=!0})),c.useCallback((function(e,t){if(void 0===t&&(t={}),!i.current)return;if("number"==typeof e)return void o.go(e);let l=r(e,JSON.parse(u),s,"path"===t.relative);"/"!==a&&(l.pathname="/"===l.pathname?a:n([a,l.pathname])),(t.replace?o.replace:o.push)(l,t.state,t)}),[a,o,u,s])}const S=c.createContext(null);function O(e){let t=c.useContext(b).outlet;return t?c.createElement(S.Provider,{value:e},t):t}function j(t,r){w()||e(!1);let{navigator:s}=c.useContext(y),u=c.useContext(x),{matches:i}=c.useContext(b),p=i[i.length-1],d=p?p.params:{};!p||p.pathname;let h=p?p.pathnameBase:"/";p&&p.route;let f,v=U();if(r){var g;let t="string"==typeof r?a(r):r;"/"===h||(null==(g=t.pathname)?void 0:g.startsWith(h))||e(!1),f=t}else f=v;let E=f.pathname||"/",R="/"===h?E:E.slice(h.length)||"/",P=o(t,{pathname:R}),S=function(t,r,n){void 0===r&&(r=[]);if(null==t){if(null==n||!n.errors)return null;t=n.matches}let a=t,o=null==n?void 0:n.errors;if(null!=o){let t=a.findIndex((e=>e.route.id&&(null==o?void 0:o[e.route.id])));t>=0||e(!1),a=a.slice(0,Math.min(a.length,t+1))}return a.reduceRight(((e,t,l)=>{let s=t.route.id?null==o?void 0:o[t.route.id]:null,u=n?t.route.errorElement||c.createElement(B,null):null,i=r.concat(a.slice(0,l+1)),m=()=>c.createElement(k,{match:t,routeContext:{outlet:e,matches:i}},s?u:void 0!==t.route.element?t.route.element:e);return n&&(t.route.errorElement||0===l)?c.createElement(D,{location:n.location,component:u,error:s,children:m(),routeContext:{outlet:null,matches:i}}):m()}),null)}(P&&P.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:n([h,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:n([h,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,u||void 0);return r&&S?c.createElement(C.Provider,{value:{location:m({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:l.Pop}},S):S}function B(){let t=function(){var t;let r=c.useContext(R),n=function(t){let r=c.useContext(x);return r||e(!1),r}(N.UseRouteError),a=function(t){let r=function(t){let r=c.useContext(b);return r||e(!1),r}(),n=r.matches[r.matches.length-1];return n.route.id||e(!1),n.route.id}(N.UseRouteError);if(r)return r;return null==(t=n.errors)?void 0:t[a]}(),r=u(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unhandled Thrown Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},r),n?c.createElement("pre",{style:o},n):null,c.createElement("p",null,"💿 Hey developer 👋"),c.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",c.createElement("code",{style:l},"errorElement")," props on ",c.createElement("code",{style:l},"<Route>")))}class D extends c.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){}render(){return this.state.error?c.createElement(b.Provider,{value:this.props.routeContext},c.createElement(R.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k(e){let{routeContext:t,match:r,children:n}=e,a=c.useContext(E);return a&&a.static&&a.staticContext&&r.route.errorElement&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),c.createElement(b.Provider,{value:t},n)}var L,M,N,T,A,F;function J(t){let{basename:r="/",children:n=null,location:o,navigationType:u=l.Pop,navigator:i,static:m=!1}=t;w()&&e(!1);let p=r.replace(/^\/*/,"/"),d=c.useMemo((()=>({basename:p,navigator:i,static:m})),[p,i,m]);"string"==typeof o&&(o=a(o));let{pathname:h="/",search:f="",hash:v="",state:g=null,key:E="default"}=o,x=c.useMemo((()=>{let e=s(h,p);return null==e?null:{pathname:e,search:f,hash:v,state:g,key:E}}),[p,h,f,v,g,E]);return null==x?null:c.createElement(y.Provider,{value:d},c.createElement(C.Provider,{children:n,value:{location:x,navigationType:u}}))}(M=L||(L={})).UseBlocker="useBlocker",M.UseRevalidator="useRevalidator",(T=N||(N={})).UseLoaderData="useLoaderData",T.UseActionData="useActionData",T.UseRouteError="useRouteError",T.UseNavigation="useNavigation",T.UseRouteLoaderData="useRouteLoaderData",T.UseMatches="useMatches",T.UseRevalidator="useRevalidator",(F=A||(A={}))[F.pending=0]="pending",F[F.success=1]="success",F[F.error=2]="error",new Promise((()=>{}));export{J as R,U as a,O as b,j as c,P as u};