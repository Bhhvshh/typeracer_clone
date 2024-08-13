document.addEventListener("DOMContentLoaded", function() {
    const passageElement = document.getElementById("passage");
    const racestartElement = document.getElementById("racestart");
    const inputElement = document.getElementById("input");
    const startButton = document.getElementById("start");
    const restartButton = document.getElementById("restart");
    const resultElement = document.getElementById("result");
    const carElement = document.getElementById("car");
    const pathElement = document.getElementById("path");

    // Sample passage
    
    let passage;
    let words;
    let currentWordIndex = 0;
    let startTime;
    
    async function fetchRandomPassage() {
        try {
            const response = await fetch('/passage'); // Fetching from the '/passage' endpoint
            const data = await response.json();
            return data[0].text; // Assuming the passage text is stored in a field named 'text'
        } catch (error) {
            console.error('Error fetching passage:', error);
            return null;
        }
    }

    
    const racenotice = "The race is on! Type the text below:";

    startButton.addEventListener("click", async function() {
         passage = await fetchRandomPassage(); // Fetch random passage
        if (passage) {
         words = passage.split(" ");
        racestartElement.textContent = racenotice;
        passageElement.textContent = passage;
        inputElement.focus();
        startButton.style.display = "none"; // Hide start button
        startTime = Date.now(); // Start time for WPM calculation
        promptNextWord();}
        else{ console.error("Failed to fetch passage.")}
    });
    
//     restartButton.addEventListener("click", async function() {
//         passage = await fetchRandomPassage(); // Fetch random passage
//        if (passage) {
//         words = passage.split(" ");
//        racestartElement.textContent = racenotice;
//        passageElement.textContent = passage;
//        inputElement.focus();
//        startButton.style.display = "none"; // Hide start button
//        startTime = Date.now(); // Start time for WPM calculation
//        promptNextWord();}
//        else{ console.error("Failed to fetch passage.")}
//    });
    function promptNextWord() {
        if (currentWordIndex < words.length) {
            inputElement.value = '';
            inputElement.placeholder = `Type "${words[currentWordIndex]}"`;
        } else {
            inputElement.value = '';
            inputElement.placeholder = '';
            inputElement.disabled = true;
            const endTime = Date.now();
            const timeInSeconds = (endTime - startTime) / 1000;
            const wpm = Math.round((passage.length / 5) / (timeInSeconds / 60));//passage->words
         // Calculate WPM (5 words per line)
         restartButton.style.display = "block";
            
            resultElement.textContent = `Your WPM: ${wpm}`;
        }
    }

    inputElement.addEventListener("input", function() {
        const typedWord = inputElement.value.trim();
        const currentWord = words[currentWordIndex];
        // currentWord+= " ";

        if (typedWord === currentWord) {
            // words[currentWordIndex] = `<span class="correct">${currentWord}</span>`;
            currentWordIndex++;
            promptNextWord();
            moveCar();
        } else if (currentWord.startsWith(typedWord)) {
            inputElement.classList.remove("wrong");
            inputElement.classList.add("correct");
        } else {
            inputElement.classList.add("wrong");
        }
    });

    function moveCar() {
        const containerWidth = document.querySelector('.container').offsetWidth;
        const pathWidth = pathElement.offsetWidth;
        const step = pathWidth / words.length;
        const carPosition = currentWordIndex * step;
        carElement.style.left = `${carPosition}px`;
    }
});
