import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskFormComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      alert("Por favor escribe una tarea");
      return;
    }

    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4"
    >
      <h2 className="text-lg font-semibold text-white">Nueva tarea</h2>

      <label className="block space-y-2">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
          Titulo
        </span>
        <input
          type="text"
          placeholder="Ej: Terminar maquetacion"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
          Descripcion
        </span>
        <textarea
          placeholder="Detalle rapido de la tarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={4}
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
      >
        Guardar tarea
      </button>
    </form>
  );
}

export default TaskFormComponent;
