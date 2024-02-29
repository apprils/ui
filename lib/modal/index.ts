import type { App } from "vue";

import Modal from "./Modal.vue";

export default {
  install(app: App) {
    app.component("Modal", Modal);
  },
};
