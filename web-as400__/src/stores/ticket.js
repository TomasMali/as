import { defineStore } from "pinia";
import { LocalStorage } from 'quasar'
import { ref } from "vue";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const ticketStore = defineStore("ticket", {
    state: () => {
        return {
            tickets: [],
            grid: false,
            send: false,
            loading: false,
            loadingTable: false,
            loadingInputFiles: false,
            loadingCat: false,
            filter: "",
            resolved: true,
            ticSearch: ref(null),
            ticSearchUrl: "",
            columns: [
                {
                name: "similarity_percentage",
                label: "Similarity (%)",
                field: "similarity_percentage",
                sortable: true,
                align: "left",
                format: (val) => {
                    return val.toFixed(4);
                  },
                // style: 'width: 10px',
              },
                {
                  name: "ticket",
                  label: "Ticket",
                  field: "ticket",
                  sortable: true,
                  align: "center",
                  format: (val) => {
                    // Construct the link using the provided URL
                    return `<a href="${val}" target="_blank">${val}</a>`;
                  },
                //   style: 'width: 180px',
                },
                {
                  name: "solution",
                  label: "Soluzione",
                  field: "solution",
                  sortable: true,
                  align: "left",
                }
                
               
              ],
       

        };
    },
    getters: {
        getTics: (state) => state.tickets,
    },
    actions: {


        async loadTicket(ticket) {
            let url = "http://" + "10.100.0.30" + ":5005/" + "?ticket="+ticket

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
console.log(url)
            const responseData = await response.json();

            this.sendLogsAction(ticket)

            if (!response.ok) {
                if (responseData.code === 409) {
                    throw new Error(responseData.message);
                } else
                    throw new Error("Request failed with error code: " + response.status);
            }

            this.tickets = responseData;
        },
      async sendLogsAction(log) {

        let url = "http://" + window.location.hostname + ":3300/db2/log/?log=" + LocalStorage.getItem("currentUser") + " TICKET: --->      \n\n" + log
  
  
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
  
    },


    },
});
