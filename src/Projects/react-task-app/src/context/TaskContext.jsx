import { useState, useEffect, createContext } from "react";
import data from "../components/data/TasksData.js";

const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const result = await Promise.resolve(data);
      setTasks(result);
    }

    loadTasks();
  }, []);

  function createTask(task) {
    setTasks((prevTasks) => [
      ...prevTasks,
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
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskContextProvider };
