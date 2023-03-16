<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const url = config.API_BASE_URL + '/sfx';
const { data } = await useFetch(
  url, {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET',
  mode: 'cors',
  cache: 'default',
  credentials: 'same-origin',
  redirect: 'follow',
  referrerPolicy: 'no-referrer'
}).catch((error) => {
  console.log(error);
});
</script>


<template>
  <div class="row">
    <div class="grid-x">
      <h1 class="cell heading">All SFX</h1>
      <div class="cell">
        <table aria-describedby="all entries">
          <thead>
            <tr>
              <th>Name</th>
              <th>Top Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sfx in data" :key="sfx.id">
              <td>
                <NuxtLink :to="'/sfx/' + sfx.id">
                  {{ sfx.name }}
                </NuxtLink>
              </td>
              <td>
                {{ sfx.topDefinition }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cell">
        <NuxtLink :to="'/sfx/submit'">
          Submit an Entry
        </NuxtLink>
      </div>
    </div>  
  </div>
</template>

<style>
.no-results {
  font-style: italic;
  text-align: center;
}
</style>