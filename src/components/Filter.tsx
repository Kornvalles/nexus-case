import React from "react";
import { TaskStore } from "../models/TaskStore";
import { FilterBy } from "../models/TaskStore";

interface FilterProps {
  taskStore: TaskStore;
}

const Filter = ({ taskStore }: FilterProps) => {
  const handleClick = (filter: FilterBy) => {
    taskStore.setFilter(filter);
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        className={`${
          taskStore.currentFilter === FilterBy.ALL
            ? "bg-blue-500 text-white"
            : "text-gray-700"
        } rounded py-2 px-4 font-bold`}
        onClick={() => handleClick(FilterBy.ALL)}
      >
        All
      </button>
      <button
        className={`${
          taskStore.currentFilter === FilterBy.COMPLETED
            ? "bg-blue-500 text-white"
            : "text-gray-700"
        } rounded py-2 px-4 font-bold`}
        onClick={() => handleClick(FilterBy.COMPLETED)}
      >
        Completed
      </button>
      <button
        className={`${
          taskStore.currentFilter === FilterBy.INCOMPLETE
            ? "bg-blue-500 text-white"
            : "text-gray-700"
        } rounded py-2 px-4 font-bold`}
        onClick={() => handleClick(FilterBy.INCOMPLETE)}
      >
        Incomplete
      </button>
    </div>
  );
};

export default Filter;
