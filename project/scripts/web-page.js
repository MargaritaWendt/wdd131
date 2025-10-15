const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModifiedP = document.querySelector("#lastModified");
lastModifiedP.textContent = document.lastModified;

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        menuButton.textContent = "≡";
    } else {
        navMenu.style.display = "flex";
        menuButton.textContent = "❌";
    }
});

// Array

const hobbieOptions = [
    "Hiking in the Black Forest",
    "Attending cultural events",
    "Practicing German or Spanish",
    "Joining local food festivals",
    "Other activities"
];

const hobbieSelect = document.querySelector("#hobbie");
hobbieOptions.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    hobbieSelect.appendChild(opt);
});

// localStorage
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#fullname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const hobbie = document.querySelector("#hobbie").value;

    if (!name || !email || !hobbie) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // User Object
    const userData = { name, email, hobbie };

    // Keept localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // template literals
    alert(`Thanks, ${name}! We'll keep you updated about ${hobbie.toLowerCase()} at ${email}.`);

    form.reset();
});
