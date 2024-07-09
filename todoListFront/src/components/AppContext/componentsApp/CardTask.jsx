import { useContext } from "react";
import { TaskContext } from "../../../context/TaskContainer";
import { useForms } from "../../../hooks/useForm";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const CardTask = ({ task, editTask, Delets }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.idTask });
  const { DeleteTasks, CompletingTask, EditingTask, updateTask } =
    useContext(TaskContext);
  const { Title, description, inputChange } = useForms({
    Title: task.title,
    description: task.Description,
  });

  const EditTask = (idTask) => {
    EditingTask(idTask);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="w-full h-auto min-h-64 max-h-96 border shadow flex flex-col justify-between p-8 rounded-lg mt-5 "
    >
      <div
        {...attributes}
        {...(task.idTask == editTask ? {} : listeners)}
        className="h-3/4 flex flex-col justify-between"
      >
        {task.idTask == editTask ? (
          <form className=" w-2/3 h-1/3 flex flex-col ">
            <input
              type="text"
              value={Title}
              name="Title"
              className="text-2xl font-semibold rounded-lg pl-2 border border-gray-300  focus:outline-none focus:ring-0 focus:border-transparent"
              onChange={inputChange}
            />
            <input
              type="text"
              name="description"
              value={description}
              className="text-slate-500 mt-2 rounded-lg pl-2 border border-gray-300  focus:outline-none focus:ring-0 focus:border-transparent"
              onChange={inputChange}
            />
          </form>
        ) : (
          <div className="w-full h-1/3 lg:mb-8">
            <h1 className="text-2xl font-semibold w-5/6">{task.title}</h1>
            <h2 className="text-slate-500 w-5/6">{task.Description}</h2>
          </div>
        )}

        <div className="h-1/3 w-full my-3 flex flex-row items-center justify-end lg:m-0">
          <p className="h-8 w-20 text-stone-50 bg-black rounded-lg flex flex-col items-center justify-center">
            {task.State === true ? "Complete" : "Pending"}
          </p>
        </div>
      </div>
      {Delets === true ? (
        <div></div>
      ) : (
        <div className="h-1/4 w-full flex flex-row   items-center justify-end">
          <button
            onClick={() => {
              DeleteTasks(task.idTask);
            }}
            className="h-8 w-24 rounded border border-* font-sans	mx-2 bg-red-600 text-slate-50 "
          >
            Delete
          </button>
          {task.idTask == editTask ? (
            <button
              className="h-8 w-24 rounded border 	mx-2 border-black font-sans	  bg-lime-600 font-medium text-slate-900 "
              onClick={() => {
                EditTask(0);
                updateTask(task.idTask, {
                  title: Title,
                  Description: description,
                  State: task.State,
                });
              }}
            >
              Save
            </button>
          ) : (
            <button
              className="h-8 w-24 rounded border 	mx-2 border-black font-sans	 font-medium text-slate-900 "
              onClick={() => {
                EditTask(task.idTask);
              }}
            >
              Edit
            </button>
          )}

          {task.State !== true ? (
            <button
              className={
                task.idTask == editTask
                  ? "h-8 w-24 rounded border 	mx-2  border-black bg-red-600	 font-medium text-slate-900 "
                  : "h-8 w-24 rounded border 	mx-2  border-black bg-lime-600 font-sans	 font-medium text-slate-900 "
              }
              onClick={() => {
                if (task.idTask == editTask) {
                  EditTask(0);
                  return;
                }
                CompletingTask(task.idTask, {
                  title: task.title,
                  Description: task.Description,
                  State: true,
                });
              }}
            >
              {task.idTask == editTask ? "Cancelar" : "Completed"}
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default CardTask;
