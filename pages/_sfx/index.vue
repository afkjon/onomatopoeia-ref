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
      <div class="cell">
        <NuxtLink :to="'/sfx/submit'">
            Submit an Entry
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SfxPage',

  data() {
    fetch('http://localhost:8080/api/sfx')
      .then(response => response.json())
      .then(data => {
        this.sfx = data
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
