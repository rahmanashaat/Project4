import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.registerRoute( // Corrected line
  ({ request }) => request.destination === "document",
  new StaleWhileRevalidate()
);