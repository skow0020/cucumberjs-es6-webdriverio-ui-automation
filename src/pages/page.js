import should from 'should';

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
