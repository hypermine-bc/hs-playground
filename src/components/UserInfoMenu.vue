<template >
    <div role="img" class="q-img overflow-hidden absolute-top" style="height: 204px;">
        <div style="padding-bottom: 82.5195%;"></div>
        <div class="q-img__image absolute-full" style="background-image: url(&quot;https://cdn.quasar.dev/img/material.png&quot;); background-size: cover; background-position: 50% 50%;"></div>
        <div class="q-img__content absolute-full">
        <div class="absolute-bottom bg-transparent">
            <div class="q-avatar q-mb-sm" style="font-size: 56px;">
            <div class="q-avatar__content row flex-center overflow-hidden"><img src="https://cdn.quasar.dev/img/boy-avatar.png"></div>
            </div>
            <div class="text-weight-bold">{{name}}</div>
            <div>{{email}}</div>
            <!-- <div>{{$keycloak}}</div> -->
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserInfoMenu',
  data () {
    return {
      name: '',
      email: ''
    }
  },
  created () {
    console.log('this.$keycloak')
    // console.log(this.$keycloak.tokenParsed.email)
    this.email = this.$keycloak.tokenParsed.email
    this.name = this.$keycloak.tokenParsed.name
  }
}
</script>

<style>
</style>
