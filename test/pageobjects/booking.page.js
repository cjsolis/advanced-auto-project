const Page = require('./page');

class BookingPage extends Page {

    // Passenger name //span[contains(text(), "Mr")]
    // Passenger birthDay //span[contains(text(), "Mr")]/parent::*//time

    bookAFlight() {

        $('[name="email"]').setValue("test@test.com");
        $('[name="phone"]').setValue("1234567890");

        $('[name="firstname"]').setValue("First Name");
        $('[name="lastname"]').setValue("Last Name");

        $('[data-test="ReservationPassenger-nationality"]').selectByAttribute("value", "us");
        $('//div[contains(@class, "GenderWrapper")]//select').selectByAttribute("value", "mr");
        $('[name="birthMonth"]').selectByAttribute("value", "01");
        $('[name="birthDay"]').setValue("01");
        $('[name="birthYear"]').setValue("2000");

        $('[name="idNumber"]').setValue("123456789");

        $('//div[contains(@class, "FormikDatepicker")]').click();

        $('[data-test="StepControls-passengers-next"]').click();
        $('[data-test="fareTypesStandardButton"]').click();
        $('[data-test="servicePackagesPlusButton"]').click();
        $('[data-test="StepControls-AdditionalService-next"]').click();
    }
}

module.exports = new BookingPage();
