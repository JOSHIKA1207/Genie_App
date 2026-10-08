/* =====================================================
   GENIE APP JAVASCRIPT
   ===================================================== */


/* =====================================================
   SERVICE DATA
   ===================================================== */

const services = {

    "Home Deep Cleaning": {

        category: "Cleaning",

        icon: "🧹",

        rating: "⭐ 4.8 / 5",

        description:
            "Complete home deep cleaning service by trained professionals.",

        location:
            "Available near your location",

        price:
            "Starting from ₹499",

        availability:
            "Available today: 9:00 AM - 8:00 PM",

        about:
            "The service includes floor cleaning, bathroom cleaning, kitchen cleaning, dust removal and general deep cleaning."

    },


    "Electrician": {

        category: "Fixing",

        icon: "⚡",

        rating: "⭐ 4.7 / 5",

        description:
            "Professional electrical repair and installation service.",

        location:
            "Available near your location",

        price:
            "Starting from ₹199",

        availability:
            "Available today: 8:00 AM - 9:00 PM",

        about:
            "Get help with switches, wiring, lights, fans, sockets and other electrical problems."

    },


    "Bike Mechanic": {

        category: "Vehicle",

        icon: "🏍️",

        rating: "⭐ 4.6 / 5",

        description:
            "Bike servicing, maintenance and emergency repair.",

        location:
            "Available near your location",

        price:
            "Starting from ₹299",

        availability:
            "Available today: 8:00 AM - 8:00 PM",

        about:
            "Services include general servicing, brake repair, tyre problems, oil changes and emergency breakdown assistance."

    },


    "Laptop Service": {

        category: "E-Products",

        icon: "💻",

        rating: "⭐ 4.9 / 5",

        description:
            "Laptop repair, cleaning and software support.",

        location:
            "Available near your location",

        price:
            "Starting from ₹399",

        availability:
            "Available today: 10:00 AM - 7:00 PM",

        about:
            "Get support for laptop hardware problems, software issues, overheating, cleaning and upgrades."

    },


    "Pizza Restaurant": {

        category: "Food",

        icon: "🍕",

        rating:
            "⭐ 4.5 / 5",

        description:
            "Pizza, burgers and fast food available for delivery.",

        location:
            "2.1 km from your location",

        price:
            "₹200 - ₹800",

        availability:
            "Open today: 11:00 AM - 11:00 PM",

        about:
            "Order pizzas, burgers, sides and beverages with home delivery."

    },


    "Grocery Store": {

        category: "Shopping",

        icon: "🛒",

        rating:
            "⭐ 4.7 / 5",

        description:
            "Daily groceries and household products.",

        location:
            "1.4 km from your location",

        price:
            "Prices vary",

        availability:
            "Open today: 7:00 AM - 10:00 PM",

        about:
            "Shop for vegetables, fruits, groceries, snacks, beverages and household products."

    },


    "Nearby Pharmacy": {

        category: "Medicine",

        icon: "💊",

        rating:
            "⭐ 4.8 / 5",

        description:
            "Medicines and healthcare products.",

        location:
            "0.8 km from your location",

        price:
            "Prices vary",

        availability:
            "Open today: 8:00 AM - 11:00 PM",

        about:
            "Find medicines, healthcare products and other pharmacy items from nearby stores."

    },


    "Quick Pickup": {

        category: "Delivery",

        icon: "📦",

        rating:
            "⭐ 4.6 / 5",

        description:
            "Fast local pickup and delivery service.",

        location:
            "Available near your location",

        price:
            "Starting from ₹99",

        availability:
            "Available today: 8:00 AM - 10:00 PM",

        about:
            "Send documents, parcels, small packages and other items to nearby locations."

    }

};


/* =====================================================
   VIEW SERVICE
   ===================================================== */

