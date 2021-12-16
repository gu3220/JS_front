<template>
<li     
        class="todo-item"
        :class="{ done: todo.isDone }"
      >
        <div class="title">
          {{ todo.title }}
        </div>
        <div class="actions">
          <input
            type="checkbox"
            class="checkbox"
            :checked="todo.isDone"
            @input="onCheckBoxInput(todo.id, todo.isDone)"
          />
          <button class="delete-btn" @click="onDeleteTodoClicked(todo.id)">x</button>
        </div>
      </li>
</template>
<script>
import { patchTodo, deleteTodo } from '@/netClient/todoService';
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {  
        async onCheckBoxInput(id, isDone) {
      try {
        await patchTodo({ id, isDone: !isDone });
        this.$emit("todo-updated", { message: "All is ok" });
      } catch (error) {
        console.error({ error });
        throw error;
      }
    },
    async onDeleteTodoClicked(id) {
      try {
        await deleteTodo(id);
        this.$emit("todo-deleted", { message: "All is ok" });
      } catch (error) {
        console.error({ error });
        throw error;
      }
    },
    }
}
</script>