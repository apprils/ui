
import NotificationContainers from "./NotificationContainers.vue";
import Success from "./Success.vue";
import Warning from "./Warning.vue";
import Error from "./Error.vue";

import type { App } from "vue";

export default {

  install(app: App) {
    app.component("NotificationContainers", NotificationContainers)
    app.component("Success", Success)
    app.component("Warning", Warning)
    app.component("Error", Error)
  },

}

