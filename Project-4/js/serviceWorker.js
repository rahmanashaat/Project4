// Import the necessary modules from Workbox
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Event listener for Service Worker installation
self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

// Register a route to handle document requests with StaleWhileRevalidate strategy
registerRoute(
  ({ request }) => request.destination === "document", // Match all document requests
  new StaleWhileRevalidate() // Use StaleWhileRevalidate strategy
);
