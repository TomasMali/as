<template>
  <div>
    <q-card bordered class="q-my-sm q-mx-md">
      <q-card-section class="">
        <div class="row q-pa-md">
          <q-input
            class="q-mr-sm"
            dense
            square
            color="primary"
            label-color="primary"
            outlined
            v-model="utStore.search"
            label="Cerca un programma o file"
          >
            <template v-slot:append>
              <q-icon name="bolt" color="primary" />
            </template>
          </q-input>

          <q-btn
            dense
            inline
            color="primary q-ml-sm"
            label="Search"
            icon-right="send"
            @click="onClickUtt"
            :disable="utStore.search.length < 3"
          />

          <!-- <div class="q-mx-xl scritta">
            <q-toggle
              dense
              v-model="utStore.showoccurence"
              size="xl"
              icon="visibility"
              label="Mostra Occorrenze"
              color="purple"
            />
          </div> -->

        </div>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <!-- <pre>
                  {{wiStore.getWis }}
              </pre> -->

        <!-- :columns="columns" -->
        <q-table
          class="text-subtitle2 my-sticky-header-table"
          table-header-class="text-white "
          :rows="utStore.utilizzatori"
          row-key="utStore.getUtilizzatori.SRCCT"
          auto-width
          :loading="utStore.loading"
          boarderd
          title="Risultato programmi"
          separator="cell"
          style="height: 720px"
          :filter="utStore.filter"
          :rowsPerPage="10000"
          :rows-per-page-options="[0, 8, 18]"
          ref="tabCol"
          :grid="utStore.grid"
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="utStore.filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" color="white" />
                <q-toggle v-model="utStore.grid" color="red" label="Grid" />
              </template>
            </q-input>
          </template>
          <template v-slot:loading>
            <q-inner-loading showing color="primary" />
          </template>

          <template v-slot:body="props">
            <q-tr :props="props" @click="onRowClick(props.row)">
              <q-td key="SRCCT" :props="props">
                <q-badge color="purple" class="q-pa-sm">
                  {{ props.row.SRCCT }}
                </q-badge>
              </q-td>
              <q-td key="SRCTCT" :props="props">
                {{ props.row.SRCTCT }}
              </q-td>
              <q-td key="LIBRCT" :props="props">
                {{ props.row.LIBRCT }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>


    <q-dialog
      v-model="utStore.dialog"
      persistent
      :maximized="utStore.maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="utStore.maximizedToggle = false"
            :disable="!utStore.maximizedToggle"
          >
            <q-tooltip v-if="utStore.maximizedToggle" class="bg-white text-primary"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="utStore.maximizedToggle = true"
            :disable="utStore.maximizedToggle"
          >
            <q-tooltip v-if="!utStore.maximizedToggle" class="bg-white text-primary"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">
            {{  "Cerchiamo: " + utStore.search + "  ---------->  " + utStore.selectedRow.LIBRCT + "." + utStore.selectedRow.SRCCT }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        
          <q-table
          class="text-subtitle2 my-sticky-header-table"
          table-header-class="text-white "
          :rows="utStore.programRow"
          row-key="utStore.programRow.SRCDAT"
          dense
          auto-width
          :loading="utStore.loadProgram"
          title="Risultato programmi"
          separator="none"
          style="height: 720px"
          :filter="utStore.filterProgram"
          :rowsPerPage="10000"
          :rows-per-page-options="[0, 8, 18]"
          ref="tabCol"
          :grid="utStore.gridProgram"
        >
        <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="utStore.filterProgram"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" color="white" />
                <q-toggle v-model="utStore.gridProgram" color="red" label="Grid" />
              </template>
            </q-input>

          </template>
          <template v-slot:loading>
            <q-inner-loading showing color="primary" />
          </template>



          <template v-slot:body="props">
            <q-tr :props="props" >
              <q-td key="SRCDAT" :props="props">
                  {{ props.row.SRCDAT }}
              </q-td>
              <q-td key="SRCDTA" :props="props">
                <q-badge v-if="props.row.SRCDTA.includes(utStore.search)" color="purple" class="q-pa-sm">
                {{ props.row.SRCDTA }}
              </q-badge>
              <div v-else>
                {{ props.row.SRCDTA }}
              </div>
              </q-td>
              <q-td key="SRCSEQ" :props="props">
                {{ props.row.SRCSEQ }}
              </q-td>
            </q-tr>
          </template>



        </q-table>
      
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { uttilStore } from "../stores/uttil";

const utStore = uttilStore();
//const tabCol = ref(null);

const onClickUtt = () => {
  // queryStr.cleanDialog()
  loadUtt();
};

const loadUtt = async () => {
  try {
    const data = {
      showoccurence: utStore.showoccurence ? "s" : "",
      //  includesql: utStore.includesql ? "s" : "",
      programName: utStore.search,
    };

    utStore.loading = true;
    await utStore.setUtilizzatori(data);
    utStore.loading = false;
  } catch (error) {
    console.log(error);
  }
};

const onRowClick = (row) => {
  utStore.dialog = true;
  utStore.selectedRow = row;

  const data = {
    programName: row.SRCCT,
    lib: row.LIBRCT,
    filetype: row.SRCTCT,
  };

  loadProgram(data)
};

const loadProgram = async (data) => {
  try {
    utStore.loadProgram = true;
    await utStore.setProgram(data);
    utStore.loadProgram = false;
  } catch (error) {
    console.log(error);
  }
};

const columns = [
  { name: "SRCCT", label: "Nome programma", field: "SRCCT", sortable: true },
  { name: "SRCTCT", label: "Tipo", field: "SRCTCT", sortable: true },
  { name: "LIBRCT", label: "Libreria", field: "LIBRCT", sortable: true },
];
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
