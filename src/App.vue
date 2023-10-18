<script setup>
import { ref } from "vue";
import TheInputToDo from "./components/TheInputToDo.vue";
import TheLogoTextToDo from "./components/TheLogoTextToDo.vue";
import Task from "./components/Task.vue";
import { useToDoStore } from "./stores/ToDoStore";


const toDoStore=useToDoStore()

</script>

<template>
  <div class="todo">
    <TheLogoTextToDo />
    <TheInputToDo />
    <ul>
      <Task
        v-for="list in toDoStore.todoList"
        :key="list.id"
        :list="list"
      />
    </ul>
  </div>
</template>

<style scoped>
.todo {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 600px;

  flex-direction: column;
  background-color: #ffffff;
  border: 4px solid rgb(194, 102, 222);
  box-shadow: 1px 1px 5px whitesmoke;
}

::-webkit-scrollbar {
  width: 1px;
}
ul {
  overflow: auto;
  scrollbar-width: thin;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
