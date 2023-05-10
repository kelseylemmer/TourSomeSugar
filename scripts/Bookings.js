import { getBands, getBookings, getVenues } from "./database.js"

// Get copy of state for use in this module
const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a booking list item clicked?
        if (itemClicked.dataset.type === "booking") {
            // Get the id of the booking clicked
            const bookingBandId = parseInt(itemClicked.dataset.bandid)
        
            for (const band of bands) {
                if (band.id === bookingBandId) {
                    window.alert(`${band.name} \n${band.genre} \nFormed in ${band.formed} \n${band.numMembers} band members`)
                }
            }
        }
    }
)



// Function whose responsibility is to find the band for an booking
const findBand = (booking, allBands) => {
    let bookingBand = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand = band.name
        }
    }
    return bookingBand
}

// Function whose responsibility is to find the venue for an booking
const findVenue = (booking, allVenues) => {
    let bookingVenue = null

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue.name
        }
    }
    return bookingVenue

}

export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)

        html += `<li data-type="booking" data-bandid="${booking.bandId}">${band} are playing ${venue} on ${new Date(booking.bookingDate).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

