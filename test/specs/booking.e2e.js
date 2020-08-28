const FlightPage = require('../pageobjects/flight.page');
const BookingPage = require('../pageobjects/booking.page');
const expectChai = require("chai").expect;

describe('Book page', () => {
    it('should book a flight and get a valid URL and the passanger data is displayed correctly', () => {

        FlightPage.openFlightsWithoutPassengers();
        FlightPage.btnBook.click();

        BookingPage.bookAFlight();

        // Verifies that the URL contains the word booking
        expect(browser).toHaveUrlContaining("booking");
        // Verifies that the URL contains the departure place
        expect(browser).toHaveUrlContaining("berlin"); 
        // Verifies that the URL contains the arrival place
        expect(browser).toHaveUrlContaining("london");

        // Verifies that the page before the checkout contains the First Name, Last Name,
        // Id, Email and Phone number used on the test
        expectChai(BookingPage.name).to.equal("Mr First Name Last Name");
        expectChai(BookingPage.id).to.equal("123456789");
        expectChai(BookingPage.email).to.equal("test@test.com");
        expectChai(BookingPage.phone).to.equal("+1 1234567890");
    });
}); 