"use strict";(globalThis["webpackChunkweb_as400"]=globalThis["webpackChunkweb_as400"]||[]).push([[586],{9586:(e,t,l)=>{l.r(t),l.d(t,{default:()=>B});var a=l(3673),o=l(2323),r=l(8880);const s={class:"q-ml-md"},n={style:{"max-height":"250px",overflow:"auto"}},i={class:"text-overline",style:{"font-size":"10px"}},u={class:"absolute-bottom q-mb-xs shadow-10 q-pa-xs"};function c(e,t,l,c,d,p){const m=(0,a.up)("q-btn"),g=(0,a.up)("q-toolbar-title"),w=(0,a.up)("q-item-section"),h=(0,a.up)("q-item"),f=(0,a.up)("q-icon"),v=(0,a.up)("q-select"),b=(0,a.up)("q-toggle"),k=(0,a.up)("q-toolbar"),U=(0,a.up)("q-header"),q=(0,a.up)("q-item-label"),I=(0,a.up)("q-separator"),y=(0,a.up)("EssentialLink"),_=(0,a.up)("q-list"),S=(0,a.up)("q-avatar"),W=(0,a.up)("q-input"),L=(0,a.up)("q-drawer"),x=(0,a.up)("router-view"),Q=(0,a.up)("q-page-container"),C=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(C,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{elevated:"",class:""},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"glossy"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a._)("small",null,(0,o.zw)(e.phrase.content)+" ("+(0,o.zw)(e.phrase.author)+") ",1)])),_:1}),(0,a.Wm)(v,{class:"q-mr-md select-color",style:{"max-width":"310px"},modelValue:e.modelId,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.modelId=t),e.setIp],"use-input":"","input-debounce":"0",label:"IP","label-color":"yellow",options:e.optionsIp,onFilter:e.filterIp,behavior:"menu"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"text-grey"},{default:(0,a.w5)((()=>[(0,a.Uk)("No results")])),_:1})])),_:1})])),append:(0,a.w5)((()=>[(0,a.Wm)(f,{name:"lock",color:"white"})])),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue"]),(0,a.Wm)(v,{style:{"max-width":"250px"},class:"q-mr-xl",modelValue:e.model,"onUpdate:modelValue":[t[1]||(t[1]=t=>e.model=t),e.onClickLibdat],"use-input":"","input-debounce":"0",label:"PROFILO","label-color":"yellow",options:e.options,onFilter:e.filterFn,behavior:"menu"},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"text-grey"},{default:(0,a.w5)((()=>[(0,a.Uk)("No results")])),_:1})])),_:1})])),append:(0,a.w5)((()=>[(0,a.Wm)(f,{name:"lock",color:"white"})])),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue"]),(0,a._)("div",s,[(0,a.Uk)(" Dark mode "),(0,a.Wm)(b,{color:"red",modelValue:e.dark,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dark=t),onClick:e.toggleDark},null,8,["modelValue","onClick"])])])),_:1})])),_:1}),(0,a.Wm)(L,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[5]||(t[5]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q,{header:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" Essential Links ")])),_:1}),(0,a.Wm)(I,{class:"q-my-xs"}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.essentialLinks,(e=>((0,a.wg)(),(0,a.j4)(y,(0,a.dG)({class:"q-mt-md text-overline",key:e.title},e),null,16)))),128))])),_:1}),(0,a.Wm)(I,{style:{"margin-top":"36px"}}),(0,a.Wm)(q,{header:"",class:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" Ricerche più recenti ")])),_:1}),(0,a._)("div",n,[(0,a.Wm)(_,{bordered:"",separator:"",class:"text-accent text-subtitle2"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.queryStr.getLocalStorageFilesList,((t,l)=>((0,a.wg)(),(0,a.j4)(h,{onClick:l=>e.execFromMenu(t),dense:"",clickable:"",key:t.filename},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{dense:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,{size:"25px"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(l+1),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a._)("div",i,(0,o.zw)(t.libname+"."+t.filename)+" ",1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})]),(0,a._)("div",u,[(0,a.Wm)(W,{modelValue:e.sql_run,"onUpdate:modelValue":t[3]||(t[3]=t=>e.sql_run=t),onKeyup:t[4]||(t[4]=(0,r.D2)((t=>e.exec(e.sql_run)),["enter"])),outlined:"",square:"",color:"primary","label-color":"primary",label:"Esegui subito SQL qui",clearable:""},{append:(0,a.w5)((()=>[(0,a.Wm)(f,{name:"search",color:"primary"})])),_:1},8,["modelValue"])])])),_:1},8,["modelValue"]),(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(x)])),_:1})])),_:1})}l(5663);function d(e,t,l,r,s,n){const i=(0,a.up)("q-icon"),u=(0,a.up)("q-item-section"),c=(0,a.up)("q-item-label"),d=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(d,{clickable:"",tag:"a",to:e.link},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(u,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.title),1)])),_:1}),(0,a.Wm)(c,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["to"])}const p=(0,a.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var m=l(4260),g=l(3414),w=l(2035),h=l(4554),f=l(2350),v=l(7518),b=l.n(v);const k=(0,m.Z)(p,[["render",d]]),U=k;b()(p,"components",{QItem:g.Z,QItemSection:w.Z,QIcon:h.Z,QItemLabel:f.Z});var q=l(1959),I=l(1390),y=l(5214),_=l(6041),S=l(8825),W=l(8339),L=l(1965);const x=[{title:"Home",caption:"home",icon:"home",to:"/home"}],Q=(0,_.U)(),C=(0,a.aZ)({name:"MainLayout",components:{EssentialLink:U,Voice:L.Z},setup(){(0,q.iH)([1,3,4]);const e=(0,q.iH)(null),t=(0,S.Z)(),l=(0,W.tv)(),a=(0,q.iH)(!1),o=(0,q.iH)(!1),r=(0,q.iH)(null),s=(0,q.iH)([]),n=(0,q.iH)([]),i=(0,q.iH)([]),u=(0,q.iH)(["10.200.100.160 wrktommal"]),c=(0,q.iH)(["10.200.100.160 WRKTOMMAL"]),d=(0,I.o)(),p=(0,y.H)(),m=async e=>{void 0!=e&&null!=e&&e.length>=3&&(l.push({path:"/",hash:"home"}),Q.loadingTable=!0,await Q.excecQuery(t.localStorage.getItem("currentUser"),e),Q.loadingTable=!1,Q.launchQueryPrefered=!0)},g=e=>{l.push({path:"/",hash:"home"}),Q.setFilenameSelected(e)},w=(e,t)=>{t(""!==e?()=>{const t=e.toLowerCase();n.value=s.value.filter((e=>e.toLowerCase().indexOf(t)>-1))}:()=>{n.value=s.value})},h=(e,t)=>{t(""!==e?()=>{const t=e.toLowerCase();u.value=i.value.filter((e=>e.toLowerCase().indexOf(t)>-1))}:()=>{u.value=i.value})},f=e=>{d.setCurrentUser(r.value),t.localStorage.set("currentUser",r.value),p.setUserPref(r.value),"null"!=t.localStorage.getItem("currentUser")?location.reload():t.localStorage.remove("currentUser")},v=()=>{""!==t.localStorage.getItem("currentUser")&&"null"!==t.localStorage.getItem("currentUser")&&null!==t.localStorage.getItem("currentUser")&&(r.value=t.localStorage.getItem("currentUser"),x.push({title:"Query",caption:"Le mie query",icon:"search",to:"/query"}),x.push({title:"Workitems",caption:"Gestisci WI",icon:"manage_accounts",to:"/workitems"}),x.push({title:"Trova programma/file",caption:"Trova utilizzatore",icon:"verified",to:"/utilizzatore"}),x.push({title:"ChatGPT",caption:"Chiedimi qualsiasi cosa",icon:"chat",to:"/botgpt"}),x.push({title:"Condividi file",caption:"Condividi qualsiasi cosa",icon:"share",to:"/share"}),x.push({title:"Preferenze",caption:"pref",icon:"settings ",to:"/preference"})),p.setUserPref(r.value)},b=async()=>{try{const e={user:""};await d.getUsersAction(e),d.getUsers.forEach((e=>{s.value.push(e.TABLE_SCHEMA)}))}catch(e){console.log(e)}},k=()=>{t.dark.toggle(),t.localStorage.set("darkMode",t.dark.isActive)},U=()=>{if(t.localStorage.getItem("as"))c.value[0]=t.localStorage.getItem("as")+" "+t.localStorage.getItem("userDb").toUpperCase();else{const e=c.value[0],l=e.substring(0,e.indexOf(" ")),a=e.substring(e.indexOf(" ")+1);t.localStorage.set("as",l),t.localStorage.set("userDb",a.toUpperCase()),r.value=t.localStorage.getItem("userDb").toUpperCase(),f()}},_=()=>{const e=c.value,l=e.substring(0,e.indexOf(" ")),a=e.substring(e.indexOf(" ")+1);t.localStorage.set("as",l),t.localStorage.set("userDb",a),t.localStorage.set("currentUser",a.toUpperCase().trim()),location.reload()},L=()=>{o.value=t.localStorage.getItem("darkMode"),void 0!=o.value&&null!=o.value||(o.value=!1),t.dark.set(o.value)},C=async()=>{await Q.selectUserQuery(t.localStorage.getItem("currentUser")),Q.setFileNameListLocalStorage()},Z=async()=>{try{await d.getIpsAction(),d.getUserIps.forEach((e=>{u.value.push(e.CLIEIP+" "+e.USERDB),i.value.push(e.CLIEIP+" "+e.USERDB)}))}catch(e){console.log(e)}},D=(0,q.iH)(""),H=async()=>{const e=await fetch("http://api.quotable.io/random?maxLength=70"),t=await e.json();D.value=t};return{essentialLinks:x,leftDrawerOpen:a,toggleLeftDrawer(){a.value=!a.value},dark:o,setIp:_,toggleDark:k,loadDarkMode:L,filterFn:w,sql_run:e,exec:m,execFromMenu:g,model:r,options:n,stringOptions:s,onClickLibdat:f,loadUsers:b,loadUserPrefs:v,loadUserQueries:C,as:d,pref:p,optionsIp:u,modelId:c,filterIp:h,loadIps:U,q:t,queryStr:Q,loadUserIps:Z,stringOptionsIp:i,phrase:D,loadPhrases:H}},mounted(){this.loadPhrases(),this.loadUserIps(),this.loadIps(),this.loadDarkMode(),this.loadUserPrefs(),this.loadUsers(),this.loadUserQueries()}});var Z=l(3066),D=l(3812),H=l(9570),V=l(8240),O=l(3747),P=l(3017),z=l(8886),E=l(2428),F=l(7011),T=l(5869),M=l(5096),A=l(4842),j=l(2652);const R=(0,m.Z)(C,[["render",c]]),B=R;b()(C,"components",{QLayout:Z.Z,QHeader:D.Z,QToolbar:H.Z,QBtn:V.Z,QToolbarTitle:O.Z,QSelect:P.Z,QItem:g.Z,QItemSection:w.Z,QIcon:h.Z,QToggle:z.Z,QDrawer:E.Z,QList:F.Z,QItemLabel:f.Z,QSeparator:T.Z,QAvatar:M.Z,QInput:A.Z,QPageContainer:j.Z})}}]);