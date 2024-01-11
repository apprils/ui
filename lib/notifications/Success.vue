
<script setup lang="ts">

import Notification from "./Notification.vue";
import type { Position } from "./types";
import config from "../config";

type Props = {
  position?: Position;
  delay?: number;
  autohide?: boolean;
  animation?: boolean;
  container?: string;
}

const props = withDefaults(defineProps<Props>(), {
  position: config.successPosition as Position,
  delay: config.successDelay,
  autohide: config.successAutohide,
  animation: config.successAnimation,
})

const model = defineModel()

const emit = defineEmits([ "hide" ])

function hide() {
  model.value = null
  emit("hide")
}

</script>

<template>
<Notification v-if="model" v-bind="props" @hide="hide"
  class="text-bg-primary border-0 align-items-center">

  <div class="d-flex">
    <div class="toast-body me-auto">
      <slot>
        {{
          typeof model === "string"
            ? model
            : config.successMessage
        }}
      </slot>
    </div>
    <button @click="hide" type="button"
      class="btn-close btn-close-white me-2 m-auto"></button>
  </div>

</Notification>
</template>

