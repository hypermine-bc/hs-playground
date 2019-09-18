<template>
  <div class="q-pa-md lyt-pd">
    <div class="row">
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
  </div>
</template>

<style>
</style>

<script>
import LandingLogo from 'components/LandingLogo.vue'
import LandingBgImage from 'components/LandingBgImage.vue'
import LandingButton from 'components/LandingButton.vue'
import LandingTextContent from 'components/LandingTextContent.vue'

export default {
  name: 'PageIndex',
  components: {
    LandingLogo,
    LandingBgImage,
    LandingButton,
    LandingTextContent
  }
}
</script>
<style scoped>
  .lyt-pd{
    padding: 5% 0% 0% 10%;
  }
</style>
