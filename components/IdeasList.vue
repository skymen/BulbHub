<template>
    <div>
        <template v-for="item in items">
            <v-card class="white--text my-2" fluid :key="item.title">
                <v-container fluid grid-list-lg>
                    <v-layout row>
                        <v-flex xs1 class="pr-5 pl-3">
                            <v-layout column justify-center align-center>
                                <v-icon large>fas fa-sort-up</v-icon>
                                <span>{{ item.vote_up }}</span>
                                <span>{{ item.vote_down }}</span>
                                <v-icon large>fas fa-sort-down</v-icon>
                            </v-layout>
                        </v-flex>
                        <v-flex xs11>
                            <div>
                                <div class="headline">{{ item.title }}</div>
                                <div v-html="markdown(item.description)"></div>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </template>
    </div>
</template>

<script>
  import marked from 'marked';

  export default {
    props: ['items'],
    methods: {
      markdown(str) {
        return marked(str);
      },
    },
  };
</script>

<style>

</style>
