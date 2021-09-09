<template>
  <div>
    <section class="section">
      <div class="container">
        <navbar />
        <hr>
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar'

export default {
  components: {
    navbar: Navbar
  }, 
}
</script>