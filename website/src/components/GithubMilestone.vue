<template>
  <v-chip label color="grey">
    <v-icon left>fas fa-flag</v-icon>
    Milestone
  </v-chip>
</template>

<script>
export default {
  props: {
    to: {
      required: true,
      type: String,
    },
  },
  name: 'GithubMilestone',
};
</script>

<style scoped>

</style>
