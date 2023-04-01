


<template>
    <iframe src="https://tomasmali.it/upload" width="100%" height="800">
    </iframe>
    <div class="text-center" style="font-size: 18px;">
            Quest tool permette di condividere tra qualsiasi PC senza bisogno di VPN file piccoli o di grandi dimensioni
            (fino a 10 GB).
            Basta solo caricare il file qui sopra e condividere il link con l'altro PC.
      <div>
        
          Per condividere esternamente i file caricati, vai a <a href="https://tomasmali.it/upload" target="_blank">
              QUESTA</a> pagina dall'altro PC e clicca sul file che hai caricato sopra.
      </div>
       
    </div>
    

</template>



<script setup>
import { onMounted, ref } from "vue";
import { prefStore } from "../stores/pref";


const pref = prefStore();

const sendMessage = async () => {
    await pref.sendLogsAction(" ===> SHARE");
}


onMounted(() => {
  sendMessage();
});

</script>