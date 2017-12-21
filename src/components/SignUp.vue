<!-- <template>
    <div class="sign-up">
        <p>Let's create a new account</p>
        <input type="text" v-model="email" placeholder="Email">
        <input type="text" v-model="password" placeholder="Password">
        <br>
        <button v-on:click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login.</router-link></span>
    </div>
</template> -->

<template lang="pug">
    .sign-up
        .panel.panel-default
            .panel-heading
                h3 Create a new account
            .panel-body
                .form-group
                    label Email:
                    input(v-model="email").form-control
                .form-group
                    label Password:
                    input(v-model="password").form-control
                button(v-on:click="signUp") Sign Up
                span or go back to 
                    router-link(to="/login") login.
</template>

<script>
//import firebase from 'firebase'
import frb from '../../firebaseMod'

export default {
    name: 'signup',
    data: function(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function() {
            frb.auth().createUserWithEmailAndPassword( this.email, this.password)
                .then(
                    function ( user ) {
                        alert('Account Created');
                        this.$router.replace('hello');
                    }.bind(this),
                    function (err) {
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