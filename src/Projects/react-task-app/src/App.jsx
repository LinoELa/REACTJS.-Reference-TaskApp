import TaskFormComponent from "./components/tasks/TaskForm";
import TaskListComponent from "./components/tasks/TaskList";
import { TaskContextProvider } from "./context/TaskContext.jsx";

function App() {
  return (
    <TaskContextProvider>
      <div className="App">
        <h1>React Task App</h1>

        <TaskFormComponent />
        <TaskListComponent />
      </div>
    </TaskContextProvider>
  );
}

export default App;
