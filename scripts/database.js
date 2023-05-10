const database = {
    bands: [{
        id: 1,
        name: "Electric Neon",
        genre: "Synthwave",
        formed: "2015",
        numMembers: 3
    }, {
        id: 2,
        name: "Sonic Storm",
        genre: "Power Metal",
        formed: "2008",
        numMembers: 5
    }, {
        id: 3,
        name: "The Moonlit Riders",
        genre: "Indie Rock",
        formed: "2012",
        numMembers: 4
    }, {
        id: 4,
        name: "The Crimson Rhapsodies",
        genre: "Gothic Metal",
        formed: "2011",
        numMembers: 6
    }, {
        id: 5,
        name: "Ethereal Bliss",
        genre: "Dream Pop",
        formed: "2016",
        numMembers: 4
    }, {
        id: 6,
        name: "Nova Skyline",
        genre: "Electronic",
        formed: "2014",
        numMembers: 2
    }, {
        id: 7,
        name: "Radiant Horizon",
        genre: "Post-Rock",
        formed: "2010",
        numMembers: 5
    }, {
        id: 8,
        name: "Midnight Mirage",
        genre: "Progressive Metal",
        formed: "2009",
        numMembers: 4
    }, {
        id: 9,
        name: "The Starry Nightingales",
        genre: "Folk",
        formed: "2013",
        numMembers: 3
    }, {
        id: 10,
        name: "Echoes of Euphoria",
        genre: "Alternative Rock",
        formed: "2017",
        numMembers: 3
    }, {
        id: 11,
        name: "Aurora Rising",
        genre: "Space Rock",
        formed: "2018",
        numMembers: 4
    }, {
        id: 12,
        name: "The Cosmic Dreamers",
        genre: "Psychedelic Rock",
        formed: "2019",
        numMembers: 3
    }, {
        id: 13,
        name: "The Velvet Shadows",
        genre: "Jazz Fusion",
        formed: "2016",
        numMembers: 5
    }, {
        id: 14,
        name: "Electric Oasis",
        genre: "Chillwave",
        formed: "2017",
        numMembers: 2
    }, {
        id: 15,
        name: "The Northern Lights",
        genre: "Folk Rock",
        formed: "2012",
        numMembers: 4
    }, {
        id: 16,
        name: "Galactic Sunrise",
        genre: "Electronic",
        formed: "2013",
        numMembers: 2
    }, {
        id: 17,
        name: "The Crystal Shores",
        genre: "Pop Rock",
        formed: "2014",
        numMembers: 4
    }, {
        id: 18,
        name: "Celestial Symphony",
        genre: "Symphonic Metal",
        formed: "2007",
        numMembers: 6
    }, {
        id: 19,
        name: "The Midnight Wanderers",
        genre: "Indie Folk",
        formed: "2010",
        numMembers: 3
    }, {
        id: 20,
        name: "Neon Nightscape",
        genre: "Electronic",
        formed: "2017",
        numMembers: 2
    }, {
        id: 21,
        name: "The Lost Souls",
        genre: "Gothic Rock",
        formed: "2011",
        numMembers: 4
    }, {
        id: 22,
        name: "The Mirage Makers",
        genre: "Indie Rock",
        formed: "2014",
        numMembers: 3
    }, {
        id: 23,
        name: "Lunar Lullabies",
        genre: "Dream Pop",
        formed: "2018",
        numMembers: 3
    }, {
        id: 24,
        name: "Rising Phoenix",
        genre: "Hard Rock",
        formed: "2009",
        numMembers: 5
    }, {
        id: 25,
        name: "The Electric Serenade",
        genre: "Synthpop",
        formed: "2012",
        numMembers: 2
    }, {
        id: 26,
        name: "The Velvet Tides",
        genre: "Blues Rock",
        formed: "2015",
        numMembers: 4
    }, {
        id: 27,
        name: "The Northern Breeze",
        genre: "Folk",
        formed: "2013",
        numMembers: 6
    }, {
        id: 28,
        name: "The Crystal Castles",
        genre: "Experimental",
        formed: "2010",
        numMembers: 2
    }, {
        id: 29,
        name: "The Midnight Movers",
        genre: "Soul",
        formed: "2016",
        numMembers: 7
    }, {
        id: 30,
        name: "The Solar Flares",
        genre: "Psychedelic Rock",
        formed: "2019",
        numMembers: 4
    }],

    venues : [{
        id: 1,
        name: "The Rolling Stage",
        address: "123 Rock n Roll St, Nashville, TN",
        size: 1500,
        occupancy: 200
    }, {
        id: 2,
        name: "The Funky Beat Hall",
        address: "456 Groove Ave, New Orleans, LA",
        size: 2000,
        occupancy: 250
    }, {
        id: 3,
        name: "The Jazz Joint",
        address: "789 Blue Note Blvd, New York, NY",
        size: 2500,
        occupancy: 300
    }, {
        id: 4,
        name: "The Rhythm Room",
        address: "2468 Percussion Pkwy, Los Angeles, CA",
        size: 1800,
        occupancy: 225
    }, {
        id: 5,
        name: "The Acoustic Oasis",
        address: "1357 Melody Ln, Austin, TX",
        size: 1700,
        occupancy: 210
    }, {
        id: 6,
        name: "The Bass Bunker",
        address: "369 Subwoofer St, Miami, FL",
        size: 2200,
        occupancy: 275
    }, {
        id: 7,
        name: "The Electric Lounge",
        address: "246 Electric Ave, San Francisco, CA",
        size: 1900,
        occupancy: 235
    }, {
        id: 8,
        name: "The Soul Shack",
        address: "123 Soulful Blvd, Memphis, TN",
        size: 2100,
        occupancy: 260
    }, {
        id: 9,
        name: "The Country Canteen",
        address: "456 Honky Tonk Hwy, Nashville, TN",
        size: 1800,
        occupancy: 225
    }, {
        id: 10,
        name: "The Indie Igloo",
        address: "789 Indie St, Portland, OR",
        size: 2000,
        occupancy: 250
    }, {
        id: 11,
        name: "The Ska Spot",
        address: "2468 Skankin St, Kingston, Jamaica",
        size: 2200, 
        occupancy: 275
    }, {
        id: 12,
        name: "The Metal Den",
        address: "1357 Mosh Pit Rd, Detroit, MI",
        size: 2500,
        occupancy: 300
    }, {
        id: 13,
        name: "The Funkadelic Factory",
        address: "369 Funky Town, Minneapolis, MN",
        size: 1700,
        occupancy: 210
    }, {
        id: 14,
        name: "The Classical Castle",
        address: "2468 Symphony Way, Vienna, Austria",
        size: 2100,
        occupancy: 260
    }, {
        id: 15,
        name: "The Reggae Retreat",
        address: "123 Roots Rd, Kingston, Jamaica",
        size: 1900,
        occupancy: 235
    }],
    bookings: [{
        id: 1,
        venueId: 9,
        bandId: 4,
        bookingDate: "2023-06-10"
    }, {
        id: 2,
        venueId: 2,
        bandId: 16,
        bookingDate: "2023-08-14"
    }, {
        id: 3,
        venueId: 4,
        bandId: 22,
        bookingDate: "2023-07-22"
    }, {
        id: 4,
        venueId: 10,
        bandId: 5,
        bookingDate: "2023-06-30"
    }, {
        id: 5,
        venueId: 12,
        bandId: 18,
        bookingDate: "2023-09-02"
    }, {
        id: 6,
        venueId: 1,
        bandId: 8,
        bookingDate: "2023-08-19"
    }, {
        id: 7,
        venueId: 8,
        bandId: 26,
        bookingDate: "2023-07-01"
    }, {
        id: 8,
        venueId: 13,
        bandId: 12,
        bookingDate: "2023-06-23"
    }, {
        id: 9,
        venueId: 7,
        bandId: 21,
        bookingDate: "2023-08-08"
    }, {
        id: 10,
        venueId: 6,
        bandId: 28,
        bookingDate: "2023-09-15"
    }, {
        id: 11,
        venueId: 11,
        bandId: 17,
        bookingDate: "2023-07-28"
    }, {
        id: 12,
        venueId: 3,
        bandId: 23,
        bookingDate: "2023-08-26"
    }, {
        id: 13,
        venueId: 14,
        bandId: 3,
        bookingDate: "2023-07-15"
    }, {
        id: 14,
        venueId: 5,
        bandId: 19,
        bookingDate: "2023-09-09"
    }, {
        id: 15,
        venueId: 15,
        bandId: 1,
        bookingDate: "2023-06-24"
    }, {
        id: 16,
        venueId: 2,
        bandId: 14,
        bookingDate: "2023-07-30"
    }, {
        id: 17,
        venueId: 12,
        bandId: 29,
        bookingDate: "2023-09-01"
    }, {
        id: 18,
        venueId: 8,
        bandId: 13,
        bookingDate: "2023-08-12"
    }, {
        id: 19,
        venueId: 3,
        bandId: 27,
        bookingDate: "2023-06-29"
    }, {
        id: 20,
        venueId: 6,
        bandId: 7,
        bookingDate: "2023-08-05"
    }]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

