import type { Plugin, Project } from '@yarnpkg/core'
import { spawn } from "child_process";

const extension = process.platform === "win32" ? ".cmd" : "";

const plugin: Plugin = {
  hooks: {
    async afterAllInstalled(project: Project) {
      await new Promise<void>((resolve) => {
        const child = spawn(`yarn${extension}`, ['run', 'postinstallDev'], {
          stdio: "inherit",
          cwd: project.cwd,
        })
        child.on('exit', () => {
          resolve();
        });
      })
    },
  },
}

export default plugin
