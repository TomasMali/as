



<template>
    <!-- <q-card v-if="response != ''" class="my-card q-ma-lg justify-center">
        <q-card-section style="display: flex; justify-content: center; align-items: center;">
            <pre>
                <h6>Tu hai chiesto: {{ answer }}</h6>
            </pre>

            <pre v-if="!load" class="text-weight-bolder
">
        {{ response }}
      </pre>

            <q-circular-progress v-if="load" indeterminate size="45px" :thickness="1" color="purple-8"
                class="q-ma-md justify-center" />

        </q-card-section>
    </q-card>


    <q-card v-if="load" class="my-card q-ma-lg justify-center">
        <q-card-section style="display: flex; justify-content: center; align-items: center;">



            <q-circular-progress indeterminate size="45px" :thickness="1" color="purple-8"
                            class="q-ma-md justify-center" />

                    </q-card-section>
                </q-card> -->




    <div class="q-pa-md row justify-center" style="height: 700px; overflow-y: scroll;">
        <div style="width: 100%; max-width: 800px; max-height: ;">
            <q-chat-message :name='defaultUser()' :text="meText"
                avatar="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/128/man-icon.png"
                sent></q-chat-message>

            <q-chat-message v-if="simpleResponse()" name="Bot"
                avatar="https://icons.iconarchive.com/icons/proycontec/robots/128/robot-screen-settings-icon.png"
                bg-color="amber">
            </q-chat-message>
            <q-chat-message v-else name="Bot"
                avatar="https://icons.iconarchive.com/icons/proycontec/robots/128/robot-screen-settings-icon.png"
                bg-color="amber" :text="botText">
            </q-chat-message>

            <div class="code-formatter" bg-color="amber">
                <pre v-if="simpleResponse()">
                        <code>
                        {{ response }}
                       </code>
                    </pre>
            </div>
            <q-spinner-dots v-if="load" bg-color="amber" size="2rem"></q-spinner-dots>
        </div>
    </div>

    <div class="absolute-bottom">

        <div class="row">
            <div class="col">
            </div>
            <div class="col">
                <div class="col">
                </div>
                <q-input outlined bottom-slots @keyup.enter="go" v-model="text" label="Chiedimi qualsiasi cosa">
                    <template v-slot:append>
                        <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"></q-icon>

                    </template>
                    <template v-slot:after>
                        <q-btn @click="go" round dense flat icon="send"></q-btn>
                    </template>
                </q-input>
            </div>
            <div class="col">
            </div>

        </div>

    </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import { botStore } from "../stores/bot";
import { useQuasar } from "quasar";



const q = useQuasar();


const defaultUser = () => q.localStorage.getItem("currentUser")


const bot = botStore();

const text = ref('')
const response = ref('')
const answer = ref('')

var load = ref(false)


const botText = ref([])
const meText = ref([])


const simpleResponse = () => true//response.value.includes("#") || response.value.includes("//") || response.value.includes("<!-")




const go = () => getResponse()

const getResponse = async () => {

    botText.value = []
    //  meText.value = []
    const strToSend = text.value
    text.value = ""

    load.value = true
    answer.value = strToSend
    meText.value.push(strToSend)
    try {
        await bot.setBotRequest(strToSend);
        //    await bot.sendLogsAction(strToSend);
        response.value = bot.getBotResponse.bot
        botText.value.push(response.value)

        console.log(response.value)
        load.value = false
        text.value = ""




    } catch (error) {
        console.log(error);
    }

}


</script>

<style>
.absolute-bottom {
    position: absolute;

}

pre {
    font-family: monospace;
}

code {
    font-family: monospace;
}

.code-formatter {
    width: 100%;
    overflow-y: auto;
    /* enables horizontal scrolling */
}

.code-formatter pre {
    /* style the <pre> element */
    white-space: pre-wrap;
    /* allows line breaks within the code block */
}

.code-formatter code {
    /* style the <code> element */
    display: block;
    /* makes it easier to read */
}
</style>