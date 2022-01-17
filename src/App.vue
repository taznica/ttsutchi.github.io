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
  #app {
    background-color: #FFFFF9;
    color: #0F0F0F;
    margin: 0 auto;
  }

  @media screen and (max-width: 960px) {
    #app {
      width: 100%;
    }
  }

  a.primary--text {
    color: #0F0F0F !important;
  }

</style>
