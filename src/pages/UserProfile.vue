<template>
  <div>
    <h1 class="title">User {{ $route.params.id }}</h1>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import axios from "axios"
const url = "https://jsonplaceholder.typicode.com/users"

export default {
  async mounted() {
    try {
      const res = await axios.get(url + "/" + this.$route.params.id)
      this.user = res.data
    } catch ({ message }) {
      console.log(message)
    }
  },

  data() {
    return {
      user: {},
    }
  },
}
</script>
