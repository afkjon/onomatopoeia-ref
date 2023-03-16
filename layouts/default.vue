<!-- create a vue navbar -->
<template>
  <div>
    <ul class="menu align-center">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/sfx">All SFX</nuxt-link></li>
      <li><nuxt-link to="/docs">Documentation</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
    <div class="container">
      <Nuxt />
    </div>
    <div class="footer">
      <p>Jonathon Ho &copy; 2023</p>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'SFX and Onomatopoeia Reference',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: `description`,
        name: 'description',
        content: 'SFX and Onomatopoeia Reference for Japanese to English Translations'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>

<style>

@media screen and (max-width: 600px) {
  .menu {
    text-align: center;
    float: none;
    display: block;
    background-color: #333; 
  }
  
  .menu li {
    float: none;
  }
  
  .menu li a {
    float: none;
    display: block;
    text-align: left;
  }
}

.menu {
  background-color: #333;
  overflow: hidden;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  float: left;
}

.menu li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.menu li a:hover {
  background-color: #111;
}

.menu li a.active {
  background-color: #4CAF50;
}

.menu li.right {
  float: right;
}

.menu li.right a {
  background-color: #f44336;
}

.menu li.right a:hover {
  background-color: #da190b;
}

.footer {
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
}

.container {
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}
</style>