
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

    let currentWord = eightLetterWords[parseInt(Math.random()*eightLetterWords.length)];

    
    console.log(currentWord);

    for (let index = 0; index < currentWord.length; index++) {
        const element = currentWord[index];
        console.log("Letter at index " + index + " is " + element);
    }

    console.log("***");
    console.log(currentWord[parseInt(Math.random()*currentWord.length)]);
    

