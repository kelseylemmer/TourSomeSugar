import { getBands, getBookings, getVenues } from './database.js';

const venuesList = getVenues();
const bandsList = getBands();
const bookingsList = getBookings();

// Function whose responsibility is to find the venue for a booking
const findVenue = (booking, allVenues) => {
  let bookingVenue = null;

  for (const venue of allVenues) {
    if (venue.id === booking.venueId) {
      bookingVenue = venue;
    }
  }
  return bookingVenue;
};

const findMessage = (bandId) => {
  let venueArray = [];

  for (const booking of bookingsList) {
    if (booking.bandId === bandId) {
      const venue = findVenue(booking, venuesList);
      venueArray.push(venue.name);
    }
  }
  if (venueArray.length === 0) {
    return 'This band is not playing any venues';
  } else {
    return `This band is playing: ${venueArray.join(' , ')}`;
  }
};

document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === 'band') {
    const bandId = parseInt(itemClicked.dataset.id);

    for (const band of bandsList) {
      if (band.id === bandId) {
        const alert = findMessage(bandId);
        window.alert(alert);
      }
    }
  }
});

export const Bands = () => {
  let html = '<ul>';

  for (const band of bandsList) {
    html += `<li data-type="band" data-id="${band.id}">
                    ${band.name}
                </li>`;
  }

  html += '</ul>';

  return html;
};
