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
  background-color: #6C63FF;
  box-shadow: 0 1.1rem 2rem rgba(108, 99, 255, .5);
  color: #fff;
}

</style>