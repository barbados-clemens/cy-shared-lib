import { getGreeting } from '../support/app.po';
import { expectHeader } from '@cy-shared-lib/cy-helpers';

describe('demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');
    expectHeader();

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome demo');
  });
});
