import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import About from '@/components/About'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        noAuthOnly: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        noAuthOnly: true
      }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    }
  ]
})



router.beforeEach( (to, from, next ) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some( record => record.meta.requiresAuth );
  let requiresNoAuth = to.matched.some( record => record.meta.noAuthOnly );

  if ( requiresAuth ) {
    if ( currentUser ) {
      next();
    } else {
      next('/login');
    }
  } else {
    if( requiresNoAuth && currentUser ) {
      next('/hello');

    } else {
      next();
    }
  }
});


export default router
