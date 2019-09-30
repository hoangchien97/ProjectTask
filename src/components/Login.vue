<template>
  <!-- <login/> -->
  <div class="login">
    <md-card>
      <md-card-header>
        <div class="md-title">Material Design With Vue.js 2 Demo</div>
        <div class="md-subheader">by HoangChien</div>
        <div class="md-title">Login</div>
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
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
        <md-button class="md-raised md-primary" @click.prevent="handleLogin">Login</md-button>
        <p class="md-subheader">
          Don't have account ?
          <router-link tag="a" to="/register">Register</router-link>
        </p>
      </div>
    </md-card>
  </div>
</template>

<script>
import { HTTP } from "./../api/axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    handleLogin() {
      HTTP.post("/auth/signin", {
        username: this.username,
        password: this.password
      })
        .then(response => this.loginSuccessful(response))
        .catch(() => this.loginFailed());
    },
    loginSuccessful(res) {
      // console.log(res);
      if (!res.data.accessToken) {
        this.loginFailed();
        return;
      }
      localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
      sessionStorage.setItem('username', res.data.username);
      this.error = false;
      this.$router.push({name: 'dashboard'}) // redirect
    },
    loginFailed() {
      this.error = "Login failed!";
      delete localStorage.token;
    }
  }
};
</script>
  
<style scoped>
  .login{
    display: flex;
    align-items: center;
    justify-content: center
  }
  .alert-danger{
    color: red;
  }
</style>