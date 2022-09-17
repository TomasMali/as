

<template>
    <div>
        <q-btn @click="voice.toggleMic" round color="primary q-ml-lg" icon="mic" size="md" />
        <div class="transcript" v-text="voice.transcript"></div>


    </div>

</template>





<script setup>
import { onMounted, ref } from 'vue';

import { voiceStore } from "../stores/voice";

const voice = voiceStore();




onMounted(()=>{
voice.setVoice("prova")
})

</script>