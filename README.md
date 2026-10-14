# Hello World 👋

Prosta strona i aplikacja PWA na telefon. Bez kont, backendu, bibliotek i płatnych usług. Przycisk wyświetla powitanie i liczy kliknięcia (licznik zeruje się po ponownym otwarciu).

## Lokalnie

W katalogu repozytorium uruchom:

```sh
python3 -m http.server 8000
```

Otwórz `http://localhost:8000`. Zatrzymaj serwer przez Ctrl+C. Service worker działa na localhost i HTTPS. Nie otwieraj strony bezpośrednio jako pliku.

## Publikacja na GitHub Pages

1. Zapisz pliki w commicie i wyślij je do gałęzi `main` repozytorium `shibatto/GPT_Test` na GitHub.
2. Na GitHub wejdź w **Settings → Pages → Build and deployment → Source** i wybierz **GitHub Actions**.
3. W **Actions** uruchom **Publish GitHub Pages → Run workflow** dla `main` (kolejne zmiany na `main` publikują się automatycznie).
4. Po udanym wdrożeniu adres znajdziesz w Settings → Pages i wyniku workflow. Standardowy adres to `https://shibatto.github.io/GPT_Test/`.

Strona jest publiczna — nie umieszczaj tutaj kluczy API ani innych sekretów. Publikacja nie następuje przez samo utworzenie plików w Codex.

## Telefon

Otwórz opublikowany adres HTTPS:

- **Android / Chrome:** użyj przycisku „Zainstaluj aplikację”, jeśli przeglądarka go udostępni, lub menu Chrome → Zainstaluj aplikację / Dodaj do ekranu głównego.
- **iPhone / Safari:** Udostępnij → Dodaj do ekranu początkowego.

To aplikacja PWA instalowana z przeglądarki, bez APK i publikacji w App Store czy Google Play. Po pierwszym udanym załadowaniu i zapisaniu plików przez service worker działa też offline. Możesz sprawdzić to, zamykając aplikację, odłączając internet i otwierając ją ponownie.

Przy zmianie plików zwiększ wersję `CACHE` w `sw.js`, aby odświeżyć kopię offline. Zamknij stare okna aplikacji i otwórz ją ponownie, aby nowy service worker przejął obsługę.
