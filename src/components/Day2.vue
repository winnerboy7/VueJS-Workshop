<template>
  <div>
    <!-- <customer-item customer="Chaimongkol Khamkom" :age="18"/>
    <customer-item  :age="30"/> -->
    <customer-item
      v-for="(cust, i) in customers"
      :key="i"
      :customer="cust.name"
      :age="cust.age"
    />
    <!-- <p v-for="(cust, i) in customers" :key="i">{{ cust.name }} {{ cust.age }}</p> -->
  </div>
</template>

<script>
import CustomerItem from "./CustomerItem"
export default {
  components: {
    "customer-item": CustomerItem,
  },
  data() {
    return {
      customers: [
        { name: "John Doe", age: 50 },
        { name: "Chaimongkol", age: 18 },
        { name: "Apinan", age: 19 },
      ],
    }
  },
}
</script>
