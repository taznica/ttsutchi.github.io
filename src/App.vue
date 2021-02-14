<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';
  import Index from './views/Index.vue';

  @Component({
    components: {
      Index,
    }
  })

  export default class App extends Vue { }

</script>
