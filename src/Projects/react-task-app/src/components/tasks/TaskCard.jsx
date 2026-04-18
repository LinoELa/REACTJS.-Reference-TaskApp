import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const isCompleted = Boolean(task.completed);

  return (
    <article className="group rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-lg transition hover:-translate-y-0.5 hover:border-cyan-400/40">
      <div className="mb-4 flex items-center justify-between gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            isCompleted
              ? "bg-emerald-500/20 text-emerald-200"
              : "bg-orange-500/20 text-orange-100"
          }`}
        >
          {isCompleted ? "Completada" : "Pendiente"}
        </span>
        <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
          #{task.id}
        </span>
      </div>

      <h3 className="text-lg font-semibold capitalize text-white">{task.title}</h3>
      <p className="mt-2 min-h-12 text-sm text-slate-300">
        {task.description || "Sin descripcion."}
      </p>

      <button
        className="mt-5 inline-flex rounded-lg border border-red-400/40 bg-red-500/20 px-3 py-2 text-sm font-medium text-red-200 transition hover:bg-red-500/30"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </article>
  );
}

export default TaskCard;