function viewService(serviceName) {

    const service = services[serviceName];

    if (!service) {

        alert("Service information not found.");

        return;

    }


    document.getElementById("modalImage").textContent =
        service.icon;


    document.getElementById("modalCategory").textContent =
        service.category;


    document.getElementById("modalTitle").textContent =
        serviceName;


    document.getElementById("modalRating").textContent =
        service.rating;


    document.getElementById("modalDescription").textContent =
        service.description;


    document.getElementById("modalLocation").textContent =
        service.location;


    document.getElementById("modalPrice").textContent =
        service.price;


    document.getElementById("modalAvailability").textContent =
        service.availability;


    document.getElementById("modalAbout").textContent =
        service.about;


    document.getElementById("ratingMessage").textContent =
        "";


    document.getElementById("serviceModal")
        .classList.add("active");


    document.body.style.overflow = "hidden";

}


/* =====================================================
   CLOSE SERVICE
   ===================================================== */

function closeService() {

    document.getElementById("serviceModal")
        .classList.remove("active");


    document.body.style.overflow = "auto";

}


/* =====================================================
   CLICK OUTSIDE MODAL TO CLOSE
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const modal =
        document.getElementById("serviceModal");


    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            closeService();

        }

    });

});


/* =====================================================
   RATE SERVICE
   ===================================================== */

function rateService(rating) {

    document.getElementById("ratingMessage").textContent =
        "You rated this service " +
        rating +
        " out of 5 ⭐";

}


/* =====================================================
   BOOK SERVICE
   ===================================================== */

function bookService() {

    const serviceName =
        document.getElementById("modalTitle").textContent;


    alert(
        "Booking request created for " +
        serviceName +
        "!"
    );

}


/* =====================================================
   SEARCH
   ===================================================== */

/* =====================================================
   SEARCH
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchMessage = document.getElementById("searchMessage");

    const serviceCards = document.querySelectorAll(".service-card");


    function performSearch() {

        const searchText =
            searchInput.value.toLowerCase().trim();

        let found = false;


        /* If search is empty */

        if (searchText === "") {

            serviceCards.forEach(function (card) {

                card.style.display = "block";

            });

            searchMessage.textContent = "";

            return;
        }


        /* Search every service */

        serviceCards.forEach(function (card) {

            const name =
                card.getAttribute("data-name")
                    .toLowerCase();

            const category =
                card.getAttribute("data-category")
                    .toLowerCase();

            const content =
                card.textContent.toLowerCase();


            if (
                name.includes(searchText) ||
                category.includes(searchText) ||
                content.includes(searchText)
            ) {

                card.style.display = "block";

                found = true;

            } else {

                card.style.display = "none";

            }

        });


        /* Show result message */

        if (found) {

            searchMessage.textContent =
                "Services found for: " + searchText;

            searchMessage.style.color = "#6c4cff";

        } else {

            searchMessage.textContent =
                "❌ No services found for: " + searchText;

            searchMessage.style.color = "red";

        }


        /* Move to services */

        document.getElementById("services")
            .scrollIntoView({
                behavior: "smooth"
            });

    }


    /* SEARCH BUTTON */

    searchButton.addEventListener(
        "click",
        performSearch
    );


    /* ENTER KEY */

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                performSearch();

            }

        }
    );


    /* LIVE SEARCH WHILE TYPING */

    searchInput.addEventListener(
        "input",
        function () {

            if (searchInput.value.trim() === "") {

                serviceCards.forEach(function (card) {

                    card.style.display = "block";

                });

                searchMessage.textContent = "";

            }

        }
    );

});

/* =====================================================
   SEARCH USING ENTER KEY
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("searchInput");


    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            searchService();

        }

    });

});


/* =====================================================
   CATEGORY FILTER
   ===================================================== */

