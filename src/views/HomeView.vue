<template>
  <div>
    <heroPicture />
    <whatIKnow />
    <whoAmI />
  </div>
</template>

<script>
import heroPicture from '@/components/heroPicture.vue'
import whatIKnow from './../components/whatIKnow.vue'
import whoAmI from './../components/whoAmI.vue'

  export default {

    components: {
      'heroPicture':heroPicture,
      'whatIKnow':whatIKnow,
      'whoAmI':whoAmI
    },
    
  }
</script>

<style lang="scss" scoped>

</style>