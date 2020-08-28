const FlightPage = require('../pageobjects/flight.page');
const BookingPage = require('../pageobjects/booking.page');

describe('Book page', () => {
    it('should book a flight and get a valid URL and the passanger data is displayed correctly', () => {

        FlightPage.openFlightsWithoutPassengers();
        FlightPage.btnBook.click();

        BookingPage.bookAFlight();

        // Verifies that the URL contains the departure place
        expect(browser).toHaveUrlContaining("berlin"); 
        // Verifies that the URL contains the arrival place
        expect(browser).toHaveUrlContaining("london");

        let currentUrl = browser.getUrl();
        console.log(currentUrl); 
        // Validar que la URL tenga algo
        // Datos de login
    });
}); 