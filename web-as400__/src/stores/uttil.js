import { defineStore } from "pinia";
import { LocalStorage } from 'quasar'
import { ref } from "vue";


export const uttilStore = defineStore("uttil", {
    state: () => {
        return {
            utilizzatori: [],
            search: ref(''),
            showoccurence: ref(false),
         //   includesql: ref(false),
            loading: false,
            filter: "",
            grid: false
        };
    },
    getters: {
        getUtilizzatori: (state) => state.utilizzatori,


    },
    actions: {
        async setUtilizzatori(data) {
            // http://localhost:3300/utilizzatori/find/?userDb=nsejexp&as=10.200.100.188&includesql=&showoccurence=&programName=GCCNT
            let url = "http://" + window.location.hostname + ":3300/utilizzatori/find/?" + "as=" + LocalStorage.getItem("as") + "&userDb=" + LocalStorage.getItem("userDb") + "&showoccurence=" + data.showoccurence +  "&programName=" + data.programName

            console.log(url)


            const response = await fetch(url, {
                method: "GET",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                enctype: "mutipart/form-data",
            });

            const responseData = await response.json();

            if (!response.ok) {
                if (responseData.code === 409) {
                    throw new Error(responseData.message);
                } else
                    throw new Error("Request failed with error code: " + response.status);
            }

            this.utilizzatori = responseData;

             this.sendLogsAction("as=" + LocalStorage.getItem("as") + " userDb=" + LocalStorage.getItem("userDb") + "  showoccurence=" + data.showoccurence +  "  programName=" + data.programName)

        },

        async sendLogsAction(log) {

            let url = "http://" + window.location.hostname + ":3300/db2/log/?log=" + LocalStorage.getItem("currentUser") + " UTILIZZATORE: --->      \n\n" + log


            // console.log(url)

            const response = await fetch(url, {
                method: "GET",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                enctype: "mutipart/form-data",
            });

            const responseData = await response.json();

            if (!response.ok) {
                if (responseData.code === 409) {
                    throw new Error(responseData.message);
                } else
                    throw new Error("Request failed with error code: " + response.status);
            }

        },

    },
});