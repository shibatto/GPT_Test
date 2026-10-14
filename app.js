let count = 0;
const message = document.querySelector('#message');
document.querySelector('#hello').addEventListener('click', () => {
  count += 1;
  message.textContent = `Cześć! 👋 Aplikacja działa. Liczba powitań: ${count}.`;
});

let installPrompt;
const installButton = document.querySelector('#install');
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.hidden = false;
});
installButton.addEventListener('click', async () => {
  if (!installPrompt) return;
  await installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = undefined;
  installButton.hidden = true;
});
window.addEventListener('appinstalled', () => {
  installPrompt = undefined;
  installButton.hidden = true;
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((error) => {
      console.warn('Tryb offline jest niedostępny:', error);
    });
  });
}
