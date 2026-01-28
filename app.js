const searchBtn = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;

  if (!from || !to || !date) {
    alert("Please fill all fields");
    return;
  }

  resultsDiv.innerHTML = "<p>Searching flights...</p>";

  // Mock data (replace with backend API later)
  setTimeout(() => {
    const flights = [
      {
        airline: "IndiGo",
        price: "₹4,500",
        duration: "2h 10m",
        link: "#"
      },
      {
        airline: "Air India",
        price: "₹5,200",
        duration: "2h 30m",
        link: "#"
      }
    ];

    renderFlights(flights);
  }, 800);
});

function renderFlights(flights) {
  resultsDiv.innerHTML = "";

  flights.forEach(flight => {
    const card = document.createElement("div");
    card.className = "flight-card";

    card.innerHTML = `
      <div>
        <strong>${flight.airline}</strong><br/>
        <small>${flight.duration}</small>
      </div>
      <div>
        <strong>${flight.price}</strong><br/>
        <a href="${flight.link}" target="_blank">Book</a>
      </div>
    `;

    resultsDiv.appendChild(card);
  });
}
