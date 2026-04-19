import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const repository = globalThis.process?.env?.GITHUB_REPOSITORY || "LinoELa/REACTJS-REFERENCE";
  const [, repoName = "REACTJS-REFERENCE"] = repository.split("/");
  const base = command === "build" ? `/${repoName}/` : "/";

  return {
    plugins: [react(), tailwindcss()],
    base,
  };
});
