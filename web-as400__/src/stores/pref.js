import { defineStore } from "pinia";
import { LocalStorage } from 'quasar'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const prefStore = defineStore("pref", {
    state: () => {
        return {
            userPref: [],
            insertOrDeleteStatus: null,
            userNote: null,
            insertOrUpdateNote: null,
            statusConnection: null
        };
    },
    getters: {
        getUserPref: (state) => state.userPref,
        getInsertOrDeleteStatus: (state) => state.insertOrDeleteStatus,
        getInsertOrUpdateNote: (state) => state.insertOrUpdateNote,
        getUserNote: (state) => state.userNote,
        getStatusConnection: (state) => state.statusConnection,
        getUserPrefAsObj: (state) => {
            if (state.userPref.length < 1) {
                return [];
            }

            var arr = [];

            arr.push({
                label: state.userPref[0].PREFL1,
                value: state.userPref[0].PREFL1,
            });

            if (state.userPref[0].PREFL2 !== 'NULL' && state.userPref[0].PREFL2.trim() !== "")
                arr.push({
                    label: state.userPref[0].PREFL2,
                    value: state.userPref[0].PREFL2,
                });
            if (state.userPref[0].PREFL3 !== 'NULL' && state.userPref[0].PREFL3.trim() !== "")
                arr.push({
                    label: state.userPref[0].PREFL3,
                    value: state.userPref[0].PREFL3,
                });
            if (state.userPref[0].PREFL4 !== 'NULL' && state.userPref[0].PREFL4.trim() !== "")
                arr.push({
                    label: state.userPref[0].PREFL4,
                    value: state.userPref[0].PREFL4,
                });
            if (state.userPref[0].PREFL5 !== 'NULL' && state.userPref[0].PREFL5.trim() !== "")
                arr.push({
                    label: state.userPref[0].PREFL5,
                    value: state.userPref[0].PREFL5,
                });
            return arr;
        },
    },
    actions: {
        async setUserPref(user) {
            let url = "http://" + window.location.hostname + ":3300/files/USERPREF/?user=" + user +   "&as=" +
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

            this.userPref = responseData;
        },




        async insertOrUpdateUserPrefs(pref) {
            let url = "http://" + window.location.hostname + ":3300/files/inserOrUpdatePref/?libdat=" + pref.user +
                "&PREFL1=" + pref.prefl1 + "&PREFL2=" + pref.prefl2 + "&PREFL3=" + pref.prefl3 + "&PREFL4=" + pref.prefl4 + "&PREFL5=" + pref.prefl5 +       "&as=" +
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

            this.sendLogsAction(JSON.stringify(pref))

            const responseData = await response.json();

            if (!response.ok) {
                if (responseData.code === 409) {
                    throw new Error(responseData.message);
                } else
                    throw new Error("Request failed with error code: " + response.status);
            }

            this.insertOrDeleteStatus = responseData;
        },

        /**
         * 
         * @param {Get the note for a user} user 
         */
        async fetchUserNote(username) {
            let url = "http://" + window.location.hostname + ":3300/files/getUserNote/?username=" + username

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

            this.sendLogsAction("Note =========>  " + username)

            const responseData = await response.json();

            if (!response.ok) {
                if (responseData.code === 409) {
                    throw new Error(responseData.message);
                } else
                    throw new Error("Request failed with error code: " + response.status);
            }

            this.userNote = responseData;
        },


        /**
         * Note
         * @param {*} pref 
         */
        async insertOrUpdateNoteSet(note) {
            let url = "http://" + window.location.hostname + ":3300/files/inserOrUpdateNotes"


            // console.log("Ciao:",note)
            
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(note),
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                enctype: "mutipart/form-data",
            });

          //  this.sendLogsAction(JSON.stringify(pref))

            const responseData = await response.json();

            if (!response.ok) {
                if (responseData.code === 409) {
                    throw new Error(responseData.message);
                } else
                    throw new Error("Request failed with error code: " + response.status);
            }

            this.insertOrUpdateNote = responseData;
        },




        async insertConnectionPrefs(pref) {
            let url = "http://" + window.location.hostname + ":3300/files/insertConnection"

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(pref),
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

            this.sendLogsAction(JSON.stringify(pref))


            if (!response.ok) {

                if (response.status === 404) {
                    this.statusConnection = responseData.error
                    throw new Error(responseData.error);
                } else if (response.status === 403){
                    this.statusConnection = responseData.error
                 throw new Error(responseData.error);
                }
            }
            else
            this.statusConnection = responseData.message;
        },

        async sendLogsAction(log) {

            let url = "http://" + window.location.hostname + ":3300/db2/log/?log=" + LocalStorage.getItem("currentUser") + "  --->      \n\n" + log
      
      
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
