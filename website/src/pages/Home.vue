<template>
    <v-layout justify-center align-center>
        <v-flex xs12>
            <IdeaLoader v-if="loading" v-for="i in 5" :key="i">{{ i }}</IdeaLoader>
            <IdeasList :items="items"></IdeasList>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios';
import IdeasList from '@/components/IdeasList';
import IdeaLoader from '@/components/ContentLoaders/IdeaLoader';

export default {
  components: {
    IdeasList,
    IdeaLoader,
  },
  created() {
    this.fetchIdeas();
  },
  methods: {
    async fetchIdeas() {
      const { data } = await axios.get('http://localhost:4444/api/v1/ideas');
      this.items = data;
      this.loading = false;
    },
  },
  data() {
    return {
      loading: true,
      items: [],
    };
  },
};
</script>
