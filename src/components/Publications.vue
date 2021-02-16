<template>
    <div id="publications">
        <h2 class="font-weight-bold text-center pb-12">
            Publications
        </h2>
        <ul>
            <li class="mb-3" v-for="(publication, index) in publications" :key="index">
                <span v-html="publication" />
            </li>
        </ul>
    </div>
</template>

<script>
    import publications from '../contents/publications.js'

    export default {
        name: 'Publications',

        data: () => {
            return {
                publications: publications,
            }
        }
    }
</script>
