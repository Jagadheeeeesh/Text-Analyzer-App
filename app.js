// This file contains the JavaScript code that processes user input for the text analyzer application.

document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("text-input");
    const wordCountDisplay = document.getElementById("word-count");
    const charCountDisplay = document.getElementById("char-count");
    const mostUsedWordDisplay = document.getElementById("most-used-word");
    const readingTimeDisplay = document.getElementById("reading-time");
    const longestWordDisplay = document.getElementById("longest-word");

    textInput.addEventListener("input", function() {
        const text = textInput.value.trim();
        const words = text.split(/\s+/).filter(Boolean);
        const wordCount = words.length;
        const charCount = text.length;
        const mostUsedWord = getMostUsedWord(words);
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed is 200 wpm
        const longestWord = getLongestWord(words);

        wordCountDisplay.textContent = `Word Count: ${wordCount}`;
        charCountDisplay.textContent = `Character Count: ${charCount}`;
        mostUsedWordDisplay.textContent = `Most Used Word: ${mostUsedWord}`;
        readingTimeDisplay.textContent = `Estimated Reading Time: ${readingTime} minute(s)`;
        longestWordDisplay.textContent = `Longest Word: ${longestWord}`;
    });

    function getMostUsedWord(words) {
        const wordMap = {};
        let maxCount = 0;
        let mostUsedWord = '';

        words.forEach(word => {
            wordMap[word] = (wordMap[word] || 0) + 1;
            if (wordMap[word] > maxCount) {
                maxCount = wordMap[word];
                mostUsedWord = word;
            }
        });

        return mostUsedWord || 'N/A';
    }

    function getLongestWord(words) {
        return words.reduce((longest, current) => {
            return current.length > longest.length ? current : longest;
        }, '');
    }
});