import '@4tw/cypress-drag-drop'
import 'cypress-real-events/support'
import '@cypress/code-coverage/support'
require('@cypress/skip-test/support')
import 'cypress-file-upload'

import { component } from './commands/component'
import { getByCy } from './commands/getByCy'
import { createBoard } from './commands/createBoard'

Cypress.Commands.add('component', component)
Cypress.Commands.add('getByCy', getByCy)
Cypress.Commands.add('createBoard', createBoard)
