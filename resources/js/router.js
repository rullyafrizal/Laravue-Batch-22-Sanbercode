import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//Define Route
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/donations',
            name: 'donations',
            component: () => import('./views/Donations.vue')
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: () => import('./views/Blogs.vue')
        },
        {
            path: '/campaign/:id',
            name: 'campaign',
            component: () => import('./views/Campaign.vue')
        },
        {
            path: '/campaigns',
            name: 'campaigns',
            component: () => import('./views/Campaigns.vue')
        },
        {
          path: '/verification',
          name: 'verification',
          component: () => import('./views/Verification.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('./views/Profile.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
          path: '/auth/social/:provider/callback',
          name: 'social',
          component: () => import('./views/Social.vue')
        },
        {
            path: '*',
            redirect: '/'
        }

    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
        let auth = JSON.parse(localStorage.getItem('equifund')).auth
        if (auth.user) {
            next();
        } else {
            alert('Access Restricted')
            next({ path: '/' });
        }
    }
    next();
});


export default router;
