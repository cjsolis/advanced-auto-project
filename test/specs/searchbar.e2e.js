const HomePage = require('../pageobjects/home.page');
const FlightPage = require('../pageobjects/flight.page');

describe('Home page', () => {
    it('should search a flight and get a valid URL and available number of flights', () => {

        HomePage.open();

        // Uses the search function to search a flight from Berlin to London
        // at anytime with 2 adults, 3 children and one infant
        HomePage.search();
        
        // Verifies that the URL contains the departure place
        expect(browser).toHaveUrlContaining("berlin"); 
        // Verifies that the URL contains the arrival place
        expect(browser).toHaveUrlContaining("london");
        // Verifies that the URL contains the date
        expect(browser).toHaveUrlContaining("anytime");
        // Verifies that the URL contains the passangers number
        expect(browser).toHaveUrlContaining("adults=2&children=3&infants=1");
        
        // Waits until the loading div dissapears
        FlightPage.waitForResultsToLoad();

        // Verifies if exist any 'Book' button, meaning that there are results
        expect(FlightPage.btnBook).toExist();
    });
}); 