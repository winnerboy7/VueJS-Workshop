<template>
  <div>
    <h1>Movie List</h1>
    <p>
      <input v-model="query" type="text" class="input" />
    </p>
    <p>{{ query }}</p>
    <hr />
    <!-- <movie-item v-for="movie in movies" :key="movie.id" :movie="movie" /> -->
    <div v-for="(row, idx) in chunkMovies" :key="idx" class="columns">
      <movie-item v-for="movie in row" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import _ from "lodash"
import MovieItem from "./MovieItem"
import { movies } from "../db.json"

export default {
  components: {
    "movie-item": MovieItem,
  },
  data() {
    return {
      movies: movies,
      query: "",
    }
  },
  computed: {
    chunkMovies() {
      const pattern = new RegExp(this.query, "i")
      const filterMovies = movies.filter((each) => {
        return pattern.test(each.title)
      })
      return _.chunk(filterMovies, 6)
    },
  },
}
</script>
