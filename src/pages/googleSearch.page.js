import Page from './page';

class GoogleSearchPage extends Page {
    get searchTextBox() { return browser.element('#lst-ib'); }
    get searchButton() { return browser.element('#btnK'); }
    get searchResults() { return browser.elements('.r'); }

    constructor() {
        super();
        this.href = 'https://www.google.com';
    }

    navigate() {
        super.navigate(this.href);
    }

    trait() {
        super.trait(this.href);
    }

    search(value) {
        this.searchTextBox.setValue(value);
        browser.keys('Enter');
    }

    assertResults() {
        let resultTitles = browser.getText('.r');
        for (var i = 0; i < resultTitles.length - 1; i++) {
            resultTitles[i].toLowerCase().should.containEql(this.searchTextBox.getValue());
        }
    }
}

export default new GoogleSearchPage();