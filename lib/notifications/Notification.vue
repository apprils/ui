
<script setup lang="ts">

defineOptions({
  inheritAttrs: false,
})

import { onMounted, ref } from "vue";
import { Toast } from "bootstrap";

import type { Position } from "./types";

const emit = defineEmits([ "hide" ])

const {
  position,
  delay,
  autohide,
  animation,
  container,
} = defineProps<{
  position: Position;
  delay: number;
  autohide: boolean;
  animation: boolean;
  container?: string;
}>()

const target = `#notifications-plugin--container--${ position }--${ container || "default" }`

const timer = autohide
  ? setTimeout(() => toast.hide(), delay)
  : null

function stopTimer() {
  if (timer) {
    clearTimeout(timer)
  }
}

const el = ref<Element>()

let toast: Toast

onMounted(() => {
   toast = new Toast(el.value as Element, { animation, autohide: false })
   el.value?.addEventListener("hidden.bs.toast", () => emit("hide"))
   toast.show()
})

</script>

<template>
<Teleport :to="target">
  <div ref="el" class="toast" :class="$attrs.class" @mouseover="stopTimer">
    <slot />
  </div>
</Teleport>
</template>

