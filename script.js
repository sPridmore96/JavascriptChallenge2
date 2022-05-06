notWorking = "This is not working"

// A function to check if a number is positive or negative

const checkNumberPositivty = () => {

    let userNumber = document.getElementById('userNumber').value

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
    let totalDays = document.getElementById('totalDays').value
    const calculatedAge = totalDays / 365;
    const message = `The total days entered " ${totalDays} " roughly equate to ${Math.round(calculatedAge)} Years`
    return message
}

//a function to test 3 values and display the highest

const handleValueChecker = () => {
    let inputValue1 = parseFloat(document.getElementById('userValue1').value);
    let inputValue2 = parseFloat(document.getElementById('userValue2').value);
    let inputValue3 = parseFloat(document.getElementById('userValue3').value);

    valuesToCheckArray = [inputValue1, inputValue2, inputValue3];

    let highest = valuesToCheckArray[0];

    valuesToCheckArray.forEach(valueChecker)

    function valueChecker(num) {
        if (num > highest) {
            highest = num;
        }
    }
    return `The Highest number entered is ${highest}`;
}

// A function to display the last names of names entered into an input

const getLastNames = () => {

    let inputName1 = document.getElementById('userName1').value;
    let inputName2 = document.getElementById('userName2').value;
    let inputName3 = document.getElementById('userName3').value;
    let inputName4 = document.getElementById('userName4').value;

    let namesToCheck = [inputName1, inputName2, inputName3, inputName4];
    return namesToCheck[namesToCheck.length - 1];
}



// a function that takes a list of numbers, will check if all are positive 
// or if there are any negatives and return a statment to show this


const updateListOfArrays = () => {
    let listOfArrays = document.getElementById('listOfArrays');
    return listOfArrays.options[listOfArrays.selectedIndex].text.split(",");
}

const checkNumberPositivtyOfList = () => {

    const selectedArray = updateListOfArrays();

    let positivity = "positive!";
    let positiveCount = selectedArray.length;
    let negativeCount = 0;

    selectedArray.forEach(num => {
        num = parseInt(num)
        if (num < 0) {
            negativeCount++;
            positiveCount--;
            num = "negative!";
            positivity = num;
        }
    })
    return `This array will be shown as ${positivity} there are ${negativeCount} negative and ${positiveCount} positive numbers in this array.`;
}