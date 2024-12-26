// Initialize the map and set its view to Wellington, New Zealand (default)
const map = L.map("map").setView([-41.28664, 174.77557], 10); // Wellington coordinates

// Add a tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker at Wellington to greet users
L.marker([-41.28664, 174.77557]).addTo(map).bindPopup("Kia ora!").openPopup();

// Handle the Open Map button click
document.getElementById("openMapBtn").addEventListener("click", function () {
  // Get the latitude and longitude values
  const latitude = parseFloat(document.getElementById("latitude").value);
  const longitude = parseFloat(document.getElementById("longitude").value);

  // Check if the input values are valid
  if (isNaN(latitude) || isNaN(longitude)) {
    alert("Please enter valid latitude and longitude.");
    return;
  }

  // Update the map view to the entered coordinates
  map.setView([latitude, longitude], 13);

  // Add a marker at the entered coordinates
  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(
      `Ahopae (Latitude): ${latitude}<br>Ahopou (Longitude): ${longitude}`
    )
    .openPopup();
});
