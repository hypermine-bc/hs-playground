<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer height-hint="98" class="footer-height landing-footer">
      <copyRight />
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import copyRight from 'components/CopyRight.vue'

export default {
  name: 'MyLayout',
  components: {
    copyRight
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
.landing-footer {
  background-color: #686969 !important;
}
</style>
