<template>
  <div class="home-page">
    <CreateTodo @todo-created="onTodoCreated" />
    <div class="separator"><hr /></div>
    <ul class="todo-list">
        <TodoItem 
        v-for="todoItem in todoList"
        :key="todoItem.id"
        :todo="todoItem"
        @todo-updated="onTodo"
        @todo-deleted="onTodo"
        />
    </ul>
  </div>
</template>

<script>
import { fetchTodoList } from "@/netClient/todoService";
import CreateTodo from "@/components/CreateTodo.vue";
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "Homepage",
  components: {
    CreateTodo,
    TodoItem
  },
  data: () => ({
    todoList: [],
  }),
  created() {
    this.fetchTodoList();
  },
  methods: {
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
        throw error;
      }
    },
    onTodoCreated() {
      this.fetchTodoList();
    },
    onTodo() {
        this.fetchTodoList();
    }
  },
};
</script>
