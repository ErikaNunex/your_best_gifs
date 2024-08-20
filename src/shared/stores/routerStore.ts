import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useRouterStore = defineStore('RouterStore', () => {
  const title = ref<string>('');
  const caption = ref<string>('');
  const linksList: Array<{
    title: string;
    caption?: string;
    to: string;
    icon?: string;
  }> = [
    {
      title: 'Home',
      caption: 'GIFs trending',
      to: '/',
      icon: 'dashboard',
    },
    {
      title: 'Favoritos',
      caption: 'Seus favoritos',
      to: '/favoritos',
      icon: 'favorite',
    },
    {
      title: 'Categorias',
      caption: 'Explore categorias',
      to: '/categorias',
      icon: 'category',
    },
    {
      title: 'Sobre',
      caption: 'Sobre o desenvolvedor',
      to: '/sobre',
      icon: 'person',
    },
  ];
  function setPage(newTitle: string, newCaption: string) {
    title.value = newTitle;
    caption.value = newCaption;
  }
  return {
    title,
    caption,
    linksList,
    setPage,
  };
});
