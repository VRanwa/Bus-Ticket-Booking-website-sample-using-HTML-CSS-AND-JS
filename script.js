const form = document.querySelector('form');
const frominput =document.querySelector('#from');
const destinationInput = document.querySelector('#destination');
const dateInput = document.querySelector('#date');
const passengersInput = document.querySelector('#passengers');



form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (frominput.value.trim()=== ''){
    alert('Please enter your location.');
    return;
  }
  // Validation checks
  if (destinationInput.value.trim() === '') {
    alert('Please enter a destination.');
    return;
  }
  
  if (dateInput.value.trim() === '') {
    alert('Please enter a date.');
    return;
  }
  
  if (passengersInput.value.trim() === '') {
    alert('Please select the number of passengers.');
    return;
  }
  
  // If validation checks pass, create booking
  const from = frominput.value.trim();
  const destination = destinationInput.value.trim();
  const date = dateInput.value.trim();
  const passengers = passengersInput.value.trim();
  
  alert(`Thanks for Traveling with us!
  Hope to pick you up soon! 
  You have booked a trip to ${destination} from ${from} on ${date} for ${passengers} passengers .`);
});
