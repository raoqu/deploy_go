import{r,j as t}from"./react@18.2.0.2fdb0b9b.js";import{u as e}from"./react-i18next@13.2.2_i18next@23.4.6_react-dom@18.2.0_react@18.2.0.77582941.js";import{B as c,n as o,o as s}from"./antd@5.8.6_react-dom@18.2.0_react@18.2.0.81df36e9.js";import"./@babel_runtime@7.22.15.d775819b.js";import"./rc-util@5.37.0_react-dom@18.2.0_react@18.2.0.0a514d36.js";import"./react-is@16.13.1.80a4043c.js";import"./react-dom@18.2.0_react@18.2.0.8df8243d.js";import"./scheduler@0.23.0.c51d43b5.js";import"./@ant-design_cssinjs@1.17.0_react-dom@18.2.0_react@18.2.0.00d822c9.js";import"./@emotion_hash@0.8.0.b17c1a96.js";import"./@emotion_unitless@0.7.5.ede54c47.js";import"./stylis@4.3.0.b6f45693.js";import"./classnames@2.3.2.78a47676.js";import"./rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0.1b9e393b.js";import"./resize-observer-polyfill@1.5.1.ad543aa3.js";import"./rc-motion@2.9.0_react-dom@18.2.0_react@18.2.0.be0e8055.js";import"./rc-notification@5.1.1_react-dom@18.2.0_react@18.2.0.42cd2055.js";import"./@ant-design_icons@5.2.6_react-dom@18.2.0_react@18.2.0.5014c5db.js";import"./@ant-design_icons-svg@4.3.1.ed2b4510.js";import"./@ant-design_colors@7.0.0.8d55ff50.js";import"./@ctrl_tinycolor@3.6.1.4982d949.js";import"./rc-checkbox@3.1.0_react-dom@18.2.0_react@18.2.0.b81f51ae.js";import"./dayjs@1.11.9.0ab4705d.js";import"./rc-tabs@12.9.0_react-dom@18.2.0_react@18.2.0.c30b993b.js";import"./rc-dropdown@4.1.0_react-dom@18.2.0_react@18.2.0.f95eb8df.js";import"./@rc-component_trigger@1.15.6_react-dom@18.2.0_react@18.2.0.4df2064d.js";import"./@rc-component_portal@1.1.2_react-dom@18.2.0_react@18.2.0.61e5d733.js";import"./rc-menu@9.10.0_react-dom@18.2.0_react@18.2.0.7efaf49a.js";import"./rc-overflow@1.3.2_react-dom@18.2.0_react@18.2.0.94eeb4eb.js";import"./rc-select@14.7.4_react-dom@18.2.0_react@18.2.0.7cdd5d00.js";import"./rc-virtual-list@3.10.5_react-dom@18.2.0_react@18.2.0.9ada49ae.js";import"./rc-input-number@8.0.4_react-dom@18.2.0_react@18.2.0.c1093a58.js";import"./@rc-component_mini-decimal@1.1.0.aef7780e.js";import"./rc-input@1.1.1_react-dom@18.2.0_react@18.2.0.5213b704.js";import"./rc-drawer@6.2.0_react-dom@18.2.0_react@18.2.0.1a469b7a.js";import"./rc-field-form@1.36.2_react-dom@18.2.0_react@18.2.0.657035dd.js";import"./async-validator@4.2.5.cf877c1f.js";import"./scroll-into-view-if-needed@3.0.10.0f44d9d0.js";import"./compute-scroll-into-view@3.0.3.9a30535a.js";import"./rc-dialog@9.1.0_react-dom@18.2.0_react@18.2.0.c5c2ba68.js";import"./rc-rate@2.12.0_react-dom@18.2.0_react@18.2.0.ea71b180.js";import"./rc-slider@10.2.1_react-dom@18.2.0_react@18.2.0.cc7c2c01.js";import"./rc-switch@4.1.0_react-dom@18.2.0_react@18.2.0.c2701818.js";import"./rc-tree@5.7.10_react-dom@18.2.0_react@18.2.0.26d29bf3.js";import"./rc-pagination@3.6.1_react-dom@18.2.0_react@18.2.0.9cb0db55.js";import"./rc-textarea@1.3.4_react-dom@18.2.0_react@18.2.0.09967ddd.js";import"./rc-tree-select@5.11.2_react-dom@18.2.0_react@18.2.0.104dd79d.js";import"./rc-upload@4.3.4_react-dom@18.2.0_react@18.2.0.9b0c9652.js";import"./rc-picker@3.13.1_dayjs@1.11.9_react-dom@18.2.0_react@18.2.0.0b5043c0.js";import"./rc-progress@3.4.2_react-dom@18.2.0_react@18.2.0.957514a6.js";import"./rc-tooltip@6.0.1_react-dom@18.2.0_react@18.2.0.2edc6aa6.js";function a(a){const{title:i,isVisible:m,treeData:_,checkedKeys:p,onClose:d,onSubmit:j}=a,{t:n}=e(),[l,u]=r.useState(p);r.useEffect((()=>{u(a.checkedKeys)}),[a.checkedKeys]);const h=t.jsx(c,{type:"primary",onClick:()=>{j(l)},children:n("public.submit")});return t.jsx(o,{open:m,title:i||n("system.rightsProfile"),placement:"right",extra:h,onClose:d,children:t.jsx(s,{checkable:!0,checkedKeys:l,treeData:_,onCheck:r=>{u(r)}})})}export{a as default};
