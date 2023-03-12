<template>
  <div>
   <h1 class="heading">{{ sfx.name }}</h1>
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


<script>
import $ from 'jquery'
export default {
  name: 'SfxPage',

  data() {
    fetch('http://localhost:8080/api/sfx/' + this.$route.params.slug)
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
