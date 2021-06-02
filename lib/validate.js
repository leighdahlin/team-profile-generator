const confirmNotBlank = async (input) => {
    if(input==="") {
        return 'Please enter an office number';
    } else {
        return true;
    }
 };

 const confirmAnswerString = async (input) => {
    if (!isNaN(input)) {
        return 'Please enter a valid name'
    } else {
        return true;
    }
 };

 const confirmAnswerNumber = async (input) => {
    if (isNaN(input)) {
        return 'Please enter a valid number'
    } else {
        return true;
    }
 };

 module.exports = confirmNotBlank;
 module.exports = confirmAnswerString;
 module.exports = confirmAnswerNumber;