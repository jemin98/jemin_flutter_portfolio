import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
var router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about/:index',
            name: 'about',
            component: function () { return import('../views/AboutView.vue'); }
        }
    ]
});
export default router;
//# sourceMappingURL=index.js.map