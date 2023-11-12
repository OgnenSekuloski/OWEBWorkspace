window.onload = function() {
const eightLetterWords = [
    'Apple',
    'Table',
    'Nature',
    'Yellow',
    'Family',
    'Country',
    'Product',
    'Morning',
    'Library',
    'Silence',
    'Weather',
    'Diamond',
    'Freedom',
    'Explore',
    'Failure',
    'Imagine',
    'Journey',
    'Perfect',
    'Quality',
    'Success'
];


//picking a random word
    let currentWord = eightLetterWords[parseInt(Math.random()*eightLetterWords.length)].toUpperCase();

//this will be the final array
    let finalArray = new Array(currentWord.length).fill(0);
    
//creating control array
    let controlArray = new Array(currentWord.length);

    for (let index = 0; index < currentWord.length; index++) {
        controlArray[index] = [currentWord[index], 0];
    }

//choosing 3 random letters

    let chosenCount = 0;

    while(chosenCount < 3){
        let randomIndex = parseInt(Math.random()*currentWord.length);

        if (controlArray[randomIndex][1] == 0) {
            finalArray[randomIndex] = currentWord[randomIndex];
            controlArray[randomIndex][1] = 1;
            chosenCount++;
        }
    }

    for (let index = 0; index < currentWord.length; index++) {
        console.log(finalArray[index]);
    }

//testing
    console.log(currentWord);

    for (let index = 0; index < currentWord.length; index++) {
        const element = currentWord[index];
        console.log("Letter at index " + index + " is " + element);
    }

    console.log("***");
    console.log(currentWord[parseInt(Math.random()*currentWord.length)]);

    document.getElementById("checkButton").addEventListener("click", function() {getValuesOfInputs(finalArray)});

    console.log(finalArray.length);


}

//generating the correct number of inputs

function generateInputs(numOfInputs, arr1, arr2) {
    const inputCount = parseInt(numOfInputs);
    
    const inputContainer = document.getElementById('inputContainer');

    if (!inputContainer) {
        console.error("Error: 'inputContainer' element not found.");
        return;
    }

    inputContainer.innerHTML = ''; // Clear existing inputs

    for (let index = 0; index < inputCount; index++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'LetterInput' + index;
        input.maxLength = 1;
        inputContainer.appendChild(input);
        if (arr1[index][1] == 1) {
            input.defaultValue = arr2[index];
            input.disabled = true;
        }
    }
}



function getValuesOfInputs(arr) {
    let inputArray = new Array();
    for (let index = 0; index < arr.length; index++) {
        let temp = document.getElementById(`LetterInput${index}`);

        if(temp == null) {
            inputArray[index] = arr[index];
        } else {
            inputArray[index] = temp.value.toUpperCase();
        }
    }


    console.log(inputArray);

    return inputArray;
}



