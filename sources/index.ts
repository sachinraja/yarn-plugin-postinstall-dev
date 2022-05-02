import type { Plugin, Project } from '@yarnpkg/core'
import { spawn } from 'cross-spawn'

const extension = process.platform === "win32" ? ".cmd" : "";

const plugin: Plugin = {
  hooks: {
    async afterAllInstalled(project: Project) {
      await new Promise<void>((resolve) => {
        const proc = spawn(`yarn${extension}`, ['run', 'postinstallDev'], {
          cwd: project.cwd,
        })
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.addListener('exit', () => resolve())
      })
    },
  },
}

export default plugin
