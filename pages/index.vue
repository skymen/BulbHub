<template>
    <v-layout justify-center align-center>
        <v-flex xs12>
            <IdeasList :items="items"></IdeasList>
        </v-flex>
    </v-layout>
</template>

<script>
  import axios from 'axios';
  import IdeasList from '../components/IdeasList.vue';

  export default {
    components: {
      IdeasList,
    },
    async asyncData() {
      const { data } = await axios.get('http://localhost:4444/api/v1/ideas');
      return { items: data };
    },
    data() {
      return {
        items: [],
      };
    },
  };
</script>