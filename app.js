let pages = {};

// Initialize pages object after DOM loads
function initPages() {
  pages = {
    loginPage: document.getElementById("loginPage"),
    dashboardPage: document.getElementById("dashboardPage"),
    bookingPage: document.getElementById("bookingPage"),
    claimPage: document.getElementById("claimPage"),
    yourClaims: document.getElementById("yourClaims"),
    accountSettings: document.getElementById("accountSettings")
  };
}

function showPage(pageName) {
  // Make sure pages are initialized
  if (!pages.loginPage) {
    initPages();
  }
  
  console.log('Showing page:', pageName);
  
  // Hide all pages
  Object.values(pages).forEach(page => {
    if (page) page.classList.remove("active");
  });
  
  // Show requested page
  if (pages[pageName]) {
    pages[pageName].classList.add("active");
    console.log('Page activated:', pageName);
  } else {
    console.error('Page not found:', pageName);
  }
  
  // Close any open account menus
  closeAllAccountMenus();
}

function goToDashboard() {
  showPage("dashboardPage");
}

function openBooking(type) {
  const titleMap = {
    flight: "✈️ Book Flight",
    hotel: "🏨 Book Hotel",
    cab: "🚖 Book Cab"
  };
  
  const breadcrumbMap = {
    flight: "Flights",
    hotel: "Hotels",
    cab: "Cabs"
  };
  
  // Update title
  const title = document.getElementById("bookingTitle");
  if (title) {
    title.textContent = titleMap[type] || "Book";
  }
  
  // Update breadcrumb
  const breadcrumb = document.getElementById("bookingBreadcrumb");
  if (breadcrumb) {
    breadcrumb.textContent = breadcrumbMap[type] || "Booking";
  }
  
  // Load appropriate form
  loadBookingForm(type);
  
  showPage("bookingPage");
}

function loadBookingForm(type) {
  const container = document.getElementById("bookingFormContainer");
  if (!container) return;
  
  let formHTML = "";
  
  if (type === "flight") {
    formHTML = `
      <div class="form-grid">
        <div class="form-section">
          <label class="form-label">From</label>
          <input type="text" class="form-input" placeholder="Mumbai (BOM)" />
        </div>
        
        <div class="form-section">
          <label class="form-label">To</label>
          <input type="text" class="form-input" placeholder="Delhi (DEL)" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Departure Date</label>
          <input type="date" class="form-input" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Return Date</label>
          <input type="date" class="form-input" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Class</label>
          <select class="form-input">
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>
        
        <div class="form-section">
          <label class="form-label">Passengers</label>
          <select class="form-input">
            <option>1 Passenger</option>
            <option>2 Passengers</option>
            <option>3 Passengers</option>
            <option>4+ Passengers</option>
          </select>
        </div>
      </div>
      
      <div class="form-actions">
        <button class="btn-secondary" onclick="showPage('dashboardPage')">Cancel</button>
        <button class="btn-primary">
          <span>Search Flights</span>
          <span class="arrow">→</span>
        </button>
      </div>
    `;
  } else if (type === "hotel") {
    formHTML = `
      <div class="form-grid">
        <div class="form-section">
          <label class="form-label">Destination</label>
          <input type="text" class="form-input" placeholder="City or Hotel Name" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Check-in Date</label>
          <input type="date" class="form-input" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Check-out Date</label>
          <input type="date" class="form-input" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Rooms</label>
          <select class="form-input">
            <option>1 Room</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
            <option>4+ Rooms</option>
          </select>
        </div>
        
        <div class="form-section">
          <label class="form-label">Guests</label>
          <select class="form-input">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>
        </div>
        
        <div class="form-section">
          <label class="form-label">Star Rating</label>
          <select class="form-input">
            <option>Any</option>
            <option>3 Star</option>
            <option>4 Star</option>
            <option>5 Star</option>
          </select>
        </div>
      </div>
      
      <div class="form-actions">
        <button class="btn-secondary" onclick="showPage('dashboardPage')">Cancel</button>
        <button class="btn-primary">
          <span>Search Hotels</span>
          <span class="arrow">→</span>
        </button>
      </div>
    `;
  } else if (type === "cab") {
    formHTML = `
      <div class="form-grid">
        <div class="form-section">
          <label class="form-label">Pickup Location</label>
          <input type="text" class="form-input" placeholder="Enter pickup address" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Drop-off Location</label>
          <input type="text" class="form-input" placeholder="Enter destination" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Pickup Date</label>
          <input type="date" class="form-input" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Pickup Time</label>
          <input type="time" class="form-input" />
        </div>
        
        <div class="form-section">
          <label class="form-label">Cab Type</label>
          <select class="form-input">
            <option>Sedan</option>
            <option>SUV</option>
            <option>Luxury</option>
          </select>
        </div>
        
        <div class="form-section">
          <label class="form-label">Passengers</label>
          <select class="form-input">
            <option>1-2 Passengers</option>
            <option>3-4 Passengers</option>
            <option>5+ Passengers</option>
          </select>
        </div>
      </div>
      
      <div class="form-actions">
        <button class="btn-secondary" onclick="showPage('dashboardPage')">Cancel</button>
        <button class="btn-primary">
          <span>Search Cabs</span>
          <span class="arrow">→</span>
        </button>
      </div>
    `;
  }
  
  container.innerHTML = formHTML;
}

