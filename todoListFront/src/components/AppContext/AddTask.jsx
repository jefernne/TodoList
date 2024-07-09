import { useContext } from "react";
import { useForms } from "../../hooks/useForm";
import { TaskContext } from "../../context/TaskContainer";

export const AddTask = () => {
  const { title, Description, inputChange,onResetForm } = useForms({
    title: "",
    Description: "",
  });
  const { createTask } = useContext(TaskContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if(Description.length <= 6 || Description.length>=40){
        createTask({title:"", Description:""})
    }
    createTask({ title, Description });
    onResetForm()
  };

  return (
    <div className=" w-full p-14 bg-slate-50  rounded-lg border border-black lg:w-[48%] ">
      <h1 className="text-2xl font-bold mb-6">Add Task</h1>
      <form onSubmit={onSubmit} className="w-full h-full flex flex-col">
        <p className="font-bold mb-4">Title</p>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          autoFocus
          onChange={inputChange}
          className="rounded-lg h-9 border  border-inherit  mb-5 text-black pl-3"
        />
        <p className="font-bold mb-4">Description</p>
        <textarea
          rows="4"
          name="Description"
          placeholder="Description"
          value={Description}
          onChange={inputChange}
          className="rounded-lg h-32 border  border-inherit  mb-5 text-black pl-3"
        ></textarea>
        <button className="w-full h-9 bg-black rounded-lg text-white">
          Add Task
        </button>
        {!title ||
        !Description ||
        Description.length <= 6 ||
        Description.length >= 40 ? (
          <p className="w-full h-auto max-h-80 p-1 bg-red-600 mt-5  rounded-lg flex justify-center items-center text-center text-white">
            All data is required. The description field must contain a minimum
            of 6 characters and a maximum of 40 characters. This message will be
            deleted if these conditions are met
          </p>
        ) : null}
      </form>
    </div>
  );
};
