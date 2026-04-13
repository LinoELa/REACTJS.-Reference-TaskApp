import { createContext } from "react";

const TaskContext = createContext();

function TaskContextProvider(props) {
  const contextValue = {
    message: "TaskContext activo",
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskContextProvider };
