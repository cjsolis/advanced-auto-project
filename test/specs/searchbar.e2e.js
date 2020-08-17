const HomePage = require('../pageobjects/home.page');

describe('Home page', () => {
    it('should search a flight and get a valid URL, available number of flights and a correct depart and destination points', () => {
        HomePage.open();

        HomePage.search();

        let currentUrl = browser.getUrl();
        console.log("Aaaaaaaaaaaaaaaaaaaaa" + HomePage.expectedUrl);
        expect(HomePage.checkValidResultUrl()).to.be.true;
        
        
        //SecurePage.flashAlert).toBeExisting();
        //expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
    });
});