// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'
import fbConfig from '../firebaseConfig'

Vue.config.productionTip = false

firebase.initializeApp(fbConfig);

/* eslint-disable no-new */
let app;
firebase.auth().onAuthStateChanged( function(user) {
  if ( !app ) {
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    });
  }
  
});

