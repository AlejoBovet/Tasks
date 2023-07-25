import axios from 'axios';

const tasksapi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
})

//GET ALL TASKS
export const getAllTasks = () => tasksapi.get('/');

//GET A TASK
export const getTask = (id) => tasksapi.get(`/${id}/`);

//POST A TASK
export const createTask = (task) => tasksapi.post('/', task);

//DELETE A TASK
export const deleteTask = (id) => tasksapi.delete(`/${id}/`);

//UPDATE A TASK
export const updateTask = (id, task) => tasksapi.put(`/${id}/`, task);
