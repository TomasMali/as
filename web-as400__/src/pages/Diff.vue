<template>
    <div>
        <iframe id="my-iframe" src="https://www.diffchecker.com/text-compare/" width="100%" scrolling="no" frameborder="0"></iframe>
            <!-- <iframe id="my-iframe" src="http://10.100.0.30:49160" width="100%" scrolling="no" frameborder="0"></iframe> -->


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

<style scoped>
  #my-iframe {
    height: 93vh;
  }
</style>