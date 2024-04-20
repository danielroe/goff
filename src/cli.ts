import { runMain } from 'citty'
import { version } from '../package.json'

runMain({
  meta: {
    name: 'goff',
    description: 'Sync GitHub issues offline into a local folder',
    version,
  },
  subCommands: {
    // TODO:
    // auth: () => import('./commands/auth').then(r => r.auth),
    sync: () => import('./commands/sync').then(r => r.sync),
  },
})
