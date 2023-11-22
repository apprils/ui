
<script setup lang="ts">

import { nextTick } from "vue";

type Placement =
  | "auto"
  | "auto-start"
  | "auto-end"
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"

type Trigger =
  | "click"
  | "hover"
  | "focus"
  | "touch"

type Props = {
  // Default events that trigger the dropdown
  triggers: Trigger[];
  // Triggers on the popper itself
  popperTriggers: Trigger[],
  // Default position offset along main axis (px)
  distance: number;
  // Default position offset along cross axis (px)
  skidding: number;
  // Default dropdown placement relative to target element
  placement: Placement;
  // Delay (ms)
  delay: number;
  // Update popper on content resize
  handleResize: boolean;
  // Hide on click outside
  autoHide: boolean;
  // Max height
  maxHeight: string;
}

const props = withDefaults(defineProps<Props>(), {
  triggers: [ "click" ] as any,
  popperTriggers: [ "click" ] as any,
  distance: 5,
  skidding: 0,
  placement: "bottom",
  delay: 0,
  handleResize: true,
  autoHide: true,
  maxHeight: "60vh",
})

const emit = defineEmits([ "onMounted" ])

function mounted() {
  nextTick(() => emit("onMounted"))
}

</script>

<template>
<VMenu no-auto-focus @apply-show="mounted" v-bind="props">

  <div @click.prevent.stop="">
    <slot />
  </div>

  <template #popper="{ hide }">

    <template v-if="$slots.header">
      <div @click.prevent.stop="" class="bg-light appril-ui--popover--header">
        <slot name="header" :hide="hide" />
      </div>
    </template>

    <template v-if="$slots.list">
      <div class="d-flex flex-column align-items-start appril-ui--popover--list"
        :style="{ 'max-height': maxHeight }">
        <slot name="list" :hide="hide" />
      </div>
    </template>

    <template v-if="$slots.bare">
      <div class="appril-ui--popover--bare">
        <slot name="bare" :hide="hide" />
      </div>
    </template>

  </template>
</VMenu>
</template>

<style>

.appril-ui--popover--header {
  margin: 0;
  padding: 5px 10px;
  white-space: nowrap;
}

.appril-ui--popover--list {
  margin: 5px 0;
  padding: 0;
  overflow: auto;
}

.appril-ui--popover--list > * {
  margin: 0;
  padding: 5px 10px;
  line-height: 1;
  display: block;
  width: 100%;
  text-align: left;
  white-space: nowrap;
}

.appril-ui--popover--list > *:hover {
  background: #efefef;
}

.appril-ui--popover--list [divider],
.appril-ui--popover--bare [divider] {
  display: block;
  margin: 5px 0;
  padding: 0;
  height: 1px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}

</style>

