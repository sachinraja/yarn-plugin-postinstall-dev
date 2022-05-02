import type { Plugin, Project } from '@yarnpkg/core'
import { spawnSync } from "child_process";

const extension = process.platform === "win32" ? ".cmd" : "";

const plugin: Plugin = {
  hooks: {
    async afterAllInstalled(project: Project) {
      await new Promise<void>((resolve) => {
        const proc = spawnSync(`yarn${extension}`, ['run', 'postinstallDev'], {
          stdio: "inherit",
          cwd: project.cwd,
        })
        resolve();
      })
    },
  },
}

export default plugin
