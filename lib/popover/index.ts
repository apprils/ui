
import type { App } from "vue";

import floatingVue from "floating-vue";
import "floating-vue/dist/style.css";

import Popover from "./Popover.vue";

export default {

  install(app: App) {
    app.use(floatingVue)
    app.component("Popover", Popover)
  },

}

