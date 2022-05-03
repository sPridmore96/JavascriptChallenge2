const numberError = "Enter valid numbers"

const checkNumberPositivty = () => {

let userNumber = document.getElementById('userNumber').value

    if (userNumber >= 0) {
        return "positive!"
    } else if (userNumber < 0){
        return "negative!"
    } else {
        return numberError
    }
}

const handleCalculateAge = () => {
    let totalDays =  document.getElementById('totalDays').value
    const calculatedAge = totalDays / 365;
    const message = `The total days enterd " ${totalDays} " equate to ${Math.round(calculatedAge)} Years`
    return message  
}

const handleValueChecker = () => {
    let inputValue1 = parseFloat(document.getElementById('userValue1').value);
    let inputValue2 = parseFloat(document.getElementById('userValue2').value);
    let inputValue3 = parseFloat(document.getElementById('userValue3').value);
    
    valuesToCheckArray = [inputValue1, inputValue2, inputValue3];
    
    let highest = valuesToCheckArray[0];

valuesToCheckArray.forEach(valueChecker)
    function valueChecker (num) {
        if (num > highest){
            highest = num ;
        } 
    }
    return `The Highest number entered is ${highest}`;
}
