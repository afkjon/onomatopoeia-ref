<template>
  <form @submit.prevent="submit()">
    <h1 class="heading">Submit an Entry</h1>
    <div class="grid-x grid-padding-x">
      <div class="small-5 cell">
        <label class="text-right middle">Word</label>
      </div>
      <div class="small-5 cell">
        <input type="text" id="middle-label" name="word" placeholder="Word" v-model="form.word" />
      </div>
    </div>
    <div class="grid-x grid-padding-x">
      <div class="small-5 cell">
        <label class="text-right middle">Definition</label>
      </div>
      <div class="small-5 cell">
        <input type="text" name="definition" id="middle-label" placeholder="Definition" v-model="form.definition" />
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="small-12 cell">
          <button class="button large large-expanded" @click.stop.prevent="submit()">Submit</button>
        </div>
      </div>
    </div>
  </form>
</template>



<script>
import axios from 'axios'
export default {
  name: 'SfxPage',

  data() {
    return {
      title: "Submit an Entry",
      form: {
        word: '',
        definition: ''
      },
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
  },
  methods: {
    async submit() {
      axios.post('/api/sfx', 
      {name: this.form.word}, {headers: {}}
      )
      .then(response => {
          console.log(response.status)
        }
      ).then(
        this.$toast.success('Entry submitted successfully!')
      ).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

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