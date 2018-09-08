import Page from '../pages/page';

class FooterModule extends Page {
  get footer() { return $('#fbar'); }

  trait() {
    this.footer.waitForVisible();
  }
}

export default new FooterModule();
