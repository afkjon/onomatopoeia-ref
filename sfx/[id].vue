<script setup>
const config = useRuntimeConfig();
console.log($route.params.id);
const url = config.API_BASE_URL +  '/sfx/' + $route.params.id
const { data } = await useFetch(
  url, {
  params: {
    id: this.$route.params.id
  },
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET',
  mode: 'cors',
  cache: 'default',
  credentials: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
})
</script>

<template>
  <div>
    <h1 class="heading">{{ data.sfx.name }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      ultricies, nisl nec aliquam aliquam, nunc orci aliquet nisl, eget
      aliquet nunc nisl eget nunc. Sed euismod, nisl nec aliquam
      aliquam, nunc orci aliquet nisl, eget aliquet nunc nisl eget nunc.
      Sed euismod, nisl nec aliquam aliquam, nunc orci aliquet nisl, eget
      aliquet nunc nisl eget nunc.
    </p>
  </div>
</template>
