const pages = {
  login: document.getElementById("loginPage"),
  landing: document.getElementById("landingPage"),
  booking: document.getElementById("bookingPage")
};

function showPage(page) {
  Object.values(pages).forEach(p => p.classList.remove("active"));
  pages[page].classList.add("active");
}

function goToLanding() {
  showPage("landing");
}

function openBooking(type) {
  const title = document.getElementById("bookingTitle");
  title.textContent = type === "flight"
    ? "Flight Booking"
    : "Hotel Booking";

  showPage("booking");
}
