document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const privacyPolicy = document.getElementById("privacyPolicy");
  const nav = document.querySelector("nav");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!name.value.trim() || !email.value.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    if (!privacyPolicy.checked) {
      alert("You must accept the Privacy Policy!");
      return;
    }

    alert("We will come back with feedback");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      nav.style.background = "transparent";
    } else {
      nav.style.background = "#282829";
    }
  });
});
