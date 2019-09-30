<template>
  <div id="app" style="margin-top: 0">
    <Header/>
    <div class="container">
      <transition name="slide">
        <router-view> </router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Tasks from './components/Task.vue'
export default {
  name: 'app',
  components: {
    Header,
    Login,
    Register,
    Tasks
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
