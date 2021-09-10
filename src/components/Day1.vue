<template>
  <div>
    <p v-if="active">Active</p>
    <p v-else>Not Active</p>
    <p v-for="(each, i) in numbers" :key="i">{{ each }}</p>
    <p>{{ price }}</p>

    <button @click="handleClick('Hi')">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      numbers: [1, 2, 3, 4, 5],
      price: 100,
    }
  },

  computed: {
    priceIncludeVat() {
      return this.price * 1.07
    },
  },

  methods: {
    handleClick(params, e) {
      console.log(params, e)
      console.log("Clicked")
      this.price = this.price * 5
    },
  },
}
</script>
