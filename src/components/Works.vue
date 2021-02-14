<template>
    <div id="works">
        <h2 class="font-weight-bold text-center pb-16">
            Works
        </h2>
        <v-card outlined class="mx-auto mb-8" v-for="(work, index) in works" :key="index">
            <v-container>
                <v-row justify="center" align="center">
                    <v-col md="4">
                        <v-img :src="work.imagePath" max-width="400px" position="center center" />
                    </v-col>
                    <v-col md="8">
                        <h2>{{ work.title }}</h2>
                        <h4 class="mb-2 font-weight-medium">{{ work.subtitle }}</h4>
                        <p><span v-html="work.description" /></p>

                        <v-row justify="center" align="center">
                            <v-col>
                                <a target="_blank" rel="noopener noreferrer" v-for="(link, index) in work.links" :key="index" :href="link.url">
                                <v-btn outlined depressed color="amber" class="mr-2">
                                    {{ link.title }}
                                </v-btn>
                                </a>
                            </v-col>
<!--                            <v-col align="right">-->
<!--                                <div>-->
<!--                                    <div v-for="(technique, index) in work.techniques" :key="index">-->
<!--                                        {{ technique }}-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </v-col>-->
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    import works from '../contents/works.js'

    export default {
        name: 'Works',

        data: () => {
            return {
                works: works,
            }
        }
    }
</script>

<style scoped>
 a {
     text-decoration: none;
 }
</style>
