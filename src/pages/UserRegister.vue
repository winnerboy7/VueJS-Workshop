<template>
  <div>
    <h1 class="title">User Register</h1>

    <div class="columns">
      <div class="column is-1">Username:</div>
      <div class="column is-one-quarter">
        <div class="field">
          <input
            v-model="user.username"
            type="text"
            class="input"
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
            class="input"
            placeholder="Password"
          />
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-1">Name:</div>
      <div class="column is-one-quarter">
        <div class="field">
          <input
            v-model="user.name"
            type="text"
            class="input"
            placeholder="Name"
          />
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-1">Surname:</div>
      <div class="column is-one-quarter">
        <div class="field">
          <input
            v-model="user.surname"
            type="text"
            class="input"
            placeholder="Surname"
          />
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-1">Role:</div>
      <div class="column is-one-quarter">
        <div class="control select">
          <select v-model="user.role">
            <option value="Admin">Admin</option>
            <option value="Area">Area</option>
            <option value="User" selected>User</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Role: <input v-model="user.role" type="text" class="input" placeholder="Role"/> -->
    <hr />

    <div class="columns">
      <div class="column is-1">
        <div class="field">
          <button @click="registerUser()" class="button is-info">Submit</button>
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
        <div v-if="message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
// const url = "https://jsonplaceholder.typicode.com/users"
const url = "http://localhost:3000/users/register"

export default {
  data() {
    return {
      user: {},
      message: "",
    }
  },

  methods: {
    async registerUser() {
      console.log(url)
      try {
        const res = await axios.post(
          url,
          this.user,
          this.$store.getters.axiosOption
        )
        console.log(res.data)

        this.$router.push({ path: "/user" })
      } catch ({ message }) {
        this.message = `Error! : ${message}`
        console.log(message)
      }
    },
  },
}
</script>
