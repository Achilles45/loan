<template>
  <div id="app">
    <transition name="animate" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import '../src/styles/reset';
</style>
