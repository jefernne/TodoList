import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
const TopNavigation = ({
  ActivateFilter,
  ChangeValue,
  search,
  searchFilter,
  FilterTask,
  Filter,
  setActivateFilter,
  setActivateFilterOder,
  ActivateFilterOrder,
  ChangeValueSort,
  SortByTask,
}) => {
  return (
    <div className="w-full h-1/6 flex-col  lg:flex lg:flex-row lg:justify-between lg:items-center">
      <h1 className="text-2xl font-bold">Task</h1>
      <div className="w-full h-24 flex items-center lg:w-1/2 ">
        <CiSearch className="text-2xl mr-2"></CiSearch>
        <input
          type="text"
          className="rounded-lg h-9 border w-full  min-w-20 border-inherit   text-black pl-3"
          placeholder={"...search"}
          onChange={searchFilter}
          value={search}
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="h-28 w-40  lg:mt-20 flex flex-col relative">
          <div
            className="flex items-center"
            onClick={() => {
              ChangeValue();
            }}
          >
            <CiFilter className="text-2xl mr-2"></CiFilter>
            <button>{Filter}</button>
          </div>
          {ActivateFilter === true ? (
            <div className="border bg-white p-4 flex flex-col justify-start items-start rounded-lg shadow-lg relative">
              <button
                className={
                  Filter === "All"
                    ? "w-full   pl-2 flex justify-start bg-slate-200 rounded-lg"
                    : "w-full flex  pl-2 justify-start"
                }
                value="All"
                onClick={(event) => {
                  FilterTask(event);
                  setActivateFilter(false);
                }}
              >
                All
              </button>
              <button
                className={
                  Filter === "Deleted"
                    ? "w-full pl-2  flex justify-start bg-slate-200 rounded-lg "
                    : "w-full   pl-2 flex justify-start"
                }
                value="Deleted"
                onClick={(event) => {
                  FilterTask(event);
                  setActivateFilter(false);
                }}
              >
                Deleted
              </button>
              <button
                className={
                  Filter === "Pending"
                    ? "w-full  pl-2 flex justify-start bg-slate-200 rounded-lg"
                    : "w-full   pl-2 flex justify-start"
                }
                value="Pending"
                onClick={(event) => {
                  FilterTask(event);
                  setActivateFilter(false);
                }}
              >
                Pending
              </button>
              <button
                className={
                  Filter === "Completed"
                    ? "w-full pl-2 flex justify-start bg-slate-200 rounded-lg"
                    : "w-full    pl-2 flex justify-start"
                }
                value="Completed"
                onClick={(event) => {
                  FilterTask(event);
                  setActivateFilter(false);
                }}
              >
                Completed
              </button>
            </div>
          ) : null}
        </div>
        <div className="h-28 w-40  lg:mt-20 flex flex-col relative">
          <div
            className="flex items-center"
            onClick={() => {
              ChangeValueSort();
            }}
          >
            <IoFilter className="text-2xl mr-2" />

            <button>Sort by</button>
          </div>
          {ActivateFilterOrder === true ? (
            <div className="border bg-white p-4 flex flex-col justify-start items-start rounded-lg shadow-lg relative">
              <button
                className={
                  Filter === "Pending"
                    ? "w-full  pl-2 flex justify-start bg-slate-200 rounded-lg"
                    : "w-full   pl-2 flex justify-start"
                }
                value="All"
                onClick={(event) => {
                  SortByTask(event);
                  setActivateFilterOder(false);
                }}
              >
                All
              </button>
              <button
                className={
                  Filter === "Pending"
                    ? "w-full  pl-2 flex justify-start bg-slate-200 rounded-lg"
                    : "w-full   pl-2 flex justify-start"
                }
                value="Finished"
                onClick={(event) => {
                  SortByTask(event);
                  setActivateFilterOder(false);
                }}
              >
                Finisheds
              </button>
              <button
                className={
                  Filter === "Completed"
                    ? "w-full pl-2 flex justify-start bg-slate-200 rounded-lg"
                    : "w-full    pl-2 flex justify-start"
                }
                value="Outstanding"
                onClick={(event) => {
                  SortByTask(event);
                  setActivateFilterOder(false);
                }}
              >
                Pendings
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
