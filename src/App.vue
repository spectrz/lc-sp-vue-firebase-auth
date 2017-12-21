<!-- <template>
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
</template> -->

<template lang="pug">
  #app.container
    .panel.panel-default
      .row
        .col-sm-6
          ul.nav.nav-pills
            li 
              
              router-link(to="/hello") 
                a Hello
            li 
              router-link(to="/todo")
                a Todo
            li
              router-link(to="/about")
                a About
        .col-sm-6
          ul.nav.nav-pills.pull-right(v-show="!isLoggedIn")
            li 
              router-link(to="/login")
                a Login
            li 
              router-link(to="/sign-up")
                a Signup
          ul.nav.nav-pills.pull-right(v-show="isLoggedIn")
            li 
              a(v-on:click="logout") Logout

    img(src="./assets/logo.png")
    | {{isLoggedIn}}
    router-view
</template>

<script>
import frb from '../firebaseMod'

let userlog;// = firebase.auth().user != null;

export default {
  name: 'app',
  data () {
        return {
            isLoggedIn: userlog
        }
    },
  created() {
    
    frb.auth().onAuthStateChanged( (user) => {
      if ( user ) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    logout: function() {
      frb.auth().signOut().then( () => {
        this.$router.replace('login');
      });
    }
  }
}

// frb.auth().onAuthStateChanged( (user) => {
//     if ( user ) {
//         userlog = true;
//     } else {
//         userlog = false;
//     }
// });

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
