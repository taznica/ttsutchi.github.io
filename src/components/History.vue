<template>
    <div id="history">
        <h1 class="font-weight-bold text-center pb-8">
            History
        </h1>
<!--        <v-timeline dense class="pl-sm-8 pr-sm-8 pl-md-16 pr-md-16">-->
        <v-timeline>
            <v-timeline-item fill-dot small v-for="(event, index) in events" :key="index" :color="event.color">
                <h3 class="font-weight-medium" slot="opposite">
                    {{ event.date }}
                </h3>
                <template v-if="index%2===0">
                  <h2 class="mb-2">
                      {{ event.title }}
                  </h2>
                  <p v-html="event.description" />
                </template>
                <template v-else>
                  <h2 class="mb-2 text-right">
                    {{ event.title }}
                  </h2>
                  <p class="text-right" v-html="event.description" />
                </template>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
    import events from '../contents/events.js'

    export default {
        name: 'History',

        data: () => {
            return {
                events: events,
            }
        }
    }
</script>

<style scoped>
    #stepper  {
        background-color: #FFFFF9;
        color: #0F0F0F;
    }

    #description {
        line-height: 150%;
    }

    .v-stepper__step__step {
        align-items: start !important;
    }
</style>
