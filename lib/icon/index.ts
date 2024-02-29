import type { App } from "vue";

import Icon from "./Icon.vue";
import IconOrSpinner from "./IconOrSpinner.vue";

export default {
  install(app: App) {
    app.component("Icon", Icon);
    app.component("IconOrSpinner", IconOrSpinner);
  },
};
