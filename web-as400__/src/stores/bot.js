import { defineStore } from "pinia";


export const botStore = defineStore("bot", {
    state: () => {
        return {
            botResponse: '',
  
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
        },
        
    },
});
