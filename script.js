const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const activePage = () => {
  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');
  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);
  navLinks.forEach(link => link.classList.remove('active'));
  barsBox.classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active');
  }, 1100);
  sections.forEach(section => section.classList.remove('active'));
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');
      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');
    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
  }
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  fetch("https://formspree.io/f/xeolqrkw", {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  }).then(response => {
    if (response.ok) {
      window.location.href = "thankyou.html";
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  }).catch(() => {
    alert("Error! Check your internet connection.");
  });
});
