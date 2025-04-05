function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/;
    const successMessage = document.getElementById('successMessage');
    const spinner = document.getElementById('spinner');

    if (name === "" || email === "" || phone === "") {
        alert("All fields must be filled out!");
        return false;
    }

    if (name.length < 2) {
        alert("Please enter a valid name.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (e.g. 123-456-7890).");
        return false;
    }

    // ✅ Show spinner briefly before success message
    if (spinner) {
        spinner.style.display = "block";
    }

    setTimeout(() => {
        if (spinner) spinner.style.display = "none";
        if (successMessage) successMessage.style.display = "block";
    }, 1000); // Simulate processing delay

    return false; // Stop actual form submission
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
