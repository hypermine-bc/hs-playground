<template >
  <div class="main-container">
    <div class="text-accent-container">
      <h5 class="text-accent">You accessed this page using Hypersign</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CopyRight',
  data () {
    return {}
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
h1 h5{ padding:0; margin: 0 }
.main-container{
  padding-top: 10%;
  padding-bottom: 10%;
}
.text-secondary{
  margin: 0 !important;
  font-size: 285%;
  font-weight: 900;
  line-height:1 !important;
  letter-spacing: 0.01562em !important;
  font-family: 'Oswald', sans-serif;
}
.text-accent-container{
  width: 70%;
  padding-top: 3%;
}
.text-accent{
  margin: 0 !important;
  font-size: 1.125rem;
  font-weight: 900;
  line-height:1.5 !important;
  letter-spacing: 0.01562em !important;
}
</style>
