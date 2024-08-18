import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./../../modules/gifs/pages/HomePage.vue'),
  },
  {
    path: '/favoritos',
    component: () => import('./../../modules/gifs/pages/FavoritePage.vue'),
  },
  {
    path: '/categorias',
    component: () => import('./../../modules/gifs/pages/CategoriesPage.vue'),
  },
  {
    path: '/sobre',
    component: () => import('./../../modules/developers/pages/AboutPage.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('./../pages/ErrorNotFound.vue'),
  },
];

export default routes;
