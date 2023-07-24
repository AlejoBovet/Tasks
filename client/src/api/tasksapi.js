import axios from 'axios';

const tasksapi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
})

//GET ALL TASKS
export const getAllTasks = () => tasksapi.get('/');

//POST A TASK
export const createTask = (task) => tasksapi.post('/', task);

//DELETE A TASK
export const deleteTask = (id) => tasksapi.delete(`/${id}/`);
