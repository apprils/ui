<script setup lang="ts">

defineOptions({
  inheritAttrs: false,
})

import Modal from "../modal/Modal.vue";

const props = defineProps({
  modelValue: null,
})

const emit = defineEmits(["hide", "update:modelValue"])

function hide() {
  emit("update:modelValue", null)
  emit("hide")
}

/**
 * credits: https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
 */

type ErrorWithMessage = {
  message: string
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {

  if (error === null) {
    return false
  }

  if (typeof error !== "object") {
    return false
  }

  if ("message" in error === false) {
    return false
  }

  return typeof (error as Record<string, unknown>).message === "string"
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {

  if (isErrorWithMessage(maybeError)) {
    return maybeError
  }

  try {
    return new Error(JSON.stringify(maybeError))
  }
  catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError))
  }
}

function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message
}

</script>

<template>
<Teleport v-if="props.modelValue" to="body">
  <Modal centered large :static="false" :zindex="1_000_000" @close="hide">

    <template #header.bg-danger-subtle>
      <div class="text-danger">
        <Icon circle />
        Error Occurred
      </div>
    </template>

    <template #body>
      <slot>
        <div style="white-space: pre;">
          {{
            typeof props.modelValue === "string"
              ? props.modelValue
              : getErrorMessage(props.modelValue)
          }}
        </div>
      </slot>
    </template>

  </Modal>
</Teleport>
</template>

