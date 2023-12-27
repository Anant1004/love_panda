// script.js
const button = document.getElementById('move');

button.addEventListener('mouseover', () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const newLeft = Math.random() * (screenWidth - button.clientWidth);
    const newTop = Math.random() * (screenHeight - button.clientHeight);

    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
});
