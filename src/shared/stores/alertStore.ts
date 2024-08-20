import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAlertStore = defineStore('alertStore', () => {
  const isVisible = ref(false);
  const type = ref<'danger' | 'success' | 'info'>('info');
  const message = ref('');

  function showAlert(
    alertType: 'danger' | 'success' | 'info',
    alertMessage: string
  ) {
    type.value = alertType;
    message.value = alertMessage;
    isVisible.value = true;
  }

  function closeAlert() {
    isVisible.value = false;
  }

  return {
    isVisible,
    type,
    message,
    showAlert,
    closeAlert,
  };
});
