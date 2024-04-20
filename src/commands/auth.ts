import process from 'node:process'

import { defineCommand } from 'citty'
import consola from 'consola'

import { setToken } from '../auth'
import { fetchUser } from '../api'

export const auth = defineCommand({
  meta: {
    description: 'Authenticate with GitHub, which may be needed for syncing larger repositories.',
  },
  args: {
    token: {
      type: 'string',
      required: true,
      description: 'A GitHub token with read permissions. You can generate one at `https://github.com/settings/tokens/new`.',
    },
  },
  async run({ args }) {
    // TODO: authentication flow with GitHub
    setToken(args.token)
    try {
      await fetchUser()
      consola.success('Authenticated with GitHub.')
    }
    catch {
      consola.error('Failed to authenticate with GitHub. Please check your token and try again.')
      process.exit(1)
    }
  },
})
