

<template>
  <div>
    <q-btn
      v-if="voice.isRecording"
      @click="voice.toggleMic"
      round
      class="q-ml-lg"
      color="red"
      icon="mic"
      size="md"
    />
    <q-btn
      v-else
      @click="voice.toggleMic"
      round
      class="q-ml-lg"
      color="primary"
      icon="mic"
      size="md"
    />

    <p class="transcript" v-text="voice.transcript"></p>
  </div>
</template>





<script setup>
import { onMounted, ref, watch, defineEmits } from "vue";

import { voiceStore } from "../stores/voice";

import { useQuasar } from "quasar";

import { useRouter } from "vue-router";

const emit = defineEmits(["onVoice"]);

const voice = voiceStore();

const q = useQuasar();
const router = useRouter();

onMounted(() => {
  voice.setVoice("prova");
});

watch(voice, (currentValue, oldValue) => {
  console.log(currentValue.transcript.toUpperCase());
  if (
    currentValue.transcript.toUpperCase().includes("PAGINA PRINCIPALE") ||
    currentValue.transcript.toUpperCase().includes("PRINCIPALE")
  ) {
    router.replace({ path: "/home" });
    voice.cleanTranscript();
    // voice.toggleMic();
  } else if (
    currentValue.transcript.toUpperCase().includes("VAI A QUERY") ||
    currentValue.transcript.toUpperCase().includes("VAI")
  ) {
    router.replace({ path: "/query" });
    voice.cleanTranscript();
  }

  emit("onVoice", 1);
});
</script>