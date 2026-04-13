import TaskCard from "./TaskCard";

function TaskListComponent({ tasks, deleteTask }) {
  if (!tasks || tasks.length === 0) {
    return <div>No hay tareas disponibles</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskListComponent;
