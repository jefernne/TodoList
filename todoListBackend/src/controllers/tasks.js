import tasks from "../models/task.model.js";
import TasksDeltes from "../models/TaskDelete.model.js";

export const getUserTasks = async (req, res) => {
  const { User } = req;
  const { idUser } = User;

  const Date = await tasks.find({ idUser: idUser }).sort({order:1});
  res.status(200).json({
    Data: Date,
  });
}; 

export const createTask = async (req, res) => {
  const { title, Description } = req.body;
  const { idUser } = req.User;

  try {
    if (!title || !Description) {
      return res.status(400).json({ message: ["The fields are required"] });
    }

    const lastTask = await tasks
      .find({ idUser: idUser })
      .sort({ order: -1 })
      .limit(1);

    console.log(lastTask);
    const newOrder = lastTask.length > 0 ? lastTask[0].order + 1 : 0;
    const idTask = getRandomInt(10, 10000);
    const State = false;
    const newTask = new tasks({
      idTask,
      idUser,
      title,
      Description,
      State: State,
      order: newOrder,
    });

    const save = await newTask.save();

    res
      .status(200)
      .json({ title, Description, idUser: idUser, idTask, State: State });
  } catch (error) {
    res.status(500).json({message:`There is an error on the server. The error is: ${error}`});
  }
};

export const DeleteTask = async (req, res) => {
  const { idTask } = req.query;

  saveDelete(idTask);
  const deleteTask = await tasks.deleteOne({ idTask: idTask });
  if (deleteTask.deletedCount === 0) {
    return res
      .status(400)
      .json({ message: ["Error: Task not found"] });
  }

  res.status(200).json({ idTask: idTask });
};

export const UpdateTask = async (req, res) => {
  const { idTask } = req.query;
  const { title, Description, State } = req.body;

  if (!title || !Description) {
    return res.status(400).json({ message: ["The fields are required"] });
  }

  const stask = await tasks.findOne({ idTask: idTask });
  const state = stask.State;

  const UpdateTask = await tasks.updateOne(
    { idTask: idTask },
    { $set: { title: title, Description: Description, State: State } }
  );
  const UserConfirm = {
    idTask: idTask,
    State: state,
  };

  res.status(200).json({ message: UserConfirm });
};

export const saveDelete = async (idTask) => {
  try {
    const task = await tasks.findOne({ idTask: idTask });
    const saveDeletes = new TasksDeltes({
      idTask: task.idTask,
      idUser: task.idUser,
      title: task.title,
      Description: task.Description,
      State: task.State,
      order: task.order
    });
    const save = await saveDeletes.save();
  } catch (error) {
    res.status(500).json({message:`There is an error on the server. The error is: ${error}`});
  }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const getUserTasksDelete = async (req, res) => {
  const { User } = req;
  const { idUser } = User;
  const Date = await TasksDeltes.find({ idUser: idUser });

  res.status(200).json({
    Data: Date,
  });
};

export const UpdateOrder = async (req, res) => {
  const { Tasks } = req.body;
  try {
    for (const Task of Tasks) {
     
      await tasks.updateOne(
        { idTask: Task.idTask },
        { $set: { order: Task.order } }
      );
    }
    res.status(200).json({message:["Congratulations"]});
  } catch (error) {
    res.status(500).send("Error updating the order");
  }
};
