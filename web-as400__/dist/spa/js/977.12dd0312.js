"use strict";(globalThis["webpackChunkweb_as400"]=globalThis["webpackChunkweb_as400"]||[]).push([[977],{977:(e,o,t)=>{t.r(o),t.d(o,{default:()=>S});t(5663);var s=t(3673),a=t(2323),n=t(1959),r=t(8880),c=(t(6701),t(1907)),i=t(589);const l=(0,c.Q_)("bot",{state:()=>({botResponse:""}),getters:{getBotResponse:e=>e.botResponse},actions:{async setBotRequest(e){let o="http://"+window.location.hostname+":3300/db2/openai";const t=await fetch(o,{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:e}),redirect:"follow",referrerPolicy:"no-referrer",enctype:"mutipart/form-data"}),s=await t.json();if(!t.ok)throw 409===s.code?new Error(s.message):new Error("Request failed with error code: "+t.status);this.botResponse=s,this.sendLogsAction(e)},async sendLogsAction(e){let o="http://"+window.location.hostname+":3300/db2/log/?log="+i.Z.getItem("currentUser")+" Asked: ---\x3e      \n\n"+e;const t=await fetch(o,{method:"GET",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",enctype:"mutipart/form-data"}),s=await t.json();if(!t.ok)throw 409===s.code?new Error(s.message):new Error("Request failed with error code: "+t.status)}}});var u=t(8825);const d={class:"q-pa-md row justify-center",style:{height:"700px","overflow-y":"scroll"}},p={style:{width:"100%","max-width":"800px","max-height":""}},m={class:"code-formatter","bg-color":"amber"},h={key:0},g={class:"absolute-bottom"},v={class:"row"},w=(0,s._)("div",{class:"col"},null,-1),b={class:"col"},y=(0,s._)("div",{class:"col"},null,-1),f=(0,s._)("div",{class:"col"},null,-1),k={__name:"BotGPT",setup(e){const o=(0,u.Z)(),t=()=>o.localStorage.getItem("currentUser"),c=l(),i=(0,n.iH)(""),k=(0,n.iH)(""),_=(0,n.iH)("");var q=(0,n.iH)(!1);const C=(0,n.iH)([]),Z=(0,n.iH)([]),j=()=>!0,x=()=>Q(),Q=async()=>{C.value=[];const e=i.value;i.value="",q.value=!0,_.value=e,Z.value.push(e);try{await c.setBotRequest(e),k.value=c.getBotResponse.bot,C.value.push(k.value),console.log(k.value),q.value=!1,i.value=""}catch(o){console.log(o)}};return(e,o)=>{const c=(0,s.up)("q-chat-message"),l=(0,s.up)("q-spinner-dots"),u=(0,s.up)("q-icon"),_=(0,s.up)("q-btn"),Q=(0,s.up)("q-input");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",d,[(0,s._)("div",p,[(0,s.Wm)(c,{name:t(),text:Z.value,avatar:"https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/128/man-icon.png",sent:""},null,8,["name","text"]),j()?((0,s.wg)(),(0,s.j4)(c,{key:0,name:"Bot",avatar:"https://icons.iconarchive.com/icons/proycontec/robots/128/robot-screen-settings-icon.png","bg-color":"amber"})):((0,s.wg)(),(0,s.j4)(c,{key:1,name:"Bot",avatar:"https://icons.iconarchive.com/icons/proycontec/robots/128/robot-screen-settings-icon.png","bg-color":"amber",text:C.value},null,8,["text"])),(0,s._)("div",m,[j()?((0,s.wg)(),(0,s.iD)("pre",h,[(0,s.Uk)("                        "),(0,s._)("code",null,"\n                        "+(0,a.zw)(k.value)+"\n                       ",1),(0,s.Uk)("\n                    ")])):(0,s.kq)("",!0)]),(0,n.SU)(q)?((0,s.wg)(),(0,s.j4)(l,{key:2,"bg-color":"amber",size:"2rem"})):(0,s.kq)("",!0)])]),(0,s._)("div",g,[(0,s._)("div",v,[w,(0,s._)("div",b,[y,(0,s.Wm)(Q,{outlined:"","bottom-slots":"",onKeyup:(0,r.D2)(x,["enter"]),modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=e=>i.value=e),label:"Chiedimi qualsiasi cosa"},{append:(0,s.w5)((()=>[""!==i.value?((0,s.wg)(),(0,s.j4)(u,{key:0,name:"close",onClick:o[0]||(o[0]=e=>i.value=""),class:"cursor-pointer"})):(0,s.kq)("",!0)])),after:(0,s.w5)((()=>[(0,s.Wm)(_,{onClick:x,round:"",dense:"",flat:"",icon:"send"})])),_:1},8,["onKeyup","modelValue"])]),f])])],64)}}};var _=t(151),q=t(5589),C=t(6122),Z=t(629),j=t(4765),x=t(4842),Q=t(4554),R=t(8240),B=t(7518),H=t.n(B);const T=k,S=T;H()(k,"components",{QCard:_.Z,QCardSection:q.Z,QCircularProgress:C.Z,QChatMessage:Z.Z,QSpinnerDots:j.Z,QInput:x.Z,QIcon:Q.Z,QBtn:R.Z})}}]);