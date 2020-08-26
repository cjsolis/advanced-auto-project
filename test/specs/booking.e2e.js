const FlightPage = require('../pageobjects/flight.page');
const BookingPage = require('../pageobjects/booking.page');

describe('Book page', () => {
    it('should book a flight and get a valid URL and the passanger data is displayed correctly', () => {

        FlightPage.openFlightsWithoutPassengers();
        FlightPage.btnBook.click();

        BookingPage.bookAFlight();

        // Validar que la URL tenga algo
        // Validar que hayan vuelos disponibles
    });
}); 