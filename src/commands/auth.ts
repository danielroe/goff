import { defineCommand } from 'citty'

export const auth = defineCommand({
  meta: {
    description: 'Authenticate with GitHub, which may be needed for syncing larger repositories.',
  },
  async run() {
    // Authenticate with GitHub

  },
})
