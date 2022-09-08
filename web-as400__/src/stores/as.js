import { defineStore } from "pinia";

// outside of a Vue file
import { LocalStorage } from 'quasar'


// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore("as", {
    state: () => {
        return {
            currentUser: "",
            queries: [],
            files: [],
            fastFiles: [],
            users: [],
            filenames: [],

        };
    },
    getters: {
        getCurrentUser: (state) => state.currentUser,

        //

        getQueries: (state) => state.queries,
        getFiles: (state) => state.files,
        getUsers: (state) => state.users,
        getFilenames: (state) => state.filenames,
        getFastFiles: (state) => state.fastFiles,
    },
    actions: {
        setCurrentUser(user) {
            this.currentUser = user;
        },

        async getQueriesAction(data) {
            // "http://localhost:3300/files/?library=wrkjexp&tablename=role_user"
            let url =
                "http://" + window.location.hostname + ":3300/files/all/?library=" +
                data.lib +
                "&tablename=" +
                data.fileName +
                "&as=" +
                LocalStorage.getItem("as")
        

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

            this.queries = responseData;
        },
        // Files
        async getFilesAction(data) {
            //"http://" + window.location.hostname + ":3300/files/PRTFFLD/?library=WRK90MUL&tablename=gcpro00f"
            let url =
                "http://" + window.location.hostname + ":3300/files/PRTFFLD1/?library=" +
                data.lib +
                "&tablename=" +
                data.fileName +
                "&as=" +
                LocalStorage.getItem("as")

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

            this.files = responseData;
        },

        //Fast Files
        async getFastFilesAction(data) {
            //"http://" + window.location.hostname + ":3300/files/PRTFFLD/?library=WRK90MUL&tablename=gcpro00f"
            let url =
                "http://" + window.location.hostname + ":3300/files/PRTFFLD_SMART/?search_word=" +
                data.search_word +
                "&user=" +
                data.user +
                "&all=" + data.all
                + "&searchFile=" + data.searchFile +
                "&as=" +
                LocalStorage.getItem("as")

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

            this.fastFiles = responseData;
        },

        //Users/libdat
        async getUsersAction(data) {

            let url = "http://" + window.location.hostname + ":3300/files/SCHEMA/?library=" + data.user 
            +
            "&as=" +
            LocalStorage.getItem("as");

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

            this.users = responseData;
        },
        //Filenames
        async getFilenamesAction(data) {

            // If it exsists in localstorage then use that 
            // let value = LocalStorage.getItem(data.filename)
            // if (value) {
            //     this.filenames = value;
            //     return
            // }
            const url =
                "http://" + window.location.hostname + ":3300/files/FILENAMES/?library=" + (data.filename == null ? "" : data.filename) +
                "&as=" +
                LocalStorage.getItem("as")

              //  console.log("FILENAMes00",url )

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

            this.filenames = responseData;
            // if (responseData.length < 4000)
            // LocalStorage.set(data.filename, responseData)



        }
    },
});
