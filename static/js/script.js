// Create an empty array to store trip details
let tripList = [];

// Load trips from local storage (if any) when the page loads
window.addEventListener('load', () => {
    // Retrieve the trips from local storage
    const storedTrips = JSON.parse(localStorage.getItem('trips'));

    // Check if there are any stored trips
    if (storedTrips) {
        tripList = storedTrips; // Update the tripList array
        displayTrips(tripList); // Update the displayed trips
    }
});

// Select the form element and add a submit event listener
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the values entered in the trip input fields
    let destinationInput = document.querySelector('#destinationInput');
    let startDateInput = document.querySelector('#startDateInput');
    let endDateInput = document.querySelector('#endDateInput');

    let destination = destinationInput.value;
    let startDate = startDateInput.value;
    let endDate = endDateInput.value;

    // Validate the input
    if (destination.trim() === '' || startDate === '' || endDate === '') {
        // Show an error message or provide visual feedback to the user
        alert('Please fill in all fields.');
        return; // Abort adding the trip
    }

})
