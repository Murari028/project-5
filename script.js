const moodButtons = document.querySelectorAll('.mood-button');
const moodTracker = document.querySelector('.mood-tracker');

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.id;
        moodTracker.className = 'mood-tracker';
        moodTracker.classList.add(mood);
    });
});

// Add this section for dark mode
/* const darkModeToggle = document.querySelector('.dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
}); 