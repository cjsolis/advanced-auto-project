const Page = require('./page');

class BookingPage extends Page {

    get inputEmail() { return $('[name="email"]'); }
    get inputPhone() { return $('[name="phone"]'); }
    get inputFirstName() { return $('[name="firstname"]'); }
    get inputLastName() { return $('[name="lastname"]'); }
    get selectNationality() { return $('[data-test="ReservationPassenger-nationality"]'); }
    get selectGender() { return $('//div[contains(@class, "GenderWrapper")]//select'); }
    get selectBirthMonth() { return $('[name="birthMonth"]'); }
    get selectBirthDay() { return $('[name="birthDay"]'); }
    get selectBirthYear() { return $('[name="birthYear"]'); }
    get inputIdNumber() { return $('[name="idNumber"]'); }
    get checkboxNoExpiry() { return $('//div[contains(@class, "FormikDatepicker")]'); }

    get btnContinue() { return $('[data-test="StepControls-passengers-next"]'); }

    
    get btnContinueWithStandard() { return $('[data-test="fareTypesStandardButton"]'); }
    get btnContinueWithPlus() { return $('[data-test="servicePackagesPlusButton"]'); }
    get btnContinue2() { return $('[data-test="StepControls-AdditionalService-next"]'); }

    // Passenger name //span[contains(text(), "Mr")]
    // Passenger birthDay //span[contains(text(), "Mr")]/parent::*//time

    

    get btnBook() { return $('[data-test="BookingButton"]'); }

    selectTransportOnlyByName(transportName){

        $(`//div[@data-test="TransportOptionChoiceGroup"]//label[contains(., "${transportName}")]`).moveTo();
        $(`//div[contains(@class, "FilterWrapper__StyledContentWrapper") and contains(., "${transportName}")]//button`).click();
    }

    selectTransportByName(transportName){

        $(`//div[@data-test="TransportOptionChoiceGroup"]//label[contains(., "${transportName}")]`).click();
    }

    waitForResultsToLoad(){

        this.loadingDiv.waitForDisplayed({ timeout: 60000, reverse: true});
    }
}

module.exports = new BookingPage();
