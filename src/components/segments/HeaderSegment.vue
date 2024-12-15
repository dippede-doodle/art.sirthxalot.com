<script setup>
import {useRoute} from "vue-router";
import menuButton from '@/components/ToggleCanvasComponent.vue'
import {ref} from "vue";
import SocialMenu from "@/components/menus/SocialMenu.vue";

const siteTitle = 'dippede doodle';

function isHomepage() {
  return useRoute().name === 'home';
}
</script>

<template>
  <el-sticky>
    <header id="top" class="header">
      <div>
        <menu-button class="button h-header w-[80px] text-4xl">
          <i class="fal fa-bars"></i>
        </menu-button>
      </div>
      <div class="ml-8 mr-auto">
        <h1 class="site-name">
          <template v-if="! isHomepage()">
            <a href="/"
               class="select-none"
               title="Back to homepage"
               v-html="siteTitle"
            />
          </template>

          <template v-if="isHomepage()">
                <span
                  class="cursor-default select-none"

                  v-html="siteTitle"
                />
          </template>
        </h1>
      </div>
      <nav aria-label="social menu" class="social hidden md:block mr-8 text-3xl">
        <SocialMenu />
      </nav>
    </header>
  </el-sticky>

</template>

<style scoped>
.header {
  @apply fixed top-0 left-0 h-header items-center flex w-full bg-white border-b z-[100] flex-wrap self-center justify-between
}
.site-name {
  @apply font-bold text-2xl md:text-4xl
}
</style>
