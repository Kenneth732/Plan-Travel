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


