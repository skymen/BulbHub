<template>
  <v-chip label color="grey">
    <v-icon left>fas fa-exclamation-circle</v-icon>
    Issue
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
  name: 'GithubIssueLink',
};
</script>

<style scoped>

</style>
