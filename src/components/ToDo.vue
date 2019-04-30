<template>
  <div class="col-md-12 mx-auto mt-5 jumbotron">
    <div class="list-group" v-if="tasks.length > 0">
      <template v-for="task in tasks">
        <Task :key="task.id" :task="task"/>
      </template>
    </div>
    <h2 v-else class="text-center">Empty</h2>
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
  }
};
</script>

<style lang="scss" scoped>
</style>