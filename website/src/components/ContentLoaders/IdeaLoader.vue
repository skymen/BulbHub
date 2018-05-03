<template>
  <content-loader :height="80" :width="550" :speed="3"
                  primaryColor="#3c3c3c" secondaryColor="#938c8c">
    <rect x="92" y="10" rx="3" ry="3" width="350" height="6.4"/>
    <rect x="92" y="30" rx="3" ry="3" width="380" height="6.4"/>
    <rect x="92" y="50" rx="3" ry="3" width="200" height="6.4"/>
    <rect x="92" y="70" rx="3" ry="3" width="250" height="6.4"/>
    <rect x="31" y="18.27" rx="3" ry="3" width="0" height="0"/>
    <rect x="10" y="8.27" rx="3" ry="3" width="70" height="70"/>
  </content-loader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  components: {
    ContentLoader,
  },
};
</script>
