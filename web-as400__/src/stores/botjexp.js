import { defineStore } from "pinia";
import { LocalStorage } from 'quasar'

export const botjexpStore = defineStore("botjexp", {
    state: () => {
        return {
            botResponse: ''

        };
    },
    getters: {
        getBotResponse: (state) => state.botResponse,

        
    },
    actions: {
        async setBotRequest(question) {
          //  let url =  "http://" + window.location.hostname + ":8060/?query="+question 

            let url =  "http://10.100.0.30"  + ":8060/?query="+question 



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

            console.log( responseData)

            if (!response.ok) {
                if (responseData.code === 409) {
                    throw new Error(responseData.message);
                } else
                    throw new Error("Request failed with error code: " + response.status);
            }

            this.botResponse = responseData;

            this.sendLogsAction("BOT_JEXP " + question)
            
        },

        async sendLogsAction(log) {

            let url = "http://" + window.location.hostname + ":3300/db2/log/?log=" + LocalStorage.getItem("currentUser") + " Asked: --->      \n\n" + log


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
