
<script setup lang="ts">

import type { Position } from "./types";

type Props = {
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: "default",
})

const map: [pos: Position, cls: string][] = [
  ["top-left", "top-0 start-0"],
  ["top-center", "top-0 start-50 translate-middle-x"],
  ["top-right", "top-0 end-0"],
  ["middle-left", "top-50 start-0 translate-middle-y"],
  ["middle-center", "top-50 start-50 translate-middle"],
  ["middle-right", "top-50 end-0 translate-middle-y"],
  ["bottom-left", "bottom-0 start-0"],
  ["bottom-center", "bottom-0 start-50 translate-middle-x"],
  ["bottom-right", "bottom-0 end-0"],
]

</script>

<template>
  <template v-for="[pos, cls] of map">
    <div :id="'notifications-plugin--container--' + pos + '--' + props.id" class="toast-container p-3" :class="cls">
    </div>
  </template>
</template>

