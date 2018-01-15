import { defineSupportCode } from 'cucumber';
import page from '../../src/pages/search.page';

defineSupportCode(function ({ Given, When, Then }) {
    Given('I am on google', function () {
        page.trait();
    });

    When('I search for {string}', function (term) {
        page.searchFor(term);
    });

    Then('search results are returned', function () {
        page.assertResults();
    });
});