


<template>
  <div>
    <q-card bordered class="q-my-sm q-mx-md">
      <q-card-section class="">
        <div class="row q-pa-md">
          <q-input class="q-mr-sm"  square color="primary" label-color="primary" outlined clearable
            v-model="ticStore.ticSearch" label="Search Ticket" @keyup.enter="searchTic">
            <template v-slot:append>
              <q-icon name="bolt" color="primary" />
            </template>
          </q-input>

          <q-btn dense inline color="primary q-ml-sm" label="Search" icon-right="send" @click="searchTic" :disable="ticStore.ticSearch == null || ticStore.ticSearch == ''
            || !isNumeric()" />
        
        <p class="q-ml-xl q-mt-md" v-if="ticStore.send">
          Ticket originale:
      <a :href="ticStore.ticSearchUrl" target="_blank">
        {{ ticStore.ticSearchUrl }}
      </a>
        </p>
        
        
        </div>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <!-- <pre>
                  {{ticStore.getTics }}
              </pre> -->

        <q-table class="text-subtitle2 my-sticky-header-table" table-header-class="text-white " :rows="ticStore.getTics"
          :columns="ticStore.columns" row-key="ticStore.getTics.ticket"  auto-width :grid="ticStore.grid"
          :loading="ticStore.loading" boarderd title="Risultato Ticket" separator="cell" style="height: 720px"
          :filter="ticStore.filter" :rowsPerPage="10000" :rows-per-page-options="[0, 8, 18]" ref="tabCol">
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="ticStore.filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" color="white" />
                <q-toggle v-model="ticStore.grid" color="red" label="Grid" />
              </template>
            </q-input>

            <q-btn flat class="q-ml-xl" color="yellow" icon-right="archive" label="Export to csv" no-caps
              @click="exportTableField" />
          </template>
          <template v-slot:loading>
            <q-inner-loading showing color="primary" />
          </template>



          <template v-slot:body-cell-ticket="props">
            <div style="margin-top: 12px;">
              <span  v-html="generateLinkHtml(props.row[props.col.field])"></span>
            </div>
          </template>

        </q-table>
      </q-card-section>
    </q-card>
  </div>
</template>
  
  
  
<script>
export default {
  computed: {
    generateLinkHtml: function () {
      // This function generates the HTML for the "Ticket" column
      return function (val) {
        return `<a   href="${val}" target="_blank">${val}</a>`;
      };
    },
  },
};
</script>
  
<script setup>



import { onMounted, ref } from "vue";
import { ticketStore } from "../stores/ticket";
import { exportFile, useQuasar } from "quasar";
const ticStore = ticketStore();
const tabCol = ref(null);

const q = useQuasar();

function isNumeric() {
  if (ticStore.ticSearch.endsWith(",")) return false;
  var str = ticStore.ticSearch.replace(",", "").trim();
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

const wrapCsvValue = (val, formatFn) => {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');

  return `"${formatted}"`;
};

const exportTableField = () => {
  var columsObj = [];
  if (tabCol.value.filteredSortedRows.length > 0)
    columsObj = Object.getOwnPropertyNames(tabCol.value.filteredSortedRows[0]);

  var columsTable = [];

  columsObj.forEach((x) => {
    columsTable.push({
      field: x,
      name: x,
      label: x,
    });
  });

  const content = [columsTable.map((col) => wrapCsvValue(col.label))]
    .concat(
      tabCol.value.filteredSortedRows.map((row) =>
        columsTable
          .map((col) =>
            wrapCsvValue(
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
};




const loadTickets = async () => {

  if(!isNumeric())
  return

  ticStore.ticSearchUrl = "https://tsnew.sanmarcoweb.com/it/ticket/index/index/operation/view/id/"+ ticStore.ticSearch
  ticStore.send = true;
  ticStore.loading = true;
  await ticStore.loadTicket(ticStore.ticSearch);
  ticStore.tickets.value = ticStore.getTics;
  ticStore.loading = false;
};





const searchTic = () => {
  if (ticStore.ticSearch != null && ticStore.ticSearch != '')
    loadTickets();
  else
    console.log('Not a valid word')
};



onMounted(() => {
  // loadCategories();
  // loadUsernames();

  // loadWis(true);
  // loadSingleWi()
});
</script>
  
  
<style lang="sass">
  .scritta .q-toggle div.q-toggle__label.q-anchor--skip
    color: #673BB6
  
  .q-textarea.q-field--dense.q-field--labeled
    font-size: 15px
  
  .q-toggle__label.q-anchor--skip
    color: white
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
  
    /* this is when the loading indicator appears */
    &.q-table--loading thead tr:last-child th
      /* height of all previous header rows */
      top: 48px
  </style>
  