<template>
  <About/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import About from "@/components/About.vue";

export default defineComponent({
  name: 'Index',
  components: {
    About,
  },
});
</script>
