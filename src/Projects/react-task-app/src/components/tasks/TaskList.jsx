import { TaskContext } from "../../context/TaskContext";
import TaskCard from "./TaskCard";
import { useContext } from "react";

function TaskListComponent() {
  const { tasks } = useContext(TaskContext);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  if (!tasks || tasks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 p-8 text-center">
        <p className="text-lg font-medium text-slate-200">No hay tareas disponibles</p>
        <p className="mt-2 text-sm text-slate-400">
          Crea una tarea nueva desde el panel de la izquierda.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
            Resumen
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">Mis tareas</h2>
        </div>

        <div className="flex gap-3">
          <div className="rounded-xl bg-slate-800/70 px-3 py-2 text-center">
            <p className="text-xs text-slate-400">Total</p>
            <p className="text-lg font-semibold text-white">{totalTasks}</p>
          </div>
          <div className="rounded-xl bg-emerald-500/15 px-3 py-2 text-center">
            <p className="text-xs text-emerald-300">Completadas</p>
            <p className="text-lg font-semibold text-emerald-200">{completedTasks}</p>
          </div>
          <div className="rounded-xl bg-orange-500/15 px-3 py-2 text-center">
            <p className="text-xs text-orange-200">Pendientes</p>
            <p className="text-lg font-semibold text-orange-100">{pendingTasks}</p>
          </div>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskListComponent;
