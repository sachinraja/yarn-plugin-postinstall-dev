import { Plugin, Project, scriptUtils } from '@yarnpkg/core'

const scriptName = 'postinstallDev'

// @see https://github.com/yarnpkg/berry/blob/d7d260e4ee6e39ed4b3dac1fdabbed025bf99899/packages/plugin-essentials/sources/commands/run.ts#L82
const plugin: Plugin = {
  hooks: {
    async afterAllInstalled(project: Project) {
      const locator = project.topLevelWorkspace.anchoredLocator
      if (scriptUtils.hasPackageScript(locator, scriptName, { project })) {
        return await scriptUtils.executePackageScript(locator, scriptName, [], {
          project,
          stdin: process.stdin,
          stdout: process.stdout,
          stderr: process.stderr
        })
      }
    },
  },
}

export default plugin
