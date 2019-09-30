<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a class="navbar-brand" href="#">NestJS + VueJS</a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Tasks</a> -->
            <router-link 
              tag="a"
              class="nav-link"
              to="/tasks"
            >Tasks</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown" v-if="username">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{username}}</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <!-- <a class="dropdown-item" href="#">Logout</a> -->
              <router-link 
                tag="a"
                class="dropdown-item"
                to="/login"
              >Logout</router-link>
            </div>
          </li>
          <li class="nav-item dropdown" v-if="!username">
            <router-link 
                tag="a"
                class="dropdown-item"
                to="/login"
              >Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:''
    }
  },
  methods:{
    // getUser(){
    //   this.username = sessionStorage.getItem('username');
    // }
  },
  mounted(){
    if(sessionStorage.username){
      this.username = sessionStorage.username
    }
  }
}
</script>

<style>

</style>