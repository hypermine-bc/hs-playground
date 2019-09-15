<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <div class="row padding-top">

        </div>
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
      <div class="col bg-img">
        <LandingBgImage />
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import LandingBgImage from 'components/LandingBgImage.vue'
import LandingButton from 'components/LandingButton.vue'
import LandingLogo from 'components/LandingLogo.vue'
import LandingTextContent from 'components/LandingTextContent.vue'

export default {
  name: 'PageIndex',
  components: {
    LandingBgImage,
    LandingButton,
    LandingLogo,
    LandingTextContent
  }
}
</script>
<style scoped>
  .bg-img{
    text-align: center;
    padding: 3%;
  }
  .padding-top{
    padding: 4%;
  }
</style>
