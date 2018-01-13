import { defineSupportCode } from 'cucumber';
import page from '../../src/pages/googleSearch.page';

defineSupportCode(function ({ Given, When, Then }) {

    Given('I am on the google home page', function () {
        page.trait();
    });

    When('I search for {string}', function (value) {
        page.search(value);
    });

    Then('I receive good search results', function () {
        page.assertResults();
    });
});