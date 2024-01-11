
<script setup lang="ts">

import { nextTick } from "vue";

import Modal from "../modal/Modal.vue";

const model = defineModel()

const emit = defineEmits([ "onConfirm", "onReject" ])

function confirm() {
  emit("onConfirm")
  nextTick(close)
}

function reject() {
  emit("onReject")
  nextTick(close)
}

function close() {
  model.value = null
}

</script>

<template>

<Teleport v-if="model" to="body">
  <Modal scrollable>

    <template #body>
      <slot>
        Are you sure?
      </slot>
    </template>

    <template #footer>

      <slot name="cancelButton">
        <button type="button" @click="reject" class="btn btn-sm btn-outline-secondary">
          <slot name="cancelButtonIcon">
            <Icon times />
          </slot>
          <slot name="cancelButtonText">
            Cancel
          </slot>
        </button>
      </slot>

      <slot name="confirmButton">
        <button type="button" @click="confirm" class="btn btn-primary">
          <slot name="confirmButtonIcon">
            <Icon chevron-right />
          </slot>
          <slot name="confirmButtonText">
            Continue
          </slot>
        </button>
      </slot>

    </template>

  </Modal>
</Teleport>

</template>

