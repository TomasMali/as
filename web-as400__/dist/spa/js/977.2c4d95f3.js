"use strict";(globalThis["webpackChunkweb_as400"]=globalThis["webpackChunkweb_as400"]||[]).push([[977],{977:(e,o,t)=>{t.r(o),t.d(o,{default:()=>x});t(5663);var a=t(4852),n=t(2323),s=t(4323),r=t(8880),c=(t(6701),t(1907));const i=(0,c.Q_)("bot",{state:()=>({botResponse:""}),getters:{getBotResponse:e=>e.botResponse},actions:{async setBotRequest(e){let o="http://"+window.location.hostname+":3300/db2/openai";const t=await fetch(o,{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:e}),redirect:"follow",referrerPolicy:"no-referrer",enctype:"mutipart/form-data"}),a=await t.json();if(!t.ok)throw 409===a.code?new Error(a.message):new Error("Request failed with error code: "+t.status);this.botResponse=a}}});var l=t(8825);const u={class:"q-pa-md row justify-center",style:{height:"700px","overflow-y":"scroll"}},p={style:{width:"100%","max-width":"800px","max-height":""}},m={class:"code-formatter","bg-color":"amber"},d={key:0},v={class:"absolute-bottom"},g={__name:"BotGPT",setup(e){const o=(0,l.Z)(),t=()=>o.localStorage.getItem("currentUser"),c=i(),g=(0,s.iH)(""),h=(0,s.iH)(""),b=(0,s.iH)("");var w=(0,s.iH)(!1);const y=(0,s.iH)([]),k=(0,s.iH)([]),f=()=>!0,q=()=>_(),_=async()=>{y.value=[];const e=g.value;g.value="",w.value=!0,b.value=e,k.value.push(e);try{await c.setBotRequest(e),h.value=c.getBotResponse.bot,y.value.push(h.value),console.log(h.value),w.value=!1,g.value=""}catch(o){console.log(o)}};return(e,o)=>{const c=(0,a.up)("q-chat-message"),i=(0,a.up)("q-spinner-dots"),l=(0,a.up)("q-icon"),b=(0,a.up)("q-btn"),_=(0,a.up)("q-input");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",u,[(0,a._)("div",p,[(0,a.Wm)(c,{name:t(),text:k.value,avatar:"https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/128/man-icon.png",sent:""},null,8,["name","text"]),f()?((0,a.wg)(),(0,a.j4)(c,{key:0,name:"Bot",avatar:"https://icons.iconarchive.com/icons/proycontec/robots/128/robot-screen-settings-icon.png","bg-color":"amber"})):((0,a.wg)(),(0,a.j4)(c,{key:1,name:"Bot",avatar:"https://icons.iconarchive.com/icons/proycontec/robots/128/robot-screen-settings-icon.png","bg-color":"amber",text:y.value},null,8,["text"])),(0,a._)("div",m,[f()?((0,a.wg)(),(0,a.iD)("pre",d,[(0,a.Uk)("            "),(0,a._)("code",null,"\n            "+(0,n.zw)(h.value)+"\n           ",1),(0,a.Uk)("\n        ")])):(0,a.kq)("",!0)]),(0,s.SU)(w)?((0,a.wg)(),(0,a.j4)(i,{key:2,"bg-color":"amber",size:"2rem"})):(0,a.kq)("",!0)])]),(0,a._)("div",v,[(0,a.Wm)(_,{outlined:"","bottom-slots":"",onKeyup:(0,r.D2)(q,["enter"]),modelValue:g.value,"onUpdate:modelValue":o[1]||(o[1]=e=>g.value=e),label:"Chiedimi qualsiasi cosa"},{append:(0,a.w5)((()=>[""!==g.value?((0,a.wg)(),(0,a.j4)(l,{key:0,name:"close",onClick:o[0]||(o[0]=e=>g.value=""),class:"cursor-pointer"})):(0,a.kq)("",!0)])),after:(0,a.w5)((()=>[(0,a.Wm)(b,{onClick:q,round:"",dense:"",flat:"",icon:"send"})])),_:1},8,["onKeyup","modelValue"])])],64)}}};var h=t(151),b=t(5589),w=t(6122),y=t(629),k=t(4765),f=t(4842),q=t(4554),_=t(8240),C=t(7518),Q=t.n(C);const Z=g,x=Z;Q()(g,"components",{QCard:h.Z,QCardSection:b.Z,QCircularProgress:w.Z,QChatMessage:y.Z,QSpinnerDots:k.Z,QInput:f.Z,QIcon:q.Z,QBtn:_.Z})}}]);