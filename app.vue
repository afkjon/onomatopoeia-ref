<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
const title = ref('SFX and Onomatopoeia Reference')
const meta = ref([
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  {
    hid: `description`,
    name: 'description',
    content: 'SFX and Onomatopoeia Reference for Japanese to English Translations'
  }
])
// if using options API `head` method you must use `defineNuxtComponent`
useHead({
  // `head` receives the nuxt app but cannot access the component instance
  title,
  meta,
})
</script>