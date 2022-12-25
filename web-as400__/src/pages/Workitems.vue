


<template>

  <div>
    <q-card bordered class="q-my-sm q-mx-md">
      <q-card-section class="">

        <div class="row q-pa-md">

        <q-select class="q-mr-lg" dense v-model="wiStore.category.value" transition-show="flip-up" transition-hide="flip-down"
            @filter="filterCategory" @update:model-value="onClickCategory" :loading="wiStore.loadingCat"
            :disable="wiStore.loadingCat" :options="wiStore.optionsC.value"  use-input
            input-debounce="0" label="(AREA) Filed Against" clearable multiple emit-value map-options >
            <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
              <q-item v-bind="itemProps">
                <q-item-section>
                  <q-item-label v-html="opt.label" />
                </q-item-section>
                <q-item-section side>
                  <q-toggle :model-value="selected" @update:model-value="toggleOption(opt)" />
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">No results</q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-select transition-show="flip-up" transition-hide="flip-down" class="q-ml-md" style="max-height: 500px"
            dense v-model="wiStore.username" use-input :loading="wiStore.loadingInputFiles"
            :disable="wiStore.loadingInputFiles" input-debounce="0" label="Owned By" autofocus clearable
            :options="wiStore.optionsU.value" @filter="filterUsername" @update:model-value="onClickUsername"
            behavior="menu">
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">No results</q-item-section>
              </q-item>
            </template>
          </q-select>



        </div>
      </q-card-section>
    </q-card>


    <q-card>
      <q-card-section>
        <!-- <pre>
                {{wiStore.getWis }}
            </pre> -->

        <q-table class="text-subtitle2 my-sticky-header-table" table-header-class="text-white " :rows="wiStore.getWis"
          :columns="wiStore.columns" row-key="indwiStore.getWis.ID" dense auto-width :grid="wiStore.grid"
          :loading="wiStore.loading" boarderd title="Risultato Workitems" separator="cell" style="height: 720px"
          :filter="wiStore.filter" :rowsPerPage="10000" :rows-per-page-options="[0, 8, 18]" ref="tabCol">
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="wiStore.filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" color="white" />
                <q-toggle v-model="wiStore.grid" color="red" label="Grid" />
              </template>
            </q-input>

            <q-btn flat class="q-ml-xl" color="yellow" icon-right="archive" label="Export to csv" no-caps
              @click="exportTableField" />
          </template>
          <template v-slot:loading>
            <q-inner-loading showing color="primary" />
          </template>
        </q-table>



      </q-card-section>
    </q-card>



  </div>
</template>





<script setup>

import { onMounted, ref } from "vue";
import { workitemStore } from "../stores/workItem";
import { exportFile } from "quasar";
const wiStore = workitemStore();
const tabCol = ref(null);


const wrapCsvValue = (val, formatFn) => {
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
}

const exportTableField = () => {
  var columsObj = [];
  if (tabCol.value.filteredSortedRows.length > 0)
    columsObj = Object.getOwnPropertyNames(
      tabCol.value.filteredSortedRows[0]
    );

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
}




//   
const onClickCategory = () => {
  // queryStr.cleanDialog()
  loadWis();
};
const loadWis = async () => {
  try {
     var categoiesList = []
     if(wiStore.category.value != undefined)
     wiStore.category.value.forEach(c => {
      categoiesList.push(c.val)
     })

     //console.log(wiStore.category)

    const data = {
      category:  categoiesList,
      user: wiStore.username == null ? "" : wiStore.username
    };
    wiStore.loading = true
    await wiStore.loadWis(data);
    wiStore.loading = false
  } catch (error) {
    console.log(error);
  }
};
const filterCategory = (val, update) => {
  if (val === "") {
    update(() => {
      wiStore.optionsC.value = wiStore.categoryOptions.value
    });
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    wiStore.optionsC.value = wiStore.categoryOptions.value.filter(
      (v) => v.label.toLowerCase().indexOf(needle) > -1
    );
  });
};
const loadCategories = async () => {
  //  wiStore.loaderUserQuery = true;
  wiStore.loadingCat = true
  await wiStore.loadCategories();
  wiStore.categoryOptions.value = wiStore.getCategories
  wiStore.loadingCat = false

};





//USERS
const onClickUsername = () => {
  loadWis();
};

const filterUsername = (val, update) => {
  if (val === "") {
    update(() => {
      wiStore.optionsU.value = wiStore.usernameOptions.value
    });
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    wiStore.optionsU.value = wiStore.usernameOptions.value.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};
const loadUsernames = async () => {
  wiStore.loadingInputFiles = true
  await wiStore.loadUsernames();
  wiStore.usernameOptions.value = wiStore.getUsernames
  wiStore.loadingInputFiles = false
};


onMounted(() => {
  loadCategories();
  loadUsernames();
  loadWis()
});

</script>


<style lang="sass">
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
