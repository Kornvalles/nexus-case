import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { useStores } from "../models/helpers/useStores";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  title: string;
};

const NewTask: FC = observer((props: any) => {
  const {
    taskStore: { addTask },
  } = useStores();
  const { handleSubmit, register } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (input: any) => {
    const uid = addTask(input.title);
    navigate(`/task/${uid}`); // Navigate to the new task
  };

  return (
    <>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <header className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            New Task
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Fill in form to add a new task.
          </p>
        </header>
        <section className="border-t border-gray-200">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-gray-50 px-4 py-5 sm:px-6">
              <div className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">
                <input
                  className="w-full rounded-md border border-gray-300 p-2"
                  type="text"
                  placeholder="Title of task"
                  {...register("title")}
                />
              </div>
            </div>
            <div className="flex w-full bg-gray-50 px-4 py-5 sm:px-6">
              <button className="gap-2 rounded-md bg-slate-500 p-2 font-medium text-white hover:bg-slate-700 sm:w-1/3">
                Add task
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
});

export default NewTask;
