<template>
  <div class="q-pa-xs">
    <!-- <q-card bordered class="q-my-sm q-mx-md"> -->
      <q-card-section class="shadow-10">
        <div class="row q-mb-md">
          <div class="col q-mr-md" style="border-style: ridge" v-if="pref.getUserPrefAsObj.length > 0">
            <q-option-group class="q-mt-md" v-model="group" @update:model-value="onGroupChange"
              :options="pref.getUserPrefAsObj" color="primary" inline />
          </div>

          <div class="col flex q-pa-md" style="border-style: ridge">
            <q-input dense style="width: 250px" square color="primary" label-color="primary" outlined clearable
              v-model="fastWordSearch" label="Fast Search" @keyup.enter="fastSearch">
              <template v-slot:append>
                <q-icon name="bolt" color="primary" />
              </template>
            </q-input>

            <q-btn dense :loading="loading" inline color="primary q-ml-sm" label="Search" icon-right="send"
              @click="fastSearch" :disable="
                fastWordSearch == null ||
                fastWordSearch == '' ||
                fastWordSearch.length < 3
              " />
            <q-checkbox dense class="q-ml-xl" size="lg" left-label v-model="searchFile" label="Cerca File" />

            <q-checkbox dense class="q-ml-xl" size="lg" left-label v-model="deep" label="Ricerca profonda" />

            <!-- <Voice @onVoice="voiceChanged"></Voice> -->
          </div>
        </div>

        <div class="row q-pa-md" style="border-style: ridge">
          <q-select dense filled v-model="libDatModel" use-input input-debounce="0" label="LIBDAT" clearable
            :options="options" @filter="filterFn" @update:model-value="onClickLibdat" behavior="menu">
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">No results</q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select class="q-ml-md" style="max-height: 500px" dense filled v-model="fileNameModel" use-input
            :loading="loadingInputFiles" :disable="loadingInputFiles" input-debounce="0" label="FILE" autofocus clearable
            :options="fileNamesOptions" @filter="filterFileNames" @update:model-value="onClickFilename" behavior="menu">
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">No results</q-item-section>
              </q-item>
            </template>
          </q-select>
          <div class="q-ml-lg scritta">
            <q-toggle dense v-model="queryToggle" size="xl" icon="visibility" label="Show 500" color="red" />
          </div>
          <!-- <q-select dense filled v-model="libDatModel" use-input input-debounce="0" label="LIBDAT" clearable
            :options="options" @filter="filterFn" @update:model-value="onClickLibdat" behavior="menu">
          </q-select> -->
        </div>
      </q-card-section>


   <div class="q-pa-md ">
    <!-- Table 1 -->
    <q-table :loading="loadingTable" v-if="!queryToggle && !queryStr.launchQueryPrefered" dense auto-width
      class="text-subtitle2 my-sticky-header-table " table-header-class="text-white" :grid="grid" :rows="rows"
      :columns="columns" row-key="name" boarderd :title="fileNameModel" separator="cell" :rowsPerPage="30"
      :rows-per-page-options="[0, 8, 18]" style="height: 640px" :filter="filter" ref="tb">
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>

      <template v-slot:top-right>
        <q-icon name="search" size="sm" class="q-mr-sm" color="white" />
        <q-input class=" " borderless clearable dense v-model="filter" placeholder="Search word">
          <template v-slot:append>
            <q-toggle v-model="grid" color="red" label="Grid" />
          </template>
        </q-input>

        <q-btn flat class="q-ml-xl" color="yellow" icon-right="archive" label="Export to csv" no-caps
          @click="exportTable" />
      </template>
    </q-table>
    <!-- Table 2 -->
    <q-table class="text-subtitle2 my-sticky-header-table" table-header-class="text-white "
      v-else-if="queryToggle && !queryStr.launchQueryPrefered" :rows="queries" row-key="index" dense auto-width
      :grid="grid" :loading="loading" boarderd :title="fileNameModel" separator="cell" style="height: 640px"
      :filter="filter" :rowsPerPage="10000" :rows-per-page-options="[0, 8, 18]" ref="tabCol">
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" clearable v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" color="white" />
            <q-toggle v-model="grid" color="red" label="Grid" />
          </template>
        </q-input>

        <q-btn flat class="q-ml-xl" color="yellow" icon-right="archive" label="Export to csv" no-caps
          @click="exportTableField" />
      </template>
    </q-table>
    <!-- Table 3 -->
    <q-table v-else-if="queryStr.queries.length" :loading="queryStr.loadingTable"
      class="text-subtitle2 my-sticky-header-table" table-header-class="text-white" title="Risultati query" dense boarderd
      auto-width separator="cell" :rows="queryStr.queries" row-key="name" :rowsPerPage="30"
      :rows-per-page-options="[0, 8, 18]" style="height: 640px" :filter="queryStr.filter" :grid="queryStr.grid"
      ref="queryTab">
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>

      <template v-slot:top-right>
        <q-input borderless dense debounce="300" clearable v-model="queryStr.filter" placeholder="Search word">
          <template v-slot:append>
            <q-icon name="search" color="white" />
            <q-toggle color="red" v-model="queryStr.grid" label="Grid" />
          </template>
        </q-input>
        <q-btn flat class="q-ml-xl" color="yellow" icon-right="archive" label="Export to csv" no-caps
          @click="exportTableQuery" />
      </template>
    </q-table>
  </div>

    <!--  <h1>{{as.getQueries}}</h1> -->
    <div v-if="(libDatModelComputed && false)">
    </div>
  <!-- </q-card> -->
  </div>
