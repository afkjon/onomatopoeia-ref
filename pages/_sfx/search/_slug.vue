<template>
  <div class="row">
    <div class="grid-x">
      <h1 class="cell heading">Search Results</h1>
      <div class="cell">
        <p v-if="error">Error: {{ error }}</p>
        <p v-if="sfx.length === 0" class="no-results">No results found.</p>
        <p v-if="sfx.length > 0">Found {{ sfx.length }} results.</p>
        
        <table aria-describedby="search results">
          <thead>
            <tr>
              <th>Name</th>
              <th>Top Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sfx in sfx" :key="sfx.id">
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
    </div>
  </div>
</template>



<script>
import axios from 'axios'
export default {
  name: 'SfxPage',

  data() {
    axios.get(process.env.API_BASE_URL + '/sfx/search?query=' + this.$route.params.slug)
    //axios.get('http://localhost:8080/api/sfx/search?query=' + this.$route.params.slug)
      .then(response => {
        this.sfx = response.data
      })
      .catch(error => {
        this.error = error
      })
    return {
      title: "All SFX",
      sfx: [],
      error: null
    }
  },

  head: {
    title: 'All SFX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>

<style>
.no-results {
  font-style: italic;
  text-align: center;
}
</style>