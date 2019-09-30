<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Tasks from './components/Task.vue'
export default {
  name: 'app',
  components: {
    Dashboard,
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
