<script setup>
defineProps(["text", "color", "textColor", "textColorOnHover"]);
</script>
<template>
  <button
    class="flex justify-center items-center overflow-hidden rounded-3xl relative border-2 border-transparent px-6 py-[1px] transition-all duration-300 disabled:bg-gray-400 disabled:text-gray-500 disabled:border-transparent hover:bg-transparent"
    :class="[
      `hover:border-${color}`,
      `bg-${color}`,
      `text-${textColor}`,
      `hover:text-${textColorOnHover}`,
    ]"
  >
    {{ text }}
  </button>
</template>
