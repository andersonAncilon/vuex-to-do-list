<template>
  <div class="col-md-12 mx-auto mt-5 jumbotron">
    <div class="list-group">
      <template v-for="task in tasks">
        <Task :key="task.id" :task="task"/>
      </template>
    </div>
  </div>
</template>

<script>
import Task from "./Task";

export default {
  components: {
    Task
  },
  props: {
    tasks: undefined
  },
  mounted() {
    console.log(this.tasks);
  }
};
</script>

<style lang="scss" scoped>
</style>