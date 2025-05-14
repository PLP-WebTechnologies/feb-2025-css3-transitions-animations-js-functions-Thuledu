const button = document.getElementById('colorButton');

// Function to set the button color based on local storage
function setButtonColor() {
    const colorPreference = localStorage.getItem('buttonColor');
    if (colorPreference) {
        button.classList.add('clicked');
    }
}

// Function to handle button click
button.addEventListener('click', () => {
    button.classList.toggle('clicked');
    // Store the user's preference in local storage
    if (button.classList.contains('clicked')) {
        localStorage.setItem('buttonColor', 'clicked');
    } else {
        localStorage.removeItem('buttonColor');
    }
});

// Set the button color on page load
setButtonColor();
