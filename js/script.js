document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('responsive');
    });
});


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    const error = document.getElementById("form-error");
    error.textContent = "";

    if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") {
        error.textContent = "All fields except Special Requests are required.";
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        error.textContent = "Please enter a valid email address.";
        return false;
    }

    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
        error.textContent="Please enter a valid 11-digit phone number.";
        return false;
    }

    return true;
}


function validateContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const error = document.getElementById('contact-form-error');

    error.textContent = ""; 
    if (name === "" || email === "" || message === "") {
        error.textContent = "All fields are required.";
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        error.textContent = "Please enter a valid email address.";
        return false;
    }

    return true;
}

