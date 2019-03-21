<template>
  <header class="navbar">
  <nav class="navbar-container">
    <div class="logo">
      <h1>Logo</h1>
    </div>
    <div class="menu-container">
      <ul class="menu">
        <li><a href="https://www.youtube.com/watch?v=cDvZaXzQezs" class="menu-item">Home</a></li>
        <li><a href="#features" class="menu-item">About</a></li>
        <li><a href="#" class="menu-item">Portfolio</a></li>
        <li><a href="#" class="menu-item">Contact</a></li>
      </ul>
    </div>
  </nav>
  <div class="content">
    <div class="content__heading">
      <h1>A Life In Design</h1>
    </div>
    <div class="content__paragraph">
      <p>You can have an art experience in front of a Rembrandt,or in front of a piece of graphic design.</p>
    </div>
  <div class="cta">
    <Cta>
      Get Started Now
    </Cta>
  </div>
  </div>
  <div class="clouds"></div>
  <div class="clouds1"></div>
  <div class="clouds2"></div>
</header>
</template>

<style>
.navbar {
  background-color: #2E87EC;
  color: #fff;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 2rem;
}

.logo {
  font-size: 2rem;
}

.menu {
  list-style: none;
  display: flex;
}

.menu-item {
  text-decoration: none;
  margin: 2rem;
  color: black;
  font-size: 1.5rem;
  color: #fff;
  position: relative;
  z-index: 99;
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

.banner {
  background-image: url('../../assets/banner/background.png');
  height: 135vh;
  z-index: -2;
}

.content {
  position: absolute;
  top: 28.6rem;
  left: 20rem;
}

.content__heading {
  font-size: 2.5rem;
}

.content__paragraph p {
  font-size: 1.5rem;
  width: 50%;  
}

.clouds, .clouds1, .clouds2 {
  position: absolute;
}

.clouds {
  background-image: url('../../assets/banner/background-layer1.png');
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 200px;
  left: 0;
  top: 88rem;
}

.clouds1 {
  background-image: url('../../assets/banner/background-layer2.png');
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 200px;
  left: 0;
  top: 85rem;
}

.clouds2 {
  background-image: url('../../assets/banner/background-layer3.png');
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 200px;
  left: 0;
  top: 80rem;
}

.cta {
  padding-top: 2rem;
}

</style>