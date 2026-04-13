import { useState } from "react";

import tasksData from "./components/data/TasksData";
import TaskFormComponent from "./components/tasks/TaskForm";
import TaskListComponent from "./components/tasks/TaskList";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="App">
      <h1>React Task App</h1>

      <TaskListComponent tasks={tasks} deleteTask={deleteTask} />
      <TaskFormComponent createTask={createTask} />
    </div>
  );
}

export default App;
