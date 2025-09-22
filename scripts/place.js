const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModifiedP = document.querySelector("#lastModified");
lastModifiedP.textContent = document.lastModified; 

let temperature = 5;
let windSpeed = 15;      

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

const windchillElement = document.createElement("p");

if (temperature <= 10 && windSpeed > 4.8) {
    windchillElement.textContent = `${calculateWindChill(
        temperature,
        windSpeed
    )} °C`;
} else {
    windchillElement.textContent = "N/A";
}

document.querySelector(".calculation").appendChild(windchillElement);

