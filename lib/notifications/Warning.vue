<script setup lang="ts">

import Notification from "./Notification.vue";
import type { Position } from "./types";
import config from "../config";

type Props = {
  modelValue: string | null;
  position?: Position;
  delay?: number;
  autohide?: boolean;
  animation?: boolean;
  container?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  position: config.warningPosition as Position,
  delay: config.warningDelay,
  autohide: config.warningAutohide,
  animation: config.warningAnimation,
})

const emit = defineEmits(["hide", "update:modelValue"])

function hide() {
  emit("update:modelValue", null)
  emit("hide")
}

</script>

<template>
<Notification v-if="props.modelValue" v-bind="props" @hide="hide"
  class="bg-danger-subtle border-0">

  <slot name="header">
    <div class="toast-header">
      <div class="me-auto">
        <slot name="title">
          <strong>Warning</strong>
        </slot>
      </div>
      <button @click="hide" type="button" class="btn-close"></button>
    </div>
  </slot>

  <div class="toast-body me-auto">
    <slot>
      {{ props.modelValue }}
    </slot>
  </div>

</Notification>
</template>

