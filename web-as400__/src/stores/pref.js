import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const prefStore = defineStore("pref", {
    state: () => {
        return {
            userPref: [],
            insertOrDeleteStatus: null
        };
    },
    getters: {
        getUserPref: (state) => state.userPref,
        getInsertOrDeleteStatus: (state) => state.insertOrDeleteStatus,
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
            // "http://localhost:3300/files/?library=wrkjexp&tablename=role_user"
            let url = "http://" + window.location.hostname + ":3300/files/USERPREF/?user=" + user;
            let url1 = "http://localhost:3300/files/USERPREF/?user=" + user;

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
            // "http://localhost:3300/files/?library=wrkjexp&tablename=role_user"
            let url = "http://" + window.location.hostname + ":3300/files/inserOrUpdatePref/?libdat=" + pref.user +
                "&PREFL1=" + pref.prefl1 + "&PREFL2=" + pref.prefl2 + "&PREFL3=" + pref.prefl3 + "&PREFL4=" + pref.prefl4 + "&PREFL5=" + pref.prefl5;

            let url1 = "http://localhost:3300/files/inserOrUpdatePref/?libdat=" + pref.user +
                "&PREFL1=" + pref.prefl1 + "&PREFL2=" + pref.prefl2 + "&PREFL3=" + pref.prefl3 + "&PREFL4=" + pref.prefl4 + "&PREFL5=" + pref.prefl5;

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

            this.insertOrDeleteStatus = responseData;
        },
    },
});
