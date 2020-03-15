<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <simplebar data-simplebar-auto-hide="false" class="main-table__body">
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </simplebar>
    </div>
  </div>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    simplebar,
    HelloWorld
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

@import "./stylesheets/variables.scss";
@import "./stylesheets/resets.scss";

$font-family-primary: "Roboto", "Verdana", "Arial", sans-serif;

// begin -- styling the scroll bar --
.simplebar-scrollbar:before {
  background-color: #8ea4b5;
}

.simplebar-scrollbar.simplebar-visible:hover::before {
  opacity: 1;
}

.simplebar-track.simplebar-vertical {
  background-color: $color-white;
}

// end -- styling the scroll bar --

html {
  scroll-behavior: smooth;
  overflow: hidden;
}

.wrapper *,
.wrapper *::before,
.wrapper *::after {
  box-sizing: border-box;
}

body {
  font-family: $font-family-primary;
  box-sizing: border-box;
}

.wrapper {
}

#app {
  font-family: $font-family-primary;
}
</style>
