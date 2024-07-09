import { useContext } from "react";
import { principalContext } from "../../context/MainContainer";
import { AddTask } from "../../components/AppContext/AddTask";
import { AllTasks } from "../../components/AppContext/AllTasks";
import { Navauth } from "../../components/Navauth";

export const ProfileTodoList = () => {
  return (
    <section className="h-full w-11/12 bg-slate-50">
      <Navauth></Navauth>
      <div className=" w-full flex flex-col lg:w-full lg:h-5/6  lg:flex lg:flex-row lg:justify-between">
        <AddTask></AddTask>
        <AllTasks></AllTasks>
      </div>
    </section>
  );
};
