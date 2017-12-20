<template>
  <div id="app" class="container">
    <router-link to="/sign-up">Sign Up</router-link>
    <router-link to="/login">Log In</router-link>
    <router-link to="/hello">Hello</router-link>
    <router-link to="/todo">Todo</router-link>
    <router-link to="/about">About</router-link>
    <br>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
