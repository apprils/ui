import type { App } from "vue";

import floatingVue from "floating-vue";

import Popover from "./Popover.vue";

export default {
  install(app: App) {
    app.use(floatingVue);
    app.component("Popover", Popover);
  },
};
