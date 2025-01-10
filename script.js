// JavaScript for AZoom Car Rental Website

document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const rentalPeriod = document.getElementById("rentalPeriod").value;
    const carModel = document.getElementById("carModel").value;
    const creditCard = document.getElementById("creditCard").value;

    // Basic validation for credit card
    if (!/^[0-9]{16}$/.test(creditCard)) {
        alert("Please enter a valid 16-digit credit card number.");
        return;
    }

    // Confirmation message
    alert(`Thank you for reserving a ${carModel} for a ${rentalPeriod} rental period.`);

    // Optionally, you can reset the form after submission
    this.reset();
});