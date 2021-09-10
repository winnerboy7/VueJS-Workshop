<template>
  <div>
    <h1 class="title">User Login</h1>
    <div class="columns">
      <div class="column is-1">Username:</div>
      <div class="column is-one-quarter">
        <div class="field">
          <input
            v-model="user.username"
            type="text"
            class="input is-rounded"
            placeholder="Username"
          />
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-1">Password:</div>
      <div class="column is-one-quarter">
        <div class="field">
          <input
            v-model="user.password"
            type="text"
            class="input is-rounded"
            placeholder="Password"
          />
        </div>
      </div>
    </div>

    <hr />

    <div class="columns">
      <div class="column is-1">
        <div class="field">
          <button @click="loginUser()" class="button is-info">Login</button>
        </div>
      </div>
      <div class="column is-1">
        <div class="field">
          <router-link to="/user" class="button is-danger">Cancel</router-link>
        </div>
      </div>
    </div>

    <hr />

    <div class="columns">
      <div class="column is-12">
        <div v-if="token">token: {{ token }}</div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <div v-if="message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
// const url = "https://jsonplaceholder.typicode.com/users"
const url = "http://localhost:3000/users/login"

export default {
  data() {
    return {
      user: {},
      token: "",
      message: "",
    }
  },

  methods: {
    async loginUser() {
      console.log(url)
      try {
        const res = await axios.post(url, this.user)
        this.token = res.data.token

        this.$store.commit("mutateToken", res.data.token)
        localStorage.setItem("token", res.data.token)
        this.$store.commit("mutateLoggedIn", true)
        this.message = "Login successed..."

        this.$router.push({ path: "/user" })
      } catch ({ message }) {
        this.message = `Error! : ${message}`
        console.log(message)
      }
    },
  },
}
</script>
