<template>
  <webapp-header />
  <router-view/>
  <webapp-footer />
  <messageModal />
</template>

<style lang="scss">
* {
  margin:0;
  padding:0;
}
</style>

<script>
import webappHeader from './components/webappHeader.vue'
import webappFooter from './components/webappFooter.vue'
import messageModal from './components/messageModal.vue'

export default {
  components: { webappHeader, webappFooter, messageModal },
  name: 'App',

  comments: {
    'webapp-header':webappHeader,
    'webApp-footer':webappFooter,
    'messageModal':messageModal
  },

  data() {
    return {
      
    }
  },
}
</script>
