<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="">
      <q-toolbar class="glossy">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <small> {{ phrase.content }} ({{ phrase.author }}) </small>
          <!-- <Voice></Voice> -->
        </q-toolbar-title>

        <q-select
          class="q-mr-md select-color"
          style="max-width: 310px"
          v-model="modelId"
          use-input
          input-debounce="0"
          label="IP"
          label-color="yellow"
          :options="optionsIp"
          @filter="filterIp"
          @update:model-value="setIp"
          behavior="menu"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">No results</q-item-section>
            </q-item>
          </template>

          <template v-slot:append>
            <q-icon name="lock" color="white" />
          </template>
        </q-select>

        <q-select
          style="max-width: 250px"
          class="q-mr-xl"
          v-model="model"
          use-input
          input-debounce="0"
          label="PROFILO"
          label-color="yellow"
          :options="options"
          @filter="filterFn"
          @update:model-value="onClickLibdat"
          behavior="menu"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">No results</q-item-section>
            </q-item>
          </template>

          <template v-slot:append>
            <q-icon name="lock" color="white" />
          </template>
        </q-select>

        <div class="q-ml-md">
          Dark mode
          <q-toggle color="red" v-model="dark" @click="toggleDark" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <q-icon name="rocket_launch" color="primary" />
          <a
            @click="sendMess()"
            href="http://10.100.0.30:8040"
            class="q-ml-sm"
            target="”_blank”"
            >Linux Container (Demo)</a
          >
        </q-item-label>
        <q-separator class="q-my-xs" />
        <EssentialLink
          class="q-mt-xs text-overline"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-separator style="margin-top: 8px" />

      <!-- Research List -->
      <q-item-label header class="">
        Ricerche più recenti
        <!-- <q-avatar class="q-ml-md " size="26px" color="orange">
          <span class="material-icons"> star_rate </span>
        </q-avatar> -->
      </q-item-label>

      <div style="max-height: 250px; overflow: auto">
        <q-list bordered separator class="text-accent text-subtitle2">
          <q-item
            @click="execFromMenu(item)"
            dense
            v-for="(item, index) in queryStr.getLocalStorageFilesList"
            clickable
            :key="item.filename"
          >
            <q-item dense>
              <q-item-section>
                <q-avatar size="20px">
                  {{ index + 1 }}
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item-section>
              <div class="text-overline" style="font-size: 15px">
                {{ item.libname + "." + item.filename }}
                <!-- {{ item.all  }} -->
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <!-- Query list -->
      <!-- <q-item-label header class="">
        Query preferite
      </q-item-label>


      <div style="max-height: 250px; overflow: auto">
        <q-list bordered separator class="text-primary text-subtitle2">
          <q-item @click="exec(item.SQLSTR)" dense v-for="item in queryStr.getQueriesPrefered" clickable
            :key="item.SQLSTR">
            <q-item dense>
              <q-item-section>
                <q-avatar size="20px">
                  <span class="material-icons"> play_circle </span>
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item-section>
              <div class="text-overline" style="font-size: 10px">
                {{ item.TITLE }}
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div> -->

      <div class="absolute-bottom q-mb-xs q-pa-xs">
        <q-input
          v-model="sql_run"
          @keyup.enter="exec(sql_run)"
          outlined
          square
          color="primary"
          label-color="primary"
          label="Esegui subito SQL qui"
          clearable
        >
          <template v-slot:append>
            <q-icon name="search" color="primary" />
          </template>
        </q-input>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "home",
    icon: "home",
    to: "/home",
  },
  /*
    {
    title: "Query",
    caption: "query",
    icon: "search",
    to: "/query",
  },
  */
];

import { defineComponent, ref } from "vue";
import { useStore } from "../stores/as";
import { prefStore } from "../stores/pref";
import { queryStore } from "../stores/query";
import { useQuasar } from "quasar";

import { useRouter } from "vue-router";
import Voice from "src/pages/Voice.vue";

