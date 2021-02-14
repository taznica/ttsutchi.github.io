<template>
  <v-app>
    <Index />
  </v-app>
</template>

<script>
  import Index from './views/Index.vue';

  export default {
    name: 'App',

    components: {
      Index,
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

  #app {
    font-family: 'Lato', sans-serif;
    background-color: #FFFFF9;
    color: #0F0F0F;
  }

  a.primary--text {
    color: #0F0F0F !important;
  }

</style>
