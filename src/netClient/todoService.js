import http from '@/netClient/config';

export async function fetchTodoList() {
    try{
        const response = await http.get('/todos');
        return response.data?.todos || [];
    }catch (error) {
        console.error({ error})
        throw error;
    }
}
export async function doLogout() {
    try {
        const response = await http.post('/users/logout', {});
        localStorage.removeItem('accessToken');
        return response.data;
    }catch (error) {
        console.error({error})
        throw error;
    }
}

export async function patchTodo({id, isDone}) {
    try {
        const response = await http.patch('/todos/' + id, {
            isDone
        })
        return response?.data ?? {}
    }catch (error) {
        console.error({error})
        throw error;
    }
}

export async function createTodo(title) {
    try {
        const response = await http.post('/todos', {
            title
        })
        return response?.data ?? {}
    }catch (error) {
        console.error({error})
        throw error;
    }
}

export async function deleteTodo(id) {
    try {
        const response = await http.delete('/todos/' + id)
        return response?.data ?? {}
    }catch (error) {
        console.error({error})
        throw error;
    }
}
