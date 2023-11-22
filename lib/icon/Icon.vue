
<script setup lang="ts">

function classes(attrs: {
  icon?: string,
  fw?: string | boolean,
  spin?: string | boolean,
  size?: string,
}) {

  const attrNames = Object.keys(attrs)

  const {
    icon = attrNames[0] || "",
  } = attrs

  const [ iconName, iconSet = "solid" ] = icon.split(".")

  return [
    iconSet,
    iconName,
    ..."size" in attrs
      ? [ attrs.size ]
      : [],
    ..."spin" in attrs && attrs.spin !== false
      ? [ "spin" ]
      : [],
    ...attrs.fw === false
      ? []
      : [ "fw" ],
  ].map((e) => "fa-" + e)

}

</script>

<template>
<span :class="classes($attrs)"></span>
</template>

