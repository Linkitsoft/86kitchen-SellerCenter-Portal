"use strict";(self.webpackChunkpartnercenter=self.webpackChunkpartnercenter||[]).push([[802],{1743:(s,e,r)=>{r.d(e,{Z:()=>o});var a=r(7313),l=r(6417);const o=s=>{let{label:e,control:r,name:o,register:n,handleBlur:d,errors:c,hide:t}=s;const[i,h]=(0,a.useState)(!1);return(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{control:r,...n(o),onBlur:()=>d(o),type:!1===i?"password":"text",name:o,placeholder:e}),c?(0,l.jsx)("div",{className:"verify_err",children:null===c||void 0===c?void 0:c.message}):null,!t&&(0,l.jsx)("i",{onClick:()=>h(!i),className:!1===i?"fa-regular showEye fa-eye-slash":"fa-regular showEye fa-eye"})]})}},6103:(s,e,r)=>{r.d(e,{Z:()=>t});var a=r(7313),l=r(1173),o=r(8467),n=r(1164);const d=()=>{const s=(0,n.Z)(),e=(0,o.TH)().pathname,r=(0,o.s0)(),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{var a;s.hide&&null!==s&&void 0!==s&&null!==(a=s.hide)&&void 0!==a&&a.includes(null===e||void 0===e?void 0:e.substring(1))?(d(!1),r(-1)):d(!0)})()}),[s,e,r]),{shouldRender:l}};var c=r(6417);const t=s=>{let{children:e}=s;const{shouldRender:r}=d();return r?e:(0,c.jsx)(l.Z,{})}},8802:(s,e,r)=>{r.r(e),r.d(e,{default:()=>m});r(7313);const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABPCAYAAABVlr1kAAAACXBIWXMAABcRAAAXEQHKJvM/AAAD4ElEQVR4nO2cX07bQBDGB8Q7cILwXkvkoX4mPUHhBOQGpe+1msgHINyAnKBwApJnvySSDxBOUDgB1SZfaMjMOo69Y8iyPylC2nFsf94/np0Zsvfy8kLaxFFyQkRtfNaZENEoy9MnZnGMmlgIvCKicyJqsQM4j0R0R0SDLE9nzOoA52IhskdEl8xYnqE5h2vRTsXGUWJ68poZqtPP8rTn6mROxMZRckREt0T0nRnrMzZTwcWcri0WQkdEdMqMHHPjM3yOVhatQ3bkW6ZE1Kkr+IC1bM/dBqH3ptezPL1jFhBHyTkWMts8P8UDlVbz0tTq2ThKBkT0gxkWmN64yvJ0xCwW4ihpYzrYHt5NlqdXrLUklcXGUdIhogdmWDDM8rTLWsuf+7agl79t8wBX2Wct5RlYjqwl1IDvD5lhwS1rKUklsXGUdC1DbVxX6BKc554ZiFq4/tZU7VnpYs+W9jp0cd4y19/I1mLhIZ0xg4Kbh1eNNF3OcB9bUaVnO6xlQeW5tAFJbNF9WHEldqzlvKN3pbkr3UchVcRKw6fSq2ALJsKh0n0UUufVs4p0My6RHmYjYiWXTX3jLVBmj/yGKmI3Oe0fFlfDOIj9aASxvhLE+koQ6yufSiyLQSEK0IFbKEUjdoEpIppvtoevYrEZ3hQW3UXR3SxP5xuVuVgEuidVnOsdwIR1Tsy+eDlnB54KJWxc5sN57+uXX6ZX/7JD/OP4wLI/Nfw0c1gr3KIB1h2TRpEyiW3Ts1KacZrlqe0hfHjiKJkIC21/H9m0dd4j8uAS8f6DB+UrQayvfCqxLsoMSoPMehsB7icUe2kH2F9pRCyy9APh3WdsjyhHsNZcuEJ9GKPu4kESCoxP/gelBaqoikURmK3AZJ3LOEqcFXhJqImFnyr5qEX8rpJkLotmz9pKeJ5R/CWVDxR9rzaaYqWNxBQb6Q5W5Ck7okKSuSyaYqW6i96yJA9/pTlqW8hqEzwoR4yF0/QQ71rGvaSelYa2EzTFSp6RGaKzOEpGqEyVhqxUUuAETbG2kp5DzGdbBt/2vdqoiUXsqs8MxfQ1Y16qCxRK3m+YQWboskReQn01Rn3wBf67Q8I4FxeuCjyLaOTVgx2NzVnoNrHjoSbfs7a52JRQCk6FxwSxvhLE+koQq8j6tk/aBqrRaJAcieIBQjIzzXiTRKNiEYpR94FthDnrK0Gsr+xbii3UUhANIRXFzFdjKQrYQlZNPbOmgAkSiFHLZe3iU0G0zxeOV2sXfeZmvVBTLRL/zkyXmYe5WHg2naZ91QYwel5/38JWSW58WJNy3LWyXBOWnf8KEYpT/qdSiOgfzdo2cWzBN/UAAAAASUVORK5CYII=";var l=r(4491),o=r(5805),n=r(1743),d=r(5627),c=r(2563),t=r(6417);const i=()=>{const{control:s,handleSubmit:e,register:r,trigger:i,formState:{errors:h}}=(0,d.cI)({defaultValues:{password:"",confirmPassword:""},mode:"onBlur",resolver:(0,c.X)(o.aO)}),u=async s=>{try{await i(s)}catch(e){console.error(e)}};return(0,t.jsx)("div",{className:"setPassword",children:(0,t.jsxs)("div",{className:"setPassword_wrap",children:[(0,t.jsx)("label",{className:"setPassword_label",htmlFor:"password",children:"New Password"}),(0,t.jsxs)("div",{className:"setPassword_inputSec",children:[(0,t.jsx)("img",{src:a,alt:"lockIcon",className:"lockIcon"}),(0,t.jsx)(n.Z,{label:"New Password",placeholder:"Enter New Password",name:"password",errors:null===h||void 0===h?void 0:h.password,control:s,handleBlur:u,register:r})]}),(0,t.jsx)("br",{}),(0,t.jsx)("label",{className:"setPassword_label",htmlFor:"confirmPassword",children:"Confirm Password"}),(0,t.jsxs)("div",{className:"setPassword_inputSec",children:[(0,t.jsx)("img",{src:a,alt:"lockIcon",className:"lockIcon"}),(0,t.jsx)(n.Z,{label:"Confirm Password",placeholder:"Enter Confirm Password",name:"confirmPassword",errors:null===h||void 0===h?void 0:h.confirmPassword,control:s,handleBlur:u,register:r})]}),(0,t.jsx)("div",{className:"setPassword_update",children:(0,t.jsx)("button",{onClick:e((s=>{l.Am.success("Password updated succesfully")})),children:"Update"})})]})})};var h=r(6103);const u=()=>(0,t.jsx)(h.Z,{children:(0,t.jsxs)("div",{className:"dashboard",children:[(0,t.jsx)("p",{className:"dashboard_title",children:"Change Password"}),(0,t.jsx)(i,{})]})}),m=()=>(0,t.jsx)(u,{})}}]);