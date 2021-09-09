<template>
  <div>
    <h1>Hello <world /></h1>    
  </div>
</template>

<script>
import World from './World'
export default {
  name: 'Hello',
  components:{
    world : World
  }
}
</script>