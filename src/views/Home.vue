<template>
  {{ message }}
</template>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Home',
  setup() {
    const message = ref('You are not logged in!');
    const store = useStore();

    onMounted(async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        const content = await response.json();

        await store.dispatch('setAuth', true);
      } catch (e) {
        await store.dispatch('setAuth', false);
      }
    });

    return {
      message,
    };
  },
};
</script>