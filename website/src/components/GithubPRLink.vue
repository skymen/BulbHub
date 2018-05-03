<template>
  <v-chip label color="grey">
    <v-icon left>fas fa-code-branch</v-icon>
    Pull request
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
  name: 'GithubPRLink',
};
</script>

<style scoped>

</style>
