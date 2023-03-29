"use strict";(globalThis["webpackChunkweb_as400"]=globalThis["webpackChunkweb_as400"]||[]).push([[174],{7174:(e,l,o)=>{o.r(l),o.d(l,{default:()=>se});o(5663);var t=o(3673),a=o(1959),i=o(2323),r=o(8880),s=o(8825),d=o(6041),n=o(5214);const u={class:"q-px-xl q-mt-xl"},c={key:0,class:"flex flex-center"},m={key:0,class:"flex flex-center text-red"},p=(0,t._)("div",{class:"text-h6 text-primary"},"Composizione query",-1),w={style:{"max-height":"80vh"},class:"my-modify-placeholder scroll"},g={class:"row q-col-gutter-x-md"},f={class:"col"},y={key:0,class:"col"},U={class:"col"},b={class:"row"},_={class:"col"},S={class:"row"},h={class:"row"},q={class:"q-pa-md row items-start q-gutter-md"},W={class:"text-subtitle2 text-red q-mt-lg"},k={class:"vertical"},x={class:"text-subtitle2 text-red q-ma-none"},v={class:"row q-mt-md q-px-lg"},V={class:"col q-pa-lg",style:{height:"150px"}},Q={class:"col"},C={class:""},L={__name:"Query",setup(e){const l=(0,d.U)(),o=(0,s.Z)(),L=(0,n.H)(),T=(0,a.iH)(""),A=e=>{l.setPreview()},E=(e,o)=>{l.setPreview()},M=async e=>{l.showTable=!0,l.loadingTable=!0,await l.excecQuery(o.localStorage.getItem("currentUser"),e),l.loadingTable=!1},Z=async()=>{l.loaderUserQuery=!0,await l.selectUserQuery(o.localStorage.getItem("currentUser")),l.loaderUserQuery=!1,T.value=L.getUserPrefAsObj[0].value,l.libdatM=T.value,R()},O=()=>{l.libdatM=T.value,R(),l.fileM=(0,a.iH)(null),l.selected=(0,a.iH)([]),l.rows=[]},N=e=>{l.rows=[],l.selected=(0,a.iH)([]),l.sqlAutomati(),l.toggleWhere&&D()},D=async()=>{if(l.fileM&&l.libdatM){l.columsLoading=!0,l.rows=[];try{const e={lib:l.libdatM,fileName:l.fileM.split("--\x3e")[0].trim()};await l.getColumsAction(e),l.columsLoading=!1}catch(e){console.log(e),l.columsLoading=!1}}},H=()=>{l.sqlAutomati(),N({}),l.selected=(0,a.iH)([])},F=()=>{l.selected=(0,a.iH)([]),l.rows=[],l.toggleWhere=!1,l.fileM=(0,a.iH)(null)},I=()=>{l.insertUserQuery({user:o.localStorage.getItem("currentUser"),title:l.title,sqlstr:l.sqlQuery,note:l.note}),o.notify({color:"primary",textColor:"white",icon:"insert",message:"Query inserita con successo",actions:[{label:"Dismiss",color:"white",handler:()=>{}}]}),l.user=(0,a.iH)(""),l.title=(0,a.iH)(""),l.sqlQuery=(0,a.iH)(""),l.note=(0,a.iH)("")},z=(e,t)=>{o.dialog({dark:!0,title:"Confirm",message:"Vuoi cancellare la tua query?",cancel:!0,persistent:!0}).onOk((()=>{o.notify({color:"primary",textColor:"white",icon:"delete",message:"Query cancellata con successo",actions:[{label:"Dismiss",color:"white",handler:()=>{}}]}),l.deleteUserQuery(e,t)})).onCancel((()=>{})).onDismiss((()=>{}))},P=(e,t,a)=>{a="S"==a?"N":"S",o.dialog({dark:!0,title:"Confirm",message:"S"==a?"Vuoi applicare questa query come preferita ?":"Vuoi rimuovere questa query dai preferiti ?",cancel:!0,persistent:!0}).onOk((()=>{o.notify({color:"primary",textColor:"white",icon:"delete",message:"Query modificata con successo",actions:[{label:"Dismiss",color:"white",handler:()=>{}}]}),l.modifyQyeryPref(e,t,a)})).onCancel((()=>{})).onDismiss((()=>{}))},R=()=>{j(),l.sqlAutomati()},j=async()=>{try{const e={filename:l.libdatM};l.loadingFileM=!0,await l.getFilenamesAction(e),l.filenamesArray=[],l.getFilenames.forEach((e=>{l.filenamesArray.push(e.TABLE_NAME+" --\x3e "+e.TABLE_TEXT)})),l.loadingFileM=!1}catch(e){console.log(e)}},B=e=>{l.user=e.LIBDAT,l.title=e.TITLE,l.sqlQuery=e.SQLSTR,l.note=e.NOTE,l.dialog=!0,l.createDialog=!1},X=(e,o)=>{o(""!==e?()=>{const o=e.toLowerCase();l.optionLibdat=l.stringOptLibdat.filter((e=>e.toLowerCase().indexOf(o)>-1))}:()=>{l.optionLibdat=l.stringOptLibdat})},Y=(e,o)=>{o(""!==e?()=>{const o=e.toLowerCase();l.optionFile=l.filenamesArray.filter((e=>e.toLowerCase().indexOf(o)>-1))}:()=>{l.optionFile=l.filenamesArray})},K=async()=>{l.sqlQuery=(0,a.iH)(""),l.title=(0,a.iH)(""),l.note=(0,a.iH)("");try{const e={user:""};await l.getLibdatAction(e),l.getLibl.forEach((e=>{l.stringOptLibdat.push(e.TABLE_SCHEMA)}))}catch(e){console.log(e)}},G=e=>{M(e)},J=()=>{l.cleanDialog(),Z(),K(),l.dialog=!0,l.createDialog=!0};return(0,t.bv)((()=>{Z()})),(e,o)=>{const s=(0,t.up)("q-btn"),d=(0,t.up)("q-card-section"),n=(0,t.up)("q-separator"),M=(0,t.up)("q-spinner-ios"),Z=(0,t.up)("q-tooltip"),D=(0,t.up)("q-avatar"),j=(0,t.up)("q-item-section"),K=(0,t.up)("q-item"),$=(0,t.up)("q-item-label"),ee=(0,t.up)("q-list"),le=(0,t.up)("q-card"),oe=(0,t.up)("q-inner-loading"),te=(0,t.up)("q-icon"),ae=(0,t.up)("q-toggle"),ie=(0,t.up)("q-input"),re=(0,t.up)("q-table"),se=(0,t.up)("q-option-group"),de=(0,t.up)("q-select"),ne=(0,t.up)("q-checkbox"),ue=(0,t.up)("q-td"),ce=(0,t.up)("q-popup-edit"),me=(0,t.up)("q-tr"),pe=(0,t.up)("q-card-actions"),we=(0,t.up)("q-dialog"),ge=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",u,[(0,t.Wm)(le,{class:"my-card"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{color:"primary","text-color":"white",lable:"Crea",onClick:J},{default:(0,t.w5)((()=>[(0,t.Uk)(" Crea ")])),_:1})])),_:1}),(0,t.Wm)(n,{inset:""}),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,a.SU)(l).loaderUserQuery?((0,t.wg)(),(0,t.iD)("div",c,[(0,t.Wm)(M,{color:"primary",size:"7em"}),(0,t.Wm)(Z,{offset:[0,8]},{default:(0,t.w5)((()=>[(0,t.Uk)("Caricando le query....")])),_:1})])):((0,t.wg)(),(0,t.j4)(ee,{key:1,bordered:"",separator:"",class:"text-primary text-subtitle2",style:{"max-height":"400px",overflow:"auto"}},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,a.SU)(l).queriesSaved,(e=>((0,t.wg)(),(0,t.j4)(K,{dense:"",clickable:"",key:e.SQLSTR},{default:(0,t.w5)((()=>[(0,t.Wm)(K,{dense:"",clickable:"",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(j,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{onClick:l=>G(e.SQLSTR),color:"primary","text-color":"white",icon:"play_arrow"},null,8,["onClick"])])),_:2},1024)])),_:2},1024),(0,t.Wm)(K,{dense:"",clickable:"",class:"q-mr-lg"},{default:(0,t.w5)((()=>[(0,t.Wm)(j,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{onClick:l=>z(e.LIBDAT,e.TITLE),rounded:"",flat:"",icon:"delete"},null,8,["onClick"])])),_:2},1024)])),_:2},1024),(0,t.Wm)(j,{style:{"max-width":"150px"},onClick:l=>B(e)},{default:(0,t.w5)((()=>[(0,t.Wm)($,null,{default:(0,t.w5)((()=>[(0,t._)("b",null,(0,i.zw)(e.TITLE),1)])),_:2},1024)])),_:2},1032,["onClick"]),(0,t.Wm)(j,{class:"text-left",onClick:l=>B(e)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.SQLSTR),1)])),_:2},1032,["onClick"]),(0,t.Wm)(j,{class:"text-left",onClick:l=>B(e)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.NOTE),1)])),_:2},1032,["onClick"]),(0,t.Wm)(K,{dense:"",clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(j,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{onClick:l=>P(e.LIBDAT,e.TITLE,e.PREF),rounded:"",flat:"","text-color":"S"==e.PREF?"red":"grey",icon:"favorite"},null,8,["onClick","text-color"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}))])),_:1})])),_:1})]),null!==(0,a.SU)(l).gError?((0,t.wg)(),(0,t.iD)("pre",m,[(0,t.Uk)("   "),(0,t._)("b",null," errore:  "+(0,i.zw)((0,a.SU)(l).gError)+" ",1),(0,t.Uk)("\n   ")])):(0,a.SU)(l).showTable?((0,t.wg)(),(0,t.j4)(re,{key:1,loading:(0,a.SU)(l).loadingTable,class:"q-mx-xl q-my-lg text-subtitle2 my-sticky-header-table","table-header-class":"text-white",title:"Risultati query",dense:"",boarderd:"","auto-width":"",separator:"cell",rows:(0,a.SU)(l).queries,"row-key":"name",rowsPerPage:30,"rows-per-page-options":[0,8,18],style:{height:"480px"},filter:(0,a.SU)(l).filter,grid:(0,a.SU)(l).grid},{loading:(0,t.w5)((()=>[(0,t.Wm)(oe,{showing:"",color:"primary"})])),"top-right":(0,t.w5)((()=>[(0,t.Wm)(ie,{borderless:"",dense:"",debounce:"300",modelValue:(0,a.SU)(l).filter,"onUpdate:modelValue":o[1]||(o[1]=e=>(0,a.SU)(l).filter=e),placeholder:"Search word"},{append:(0,t.w5)((()=>[(0,t.Wm)(te,{name:"search",color:"white"}),(0,t.Wm)(ae,{color:"red",modelValue:(0,a.SU)(l).grid,"onUpdate:modelValue":o[0]||(o[0]=e=>(0,a.SU)(l).grid=e),label:"Grid"},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1},8,["loading","rows","filter","grid"])):(0,t.kq)("",!0),(0,t.Wm)(we,{modelValue:(0,a.SU)(l).dialog,"onUpdate:modelValue":o[11]||(o[11]=e=>(0,a.SU)(l).dialog=e),"transition-show":"rotate","transition-hide":"rotate"},{default:(0,t.w5)((()=>[(0,t.Wm)(le,{style:{width:"1800px","max-width":"90vw","max-height":"95%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(n),(0,t._)("div",w,[(0,t.Wm)(le,{class:"q-ma-lg"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t._)("div",g,[(0,t._)("div",f,[(0,t.Wm)(ie,{filled:"",modelValue:(0,a.SU)(l).title,"onUpdate:modelValue":o[2]||(o[2]=e=>(0,a.SU)(l).title=e),label:"Titolo"},null,8,["modelValue"])]),(0,a.SU)(l).createDialog?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",y,[(0,t.Wm)(ie,{outlined:"",style:{"font-family":"Florence","font-size":"20px"},modelValue:(0,a.SU)(l).sqlQuery,"onUpdate:modelValue":o[3]||(o[3]=e=>(0,a.SU)(l).sqlQuery=e),autogrow:"",label:"Scrivi la SQL qui"},null,8,["modelValue"])])),(0,t._)("div",U,[(0,t.Wm)(ie,{modelValue:(0,a.SU)(l).note,"onUpdate:modelValue":o[4]||(o[4]=e=>(0,a.SU)(l).note=e),filled:"",autogrow:"",label:"Note"},null,8,["modelValue"])])])])),_:1})])),_:1}),(0,t.Wm)(le,{class:"q-ma-lg"},{default:(0,t.w5)((()=>[(0,a.SU)(l).createDialog?((0,t.wg)(),(0,t.j4)(d,{key:0,bordered:"",class:"my-card"},{default:(0,t.w5)((()=>[(0,t._)("div",b,[(0,t._)("div",_,[(0,t._)("div",S,[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t._)("div",h,[(0,t.Wm)(se,{modelValue:T.value,"onUpdate:modelValue":[o[5]||(o[5]=e=>T.value=e),O],options:(0,a.SU)(L).getUserPrefAsObj,color:"primary",inline:""},null,8,["modelValue","options"])]),(0,t._)("div",q,[(0,t._)("p",W,[(0,t._)("b",null,(0,i.zw)((0,a.SU)(l).select),1)]),(0,t.Wm)(de,{filled:"",modelValue:(0,a.SU)(l).libdatM,"onUpdate:modelValue":[o[6]||(o[6]=e=>(0,a.SU)(l).libdatM=e),R],"use-input":"","input-debounce":"0",label:"Libreria dati",clearable:"",options:(0,a.SU)(l).optionLibdat,onFilter:X,onClear:F,behavior:"menu",style:{"max-width":"180px",height:"15px important!"}},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(j,{class:"text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)("No results")])),_:1})])),_:1})])),_:1},8,["modelValue","options"]),(0,t.Wm)(de,{filled:"","hide-bottom-space":"",loading:(0,a.SU)(l).loadingFileM,modelValue:(0,a.SU)(l).fileM,"onUpdate:modelValue":[o[7]||(o[7]=e=>(0,a.SU)(l).fileM=e),H],"use-input":"","input-debounce":"0",label:"File",clearable:"",options:(0,a.SU)(l).optionFile,onFilter:Y,onClear:F,behavior:"menu",style:{"max-width":"280px",height:"15px important!"}},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(j,{class:"text-grey"},{default:(0,t.w5)((()=>[(0,t.Uk)("No results")])),_:1})])),_:1})])),_:1},8,["loading","modelValue","options"]),(0,t._)("div",k,[(0,t._)("p",x,(0,i.zw)((0,a.SU)(l).where),1),(0,t.Wm)(ae,{disable:!(0,a.SU)(l).fileM,modelValue:(0,a.SU)(l).toggleWhere,"onUpdate:modelValue":[o[8]||(o[8]=e=>(0,a.SU)(l).toggleWhere=e),N],color:"primary"},null,8,["disable","modelValue"])])])])),_:1})]),(0,t._)("div",v,[(0,t._)("div",V,[(0,t.Wm)(ie,{outlined:"",style:{"font-family":"Florence","font-size":"20px"},modelValue:(0,a.SU)(l).sqlQuery,"onUpdate:modelValue":o[9]||(o[9]=e=>(0,a.SU)(l).sqlQuery=e),autogrow:"",label:"Scrivi la SQL qui"},null,8,["modelValue"])])])]),(0,t._)("div",Q,[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t._)("div",C,[(0,t.wy)((0,t.Wm)(re,{dense:"",title:"Seleziona campi",rows:(0,a.SU)(l).rows,columns:(0,a.SU)(l).columns,"row-key":"COLUMN_TEXT",selection:"multiple",boarderd:"",rowsPerPage:30,"rows-per-page-options":[0,2,18],style:{height:"500px"},selected:(0,a.SU)(l).selected,"onUpdate:selected":[o[10]||(o[10]=e=>(0,a.SU)(l).selected=e),A]},{body:(0,t.w5)((e=>[(0,t.Wm)(me,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(ue,{key:"COLUMN_NAME",props:e,class:"q-mr-lg"},{default:(0,t.w5)((()=>[(0,t.Wm)(ne,{dense:"",modelValue:e.selected,"onUpdate:modelValue":l=>e.selected=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,t.Wm)(ue,{key:"COLUMN_NAME",props:e,class:"q-ml-lg",style:(0,i.j5)([e.selected?"background-color: #ddd; font-size: 16px;":"pointer-events:none"])},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.VALORE)+" ",1),(0,t.Wm)(ce,{onBeforeHide:E,modelValue:e.row.VALORE,"onUpdate:modelValue":l=>e.row.VALORE=l,title:"Scrivi qui il valore",buttons:""},{default:(0,t.w5)((l=>["CHAR"===e.row.DATA_TYPE?((0,t.wg)(),(0,t.j4)(ie,{key:0,type:"text",modelValue:l.value,"onUpdate:modelValue":e=>l.value=e,dense:"",autofocus:""},null,8,["modelValue","onUpdate:modelValue"])):((0,t.wg)(),(0,t.j4)(ie,{key:1,type:"number",modelValue:l.value,"onUpdate:modelValue":e=>l.value=e,dense:"",autofocus:""},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props","style"]),(0,t.Wm)(ue,{key:"COLUMN_NAME",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.COLUMN_NAME),1)])),_:2},1032,["props"]),(0,t.Wm)(ue,{key:"COLUMN_TEXT",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.COLUMN_TEXT),1)])),_:2},1032,["props"]),(0,t.Wm)(ue,{key:"KEY_COLUMN",props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.row.KEY_COLUMN),1)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","selected"]),[[r.F8,(0,a.SU)(l).toggleWhere]])])])),_:1})])])])),_:1})):(0,t.kq)("",!0)])),_:1})]),(0,t.Wm)(pe,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(s,{disable:""==(0,a.SU)(l).title||""==(0,a.SU)(l).sqlQuery,flat:"",label:"Save",icon:"save",color:"primary",onClick:I},null,8,["disable"]),[[ge]]),(0,t.wy)((0,t.Wm)(s,{flat:"",label:"close",color:"red"},null,512),[[ge]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}};var T=o(151),A=o(5589),E=o(8240),M=o(5869),Z=o(8506),O=o(5363),N=o(7011),D=o(3414),H=o(2035),F=o(5096),I=o(2350),z=o(8107),P=o(6941),R=o(4842),j=o(4554),B=o(8886),X=o(6778),Y=o(8758),K=o(3017),G=o(8186),J=o(3884),$=o(5735),ee=o(1289),le=o(9367),oe=o(6115),te=o(677),ae=o(7518),ie=o.n(ae);const re=L,se=re;ie()(L,"components",{QCard:T.Z,QCardSection:A.Z,QBtn:E.Z,QSeparator:M.Z,QSpinnerIos:Z.Z,QTooltip:O.Z,QList:N.Z,QItem:D.Z,QItemSection:H.Z,QAvatar:F.Z,QItemLabel:I.Z,QTable:z.Z,QInnerLoading:P.Z,QInput:R.Z,QIcon:j.Z,QToggle:B.Z,QDialog:X.Z,QOptionGroup:Y.Z,QSelect:K.Z,QTr:G.Z,QTd:J.Z,QCheckbox:$.Z,QPopupEdit:ee.Z,QCardActions:le.Z,QField:oe.Z}),ie()(L,"directives",{ClosePopup:te.Z})}}]);