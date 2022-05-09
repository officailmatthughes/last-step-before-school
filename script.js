// I'm using a toggler to show and hide everything
// inside the reason container id on the index file

function toggleReasons() {
    // Get my element by ID
    var reasonContainer = document.getElementById("reason-container");

    // Toggle
    if (reasonContainer.style.display === "none") {
        reasonContainer.style.display = "block";
    } else {
        reasonContainer.style.display = "none";
    }
}