const queryStr = queryStore();

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    Voice,
  },

  setup() {
    const arr = ref([1, 3, 4]);

    const sql_run = ref(null);

    const q = useQuasar();
    const router = useRouter();

    const leftDrawerOpen = ref(false);
    const dark = ref(false);

    const model = ref(null);
    const stringOptions = ref([]);
    const options = ref([]);

    const stringOptionsIp = ref([]);
    const optionsIp = ref(["10.200.100.160 wrktommal"]);
    const modelId = ref(["10.200.100.160 WRKTOMMAL"]);
    const as = useStore();
    const pref = prefStore();

    const ret = () => {
      return arr.value;
    };

    const exec = async (sql) => {
      if (sql != undefined && sql != null && sql.length >= 3) {
        router.push({ path: "/", hash: "home" });
        queryStr.loadingTable = true;
        await queryStr.excecQuery(q.localStorage.getItem("currentUser"), sql);
        queryStr.loadingTable = false;
        queryStr.launchQueryPrefered = true;
      }
    };

    const execFromMenu = (item) => {
      router.push({ path: "/", hash: "home" });
      console.log(item)
      queryStr.setFilenameSelected(item);
    };

    const filterFn = (val, update) => {
      if (val === "") {
        update(() => {
          options.value = stringOptions.value;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        options.value = stringOptions.value.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    };

    const filterIp = (val, update) => {
      if (val === "") {
        update(() => {
          optionsIp.value = stringOptionsIp.value;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        optionsIp.value = stringOptionsIp.value.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    };

    const onClickLibdat = (rr) => {
      as.setCurrentUser(model.value);
      q.localStorage.set("currentUser", model.value);

      pref.setUserPref(model.value);
      // q.$router.push({name: 'myPath'})

      //q.$router.push({name: '/home'})
      //router.push('/home')
      if (q.localStorage.getItem("currentUser") != "null") location.reload();
      else q.localStorage.remove("currentUser");
    };

    const loadUserPrefs = () => {
      if (
        q.localStorage.getItem("currentUser") !== "" &&
        q.localStorage.getItem("currentUser") !== "null" &&
        q.localStorage.getItem("currentUser") !== null
      ) {
        model.value = q.localStorage.getItem("currentUser");

        linksList.push({
          title: "Query",
          caption: "Le mie query",
          icon: "search",
          to: "/query",
        });

        linksList.push({
          title: "Workitems",
          caption: "Gestisci WI",
          icon: "manage_accounts",
          to: "/workitems",
        });

        linksList.push({
          title: "Trova programma/file",
          caption: "Trova utilizzatore",
          icon: "verified",
          to: "/utilizzatore",
        });

        linksList.push({
          title: "Ticket",
          caption: "Trova ticket",
          icon: "chat",
          to: "/ticket",
        });

        linksList.push({
          title: "ChatJexp",
          caption: "Chiedimi qualsiasi cosa",
          icon: "stream",
          to: "/botjexp",
        });

        linksList.push({
          title: "Condividi file",
          caption: "Condividi qualsiasi cosa",
          icon: "share",
          to: "/share",
        });

        linksList.push({
          title: "Confronta testo",
          caption: "Trova differenze",
          icon: "rule",
          to: "/diff",
        });

        linksList.push({
          title: "Prendi nota",
          caption: "Salva le tue note",
          icon: "note",
          to: "/note",
        });

        linksList.push({
          title: "Preferenze",
          caption: "pref",
          icon: "settings ",
          to: "/preference",
        });
      }

      pref.setUserPref(model.value);
    };

    const sendMess = () => {
      sendInAsyncMsg();
    };

    const sendInAsyncMsg = async () => {
      try {
        await pref.sendLogsAction(" ===> Linux Container");
      } catch (error) {
        console.log(error);
      }
    };

    const loadUsers = async () => {
      try {
        const data = {
          user: "",
        };
        await as.getUsersAction(data);

        as.getUsers.forEach((element) => {
          stringOptions.value.push(element.TABLE_SCHEMA);
        });
      } catch (error) {
        console.log(error);
      }
    };

    const toggleDark = () => {
      q.dark.toggle();
      q.localStorage.set("darkMode", q.dark.isActive);
    };

    const loadIps = () => {
      if (!q.localStorage.getItem("as")) {
        const str = modelId.value[0];
        const ip = str.substring(0, str.indexOf(" ")); // "72"
        const userDb = str.substring(str.indexOf(" ") + 1); // "tocirah sneab"

        q.localStorage.set("as", ip);
        q.localStorage.set("userDb", userDb.toUpperCase());
        model.value = q.localStorage.getItem("userDb").toUpperCase();
        // Load all the user preferences
        onClickLibdat();
      } else {
        modelId.value[0] =
          q.localStorage.getItem("as") +
          " " +
          q.localStorage.getItem("userDb").toUpperCase();
      }
    };

    const setIp = () => {
      const str = modelId.value;
      const ip = str.substring(0, str.indexOf(" ")); // "72"
      const userDb = str.substring(str.indexOf(" ") + 1); // "tocirah sneab"

      // console.log("User ", userDb)

      q.localStorage.set("as", ip);
      q.localStorage.set("userDb", userDb);
      q.localStorage.set("currentUser", userDb.toUpperCase().trim());

      location.reload();
    };

    const loadDarkMode = () => {
      dark.value = q.localStorage.getItem("darkMode");
      if (dark.value == undefined || dark.value == null) dark.value = false;
      q.dark.set(dark.value);
    };

    const loadUserQueries = async () => {
      await queryStr.selectUserQuery(q.localStorage.getItem("currentUser"));

      queryStr.setFileNameListLocalStorage();
    };

    const loadUserIps = async () => {
      try {
        await as.getIpsAction();

        as.getUserIps.forEach((element) => {
          optionsIp.value.push(element.CLIEIP + " " + element.USERDB);

          stringOptionsIp.value.push(element.CLIEIP + " " + element.USERDB);
        });
      } catch (error) {
        console.log(error);
      }
    };

    const phrase = ref("");
    const loadPhrases = async () => {
      const response = await fetch("http://api.quotable.io/random?maxLength=70");
      const data = await response.json();
      phrase.value = data;
    };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      dark,
      setIp,
      toggleDark,
      loadDarkMode,
      filterFn,
      sql_run,
      exec,
      execFromMenu,
      model,
      options,
      stringOptions,
      onClickLibdat,
      loadUsers,
      loadUserPrefs,
      loadUserQueries,
      as,
      pref,
      optionsIp,
      modelId,
      filterIp,
      loadIps,
      q,
      queryStr,
      loadUserIps,
      stringOptionsIp,
      phrase,
      loadPhrases,
      sendMess,
      sendInAsyncMsg,
    };
  },

  mounted() {
    this.loadPhrases();

    this.loadUserIps();

    this.loadIps();
    this.loadDarkMode();
    this.loadUserPrefs();
    this.loadUsers();
    this.loadUserQueries();
  },
});
</script>

<style></style>
