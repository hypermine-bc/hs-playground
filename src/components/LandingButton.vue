<template >
  <q-btn
    align="between"
    class="btn-fixed-width"
    color="secondary"
    label="Go Play"
    @click="goToDashboard"
    size="md"
    :ripple="{ color: 'yellow' }"
  />
</template>

<script>
export default {
  name: 'CopyRight',
  data () {
    return {}
  },
  methods: {
    goToDashboard () {
      alert('sss')
      console.log('I am in Dashboard')
      this.$router.push('dashboard')
    }
  }
}
</script>

<style>
</style>
