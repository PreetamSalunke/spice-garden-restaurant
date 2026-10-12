
/* =========================================
   SPICE GARDEN - MOBILE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) {
        return;
    }

    // Open / close mobile navigation
    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    // Close navigation after selecting a link
    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

    // Close menu when switching back to desktop
    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});


/* =========================================
   CONTACT FORM - DEMO SUCCESS POPUP
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contact-form");
    const successPopup = document.getElementById("success-popup");
    const closeButton = document.getElementById("success-close");

    if (!contactForm || !successPopup || !closeButton) {
        return;
    }

    let previousFocus = null;

    // Show popup after valid form submission
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        previousFocus = document.activeElement;

        successPopup.hidden = false;

        document.body.style.overflow = "hidden";

        contactForm.reset();

        closeButton.focus();

    });

    // Close popup
    function closePopup() {

        successPopup.hidden = true;

        document.body.style.overflow = "";

        if (previousFocus &&
            typeof previousFocus.focus === "function") {
            previousFocus.focus();
        }

    }

    // Close with OK button
    closeButton.addEventListener("click", closePopup);

    // Close when clicking outside popup
    successPopup.addEventListener("click", function (event) {

        if (event.target === successPopup) {
            closePopup();
        }

    });

    // Close using Escape key and keep focus inside dialog
    document.addEventListener("keydown", function (event) {

        if (successPopup.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closePopup();
        }

        if (event.key === "Tab") {
            event.preventDefault();
            closeButton.focus();
        }

    });

});

