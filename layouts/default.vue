<template>
    <v-app dark>
        <v-toolbar fixed app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container>
                <nuxt/>
            </v-container>
        </v-content>
        <v-footer :fixed="fixed" app>
            <span>&nbsp; Armaldio &copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true,
        fixed: false,
        title: 'BulbHub',
      };
    },
  };
</script>
