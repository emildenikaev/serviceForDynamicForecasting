<template>
  <div id="app">
    <lctMainWrapper />
  </div>
</template>

<script>
import lctMainWrapper from "./components/lct-main-wrapper.vue";

export default {
  name: "App",
  components: { lctMainWrapper },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
}
p {
  font-family: "Roboto", sans-serif;
}
li {
  font-family: "Roboto", sans-serif;
}
</style>
