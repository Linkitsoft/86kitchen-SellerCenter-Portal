(self.webpackChunkpartnercenter=self.webpackChunkpartnercenter||[]).push([[821],{614:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(7313),a=n(1992);const o=n.p+"static/media/Admin-20 (74).29167603796a49807e4d.png";var u=n(7430),i=n.n(u),l=n(5282),c=n(6417);const s=e=>{let{handleLogin:t}=e;return(0,c.jsx)("div",{className:"success",children:(0,c.jsxs)("div",{className:"success_inner",children:[(0,c.jsx)("img",{src:l,alt:"greenTick"}),(0,c.jsx)("p",{children:"Successfully Verified"}),(0,c.jsx)("button",{onClick:t,children:"Login"})]})})};var d=n(8467);const p=()=>{const[e,t]=(0,r.useState)(""),[n,u]=(0,r.useState)(""),l=(0,d.TH)(),p=(0,d.s0)();(0,r.useEffect)((()=>{var e;null!==l&&void 0!==l&&null!==(e=l.state)&&void 0!==e&&e.fromLogin||p("/login")}),[]);return(0,c.jsxs)("div",{className:"verification",children:["verify"===n&&(0,c.jsx)(s,{handleLogin:()=>{window.localStorage.setItem("token",!0),window.location.reload()},setModal:u}),(0,c.jsx)("div",{className:"verification_topHead",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{className:"shadow",src:a,alt:"backImg",onClick:()=>p(-1)}),(0,c.jsx)("p",{children:"2-Step Verification"})]})}),(0,c.jsx)("div",{className:"verification_inner",children:(0,c.jsxs)("div",{className:"verification_box",children:[(0,c.jsx)("img",{src:o,alt:"girlImg"}),(0,c.jsxs)("div",{className:"verification_text",children:[(0,c.jsx)("p",{children:"Please enter the 6 digit OTP sent to"}),(0,c.jsx)("p",{children:"johnbreed@gmail.com"})]}),(0,c.jsx)(i(),{className:"verification_otp",value:e,onChange:t,autoFocus:!0,OTPLength:4,otpType:"number"}),(0,c.jsx)("button",{onClick:()=>u("verify"),className:"verification_verify",children:"Verify"})]})})]})},f=()=>(0,c.jsx)(p,{})},7430:(e,t,n)=>{var r;window,e.exports=(r=n(7313),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/otp-input-react/",n(n.s=1)}([function(e,t){e.exports=r},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.r(t);var u=n(0),i=n.n(u);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(e){var t=e.maxTime,n=e.onTimerComplete,r=e.timeInterval,a=e.onResendClick,o=Object(u.useRef)(),i=l(Object(u.useState)(t),2),c=i[0],s=i[1];return Object(u.useEffect)((function(){return o.current&&0===c?(clearTimeout(o.current),n&&n()):o.current=setTimeout((function(){s((function(e){return e-1}))}),r),function(){clearTimeout(o.current)}}),[n,c,r]),{handelResendClick:function(){a&&a(0===c),s(t)},remainingTime:c}};function s(e){var t=e.renderTime,n=e.renderButton,r=e.style,u=e.className,l=o(e,["renderTime","renderButton","style","className"]),s=c(l),d=s.remainingTime,p=s.handelResendClick;return i.a.createElement("div",{className:u||"","data-testid":"otp-resend-root",style:a({display:"flex",justifyContent:"space-between"},r)},t?t(d):i.a.createElement("span",null,d," sec"),n?n({disabled:0!==d,onClick:p,remainingTime:d}):i.a.createElement("button",{disabled:0!==d,onClick:p,type:"button"},"Resend OTP"))}s.defaultProps={maxTime:60,timeInterval:1e3,style:{}};var d=s,p={width:32,height:32,textAlign:"center",marginRight:20},f=i.a.memo((function(e){var t=e.focus,n=e.autoFocus,r=e.disabled,l=e.value,c=e.onInputFocus,s=e.index,d=e.secure,f=e.inputStyles,g=e.otpType,h=o(e,["focus","autoFocus","disabled","value","onInputFocus","index","secure","inputStyles","otpType"]),v=Object(u.useRef)(null),b=Object(u.useRef)(!1);Object(u.useEffect)((function(){n&&t&&v.current.focus()}),[]),Object(u.useEffect)((function(){b.current&&t&&v.current.focus(),b.current=!0}),[t]);var A="text";return d?A="password":"number"===g&&(A="tel"),i.a.createElement("input",Object.assign({style:a({},p,f),type:A,maxLength:"1",ref:v,disabled:r,onFocus:function(e){return c(s,e)},value:l||""},h))})),g=function(e){var t=e.autoFocus,n=e.value,r=e.otpType,a=e.onChange,o=e.OTPLength,i=l(Object(u.useState)(t?0:-1),2),c=i[0],s=i[1],d=function(){return n?n.toString().split(""):[]},p=function(e){var t=e.join("");a(t)},f=function(){!function(e){var t=Math.max(Math.min(o-1,e),0);s(t)}("next"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next")?c+1:c-1)},g=function(e){var t=l(e,1)[0],n=d();n[c]=t,p(n)},h=function(e){switch(r){case"number":return!(e.charCodeAt(0)>57||e.charCodeAt(0)<48);case"alpha":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<65);case"alphanumeric":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<48);default:return!0}};return{activeInput:c,getOtpValue:d,handleOnChange:function(e){h(e.target.value)&&(g(e.target.value),f("next"))},handleOnKeyDown:function(e){switch(e.key){case"Backspace":e.preventDefault(),g(""),f("prev");break;case"Delete":e.preventDefault(),g("");break;case"ArrowLeft":e.preventDefault(),f("prev");break;case"ArrowRight":e.preventDefault(),f("next")}},handelOnInput:function(e){e.target.value.length>1&&(e.preventDefault(),f("next"))},handleOnPaste:function(e,t){e.preventDefault();for(var n=d(),r=e.clipboardData.getData("text/plain").slice(0,o-c).split(""),a=0;a<o;++a)a>=c&&r.length>0&&(n[a]=r.shift());for(var u=[n.length],i=0,l=0;l<n.length;++l)h(n[l])&&(u[i]=n[l],i++);p(u)},onInputFocus:function(e,t){s(e),t.target.select()}}},h=function(e){var t=e.OTPLength,n=e.disabled,r=e.autoFocus,o=e.value,l=void 0===o?"":o,c=e.onChange,s=e.otpType,d=e.secure,p=e.className,h=e.inputClassName,v=e.inputStyles,b=e.style,A=e.placeholder,O=g({autoFocus:r,value:l,otpType:s,onChange:c,OTPLength:t}),m=O.activeInput,x=O.getOtpValue,y=O.handleOnChange,C=O.handleOnKeyDown,I=O.handelOnInput,E=O.handleOnPaste,S=O.onInputFocus,R=Object(u.useMemo)((function(){for(var e=x(),a=[],o=0;o<t;o++)a.push(i.a.createElement(f,{className:h,inputStyles:v,key:o,focus:m===o,value:e[o],onChange:y,onKeyDown:C,onInput:I,onPaste:E,onInputFocus:S,index:o,disabled:n,autoFocus:r,secure:d,"data-testid":"input",otpType:s,placeholder:A&&A[o]}));return a}),[x,t,h,v,m,y,C,I,E,S,n,r,d,s,A]);return i.a.createElement("div",{style:a({display:"flex"},b),className:"".concat(p),"data-testid":"otp-input-root"},R)};h.defaultProps={className:"",inputClassName:"",OTPLength:4,onChange:function(){},disabled:!1,secure:!1,autoFocus:!1,value:"",otpType:"any",inputStyles:{},style:{},placeholder:void 0};var v=h;n.d(t,"ResendOTP",(function(){return d})),n.d(t,"default",(function(){return v}))}]))},1992:e=>{"use strict";e.exports="data:image/png;base64,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"},5282:e=>{"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAACXBIWXMAABcRAAAXEQHKJvM/AAAJMklEQVR4nO2d0XXiOBSG5Zx9ZzqYbAXJVjC4gqGDJI88DVPBMhUsefLjkgoWKgAqWKhghw6GCtgj8osIS7KvZNmWbP/ncJLYDhh9vtK90pWUnM9nFrOSLP3EGHuUvsLY8HW24pfzdLNVzkamaMBJgDgY/pP//UW50E47xthPvLYxAQ0aXJKlHNIEsB6UC+rRAda5ChlkcOCSLJ0AFn+NlAua1YkDBMRVy/dyoyDAJVl6zxh7xuuzckEYOjLGlvx1nm5+tn1HrYJDVchhPSknw9YbY2zeJsBWwAHY3INz0bZaA9goOFSJ8wgtrEyNA2wMXJKlHNgsAIejLnFHZnGebuZNfFjt4FAtLmtyOnhh7aVYjOV+FxJxH/MYA5rEw4nn83SzN5z3olrBwcr+VE646wD3fI+A+VfF+7uXgnrfseKPOq2vFnAokJWnglhLsVQlUGXCfYug/2vJ5RTxnplJHfftHRyqxlXFtoxb1qIJWCahi+0Z7XKVap5X52PfVadXcEmW8i/6t3KCrjUa+KC6mjyFLy/n6WapHHW9J1/gkizlFvJNOUHTDg166z0SRfIA8Pt5ulkoR13uxQe4JEuXjrEZrxJnsQ2zVPSU387TzbNy1PYeqoJzhHZCwOrl6WtLFbzmyvAqgXOEdoCnFXS1SFWSpY+wPlsPuhI8Z3CO0F7P081MORq54IEuHMrDuc1zAufgPZ7gfAQ1puVbjl61k7dpDQ4Dnf8oJ8yqJY4JVag6t5Zx7B+25WMFDj0Le4ubOgBaK0F0WwK8lYXXyR/ue5tyulOOFMumR6SX0Nh7FtkefaAH5aReI5QtWWRwCLCpnlNvoQnhu4+R8kDRF4QXJJGqSgScG+WEXtZm32U5tHmk9q7U4uDqUr2eU98tLS9AGKNsKCKVNaWqnFs0srUPIMYolAk1fn2gVJmFVSW8yP+UE3rVOnDYBVl0xHPrfCzqXSqzOGoVuRuglQu9RhRPc4SazigjODgklOGLEwYcB9FELasnMNDKCK6MuHxdkUkPuhXaux/KCb2MDLRtnIX7z6tI41MxyKwkS/fEuDjVjVeaLM5I2vG6QaqoXqa2alUsDgHjv8qVqryM5PZZSZZuiX7E7/nmSGdx1CdhsLbqoj74CpMbcOglmSj/puptcEiqC2W4JryRAvi33N/UyYS9szY0IeKh3nscFF4Qkm9HfBxU/kwduDLt+mRtUl/t19xxLyMg3GPEe5V5mBN56OdaVeIGKWnX3pI6QxfKZGsolwfbMbQCUfJObozqznTCoJPPbNyQJUErsoQvqEKrakUYPRghbeQiGRwlkO50so8QEZrQJ+WIpVDdUsr2ysjW4joPzhKaT9mDg7mXeZOnHqTXuUDz5agp3VoaPeAerxZHqaejX0apSI7QfvjysFFd7pQTqi5WN4Bzh/ZWwxgkpYwvrGzAdTIloQI0pTfDg6zBlXZ06oYWYldg0BjRON7BicauRNTEzmgUIDTRzpXlYV4St+6I1WSnurhChCaptKx5EpduWEenzrRvgUNjxLK+gKP0mHQiwTUCaIxa1vnRAZNqsThp/O8eh3wOl+g+K3RojAhuTAXnXaapSEmWel/UJSJojGokttOsfMq0agEPTbZEb7dUkUEjqxVwSP8rKsgHH/C6Co21aHEUh6gSvC5DYy2Co7ZfTvC6Do21CM7Gc7SC1wdorC1wGAp5VU6YRYLXEWj3yhGNqOBIb2YjTDl6s/iXQngdsjRKWe/vqF0syhEPQqFVhtex6lH7YOb0647oKNQCjnmA18E2jdLpfwFH6fmvDRyrDs92CeHQHZHSsuZz7O6IORO1b+zgCG9veW8xeI+63iRZl/E64ZyUJqlgIn+tcoBns9Bn8NCKpg5LuhiaAEexukZmnjrAoyiWOI1SxpcUEgGO4lk2NmXYM7yYgmty0pYAR0kEanSutyd4sfWI6CaX5PUBDisBlE06+OxpggNZFeFFBU2e0FGgo3Am5Z4TitU1XhCO8GKcn04Bd2VkC47y5t5lCS/WRQWcwVF67BuvLoWI8KKEhmqSMoVbnZGKupOS+KqsANCUAMU0qvAa8fIdlPtey3k4+dEBymzTJ1MPfRPCqEIK69vhZxrrsvjo2KB4kzc1Yj7Li5/8S/kXVbM2V17APIauzGWglOMpD+7G4izW3Zi1aXVdEayNssmEsh2bbiCVsgLAqM22rkOi1loKE2UtL/b+JPwkdOCWrmI6yCyL1Xe1KxTqLI4Rn4TSVUwHFYq67IhibcxkcYxudcy0nuIgsyy2ueFdXNrhNJPFMQtrWg6OCl2W2wEY4zsjOKwgRNml4vNQZVppSewl2RXVZEZwkJF4Tt+Ivdu9VpKlM4ttqguNwdjGXS/I0hXxw3q13ZitLFbeZZQ+V0pC7Iy4vchoaO/0klIIKTpRYuRScIjTCs1WkjZhtc+SoFE3RXqmTOokpaBjH0/KckUM8LSxR9/kkKy7pk6ltpn0MbHYkekJm9/2Vg7QjjYZBrZbbdrsI8cw5DLr4VabLmnxVvukWk2zQlzxXTlh1lPf2jxHaC+23rj1/Di0dy55/q2kPDQpfEfq1itCr41sJ339R/ouFUKd3gsce4AvLLeRds6RqQLOdQncV+yA1aXVilx23T+cpxvnWsh5KrG0667tynp8x8I9cYJD0MJ32LtAq5oZ7mxx1zeotvh0lF4nBkEpO3To5GWjicrg2Ae8leM8uhMKYRE6QHzPGV42bZmQt7xPL+Cub/YedNtWG0LBAvQAjPlO1vUKjn0MXVBS/EwSqWiLtkca4N7PKjyMQi++d0jxDo59NNqrCk+n0BFWuGoqKQnt1wTAbGa86nTESoDeH8BawLHq7Z5OR7wfd4T2vkAC1CO8vIkHWEJrak+/i2oDJ4Sqc+7B+vI6wRXfY8kPebzrl3jKUd3JXW5j/P2IVx33Nat786jawbGPp3rZxOoNLatWK5PVCDgh5KUsPFZHoegAK2ssTbFRcNcPfe/Xm3cA4BHdd42PPbYC7vrh8QJsDZhQq+CuN/Fehc4iaAPXiC9bz9wOApwQnJhnvEKxwgMcq8ZiSYqCAicLbryIrZq2xB1ixqBgyQoWXF7ojRlL8ZcvizxgSSwe921jmcASDTidpOBaF2TLugnORdAebdY1Y+x/DY+Ci4wPnr4AAAAASUVORK5CYII="}}]);