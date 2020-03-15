<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <header class="header">
        <div class="header-container">
          <img src="/images/js-logo.png" alt class="header-img" />
          <a href="https://kaimnotark.github.io/LP_DEAB/" class="header-link" target="_blank">
            <span class="__capital">landing page</span>
            (open it on desktop)
          </a>
        </div>
      </header>

      <main class="main">
        <simplebar data-simplebar-auto-hide="false" class="main-table__body">
          <HelloWorld msg="Welcome to Your Vue.js App" />
        </simplebar>
      </main>

      <footer class="footer">
        <a href="https://kaimnotark.github.io/LP_DEAB/" class="footer-link" target="_blank">
          <span class="__capital">landing page</span>
          (open it on cell phone)
        </a>
      </footer>
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

%link-hover {
  content: "";
  position: absolute;
  bottom: -10px;
  width: 46%;
  height: 2px;
  background-color: $color-yellow-light;
}

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

.header {
  width: 100%;
  position: relative;

  &-container {
    display: flex;
    justify-content: space-between;
    padding: 15px 27px;
    background-color: $color-gray;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }

  &-img {
    user-select: none;
  }

  &-link {
    color: $color-white;
    font-size: 14px;
    height: 12px;
    margin-top: 12px;
    letter-spacing: 1px;
    text-decoration: none;
    position: relative;
  }

  &-link:hover::before {
    @extend %link-hover;
    right: 0;
  }

  &-link:hover::after {
    @extend %link-hover;
    left: 0;
  }

  &-link:hover {
    text-decoration: none;
    color: $color-yellow-main;
  }
}

.main {
  display: flex;
  justify-content: center;
  margin: 20px;
  height: calc(100vh - (115px + 50px));
  min-height: 370px;
}

.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 48px;
  background-color: $color-gray;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.3);

  &-link {
    color: $color-white;
    font-size: 14px;
    height: 12px;
    margin-top: 15px;
    letter-spacing: 1px;
    text-decoration: none;
    position: relative;
  }

  &-link:hover::before {
    @extend %link-hover;
    right: 0;
  }

  &-link:hover::after {
    @extend %link-hover;
    left: 0;
  }

  &-link:hover {
    text-decoration: none;
    color: $color-yellow-main;
  }
}
</style>
