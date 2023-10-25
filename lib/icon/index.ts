
import type { App } from "vue";

import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-free/css/brands.css";

import Icon from "./Icon.vue";
import IconOrSpinner from "./IconOrSpinner.vue";

export default {

  install(app: App) {
    app.component("Icon", Icon)
    app.component("IconOrSpinner", IconOrSpinner)
  },

}

