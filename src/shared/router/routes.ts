import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./../../modules/gifs/pages/HomePage.vue'),
    meta: {
      title: 'Home',
      caption: 'GIFs trending',
    },
  },
  {
    path: '/favoritos',
    component: () => import('./../../modules/gifs/pages/FavoritePage.vue'),
    meta: {
      title: 'Favoritos',
      caption: 'Seus favoritos',
    },
  },
  {
    path: '/categorias',
    component: () => import('./../../modules/gifs/pages/CategoriesPage.vue'),
    meta: {
      title: 'Categorias',
      caption: 'Explore categorias',
    },
  },
  {
    path: '/sobre',
    component: () => import('../../modules/developers/pages/AboutPage.vue'),
    meta: {
      title: 'Sobre',
      caption: 'Sobre o desenvolvedor',
    },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('./../pages/ErrorNotFound.vue'),
    meta: {
      title: 'Página não encontrada',
      caption: 'A página que você procura não existe',
    },
  },
];

export default routes;
