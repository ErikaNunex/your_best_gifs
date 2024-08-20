<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Your Best GIFs</q-toolbar-title>
        <div class="q-mr-md">Erika Nunes</div>
        <div class="q-mx-md">
          <q-avatar>
            <img src="https://picsum.photos/id/237/200/300" alt="Avatar" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      show-if-above
      bordered
      :style="{ backgroundColor: '#000f38' }"
    >
      <SideBarComponent />
    </q-drawer>

    <q-page-container>
      <div class="bg-gray-200 p-4">
        <h1 class="text-xl font-bold text-gray-800">{{ routerStore.title }}</h1>
        <p class="text-gray-600 mb-6">{{ routerStore.caption }}</p>
        <main>
          <router-view />
        </main>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRouterStore } from './shared/stores/routerStore';
import SideBarComponent from './shared/components/SideBarComponent.vue';

const leftDrawerOpen = ref(false);
const routerStore = useRouterStore();
const route = useRoute();

watch(
  () => route.meta,
  (meta) => {
    const title = (meta.title as string) || '';
    const caption = (meta.caption as string) || '';
    routerStore.setPage(title, caption);
  },
  { immediate: true }
);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
