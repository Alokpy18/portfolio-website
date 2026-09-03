// ---------- Typing animation ----------
const typingText = document.getElementById("typing");
const roles = ["Aspiring Data Analyst", "Python Enthusiast", "Data Visualization Learner"];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeEffect, 1300);
      return;
    }
  } else {
    typingText.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 85);
}

typeEffect();

// ---------- Mobile navigation ----------
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Demo contact form ----------
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("formMessage").textContent =
    "Thanks! Please connect with me through LinkedIn or email.";
  event.target.reset();
});
