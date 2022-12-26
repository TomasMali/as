import { defineStore } from "pinia";
import { LocalStorage } from 'quasar'
import { ref } from "vue";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const workitemStore = defineStore("workitem", {
    state: () => {
        return {
            wis: [],
            categories: [],
            usernames: [],  
            category: ref([]),
            username: ref([]),
            categoryOptions : ref([]),
            optionsC : ref([]),
            usernameOptions : ref([]),
            optionsU : ref([]),
            grid: false,
            loading: false,
            loadingTable: false,
            loadingInputFiles: false,
            loadingCat: false,
            filter: "",
            resolved: true,
            wiSearch: ref(null),
            columns: [
                {
                  name: "ID",
                  label: "ID",
                  field: "ID",
                  sortable: true,
                  align: "center",
                },
                {
                  name: "WORK_ITEM_TYPE",
                  label: "TIPO WORKITEM",
                  field: "WORK_ITEM_TYPE",
                  sortable: true,
                  align: "left",
                },
                {
                  name: "CATEGORIA",
                  label: "CATEGORIA ",
                  field: "CATEGORIA",
                  sortable: true,
                  align: "left",
                },
                {
                  name: "OWNER_ITEM_ID",
                  label: "OWNERD BY",
                  field: "OWNER_ITEM_ID",
                  sortable: true,
                  align: "left",
                },
                {
                  name: "SUMMARY",
                  label: "SUMMARY",
                  field: "SUMMARY",
                  sortable: true,
                  align: "left",
                },
                {
                  name: "INTERNAL_STATE",
                  label: "STATO",
                  field: "INTERNAL_STATE",
                  sortable: true,
                  align: "left",
                },
                {
                  name: "INTERNAL_SEVERITY",
                  label: "INTERNAL_SEVERITY",
                  field: "INTERNAL_SEVERITY",
                  sortable: true,
                },
                {
                  name: "INTERNAL_PRIORITY",
                  label: "INTERNAL_PRIORITY",
                  field: "INTERNAL_PRIORITY",
                  sortable: true,
                },
                {
                  name: "CREATION_DATE ",
                  label: "CREATION_DATE",
                  field: "CREATION_DATE",
                  sortable: true,
                },
                {
                  name: "MODIFIED",
                  label: "MODIFIED_DATE",
                  field: "COLUMODIFIEDMN_DEFAULT",
                  sortable: true,
                },
                {
                  name: "RESOLUTION_DATE",
                  label: "RESOLUTION_DATE",
                  field: "RESOLUTION_DATE",
                  sortable: true,
                },
              ],
       

        };
    },
    getters: {
        getCategories: (state) => state.categories.map(a => { return { label: a.NAME_COL.trim(),
                                                               val: a.ITEM_ID } } ),
        getUsernames: (state) => state.usernames.map(u => { return { label: u.USER_COL.trim() } }),
        getWis: (state) => state.wis,


    },
    actions: {
        async loadCategories() {
            let url = "http://" + window.location.hostname + ":3300/db2/category"

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

            this.categories = responseData;
            // this.categoryOptions = this.getCategories
            // this.optionsC = this.getCategories
            //optionsC
        },
        async loadUsernames() {
            let url = "http://" + window.location.hostname + ":3300/db2/usernames"
          

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

            this.usernames = responseData;
        },

        async loadWis(data) {
            let url = "http://" + window.location.hostname + ":3300/db2/wis/" + "?category="+data.category + "&user="+data.user + "&resolved=" + data.resolved

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

            this.wis = responseData;
        },
        async loadSingleWi(ids) {
          let url = "http://" + window.location.hostname + ":3300/db2/wi/" + "?id="+ids
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

          this.wis = responseData;
      },


    },
});
