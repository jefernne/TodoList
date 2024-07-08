export const createTasks = async (task) => {
  const API = "http://localhost:3000/task";
  const option = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  };

  try {
    const response = await fetch(API, option);
    const Data = await response.json();
    return { Data, response };
  } catch (error) {
    console.log(error);
  }
};

export const GetAllTask = async () => {
  const API = "http://localhost:3000/task";
  const option = {
    credentials: "include",
  };
  try {
    const response = await fetch(API, option);
    const Data = await response.json();
    return { Data, response };
  } catch (error) {
    console.log(error);
  }
};

export const DeleteTask = async (idTask) => {
  const API = `http://localhost:3000/task?idTask=${idTask}`;

  try {
    const response = await fetch(API, {
      method: "delete",
      credentials: "include",
      headers:{
         "Content-Type": "application/json"
      }
    });
    const Data = await response.json()
    return {Data, response}
  } catch (error) {
    console.log(error);
  }
};


export const TaskCompleted =async(idTask,task)=>{
  const API = `http://localhost:3000/task?idTask=${idTask}`

  try{
    const response = await fetch(API, {
      method:'put',
      credentials: "include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(task)
    })
    const Data = await response.json()
    return {Data, response}
      
  }catch(error){
    console.log(error)
  }
}
export const UpdateOrder =async(tasks)=>{
  const API = `http://localhost:3000/tasks/order`

  try{
    const response = await fetch(API, {
      method:'put',
      credentials: "include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(tasks)
    })
    const Data = await response.json()
    return {Data, response}
      
  }catch(error){
    console.log(error)
  }
}



