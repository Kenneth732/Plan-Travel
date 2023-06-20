let tripList = [];

window.addEventListener('load', () => {
    const storedTrips = JSON.parse(localStorage.getItem('trip'));

    if(storedTrips){
        tripList = storedTrips;
        displayTrips(tripList);
    }
});

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    let destination = document.querySelector('#destinationInput').value;
    let startDate = document.querySelector('#startDateInput').value;
    let endDate = document.querySelector('#endDateInput').value;

    if(destination.trim() === '' || startDate.trim() === '' || endDate.trim() === ''){
        alert('Please fill in the fields')
        return;
    }

    addTrip(destination, startDate, endDate);
    destination.value = '';
    startDate.value = '';
    endDate.value = '';
});

function addTrip(destination, startDate, endDate){
        let newTrip = {
        destination: destination,
        startDate: startDate,
        endDate: endDate
    }

    tripList.push(newTrip)
    displayTrips(tripList);
    localStorage.setItem('trips', JSON.stringify(tripList));
}

function displayTrips(trips){
    let tripListElement = document.querySelector('#tripList')
    tripListElement.innerHTML = '';

    trips.map((trip) => {
        const tripElement = document.createElement('div');
        tripElement.textContent = ` ${trip.destination} - ${trip.startDate} to ${trip.endDate} `;
        tripListElement.appendChild(tripElement);
    });
}