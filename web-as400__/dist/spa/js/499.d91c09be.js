"use strict";(self["webpackChunkweb_as400"]=self["webpackChunkweb_as400"]||[]).push([[499],{6499:(e,l,a)=>{a.r(l),a.d(l,{default:()=>j});var t=a(3673),u=a(1959),o=a(8825),s=a(5214),r=a(1390);const n={class:"q-pa-md row items-start q-gutter-md"},i=(0,t._)("div",{class:"text-h6"},"Librerie preferite",-1),d=(0,t.Uk)(" Scegliere 5 librerie che usi più frequentemente in modo da permettere una ricerca più veloce. "),c={class:"q-pa-md row items-start q-gutter-md"},m=(0,t.Uk)("No results"),p=(0,t.Uk)("No results"),v=(0,t.Uk)("No results"),f=(0,t.Uk)("No results"),b=(0,t.Uk)("No results"),g=(0,t.Uk)("Save"),w={setup(e){const l=(0,u.iH)(null),a=(0,u.iH)(null),w=(0,u.iH)(null),U=(0,u.iH)(null),_=(0,u.iH)(null),W=(0,u.iH)([]),A=(0,u.iH)([]),h=(0,s.H)(),V=(e,l)=>{l(""!==e?()=>{const l=e.toLowerCase();A.value=W.value.filter((e=>e.toLowerCase().indexOf(l)>-1))}:()=>{A.value=W.value})},q=(0,r.o)(),O=async()=>{try{const e={user:""};await q.getUsersAction(e),q.getUsers.forEach((e=>{W.value.push(e.TABLE_SCHEMA)}))}catch(e){console.log(e)}},P=(0,o.Z)(),k=async()=>{await h.setUserPref(P.localStorage.getItem("currentUser")),console.log(P.localStorage.getItem("currentUser")),console.log(h.getUserPrefAsObj),h.getUserPrefAsObj.length&&(l.value=h.getUserPrefAsObj[0].value,a.value=void 0!=h.getUserPrefAsObj[1]?h.getUserPrefAsObj[1].value:"",w.value=void 0!=h.getUserPrefAsObj[2]?h.getUserPrefAsObj[2].value:"",U.value=void 0!=h.getUserPrefAsObj[3]?h.getUserPrefAsObj[3].value:"",_.value=void 0!=h.getUserPrefAsObj[4]?h.getUserPrefAsObj[4].value:"")},y=async()=>{null==l.value&&null==a.value&&null==w.value&&null==U.value&&null==_.value&&P.dialog({title:"Attenzione",message:"Selezionare almeno una libreria preferita!"}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{})),await h.insertOrUpdateUserPrefs({user:P.localStorage.getItem("currentUser"),prefl1:l.value,prefl2:a.value,prefl3:w.value,prefl4:U.value,prefl5:_.value}),P.notify({color:"primary",textColor:"white",icon:"save",message:"Preferenza salvata con successo",actions:[{label:"Dismiss",color:"white",handler:()=>{}}]}),k()};return(0,t.bv)((()=>{console.log("mounted!"),O(),k()})),(e,u)=>{const o=(0,t.up)("q-card-section"),s=(0,t.up)("q-separator"),r=(0,t.up)("q-item-section"),W=(0,t.up)("q-item"),h=(0,t.up)("q-select"),q=(0,t.up)("q-btn"),O=(0,t.up)("q-card-actions"),P=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(P,{bordered:"",class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[i])),_:1}),(0,t.Wm)(o,{class:"q-pt-none"},{default:(0,t.w5)((()=>[d])),_:1}),(0,t.Wm)(s,{inset:""}),(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t.Wm)(h,{filled:"",modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=e=>l.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 1",clearable:"",options:A.value,onFilter:V,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"text-grey"},{default:(0,t.w5)((()=>[m])),_:1})])),_:1})])),_:1},8,["modelValue","options"]),(0,t.Wm)(h,{filled:"",modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=e=>a.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 2",clearable:"",options:A.value,onFilter:V,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"text-grey"},{default:(0,t.w5)((()=>[p])),_:1})])),_:1})])),_:1},8,["modelValue","options"]),(0,t.Wm)(h,{filled:"",modelValue:w.value,"onUpdate:modelValue":u[2]||(u[2]=e=>w.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 3 ",clearable:"",options:A.value,onFilter:V,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"text-grey"},{default:(0,t.w5)((()=>[v])),_:1})])),_:1})])),_:1},8,["modelValue","options"]),(0,t.Wm)(h,{filled:"",modelValue:U.value,"onUpdate:modelValue":u[3]||(u[3]=e=>U.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 4",clearable:"",options:A.value,onFilter:V,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"text-grey"},{default:(0,t.w5)((()=>[f])),_:1})])),_:1})])),_:1},8,["modelValue","options"]),(0,t.Wm)(h,{filled:"",modelValue:_.value,"onUpdate:modelValue":u[4]||(u[4]=e=>_.value=e),"use-input":"","input-debounce":"0",label:"LIBDAT 5",clearable:"",options:A.value,onFilter:V,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"text-grey"},{default:(0,t.w5)((()=>[b])),_:1})])),_:1})])),_:1},8,["modelValue","options"])])])),_:1}),(0,t.Wm)(O,{align:"right"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{flat:"",onClick:y},{default:(0,t.w5)((()=>[g])),_:1})])),_:1})])),_:1})])}}};var U=a(151),_=a(5589),W=a(5869),A=a(4019),h=a(3414),V=a(2035),q=a(9367),O=a(8240),P=a(7518),k=a.n(P);const y=w,j=y;k()(w,"components",{QCard:U.Z,QCardSection:_.Z,QSeparator:W.Z,QSelect:A.Z,QItem:h.Z,QItemSection:V.Z,QCardActions:q.Z,QBtn:O.Z})}}]);