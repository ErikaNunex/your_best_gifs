<template>
  <div class="p-4 bg-white rounded-md shadow-lg">
    <div class="bg-gray-200 p-1 rounded-md">
      <q-img
        :src="props.gifUrl"
        class="w-full h-full object-cover rounded-md"
      />
    </div>
    <div class="flex justify-end mt-2">
      <q-btn
        icon="favorite"
        v-if="!props.isFavoritePage"
        @click="onButtonClick"
        class="text-red-500"
        flat
      />
      <q-btn
        icon="close"
        v-else
        @click="onButtonClick"
        class="text-gray-500"
        flat
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  gifUrl: {
    type: String,
    required: true,
  },
  isFavoritePage: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['button-click']);

function onButtonClick() {
  emit('button-click');
}
</script>

<style scoped></style>
