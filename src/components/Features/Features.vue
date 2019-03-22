<template>
<main class="features" id="features">
  <div class="features__container">
    <div class="left">
      <img src="../../assets/Features/product.png" alt="">
      <img src="../../assets/Features/circle.png" class="left_background">
    </div>
        
    <div class="right">
      <div class="icon">
        <img src="../../assets/Features/.png" alt="" class="icon__mark"/>
        <img src="../../assets/Features/Oval 3.png" alt=""/>
      </div>
      <div class="right__heading">
        <h2>Take your docs anywhere</h2>
      </div>
      <div class="right__paragraph">
        <p>Take your docs anywhereSave files on your computer, then access them on your phone from the road.<br/> Everything you keep in Dropbox is synced automatically to all your devices.</p>
      </div>

      <Cta>Buy Now</Cta>
    </div>
  </div>


  <div class="features__container">
    <div class="right">
      <div class="icon2">
        <img src="../../assets/Features/.png" alt="" class="icon__mark2"/>
        <img src="../../assets/Features/Oval 3.png" alt=""/>
      </div>
      <div class="left__heading">
        <h2>Work on slides together</h2>
      </div>
      <div class="left__paragraph">
        <p>Take your docs anywhereSave files on your computer, then access them on your phone from the road. <br/>Everything you keep in Dropbox is synced automatically to all your devices.</p>
      </div>
    
      <Cta>Buy Now</Cta>
    </div>
    
    <div class="left">
      <img src="../../assets/Features/product.png" alt="">
    </div>
    </div>
</main>
</template>
<style scoped>
.features {
  margin-bottom: 8rem;
}

.features__container, .features__container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.left {
    position: relative;
    margin: 0 10rem;
}

.left_background {
    position: absolute;
    top: 10rem;
    left: 14rem;
    z-index: -1;
}

.right {
    width: 27%;
    margin: 0 10rem;
}

.right__heading, .left__heading {
    font-size: 1.6rem;
    margin-bottom: 1rem;
}

.right__paragraph, .left__paragraph {
    font-size: 1.35rem;
}

.icon {
    position: absolute;
    right: 56rem;
    top: 12rem;
}

.icon__mark {
    position: absolute;
    top: 1.6rem;
    left: 3rem;
}

.icon2 {
    position: absolute;
    top: 12rem;
    left: 24rem;
}

.icon__mark2 {
    position: absolute;
    top: 2rem;
    left: 3rem;
}

</style>