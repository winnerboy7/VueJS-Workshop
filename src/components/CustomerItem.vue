<template>
  <div>
    <h1>Customer : {{ customer }} Age:{{ age }} {{ x }}</h1>
  </div>
</template>

<script>
export default {
  name: "CustomerItem",
  props: {
    customer: {
      type: String,
      default: "Unknown",
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      x: "555",
    }
  },
}
</script>
