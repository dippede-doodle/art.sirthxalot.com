<script setup>
import HeaderSegment from "@/components/segments/HeaderSegment.vue";
import CanvasSegment from "@/components/segments/CanvasSegment.vue";
</script>

<template>
  <div class="page flex h-full flex-col">
    <header-segment />
    <canvas-segment>
      <slot />
    </canvas-segment>
  </div>
  <footer class="flex-1 border-t items-center bg-white text-sm text-center mt-4">
    <small class="inline-flex py-4">&copy; Copyright 2024, &nbsp;
      <a title="write me an email to: call@sirthxalot.com" href="mailto:call@sirthxalot.com" class="underline">Alexander Bösch</a>
      &nbsp; - all rights reserved.</small>
  </footer>
</template>
