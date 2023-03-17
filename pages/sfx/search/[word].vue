<script setup>
const config = useRuntimeConfig()
const route = useRoute();
const url = config.API_BASE_URL + '/sfx/search'
let res = '';
const { data } = useFetch(
  url, {
  query: {
    query: route.params.word
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
}).then((response) => {
  console.log(response.data.value.length);
  res = response;
}).catch((error) => {
  console.log(error);
})
</script>

<template>
  <div class="row">
    <div class="grid-x">
      <h1 class="cell heading">Search Results</h1>
      <div class="cell">
        <p v-if="res === undefined">Error</p>
        <p v-if="res.data.value.length === 0" class="no-results">No results found.</p>
        <p v-if="res.data.value !== undefined">Found {{ res.data.value.length }} result(s).</p>

        <table aria-describedby="search results">
          <thead>
            <tr>
              <th>Name</th>
              <th>Top Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sfx in res.data.value" :key="sfx.id">
              <td>
                <NuxtLink :to="'/sfx/' + sfx.id">
                  {{ sfx.name }}
                </NuxtLink>
              </td>
              <td>
                (topdefinition)
              </td>
            </tr>
          </tbody>
        </table>
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