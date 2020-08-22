const FlightPage = require('../pageobjects/flight.page');
    
describe('Flight page', () => {
    it('should verify that the given URL has unavailable results on Only Bus and available results on Bus and Train results', () => {

        let loadingDiv = $('//div[contains(@class, "LoadingProvidersstyled__StyledLoadingProviders")]');

        FlightPage.openFlightsWithPassengers();
        FlightPage.waitForResultsToLoad();
        // Validar que hayan vuelos
        
        FlightPage.selectTransportOnlyByName("Bus");
        FlightPage.waitForResultsToLoad();
        // Validar que no hayan vuelos
        
        FlightPage.selectTransportByName("Train");
        FlightPage.waitForResultsToLoad();
        // Validar que hayan vuelos        
    });
});