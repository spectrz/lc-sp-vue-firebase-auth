<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br>
    User: {{user.email}}
    <br>
    Uid: {{user.uid}}
    <br>
    Last Login: {{user.metadata.lastSignInTime}}
    <pre>{{user}}</pre>
    <br>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: firebase.auth().currentUser
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then( () => {
        this.$router.replace('login');
      });
    }
  }
}

//console.log(firebase.auth().currentUser);
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
pre {
  text-align: left;
}
</style>
