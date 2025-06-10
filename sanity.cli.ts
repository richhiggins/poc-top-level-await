import {defineCliConfig} from 'sanity/cli'

//console.log(process.env.CLI_ENV)

export default defineCliConfig({
  api: {
    projectId: '0m9j17gd',
    dataset: 'production',
  },
  autoUpdates: true,
  vite: (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        target: 'esnext',
      },
    }
  },
})
