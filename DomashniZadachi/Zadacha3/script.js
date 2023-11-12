window.onload = function () {
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

    let currentWord;
    let finalArray;
    let controlArray;

    let attempts = 0;
    const maxAttempts = 5;




    //testing

    // for (let index = 0; index < currentWord.length; index++) {
    //     const element = currentWord[index];
    //     console.log("Letter at index " + index + " is " + element);
    // }

    // console.log("***");
    // console.log(currentWord[parseInt(Math.random()*currentWord.length)]);



    document.getElementById("Start").addEventListener("click", function () {
        setup(eightLetterWords, currentWord, finalArray, controlArray, attempts);
        document.getElementById("gameElements").style.display = 'flex';
        document.getElementById("Start").style.display = 'none';

    });

    document.getElementById("checkButton").addEventListener("click", function () {
        if (attempts < maxAttempts) {
            attempts++;
        } else {
            alert("You reached the max number of attempts.");
        }
    });

}


function setup(array, currentWord, final, controlArray, attempts) {
    //picking a random word
    currentWord = array[parseInt(Math.random() * array.length)].toUpperCase();

    //this will be the final array
    finalArray = new Array(currentWord.length).fill(0);

    //creating control array
    controlArray = new Array(currentWord.length);

    for (let index = 0; index < currentWord.length; index++) {
        controlArray[index] = [currentWord[index], 0];
    }

    //choosing 3 random letters

    let chosenCount = 0;

    while (chosenCount < 3) {
        let randomIndex = parseInt(Math.random() * currentWord.length);

        if (controlArray[randomIndex][1] == 0) {
            finalArray[randomIndex] = currentWord[randomIndex];
            controlArray[randomIndex][1] = 1;
            chosenCount++;
        }
    }

    for (let index = 0; index < currentWord.length; index++) {
        console.log(finalArray[index]);
    }

    // function calls and events

    console.log(currentWord);

    generateInputs(parseInt(currentWord.length), controlArray, finalArray);
    
    document.getElementById("checkButton").addEventListener("click", function () {
        console.log(getValuesOfInputs(finalArray));
        const inputValues = getValuesOfInputs(finalArray);

        for (let index = 0; index < currentWord.length; index++) {
            if (inputValues[index] === currentWord[index]) {
                // console.log("Input array: " + getValuesOfInputs(finalArray)[index] + " Final array: " + finalArray[index]);
                finalArray[index] = inputValues[index];
            }
        }
            console.log(finalArray);

        generateInputs(parseInt(currentWord.length), controlArray, finalArray);

        if (finalArray.join('') == currentWord) {
            alert("Congrats");
            document.getElementById("game").style.display = 'none';
            document.getElementById("restart").style.display = 'flex';
            document.getElementById("restart").addEventListener("click", function () {
                location.reload(); // Reload the page
            });
        }
    });

    

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

        if (temp == null) {
            inputArray[index] = arr[index];
        } else {
            inputArray[index] = temp.value.toUpperCase();
        }
    }

    // console.log("Input Array: " +inputArray);

    // console.log("final Array: "+arr);

    return inputArray;
}