</template>

<script>
import { ref } from "vue";
import { exportFile } from "quasar";
import { useQuasar } from "quasar";
import { queryStore } from "../stores/query";
import { useStore } from "../stores/as";
import { prefStore } from "../stores/pref";

import { voiceStore } from "../stores/voice";
import Voice from "./Voice.vue";

export default {
  data() {
    return {
      q: useQuasar(),
      as: null,
      pref: null,
      queryStr: null,
      voice: null,
      fastWordSearch: "",
      deep: false,
      searchFile: false,
      queries: [],
      queryToggle: false,
      launchQueryPrefered: false,
      pagination: {
        rowsPerPage: 0,
      },
      group: ref(""),
      loadingInputFiles: false,
      libDatModel: null,
      stringOptions: [],
      options: this.stringOptions,
      fileNameModel: null,
      filenamesArray: [],
      fileNamesOptions: this.filenamesArray,
      separator: "vertical",
      filter: "",
      grid: false,
      loading: false,
      loadingTable: false,
      fileName: "ROLE_USER",
      lib: "WRKJEXP",
      rows: [],
      columns: [
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
          field: "COLUMN_TEXT",
          sortable: true,
          align: "left",
        },
        {
          name: "TABLE_SCHEMA",
          label: "LIBRERIA",
          field: "TABLE_SCHEMA",
          sortable: true,
          align: "left",
        },
        {
          name: "TABLE_NAME",
          label: "FILE",
          field: "TABLE_NAME",
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
        {
          name: "KEY_ORDER",
          label: "KEY_ORDER",
          field: "KEY_ORDER",
          sortable: true,
          align: "left",
        },
        {
          name: "DATA_TYPE",
          label: "TIPO",
          field: "DATA_TYPE",
          sortable: true,
        },
        {
          name: "LENGTH",
          label: "LUNGHEZZA",
          field: "LENGTH",
          sortable: true,
        },
        {
          name: "NUMERIC_SCALE ",
          label: "DECIMALE",
          field: "NUMERIC_SCALE",
          sortable: true,
        },
        {
          name: "COLUMN_DEFAULT",
          label: "DEFAULT",
          field: "COLUMN_DEFAULT",
          sortable: true,
        },
        {
          name: "CHARACTER_MAXIMUM_LENGTH",
          label: "LUNGEZZA MASSIMA",
          field: "CHARACTER_MAXIMUM_LENGTH",
          sortable: true,
        },
      ],
      selectedFileName: {},
      blockLocalStorage: false
    };
  },
  computed: {
    libDatModelComputed() {
      ///console.log(this.queryStr.getSelectedFileName)
      if (this.queryStr.getSelectedFileName != null && !this.blockLocalStorage) {
        return this.onClickFilenameForced()

      } else {
        this.blockLocalStorage = false
        return "original";
      }
    },
  },

  methods: {
    voiceChanged() {
      // console.log("Io sono ", this.voice.transcript);
      // this.fileNameModel = this.voice.transcript;
    },

    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map((col) => this.wrapCsvValue(col.label))]
        .concat(
          this.$refs.tb.filteredSortedRows.map((row) =>
            this.columns
              .map((col) =>
                this.wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");
      const status = exportFile("table-export.csv", content, "text/csv");
      if (status !== true) {
      }
    },

    exportTableField() {
      var columsObj = [];
      if (this.$refs.tabCol.filteredSortedRows.length > 0)
        columsObj = Object.getOwnPropertyNames(
          this.$refs.tabCol.filteredSortedRows[0]
        );

      var columsTable = [];

      columsObj.forEach((x) => {
        columsTable.push({
          field: x,
          name: x,
          label: x,
        });
      });

      const content = [columsTable.map((col) => this.wrapCsvValue(col.label))]
        .concat(
          this.$refs.tabCol.filteredSortedRows.map((row) =>
            columsTable
              .map((col) =>
                this.wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");
      const status = exportFile("table-export.csv", content, "text/csv");
      if (status !== true) {
      }
    },

    exportTableQuery() {
      var columsObj = [];
      if (this.$refs.queryTab.filteredSortedRows.length > 0)
        columsObj = Object.getOwnPropertyNames(
          this.$refs.queryTab.filteredSortedRows[0]
        );

      var columsTable = [];

      columsObj.forEach((x) => {
        columsTable.push({
          field: x,
          name: x,
          label: x,
        });
      });

      const content = [columsTable.map((col) => this.wrapCsvValue(col.label))]
        .concat(
          this.$refs.queryTab.filteredSortedRows.map((row) =>
            columsTable
              .map((col) =>
                this.wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");
      const status = exportFile("table-export.csv", content, "text/csv");
      if (status !== true) {
      }
    },

    wrapCsvValue(val, formatFn) {
      let formatted = formatFn !== void 0 ? formatFn(val) : val;
      formatted =
        formatted === void 0 || formatted === null ? "" : String(formatted);
      formatted = formatted.split('"').join('""');
      /**
       * Excel accepts \n and \r in strings, but some other CSV parsers do not
       * Uncomment the next two lines to escape new lines
       */
      // .split('\n').join('\\n')
      // .split('\r').join('\\r')
      return `"${formatted}"`;
    },
    /**Loads the filenames list combo based oin the libdat */
    async loadFilenames() {
      try {
        const data = {
          filename: this.libDatModel,
        };
        this.loadingInputFiles = true;
        await this.as.getFilenamesAction(data);
        this.filenamesArray = [];
        this.as.getFilenames.forEach((element) => {
          this.filenamesArray.push(
            element.TABLE_NAME + " --> " + element.TABLE_TEXT
          );
        });
        this.loadingInputFiles = false;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Loads the libdat based on the first one selected in default
     */
    async loadLibdat() {
      try {
        const data = {
          user: "",
        };
        // Sets the current logged user
        await this.pref.setUserPref(this.q.localStorage.getItem("currentUser"));
        if ((await this.pref.getUserPrefAsObj.length) > 0) {
          this.group = this.pref.getUserPrefAsObj[0].value;
          this.libDatModel = this.group;
        }
        await this.as.getUsersAction(data);
        await this.as.getUsers.forEach((element) => {
          this.stringOptions.push(element.TABLE_SCHEMA);
        });
        this.loadFilenames();
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * PRTFFLD
     * Loads the table with the filename information
     */
    async loadFiles() {

      if (this.fileNameModel == null)
        return

      this.loadingTable = true;
      this.rows = [];
      try {
        var data = {
          lib: this.libDatModel,
          fileName: this.fileNameModel.split("-->")[0].trim(),
        };

        await this.as.getFilesAction(data);
        this.rows = this.as.getFiles;
        //   this.loadQueries();
        this.loadingTable = false;
      } catch (error) {
        console.log(error);
        this.loadingTable = false;
      }
    },
    async loadFilesForced() {

      this.loadingTable = true;
      this.rows = [];
      try {
        const data = {
          lib: this.queryStr.getSelectedFileName.libname,
          fileName: this.queryStr.getSelectedFileName.filename,
        };

        this.libDatModel = this.queryStr.getSelectedFileName.libname
        this.fileNameModel = this.queryStr.getSelectedFileName.filenameOriginal
        this.loadFilenames()

        //      console.log(data)

        await this.as.getFilesAction(data);
        this.rows = this.as.getFiles;
        //   this.loadQueries();
        this.loadingTable = false;
      } catch (error) {
        console.log(error);
        this.loadingTable = false;
      }

    },
    /**
     * Query first 50000 records
     * Loads the table with data records saved on the table selected based on the libdat and filename
     */
    async loadQueries() {
      if (this.fileNameModel) {
        this.loading = true;
        this.queries = [];
        try {
          const data = {
            lib: this.libDatModel,
            fileName: this.fileNameModel.split("-->")[0].trim(),
          };
          await this.as.getQueriesAction(data);
          this.queries = this.as.getQueries;
          this.loading = false;
        } catch (error) {
          console.log(error);
          this.loading = false;
        }
      }
    },
    /**
     * Loads the table with the fast searching word
     */
    async loadFastFiles() {
      if (this.fastWordSearch.length >= 3) {
        this.loading = true;
        this.rows = [];
        try {
          const data = {
            user:
              this.q.localStorage.getItem("currentUser") != null &&
                this.q.localStorage.getItem("currentUser") != ""
                ? this.q.localStorage.getItem("currentUser").trim()
                : "",
            search_word: this.fastWordSearch.trim(),
            all: this.deep ? "all" : "no",
            searchFile: this.searchFile ? "true" : "false",
          };
          await this.as.getFastFilesAction(data);
          this.rows = this.as.getFastFiles;
          //   this.loadQueries();
          this.loading = false;
        } catch (error) {
          console.log(error);
          this.loading = false;
        }
      }
    },
    onClickLibdat(rr) {
      this.loadFilenames();
      this.fileNameModel = null;
    },
    onClickFilename(rr) {
      // Update LocalStorage
      this.loadFiles();
      this.updateLocalStorageForFastResearch();
      this.filter = "";
      this.queryStr.launchQueryPrefered = false;
    },
    onClickFilenameForced(rr) {
      // Update LocalStorage
      this.loadFilesForced();
      // this.updateLocalStorageForFastResearch();
      this.filter = "";
      this.queryStr.launchQueryPrefered = false;
      return "local"
    },
    filterFileNames(val, update) {
      if (val === "") {
        update(() => {
          this.fileNamesOptions = this.filenamesArray;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.fileNamesOptions = this.filenamesArray.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.options = this.stringOptions;
        });
        return;
      }
      update(() => {
        const needle = val.toLowerCase();
        this.options = this.stringOptions.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    /**
     * Calls the search loading file
     */
    fastSearch() {
      this.loadFastFiles();
    },
    onGroupChange() {
      // this.fileNameModel = null;
      // this.libDatModel = null
      // this.queryStr.emptyFilenameSelected()
      this.blockLocalStorage = true
      this.libDatModel = this.group;
      this.loadFilenames();
      this.fileNameModel = null;
    },
    updateLocalStorageForFastResearch() {
      // If it doesnt exists, Ill insert it
      if (this.libDatModel != null && this.fileNameModel != null) {
        var fileName = this.libDatModel.trim() + "." + this.fileNameModel.trim();
        var arrFileName = [];

        if (this.q.localStorage.getItem("fileNameList") == null) {
          arrFileName.push(fileName);
          this.q.localStorage.set("fileNameList", arrFileName);
        } else {
          arrFileName = this.q.localStorage.getItem("fileNameList");
          // Se non esiste
          if (!arrFileName.includes(fileName)) {
            // If it contains 7 element pop the first one
            if (arrFileName.length > 9) {
              arrFileName.shift();
              arrFileName.push(fileName);
              this.q.localStorage.set("fileNameList", arrFileName);
            } else {
              arrFileName.push(fileName);
              this.q.localStorage.set("fileNameList", arrFileName);
            }
          }
        }
        this.queryStr.setFileNameListLocalStorage();
      }


    },
  },
  // Watcher
  watch: {
    // whenever question changes, this function will run
    queryToggle(newQuestion, oldQuestion) {
      if (newQuestion) {
        this.loadQueries();
        this.queryStr.launchQueryPrefered = false;
      }
    },
    fileNameModel(newQuestion, oldQuestion) {
      if (
        newQuestion !== "" &&
        this.fileNameModel != null &&
        this.queryToggle
      ) {
        this.loadQueries();
      }
    },
    fastWordSearch(newQuestion, oldQuestion) {
      if (newQuestion) {
      }
    },

    // selectedFileName(newQuestion, oldQuestion) {
    //   console.log(newQuestion);
    //   if (newQuestion !== null) {
    //     this.libDatModel = newQuestion.libname;
    //     this.fileNameModel = newQuestion.all;
    //   }
    // },

    searchFile(newQuestion, oldQuestion) {
      if (!newQuestion) {
        this.columns = [
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
            field: "COLUMN_TEXT",
            sortable: true,
            align: "left",
          },
          {
            name: "TABLE_SCHEMA",
            label: "LIBRERIA",
            field: "TABLE_SCHEMA",
            sortable: true,
            align: "left",
          },
          {
            name: "TABLE_NAME",
            label: "FILE",
            field: "TABLE_NAME",
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
          {
            name: "KEY_ORDER",
            label: "KEY_ORDER",
            field: "KEY_ORDER",
            sortable: true,
            align: "left",
          },
          {
            name: "DATA_TYPE",
            label: "TIPO",
            field: "DATA_TYPE",
            sortable: true,
          },
          {
            name: "LENGTH",
            label: "LUNGHEZZA",
            field: "LENGTH",
            sortable: true,
          },
          {
            name: "NUMERIC_SCALE ",
            label: "DECIMALE",
            field: "NUMERIC_SCALE",
            sortable: true,
          },
          {
            name: "COLUMN_DEFAULT",
            label: "DEFAULT",
            field: "COLUMN_DEFAULT",
            sortable: true,
          },
          {
            name: "CHARACTER_MAXIMUM_LENGTH",
            label: "LUNGEZZA MASSIMA",
            field: "CHARACTER_MAXIMUM_LENGTH",
            sortable: true,
          },
        ];
      } else {
        this.columns = [
          {
            name: "TABLE_SCHEMA",
            label: "LIBRERIA",
            field: "TABLE_SCHEMA",
            sortable: true,
            align: "left",
          },
          {
            name: "TABLE_NAME",
            label: "FILE",
            field: "TABLE_NAME",
            sortable: true,
            align: "left",
          },
          {
            name: "TABLE_TEXT",
            label: "TABLE_TEXT",
            field: "TABLE_TEXT",
            sortable: true,
            align: "center",
          },
          {
            name: "TABLE_DEFINER",
            label: "TABLE_DEFINER",
            field: "TABLE_DEFINER",
            sortable: true,
            align: "center",
          },
        ];
      }
    },
  },
  created() {
    this.as = useStore();
    this.pref = prefStore();
    this.queryStr = queryStore();
    this.loadLibdat();
    this.voice = voiceStore();
    this.selectedFileName = this.queryStr.getSelectedFileName;
    //  console.log(this.queryStr.getSelectedFileName)
    //this.as.getQueriesAction({lib:"wrkjexp",fileName: "role_user"})
  },
  components: { Voice },
};
</script>

<style lang="sass">
.scritta .q-toggle div.q-toggle__label.q-anchor--skip
  color: #673BB6

.q-table__title
  color: white

.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #673BB6

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  input
   color: white
   font-size: 20px
   margin-right: 250px

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
