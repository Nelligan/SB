import BOTLIST from '../../src/utils/data/bot.json'

/**
 * we will add more complex testing but for a simple e2e to get the code working the test below is doing it's job :) 
 */

describe('e2e test', () => {
  beforeEach(() => {
    // Visit the page that contains the BotList component
    cy.visit('/'); // Change this to the actual route
  });

  it('e2e test', () => {
    // Check that the title is rendered
    cy.get('[data-testid="Bot List"]').should('contain', 'Bot List');

    // Verify the table renders and contains bot data
    cy.get('table').should('exist');
    cy.get('table tbody tr').should('have.length', BOTLIST.length);

    // Verify the first row contains correct bot details
    cy.get('table tbody tr').first().within(() => {
      cy.get('td').first().should('contain', BOTLIST[0].id);
    });

    // click on the view workers btn which will navigate to the workers page to show the data 
    cy.get('table tbody tr').first().contains('View workers').click()
    .wait(2000)
    // make sure we can see the test on the screen
    cy.get('[data-testid="Bot Workers"]').should('contain', 'Bot Workers').wait(2000)

    cy.visit('/').wait(1000)

    cy.get('table tbody tr').first().contains('View Logs').click()
    .wait(2000)
    cy.get('[data-testid="Bot Logs"]').should('contain', 'Bot Logs').wait(2000)

// check that the table has 5 records 
    cy.get('table tbody tr').should('have.length', 5);


    cy.get('button').first().contains('Back to Bots').click()
    .wait(2000)

    cy.get('table tbody tr').first().contains('View workers').click()
    .wait(2000)

    cy.get('table tbody tr').first().contains('View worker/bot logs').click()
    .wait(2000)
    cy.get('[data-testid="Logs for worker assosiated with a bot"]').should('contain', 'Logs for worker assosiated with a bot').wait(1000)

    cy.get('button').first().contains('Back to Bots').click()
    .wait(2000)

  });




});
