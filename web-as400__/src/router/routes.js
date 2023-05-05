import { LocalStorage } from 'quasar'

const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("pages/Index.vue"),
            },
            {
                path: "test",
                component: () =>
                    import ("pages/Test.vue")
            },
            {
                path: "query",
                component: () =>
                    import ("pages/Query.vue"),
                meta: {
                    isAuth: LocalStorage.getItem("currentUser")
                }
            },
            {
                path: "home",
                component: () =>
                    import ("pages/Index.vue"),
            },
            {
                path: "workitems",
                component: () =>
                    import ("pages/Workitems.vue"),
            },   
            {
                path: "utilizzatore",
                component: () =>
                    import ("pages/Utilizzatore.vue"),
            }, 
            {
                path: "botgpt",
                component: () =>
                    import ("pages/BotGPT.vue"),
            },
            {
                path: "botjexp",
                component: () =>
                    import ("pages/BotJexp.vue"),
            },
            {
                path: "share",
                component: () =>
                    import ("pages/Share.vue"),
            },
            {
                path: "diff",
                component: () =>
                    import ("pages/Diff.vue"),
            },
            {
                path: "note",
                component: () =>
                    import ("pages/Note.vue"),
            },
            {
                path: "preference",
                component: () =>
                    import ("pages/Preference.vue"),
                meta: {
                    isAuth: LocalStorage.getItem("currentUser")
                }
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/Error404.vue"),
    },
];


export default routes;
