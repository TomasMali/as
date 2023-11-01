import { defineStore } from "pinia";
import { LocalStorage } from 'quasar'

export const botStore = defineStore("bot", {
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
            let url =  "http://" + window.location.hostname + ":3300/db2/openai" 

            const response = await fetch(url, {
                method: "POST",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify({
                    question: question
                  }),
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

            this.botResponse = responseData;





            this.sendLogsAction(question)
            
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
