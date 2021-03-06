const FlightPage = require('../pageobjects/flight.page');
    
describe('Flight page', () => {
    it('should verify that the given URL has unavailable results on Only Bus and available results on Bus and Train results', () => {

        // Opens the page and verifies that there are results
        FlightPage.openFlightsWithPassengers();
        FlightPage.waitForResultsToLoad();
        expect(FlightPage.btnBook).toExist();
        
        // Filters by Bus Only and verifies that there are no results
        FlightPage.selectTransportOnlyByName("Bus");
        FlightPage.waitForResultsToLoad();
        expect(FlightPage.btnBook).not.toExist();
        
        // Adds Train to the filter and verifies that there are results
        FlightPage.selectTransportByName("Train");
        FlightPage.waitForResultsToLoad();
        expect(FlightPage.btnBook).toExist();        
    });
});