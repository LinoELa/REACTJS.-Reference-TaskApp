import TaskFormComponent from "./components/tasks/TaskForm";
import TaskListComponent from "./components/tasks/TaskList";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-slate-100 md:px-8 md:py-10">
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 animate-float rounded-full bg-cyan-500/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[360px_1fr]">
        <section className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Task Workspace
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
            Planifica tus tareas con foco
          </h1>
          <p className="mt-4 text-sm text-slate-300">
            Crea, visualiza y limpia pendientes desde un solo panel.
          </p>

          <TaskFormComponent />
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl">
          <TaskListComponent />
        </section>
      </div>
    </main>
  );
}

export default App;
