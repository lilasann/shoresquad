// ShoreSquad App JS
// Accessibility: Focus on join button on load
window.addEventListener('DOMContentLoaded', () => {
  const joinBtn = document.getElementById('join-btn');
  if (joinBtn) joinBtn.focus();

  // Join form submission
  const joinForm = document.getElementById('join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const date = document.getElementById('event-date').value;
      alert(`Thanks, ${name}! You’re signed up for the ${date} cleanup. We’ll email you at ${email}.`);
      joinForm.reset();
    });
  }

  // OpenStreetMap integration with Leaflet.js
  const mapContainer = document.getElementById('map-container');
  if (mapContainer) {
    // Add Leaflet CSS
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    document.head.appendChild(leafletCSS);
    // Add Leaflet JS
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    leafletScript.onload = () => {
      const map = L.map('map-container').setView([1.248222, 103.822778], 16); // 1°14'53.6"N 103°49'22.0"E
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
      L.marker([1.248222, 103.822778]).addTo(map)
        .bindPopup('Palawan Beach')
        .openPopup();
    };
    document.body.appendChild(leafletScript);
  }

  // Hardcoded weather already in HTML

  // Placeholder: Load events
  const eventList = document.getElementById('event-list');
  if (eventList) {
    eventList.innerHTML = '<li>World Oceans Day Cleanup - June 8</li><li>Sunset Beach Sweep - June 15</li>';
  }

  // Accessibility: Focus management for navigation
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('focus', () => link.style.outline = '2px solid var(--sand-yellow)');
    link.addEventListener('blur', () => link.style.outline = 'none');
  });
});
