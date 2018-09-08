import Page from '../pages/page';

class HeaderModule extends Page {
  get header() { return $('#top_nav'); }

  trait() {
    this.header.waitForVisible();
  }
}

export default new HeaderModule();
