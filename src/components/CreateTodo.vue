<template>
    <section class="create-todo">
            <input class="name-todo" v-model="name" type="text" placeholder="Название дела"/>
            <button class="create-btn" @click = "onCreateTodoClicked" >Создать</button>
        </section>
</template>
<script>
import { createTodo } from '@/netClient/todoService';
export default {
    name: 'CreateTodo',
    data: () => ({
        name: "",
    }),
    methods: {  
        async onCreateTodoClicked() {
            try {
            const newTodo = await createTodo( this.name);
            if (newTodo) {
                this.name = '';
            }
            this.$emit('todo-created', {message: 'All is ok'});
            }catch (error) {
                console.error({ error});
                throw error;
            }
        },
    }
}
</script>