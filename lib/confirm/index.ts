
import type { App } from "vue";

import Confirm from "./Confirm.vue";

export default {

  install(app: App) {
    app.component("Confirm", Confirm)
  },

}

