"use strict";(globalThis["webpackChunkweb_as400"]=globalThis["webpackChunkweb_as400"]||[]).push([[499],{6499:(e,l,a)=>{a.r(l),a.d(l,{default:()=>k});a(5663);var t=a(3673),o=a(1959),n=a(8825),u=a(5214),s=a(1390);const i={class:"q-pa-md row items-start q-gutter-md"},r=(0,t._)("div",{class:"text-h6"},"Librerie preferite",-1),d={class:"q-pa-md row items-start q-gutter-md"},c=(0,t._)("div",{class:"text-h6"},"Inserisci nuova connessione",-1),m={class:"q-pa-md row items-start q-gutter-md"},v={__name:"Preference",setup(e){const l=(0,o.iH)(null),a=(0,o.iH)(null),v=(0,o.iH)(null),p=(0,o.iH)(null),f=(0,o.iH)(null),b=(0,o.iH)([]),g=(0,o.iH)([]),w=(0,u.H)(),U=(e,l)=>{l(""!==e?()=>{const l=e.toLowerCase();g.value=b.value.filter((e=>e.toLowerCase().indexOf(l)>-1))}:()=>{g.value=b.value})},_=(0,s.o)(),W=async()=>{try{const e={user:""};await _.getUsersAction(e),_.getUsers.forEach((e=>{b.value.push(e.TABLE_SCHEMA)}))}catch(e){console.log(e)}},h=(0,n.Z)(),V=async()=>{await w.setUserPref(h.localStorage.getItem("currentUser")),console.log(h.localStorage.getItem("currentUser")),console.log(w.getUserPrefAsObj),w.getUserPrefAsObj.length&&(l.value=w.getUserPrefAsObj[0].value,a.value=void 0!=w.getUserPrefAsObj[1]?w.getUserPrefAsObj[1].value:"",v.value=void 0!=w.getUserPrefAsObj[2]?w.getUserPrefAsObj[2].value:"",p.value=void 0!=w.getUserPrefAsObj[3]?w.getUserPrefAsObj[3].value:"",f.value=void 0!=w.getUserPrefAsObj[4]?w.getUserPrefAsObj[4].value:"")},A=async()=>{null==l.value&&null==a.value&&null==v.value&&null==p.value&&null==f.value&&h.dialog({title:"Attenzione",message:"Selezionare almeno una libreria preferita!"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{})),await w.insertOrUpdateUserPrefs({user:h.localStorage.getItem("currentUser"),prefl1:l.value,prefl2:a.value,prefl3:v.value,prefl4:p.value,prefl5:f.value}),h.notify({color:"primary",textColor:"white",icon:"save",message:"Preferenza salvata con successo",actions:[{label:"Dismiss",color:"white",handler:()=>{}}]}),V()},y=(0,o.iH)(null),k=(0,o.iH)(null),q=(0,o.iH)(null),C=async()=>{null!=y.value&&null!=k.value&&null!=q.value?await w.insertConnectionPrefs({ip:y.value,userDb:k.value,passwordDb:q.value}).then((e=>{h.notify({color:"primary",textColor:"white",timeout:1e3,icon:"save",message:w.statusConnection,onDismiss:()=>{location.reload()},actions:[{label:"Dismiss",color:"white",handler:()=>{}}]})})).catch((e=>{h.notify({type:"negative",position:"center",message:w.statusConnection,actions:[{label:"Dismiss",color:"white",handler:()=>{}}]})})):h.dialog({title:"Attenzione",message:"Tutti i campi devono essere compilati"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))},P=(0,o.iH)(""),O=(0,o.iH)(!1),D=window.SpeechRecognition||window.webkitSpeechRecognition,H=new D;(0,t.bv)((()=>{console.log("mounted!"),W(),V(),H.continuous=!0,H.interimResults=!0,H.onstart=()=>{console.log("start recognition"),O.value=!0},H.onend=()=>{console.log("end recognition"),O.value=!1},H.onresult=e=>{console.log(e);const l=Array.from(e.results).map((e=>e[0])).map((e=>e.transcript)).join("");P.value=l,f.value="WRK90MUL"}}));return(e,o)=>{const n=(0,t.up)("q-card-section"),u=(0,t.up)("q-separator"),s=(0,t.up)("q-item-section"),b=(0,t.up)("q-item"),w=(0,t.up)("q-select"),_=(0,t.up)("q-btn"),W=(0,t.up)("q-card-actions"),h=(0,t.up)("q-card"),V=(0,t.up)("q-input");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t.Wm)(h,{bordered:"",class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,null,{default:(0,t.w5)((()=>[r])),_:1}),(0,t.Wm)(n,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Uk)(" Scegliere 5 librerie che usi più frequentemente in modo da permettere una ricerca più veloce. ")])),_:1}),(0,t.Wm)(u,{inset:""}),(0,t.Wm)(n,null,{default:(0,t.w5)((()=>[(0,t._)("div",d,[(0,t.Wm)(w,{filled:"",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 1",clearable:"",options:g.value,onFilter:U,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)("No results")])),_:1})])),_:1})])),_:1},8,["modelValue","options"]),(0,t.Wm)(w,{filled:"",modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 2",clearable:"",options:g.value,onFilter:U,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)("No results")])),_:1})])),_:1})])),_:1},8,["modelValue","options"]),(0,t.Wm)(w,{filled:"",modelValue:v.value,"onUpdate:modelValue":o[2]||(o[2]=e=>v.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 3 ",clearable:"",options:g.value,onFilter:U,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)("No results")])),_:1})])),_:1})])),_:1},8,["modelValue","options"]),(0,t.Wm)(w,{filled:"",modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=e=>p.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 4",clearable:"",options:g.value,onFilter:U,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)("No results")])),_:1})])),_:1})])),_:1},8,["modelValue","options"]),(0,t.Wm)(w,{filled:"",modelValue:f.value,"onUpdate:modelValue":o[4]||(o[4]=e=>f.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 5",clearable:"",options:g.value,onFilter:U,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)("No results")])),_:1})])),_:1})])),_:1},8,["modelValue","options"])])])),_:1}),(0,t.Wm)(W,{align:"right"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{flat:"",onClick:A},{default:(0,t.w5)((()=>[(0,t.Uk)("Save")])),_:1})])),_:1})])),_:1}),(0,t.Wm)(h,{bordered:"",class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,null,{default:(0,t.w5)((()=>[c])),_:1}),(0,t.Wm)(u,{inset:""}),(0,t.Wm)(n,null,{default:(0,t.w5)((()=>[(0,t._)("div",m,[(0,t.Wm)(V,{modelValue:y.value,"onUpdate:modelValue":o[5]||(o[5]=e=>y.value=e),label:"Indirizzo Ip"},null,8,["modelValue"]),(0,t.Wm)(V,{modelValue:k.value,"onUpdate:modelValue":o[6]||(o[6]=e=>k.value=e),label:"Utente database"},null,8,["modelValue"]),(0,t.Wm)(V,{modelValue:q.value,"onUpdate:modelValue":o[7]||(o[7]=e=>q.value=e),label:"Password database"},null,8,["modelValue"])])])),_:1}),(0,t.Wm)(W,{align:"right"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{flat:"",onClick:C},{default:(0,t.w5)((()=>[(0,t.Uk)("Save")])),_:1})])),_:1})])),_:1})])}}};var p=a(151),f=a(5589),b=a(5869),g=a(3017),w=a(3414),U=a(2035),_=a(9367),W=a(8240),h=a(4842),V=a(7518),A=a.n(V);const y=v,k=y;A()(v,"components",{QCard:p.Z,QCardSection:f.Z,QSeparator:b.Z,QSelect:g.Z,QItem:w.Z,QItemSection:U.Z,QCardActions:_.Z,QBtn:W.Z,QInput:h.Z})}}]);