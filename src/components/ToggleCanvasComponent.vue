<script>
export default {
  methods: {
    toggleCanvas() {
      this.emitter.emit('toggleCanvasSlider', {})
    }
  }
}
</script>

<template>
  <button @click="toggleCanvas()"><slot /></button>
</template>
