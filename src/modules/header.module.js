import Page from './page';

class HeaderModule extends Page {
    get header() { return $('#top_nav'); }

    trait() {
        this.header.waitForVisible();
    }
}

export default new HeaderModule();
