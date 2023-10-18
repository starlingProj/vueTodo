<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useToDoStore } from "../stores/ToDoStore";

const toDoStore = useToDoStore()

const userTask = ref("");
const addSomeText = () => {
  if (userTask.value.length > 93) {
    window.alert("Будь ласка введіть коротко ваше завдання");
  } else if (userTask.value) {
    toDoStore.addSomeTask(userTask.value)
    userTask.value = "";
  } else return 0;
};
</script>
<template>
  <div className="todo__add-todoes">
    <input
      v-model="userTask"
      @keyup.enter="addSomeText"
      type="text"
      placeholder="Введіть назву завдання"
    />
    <Icon @click="addSomeText" class="iconPlus" icon="typcn:plus" />
  </div>
</template>

<style scoped>
.todo__add-todoes {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
}

input {
  outline: none;
  border: none;
  font-size: 20px;
  padding: 10px 0px;

  flex: 1;
}

.iconPlus {
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.iconPlus:hover {
  color: rgb(194, 102, 222);
}
</style>
