<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff"   class="">
      <q-header elevated >
        <q-toolbar>
          <q-toolbar-title>Hypersign</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <UserInfoMenu />
      </q-drawer>
    </q-layout>
  </div>
</template>

<script>
import { openURL } from 'quasar'
import UserInfoMenu from 'components/UserInfoMenu.vue'

export default {
  name: 'MyLayout',
  components: {
    UserInfoMenu
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
