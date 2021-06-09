const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        fare = fare * multiplier;
        return fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);        
    }
    else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    } 
}