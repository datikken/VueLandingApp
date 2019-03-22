<template>
<section class="global__container">
  <img src="../../assets/Global/background.png" class="background">
  <div class="content__heading">
      <h3>Our Global Features</h3>
  </div>
  <div class="items__container">
    <div class="item">
      <img src="../../assets/Global/.png" alt="">
      <h3 class="item__heading">Broadcast your research</h3>
      <p class="item__paragraph">Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
  </div>
    <div class="item">
      <img src="../../assets/Global/.png" alt="">      
      <h3 class="item__heading">Built for print</h3>
      <p class="item__paragraph">Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
    </div>
  <div class="item">
      <img src="../../assets/Global/.png" alt="">      
      <h3 class="item__heading">One page only</h3>
      <p class="item__paragraph">Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
  </div>
  <div class="item">
    <img src="../../assets/Global/.png" alt="">      
    <h3 class="item__heading">Job applications</h3>
    <p class="item__paragraph">Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.</p>
  </div>
  </div>
</section>
</template>

<style scoped>
.global__container {
    background-color: #2E87EC;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;
}

.background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.items__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 30rem;
}
.item {
  width: 35rem;
  padding: 0 5rem 5rem 5rem;
  color: #fff;
}
.item img {
  margin-bottom: 1rem;
}
.item__paragraph {
  font-size: 1.4rem;
}
.item__heading {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}
.content__heading {
  color: #fff;
  height: 5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>