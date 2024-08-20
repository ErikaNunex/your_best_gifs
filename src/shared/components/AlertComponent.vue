<template>
  <q-card
    v-show="alertStore.isVisible"
    flat
    bordered
    class="fixed bottom-4 right-4 rounded-lg shadow-lg w-80"
  >
    <div :class="alertClass" class="p-4 relative">
      <div class="flex justify-center items-center">
        <h2 class="text-lg font-bold text-center">Atenção</h2>
        <div class="absolute top-2 right-2">
          <q-btn
            flat
            dense
            round
            icon="close"
            class="text-white"
            @click="closeAlert"
          />
        </div>
      </div>
      <p class="mt-4 text-center">
        {{ alertStore.message }}
      </p>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useAlertStore } from '../stores/alertStore';

const alertStore = useAlertStore();

const alertClass = computed(() => {
  switch (alertStore.type) {
    case 'danger':
      return 'bg-red-500 text-white';
    case 'success':
      return 'bg-green-500 text-white';
    case 'info':
      return 'bg-blue-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
});

const closeAlert = () => {
  alertStore.closeAlert();
};

watch(
  () => alertStore.isVisible,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        closeAlert();
      }, 3000);
    }
  }
);
</script>
