<template>
  <q-layout view="lHh Lpr lFf">
        <q-header>
          <div class="q-pa-md">
              <q-btn-dropdown class="glossy l-btn" color="secondary" size="xs" label="Select Language">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>English</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Thai</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>Vietnami</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
        </q-header>
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
    openURL,
    onItemClick () {
      console.log('Clicked on an Item')
    }
  }
}
</script>

<style>
.landing-footer {
  background-color: #686969 !important;
}
.l-btn{
  float: right;
}
</style>
