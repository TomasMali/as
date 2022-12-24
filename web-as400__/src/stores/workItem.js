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
            category: ref(null),
            username: ref(null),
            categoryOptions : ref([]),
            optionsC : ref([]),
            usernameOptions : ref([]),
            optionsU : ref([]),
            grid: false,
            loading: false,
            loadingTable: false,
            filter: "",
       

        };
    },
    getters: {
        getCategories: (state) => state.categories.map(a => a.NAME_COL.trim()),
        getUsernames: (state) => state.usernames.map(u => u.USER_COL),
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
            let url = "http://" + window.location.hostname + ":3300/db2/wis/" + "?category="+data.category + "&user="+data.user

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
