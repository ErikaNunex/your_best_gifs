<template>
  <q-list>
    <q-item
      class="text-white hover:bg-blue-600 active:bg-blue-700"
      v-for="link in routerStore.linksList"
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
import { useRouterStore } from '../stores/routerStore';
const routerStore = useRouterStore();
</script>
