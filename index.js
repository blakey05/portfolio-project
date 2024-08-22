document.addEventListener("DOMContentLoaded", function() {
    const text = "Blake Watton-Dirkse";
    const speed = 100; // Speed of typing in milliseconds
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    // Check localStorage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        const navbar = document.querySelector(".navbar");
        if (navbar) navbar.classList.add("dark-mode");

        const navbarLinks = document.querySelectorAll(".navbar-right a");
        navbarLinks.forEach(link => link.classList.add("dark-mode"));

        // Handle dark mode for contact page specific elements
        const contactForm = document.querySelector(".contact-form");
        if (contactForm) {
            contactForm.classList.add("dark-mode");
            const inputs = contactForm.querySelectorAll("input, textarea");
            inputs.forEach(input => input.classList.add("dark-mode"));
        }
    }

    document.getElementById("dark-mode-toggle").addEventListener("click", function() {
        const darkModeEnabled = document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");

        const navbar = document.querySelector(".navbar");
        if (navbar) navbar.classList.toggle("dark-mode");

        const navbarLinks = document.querySelectorAll(".navbar-right a");
        navbarLinks.forEach(link => link.classList.toggle("dark-mode"));

        // Handle dark mode for contact page specific elements
        const contactForm = document.querySelector(".contact-form");
        if (contactForm) {
            contactForm.classList.toggle("dark-mode");
            const inputs = contactForm.querySelectorAll("input, textarea");
            inputs.forEach(input => input.classList.toggle("dark-mode"));
        }
    });
});
