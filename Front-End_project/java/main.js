document.addEventListener('DOMContentLoaded', function() {
    // Change button color when clicked and remove color from the first button
    const tabs = document.querySelectorAll('.tab');
    tabs[1].classList.add('clicked');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('clicked'));
            this.classList.add('clicked');
        });
    });
});
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
