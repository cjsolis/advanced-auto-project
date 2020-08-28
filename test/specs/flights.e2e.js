const FlightPage = require('../pageobjects/flight.page');
    
describe('Flight page', () => {
    it('should verify that the given URL has unavailable results on Only Bus and available results on Bus and Train results', () => {

        let loadingDiv = $('//div[contains(@class, "LoadingProvidersstyled__StyledLoadingProviders")]');

        FlightPage.openFlightsWithPassengers();
        FlightPage.waitForResultsToLoad();
        expect(FlightPage.btnBook).toExist();
        
        FlightPage.selectTransportOnlyByName("Bus");
        FlightPage.waitForResultsToLoad();
        expect(FlightPage.btnBook).not.toExist();
        
        FlightPage.selectTransportByName("Train");
        FlightPage.waitForResultsToLoad();
        expect(FlightPage.btnBook).toExist();        
    });
});