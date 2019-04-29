<template>
  <div class="mt-5">
    <h2 class="display-4 text-primary mb-5 text-center">To do list</h2>
    <InsertForm/>
    <ToDo :tasks="toDo"/>
  </div>
</template>

<script>
import InsertForm from "../components/InsertForm";
import ToDo from "../components/ToDo";

import { mapGetters } from "vuex";

export default {
  components: {
    InsertForm,
    ToDo
  },
  computed: {
    ...mapGetters(["toDo"])
  }
};
</script>

<style lang="scss" scoped>
</style>