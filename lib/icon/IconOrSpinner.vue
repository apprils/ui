<script setup lang="ts">

import Icon from "./Icon.vue";

const props = defineProps<{
  spin: boolean|string,
}>()

</script>

<template>
<span v-if="props.spin" class="fa-solid fa-spinner fa-spin fa-fw"></span>
<slot v-else>
  <Icon v-bind="$attrs" />
</slot>
</template>

