<template>
  <li
    class="list-group-item list-group-item-action"
    id="list-home-list"
    data-toggle="list"
    aria-controls="home"
  >
    <strong
      :style="`font-size: 25px; text-decoration: ${ task.status ? 'line-through' : '' }`"
    >{{ task.content }}</strong>
    <button class="float-right btn btn-danger ml-2" @click="$store.commit('deleteTask', task)">
      <i style="fontSize: 20px" class="fas fa-times"/>
    </button>
    <button
      :class="`float-right btn ${task.status ? 'btn-warning' : 'btn-success'}`"
      @click="$store.commit('changeTaskStatus', task)"
    >
      <i
        style="fontSize: 20px"
        :class="`fas ${ task.status ? 'fa-undo uncheck-effect' : 'fa-check check-effect' } text-white`"
      />
    </button>
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    task: {}
  },
  methods: {
    ...mapMutations(["changeTaskStatus", "deleteTask"])
  }
};
</script>

<style>
.check-effect {
  transform: rotate(360deg);
  transition: 0.5s;
}

.uncheck-effect {
  transform: rotate(-360deg);
  transition: 0.5s;
}
</style>

