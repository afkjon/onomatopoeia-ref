<script setup>
import { ref } from 'vue'
const config = useRuntimeConfig()
const url = config.API_BASE_URL + '/sfx'

const word = ref('');
const definition = ref('');

function onSubmit(event) {
  const {data} = useFetch(
    url, {
    body: {
      "name": word.value
    },
    method: 'POST',
    mode: 'cors',
  }).then((response) => {
    console.log(response)
    word.value = "";
    useNuxtApp().$toast.success('Word submitted successfully!');
  }).catch((error) => {
    console.log(error.value)
    useNuxtApp().$toast.error('An error occurred. Please try again.');
  })
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h1 class="heading">Submit an Entry</h1>
      <div class="grid-x grid-padding-x">
        <div class="small-5 cell">
          <label class="text-right middle">Word</label>
        </div>
        <div class="small-5 cell">
          <input type="text" id="middle-label" name="word" placeholder="Word" v-model="word" />
        </div>
      </div>
      <div class="grid-x grid-padding-x">
        <div class="small-5 cell">
          <label class="text-right middle">Definition</label>
        </div>
        <div class="small-5 cell">
          <input type="text" name="definition" id="middle-label" placeholder="Definition" v-model="definition" />
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="small-12 cell">
            <button class="button large large-expanded" @click.prevent.self="onSubmit">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.no-results {
  font-style: italic;
  text-align: center;
}

label {
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
}

.button {
  display: block;
}
</style>