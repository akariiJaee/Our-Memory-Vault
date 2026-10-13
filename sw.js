
self.addEventListener("push", function (event) {
  let data = {};

  try {
    data = event.data ? event.data.json() : {};
  } catch (error) {
    data = {
      body: event.data ? event.data.text() : "You have a new memory."
    };
  }

  const title = data.title || "Our Memory Vault";
  const options = {
    body: data.body || "You have a new memory waiting for you.",
    icon: "./icons/icon-192.png",
    badge: "./icons/icon-192.png",
    data: {
      url: data.url || "./"
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  const targetUrl = new URL(
    event.notification.data?.url || "./",
    self.registration.scope
  ).href;

  event.waitUntil(
    clients.matchAll({
      type: "window",
      includeUncontrolled: true
    }).then(function (windowClients) {
      for (const client of windowClients) {
        if (client.url === targetUrl && "focus" in client) {
          return client.focus();
        }
      }

      return clients.openWindow(targetUrl);
    })
  );
});
