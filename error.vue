<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred.</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    if (error.statusCode === 404) {
      context.redirect('/404')
    } else {
      context.redirect('/error')
    }
  }
})
</script>
