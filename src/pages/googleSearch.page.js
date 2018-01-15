import Page from './page';

class GoogleSearchPage extends Page {
    get searchTextBox() { return browser.element('#lst-ib'); }
    get searchButton() { return browser.element('#btnK'); }
    get searchResults() { return browser.getText('#rso .srg .g .rc .r'); }

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
        this.searchTextBox.setValue(`${value}\n`);
    }

    assertResults() {
        this.searchResults.forEach(result => {
            result.toLowerCase().should.containEql(this.searchTextBox.getValue().toLowerCase());
        });
    }
}

export default new GoogleSearchPage();