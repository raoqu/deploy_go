import{r as e}from"./index.45c4b917.js";import{r as t,j as a}from"./react@18.2.0.be237728.js";import{I as l}from"./@iconify_react@3.2.2_react@18.2.0.f23699ec.js";import{D as s}from"./react-draggable@4.4.5_react-dom@18.2.0_react@18.2.0.025c00bc.js";import{u as n}from"./react-i18next@13.2.2_i18next@23.4.6_react-dom@18.2.0_react@18.2.0.d7b3767f.js";import{M as r,T as i,b as o,I as c,c as u,d,f as p,g as m,h,i as x,j as b,k as f,l as g,U as j,F as v}from"./antd@5.8.6_react-dom@18.2.0_react@18.2.0.e8c62756.js";import{T as w,D as C}from"./constants.216e4f99.js";import{u as S}from"./ahooks@3.7.8_react@18.2.0.b50573fe.js";function P(t){return e.get("/authority/menu/page",{params:t})}function k(t){return e.post("/authority/menu",t)}function F(t,a){return e.put(`/authority/menu/${t}`,a)}function y(t){return e.put("/authority/menu/authorize/save",t)}function N(e){const{width:o,children:c,wrapClassName:u,onCancel:d}=e,{t:p}=n(),[m,h]=t.useState(!0),[x,b]=t.useState(!1),[f,g]=t.useState({left:0,top:0,bottom:0,right:0}),j=t.useRef(null),v=(e,t)=>{var a,l;const{clientWidth:s,clientHeight:n}=window.document.documentElement,r=null==(l=null==(a=j.current)?void 0:a.getBoundingClientRect)?void 0:l.call(a);r&&g({left:-r.left+t.x,right:s-(r.right-t.x),top:-r.top+t.y,bottom:n-(r.bottom-t.y)})},w=()=>{b((e=>(e||g({left:0,top:0,bottom:0,right:0}),!e)))},C=a.jsxs("div",{className:"w-full cursor-move flex items-center justify-between",onMouseOver:()=>{m&&h(!1)},onMouseOut:()=>h(!0),children:[a.jsx("span",{children:e.title||""}),a.jsxs("div",{className:"flex items-center justify-end absolute right-15px",children:[a.jsx(i,{className:"hover:text-#404040",placement:"bottom",title:p(x?"public.exitMaximized":"public.maximize"),children:a.jsx("div",{className:"p-10px mt-3px cursor-pointer",onClick:w,children:a.jsx(l,{className:"text-lg",icon:x?"ant-design:fullscreen-exit-outlined":"ant-design:fullscreen-outlined"})})}),a.jsx(i,{placement:"bottom",title:p("public.close"),children:a.jsx("div",{className:"p-10px mt-3px cursor-pointer",onClick:()=>null==d?void 0:d(),children:a.jsx(l,{className:"text-lg",icon:"ant-design:close-outlined"})})})]})]});return a.jsx(r,{destroyOnClose:!0,closable:!1,maskClosable:!1,modalRender:e=>a.jsx(s,{disabled:m,onStart:v,bounds:x?void 0:f,position:x?{x:0,y:0}:void 0,children:a.jsx("div",{ref:j,children:e})}),okText:p("public.ok"),cancelText:p("public.cancel"),...e,title:C,wrapClassName:x?"full-modal":u||"",width:x?"100%":o||520,children:c})}function $(e){switch(e){case"Switch":case"Checkbox":case"CheckboxGroup":return"checked";case"Upload":return"fileList";default:return"value"}}function R(e,t){switch(t){case"Select":return{allowClear:!0,placeholder:e("public.inputPleaseSelect")};case"InputNumber":return{placeholder:e("public.inputPleaseEnter")};case"Checkbox":case"CheckboxGroup":return{};case"DatePicker":return{placeholder:e("public.inputPleaseSelect"),format:C};case"RangePicker":return{placeholder:[e("public.inputPleaseSelect"),e("public.inputPleaseSelect")],format:[C,C]};case"TimePicker":return{placeholder:e("public.inputPleaseSelect"),format:w};case"TimeRangePicker":return{placeholder:[e("public.inputPleaseSelect"),e("public.inputPleaseSelect")],format:[w,w]};default:return{allowClear:!0,placeholder:e("public.inputPleaseEnter")}}}const T=new Array(5).fill(0).map(((e,t)=>t+1));function _(e){const{strength:t}=e;return a.jsx("div",{className:"flex items-center",children:T.map((e=>a.jsx("div",{className:`\n              w-19%\n              h-5px\n              mt-5px\n              mr-1%\n              rounded-10px\n              bg-light-900\n              ${e<=t&&t>3?"!bg-green-400":""}\n              ${e<=t&&3===t?"!bg-yellow-400":""}\n              ${e<=t&&t<3?"!bg-red-400":""}\n            `},e)))})}const E=new Map;function I(e,t){const{component:l,componentProps:s}=t;if("customize"===l){const{render:e}=t;if(!e)return a.jsx(a.Fragment,{});!function(e,t){E.set(e,t)}("customize",e)}const n=E.get(l);return n?a.jsxs(a.Fragment,{children:[a.jsx(n,{...R(e,l),...s}),t.unit&&a.jsx("span",{className:"ml-5px whitespace-nowrap",children:t.unit})]}):a.jsx(a.Fragment,{})}function z(e){const{list:l,data:s,children:r,labelCol:i,wrapperCol:o,formRef:c,handleFinish:u}=e,{t:d}=n(),[p]=v.useForm();t.useImperativeHandle(c,(()=>({getFieldValue:e=>p.getFieldValue(e)||{},getFieldsValue:()=>p.getFieldsValue()||{},handleReset:()=>{p.resetFields()},handleSubmit:()=>{p.submit()}}))),t.useEffect((()=>{p.resetFields(),p.setFieldsValue(e.data)}),[p,e.data]);const m={required:d("public.requiredForm",{label:"${label}"}),types:{email:d("public.validateEmail",{label:"${label}"}),number:d("public.validateNumber",{label:"${label}"})},number:{range:d("public.validateRange",{label:"${label}",max:"${max}",min:"${min}"})}};return a.jsx("div",{children:a.jsxs(v,{form:p,labelCol:i||{span:6},wrapperCol:o||{span:15},initialValues:s,validateMessages:m,onFinishFailed:e=>{},autoComplete:"off",children:[null==l?void 0:l.map((e=>t.createElement(v.Item,{...e,key:`${e.name}`,label:e.label,name:e.name,rules:e.hidden?[]:e.rules,className:e.hidden?"!hidden":"",valuePropName:$(e.component)},I(d,e)))),r]})})}E.set("Input",c),E.set("TextArea",c.TextArea),E.set("InputNumber",u),E.set("InputPassword",c.Password),E.set("AutoComplete",d),E.set("Select",p),E.set("TreeSelect",m),E.set("Checkbox",h),E.set("CheckboxGroup",h.Group),E.set("RadioGroup",x.Group),E.set("Switch",b),E.set("Rate",f),E.set("Slider",g),E.set("Upload",j),E.set("Transfer",(function(e){const{value:l}=e,[s,n]=t.useState(l||[]);return a.jsx(o,{...e,targetKeys:s,onChange:t=>{var a;n(t),null==(a=null==e?void 0:e.onChange)||a.call(e,t)}})})),E.set("PasswordStrength",(function(e){const{value:l}=e,{t:s}=n(),[r,i]=t.useState(0),o=S((e=>{if(!e)return;let t=0;/\d/.test(e)&&t++,/[a-z]/.test(e)&&t++,/[A-Z]/.test(e)&&t++,e.length>10&&t++,/[\.\~\@\#\$\^\&\*]/.test(e)&&t++,i(t)}),{wait:500});return t.useEffect((()=>{o.run(l)}),[o,l]),a.jsxs(a.Fragment,{children:[a.jsx(c.Password,{value:l,allowClear:!0,placeholder:s("public.inputPleaseEnter"),autoComplete:"password",...e,onChange:t=>{var a;null==(a=e.onChange)||a.call(e,t),o.run(t.target.value)}}),!!r&&a.jsx(_,{strength:r})]})}));export{N as B,z as a,k as c,P as g,y as s,F as u};
