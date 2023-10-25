
import type { App } from "vue";

import confirmPlugin from "./confirm";
import iconPlugin from "./icon";
import modalPlugin from "./modal";
import notificationsPlugin from "./notifications";
import popoverPlugin from "./popover";

import Confirm from "./confirm/Confirm.vue";

import Icon from "./icon/Icon.vue";
import IconOrSpinner from "./icon/IconOrSpinner.vue";

import Modal from "./modal/Modal.vue";

import NotificationContainers from "./notifications/NotificationContainers.vue";
import Error from "./notifications/Error.vue";
import Success from "./notifications/Success.vue";
import Warning from "./notifications/Warning.vue";

import Popover from "./popover/Popover.vue";

export {
  confirmPlugin, Confirm,
  iconPlugin, Icon, IconOrSpinner,
  modalPlugin, Modal,
  notificationsPlugin, NotificationContainers, Error, Success,
  popoverPlugin, Popover,
}

export default {

  install(app: App) {
    app.use(confirmPlugin)
    app.use(iconPlugin)
    app.use(modalPlugin)
    app.use(notificationsPlugin)
    app.use(popoverPlugin)
  },

}

export { config } from "./config";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    Confirm: typeof Confirm;
    Icon: typeof Icon;
    IconOrSpinner: typeof IconOrSpinner;
    Modal: typeof Modal;
    NotificationContainers: typeof NotificationContainers;
    Error: typeof Error;
    Success: typeof Success;
    Warning: typeof Warning;
    Popover: typeof Popover;
  }
}

