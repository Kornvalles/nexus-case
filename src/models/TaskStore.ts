import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { v4 as uuidv4 } from "uuid";
import { withSetPropAction } from "./helpers/withSetPropAction";
import Task, { TaskModel } from "./Task";

export enum FilterBy {
  ALL = "all",
  COMPLETED = "completed",
  INCOMPLETE = "incomplete",
}

export const TaskStoreModel = types
  .model("TaskStore")
  .props({
    tasks: types.array(TaskModel),
    currentFilter: types.optional(
      types.enumeration<FilterBy>(Object.values(FilterBy)),
      FilterBy.ALL
    ),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    addTask(title: string) {
      const id = uuidv4();
      const task: Task = {
        id,
        title,
        completed: null,
      };
      store.tasks.push(task);
      return id;
    },
    toggleTask(taskId: string | undefined) {
      const date = new Date().toDateString();
      const task = store.tasks.find(({ id }) => id === taskId);
      if (task) {
        task["completed"] = date;
      } else {
        throw new Error("No task found!");
      }
    },
    setFilter(filterBy: FilterBy) {
      store.currentFilter = filterBy;
    },
  }))
  .views((store) => ({
    get allTasks() {
      return store.tasks;
    },
    get filteredTasks() {
      switch (store.currentFilter) {
        case FilterBy.COMPLETED:
          return store.tasks.filter((task) => task.completed !== null);
        case FilterBy.INCOMPLETE:
          return store.tasks.filter((task) => task.completed === null);
        default:
          return store.tasks;
      }
    },
  }));

export interface TaskStore extends Instance<typeof TaskStoreModel> {}
export interface TaskStoreSnapshot extends SnapshotOut<typeof TaskStoreModel> {}
