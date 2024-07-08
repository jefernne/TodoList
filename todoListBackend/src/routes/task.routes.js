import {Router} from 'express';
import { authRequire } from '../middlewares/ValidationToken.js';
import { getUserTasks,createTask, DeleteTask, UpdateTask, getUserTasksDelete, UpdateOrder } from '../controllers/tasks.js';
const task = Router();

task.get("/task",authRequire,getUserTasks)
task.post("/task",authRequire, createTask)
task.delete("/task",authRequire,DeleteTask)
task.put("/task",authRequire,UpdateTask)
task.get("/tasksDlete",authRequire,getUserTasksDelete)
task.put("/tasks/order",authRequire,UpdateOrder)


export default task