import{r as e}from"./react@18.2.0.be237728.js";import{R as t}from"./react-router@6.7.0_react@18.2.0.3ebc86d9.js";import{c as r}from"./@remix-run_router@1.3.0.1d5183a9.js";
/**
 * React Router DOM v6.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function o(o){let{basename:a,children:n,window:s}=o,c=e.useRef();null==c.current&&(c.current=r({window:s,v5Compat:!0}));let i=c.current,[l,u]=e.useState({action:i.action,location:i.location});return e.useLayoutEffect((()=>i.listen(u)),[i]),e.createElement(t,{basename:a,children:n,location:l.location,navigationType:l.action,navigator:i})}var a,n,s,c;(n=a||(a={})).UseScrollRestoration="useScrollRestoration",n.UseSubmitImpl="useSubmitImpl",n.UseFetcher="useFetcher",(c=s||(s={})).UseFetchers="useFetchers",c.UseScrollRestoration="useScrollRestoration";export{o as H};
