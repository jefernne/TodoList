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
  const { getalltask, taskCollection, editTask, updateOrderTasks } =
    useContext(TaskContext);
  const [tasks, settasks] = useState([]);
  const [search, setsearch] = useState("");
  const [ActivateFilter, setActivateFilter] = useState(false);
  const [ActivateFilterOrder, setActivateFilterOder] = useState(false);
  const [Filter, setFilter] = useState("All");
  const [Order, setOrder] = useState("");

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
    }
  }, [Filter]);

  const FilterTask = (event) => {
    const value = event.target.value;
    setFilter(value);
  };

  useEffect(() => {
    switch (Order) {
      case "All":
        settasks(taskCollection);
        break;
      case "Finished":
        const sortFinishedsTasks = [...tasks].sort((a, b) => b.State - a.State);
        settasks(sortFinishedsTasks);
        break;
      case "Outstanding":
        const sortOutstandingTasks = [...tasks].sort(
          (a, b) => a.State - b.State
        );
        settasks(sortOutstandingTasks);
        break;
    }
  }, [Order]);

  const SortByTask = (event) => {
    const value = event.target.value;
    setOrder(value);
  };

  const ChangeValue = () => {
    switch (ActivateFilter) {
      case true:
        setActivateFilter(false);
        break;
      case false:
        setActivateFilter(true);
        break;
    }
  };
  const ChangeValueSort = () => {
    switch (ActivateFilterOrder) {
      case true:
        setActivateFilterOder(false);
        break;
      case false:
        setActivateFilterOder(true);
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

        updateOrderTasks({
          Tasks: newOrderTasks.map((Task, Index) => {
            return { ...Task, order: Index };
          }),
        });

        return newOrderTasks;
      });
    }
  };

  return (
    <div className="w-1/2 bg-slate-50 p-6 rounded-lg border border-black ">
      <TopNavigation
        ActivateFilter={ActivateFilter}
        ChangeValue={ChangeValue}
        search={search}
        searchFilter={searchFilter}
        FilterTask={FilterTask}
        Filter={Filter}
        setActivateFilter={setActivateFilter}
        setActivateFilterOder={setActivateFilterOder}
        ActivateFilterOrder={ActivateFilterOrder}
        ChangeValueSort={ChangeValueSort}
        SortByTask={SortByTask}
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
