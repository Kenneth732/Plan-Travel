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

    // Ensure the end date is after the start date
    if (new Date(endDate) <= new Date(startDate)) {
        alert('End date must be after the start date.');
        return; // Abort adding the trip
    }

    // Add the trip
    addTrip(destination, startDate, endDate);

    // Reset the trip input fields
    destinationInput.value = '';
    startDateInput.value = '';
    endDateInput.value = '';
});

// Function to add trips
function addTrip(destination, startDate, endDate) {
    // Create a new trip object
    let newTrip = {
        destination: destination,
        startDate: startDate,
        endDate: endDate
    };

    // Add the new trip to the tripList array
    tripList.push(newTrip);

    // Call a function to handle displaying the trips
    displayTrips(tripList);

    // Save the updated tripList to local storage
    localStorage.setItem('trips', JSON.stringify(tripList));
}

// Function to display the trips
function displayTrips(trips) {
    // Get the element where the trip list will be displayed
    let tripListElement = document.getElementById('tripList');

    // Clear any existing content
    tripListElement.innerHTML = '';

    // Iterate over the trips array and generate HTML for each trip
    trips.forEach(trip => {
        let tripElement = document.createElement('li');
        tripElement.textContent = `${trip.destination} - ${trip.startDate} to ${trip.endDate}`;

        tripListElement.appendChild(tripElement);
    });
}

// Call the displayTrips function initially to show any existing trips
displayTrips(tripList);
