
<script setup lang="ts">

import { onBeforeMount, onMounted, onBeforeUnmount, useSlots, nextTick } from "vue";

export type Props = {
  static?: boolean,
  fade?: boolean,
  opacity?: number,
  zindex?: number,
  centered?: boolean,
  scrollable?: boolean,
  small?: boolean,
  large?: boolean,
  loading?: boolean,
}

const emit = defineEmits(["mounted", "close"])

const props = withDefaults(defineProps<Props>(), {
  static: true,
  fade: true,
  opacity: undefined,
  zindex: 1050,
  centered: false,
  scrollable: true,
  small: false,
  large: false,
  loading: false,
})

onBeforeMount(() => document.body.style.overflow = "hidden")
onMounted(() => nextTick(() => emit("mounted")))
onBeforeUnmount(() => document.body.style.overflow = "")

const $static = "static" in props
  ? props.static
  : true

function close() {
  emit("close")
}

const slots = Object.keys(useSlots())

const headerSlot = slots.find((e) => /^header\.?/.test(e))

const [, ...headerClasses] = headerSlot
  ? headerSlot.split(".")
  : ["", []]

const bodySlot = slots.find((e) => /^body\.?/.test(e))

const [, ...bodyClasses] = bodySlot
  ? bodySlot.split(".")
  : ["", []]

const footerSlot = slots.find((e) => /^footer\.?/.test(e))

const [, ...footerClasses] = footerSlot
  ? footerSlot.split(".")
  : ["", []]

</script>

<template>
  <div class="modal-open">

    <div class="modal-backdrop" :class="{ show: true, fade: props.fade }"
      :style="{ opacity: props.opacity, 'z-index': props.zindex }"></div>

    <div @click="$static || close()" :class="{ modal: true, show: true, fade: props.fade }"
      :style="{ display: 'block', 'z-index': props.zindex + 5 }">
      <div :class="{
        'modal-dialog': true,
        'modal-dialog-centered': props.centered,
        'modal-dialog-scrollable': props.scrollable,
        'modal-sm': props.small,
        'modal-lg': props.large,
      }">
        <div class="modal-content" @click.stop="">

          <template v-if="headerSlot">

            <div class="modal-header align-items-start" :class="headerClasses">

              <div class="modal-title">
                <slot :name="headerSlot" v-bind="$slots[headerSlot]" />
              </div>

              <button type="button" @click="close" class="btn-close"></button>

            </div>

          </template>

          <template v-if="bodySlot">
            <div class="modal-body" :class="bodyClasses">
              <div v-if="props.loading" class="text-center p-3">
                <span class="fa-solid fa-spinner fa-spin fa-fw fa-2x"></span>
              </div>
              <slot v-else :name="bodySlot" v-bind="$slots[bodySlot]" />
            </div>
          </template>

          <slot v-else />

          <template v-if="footerSlot">
            <div class="modal-footer justify-content-between" :class="footerClasses">
              <slot :name="footerSlot" v-bind="$slots[footerSlot]" />
            </div>
          </template>

        </div>
      </div>
    </div>

  </div>
</template>

