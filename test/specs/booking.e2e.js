const FlightPage = require('../pageobjects/flight.page');

describe('Book page', () => {
    it('should book a flight and get a valid URL and the passanger data is displayed correctly', () => {

        FlightPage.openFlightsWithoutPassengers();
        FlightPage.btnBook.click();
  
        browser.pause(10000);

        // Validar que la URL tenga algo
        // Validar que hayan vuelos disponibles
    });
}); 