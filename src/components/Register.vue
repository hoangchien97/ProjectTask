<template>
  <div>
      <h1>this is register page</h1>
      <div class="register">
        <md-card>
          <md-card-header>
            <div class="md-title">Material Design With Vue.js 2 Demo</div>
            <div class="md-subheader">by HoangChien</div>
            <div class="md-title">Register</div>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="user-name">Username</label>
                  <md-input name="user-name" v-model="username"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="password">Password</label>
                  <md-input type="password" name="password" v-model="password"></md-input>
                </md-field>
              </div>
            </div>
          </md-card-content>
          <div>
            <md-button class="md-raised md-primary" @click.prevent="handleRegister">Login</md-button>
            <p class="md-subheader">
              Don't have account ?
              <router-link tag="a" to="/register">Register</router-link>
            </p>
          </div>
        </md-card>
      </div>
  </div>
</template>

<script>
import {HTTP} from './../api/axios'
export default {
  name:"register",
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    handleRegister(){
      HTTP.post('/auth/signup',{
        username: this.username,
        password: this.password
      }).then(response => console.log(response))
      .catch(()=> console.log("Faild"))
    },
  }
}
</script>

<style scoped>
  .register{
    display: flex;
    align-items: center;
    justify-content: center
  }
</style>