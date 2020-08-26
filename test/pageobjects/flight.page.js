const Page = require('./page');

class FlightPage extends Page {

    get loadingDiv() { return $('//div[contains(@class, "LoadingProvidersstyled__StyledLoadingProviders")]'); }
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

    openFlightsWithPassengers () {
        return super.open('/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-09-01/2020-09-30?adults=2&children=3&infants=1&transport=bus%2Ctrain');
    }

    openFlightsWithoutPassengers () {
        return super.open('/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31');
    }
}

module.exports = new FlightPage();
