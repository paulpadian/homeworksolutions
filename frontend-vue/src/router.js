import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue';
import Profile from './views/Profile.vue'
import Submission from './views/Submission.vue'
import fallpage from './views/Fall.vue'


Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    //assignments => show all assignments for the current user
    // child route: submissions => all submissions for the current assignment
    {
      path: 'submission/:id?',
      name: 'submission',
      component: Submission
    },

    // {
    //   name: 'assignments',
    //   path: 'assignments',
    //   component: AssignmentList,
    //   children: [{
    //     path: '/submission/:id?',
    //     name: 'submission',
    //     component: Submission
    //   }, ],

    // },
    
    {
      name: '404',
      path: '*',
      component: fallpage
    }

  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});