import { defineSupportCode } from 'cucumber';
import page from '../../src/pages/search.page';

defineSupportCode(({ Given, When, Then }) => {
  Given('I am on google', () => {
    page.trait();
  });

  When('I search for {string}', (term) => {
    page.searchFor(term);
  });

  Then('search results are returned', () => {
    page.assertResults();
  });
});
