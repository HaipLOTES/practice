<template>
  <header>
    <Header />
  </header>

  <main>
    <SearchBar /> 
    <HeroCard />
  </main>

</template>

<script>
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import HeroCard from './components/HeroCard.vue'


export default{
  components: { Header, SearchBar, HeroCard }
}
</script>

<style scoped>

</style>