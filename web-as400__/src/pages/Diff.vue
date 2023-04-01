<template>
    <div>
        <iframe src="https://www.diffchecker.com/text-compare/" width="100%" height="900">
    </iframe>
    </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import { prefStore } from "../stores/pref";


const pref = prefStore();

const sendMessage = async () => {
    await pref.sendLogsAction(" ===> DIFFERENCES");
}


onMounted(() => {
  sendMessage();
});

</script>