let icon = document.querySelector(".icon");
let links = document.querySelector(".links");

icon.addEventListener("click", () => {
  links.classList.toggle("show-links");

  // console.log(links);
  if (links.classList.contains("show-links")) {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

// typing animation start
const text =
  "I’m a web developer who crafts responsive, user-friendly websites. I turn ideas into fast, modern digital experiences!";
const typewriter = document.getElementById("typewriter");
const container = document.getElementById("typewriterContainer");

let i = 0;
let typing = true;
let isPaused = false;

const speed = 60;
const eraseSpeed = 30;
const delay = 1000;

container.addEventListener("mouseenter", () => (isPaused = true));
container.addEventListener("mouseleave", () => (isPaused = false));

function typeLoop() {
  if (isPaused) {
    setTimeout(typeLoop, 100);
    return;
  }

  if (typing) {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(typeLoop, speed);
    } else {
      typing = false;
      setTimeout(typeLoop, delay);
    }
  } else {
    if (i > 0) {
      typewriter.textContent = text.substring(0, i - 1);
      i--;
      setTimeout(typeLoop, eraseSpeed);
    } else {
      typing = true;
      setTimeout(typeLoop, 500);
    }
  }
}

typeLoop();
// typing animation end

ScrollReveal().reveal(".type", { delay: 2000 });
ScrollReveal().reveal(".prj", { easing: "ease-in" });
ScrollReveal().reveal(".skill", { easing: "ease-in" });

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_1x46nvm", "template_qsltp67", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again later.");
      });
  });

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  //form validation
  alert("Message Sent!");

  this.reset(); // Clears the form after sending
});
