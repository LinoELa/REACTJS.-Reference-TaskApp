import { TaskContext } from "../../context/TaskContext";
import TaskCard from "./TaskCard";
import { useContext } from "react";

function TaskListComponent() {
  const { tasks } = useContext(TaskContext);

  if (!tasks || tasks.length === 0) {
    return <div>No hay tareas disponibles</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskListComponent;
