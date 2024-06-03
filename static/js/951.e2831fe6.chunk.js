"use strict";(self.webpackChunkpartnercenter=self.webpackChunkpartnercenter||[]).push([[951],{3198:(e,s,r)=>{r.d(s,{Z:()=>o});var l=r(7313),a=r(2328),i=r(5282),n=r(6417);const o=e=>{let{setModal:s}=e;const r=(0,l.useRef)(),o=(0,l.useRef)();return(0,l.useEffect)((()=>{(0,a.Z)(r,o,s)}),[]),(0,n.jsx)("div",{ref:r,className:"addCat",children:(0,n.jsx)("div",{ref:o,className:"addCat_inner",children:(0,n.jsxs)("div",{className:"addCat_thanks",children:[(0,n.jsx)("img",{className:"addCat_tick",src:i,alt:""}),(0,n.jsx)("p",{className:"addCat_msg",children:"Thank you for verifying your account"}),(0,n.jsx)("p",{className:"addCat_text",children:"Admin will review and approve your profile"}),(0,n.jsx)("button",{onClick:()=>{s("")},className:"addCat_ok",children:"Ok"})]})})})}},6103:(e,s,r)=>{r.d(s,{Z:()=>t});var l=r(7313),a=r(1173),i=r(8467),n=r(1164);const o=()=>{const e=(0,n.Z)(),s=(0,i.TH)().pathname,r=(0,i.s0)(),[a,o]=(0,l.useState)(null);return(0,l.useEffect)((()=>{(async()=>{var l;e.hide&&null!==e&&void 0!==e&&null!==(l=e.hide)&&void 0!==l&&l.includes(null===s||void 0===s?void 0:s.substring(1))?(o(!1),r(-1)):o(!0)})()}),[e,s,r]),{shouldRender:a}};var d=r(6417);const t=e=>{let{children:s}=e;const{shouldRender:r}=o();return r?s:(0,d.jsx)(a.Z,{})}},5951:(e,s,r)=>{r.r(s),r.d(s,{default:()=>E});var l=r(7313),a=r(3198),i=r(9190),n=r(1992),o=r(8467),d=r(4491),t=r(5805),c=r(9560),u=r(5627),m=r(2563),h=r(9799),g=r(6417);const x=e=>{let{setModal:s}=e;const r=(0,o.s0)(),[a,x]=(0,l.useState)(null),{control:A,handleSubmit:C,register:v,trigger:S,formState:{errors:E}}=(0,u.cI)({defaultValues:{name:"",category:"",price:null,item:"",description:"",commission:null},mode:"onBlur",resolver:(0,m.X)(t.Zg)}),I=async e=>{try{await S(e)}catch(s){console.error(s)}};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"addServ_header",children:[(0,g.jsxs)("p",{className:"addServ_title",children:[(0,g.jsx)("img",{src:n,alt:"",onClick:()=>r(-1)}),"Edit Service"]}),(0,g.jsx)("button",{onClick:()=>s("commission"),children:"Change Commison"})]}),(0,g.jsx)("div",{className:"addServ_service",children:(0,g.jsxs)("div",{className:"addServ_serviceMain",children:[(0,g.jsx)("p",{className:"addServ_subhead",children:"Service Image"}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"addServ_uploadSec",children:[!a&&(0,g.jsx)("label",{htmlFor:"bannerInput",children:(0,g.jsx)("img",{className:"addServ_mini",src:i,alt:""})}),(0,g.jsx)("input",{type:"file",id:"bannerInput",style:{display:"none"},onChange:e=>((e,s)=>{const r=e.target.files[0];if(r){const e=new FileReader;e.onloadend=()=>{"banner"===s&&x({file:r,previewURL:e.result})},e.readAsDataURL(r)}else"banner"===s&&x(null)})(e,"banner")}),a&&(0,g.jsx)("img",{className:"addServ_file",src:null===a||void 0===a?void 0:a.previewURL,alt:""}),a&&(0,g.jsx)("i",{className:"fa-solid fa-trash",onClick:()=>x(null)})]}),!a&&(0,g.jsx)("div",{className:"verify_err",style:{textAlign:"center"},children:"Image is required"})]}),(0,g.jsxs)("div",{className:"addServ_form",children:[(0,g.jsx)(c.Z,{label:"Service Name",placeholder:"Service name",name:"name",errors:null===E||void 0===E?void 0:E.name,control:A,handleBlur:I,register:v}),(0,g.jsx)(h.Z,{label:"Service Category",placeholder:"Service Category",name:"category",errors:null===E||void 0===E?void 0:E.category,control:A,handleBlur:I,register:v,options:[{label:"Fiber",value:"Storm Fiber"}]}),(0,g.jsx)(c.Z,{label:"Total Price",placeholder:"Enter total price",name:"price",type:"number",errors:null===E||void 0===E?void 0:E.price,control:A,handleBlur:I,register:v})]}),(0,g.jsxs)("div",{className:"addServ_form",children:[(0,g.jsx)(h.Z,{label:"Choose Recommended Items",placeholder:"Recommended Items",name:"item",errors:null===E||void 0===E?void 0:E.item,control:A,handleBlur:I,register:v,options:[{label:"Fiber",value:"Storm Fiber"}]}),(0,g.jsx)(c.Z,{label:"Service Description",placeholder:"Service Description",name:"description",errors:null===E||void 0===E?void 0:E.description,control:A,handleBlur:I,register:v}),(0,g.jsx)(c.Z,{label:"Commission",placeholder:"Commission",name:"commission",type:"number",errors:null===E||void 0===E?void 0:E.commission,control:A,handleBlur:I,register:v,disabled:!0,value:20})]}),(0,g.jsx)("div",{className:"addServ_submit",children:(0,g.jsx)("button",{onClick:C((()=>{d.Am.success("Service added successfully")})),children:"Add"})})]})})]})})};var A=r(6103),C=r(2328);const v=e=>{let{setModal:s}=e;const r=(0,l.useRef)(),a=(0,l.useRef)(),{control:i,handleSubmit:n,register:o,trigger:d,formState:{errors:h}}=(0,u.cI)({defaultValues:{commission:null},mode:"onBlur",resolver:(0,m.X)(t.tg)});(0,l.useEffect)((()=>{(0,C.Z)(r,a,s)}),[]);return(0,g.jsx)("div",{ref:r,className:"addCat",children:(0,g.jsxs)("div",{ref:a,className:"addCat_inner",children:[(0,g.jsx)("p",{className:"addCat_topHead",children:"Change Commission"}),(0,g.jsx)("div",{className:"addCat_inputWrap",children:(0,g.jsx)(c.Z,{label:"Commission",errors:null===h||void 0===h?void 0:h.commission,control:i,handleBlur:async e=>{try{await d(e)}catch(s){console.error(s)}},register:o,placeholder:"Commission",type:"number",name:"commission"})}),(0,g.jsx)("p",{className:"addCat_err",children:"Please note that any changes to commission rates will require approval from the administrator before updating in the system."}),(0,g.jsx)("button",{onClick:n((()=>{s("")})),className:"addCat_btn",children:"Submit"})]})})},S=()=>{const[e,s]=(0,l.useState)("");return(0,g.jsxs)(A.Z,{children:["verify"===e&&(0,g.jsx)(a.Z,{setModal:s}),"commission"===e&&(0,g.jsx)(v,{setModal:s}),(0,g.jsx)("div",{className:"verify",children:(0,g.jsx)(x,{setModal:s})})]})},E=()=>(0,g.jsx)(S,{})},1992:e=>{e.exports="data:image/png;base64,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"},5282:e=>{e.exports="data:image/png;base64,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"}}]);