import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(() => {
  const repository = globalThis.process?.env?.GITHUB_REPOSITORY || "";
  const [, repoName = ""] = repository.split("/");
  const base =
    globalThis.process?.env?.GITHUB_ACTIONS === "true" && repoName
      ? `/${repoName}/`
      : "/";

  return {
    plugins: [react(), tailwindcss()],
    base,
  };
});