function openClaim(type) {
  const titleMap = {
    "petty-cash": "💵 Petty Cash Claim",
    "reimbursement": "💳 Re-allocation Reimbursement"
  };
  
  const breadcrumbMap = {
    "petty-cash": "Petty Cash Claims",
    "reimbursement": "Re-allocation Reimbursement"
  };
  
  // Update title
  const title = document.getElementById("claimTitle");
  if (title) {
    title.textContent = titleMap[type] || "File Claim";
  }
  
  // Update breadcrumb
  const breadcrumb = document.getElementById("claimBreadcrumb");
  if (breadcrumb) {
    breadcrumb.textContent = breadcrumbMap[type] || "File Claim";
  }
  
  // Update claim type dropdown
  const claimTypeSelect = document.getElementById("claimType");
  if (claimTypeSelect) {
    claimTypeSelect.value = type === "petty-cash" ? "Petty Cash" : "Re-allocation Reimbursement";
  }
  
  showPage("claimPage");
}

// Account menu toggle
function toggleAccountMenu(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  // Find the account menu relative to the clicked dropdown
  const dropdown = event ? event.currentTarget : null;
  const menu = dropdown ? dropdown.nextElementSibling : null;
  
  if (menu && menu.classList.contains('account-menu')) {
    // Close all other menus first
    document.querySelectorAll('.account-menu').forEach(m => {
      if (m !== menu) {
        m.classList.remove('show');
      }
    });
    
    // Toggle this menu
    menu.classList.toggle('show');
    
    // Toggle dropdown arrow
    if (dropdown) {
      dropdown.classList.toggle('active');
    }
  }
}

function closeAllAccountMenus() {
  document.querySelectorAll('.account-menu').forEach(menu => {
    menu.classList.remove('show');
  });
  document.querySelectorAll('.account-dropdown').forEach(dropdown => {
    dropdown.classList.remove('active');
  });
}

// File upload handler
function handleFileUpload(input) {
  const fileName = document.getElementById('uploadedFileName');
  if (input.files && input.files[0]) {
    fileName.textContent = `✓ ${input.files[0].name}`;
    fileName.style.display = 'block';
  }
}

// Submit claim
function submitClaim() {
  alert('Claim submitted successfully! It will be reviewed by the moderator.');
  showPage('yourClaims');
}

// Close account menu when clicking outside
document.addEventListener('click', function(event) {
  const accountSections = document.querySelectorAll('.account-section');
  let clickedInside = false;
  
  accountSections.forEach(section => {
    if (section.contains(event.target)) {
      clickedInside = true;
    }
  });
  
  if (!clickedInside) {
    closeAllAccountMenus();
  }
});

// Auto-focus first input on login page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize pages
  initPages();
  
  const loginInput = document.querySelector('#loginPage input[type="email"]');
  if (loginInput) {
    setTimeout(() => loginInput.focus(), 500);
  }

  // Add enter key support for login
  document.querySelectorAll('#loginPage input').forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        goToDashboard();
      }
    });
  });
});
