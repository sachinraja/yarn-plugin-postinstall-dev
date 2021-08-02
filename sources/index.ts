import type { Plugin } from '@yarnpkg/core'
import { spawn } from 'child_process'

const plugin: Plugin = {
  hooks: {
    async afterAllInstalled() {
      await new Promise<void>((resolve) => {
        const proc = spawn('yarn', ['run', 'postinstallDev'])
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.addListener('exit', () => resolve())
      })
    },
  },
}

export default plugin
