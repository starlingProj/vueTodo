<script setup>
import { Icon } from '@iconify/vue';
import {ref} from 'vue'
let id=0;
const todoList = ref([])
const userTask = ref('')
const changeStatus = (id)=>{
  
    const itemToUpdate = todoList.value.find(item => item.id === id);
     itemToUpdate.data = !itemToUpdate.data;

}
const addSomeTask = ()=>{
    !userTask.value? 0
    :todoList.value.push({
        id:id++,
        task:userTask.value,
        data:false
    })
    userTask.value=""
}
const removeUserTask = (list)=>{
    todoList.value= todoList.value.filter(item=> item!=list)
   
}
</script>

<template>
    <div class="todo">
        <div className="todo__name">
            <h4>СПИСОК ЗАВДАНЬ</h4>
        </div>
        <div className="todo__add-todoes">
            <input 
            @keyup.enter="addSomeTask"
            v-model="userTask"
             type="text" 
             placeholder="Введіть назву завдання">
            <Icon 
            @click="addSomeTask"
           
            class="iconPlus" 
            icon="typcn:plus" />
        </div>
        <ul >
            <li v-for="list in todoList" :key="id">
                <Icon
                @click = "changeStatus(list.id)"
                class="todo_item-list" 
                :class="{'isActiveIcon':list.data}"
                icon="mdi:check-circle"
             />
                
                
                <div 
                class="todo_task"
                :class="{'isActive': list.data }">
                    {{list.task}}
                </div>
                <Icon @click="removeUserTask(list)" class="todo_task_remove" icon="bi:trash" />
            </li>
            
            
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

.todo__name {
    color: #f4f4f4;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(194, 102, 222);
    
}

.todo__name H4 {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: bolder;
    letter-spacing: 2px;
    color: #e2dbc1
}

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
    transition:all 0.3s ease-out
}

.iconPlus:hover {
    color: rgb(194, 102, 222);
}
::-webkit-scrollbar{
    width: 1px;
}
ul {
    overflow: auto;
    scrollbar-width:thin;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;

}

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
    transition:all 0.3s ease-out

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
    
    transition:all 0.2s ease-out
}
.todo_item-list:hover {
    color: rgb(194, 102, 222);
    
}
.isActive{
    text-decoration: line-through;
}
.isActiveIcon{
    color: rgb(194, 102, 222);
    transition:all 0.2s ease-out
}
.isActiveIcon:hover{
    color: rgb(194, 102, 222);
}
</style>

