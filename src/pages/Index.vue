<template>
  <div class="q-pa-md lyt-pd">
    <div class="row" v-if="!loggedin">
      <div class="col">
        <div class="row">
          <LandingLogo/>
        </div>
        <div class="row">
          <LandingTextContent/>
        </div>
        <div class="row">
          <LandingButton/>
        </div>
      </div>
      <div class="col">
        <LandingBgImage />
      </div>
    </div>
    <div class="" v-else >
       <!-- <UserInfoMenu/> -->
      <div class="row" style="text-align: center;">
        <div class="col">
          <h2 style="margin-top: 0px;"></h2>
        </div>
        <div class="col">
          <h2 style="margin-top: 0px;">SUCCESS!</h2>
        </div>
        <div class="col">
          <h2 style="margin-top: 0px;">
            <q-btn @click="isMenuActive=true">Open</q-btn>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
            <RegisterBgImage />
        </div>
        <div class="col">
          <RegisterLogo/>
        </div>
      </div>
      <div class="row" style="">
        <div class="col">
          <div class="name"><span style="text-transform: uppercase;font: bold" >{{name}}</span> has Accessed his page securily using <bold>Hypersign</bold> </div>
          <div>
            pubkey: {{pubkey}}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <transition name="slide-fade">
            <MenuHover v-if="isMenuActive" @closeMenu="isMenuActive=false"/>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import LandingLogo from 'components/LandingLogo.vue'
import MenuHover from 'components/MenuHover.vue'
import RegisterLogo from 'components/RegisterLogo.vue'
import LandingBgImage from 'components/LandingBgImage.vue'
import RegisterBgImage from 'components/RegisterBgImage.vue'
import LandingButton from 'components/LandingButton.vue'
import LandingTextContent from 'components/LandingTextContent.vue'
// import RegisterTextContent from 'components/RegisterTextContent.vue'
// import UserInfoMenu from 'components/UserInfoMenu.vue'

export default {
  name: 'PageIndex',
  components: {
    LandingLogo,
    LandingBgImage,
    LandingButton,
    LandingTextContent,
    MenuHover,
    RegisterLogo,
    RegisterBgImage
    // RegisterTextContent
    // UserInfoMenu
  },
  data () {
    return {
      name: '',
      pubkey: '',
      loggedin: false,
      isMenuActive: false,
      email: ''
    }
  },
  created () {
    console.log(this.$keycloak.authenticated, 'keycloak')
    // console.log(this.$keycloak.tokenParsed.email)
    if (this.$keycloak.authenticated) {
      this.email = this.$keycloak.tokenParsed.email
      this.name = this.$keycloak.tokenParsed.preferred_username
      this.pubkey = this.$keycloak.subject
      this.loggedin = this.$keycloak.authenticated
    }
  }
}
</script>
<style scoped>
  .lyt-pd{
    padding: 5% 0% 0% 10%;
  }
  .name {
    margin-top: 3%;
    font-size: 2rem;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal;
  }
  .slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
