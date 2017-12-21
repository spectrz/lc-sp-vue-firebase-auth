<!-- <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    User: {{user.email}}
    <br>
    Uid: {{user.uid}}
    <br>
    Last Login: {{user.metadata.lastSignInTime}}
    <br>
    <button v-on:click="logout">Logout</button>
    <pre>{{user}}</pre>
    
  </div>
</template> -->

<template lang="pug">
  .hello
    h1 {{msg }}
    .panel.panel-default
      .panel-heading
        | Welcome
      .panel-body
        label User:
        span {{user.email}}
        br
        label Uid:
        span {{user.uid}}
        br
        label Last Login:
        span {{user.metadata.lastSignInTime}}
        br
        button(v-on:click="logout") Logout
    pre {{user}}
</template>

<script>
//import firebase from 'firebase'
import frb from '../../firebaseMod'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: frb.auth().currentUser
    }
  },
  methods: {
    logout: function() {
      frb.auth().signOut().then( () => {
        this.$router.replace('login');
      });
    }
  }
}

//console.log(frb.auth().currentUser);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.panel-body, pre {
  text-align: left;
}

</style>
