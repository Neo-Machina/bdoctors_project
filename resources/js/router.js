import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AdvancedSearch from './pages/AdvancedSearch.vue';
import SingleProfile from './pages/SingleProfile.vue';

//routing
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/advanced-search',
            name: 'advanced-search',
            component: AdvancedSearch
        },
        {
            path: '/single-profile/:slug',
            name: 'single-profile',
            component: SingleProfile
        },
    ]
});

export default router;