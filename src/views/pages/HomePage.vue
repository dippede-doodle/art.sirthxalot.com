<template>
  <page-layout>
    <div class="page page--home">
      <section class="section section--container">
        <div class="flex lg:w-[33%]">
          <h3 class="headline--1 uppercase">Source of inspiration</h3>
        </div>
        <div class="text--highlight flex lg:w-[66%] self-center">
          <p>
            Hi folks! My name is
            <router-link to="/about" class="link">Alexander Bösch</router-link>
            a.k.a. dippede doodle and I am your host.
            Nice to meet you! This is my personal space where I share
            everything related to art. Lets dive into the fantastic
            world where creativity meets reality. The goal is
            simple - spread out the inspirational spirit absorbed
            due the artistic journey. Buckle up, be amazed and have fun.
          </p>
        </div>
      </section>

      <section class="section section--container">
        <div class="flex lg:w-[66%] self-center text--highlight">
          <p>
            Checkout
            <router-link to="/portfolio" class="link">my portfolio</router-link>
            jam-packed with tons of polished artwork. My gusto heavily
            relies on penciled or inked artwork. Cartoon, comics
            and street art is what get me goosebumps. There are
            multiple ways to capture a moment and I love all of them.
            Photos are another great example. Don't believe me?
            Or do you want to see some? Than visit
            <router-link to="/photos" class="link">my photo gallery</router-link>.
          </p>
        </div>
        <div class="flex lg:w-[33%] lg:text-right order-first lg:order-2">
          <h3 class="headline--1 uppercase">Fair representation of my skills</h3>
        </div>
      </section>
      <a href="https://paypal.me/AlexanderB734" target="_blank" class="link">
        <section class="img--cover flex items-center" role="banner" style="background-image: url('/img/donation-hero.jpg')">
          <div class="container p-8 mx-auto text-3xl lg:text-6xl text-white font-black uppercase">
            A <span class="text-primary">quick donation</span> means the world to me!
          </div>
        </section>
      </a>


    </div>
  </page-layout>
</template>

<script setup>
import PageLayout from "@/components/layouts/PageLayout.vue";
</script>
