self.addEventListener('push', (event) => {
  const data = event.data.json();
  const { title, body } = data.notification;

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: 'caminho/para/icone.png', // Substitua pelo caminho para o ícone da notificação
    })
  );
});