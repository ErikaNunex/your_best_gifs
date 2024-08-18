<template>
  <q-list>
    <!-- <q-item-label header> Essential Links </q-item-label> -->
    <q-item
      class="text-white hover:bg-blue-600 active:bg-blue-700"
      v-for="link in linksList"
      :key="link.title"
      :to="link.to"
      clickable
    >
      <q-item-section v-if="link.icon" avatar>
        <q-icon :name="link.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ link.title }}</q-item-label>
        <q-item-label class="text-white" caption>{{
          link.caption
        }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import { RouteRecordRaw } from 'vue-router';

const linksList: Array<{
  title: string;
  caption?: string;
  to: string;
  icon?: string;
}> = [
  {
    title: 'Home',
    caption: 'GIFs trending',
    to: '/', // Rota para a página inicial
    icon: 'dashboard',
  },
  {
    title: 'Favoritos',
    caption: 'Seus favoritos',
    to: '/favoritos', // Rota para a página de favoritos
    icon: 'favorite',
  },
  {
    title: 'Categorias',
    caption: 'Explore categorias',
    to: '/categorias', // Rota para a página de categorias
    icon: 'category',
  },
  {
    title: 'Sobre',
    caption: 'Sobre o desenvolvedor',
    to: '/sobre', // Rota para a página sobre
    icon: 'person',
  },
];
</script>
