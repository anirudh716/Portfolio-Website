var typed1 = new Typed("#element", {
  strings: ["Web Developer,", "Problem Solver."],
  typeSpeed: 50,
  onComplete: function (self) {
    self.cursor.remove();
    var typed2 = new Typed("#element2", {
      strings: ["Welcome To My Portfolio."],
      typeSpeed: 50,
    });
  },
});
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const content = document.querySelector(".content");

  function updateNavbar() {
    if (window.scrollY > 0) {
      navbar.classList.add("nav-colored");
    } else {
      navbar.classList.remove("nav-colored");
    }
  }

  window.addEventListener("scroll", updateNavbar);
  updateNavbar(); // Initial call to set the initial state based on scroll position
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz5H9bontofmbYOFdBZGq-i35cklkIticIRfv9vJqX8m0U_5FsdtmvBQiqynmbsRJnY/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
