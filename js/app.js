// ShoreSquad App JS
// Accessibility: Focus on join button on load
window.addEventListener('DOMContentLoaded', () => {
  const joinBtn = document.getElementById('join-btn');
  if (joinBtn) joinBtn.focus();

  // Placeholder: Load map (to be replaced with real map integration)
  const mapContainer = document.getElementById('map-container');
  if (mapContainer) mapContainer.textContent = 'Interactive map coming soon!';

  // Placeholder: Load weather (to be replaced with real API)
  const weatherInfo = document.getElementById('weather-info');
  if (weatherInfo) weatherInfo.textContent = 'Weather data will appear here.';

  // Placeholder: Load events
  const eventList = document.getElementById('event-list');
  if (eventList) {
    eventList.innerHTML = '<li>World Oceans Day Cleanup - June 8</li><li>Sunset Beach Sweep - June 15</li>';
  }

  // Join button interaction
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      alert('Thanks for joining! We’ll notify you about upcoming cleanups.');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Join button interaction
  const joinBtn = document.getElementById('join-btn');
  joinBtn.addEventListener('click', () => {
    alert('Thanks for joining! Stay tuned for upcoming cleanups.');
  });

  // Placeholder: Load map and weather data
  document.getElementById('map-container').textContent = 'Interactive map coming soon!';
  document.getElementById('weather-info').textContent = 'Weather data will appear here.';

  // Accessibility: Focus management for navigation
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('focus', () => link.style.outline = '2px solid var(--sand-yellow)');
    link.addEventListener('blur', () => link.style.outline = 'none');
  });
});
