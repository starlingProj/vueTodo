import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useToDoStore = defineStore('todoStore',()=>{
    const todoList = ref([]);
    const addSomeTask = (userTask) => {
        todoList.value.push({
          id: Date.now(),
          task: userTask,
          data: false,
        });
      };
    const changeStatus = (id) => {
        const itemToUpdate = todoList.value.find((item) => item.id === id);
        itemToUpdate.data = !itemToUpdate.data;
      };
      const removeUserTask = (list) => {
        todoList.value = todoList.value.filter((item) => item != list);
      };
      return{
        todoList,
        addSomeTask,
        changeStatus,
        removeUserTask
      }

})