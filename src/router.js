import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SinglePrjctPage from './pages/SinglePrjctPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
        routes: [
            {
            path: '/',
            name: 'home',
            component: HomePage
            },
            {
                path: '/projects',
                name: 'projects',
                component: ProjectsPage
            },
            {
                path: '/projects/:id',
                name: 'singleProject',
                component: SinglePrjctPage
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'notFound',
                component: NotFoundPage
            }
        ]
    });
export { router };