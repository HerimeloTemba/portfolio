const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
/* =========================
   BODABODA PROJECT GALLERY
========================= */

const bodabodaImages = [
    "assets/images/projects/bodaboda/login.png",
    "assets/images/projects/bodaboda/rider-dashboard.png",
    "assets/images/projects/bodaboda/owner-dashboard.png",
    "assets/images/projects/bodaboda/loan-application.png",
    "assets/images/projects/bodaboda/expenses.png",
    "assets/images/projects/bodaboda/ai-recommendation.png",
    "assets/images/projects/bodaboda/financial-report.png"
];

let bodabodaCurrentImage = 0;


function setBodabodaImage(index) {

    if (index < 0 || index >= bodabodaImages.length) {
        return;
    }

    const mainImage =
        document.getElementById("bodaboda-main-image");

    if (!mainImage) {
        return;
    }

    mainImage.style.opacity = "0";

    setTimeout(() => {

        mainImage.src = bodabodaImages[index];

        mainImage.style.opacity = "1";

    }, 150);


    bodabodaCurrentImage = index;


    const thumbnails =
        document.querySelectorAll(".project-thumbnail");

    thumbnails.forEach((thumbnail, i) => {

        thumbnail.classList.toggle(
            "active",
            i === index
        );

    });

}


function changeBodabodaImage(direction) {

    let newIndex =
        bodabodaCurrentImage + direction;


    if (newIndex < 0) {
        newIndex = bodabodaImages.length - 1;
    }


    if (newIndex >= bodabodaImages.length) {
        newIndex = 0;
    }


    setBodabodaImage(newIndex);
}

/* =========================
   KEVOO WELDING GALLERY
========================= */

const kevooImages = [
    "assets/images/projects/kevoo/home-dashboard.png",
    "assets/images/projects/kevoo/about.png",
    "assets/images/projects/kevoo/service.png",
    "assets/images/projects/kevoo/products.png",
    "assets/images/projects/kevoo/contacts.png"
];

let kevooCurrentImage = 0;


function setKevooImage(index) {

    const image =
        document.getElementById("kevoo-main-image");

    if (!image) {
        return;
    }

    image.style.opacity = "0";

    setTimeout(() => {

        image.src = kevooImages[index];

        image.style.opacity = "1";

    }, 150);


    kevooCurrentImage = index;


    const thumbnails =
        document.querySelectorAll(
            ".project-featured .project-thumbnail"
        );

    thumbnails.forEach((thumbnail, i) => {

        thumbnail.classList.toggle(
            "active",
            i === index
        );

    });

}


function changeKevooImage(direction) {

    let newIndex =
        kevooCurrentImage + direction;


    if (newIndex < 0) {

        newIndex =
            kevooImages.length - 1;

    }


    if (newIndex >= kevooImages.length) {

        newIndex = 0;

    }


    setKevooImage(newIndex);

}
/* =========================
   CONTACT FORM - FORMSPREE
========================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector(".contact-submit");

        const originalButtonText =
            submitButton.innerHTML;

        // Disable button while sending
        submitButton.disabled = true;
        submitButton.innerHTML =
            'Sending... <span>→</span>';

        try {

            // Honeypot spam protection
            const honeypot =
                contactForm.querySelector("#website");

            if (honeypot && honeypot.value.trim() !== "") {

                console.warn("Spam submission blocked.");

                submitButton.innerHTML =
                    originalButtonText;

                submitButton.disabled = false;

                return;
            }

            // Collect form data
            const formData =
                new FormData(contactForm);

            // Send to Formspree
            const response =
                await fetch(contactForm.action, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                });

            if (response.ok) {

                // Clear form
                contactForm.reset();

                // Success message
                submitButton.innerHTML =
                    'Message Sent ✓';

                submitButton.classList.add("success");

                // Restore button after 4 seconds
                setTimeout(() => {

                    submitButton.innerHTML =
                        originalButtonText;

                    submitButton.classList.remove("success");

                    submitButton.disabled = false;

                }, 4000);

            } else {

                throw new Error(
                    "Form submission failed"
                );

            }

        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );

            // Error message
            submitButton.innerHTML =
                'Failed to Send';

            submitButton.classList.add("error");

            // Restore button after 4 seconds
            setTimeout(() => {

                submitButton.innerHTML =
                    originalButtonText;

                submitButton.classList.remove("error");

                submitButton.disabled = false;

            }, 4000);

        }

    });

}