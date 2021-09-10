<template>
  <div>
    <section class="section">
      <div class="container">
        <navbar />
        <hr />
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import "bulma/css/bulma.min.css"
import Navbar from "./components/Navbar"

export default {
  components: {
    navbar: Navbar,
  },

  async mounted() {
    // const token = localStorage.getItem("token")
    // if (!this.$store.state.token) {
    //   console.log("Test", this.$store.state.token)
    //   await this.$store.commit("mutateToken", token)
    // }
  },
}
</script>
