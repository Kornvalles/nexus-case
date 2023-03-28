import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useStores } from "../models/helpers/useStores";

const Task: FC = observer(() => {
  const {
    taskStore: { allTasks, toggleTask },
  } = useStores();
  const { uid } = useParams();
  const task = allTasks.find((task) => task.id === uid) || allTasks[0];
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Task Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Information for the current task.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Title</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
              {task?.title}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Completed</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
              {task?.completed ? "Yes" : "No"}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
            <button
              onClick={() => toggleTask(task?.id)}
              className="flex flex-shrink-0 justify-center gap-2 rounded-md bg-slate-500 p-2 font-medium text-white hover:bg-slate-700"
            >
              Mark as completed
            </button>
          </div>
        </dl>
      </div>
    </div>
  );
});

export default Task;
