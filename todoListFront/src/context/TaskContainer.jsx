import { createContext, useState } from "react";
import {
  DeleteTask,
  GetAllTask,
  TaskCompleted,
  UpdateOrder,
  createTasks,
} from "../apis/Tasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskCollection, settaskCollection] = useState([]);
  const [editTask, seteditTask] = useState(0);
  const [Loaded, setLoaded] = useState("Cargando");
  const getalltask = async () => {
    const tasks = await GetAllTask();
    if (tasks?.response?.status !== 200 || tasks?.Data?.Data.length === 0) {
      return settaskCollection(null);
    }
    settaskCollection(tasks?.Data?.Data); 
    setLoaded("Loadig");
  };

  const createTask = async (task) => {
    try {
      const sendTask = await createTasks(task);
      getalltask();
      setLoaded("Agregando Tarea.. ");
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteTasks = async (idTask) => {
    const idTaskDelete = await DeleteTask(idTask);
    settaskCollection(
      taskCollection.filter((task) => {
        task.idTask !== idTask;
      })
    );
    getalltask();
  
  };

  const CompletingTask = async (idTask, task) => {
    try {
      const taskBeingCompleted = await TaskCompleted(idTask, task);
      if (taskBeingCompleted.response.status === 200) {
        getalltask();
    
      }
    } catch (error) {
      console.log(error);
    }
  };

  const EditingTask = (idTask) => {
    seteditTask(idTask);
    getalltask();
  
  };

  const updateTask = async (idTask, task) => {
    try {
      const taskToEdit = await TaskCompleted(idTask, task);
      console.log(taskToEdit.Data);
      if (taskToEdit.response.status === 200) {
        getalltask();
  
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrderTasks =async(tasks)=>{
    try{
      console.log(tasks)
      const TasksOrder=  await UpdateOrder(tasks)
      
    }catch(error){
      console.log(error)
    }
    
  }

  return (
    <TaskContext.Provider
      value={{
        createTask,
        getalltask,
        taskCollection,
        DeleteTasks,
        Loaded,
        CompletingTask,
        setLoaded,
        EditingTask,
        editTask,
        updateTask,
        seteditTask,
        updateOrderTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};