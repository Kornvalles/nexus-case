import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../models/helpers/useStores";
import Filter from "./Filter";

const TaskList: FC = observer(() => {
  const { taskStore } = useStores();
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <header className="flex flex-col justify-between gap-2 px-4 py-5 align-middle sm:px-6 md:flex-row">
        <div>
          <h3 className="flex-1 text-base font-semibold leading-6 text-gray-900">
            Task List
          </h3>
          <p className="mt-1 max-w-2xl flex-1 text-sm text-gray-500">
            List of all recent task.
          </p>
        </div>
        <div className="flex-2 mt-2">
          <Filter taskStore={taskStore} />
        </div>
      </header>
      <section className="border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 border-b-2 border-gray-300 bg-gray-200 px-4 py-5 sm:px-6">
          <dt>Title</dt>
          <dt>Completed</dt>
        </div>
        {taskStore.filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="grid grid-cols-2 gap-4 bg-gray-50 px-4 py-5 hover:cursor-pointer hover:bg-slate-200 sm:px-6"
            onClick={() => navigate(`/task/${task.id}`)}
          >
            <dd>{task.title}</dd>
            <dd>{task.completed ? "Yes" : "No"}</dd>
          </div>
        ))}
      </section>
    </div>
  );
});

export default TaskList;
//
