const showData = [
    {
        date : "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
];

const shows = document.querySelector(".shows");

const showsRows = document.createElement("div");
showsRows.classList.add("shows__rows");

const showsHeading = document.createElement("h2");
showsHeading.classList.add("shows__heading");
showsHeading.textContent = "Shows";

const showsShow = document.createElement("div");
showsShow.classList.add("shows__show");

const showsTabletFlex = document.createElement("div");
showsTabletFlex.classList.add("shows__tablet-flex");

const tabletDate = document.createElement("h3");
tabletDate.classList.add("shows__tablet-date");
tabletDate.textContent = "DATE";

const tabletVenue = document.createElement("h3");
tabletVenue.classList.add("shows__tablet-venue");
tabletVenue.textContent = "VENUE";

const tabletLocation = document.createElement("h3");
tabletLocation.classList.add("shows__tablet-location");
tabletLocation.textContent = "LOCATION";

// display Date, Time, and Location headings of tablets & desktops
showsTabletFlex.append(
    tabletDate,
    tabletVenue,
    tabletLocation
);

showsShow.append(
    showsTabletFlex
);

showsRows.append(
    showsHeading,
    showsShow
);

shows.append(showsRows);

showData.forEach(shoObj => {
    displayShow(shoObj);
});


function displayShow(shoObj) {
    const showsFlex = document.createElement("div");
    showsFlex.classList.add("shows__flex");

    const mobileHeadingDate = document.createElement("h3");
    mobileHeadingDate.classList.add("shows__mobile-headings");
    mobileHeadingDate.textContent = "DATE";

    const showsDate = document.createElement("p");
    showsDate.classList.add("shows__date");
    showsDate.textContent = shoObj.date;

    const mobileHeadingVenue = document.createElement("h3");
    mobileHeadingVenue.classList.add("shows__mobile-headings");
    mobileHeadingVenue.textContent = "VENUE";

    const showsVenue = document.createElement("p");
    showsVenue.classList.add("shows__venue");
    showsVenue.textContent = shoObj.venue;

    const mobileHeadingLocation = document.createElement("h3");
    mobileHeadingLocation.classList.add("shows__mobile-headings");
    mobileHeadingLocation.textContent = "LOCATION";

    const showsLocation = document.createElement("p");
    showsLocation.classList.add("shows__location");
    showsLocation.textContent = shoObj.location;

    const button = document.createElement("button");
    button.classList.add("shows__button");
    button.textContent = "BUY TICKETS";

    const divider = document.createElement("hr");

    showsFlex.append(
        mobileHeadingDate, 
        showsDate,
        mobileHeadingVenue,
        showsVenue,
        mobileHeadingLocation,
        showsLocation,
        button
    );

    showsShow.append(
        showsFlex,
        divider
    );

    showsRows.append(
        showsShow
    );

    shows.append(showsRows);
}

// when row is selected
const selectedRow = document.querySelectorAll(".shows__flex");

selectedRow.forEach( e => {
    e.addEventListener("mousedown", event => {
        // if already selected, remove selected
        if (document.querySelector("#clicked") != null) {
            document.querySelector("#clicked").id = "";
            if(event.target.className !== "shows__flex") {
                event.target.parentElement.id = "clicked";
            }
            else {
                event.target.id = "clicked";
            }
        } else {
            if(event.target.className !== "shows__flex") {
                event.target.parentElement.id = "clicked";
            }
            else {
                event.target.id = "clicked";
            }
        }
    });
});