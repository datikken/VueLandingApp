<template>
<div class="banner">
  <img src="../../assets/banner/Oval.png" alt="Oval" class="oval">
  <img src="../../assets/banner/telephone.png" alt="" class="telephone">
</div>
</template>

<style>

.banner {
  background-image: url('../../assets/banner/background.png');
  height: 130vh;
  z-index: -2;
}

.oval {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    width: 45%;
}

.telephone {
  position: absolute;
  top: 14rem;
  right: 10rem;
}

</style>