<template>
  <a class="content__button">
    <slot></slot>
  </a>
</template>
<style>

.content__button {
  padding: 1.4rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  margin-top: 3rem;
  font-size: 1.5rem;
  position: relative;
  background-color: black;
  box-shadow: 0 1rem 1.5rem rgba(0,0,0, .3);
  color: #fff;
}

</style>