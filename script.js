notWorking = "This is not working";

let elementByClassParseFloat = (className = '') => {

    return parseFloat(document.getElementsByClassName(className)[0].value);
}

// A function to check if a number is positive or negative

const checkNumberPositivty = () => {

    let userNumber = elementByClassParseFloat('userNumber');


    if (userNumber >= 0) {
        return "positive!"
    } else if (userNumber < 0) {
        return "negative!"
    } else {
        return notWorking
    }
}

// A function to convert a number of days into year (rounds to the nearest year)

const handleCalculateAge = () => {
    let totalDays = parseFloat(document.getElementById('totalDays').value)

    let calculateYears = totalDays / 365
    let calculateTheDays = totalDays % 365;
    const leepYearCounter = Math.floor(calculateYears / 4);
    let calculatedDaysWithLeapYrs = calculateTheDays + leepYearCounter;

    if (totalDays < 365) {
        return `${totalDays} days equate to 0 years and ${totalDays} days`
    } else if (calculatedDaysWithLeapYrs > 365) {
        calculateYears =  calculateYears + Math.floor(calculatedDaysWithLeapYrs / 365);
        calculatedDaysWithLeapYrs = Math.floor(calculatedDaysWithLeapYrs % 365);
        return `${totalDays} days equate to ${Math.floor(calculateYears)} Years and ${Math.floor(calculatedDaysWithLeapYrs)} days`
    } else if (calculatedDaysWithLeapYrs == 365) {
        calculateYears++
        return `${totalDays} days equate to ${Math.floor(calculateYears)} Years and 0 days`
    }else if (totalDays == 4 * 365){
        return `${calculateYears} years and 365 Days (It'd be a leap Year)`
    } else {
        return `${totalDays} days equate to ${Math.floor(calculateYears)} Years and ${Math.floor(calculatedDaysWithLeapYrs)} days`
    }
}



//a function to test 3 values and display the highest

const handleValueChecker = () => {
    let inputValue1 = parseInt(document.getElementById('userValue1').value);
    let inputValue2 = parseInt(document.getElementById('userValue2').value);
    let inputValue3 = parseInt(document.getElementById('userValue3').value);

    valuesToCheckArray = [inputValue1, inputValue2, inputValue3];

    let highest = valuesToCheckArray[0];

    valuesToCheckArray.forEach(num => {
        if (num > highest) {
            highest = num;
        }
    })
    return `The Highest number entered is ${highest}`;
}

// A function to display the last names of names entered into an input

const getLastNames = () => {

    let inputName1 = document.getElementById('userName1').value.split(" ");
    let inputName2 = document.getElementById('userName2').value.split(" ");
    let inputName3 = document.getElementById('userName3').value.split(" ");
    let inputName4 = document.getElementById('userName4').value.split(" ");

    let namesToCheck = [inputName1, inputName2, inputName3, inputName4];
    let lastName = [];
    let allLastNames = [];

    namesToCheck.forEach(arr => {
        lastName = arr.slice(arr.length - 1);
        allLastNames.push(" " + lastName)
        message = `all the last names are: ${allLastNames}`
    })
    return message;
}
// a function that takes a list of numbers, will check if all are positive 
// or if there are any negatives and return a statment to show this

const updateListOfArrays = () => {
    let listOfArrays = document.getElementById('listOfArrays');
    return listOfArrays.options[listOfArrays.selectedIndex].text.split(",");
}

const checkNumberPositivtyOfList = () => {

    const selectedArray = updateListOfArrays();

    let positivity = "True";
    let positiveCount = selectedArray.length;
    let negativeCount = 0;
    selectedArray.some(num => {
        num = parseInt(num)
        if (num < 0) {
            negativeCount++;
            positiveCount--;
            num = "False";
            positivity = num;
        }
    })
    return `This array will be shown as ${positivity} there are ${negativeCount} negative and ${positiveCount} positive numbers in this array.`;
}