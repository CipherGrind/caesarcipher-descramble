function caesarCipher(str, shift) {
    const lowerCaseStr = str.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const numbers = '0123456789'.split('');
    let scrambledStr = '';

    for (let i = 0; i < lowerCaseStr.length; i++) {
        const currentChar = lowerCaseStr[i];
        if (alphabet.includes(currentChar)) {
            const currentIndex = alphabet.indexOf(currentChar);
            let newIndex = (currentIndex + shift) % 26;
            if (newIndex < 0) newIndex += 26;
            scrambledStr += alphabet[newIndex];
        } else if (numbers.includes(currentChar)) {
            const currentIndex = numbers.indexOf(currentChar);
            let newIndex = (currentIndex + shift) % 10;
            if (newIndex < 0) newIndex += 10;
            scrambledStr += numbers[newIndex];
        } else {
            scrambledStr += currentChar;
        }
    }
    return scrambledStr;
}

document.getElementById('scrambleButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const shiftValue = parseInt(document.getElementById('shiftValue').value);
    const scrambledText = caesarCipher(inputText, shiftValue);
    document.getElementById('outputText').innerText = scrambledText;
});

