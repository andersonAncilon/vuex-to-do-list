<template>
  <li
    class="list-group-item list-group-item-action"
    id="list-home-list"
    data-toggle="list"
    aria-controls="home"
  >
    <strong style="font-size: 25px">{{ task.content }}</strong>
    <button class="float-right btn btn-danger ml-2">
      <i style="fontSize: 20px" class="fas fa-times"/>
    </button>
    <button class="float-right btn btn-success">
      <i style="fontSize: 20px" class="fas fa-undo uncheck-effect text-white"/>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    task: {}
  }
};
</script>

