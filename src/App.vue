<template>
  <div class="content"></div>
  <router-link to="/" class="nav-link active" aria-current="page"
    >Home</router-link
  >
  <router-link to="/video" class="nav-link active" aria-current="page"
    >vidoe</router-link
  >
  <router-link to="/" class="nav-link active" aria-current="page"
    >Poiskus</router-link
  >
  <router-view> </router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
