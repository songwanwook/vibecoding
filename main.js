const numberDisplay = document.getElementById('number-display');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');

// Theme Management
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lotto-theme', theme);
    const icon = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.querySelector('.icon').textContent = icon;
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
};

// Initialize Theme
const savedTheme = localStorage.getItem('lotto-theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', toggleTheme);

// Lotto Logic
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