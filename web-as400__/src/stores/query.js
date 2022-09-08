import { defineStore } from "pinia";
import { ref } from "vue";
import { LocalStorage } from 'quasar'
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const queryStore = defineStore("query", {
  state: () => {
    return {
      queries: ref([]),
      gError: ref(null),
      queriesSaved: ref([]),
      queriesSavedStatus: null,
      loaderUserQuery: false,
      loadingTable: false,
      dialog: ref(false),
      title: ref(""),
      sqlQuery: ref(""),
      note: ref(""),
      pref: ref(""),
      launchQueryPrefered: ref(false),
      // taable
      filter: ref(""),
      grid: false,
      // Dialog QUERY COMPOSITOR
      createDialog: false,
      select: ref("SELECT * FROM "),
      where: ref(" WHERE "),
      toggleWhere: false,
      preview: ref(""),
      //
      libdatM: ref(null),
      optionLibdat: ref([]),
      stringOptLibdat: ref([]),
      //
      fileM: ref(null),
      optionFile: ref[[]],
      stringOptFile: ref([]),
      filenamesArray: [],
      loadingFileM: false,

      //tabella dei campi
      rows: [
      ],
      columns: [

        {
          name: "VALORE",
          label: "VALORE",
          field: "VALORE",
          sortable: true,
          align: "left",
        },
        {
          name: "COLUMN_NAME",
          label: "CAMPO",
          field: "COLUMN_NAME",
          sortable: true,
          align: "center",
        },
        {
          name: "COLUMN_TEXT",
          label: "DESCRIZIONE",
          required: true,
          field: "COLUMN_TEXT",
          sortable: true,
          align: "left",
        },
        {
          name: "KEY_COLUMN",
          label: "CHIAVE",
          field: "KEY_COLUMN",
          sortable: true,
          align: "left",

        },

      ],
      columsLoading: false,
      selected: ref([]),
      whereCompose: ref(""),
    };
  },
  getters: {
    getQueryresult: (state) => state.queries,
    getQueriesSaved: (state) => state.queriesSaved,
    getQueriesPrefered: (state) => {
      // console.log("#############################à")
      // console.log(state.queriesSaved)

      return state.queriesSaved.filter(x => {
        return (x.PREF === 'S')
      })

    },
    getLibl: (state) => state.optionLibdat,
    getFilenames: (state) => state.optionFile,
    getColumns: (state) => state.rows,
    getSelected: (state) => state.selected,
  },
  actions: {
    setPreview() {
      var temp =
        this.preview.substring(0, this.preview.indexOf("WHERE")) + " WHERE ";

      this.selected.forEach((x) => {
        temp +=
          "\n" +
          x.COLUMN_NAME +
          " = " +
          (x.DATA_TYPE === "CHAR" ? ("'" + x.VALORE + "'") : (x.VALORE)) +
          "     AND ";
      });
      if (this.selected.length) temp = temp.slice(0, -4);
      this.preview = temp;

      this.compila()
    },

    sqlAutomati() {

      if (this.createDialog) {
        var filename = "";
        if (this.fileM != null) filename = this.fileM.split("-->", 1)[0].trim();

        this.preview =
          this.select +
          this.libdatM +
          "." +
          filename +
          (this.toggleWhere ? this.where : "");

        this.compila()
      }
    },
    compila() {
      this.sqlQuery = this.preview;
    },

    cleanDialog() {
      this.queries = ref([])
      this.gError = ref(null)
      //  this.queriesSaved = ref([])
      //  this.queriesSavedStatus = null
      this.loaderUserQuery = false
      this.loadingTable = false

      this.title = ref("")
      this.sqlQuery = ref("")
      this.note = ref("")
      this.pref = ref("")
      this.launchQueryPrefered = ref(false)
      // taable
      this.filter = ref("")
      this.grid = false
      // Dialog QUERY COMPOSITOR

      this.select = ref("SELECT * FROM ")
      this.where = ref(" WHERE ")
      this.toggleWhere = false
      this.preview = ref("")
      //

      this.fileM = ref(null)
      this.optionFile = ref[[]]
      this.stringOptFile = ref([])
      this.filenamesArray = []
      this.loadingFileM = false

      //tabella dei campi
      this.rows = [
      ]

      this.columsLoading = false
      this.selected = ref([])
      this.whereCompose = ref("")
    },

    cleanOnFilenameChange() {
      this.queries = ref([])
      this.gError = ref(null)
      //this.queriesSaved = ref([])
      //this.queriesSavedStatus = null
      this.loaderUserQuery = false
      this.loadingTable = false

      this.title = ref("")
      this.sqlQuery = ref("")
      this.note = ref("")
      this.pref = ref("")
      this.launchQueryPrefered = ref(false)
      // taable
      this.filter = ref("")
      this.grid = false
      // Dialog QUERY COMPOSITOR

      this.select = ref("SELECT * FROM ")
      this.where = ref(" WHERE ")
      this.toggleWhere = false
      this.preview = ref("")


      //tabella dei campi
      this.rows = [
      ]

      this.columsLoading = false
      this.selected = ref([])
      this.whereCompose = ref("")
    },


    // Files
    async getColumsAction(data) {
      //"http://" + window.location.hostname + ":3300/files/PRTFFLD/?library=WRK90MUL&tablename=gcpro00f"
      let url =
        "http://" +
        window.location.hostname +
        ":3300/files/PRTFFLD1/?library=" +
        data.lib +
        "&tablename=" +
        data.fileName  +
        "&as=" +
        LocalStorage.getItem("as")

      const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        re0direct: "follow",
        referrerPolicy: "no-referrer",
        enctype: "mutipart/form-data",
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.code === 409) {
          throw new Error(responseData.message);
        } else
          throw new Error("Request failed with error code: " + response.status);
      }

      var arr = []

      responseData.forEach(x => {
        x.VALORE = ""
        if (x.COLUMN_TEXT == null || x.COLUMN_TEXT === "") {
          x.COLUMN_TEXT = "No desc per " + x.COLUMN_NAME
        }
        arr.push(x)

      })

      this.rows = arr;
    },

    //Filenames
    async getFilenamesAction(data) {
      const url =
        "http://" +
        window.location.hostname +
        ":3300/files/FILENAMES/?library=" +
        data.filename  +
        "&as=" +
        LocalStorage.getItem("as")

      const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        enctype: "mutipart/form-data",
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.code === 409) {
          throw new Error(responseData.message);
        } else
          throw new Error("Request failed with error code: " + response.status);
      }

      this.optionFile = responseData;
    },

    async getLibdatAction(data) {
      // "http://" + window.location.hostname + ":3300/files/SCHEMA/?library=WRK"

      let url =
        "http://" +
        window.location.hostname +
        ":3300/files/SCHEMA/?library=" +
        data.user  +
        "&as=" +
        LocalStorage.getItem("as")

      const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        enctype: "mutipart/form-data",
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.code === 409) {
          throw new Error(responseData.message);
        } else
          throw new Error("Request failed with error code: " + response.status);
      }

      this.optionLibdat = responseData;
    },

    async excecQuery(query) {
      // "http://localhost:3300/files/?library=wrkjexp&tablename=role_user"
      let url =
        "http://" + window.location.hostname + ":3300/files/?str=" + query  +
        "&as=" +
        LocalStorage.getItem("as")

      const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        enctype: "mutipart/form-data",
      });

      const responseData = await response.json();
      /*
                              if (!response.ok) {
                                  if (responseData.code === 409) {
                                      throw new Error(responseData.message);
                                  } else
                                      throw new Error("Request failed with error code: " + response.status);
                              }
                  */
      if (!responseData.error) {
        this.gError = null;
        this.queries = responseData;
      } else {
        this.gError = responseData;
      }
    },

    async insertUserQuery(queryObj) {
      let url =
        "http://" +
        window.location.hostname +
        ":3300/files/inserOrUpdateUserQuery/?libdat=" +
        queryObj.user +
        "&title=" +
        queryObj.title +
        "&sqlstr=" +
        queryObj.sqlstr +
        "&note=" +
        queryObj.note +       "&as=" +
        LocalStorage.getItem("as")

      const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        enctype: "mutipart/form-data",
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.code === 409) {
          throw new Error(responseData.message);
        } else
          throw new Error("Request failed with error code: " + response.status);
      }

      //  if (responseData.code !== 500) {
      await this.selectUserQuery(queryObj.user);
      //this.queriesSavedStatus = responseData;
      //   }
    },

    async selectUserQuery(user) {
      let url =
        "http://" +
        window.location.hostname +
        ":3300/files/selectUserQuery/?libdat=" +
        user +   
            "&as=" +
        LocalStorage.getItem("as")

      const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        enctype: "mutipart/form-data",
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.code === 409) {
          throw new Error(responseData.message);
        } else
          throw new Error("Request failed with error code: " + response.status);
      }

      if (responseData.code !== 500)
        // this.queriesSaved = responseData;        
        this.queriesSaved = responseData.map((obj) => {
          if (obj.SQLSTR.includes("`")) {
            return {
              ...obj,
              SQLSTR: obj.SQLSTR.replace(new RegExp("`", "g"), "'"),
            };
          }

          return obj;
        });
    },

    async deleteUserQuery(user, title) {
      let url =
        "http://" +
        window.location.hostname +
        ":3300/files/deleteUserQuery/?libdat=" +
        user +
        "&title=" +
        title + 
        "&as=" +
        LocalStorage.getItem("as")

      const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        enctype: "mutipart/form-data",
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.code === 409) {
          throw new Error(responseData.message);
        } else
          throw new Error("Request failed with error code: " + response.status);
      }

      if (responseData.code !== 500) {
        //  this.selectUserQuery(user);
        await this.selectUserQuery(user);
      }
    },

    async modifyQyeryPref(user, title, pref) {
      let url =
        "http://" +
        window.location.hostname +
        ":3300/files/updateStatusPref/?libdat=" +
        user +
        "&title=" +
        title +
        "&pref=" +
        pref + 
        "&as=" +
        LocalStorage.getItem("as")

      const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        enctype: "mutipart/form-data",
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (responseData.code === 409) {
          throw new Error(responseData.message);
        } else
          throw new Error("Request failed with error code: " + response.status);
      }

      if (responseData.code !== 500) {

        await this.selectUserQuery(user);
      }
    },
  },
});
