const Page = require('./page');

class FlightPage extends Page {

    get loadingDiv() { return $('//div[contains(@class, "LoadingProvidersstyled__StyledLoadingProviders")]'); }
    get btnBook() { return $('[data-test="BookingButton"]'); }
    
    // Hovers the mouse over the 'transportName' option, and then clicks the 'Only' button
    selectTransportOnlyByName(transportName){

        $(`//div[@data-test="TransportOptionChoiceGroup"]//label[contains(., "${transportName}")]`).moveTo();
        $(`//div[contains(@class, "FilterWrapper__StyledContentWrapper") and contains(., "${transportName}")]//button`).click();
    }

    // Clicks the 'transportName' checkbox
    selectTransportByName(transportName){

        $(`//div[@data-test="TransportOptionChoiceGroup"]//label[contains(., "${transportName}")]`).click();
    }

    // Waits for the loadind div to dissapear
    waitForResultsToLoad(){

        this.loadingDiv.waitForDisplayed({ timeout: 60000, reverse: true});
    }

    openFlightsWithPassengers () {
        return super.open('/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31');
    }

    openFlightsWithoutPassengers () {
        return super.open('/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/anytime/anytime');
    }
}

module.exports = new FlightPage();
