const numberDisplay = document.getElementById('number-display');
const generateBtn = document.getElementById('generate-btn');

const getNumberColor = (number) => {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
};

const generateNumbers = () => {
    numberDisplay.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const circle = document.createElement('span');
        circle.textContent = number;
        circle.style.backgroundColor = getNumberColor(number);
        numberDisplay.appendChild(circle);
    });
};

generateBtn.addEventListener('click', generateNumbers);

// Initial generation
generateNumbers();