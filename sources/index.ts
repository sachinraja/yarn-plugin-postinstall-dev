import type { Plugin } from '@yarnpkg/core'
import { spawnSync } from 'child_process'

const plugin: Plugin = {
  hooks: {
    afterAllInstalled() {
      spawnSync('yarn', ['run', 'postinstallDev'])
    },
  },
}

export default plugin
