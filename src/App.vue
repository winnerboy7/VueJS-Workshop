<template>
  <div>
    <movie-list />
    <!-- <day1 />
    <day2 /> -->
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import MovieList from './components/MovieList'
// import Day1 from './components/Day1'
// import Day2 from './components/Day2'

export default {
  components: {
    'movie-list': MovieList,
    // 'day1': Day1,
    // 'day2': Day2
  },
}
</script>