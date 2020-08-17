const Page = require('./page');

class HomePage extends Page {

    expectedUrl = "";

    get btnFlights () { return $('[data-name="flights"]') }

    /* Elements for the 'From' and 'To' input fields*/
    get containerFrom () { return $('#s2id_location_from') }
    get containerTo () { return $('#s2id_location_to') }
    get inputFields () { return $('#select2-drop .select2-input') }
    get inputResults () { return $('(//div[@class="select2-result-label"])[1]') }   

    /* Elements for the Depart calendar*/
    get inputDepart () { return $('#FlightsDateStart') }
    get btnCalendarNext() { return $('//div[contains(@style,"left")]//div[@data-action="next"]') }
    get btnCalendarDay() { return $('//div[contains(@style,"left")]//div[@data-date="7"]') }
    
    /* Elements for the add passengers buttons */
    get btnAddAdults() { return $('(//div[@id="flights"]//button[text()="+"])[1]') }
    get btnAddChild() { return $('(//div[@id="flights"]//button[text()="+"])[2]') }
    get btnAddInfant() { return $('(//div[@id="flights"]//button[text()="+"])[3]') }

    get btnSearch () { return $('//div[@id="flights"]//button[contains(text(), "Search")]') }

    /* Clicks the add adults button for the input ammount */
    addAdults(number) {

        while(number > 0){

            this.btnAddAdults.click();
            number--;
        }
    }

    /* Clicks the add child button for the input ammount */
    addChild(number) {

        while(number > 0){

            this.btnAddChild.click();
            number--;
        }
    }

    checkValidResultUrl(actualUrl){

        return this.expectedUrl == actualUrl;
    }

    /* Clicks the add infants button for the input ammount */
    addInfant(number) {

        while(number > 0){

            this.btnAddInfant.click();
            number--;
        }
    }

    /* Search for a flight from SJO to TXL on a future date for 2 adults, 3 childs and 1 infant */
    search () {
        this.btnFlights.click();

        // Select departure
        this.containerFrom.click();
        this.inputFields.setValue('SJO');
        this.inputResults.click();

        // Select destination
        this.containerTo.click();
        this.inputFields.setValue('TXL');
        this.inputResults.click();

        // Select the 7th from next month
        this.inputDepart.click();
        this.btnCalendarNext.click();
        this.btnCalendarDay.click();

        // Select the ammount of passangers
        this.addAdults(1);
        this.addChild(3);
        this.addInfant(1);

        this.expectedUrl = `https://www.phptravels.net/flights/search/SJO/TXL/oneway/economy/${this.inputDepart.getValue()}/2/3/1`;

        this.btnSearch.click();
    }

    open () {
        return super.open('/home');
    }
}

module.exports = new HomePage();
