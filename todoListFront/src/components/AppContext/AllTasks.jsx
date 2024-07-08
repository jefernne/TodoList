import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContainer";
import { useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import CardTask from "./componentsApp/CardTask";
import TopNavigation from "./componentsApp/TopNavigation";

export const AllTasks = () => {
  const { getalltask, taskCollection, editTask,updateOrderTasks } =
    useContext(TaskContext);
  const [tasks, settasks] = useState([]);
  const [search, setsearch] = useState("");
  const [ActivateFilter, setActivateFilter] = useState(false);
  const [Filter, setFilter] = useState("All");

  useEffect(() => {
    getalltask();
  }, []);

  const searchFilter = (e) => {
    setsearch(e.target.value);
  };

  useEffect(() => {
    if (!search) {
      settasks(taskCollection);
    } else if (search.length >= 3) {
      if (taskCollection) {
        settasks(
          taskCollection.filter((title) => {
            return title.title
              .toLowerCase()
              .includes(search.toLocaleLowerCase());
          })
        );
      }
    } else {
      settasks(taskCollection);
    }
  }, [search, taskCollection]);

  useEffect(() => {
    switch (Filter) {
      case "All":
        settasks(taskCollection);
        break;
      case "Pending":
        settasks(
          taskCollection.filter((task) => {
            return task.State === false;
          })
        );
        break;
      case "Completed":
        settasks(
          taskCollection.filter((task) => {
            return task.State;
          })
        );
        break;
    }
  }, [Filter]);

  const FilterTask = (event) => {
    const value = event.target.value;
    setFilter(value);
  };

  const CambiarValor = () => {
    switch (ActivateFilter) {
      case true:
        setActivateFilter(false);
        break;
      case false:
        setActivateFilter(true);
        break;
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      settasks((items) => {
        const oldIndex = tasks.findIndex((task) => task.idTask === active.id);
        const newIndex = tasks.findIndex((task) => task.idTask === over.id);
        const newOrderTasks = arrayMove(tasks, oldIndex, newIndex);

        updateOrderTasks({Tasks: newOrderTasks.map((Task, Index)=>{return ({...Task,order:Index})})})

        return newOrderTasks;
      });
    }
  };

  return (
    <div className="w-1/2 bg-slate-50 p-6 rounded-lg border border-black ">
      <TopNavigation
        ActivateFilter={ActivateFilter}
        CambiarValor={CambiarValor}
        search={search}
        searchFilter={searchFilter}
        FilterTask={FilterTask}
        Filter={Filter}
        setActivateFilter={setActivateFilter}
      ></TopNavigation>

      <div className="overflow-y-auto w-full h-5/6">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={tasks.map((task) => task.idTask)}
            strategy={verticalListSortingStrategy}
          >
            {tasks !== null
              ? tasks.map((task) => {
                  return (
                    <CardTask
                      task={task}
                      editTask={editTask}
                      key={task.idTask}
                    ></CardTask>
                  );
                })
              : null}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};
