<template>
    <div id="index" class="mt-6">
        <v-container>
            <About />
            <v-divider class="ma-6" />
            <History />
            <v-divider class="ma-6" />
            <Works />
            <v-divider class="ma-6" />
            <Publications />
        </v-container>
    </div>
</template>

<script>
    import About from '../components/About.vue';
    import History from '../components/History.vue';
    import Works from '../components/Works.vue';
    import Publications from '../components/Publications.vue';

    export default {
        name: 'Index',

        components: {
            About,
            History,
            Works,
            Publications,
        }
    };
</script>
