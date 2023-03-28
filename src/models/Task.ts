import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";

export const TaskModel = types.model("Task").props({
  id: types.identifier,
  title: types.string,
  completed: types.maybeNull(types.string),
});

export interface Task extends Instance<typeof TaskModel> {}
export interface TaskSnapshotOut extends SnapshotOut<typeof TaskModel> {}
export interface TaskSnapshotIn extends SnapshotIn<typeof TaskModel> {}

export default Task;
