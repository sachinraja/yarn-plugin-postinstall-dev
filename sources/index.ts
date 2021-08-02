import { Plugin } from '@yarnpkg/core'
import RunCommand from '@yarnpkg/plugin-essentials/lib/commands/run'
const plugin: Plugin = {
  hooks: {
    afterAllInstalled: () => {
      const runCmd = new RunCommand()
      runCmd.cli.run(['run', 'postinstallDev'])
    },
  },
}

export default plugin
