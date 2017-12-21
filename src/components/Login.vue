<!--<template>
    <div class="login">
        <h3>Log In</h3>
        <input type="text" v-model="email" placeholder="Email">
        <input type="text" v-model="password" placeholder="Password">
        <br>
        <button v-on:click="login">Log In</button>
        <p>You don't have an account?  You can <router-link to="/sign-up">create one</router-link></p>
    </div>
</template>-->

<template lang="pug">
    .login
        .panel.panel-default
            .panel-heading
                h3 Log In
            .panel-body
                .form-group
                    label Email:
                    input(v-model="email").form-control
                .form-group
                    label Password:
                    input(v-model="password").form-control
                button(v-on:click="login") Log In
                p Don't have an account? 
                    router-link(to="/sign-up") Create one.
    
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user) {
                    alert("Sign In Success");
                    this.$router.replace('hello')
                }.bind(this),
                function(err) {
                    alert('Error: ' + err.message);
                }
            );
            
        }

    }
}
</script>

<style scoped>
.panel-body {
    text-align: left;
}
</style>