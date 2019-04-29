<template>
  <div class="col-md-8 mx-auto">
    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg">Task</span>
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        v-model="taskContent"
      >
      <button class="btn btn-success btn-lg ml-1" @click="handleTask()">Insert</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      task: {},
      taskContent: ""
    };
  },
  methods: {
    ...mapMutations(["setTask"]),
    handleTask() {
      let id = Math.random().toFixed(8);
      this.task = { id: id, content: this.taskContent, status: false };
      this.$store.commit("setTask", this.task);
    }
  }
};
</script>
