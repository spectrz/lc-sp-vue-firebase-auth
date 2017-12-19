// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'

import vuefire from 'vuefire'

Vue.config.productionTip = false
Vue.use(vuefire)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created() {
    
    firebase.auth().onAuthStateChanged( (user) => {
      if ( user ) {
        this.$router.replace('/hello');
      } else {
        this.$router.replace('/login');
      }
    });
  }
});
// let app;
// firebase.auth().onAuthStateChanged( function(user) {
//   if ( !app ) {
//     new Vue({
//       el: '#app',
//       router,
//       template: '<App/>',
//       components: { App }
//     });
//   }
  
// });