function selectCategory(category) {

    const cards =
        document.querySelectorAll(".service-card");


    cards.forEach(function (card) {

        const cardCategory =
            card.dataset.category;


        if (cardCategory === category) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("services")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   LOCATION
   ===================================================== */

function getLocation() {

    if (!navigator.geolocation) {

        alert(
            "Location is not supported by your browser."
        );

        return;

    }


    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            alert(
                "Location detected!\n\n" +
                "Latitude: " +
                latitude +
                "\n" +
                "Longitude: " +
                longitude
            );

        },


        function () {

            alert(
                "Unable to get your location."
            );

        }

    );

}


/* =====================================================
   ADD WORK / REMINDER
   ===================================================== */

function addWork() {

    const title =
        document.getElementById("workTitle")
            .value
            .trim();


    const date =
        document.getElementById("workDate")
            .value;


    const time =
        document.getElementById("workTime")
            .value;


    const reminder =
        document.getElementById("reminderTime")
            .value;


    /* VALIDATION */

    if (title === "") {

        alert("Please enter your work.");

        return;

    }


    if (date === "") {

        alert("Please select a date.");

        return;

    }


    if (time === "") {

        alert("Please select a time.");

        return;

    }


    /* CREATE WORK OBJECT */

    const work = {

        id: Date.now(),

        title: title,

        date: date,

        time: time,

        reminder: Number(reminder)

    };


    /* GET OLD WORK */

    let works =
        JSON.parse(
            localStorage.getItem("genieWorks")
        ) || [];


    /* ADD NEW WORK */

    works.push(work);


    /* SAVE */

    localStorage.setItem(
        "genieWorks",
        JSON.stringify(works)
    );


    /* CLEAR FORM */

    document.getElementById("workTitle")
        .value = "";

    document.getElementById("workDate")
        .value = "";

    document.getElementById("workTime")
        .value = "";


    /* DISPLAY */

    displayWorks();


    alert("Work added successfully!");

}


/* =====================================================
   DISPLAY WORKS
   ===================================================== */

function displayWorks() {

    const workList =
        document.getElementById("workList");


    let works =
        JSON.parse(
            localStorage.getItem("genieWorks")
        ) || [];


    if (works.length === 0) {

        workList.innerHTML =
            '<p class="empty-work">No work added yet.</p>';

        return;

    }


    workList.innerHTML = "";


    works.forEach(function (work) {

        const workDiv =
            document.createElement("div");


        workDiv.className =
            "work-item";


        const reminderText =
            getReminderText(work.reminder);


        workDiv.innerHTML = `

            <h4>
                ${work.title}
            </h4>

            <p>
                📅 ${formatDate(work.date)}
            </p>

            <p>
                🕐 ${work.time}
            </p>

            <p>
                🔔 ${reminderText}
            </p>

            <button
                class="delete-work"
                onclick="deleteWork(${work.id})">

                Delete

            </button>

        `;


        workList.appendChild(workDiv);

    });

}


/* =====================================================
   FORMAT DATE
   ===================================================== */

function formatDate(date) {

    const parts =
        date.split("-");


    return (
        parts[2] +
        "/" +
        parts[1] +
        "/" +
        parts[0]
    );

}


/* =====================================================
   REMINDER TEXT
   ===================================================== */

function getReminderText(minutes) {

    if (minutes === 0) {

        return "Reminder at scheduled time";

    }


    if (minutes === 1440) {

        return "Reminder 1 day before";

    }


    if (minutes === 60) {

        return "Reminder 1 hour before";

    }


    return (
        "Reminder " +
        minutes +
        " minutes before"
    );

}


/* =====================================================
   DELETE WORK
   ===================================================== */

function deleteWork(id) {

    let works =
        JSON.parse(
            localStorage.getItem("genieWorks")
        ) || [];


    works =
        works.filter(function (work) {

            return work.id !== id;

        });


    localStorage.setItem(
        "genieWorks",
        JSON.stringify(works)
    );


    displayWorks();

}


/* =====================================================
   LOAD WORK WHEN PAGE OPENS
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayWorks();

    }
);