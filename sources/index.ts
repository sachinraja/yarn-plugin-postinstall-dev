import type { Plugin, Project } from '@yarnpkg/core'
import { execute } from '@yarnpkg/shell';

const plugin: Plugin = {
  hooks: {
    afterAllInstalled: async (project: Project) => execute('yarn', ['run', 'postinstallDev'], { cwd: project.cwd })
  },
}

export default plugin
