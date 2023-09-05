// JavaScript code to add interactivity to the "Read More" button

// Function to toggle the visibility of additional information
function toggleAdditionalInfo() {
    const additionalInfo = document.getElementById("additional-info");
    const readMoreButton = document.getElementById("read-more-button");

    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        additionalInfo.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
}

// Add a click event listener to the "Read More" button
const readMoreButton = document.getElementById("read-more-button");
readMoreButton.addEventListener("click", toggleAdditionalInfo);
