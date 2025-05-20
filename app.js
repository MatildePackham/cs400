// Simple handler for the sign up form
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for signing up!');
    form.reset();
});
