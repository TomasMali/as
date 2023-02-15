


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

          <div class="q-mx-xl scritta">
            <q-toggle
              dense
              v-model="utStore.showoccurence"
              size="xl"
              icon="visibility"
              label="Mostra Occorrenze"
              color="purple"
            />
          </div>

          <!-- <div class="q-mx-lg scritta">
            <q-toggle
              dense
              v-model="utStore.includesql"
              size="xl"
              icon="visibility"
              label="Cerca anche file"
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

        <q-table
          class="text-subtitle2 my-sticky-header-table"
          table-header-class="text-white "
          :rows="utStore.utilizzatori"
          row-key="utStore.getUtilizzatori.SRCCT"
          dense
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
        </q-table>
      </q-card-section>
    </q-card>
  </div>
</template>
  
  







<script setup>
import { onMounted, ref } from "vue";
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

    console.log(data);

    utStore.loading = true;
    await utStore.setUtilizzatori(data);

    console.log(utStore.getUtilizzatori);

    utStore.loading = false;
  } catch (error) {
    console.log(error);
  }
};
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