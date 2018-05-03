<template>
  <v-chip label :color="label.color">
    {{ label.title }}
  </v-chip>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    labelid: {
      required: true,
      type: [Number, String],
    },
  },
  data() {
    return {
      label: null,
    };
  },
  name: 'IdeaLabel',
  methods: {
    async fetchLabel() {
      const { data } = await axios.get(`http://localhost:4444/api/v1/labels/${this.labelid}`);
      this.label = data;
    },
  },
  mounted() {
    this.fetchLabel();
  },
};
</script>

<style scoped>
</style>
