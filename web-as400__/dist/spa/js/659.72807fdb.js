"use strict";(globalThis["webpackChunkweb_as400"]=globalThis["webpackChunkweb_as400"]||[]).push([[659],{8659:(e,l,a)=>{a.r(l),a.d(l,{default:()=>x});var t=a(3673);const i={class:""},o={class:"row q-mb-md"},s={key:0,class:"col q-mr-md",style:{"border-style":"ridge"}},r={class:"col flex q-pa-md",style:{"border-style":"ridge"}},n={class:"row q-pa-md",style:{"border-style":"ridge"}},d=(0,t.Uk)("No results"),m=(0,t.Uk)("No results"),u={class:"q-ml-lg scritta"};function c(e,l,a,c,h,g){const f=(0,t.up)("q-option-group"),p=(0,t.up)("q-icon"),b=(0,t.up)("q-input"),E=(0,t.up)("q-btn"),A=(0,t.up)("q-checkbox"),w=(0,t.up)("q-item-section"),_=(0,t.up)("q-item"),y=(0,t.up)("q-select"),T=(0,t.up)("q-toggle"),L=(0,t.up)("q-card-section"),N=(0,t.up)("q-card"),M=(0,t.up)("q-table"),C=(0,t.up)("q-inner-loading");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t.Wm)(N,{bordered:"",class:"q-my-sm q-mx-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{class:""},{default:(0,t.w5)((()=>[(0,t._)("div",o,[h.pref.getUserPrefAsObj.length>0?((0,t.wg)(),(0,t.iD)("div",s,[(0,t.Wm)(f,{modelValue:h.group,"onUpdate:modelValue":[l[0]||(l[0]=e=>h.group=e),g.onGroupChange],options:h.pref.getUserPrefAsObj,color:"primary",inline:""},null,8,["modelValue","onUpdate:modelValue","options"])])):(0,t.kq)("",!0),(0,t._)("div",r,[(0,t.Wm)(b,{dense:"",style:{width:"170px"},square:"",color:"primary","label-color":"primary",outlined:"",clearable:"",modelValue:h.fastWordSearch,"onUpdate:modelValue":l[1]||(l[1]=e=>h.fastWordSearch=e),label:"Fast Search"},{append:(0,t.w5)((()=>[(0,t.Wm)(p,{name:"bolt",color:"primary"})])),_:1},8,["modelValue"]),(0,t.Wm)(E,{dense:"",loading:h.loading,inline:"",color:"primary q-ml-sm",label:"Search","icon-right":"send",onClick:g.fastSearch,disable:null==h.fastWordSearch||""==h.fastWordSearch||h.fastWordSearch.length<3},null,8,["loading","onClick","disable"]),(0,t.Wm)(A,{dense:"",class:"q-ml-xl",size:"lg","left-label":"",modelValue:h.searchFile,"onUpdate:modelValue":l[2]||(l[2]=e=>h.searchFile=e),label:"Cerca File"},null,8,["modelValue"]),(0,t.Wm)(A,{dense:"",class:"q-ml-xl",size:"lg","left-label":"",modelValue:h.deep,"onUpdate:modelValue":l[3]||(l[3]=e=>h.deep=e),label:"Ricerca profonda"},null,8,["modelValue"])])]),(0,t._)("div",n,[(0,t.Wm)(y,{dense:"",filled:"",modelValue:h.model,"onUpdate:modelValue":[l[4]||(l[4]=e=>h.model=e),g.onClickLibdat],"use-input":"","input-debounce":"0",label:"LIBDAT",clearable:"",options:h.options,onFilter:g.filterFn,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"text-grey"},{default:(0,t.w5)((()=>[d])),_:1})])),_:1})])),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue"]),(0,t.Wm)(y,{class:"q-ml-md",style:{"max-height":"500px"},dense:"",filled:"",modelValue:h.fileNameModel,"onUpdate:modelValue":[l[5]||(l[5]=e=>h.fileNameModel=e),g.onClickFilename],"use-input":"",loading:h.loadingInputFiles,disable:h.loadingInputFiles,"input-debounce":"0",label:"FILE",autofocus:"",clearable:"",options:h.fileNamesOptions,onFilter:g.filterFileNames,behavior:"menu"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"text-grey"},{default:(0,t.w5)((()=>[m])),_:1})])),_:1})])),_:1},8,["modelValue","loading","disable","options","onFilter","onUpdate:modelValue"]),(0,t._)("div",u,[(0,t.Wm)(T,{dense:"",modelValue:h.queryToggle,"onUpdate:modelValue":l[6]||(l[6]=e=>h.queryToggle=e),size:"xl",icon:"visibility",label:"Show 500",color:"red"},null,8,["modelValue"])])])])),_:1})])),_:1}),h.queryToggle||h.queryStr.launchQueryPrefered?h.queryToggle&&!h.queryStr.launchQueryPrefered?((0,t.wg)(),(0,t.j4)(M,{key:1,class:"text-subtitle2 my-sticky-header-table","table-header-class":"text-white",rows:h.queries,"row-key":"index",dense:"","auto-width":"",grid:h.grid,loading:h.loading,boarderd:"",title:h.fileNameModel,separator:"cell",style:{height:"640px"},filter:h.filter,rowsPerPage:1e4,"rows-per-page-options":[0,8,18]},{"top-right":(0,t.w5)((()=>[(0,t.Wm)(b,{borderless:"",dense:"",debounce:"300",modelValue:h.filter,"onUpdate:modelValue":l[10]||(l[10]=e=>h.filter=e),placeholder:"Search"},{append:(0,t.w5)((()=>[(0,t.Wm)(p,{name:"search",color:"white"}),(0,t.Wm)(T,{modelValue:h.grid,"onUpdate:modelValue":l[9]||(l[9]=e=>h.grid=e),color:"red",label:"Grid"},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1},8,["rows","grid","loading","title","filter"])):h.queryStr.queries.length?((0,t.wg)(),(0,t.j4)(M,{key:2,loading:h.queryStr.loadingTable,class:"text-subtitle2 my-sticky-header-table","table-header-class":"text-white",title:"Risultati query",dense:"",boarderd:"","auto-width":"",separator:"cell",rows:h.queryStr.queries,"row-key":"name",rowsPerPage:30,"rows-per-page-options":[0,8,18],style:{height:"640px"},filter:h.queryStr.filter,grid:h.queryStr.grid},{loading:(0,t.w5)((()=>[(0,t.Wm)(C,{showing:"",color:"primary"})])),"top-right":(0,t.w5)((()=>[(0,t.Wm)(b,{borderless:"",dense:"",debounce:"300",modelValue:h.queryStr.filter,"onUpdate:modelValue":l[12]||(l[12]=e=>h.queryStr.filter=e),placeholder:"Search word"},{append:(0,t.w5)((()=>[(0,t.Wm)(p,{name:"search",color:"white"}),(0,t.Wm)(T,{color:"red",modelValue:h.queryStr.grid,"onUpdate:modelValue":l[11]||(l[11]=e=>h.queryStr.grid=e),label:"Grid"},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1},8,["loading","rows","filter","grid"])):(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(M,{key:0,dense:"","auto-width":"",class:"text-subtitle2 my-sticky-header-table","table-header-class":"text-white",grid:h.grid,rows:h.rows,columns:h.columns,"row-key":"name",loading:h.loading,boarderd:"",title:h.fileNameModel,separator:"cell",rowsPerPage:30,"rows-per-page-options":[0,8,18],style:{height:"640px"},filter:h.filter},{"top-right":(0,t.w5)((()=>[(0,t.Wm)(b,{borderless:"",dense:"",debounce:"300",modelValue:h.filter,"onUpdate:modelValue":l[8]||(l[8]=e=>h.filter=e),placeholder:"Search word"},{append:(0,t.w5)((()=>[(0,t.Wm)(p,{name:"search",color:"white"}),(0,t.Wm)(T,{modelValue:h.grid,"onUpdate:modelValue":l[7]||(l[7]=e=>h.grid=e),color:"red",label:"Grid"},null,8,["modelValue"])])),_:1},8,["modelValue"]),(0,t.Wm)(E,{flat:"",class:"q-ml-xl",color:"yellow","icon-right":"archive",label:"Export to csv","no-caps":"",onClick:g.exportTable},null,8,["onClick"])])),_:1},8,["grid","rows","columns","loading","title","filter"]))])}var h=a(1959),g=a(2841),f=a(8825),p=a(6041),b=a(1390),E=a(5214);const A={data(){return{q:(0,f.Z)(),as:null,pref:null,queryStr:null,fastWordSearch:"",deep:!1,searchFile:!1,queries:[],queryToggle:!1,launchQueryPrefered:!1,pagination:{rowsPerPage:0},group:(0,h.iH)(""),loadingInputFiles:!1,model:null,stringOptions:[],options:this.stringOptions,fileNameModel:null,filenamesArray:[],fileNamesOptions:this.filenamesArray,separator:"vertical",filter:"",grid:!1,loading:!1,fileName:"ROLE_USER",lib:"WRKJEXP",rows:[],columns:[{name:"COLUMN_NAME",label:"CAMPO",field:"COLUMN_NAME",sortable:!0,align:"center"},{name:"COLUMN_TEXT",label:"DESCRIZIONE",field:"COLUMN_TEXT",sortable:!0,align:"left"},{name:"TABLE_SCHEMA",label:"LIBRERIA",field:"TABLE_SCHEMA",sortable:!0,align:"left"},{name:"TABLE_NAME",label:"FILE",field:"TABLE_NAME",sortable:!0,align:"left"},{name:"KEY_COLUMN",label:"CHIAVE",field:"KEY_COLUMN",sortable:!0,align:"left"},{name:"KEY_ORDER",label:"KEY_ORDER",field:"KEY_ORDER",sortable:!0,align:"left"},{name:"DATA_TYPE",label:"TIPO",field:"DATA_TYPE",sortable:!0},{name:"LENGTH",label:"LUNGHEZZA",field:"LENGTH",sortable:!0},{name:"NUMERIC_SCALE ",label:"DECIMALE",field:"NUMERIC_SCALE",sortable:!0},{name:"COLUMN_DEFAULT",label:"DEFAULT",field:"COLUMN_DEFAULT",sortable:!0},{name:"CHARACTER_MAXIMUM_LENGTH",label:"LUNGEZZA MASSIMA",field:"CHARACTER_MAXIMUM_LENGTH",sortable:!0}]}},methods:{exportTable(){const e=[this.columns.map((e=>this.wrapCsvValue(e.label)))].concat(this.rows.map((e=>this.columns.map((l=>this.wrapCsvValue("function"===typeof l.field?l.field(e):e[void 0===l.field?l.name:l.field],l.format))).join(",")))).join("\r\n");(0,g.Z)("table-export.csv",e,"text/csv")},wrapCsvValue(e,l){let a=void 0!==l?l(e):e;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),`"${a}"`},async loadFilenames(){try{const e={filename:this.model};this.loadingInputFiles=!0,await this.as.getFilenamesAction(e),this.filenamesArray=[],this.as.getFilenames.forEach((e=>{this.filenamesArray.push(e.TABLE_NAME+" --\x3e "+e.TABLE_TEXT)})),this.loadingInputFiles=!1}catch(e){console.log(e)}},async loadLibdat(){try{const e={user:""};await this.pref.setUserPref(this.q.localStorage.getItem("currentUser")),await this.pref.getUserPrefAsObj.length>0&&(this.group=this.pref.getUserPrefAsObj[0].value,this.model=this.group),await this.as.getUsersAction(e),await this.as.getUsers.forEach((e=>{this.stringOptions.push(e.TABLE_SCHEMA)})),this.loadFilenames()}catch(e){console.log(e)}},async loadFiles(){if(this.fileNameModel){this.loading=!0,this.rows=[];try{const e={lib:this.model,fileName:this.fileNameModel.split("--\x3e")[0].trim()};await this.as.getFilesAction(e),this.rows=this.as.getFiles,this.loading=!1}catch(e){console.log(e),this.loading=!1}}},async loadQueries(){if(this.fileNameModel){this.loading=!0,this.queries=[];try{const e={lib:this.model,fileName:this.fileNameModel.split("--\x3e")[0].trim()};await this.as.getQueriesAction(e),this.queries=this.as.getQueries,this.loading=!1}catch(e){console.log(e),this.loading=!1}}},async loadFastFiles(){if(""!==this.fastWordSearch){this.loading=!0,this.rows=[];try{const e={user:null!=this.q.localStorage.getItem("currentUser")&&""!=this.q.localStorage.getItem("currentUser")?this.q.localStorage.getItem("currentUser").trim():"",search_word:this.fastWordSearch.trim(),all:this.deep?"all":"no",searchFile:this.searchFile?"true":"false"};await this.as.getFastFilesAction(e),this.rows=this.as.getFastFiles,this.loading=!1}catch(e){console.log(e),this.loading=!1}}},onClickLibdat(e){this.loadFilenames(),this.fileNameModel=null},onClickFilename(e){this.loadFiles(),this.filter="",this.queryStr.launchQueryPrefered=!1},filterFileNames(e,l){l(""!==e?()=>{const l=e.toLowerCase();this.fileNamesOptions=this.filenamesArray.filter((e=>e.toLowerCase().indexOf(l)>-1))}:()=>{this.fileNamesOptions=this.filenamesArray})},filterFn(e,l){l(""!==e?()=>{const l=e.toLowerCase();this.options=this.stringOptions.filter((e=>e.toLowerCase().indexOf(l)>-1))}:()=>{this.options=this.stringOptions})},fastSearch(){this.loadFastFiles()},onGroupChange(){this.model=this.group,this.loadFilenames(),this.fileNameModel=null}},watch:{queryToggle(e,l){e&&(this.loadQueries(),this.queryStr.launchQueryPrefered=!1)},fileNameModel(e,l){""!==e&&null!=this.fileNameModel&&this.queryToggle&&this.loadQueries()},fastWordSearch(e,l){},searchFile(e,l){this.columns=e?[{name:"TABLE_SCHEMA",label:"LIBRERIA",field:"TABLE_SCHEMA",sortable:!0,align:"left"},{name:"TABLE_NAME",label:"FILE",field:"TABLE_NAME",sortable:!0,align:"left"},{name:"TABLE_TEXT",label:"TABLE_TEXT",field:"TABLE_TEXT",sortable:!0,align:"center"},{name:"TABLE_DEFINER",label:"TABLE_DEFINER",field:"TABLE_DEFINER",sortable:!0,align:"center"}]:[{name:"COLUMN_NAME",label:"CAMPO",field:"COLUMN_NAME",sortable:!0,align:"center"},{name:"COLUMN_TEXT",label:"DESCRIZIONE",field:"COLUMN_TEXT",sortable:!0,align:"left"},{name:"TABLE_SCHEMA",label:"LIBRERIA",field:"TABLE_SCHEMA",sortable:!0,align:"left"},{name:"TABLE_NAME",label:"FILE",field:"TABLE_NAME",sortable:!0,align:"left"},{name:"KEY_COLUMN",label:"CHIAVE",field:"KEY_COLUMN",sortable:!0,align:"left"},{name:"KEY_ORDER",label:"KEY_ORDER",field:"KEY_ORDER",sortable:!0,align:"left"},{name:"DATA_TYPE",label:"TIPO",field:"DATA_TYPE",sortable:!0},{name:"LENGTH",label:"LUNGHEZZA",field:"LENGTH",sortable:!0},{name:"NUMERIC_SCALE ",label:"DECIMALE",field:"NUMERIC_SCALE",sortable:!0},{name:"COLUMN_DEFAULT",label:"DEFAULT",field:"COLUMN_DEFAULT",sortable:!0},{name:"CHARACTER_MAXIMUM_LENGTH",label:"LUNGEZZA MASSIMA",field:"CHARACTER_MAXIMUM_LENGTH",sortable:!0}]}},created(){this.as=(0,b.o)(),this.pref=(0,E.H)(),this.queryStr=(0,p.U)(),this.loadLibdat()}};var w=a(4260),_=a(151),y=a(5589),T=a(8758),L=a(4842),N=a(4554),M=a(8240),C=a(5735),U=a(3017),q=a(3414),S=a(2035),F=a(8886),I=a(8107),V=a(6941),O=a(7518),R=a.n(O);const W=(0,w.Z)(A,[["render",c]]),x=W;R()(A,"components",{QCard:_.Z,QCardSection:y.Z,QOptionGroup:T.Z,QInput:L.Z,QIcon:N.Z,QBtn:M.Z,QCheckbox:C.Z,QSelect:U.Z,QItem:q.Z,QItemSection:S.Z,QToggle:F.Z,QTable:I.Z,QInnerLoading:V.Z})}}]);