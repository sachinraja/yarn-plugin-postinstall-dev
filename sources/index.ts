import type { Plugin } from '@yarnpkg/core'
import RunCommand from '@yarnpkg/plugin-essentials/lib/commands/run'

const plugin: Plugin = {
  hooks: {
    afterAllInstalled: async () => {
      const runCmd = new RunCommand()
      await runCmd.cli.run(['run', 'postinstallDev'])
    },
  },
}

export default plugin
