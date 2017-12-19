<template>
    <div class="sign-up">
        <p>Let's create a new account</p>
        <input type="text" v-model="email" placeholder="Email">
        <input type="text" v-model="password" placeholder="Password">
        <br>
        <button v-on:click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login.</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'

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
            firebase.auth().createUserWithEmailAndPassword( this.email, this.password)
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