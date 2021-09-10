<template>
  <div class="column">
    <img :src="'/images/' + movie.id + '.jpg'" :alt="movie.title" width="100" />
    <p>{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
  props: ["movie"],
}
</script>
