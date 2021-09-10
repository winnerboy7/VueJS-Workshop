<template>
  <div>
    <h1 class="title">User: {{ $route.params.username }}</h1>
    <!-- <p>
      <button class="button" @click="getUsers()">Get Users</button>
    </p> -->
    <table class="table">
      <tr>
        <th>UserName</th>
        <th>Name</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
      <tr v-for="each in users" :key="each.username">
        <td>{{ each.username }}</td>
        <td>
          <router-link :to="'/user/' + each.username" class="navbar-item">{{
            each.name
          }}</router-link>
        </td>
        <td>{{ each.role }}</td>
        <td>
          <div class="buttons">
            <router-link
              :to="'/user/edit/' + each.username"
              class="button is-warning"
              >Edit</router-link
            >
            <button @click="deleteUser(each.username)" class="button is-danger">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </table>

    <hr />
    <!-- <p>token: {{ $store.state.token }}</p> -->
    <pre>token: {{ $store.getters.axiosOption }}</pre>

    <div v-if="message">
      {{ message }}
    </div>

    <!-- <pre>
      {{ users }}
    </pre> -->
  </div>
</template>

<script>
import axios from "axios"
// const url = "https://jsonplaceholder.typicode.com/users"
const url = "http://localhost:3000/users"
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjMxMjUzNzEzLCJleHAiOjE2MzEyNjA5MTN9.g1XAiTC0dTqqW1H5Zn1rORxspXGELR3O_HX7nyEUN_g"
// const option = {
//   headers: {
//     authorization: "bearer " + token,
//   },
// }

export default {
  mounted() {
    this.getUsers()
  },

  data() {
    return {
      users: [],
      message: "",
    }
  },

  methods: {
    async getUsers() {
      try {
        const res = await axios.get(url, this.$store.getters.axiosOption)
        this.users = res.data
        this.message = ""
      } catch ({ message }) {
        this.message = `Error! : ${message}`
        console.log(message)
      }
    },

    async deleteUser(id) {
      try {
        const ok = confirm("Are you sure you wat to delete user" + id + "?")
        if (ok) {
          const res = await axios.delete(
            `${url}/${id}`,
            this.$store.getters.axiosOption
          )
          console.log(res.data)
          this.getUsers()
        }
      } catch ({ message }) {
        this.message = `Error! : ${message}`
        console.log(message)
      }
    },
  },
}
</script>
