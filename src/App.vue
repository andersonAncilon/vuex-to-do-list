<template>
  <div id="app" class="container">
    <Home/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Home from "./views/Home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>
