<template>

  <div class="q-pa-md q-mt-lg">
  
  <!-- <div v-if="load">
    <q-circular-progress
      indeterminate
      size="75px"
      :thickness="0.6"
      color="lime"
      center-color="grey-8"
      class="q-ma-md"
    />
  </div> -->
    <QuillEditor  ref="myEditor" theme="snow" toolbar="full" @textChange="onTextChanged" />

  </div>

</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import { prefStore } from "../stores/pref";
import { useQuasar } from "quasar";

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      pref: null,
      q: useQuasar(),
      load: false
    };
  },
  methods: {
    onTextChanged({ delta, oldDelta, source }) {
    console.log(delta);
    //   console.log(this.$refs.myEditor.getHTML());
      this.onTextChangedAsync();
    },
    async onTextChangedAsync() {
      let html = this.$refs.myEditor.getHTML();

      try {
        const note = {
          username: this.q.localStorage.getItem("currentUser"),
          content: html
        };
  
        await this.pref.insertOrUpdateNoteSet(note)

      } catch (error) {
        console.log(error);
      }
    },
    async loadNote() {
      this.load = true
      try {
        await this.pref.fetchUserNote(this.q.localStorage.getItem("currentUser"))
        this.$refs.myEditor.setHTML(this.pref.getUserNote[0].CONTENT);

        this.load = false
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.pref = prefStore();
    this.loadNote()
    
  },
};
</script>


<style>


</style>