import should from 'should'; // eslint-disable-line no-unused-vars

export default class Page {

  trait(href) {
    browser.getUrl().should.containEql(href);
  }

  isMobile() {
    return browser.desiredCapabilities.isMobile;
  }

  navigate(destination) {
    browser.url(destination);
  }
}
