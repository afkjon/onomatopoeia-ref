<template>
  <div class="row">
    <div class="grid-x">
      <h1 class="cell heading">SFX and Onomatopoeia Reference</h1>
      <p class="large-12 cell">
        Search for a sound effect or onomatopoeia by name or description. If you don't find what you're looking for, you can <NuxtLink :to="'/sfx/submit'">submit an entry</NuxtLink>.
      </p>
    </div>
    <div class="row">
      <form @submit.prevent="submit()">
      <div class="grid-x">
        <input type="text" class="large-10 cell search-box" placeholder="Search" name="query" v-model="form.query" />
      </div>
      </form>
      <div class="grid-x">
        <button class="button large large-expanded" type="submit" value="Submit"
          @click.stop.prevent="submit()">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      title: "Home Page",
      form: {
        query: ''
      },
    }
  },
  methods: {
    scrollToContactForm() {
      this.$refs.contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      })
    },
    submit() {
      this.$router.push("/sfx/search/" + this.form.query);
    }
  }
}
</script>


<style>
.heading {
  text-align: center;
  font-weight: 700;
  margin-bottom: 1rem;
}

.search-box {
  margin: 1rem auto;
}

.button {
  margin: 0.5rem auto;
  font-size: 2rem;
  padding: 1rem 2rem;
}
</style>