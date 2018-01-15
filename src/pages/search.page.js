import Page from './page';


class GoogleSearchPage extends Page {
    get search() { return $('#lst-ib'); }
    get searchButton() { return $('#btnK'); }
    get searchResults() { return $$('#rso .g .rc'); }


    constructor() {
        super();
        this.href = 'https://www.google.com';
    }

    navigate() {
        super.navigate(this.href);
    }

    trait() {
        super.trait(this.href);
        this.search.waitForVisible();
    }

    searchFor(term) {
        this.search.setValue(term);
        this.search.addValue('Enter');
    }

    assertResults() {
        this.searchResults.length.should.be.greaterThan(1);
        this.searchResults.forEach(result => {
            result.$('.r').isExisting().should.be.equal(true, 'Title did not display');
            result.$('.r').getText().should.be.a.String();
            result.$('.f').isExisting().should.be.equal(true, 'Link did not display');
            result.$('.f').getText().should.be.a.String();
        });
    }
}

export default new GoogleSearchPage();