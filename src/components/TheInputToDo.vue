<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const props = defineProps({
   modelValue: String,
   addSomeTask: Function

})

const emits = defineEmits(['update:modelValue'])


const task = ref(props.modelValue)
const addSomeText = () => {

   if (task.value) {
      emits('update:modelValue', task.value)
      props.addSomeTask()

      task.value = ""
   }
   else return 0

}


</script>
<template>
   <div className="todo__add-todoes">
      <input v-model="task" @keyup.enter="addSomeText" type="text" placeholder="Введіть назву завдання">
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
   transition: all 0.3s ease-out
}

.iconPlus:hover {
   color: rgb(194, 102, 222);
}
</style>