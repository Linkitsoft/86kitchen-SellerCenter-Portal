"use strict";(self.webpackChunkpartnercenter=self.webpackChunkpartnercenter||[]).push([[349],{9883:(e,s,t)=>{t.d(s,{Z:()=>h});var l=t(7313);var o=t(3288),d=t(1164),i=t(9466),a=t(6896),c=t(4135),r=t(6417);const n=()=>(0,r.jsx)("span",{className:"chatloader"});var A=t(887);const u=(0,a.io)("http://3.142.184.86/"),h=e=>{let{customerId:s,queryId:t}=e;const a=(0,l.useRef)(null),h=(0,d.Z)(),[I,E]=(0,l.useState)(),g=(0,l.useRef)(),S=(0,l.useRef)(),R=(0,l.useRef)(),[x,C]=(0,l.useState)(!1),[v,Q]=(0,l.useState)([]),[j,m]=(0,l.useState)(!1),[N,p]=(0,l.useState)(1),{ref:F,inView:J}=(0,A.YD)(),k=localStorage.getItem("userId"),[w,B]=(0,l.useState)(!0),[L,K]=(0,l.useState)(!0),U=async()=>{m(!0);const e={queryId:t,receiverId:s,chat:S.current.value};await(0,c.mQ)(e),R.current.scrollIntoView({behavior:"smooth"}),S.current.value=null,m(!1)};(0,l.useEffect)((()=>{(async e=>{var s,l;C(!0);const o=await(0,c.rO)({queryId:t,pageNo:e});if((null===(s=o.data)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.length)>0){var d,i;let e=null===o||void 0===o||null===(d=o.data)||void 0===d||null===(i=d.data)||void 0===i?void 0:i.map((e=>({...e,type:k===(null===e||void 0===e?void 0:e.senderId)?"sent":"receive"})));Q((s=>[...e,...s].sort(((e,s)=>new Date(e.createdAt)-new Date(s.createdAt))))),a.current&&a.current.scrollTo(0,700)}else B(!1);C(!1)})(N)}),[N]),(0,l.useEffect)((()=>(u.on("connect",(()=>{console.log("Connected to Socket.IO server")})),u.on(t,(e=>{Q((s=>[...s,{...e,type:k===(null===e||void 0===e?void 0:e.senderId)?"sent":"receive"}])),R.current.scrollIntoView({behavior:"smooth"})})),()=>{u.off("connect"),u.off(t)})),[t,k]);return(0,l.useEffect)((()=>{L&&v&&(R.current.scrollIntoView({behavior:"smooth"}),K(!1))}),[v]),(0,l.useEffect)((()=>{if(J&&!x&&w){const e=setTimeout((()=>{p(N+1)}),100);return()=>clearTimeout(e)}}),[J,x,w]),console.log("messages",v),(0,r.jsxs)("div",{className:"od_right",children:[(0,r.jsxs)("div",{className:"od_chatHead",children:[(0,r.jsx)("p",{children:"Live Chat"}),(0,r.jsx)("p",{children:"StormFiber"})]}),(0,r.jsx)("p",{className:"od_chatLimit",children:"Limited Time Offer"}),(0,r.jsxs)("div",{className:"od_chatInner",ref:a,children:[(0,r.jsx)("div",{ref:F}),(null===v||void 0===v?void 0:v.length)>0?null===v||void 0===v?void 0:v.map(((e,s)=>"sent"===(null===e||void 0===e?void 0:e.type)?(0,r.jsxs)("div",{className:"od_chatSend",children:[(0,r.jsx)("div",{children:null===e||void 0===e?void 0:e.chat}),(0,r.jsx)("p",{children:"12:12"})]},s):(0,r.jsxs)("div",{className:"od_chatGet",children:[(0,r.jsx)("div",{children:null===e||void 0===e?void 0:e.chat}),(0,r.jsx)("p",{children:"12:12"})]},s))):(0,r.jsx)("div",{className:"od_nomsg",children:"No messages found"}),(0,r.jsx)("div",{ref:R})]}),(0,r.jsx)(o.Z,{role:null===h||void 0===h?void 0:h.create,children:(0,r.jsxs)("div",{className:"od_chatBottom",children:[(0,r.jsx)("input",{onKeyDown:e=>{j||"Enter"===e.key&&U()},ref:S,type:"text",placeholder:"Type message.."}),j?(0,r.jsx)(n,{}):(0,r.jsxs)("div",{className:"od_chatSend",children:[(0,r.jsx)("img",{style:{width:"20px"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABLCAYAAADNsPFaAAAACXBIWXMAABcRAAAXEQHKJvM/AAAE70lEQVR4nO2czVUbMRDH/+HlHqcCoALcQZyrLjEVYFcQdwBUEKggdgfkomugguAKgA5wBeQNO4b1akar/fJKNv/39sBqJaSfRx8z0u6nl5cXpCpjzEiqurX21rlZUUmBMcaMAdBFQA6dBzb1BOAGwK219sZJLVH0YIwxAwAzvr44D4SJIF0BmFtrn0NyRA3GGEMwLhoAKYoAzUIsKEowxpgj+nUBfHMS29EfABOf9UQHxhgzpHGhgpWsANwDoC534qTqWtJ4Za19lJ6ICgwPrvMSKOtB9UaafdjaRnyNS8oiqCNr7X0xIRowxpgJgN9OwrsIyIW1du6kKOKBe8wDrwaIyh0Wu9WB81gPCoByzZUPhoJsPfPMeY64DEmHbIEb6t1iAqBMqwLRVPK/Lq21F+s/egVTUlG1/3f0P1dsla+DcW9dyVNBdAUFWfci67t0ErIxqF+L6QtKoQ73yvR+TFazdYuJAQpr5tzJRPXbbleKCMraA186CdsGExOUnK6cO8AhLRK3AiZSKJDWL6xh52AihgJe7UrdqVswMUPJyfG3aKXcGZhEoJCk0EM3YBKCouqzllBXTaCwNzxhj7gYpFqHG660GEqbatViGkKhBRc1+JcABewF/wTwYIy5cFLbVXsr34ZQ5gxEi5kUdc552tBQKKMdMC1AOXMSynXWEhwJzH1jMD1BWeuMw6G1xBt20v5UMzAdQqG8U/J0AXwFcKosxJAPFdTQRMjyRIN77bBDXSg889woAywYwEja2jDG3Cr5jqvOVGwtf50E4NpaO6tlMQ2haI0j3WlQWNIvDN4RqCrJgcT6fmUwLUCRgkOkhbXWBwVsFXdOQhbsDhZ3Y6kei1qhzY6haNbQqni9pI1tb+NVMJiIoFSyjkJdJrxeknSZH6eCwMQCxTe9OnfcvL42LPNbJwgBU1LgNqEMPIElKXSQz+trw5M0eHvBlBS4bSjaRv/CN2AHtGEs5VfBRAhFKm/lW+A1WYCKYBKBAj4EJC7smsaEHDAJQVH3tNsIlG2A+YDyrjcwH1A2ddCkwB6gLLYBBTmL0RwqtcCeoIjldRF8P+DDgNL6QC1w16GALWbg3PUUuA9QSAe86z/N3aNA0VAqcF+gIH9wiLvUQDoiivig+M4Ct7KhFxTa3DcokFa+QkX2DgoCvOu9hAIfmISggF+YaPWQgAqGg0IpQJnWeVGrTCIY3jTXtjjURkjaAhTRRWgqZ1biyvxTylUbISlVKFAsRvOb1EZIShkKihbD7/o8OE9lUXTpVICo1KFAsBixsp5T1I52AQoEMM42AluL6CYUtStQIICRZqKgyuwSFAhgJIUunHYGCgLBiNsTefHW6c5AQSAYKZBVlLOTx0oSCtoCw37KtHD7OlUoEMBI59ykmcoRN+SUX6v7Tse1nIcSgQLhZLj0OtzYtz+cFztzqkOXChQIFiOtV06077RUUUpQIIDRfu05r1NqKTUoKILhcyIL56nsFJPmXHqVIhQoYQfNkUTI50UKZSUJBRIYvAeqzp2ETCs+l6I2KPeVIK0MxAwFGhhkjZNmqLxWPCY9slUM+IUFun44T28qaigoAVPmFNZV9FAgzEpv4nFkpJzErqskoMBnMXm18BGtZRdbHF0q+O2T3IA6UQ4hS6r8laBYVOu1HJ6GyVV4PQiQC3CRZVAXJMuo9WG+KATgP22BA5zbGf8lAAAAAElFTkSuQmCC",alt:""}),(0,r.jsxs)("div",{className:"od_upload",children:[(0,r.jsx)("input",{className:"uploadInput",type:"file",accept:"image/*",ref:g,onChange:e=>(e=>{(0,i.Z)(e,E),g.current.value=null})(e)}),(0,r.jsx)("img",{onClick:U,src:"data:image/png;base64,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",alt:"",style:{cursor:"pointer"}})]})]})]})})]})}},2349:(e,s,t)=>{t.r(s),t.d(s,{default:()=>A});t(7313);var l=t(1992),o=t(8467),d=t(9883),i=t(3500),a=t(6189),c=t(6417);const r=e=>{let{customerId:s,queryId:t}=e;const l=(0,o.s0)();return(0,c.jsxs)("div",{className:"od_left",children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"od_header",children:[(0,c.jsx)("p",{className:"od_subhead",children:"Query Details"}),(0,c.jsxs)("p",{className:"od_cost",children:["Total Cost: ",(0,c.jsx)("span",{children:"$150"})]})]}),(0,c.jsx)("img",{className:"od_img",src:a,alt:""}),(0,c.jsx)("p",{className:"od_head",children:"Limited Time Offers"}),(0,c.jsx)("p",{className:"od_desc",children:"Hi i am samantha i like your services Yellow Storm Triple Typhoon 20 Mbps - Month cost $50, Ont time cost $100"})]}),(0,c.jsx)("button",{className:"od_btn",onClick:()=>l("/generateSales?queryId=".concat(t,"&customerId=").concat(s)),children:"Generate Sales"})]})},n=()=>{const e=(0,o.s0)(),s=(0,i.r)("queryId"),t=(0,i.r)("customerId");return(0,c.jsxs)("div",{className:"od",children:[(0,c.jsxs)("div",{className:"od_header",children:[(0,c.jsxs)("p",{className:"od_title",children:[(0,c.jsx)("img",{src:l,alt:"",onClick:()=>e(-1)}),"Samentha John - Invoice No: 001 "]}),(0,c.jsxs)("div",{className:"od_date",children:["Submission date : ",(0,c.jsx)("span",{children:"09 / 11 / 2023 - 08:53 PM"})]})]}),(0,c.jsxs)("div",{className:"od_main",children:[(0,c.jsx)(r,{queryId:s,customerId:t}),(0,c.jsx)(d.Z,{customerId:t,queryId:s})]})]})},A=()=>(0,c.jsx)(n,{})},3500:(e,s,t)=>{t.d(s,{r:()=>l});const l=e=>new URLSearchParams(window.location.search).get(e)},6189:(e,s,t)=>{e.exports=t.p+"static/media/Admin-20 (22).2eec381e8e7fb0e66e05.png"},1992:e=>{e.exports="data:image/png;base64,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"}}]);