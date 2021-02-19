<template>
    <div id="history">
        <h2 class="font-weight-bold text-center pb-16">
            History
        </h2>
        <v-stepper vertical class="elevation-0" id="stepper" v-for="(event, index) in events" :key="index">
            <v-stepper-step :complete="true" :step="1" color="amber">
                <body class="mb-2">{{ event.date }}</body>
                <h3>{{ event.title }}</h3>
            </v-stepper-step>
            <v-stepper-content :step="1">
                <h4 class="font-weight-medium" id="description"><span v-html="event.description" /></h4>
<!--                <v-btn dark depressed color="amber" v-if="event.hasWork">詳細↓</v-btn>-->
            </v-stepper-content>
        </v-stepper>
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
