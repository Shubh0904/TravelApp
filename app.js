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
    ? "✈️ Flight Booking"
    : "🏨 Hotel Booking";

  showPage("booking");
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
  // Auto-focus first input on login page
  const loginInput = document.querySelector('#loginPage input[type="email"]');
  if (loginInput) {
    setTimeout(() => loginInput.focus(), 500);
  }

  // Add swap functionality for origin/destination
  const swapBtn = document.querySelector('.swap-btn');
  if (swapBtn) {
    swapBtn.addEventListener('click', function() {
      const inputs = document.querySelectorAll('.search-card .field-group input[type="text"]');
      if (inputs.length >= 2) {
        const temp = inputs[0].value;
        inputs[0].value = inputs[1].value;
        inputs[1].value = temp;
      }
    });
  }

  // Add enter key support for login
  document.querySelectorAll('#loginPage input').forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        goToLanding();
      }
    });
  });
});
