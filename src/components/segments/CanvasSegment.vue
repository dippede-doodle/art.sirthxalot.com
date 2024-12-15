<script >
import { ref} from "vue";
import {useRoute} from "vue-router";
import SocialMenu from "@/components/menus/SocialMenu.vue";

export default {
  components: {SocialMenu},
  data: function () {
    return {
      sliderIsOpen: ref(false)
    }
  },
  created (){
    this.emitter.on('toggleCanvasSlider', (evt) => {
      this.sliderIsOpen = ! this.sliderIsOpen
    })
  },
  methods: {
    closeCanvas () {
      this.sliderIsOpen = false
    },
    isRouteActive (routeName) {
      return useRoute().name === routeName;
    }
  }
}
</script>

<template>
  <div class="canvas"
       :data-is-slider-open="sliderIsOpen"
       @toggleCanvasSlider="onToggleCanvasSlider(e)"
  >
    <div class="canvas__slider" v-show="sliderIsOpen">
      <button title="close menu"
              aria-label="close menu"
              class="absolute right-2 top-2"
              v-on:click="closeCanvas"
              role="button"
      >
        <i class="fal fa-times-octagon text-xl"></i>
      </button>

      <div class="p-4 flex flex-col gap-4">
        <nav aria-label="main menu">
          <ul>
            <template v-for="menu in this.$router.options.routes">

              <li>
                <a :href="menu.path"
                   v-html="menu.meta.label"
                   v-if="! isRouteActive(menu.name)"
                />
                <b v-html="menu.meta.label" class="text-primary cursor-not-allowed" />
              </li>
            </template>
          </ul>
        </nav>

        <hr>

        <div class="page-info text-sm flex gap-3 flex-col">
          <b v-html="this.$route.meta.title" />
          <p v-html="this.$route.meta.description" />

          <p class="inline-flex gap-2 items-center">
            <i class="fal fa-stopwatch"></i>
            <time-to-read element="canvas-content" />
          </p>
        </div>

        <hr class="md:hidden">

        <nav class="social md:hidden mr-8 text-3xl" aria-label="social menu mobile">
          <SocialMenu class="justify-center" />
        </nav>
      </div>
    </div>

    <div class="canvas__content" ref="canvas-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.canvas {
  @apply relative overflow-hidden
}
.canvas__slider {
  @apply fixed z-[120] top-0 left-0 flex h-full min-h-screen
  overflow-y-auto w-full md:w-[250px] transition-transform ease-in-out
  delay-75 border-r bg-white
}
[data-whatinput=mouse] .canvas__slider {
  @apply outline-0
}
.canvas[data-is-slider-open=true] .canvas__content {
  @apply md:translate-x-[300px]
}
.canvas__content {
  min-height: calc(100vh - 150px);
}
</style>
