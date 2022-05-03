import type { Plugin, Project } from '@yarnpkg/core'
import { execute } from '@yarnpkg/shell'

const plugin: Plugin = {
  hooks: {
    async afterAllInstalled(project: Project) {
      const command = project.topLevelWorkspace.manifest.scripts.get('postinstallDev')

      if (!command) {
        return
      }

      execute(command, [], {
        cwd: project.cwd
      })
    },
  },
}

export default plugin
