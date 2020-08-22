const Page = require('./page');

class HomePage extends Page {

    addPassengers(number, passanger) {

        while(number > 0){

            $(`[data-test="PassengersRow-${passanger}"] [aria-label="increment"]`).click();
            number--;
        }
    }

    /* Search for a flight from TXL to London on a future date for 2 adults, 3 childs and 1 infant */
    search () {

        // Selects the departure point
        $('[data-test="PlacePickerInputPlace-close"]').click();
        $('[data-test="PlacePickerInput-origin"] input').setValue("TXL");
        $('[data-test="PlacePickerRow-station"]').click();

        //Selects the destination point
        $('[data-test="PlacePickerInput-destination"] input').setValue("London");
        $('[data-test="PlacePickerRow-city"]').click();

        // Selects the Departure and Return time as 'Anytime'
        $('//div[@data-test="SearchDateInput" and contains(., "Departure")]').click();
        $('//div[text()="Set dates"]').click();

        // Clicks the passangers dropdown menu
        $('[data-test="PassengersField"] button').click();

        // Select the ammount of passangers
        this.addPassengers(1, "adults");
        this.addPassengers(3, "children");
        this.addPassengers(1, "infants");

        // Clicks on Search
        $('//div[text()="Search"]').click();
    }

    open () {
        return super.open('/us');
    }
}

module.exports = new HomePage();
