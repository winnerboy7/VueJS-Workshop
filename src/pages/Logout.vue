<template>
  <div>
    <button @click="logout()" class="button is_danger">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("mutateToken", "")
      this.$store.commit("mutateLoggedIn", false)
      localStorage.removeItem("token")
      this.$router.push("/login")
    },
  },
}
</script>
