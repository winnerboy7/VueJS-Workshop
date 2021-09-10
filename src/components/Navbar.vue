<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a
          @click="active = !active"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="className">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/user" class="navbar-item">User</router-link>
        <router-link to="/user/register" class="navbar-item"
          >Register</router-link
        >
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
        <router-link to="/login" class="navbar-item" v-if="!isLogin"
          >Login</router-link
        >
        <router-link to="/logout" class="navbar-item" v-else
          >Logout</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },

  computed: {
    className() {
      return this.active ? "navbar-menu is-active" : "navbar-menu"
    },
    isLogin() {
      return this.$store.state.token ? true : false
    },
  },
}
</script>
