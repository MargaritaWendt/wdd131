const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModifiedP = document.querySelector("#lastModified");
lastModifiedP.textContent = document.lastModified; 
