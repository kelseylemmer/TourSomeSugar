import { getBands, getBookings, getVenues } from './database.js';

const bandsList = getBands();
const venuesList = getVenues();
const bookingsList = getBookings();

// Function whose responsibility is to find the band for an booking
const findBand = (booking, allBands) => {
  let bookingBand = null;

  for (const band of allBands) {
    if (band.id === booking.bandId) {
      bookingBand = band;
    }
  }
  return bookingBand;
};

const findMessage = (venueId) => {
  let bandArray = [];

  for (const booking of bookingsList) {
    if (booking.venueId === venueId) {
      const band = findBand(booking, bandsList);
      bandArray.push(band.name);
    }
  }
  if (bandArray.length === 0) {
    return 'No bands are playing at this venue';
  } else {
    return `The following bands are playing at this venue: ${bandArray.join(
      ' , '
    )}`;
  }
};

document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === 'venue') {
    const venueId = parseInt(itemClicked.dataset.id);

    for (const venue of venuesList) {
      if (venue.id === venueId) {
        const alert = findMessage(venueId);
        window.alert(alert);
      }
    }
  }
});

export const Venues = () => {
  let html = '<ul>';

  for (const venue of venuesList) {
    html += `<li data-type="venue" data-id="${venue.id}">
                ${venue.name}
                </li>`;
  }

  html += '</ul>';

  return html;
};
