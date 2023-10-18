<script setup>
import { Icon } from "@iconify/vue";
import { useToDoStore } from "../stores/ToDoStore";
const toDoStore=useToDoStore()
const { list} = defineProps({
  list: Object,

});
</script>
<template>
  <li>
    <Icon
      @click="toDoStore.changeStatus(list.id)"
      class="todo_item-list"
      :class="{ isActiveIcon: list.data }"
      icon="mdi:check-circle"
    />
    <div class="todo_task" :class="{ isActive: list.data }">
      {{ list.task }}
    </div>
    <Icon
      @click="toDoStore.removeUserTask(list)"
      class="todo_task_remove"
      icon="bi:trash"
    />
  </li>
</template>

<style scoped>
li {
  display: flex;
  height: 30px;
  font-size: 20px;
  padding: 10px 10px;
  padding-left: 7px;
  margin-left: 0px;
}

.todo_task_remove {
  margin-left: auto;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.todo_task_remove:hover {
  color: red;
}

.todo_task {
  margin-left: 20px;
  font-size: 20px;
}

.todo_item-list {
  width: 25px;
  height: 25px;
  cursor: pointer;

  transition: all 0.2s ease-out;
}

.isActive {
  text-decoration: line-through;
}

.isActiveIcon {
  color: rgb(194, 102, 222);
  transition: all 0.2s ease-out;
}
</style>
