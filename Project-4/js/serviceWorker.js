import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

registerRoute(
  ({ request }) => request.destination === "document",
  new StaleWhileRevalidate()
);
