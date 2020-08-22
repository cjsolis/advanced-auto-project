const HomePage = require('../pageobjects/home.page');
const FlightPage = require('../pageobjects/flight.page');

describe('Home page', () => {
    it('should search a flight and get a valid URL and available number of flights', () => {

        HomePage.open();
        HomePage.search();
        
        let currentUrl = browser.getUrl();
        FlightPage.waitForResultsToLoad();

        console.log(currentUrl); 
        // Validar que la URL tenga algo
        // Validar que hayan vuelos disponibles
    });
}); 