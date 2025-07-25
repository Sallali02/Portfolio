document.addEventListener('DOMContentLoaded', () => {
  // --- Name Bounce Animation ---
  const name = document.querySelector('.site-title');

  function bounceName() {
    name.style.animation = 'bounce 1.5s infinite alternate ease-in-out';
  }

  bounceName();

  // --- Typing Effect ---
  const typedText = document.querySelector(".typing");
  const words = ["Sara Allali"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      charIndex--;
      typedText.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      typedText.textContent = currentWord.substring(0, charIndex);
    }

    let delay = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
    }

    setTimeout(type, delay);
  }

  type();

  // --- Project Filtering ---
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      projectCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // --- Back to Top Button ---
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

// ✅ Contact Form Submission + Thank You Message
const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent normal page reload

    const formData = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      thankYouMessage.style.display = "block"; // Show success message
      contactForm.reset(); // Clear form fields
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  });
}


});
