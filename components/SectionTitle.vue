<template>
  <div class="flex items-center gap-4 max-w-xl">
    <h2 class="text-2xl uppercase">
      <span class="text-primary"
        >{{ number <= 9 ? "0" : "" }}{{ number }}.</span
      >
      {{ title }}
    </h2>
    <div class="flex-1 h-[1px] w-full bg-white/20"></div>
  </div>
</template>

<script setup>
const props = defineProps({ title: String, number: Number });
</script>
