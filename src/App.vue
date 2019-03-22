<template>
  <div id="app">
    <Header/>
    <Banner/>
    <Features/>
    <Global/>
    <Pricing/>
    <Call/>
    <Partners/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Banner from './components/Banner/Banner.vue'
import Features from './components/Features/Features.vue'
import Global from './components/Global/Global.vue'
import Pricing from './components/Pricing/Pricing.vue'
import Call from './components/MainCall/Call.vue'
import Partners from './components/Partners/Partners.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Banner,
    Features,
    Global,
    Pricing,
    Call,
    Partners,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0 auto;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: "Stem";
  font-weight: 400;
  line-height: 1.6;
  min-height: 100vh;
}

@font-face {
  font-family: "Stem";
  src: url('./assets/base/fonts/Stem Text W03 Regular.ttf');
}

.banner {
  background-image: url('./assets/banner/background.png') 10% no-repeat;
}

</style>
